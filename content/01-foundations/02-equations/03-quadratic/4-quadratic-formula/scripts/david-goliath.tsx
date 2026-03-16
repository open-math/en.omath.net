import { getRandomLatinLetter, gcd, isPerfectSquare, simplifyFraction, simplifySqrt } from '@open-math/shared/utils';

import { formatTrinomial, fractionLatex } from './quadratic-shared';

//
// Divisor-chain generation
//

const EASY_PRIMES = [2, 3, 5] as const;

function buildDivisorChain(random: ProblemRandom): number[] {
  const steps = random.integer(3, 5);
  const chain: number[] = [];

  // First divisor is always 2, 3, or 5 (easy divisibility rules)
  chain.push(EASY_PRIMES[random.integer(0, EASY_PRIMES.length - 1)]);

  // Remaining divisors can include 7, but at most one 7 in the whole chain
  const ALL_PRIMES = [2, 3, 5, 7] as const;
  let has7 = false;
  for (let i = 1; i < steps; i++) {
    if (has7) {
      chain.push(EASY_PRIMES[random.integer(0, EASY_PRIMES.length - 1)]);
    } else {
      const d = ALL_PRIMES[random.integer(0, ALL_PRIMES.length - 1)];
      if (d === 7) has7 = true;
      chain.push(d);
    }
  }

  // Sort from smallest to biggest
  chain.sort((a, b) => a - b);

  return chain;
}

function chainProduct(chain: number[]): number {
  return chain.reduce((acc, d) => acc * d, 1);
}

//
// Base equation generators (small coefficients, gcd = 1)
//

interface BaseEquation {
  A: number;
  B: number;
  C: number;
  hasRoots: boolean;
  roots: (number | string)[];
  answerLatex: (v: string) => string;
}

function genInteger(random: ProblemRandom): BaseEquation {
  let r1 = random.integer(-10, 10);
  let r2 = random.integer(-10, 10);
  while (r2 === r1) r2 = random.integer(-10, 10);

  const A = 1;
  const B = -(r1 + r2);
  const C = r1 * r2;

  if (r1 > r2) [r1, r2] = [r2, r1];

  return {
    A,
    B,
    C,
    hasRoots: true,
    roots: [r1, r2],
    answerLatex: (v) => `${v}_1 = ${r1}, \\enspace ${v}_2 = ${r2}`,
  };
}

function genFraction(random: ProblemRandom): BaseEquation {
  const denoms = [1, 2, 3, 4, 5];
  let d1 = denoms[random.integer(0, denoms.length - 1)];
  let d2 = denoms[random.integer(0, denoms.length - 1)];
  if (d1 === 1 && d2 === 1) d2 = denoms[random.integer(1, denoms.length - 1)];

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
  if (val1 > val2) [sn1, sd1, sn2, sd2] = [sn2, sd2, sn1, sd1];

  const root1Str = sd1 === 1 ? `${sn1}` : `${sn1}/${sd1}`;
  const root2Str = sd2 === 1 ? `${sn2}` : `${sn2}/${sd2}`;

  return {
    A,
    B,
    C,
    hasRoots: true,
    roots: [root1Str, root2Str],
    answerLatex: (v) => `${v}_1 = ${fractionLatex(sn1, sd1)}, \\enspace ${v}_2 = ${fractionLatex(sn2, sd2)}`,
  };
}

function genIrrational(random: ProblemRandom): BaseEquation {
  const A = random.integer(1, 3);
  let B: number;
  do {
    B = random.integer(-9, 9);
  } while (B === 0);

  let C: number;
  let D: number;
  do {
    C = random.integer(-12, 12);
    D = B * B - 4 * A * C;
  } while (D <= 0 || isPerfectSquare(D));

  const denom = 2 * A;
  const root1 = `(${-B} + sqrt(${D})) / ${denom}`;
  const root2 = `(${-B} - sqrt(${D})) / ${denom}`;

  const [k, r] = simplifySqrt(D);
  const g2 = gcd(gcd(Math.abs(-B), k), denom);
  const redB = -B / g2;
  const redK = k / g2;
  const redDenom = denom / g2;

  const sqrtPart = r === 1 ? `${redK}` : redK === 1 ? `\\sqrt{${r}}` : `${redK}\\sqrt{${r}}`;

  return {
    A,
    B,
    C,
    hasRoots: true,
    roots: [root1, root2],
    answerLatex: (v) =>
      redDenom === 1
        ? `${v}_{1,2} = ${redB} \\pm ${sqrtPart}`
        : `${v}_{1,2} = \\frac{${redB} \\pm ${sqrtPart}}{${redDenom}}`,
  };
}

function genNoRoots(random: ProblemRandom): BaseEquation {
  const A = random.integer(1, 3);
  let B: number;
  do {
    B = random.integer(-9, 9);
  } while (B === 0);

  const delta = random.integer(1, 5);
  const minC = Math.ceil((B * B + 1) / (4 * A));
  const C = minC + delta;

  return {
    A,
    B,
    C,
    hasRoots: false,
    roots: [],
    answerLatex: () => '\\text{no roots}',
  };
}

//
// Main script
//

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const v = getRandomLatinLetter(random, { casing: 'lower' });

  // Pick root type: integer 30%, fraction 25%, irrational 25%, no roots 20%
  const roll = random.integer(1, 100);
  let base: BaseEquation;
  if (roll <= 30) base = genInteger(random);
  else if (roll <= 55) base = genFraction(random);
  else if (roll <= 80) base = genIrrational(random);
  else base = genNoRoots(random);

  // Build divisor chain and inflate coefficients
  const chain = buildDivisorChain(random);
  const multiplier = chainProduct(chain);

  const bigA = base.A * multiplier;
  const bigB = base.B * multiplier;
  const bigC = base.C * multiplier;

  // Inflated equation
  const bigEquation = formatTrinomial(bigA, bigB, bigC, v, 2, 1);

  // Simplified equation
  const smallEquation = formatTrinomial(base.A, base.B, base.C, v, 2, 1);

  // Roots check
  const rootsCheck = base.hasRoots ? (
    base.roots.length === 1 ? (
      <RootsCheck has root={base.roots[0]} />
    ) : (
      <RootsCheck has roots={base.roots as [any, ...any[]]} />
    )
  ) : (
    <RootsCheck empty />
  );

  // Divisor list as comma-separated string
  const divisorList = chain.join(', ');

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <BlockMath>{bigEquation}</BlockMath>
        </ProblemDescription>
        {rootsCheck}
        <ProblemHint>
          Look carefully at the coefficients. They're all divisible by some small number. Divide both sides by it. If
          needed, repeat this process a few times.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{base.answerLatex(v)}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            All coefficients of the equation can be divided step by step by: <M>{divisorList}</M>.
          </P>
          <P>After simplifying, we get the equation:</P>
          <BlockMath>{smallEquation}</BlockMath>
          <P>Now solve the resulting quadratic equation in the usual way.</P>
        </ProblemSolution>
        <ProblemNote>
          The title of the problem refers to the biblical story of how the young shepherd David defeated the giant
          Goliath using a sling. Here, the supposedly invincible "giant" is an equation with enormous coefficients, and
          the "sling" is the process of successive division by common divisors, which allows one to "defeat" the
          equation and find its roots.
        </ProblemNote>
      </>
    ),
  };
});
