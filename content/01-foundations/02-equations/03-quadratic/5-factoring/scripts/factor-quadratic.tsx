import { gcd, isPerfectSquare, simplifyFraction, simplifySqrt } from '@open-math/shared/utils';
import { formatTrinomial, fractionLatex } from '../../4-quadratic-formula/scripts/quadratic-shared';

//
// Factor quadratic: given Ax² + Bx + C, find A(x - x₁)(x - x₂)
// Randomly generates integer, fraction, or irrational roots.
//

function formatFactor(n: number, d: number, v: string): string {
  const [sn, sd] = simplifyFraction(n, d);
  if (sd === 1) {
    if (sn === 0) return v;
    if (sn > 0) return `(${v} - ${sn})`;
    return `(${v} + ${-sn})`;
  }
  if (sn > 0) return `\\left(${v} - ${fractionLatex(sn, sd)}\\right)`;
  return `\\left(${v} + ${fractionLatex(-sn, sd)}\\right)`;
}

function formatFactorPlain(n: number, d: number, v: string): string {
  const [sn, sd] = simplifyFraction(n, d);
  if (sd === 1) {
    if (sn === 0) return v;
    if (sn > 0) return `(${v} - ${sn})`;
    return `(${v} + ${-sn})`;
  }
  if (sn > 0) return `(${v} - ${sn}/${sd})`;
  return `(${v} + ${-sn}/${sd})`;
}

/** Format irrational factor (v + a ± k√r) */
function formatIrrFactor(a: number, k: number, r: number, addSqrt: boolean, v: string, latex: boolean): string {
  const sqrtStr = latex ? (k === 1 ? `\\sqrt{${r}}` : `${k}\\sqrt{${r}}`) : k === 1 ? `sqrt(${r})` : `${k}*sqrt(${r})`;

  let terms = v;
  if (a > 0) terms += ` + ${a}`;
  else if (a < 0) terms += ` - ${-a}`;

  if (addSqrt) terms += ` + ${sqrtStr}`;
  else terms += ` - ${sqrtStr}`;

  return `(${terms})`;
}

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const v = 'x';
  const type = random.integer(0, 2); // 0=integer, 1=fraction, 2=irrational

  let equation: string;
  let factoredLatex: string;
  let factoredPlain: string;
  let roots: [number | string, ...(number | string)[]];
  const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;
  const factoredFormula = $CONTENT.foundations.equations.quadratic.factoring.article.$generalFactoring;
  let hint = (
    <ProblemHint>
      Find the roots using the <Dep on={quadraticFormula}>quadratic formula</Dep>. Use these roots to factor the
      quadratic trinomial via <Dep on={factoredFormula}>factoring formula</Dep>.
    </ProblemHint>
  );

  if (type === 0) {
    // Integer roots
    const A = random.integer(1, 5);
    const subType = random.integer(0, 9); // 0-1: difference of squares, 2: factor out x, 3-9: general
    let r1: number;
    let r2: number;

    if (subType <= 1) {
      // Difference of squares: r2 = -r1, so B = 0
      r1 = random.integer(1, 10);
      r2 = -r1;
    } else if (subType === 2) {
      // Factor out x: one root is 0
      r1 = 0;
      r2 = random.integer(-10, 10);
      while (r2 === 0) r2 = random.integer(-10, 10);
    } else {
      // General case
      r1 = random.integer(-10, 10);
      r2 = random.integer(-10, 10);
      while (r2 === r1) r2 = random.integer(-10, 10);
    }

    if (r1 > r2) [r1, r2] = [r2, r1];

    const B = -A * (r1 + r2);
    const C = A * r1 * r2;

    equation = formatTrinomial(A, B, C, v, 2, 1).replace(' = 0', '');

    const f1 = formatFactor(r1, 1, v);
    const f2 = formatFactor(r2, 1, v);
    factoredLatex = A === 1 ? `${f1}${f2}` : `${A}${f1}${f2}`;

    const f1p = formatFactorPlain(r1, 1, v);
    const f2p = formatFactorPlain(r2, 1, v);
    factoredPlain = A === 1 ? `${f1p}${f2p}` : `${A}${f1p}${f2p}`;

    roots = [r1, r2];

    // Detect special form for a helpful hint
    if (r1 === 0 || r2 === 0) {
      hint = (
        <ProblemHint>
          Factor out <M>x</M>.
        </ProblemHint>
      );
    } else if (r1 + r2 === 0 && A === 1) {
      hint = <ProblemHint>Use the difference of squares formula.</ProblemHint>;
    } else if (r1 + r2 === 0) {
      hint = <ProblemHint>Factor out the common factor first, then use the difference of squares formula.</ProblemHint>;
    }
  } else if (type === 1) {
    // Fraction roots
    const denoms = [2, 3, 4, 5];
    const d1 = denoms[random.integer(0, denoms.length - 1)];
    const d2 = denoms[random.integer(0, denoms.length - 1)];

    let n1: number;
    do {
      n1 = random.integer(-7, 7);
    } while (n1 === 0 || gcd(Math.abs(n1), d1) !== 1);

    let n2: number;
    do {
      n2 = random.integer(-7, 7);
    } while (n2 === 0 || gcd(Math.abs(n2), d2) !== 1 || n1 * d2 === n2 * d1);

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

    equation = formatTrinomial(A, B, C, v, 2, 1).replace(' = 0', '');

    const f1 = formatFactor(sn1, sd1, v);
    const f2 = formatFactor(sn2, sd2, v);
    factoredLatex = A === 1 ? `${f1}${f2}` : `${A}${f1}${f2}`;

    const f1p = formatFactorPlain(sn1, sd1, v);
    const f2p = formatFactorPlain(sn2, sd2, v);
    factoredPlain = A === 1 ? `${f1p}${f2p}` : `${A}${f1p}${f2p}`;

    const root1Str = sd1 === 1 ? `${sn1}` : `${sn1}/${sd1}`;
    const root2Str = sd2 === 1 ? `${sn2}` : `${sn2}/${sd2}`;
    roots = [root1Str, root2Str];
  } else {
    // Irrational roots: A=1, B even → clean factored form without fractions
    const b = random.integer(-5, 5);
    const B = 2 * b;
    let C: number;
    let bSqMinusC: number;
    do {
      C = random.integer(-12, 12);
      bSqMinusC = b * b - C;
    } while (bSqMinusC <= 0 || isPerfectSquare(bSqMinusC));

    equation = formatTrinomial(1, B, C, v, 2, 1).replace(' = 0', '');

    // Roots: -b ± k₀√r₀ where [k₀, r₀] = simplifySqrt(b² - C)
    const [k0, r0] = simplifySqrt(bSqMinusC);

    // Factor of smaller root (-b - k₀√r₀): (x + b + k₀√r₀)
    const f1L = formatIrrFactor(b, k0, r0, true, v, true);
    const f1P = formatIrrFactor(b, k0, r0, true, v, false);
    // Factor of larger root (-b + k₀√r₀): (x + b - k₀√r₀)
    const f2L = formatIrrFactor(b, k0, r0, false, v, true);
    const f2P = formatIrrFactor(b, k0, r0, false, v, false);

    factoredLatex = `${f1L}${f2L}`;
    factoredPlain = `${f1P}${f2P}`;

    const D = B * B - 4 * C;
    roots = [`(${-B} - sqrt(${D})) / 2`, `(${-B} + sqrt(${D})) / 2`];
  }

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <P>Factor the quadratic trinomial and find the roots of the corresponding quadratic equation:</P>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer={factoredPlain} />
        <RootsCheck roots={roots} />
        {hint}
        <ProblemAnswer>
          <BlockMath>{factoredLatex}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
