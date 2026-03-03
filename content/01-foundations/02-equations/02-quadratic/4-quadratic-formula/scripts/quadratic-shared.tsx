import { getRandomLatinLetter, gcd, isPerfectSquare, simplifyFraction, simplifySqrt } from '@open-math/shared/utils';

/** Render √n as simplified LaTeX: √n, 2√3, etc. */
export function sqrtLatex(n: number): string {
  const [k, r] = simplifySqrt(n);
  if (r === 1) return `${k}`;
  if (k === 1) return `\\sqrt{${r}}`;
  return `${k}\\sqrt{${r}}`;
}

//
// LaTeX helpers
//

/** Render a fraction (or integer when d=1) as LaTeX. */
export function fractionLatex(n: number, d: number): string {
  const [sn, sd] = simplifyFraction(n, d);
  if (sd === 1) return sn.toString();
  const sign = sn < 0 ? '-' : '';
  return `${sign}\\frac{${Math.abs(sn)}}{${sd}}`;
}

/**
 * Format `Av^highPow + Bv^lowPow + C = 0` as LaTeX.
 * Works for both quadratic (2,1) and biquadratic (4,2).
 */
export function formatTrinomial(A: number, B: number, C: number, v: string, highPow: number, lowPow: number): string {
  const parts: string[] = [];

  // Leading term: Av^highPow
  const vHigh = highPow === 1 ? v : `${v}^${highPow}`;
  if (A === 1) parts.push(vHigh);
  else if (A === -1) parts.push(`-${vHigh}`);
  else parts.push(`${A}${vHigh}`);

  // Middle term: Bv^lowPow
  if (B !== 0) {
    const vLow = lowPow === 1 ? v : `${v}^${lowPow}`;
    if (B === 1) parts.push(` + ${vLow}`);
    else if (B === -1) parts.push(` - ${vLow}`);
    else if (B > 0) parts.push(` + ${B}${vLow}`);
    else parts.push(` - ${Math.abs(B)}${vLow}`);
  }

  // Free term: C
  if (C !== 0) {
    if (C > 0) parts.push(` + ${C}`);
    else parts.push(` - ${Math.abs(C)}`);
  }

  return parts.join('') + ' = 0';
}

//
// Shared JSX builder
//

interface EquationResult {
  equation: string;
  hasRoots: boolean;
  roots: (number | string)[];
  answerLatex: string;
}

function buildProblemContent(gen: (random: ProblemRandom, v: string) => EquationResult, additionalContent?: any) {
  return defineProblemScript({
    isGenerator: true,
  })(({ random }) => {
    const v = getRandomLatinLetter(random, { casing: 'lower' });
    const eq = gen(random, v);

    const rootsCheck = eq.hasRoots ? (
      eq.roots.length === 1 ? (
        <RootsCheck has root={eq.roots[0]} />
      ) : (
        <RootsCheck has roots={eq.roots as [any, ...any[]]} />
      )
    ) : (
      <RootsCheck empty />
    );

    return {
      problemContent: (
        <>
          <ProblemDescription>
            <BlockMath>{eq.equation}</BlockMath>
          </ProblemDescription>
          {rootsCheck}
          <ProblemAnswer>
            <BlockMath>{eq.answerLatex}</BlockMath>
          </ProblemAnswer>
          {additionalContent}
        </>
      ),
    };
  });
}

//
// Quadratic tier generators
//

function genQuadraticInteger(random: ProblemRandom, v: string): EquationResult {
  const hasRoots = random.integer(1, 10) <= 7;

  if (!hasRoots) {
    const B = random.integer(-10, 10);
    const delta = random.integer(1, 5);
    const C = Math.floor((B * B) / 4) + delta;
    return {
      equation: formatTrinomial(1, B, C, v, 2, 1),
      hasRoots: false,
      roots: [],
      answerLatex: '\\text{no roots}',
    };
  }

  let r1 = random.integer(-15, 15);
  let r2 = random.integer(-15, 15);
  while (r2 === r1) r2 = random.integer(-15, 15);

  const B = -(r1 + r2);
  const C = r1 * r2;

  if (r1 > r2) [r1, r2] = [r2, r1];

  return {
    equation: formatTrinomial(1, B, C, v, 2, 1),
    hasRoots: true,
    roots: [r1, r2],
    answerLatex: `${v}_1 = ${r1}, \\enspace ${v}_2 = ${r2}`,
  };
}

function genQuadraticFraction(random: ProblemRandom, v: string): EquationResult {
  const hasRoots = random.integer(1, 10) <= 7;

  if (!hasRoots) {
    const A = random.integer(2, 6);
    let B = random.integer(-8, 8);
    while (B === 0) B = random.integer(-8, 8);
    const delta = random.integer(1, 5);
    const C = Math.sign(A) * (Math.floor((B * B) / (4 * Math.abs(A))) + delta);
    return {
      equation: formatTrinomial(A, B, C, v, 2, 1),
      hasRoots: false,
      roots: [],
      answerLatex: '\\text{no roots}',
    };
  }

  const denoms = [1, 2, 3, 4, 5];
  let d1 = denoms[random.integer(0, denoms.length - 1)];
  let d2 = denoms[random.integer(0, denoms.length - 1)];
  // Ensure at least one is a proper fraction
  if (d1 === 1 && d2 === 1) d2 = denoms[random.integer(1, denoms.length - 1)];

  let n1: number;
  do {
    n1 = random.integer(-7, 7);
  } while (n1 === 0 || gcd(Math.abs(n1), d1) !== 1);

  let n2: number;
  do {
    n2 = random.integer(-7, 7);
  } while (n2 === 0 || gcd(Math.abs(n2), d2) !== 1 || n1 * d2 === n2 * d1);

  // (v - n1/d1)(v - n2/d2) = 0 → d1·d2·v² - (n1·d2 + n2·d1)v + n1·n2 = 0
  let A = d1 * d2;
  let B = -(n1 * d2 + n2 * d1);
  let C = n1 * n2;

  const g = gcd(gcd(Math.abs(A), Math.abs(B)), Math.abs(C));
  A /= g;
  B /= g;
  C /= g;

  if (A < 0) {
    A = -A;
    B = -B;
    C = -C;
  }

  const val1 = n1 / d1;
  const val2 = n2 / d2;
  let [sn1, sd1] = simplifyFraction(n1, d1);
  let [sn2, sd2] = simplifyFraction(n2, d2);

  if (val1 > val2) {
    [sn1, sd1, sn2, sd2] = [sn2, sd2, sn1, sd1];
  }

  const root1Str = sd1 === 1 ? `${sn1}` : `${sn1}/${sd1}`;
  const root2Str = sd2 === 1 ? `${sn2}` : `${sn2}/${sd2}`;

  return {
    equation: formatTrinomial(A, B, C, v, 2, 1),
    hasRoots: true,
    roots: [root1Str, root2Str],
    answerLatex: `${v}_1 = ${fractionLatex(sn1, sd1)}, \\enspace ${v}_2 = ${fractionLatex(sn2, sd2)}`,
  };
}

function genQuadraticIrrational(random: ProblemRandom, v: string): EquationResult {
  const hasRoots = random.integer(1, 10) <= 7;

  const A = random.integer(1, 3);
  let B = random.integer(-9, 9);
  while (B === 0) B = random.integer(-9, 9);

  if (!hasRoots) {
    const delta = random.integer(1, 5);
    const minC = Math.ceil((B * B + 1) / (4 * A));
    const C = minC + delta;
    return {
      equation: formatTrinomial(A, B, C, v, 2, 1),
      hasRoots: false,
      roots: [],
      answerLatex: '\\text{no roots}',
    };
  }

  let C: number;
  let D: number;
  do {
    C = random.integer(-12, 12);
    D = B * B - 4 * A * C;
  } while (D <= 0 || isPerfectSquare(D));

  const denom = 2 * A;
  const root1 = `(${-B} + sqrt(${D})) / ${denom}`;
  const root2 = `(${-B} - sqrt(${D})) / ${denom}`;

  // Simplify the fraction: (-B ± k√r) / denom → reduce by gcd(|-B|, k, denom)
  const [k, r] = simplifySqrt(D);
  const g2 = gcd(gcd(Math.abs(-B), k), denom);
  const redB = -B / g2;
  const redK = k / g2;
  const redDenom = denom / g2;

  const sqrtPart = r === 1 ? `${redK}` : redK === 1 ? `\\sqrt{${r}}` : `${redK}\\sqrt{${r}}`;

  let answerLatex: string;
  if (redDenom === 1) {
    answerLatex = `${v}_{1,2} = ${redB} \\pm ${sqrtPart}`;
  } else {
    answerLatex = `${v}_{1,2} = \\frac{${redB} \\pm ${sqrtPart}}{${redDenom}}`;
  }

  return {
    equation: formatTrinomial(A, B, C, v, 2, 1),
    hasRoots: true,
    roots: [root1, root2],
    answerLatex,
  };
}

//
// Biquadratic tier generators
//

function genBiquadraticInteger(random: ProblemRandom, v: string): EquationResult {
  const hasRoots = random.integer(1, 10) <= 7;

  if (!hasRoots) {
    if (random.boolean()) {
      // D < 0
      const B = random.integer(-8, 8);
      const delta = random.integer(1, 5);
      const C = Math.floor((B * B) / 4) + delta;
      return {
        equation: formatTrinomial(1, B, C, v, 4, 2),
        hasRoots: false,
        roots: [],
        answerLatex: '\\text{no roots}',
      };
    } else {
      // Both t-roots negative
      const t1 = random.integer(1, 6);
      const t2 = random.integer(1, 6);
      return {
        equation: formatTrinomial(1, t1 + t2, t1 * t2, v, 4, 2),
        hasRoots: false,
        roots: [],
        answerLatex: '\\text{no roots}',
      };
    }
  }

  const x1 = random.integer(1, 7);
  const x2 = random.integer(1, 7);
  const t1 = x1 * x1;
  const t2 = x2 * x2;
  const B = -(t1 + t2);
  const C = t1 * t2;

  const rootSet = new Set<number>();
  rootSet.add(-x1);
  rootSet.add(x1);
  if (x2 !== x1) {
    rootSet.add(-x2);
    rootSet.add(x2);
  }
  const sortedRoots = [...rootSet].sort((a, b) => a - b);

  return {
    equation: formatTrinomial(1, B, C, v, 4, 2),
    hasRoots: true,
    roots: sortedRoots,
    answerLatex: sortedRoots.map((r) => `${v} = ${r}`).join(', \\enspace '),
  };
}

function genBiquadraticFraction(random: ProblemRandom, v: string): EquationResult {
  const hasRoots = random.integer(1, 10) <= 7;

  if (!hasRoots) {
    const A = random.integer(2, 6);
    let B = random.integer(-8, 8);
    while (B === 0) B = random.integer(-8, 8);
    const delta = random.integer(1, 5);
    const C = Math.sign(A) * (Math.floor((B * B) / (4 * Math.abs(A))) + delta);
    return {
      equation: formatTrinomial(A, B, C, v, 4, 2),
      hasRoots: false,
      roots: [],
      answerLatex: '\\text{no roots}',
    };
  }

  const denoms = [1, 2, 3, 4, 5];
  let q1 = denoms[random.integer(0, denoms.length - 1)];
  let q2 = denoms[random.integer(0, denoms.length - 1)];
  // Ensure at least one is a proper fraction
  if (q1 === 1 && q2 === 1) q2 = denoms[random.integer(1, denoms.length - 1)];
  let p1: number, p2: number;
  do {
    p1 = random.integer(1, 6);
  } while (gcd(p1, q1) !== 1);
  do {
    p2 = random.integer(1, 6);
  } while (gcd(p2, q2) !== 1 || (p1 === p2 && q1 === q2));

  // t = v², t1 = (p1/q1)², t2 = (p2/q2)²
  // (q1·q2)²·t² - (p1²·q2² + p2²·q1²)·t + p1²·p2² = 0
  let A = q1 * q2 * (q1 * q2);
  let B = -(p1 * p1 * q2 * q2 + p2 * p2 * q1 * q1);
  let C = p1 * p1 * p2 * p2;

  const g = gcd(gcd(Math.abs(A), Math.abs(B)), Math.abs(C));
  A /= g;
  B /= g;
  C /= g;

  const [sn1, sd1] = simplifyFraction(p1, q1);
  const [sn2, sd2] = simplifyFraction(p2, q2);

  type RootEntry = { val: number; latex: string; check: string };
  const entries: RootEntry[] = [];

  const addPair = (p: number, q: number) => {
    const posVal = p / q;
    const posLatex = q === 1 ? `${p}` : `\\frac{${p}}{${q}}`;
    const negLatex = q === 1 ? `${-p}` : `-\\frac{${p}}{${q}}`;
    const posCheck = q === 1 ? `${p}` : `${p}/${q}`;
    const negCheck = q === 1 ? `${-p}` : `-(${p}/${q})`;
    entries.push({ val: -posVal, latex: negLatex, check: negCheck });
    entries.push({ val: posVal, latex: posLatex, check: posCheck });
  };

  addPair(sn1, sd1);
  if (!(sn1 === sn2 && sd1 === sd2)) {
    addPair(sn2, sd2);
  }

  entries.sort((a, b) => a.val - b.val);

  // Deduplicate
  const unique: RootEntry[] = [];
  for (const e of entries) {
    if (unique.length === 0 || Math.abs(e.val - unique[unique.length - 1].val) > 1e-12) {
      unique.push(e);
    }
  }

  return {
    equation: formatTrinomial(A, B, C, v, 4, 2),
    hasRoots: true,
    roots: unique.map((e) => e.check),
    answerLatex: unique.map((e) => `${v} = ${e.latex}`).join(', \\enspace '),
  };
}

function genBiquadraticIrrational(random: ProblemRandom, v: string): EquationResult {
  const hasRoots = random.integer(1, 10) <= 7;

  if (!hasRoots) {
    if (random.boolean()) {
      const B = random.integer(-8, 8);
      const delta = random.integer(1, 5);
      const C = Math.floor((B * B) / 4) + delta;
      return {
        equation: formatTrinomial(1, B, C, v, 4, 2),
        hasRoots: false,
        roots: [],
        answerLatex: '\\text{no roots}',
      };
    } else {
      const t1 = random.integer(1, 8);
      const t2 = random.integer(1, 8);
      return {
        equation: formatTrinomial(1, t1 + t2, t1 * t2, v, 4, 2),
        hasRoots: false,
        roots: [],
        answerLatex: '\\text{no roots}',
      };
    }
  }

  // Allow one t-value to be a perfect square (giving integer x-roots)
  const nonSquares = [2, 3, 5, 6, 7, 8, 10, 11, 12, 13];
  const squares = [1, 4, 9];
  let t1: number, t2: number;

  if (random.integer(1, 10) <= 4) {
    // ~40% chance: one perfect square + one non-square → mixed integer & irrational roots
    t1 = squares[random.integer(0, squares.length - 1)];
    t2 = nonSquares[random.integer(0, nonSquares.length - 1)];
  } else {
    // Both non-square → all irrational roots
    const picked = random.arrayElements(nonSquares, 2, true);
    t1 = picked[0];
    t2 = picked[1];
  }
  const B = -(t1 + t2);
  const C = t1 * t2;

  const sorted = [t1, t2].sort((a, b) => a - b);

  type RootEntry = { val: number; latex: string; check: string };
  const entries: RootEntry[] = [];
  for (const t of sorted) {
    const srt = sqrtLatex(t);
    entries.push({ val: -Math.sqrt(t), latex: `-${srt}`, check: `-sqrt(${t})` });
    entries.push({ val: Math.sqrt(t), latex: `${srt}`, check: `sqrt(${t})` });
  }
  entries.sort((a, b) => a.val - b.val);

  return {
    equation: formatTrinomial(1, B, C, v, 4, 2),
    hasRoots: true,
    roots: entries.map((e) => e.check),
    answerLatex: entries.map((e) => `${v} = ${e.latex}`).join(', \\enspace '),
  };
}

//
// Exported factory functions
//

export type QuadraticTier = 'integer' | 'fraction' | 'irrational';

const quadraticGens: Record<QuadraticTier, (r: ProblemRandom, v: string) => EquationResult> = {
  integer: genQuadraticInteger,
  fraction: genQuadraticFraction,
  irrational: genQuadraticIrrational,
};

const biquadraticGens: Record<QuadraticTier, (r: ProblemRandom, v: string) => EquationResult> = {
  integer: genBiquadraticInteger,
  fraction: genBiquadraticFraction,
  irrational: genBiquadraticIrrational,
};

export function createQuadraticProblem(tier: QuadraticTier) {
  const algorithm = $CONTENT.foundations.equations.quadratic.quadraticFormula.summary.$algorithm;
  const examples = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$examples;

  return buildProblemContent(
    quadraticGens[tier],
    <>
      <ProblemHint>
        Follow the <Dep on={algorithm}>solving algorithm</Dep> for quadratic equations. If you still have questions,
        review the detailed <Ref to={examples}>worked examples</Ref>.
      </ProblemHint>
    </>,
  );
}

export function createBiquadraticProblem(tier: QuadraticTier) {
  const examples = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$biquadraticExamples;

  return buildProblemContent(
    biquadraticGens[tier],
    <>
      <ProblemHint>
        Review the detailed <Ref to={examples}>worked examples</Ref> for solving biquadratic equations.
      </ProblemHint>
    </>,
  );
}
