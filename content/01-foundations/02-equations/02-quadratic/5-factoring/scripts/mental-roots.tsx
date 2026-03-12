import { gcd, simplifyFraction } from '@open-math/shared/utils';
import { sqrtLatex } from '../../4-quadratic-formula/scripts/quadratic-shared';

type Root = {
  /** LaTeX display string for the factor, e.g. "\\frac{3}{4}" or "\\sqrt{5}" */
  factorLatex: string;
  /** The value for RootsCheck, e.g. "3/4" or "sqrt(5)" */
  checkValue: string | number;
  /** LaTeX for the answer line */
  answerLatex: string;
};

function makeIntegerRoot(random: ProblemRandom): Root {
  const v = random.integer(-15, 15);
  return { factorLatex: `${v}`, checkValue: v, answerLatex: `${v}` };
}

function makeFractionRoot(random: ProblemRandom): Root {
  const d = random.integer(2, 7);
  let n: number;
  do {
    n = random.integer(-9, 9);
  } while (n === 0 || gcd(Math.abs(n), d) !== 1);
  const [sn, sd] = simplifyFraction(n, d);
  const sign = sn < 0 ? '-' : '';
  const latex = `${sign}\\frac{${Math.abs(sn)}}{${sd}}`;
  return { factorLatex: latex, checkValue: `${sn}/${sd}`, answerLatex: latex };
}

function makeSqrtRoot(random: ProblemRandom): Root {
  const bases = [2, 3, 5, 6, 7];
  const base = bases[random.integer(0, bases.length - 1)];
  const neg = random.boolean();
  const latex = neg ? `-${sqrtLatex(base)}` : sqrtLatex(base);
  const check = neg ? `-sqrt(${base})` : `sqrt(${base})`;
  return { factorLatex: latex, checkValue: check, answerLatex: latex };
}

function makeSquareRoot(random: ProblemRandom): Root {
  const v = random.integer(2, 6);
  const neg = random.boolean();
  const val = v * v;
  const latex = neg ? `-${v}^2` : `${v}^2`;
  const ansLatex = `${neg ? '-' : ''}${val}`;
  return { factorLatex: latex, checkValue: neg ? -val : val, answerLatex: ansLatex };
}

function formatFactor(root: Root): string {
  // For negative roots: (x + |root|), for positive: (x - root)
  // We need to parse the sign from factorLatex
  const latex = root.factorLatex;
  if (latex.startsWith('-')) {
    return `\\left(x + ${latex.slice(1)}\\right)`;
  }
  return `\\left(x - ${latex}\\right)`;
}

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const makers = [makeIntegerRoot, makeFractionRoot, makeSqrtRoot, makeSquareRoot];
  // Pick two different root types (or same type with different values)
  const maker1 = makers[random.integer(0, makers.length - 1)];
  const maker2 = makers[random.integer(0, makers.length - 1)];

  const root1 = maker1(random);
  let root2 = maker2(random);
  // Ensure roots are distinct (by check value)
  let attempts = 0;
  while (root2.checkValue === root1.checkValue && attempts < 20) {
    root2 = maker2(random);
    attempts++;
  }

  // Random A coefficient
  let A = random.integer(-5, 5);
  while (A === 0) A = random.integer(-5, 5);

  const aPrefix = A === 1 ? '' : A === -1 ? '-' : `${A}`;
  const factored = `${aPrefix}${formatFactor(root1)}${formatFactor(root2)} = 0`;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <P>Solve the equation:</P>
          <BlockMath>{factored}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[root1.checkValue, root2.checkValue]} />
        <ProblemHint>
          The roots are the opposites of the numbers next to <M>x</M> in each bracket. See the full explanation in the{' '}
          <Dep on={$CONTENT.foundations.equations.elementary.practice.$zeroFactors}>Zero factors</Dep> problem.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{`x_1 = ${root1.answerLatex}, \\enspace x_2 = ${root2.answerLatex}`}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
