import { gcd, simplifyFraction } from '@open-math/shared/utils';
import {
  findIntegerFactors,
  formatTrinomial,
  fractionLatex,
  isPerfectSquareSolvable,
  isZeroSumSolvable,
  reduceCoefficients,
  rootCheckValue,
  rootLatex,
} from './mental-shared';

//
// Mixed methods: randomly generates equations solvable by one of the 4 methods,
// or unsolvable by any mental method. Includes the method name in the answer.
//

const methodZeroSum = $CONTENT.foundations.equations.quadratic.mentalSolving.article.$methodZeroSum;
const methodSquare = $CONTENT.foundations.equations.quadratic.mentalSolving.article.$methodSquare;
const methodFactoring = $CONTENT.foundations.equations.quadratic.mentalSolving.article.$methodFactoring;
const methodAtoC = $CONTENT.foundations.equations.quadratic.mentalSolving.article.$methodAtoC;

type Method = 'zero-sum' | 'perfect-square' | 'factoring' | 'a-to-c';

interface SolvableResult {
  solvable: true;
  A: number;
  B: number;
  C: number;
  method: Method;
  roots: (number | string)[];
  answerLatex: string;
}

interface UnsolvableResult {
  solvable: false;
  A: number;
  B: number;
  C: number;
}

function genZeroSum(random: ProblemRandom): SolvableResult {
  let A = random.integer(1, 7);
  let C = random.integer(-12, 12);
  while (C === 0) C = random.integer(-12, 12);

  const minusVariant = random.boolean();
  let B = minusVariant ? A + C : -(A + C);
  [A, B, C] = reduceCoefficients(A, B, C);

  const root1 = minusVariant ? -1 : 1;
  const root2Check = rootCheckValue(minusVariant ? -C : C, A);
  const root2Ltx = rootLatex(minusVariant ? -C : C, A);

  const [rn, rd] = simplifyFraction(minusVariant ? -C : C, A);
  const isDouble = rn === root1 && rd === 1;

  return {
    solvable: true,
    A,
    B,
    C,
    method: 'zero-sum',
    roots: isDouble ? [root1] : [root1, root2Check],
    answerLatex: isDouble ? `x = ${root1}` : `x_1 = ${root1}, \\enspace x_2 = ${root2Ltx}`,
  };
}

function genPerfectSquare(random: ProblemRandom): SolvableResult {
  const K = random.integer(1, 6);
  const T = random.integer(1, 7);
  const minus = random.boolean();
  const A = K * K;
  const C = T * T;
  const B = minus ? -2 * K * T : 2 * K * T;

  const rootN = minus ? T : -T;
  const rootCheck = rootCheckValue(rootN, K);
  const rootLtx = fractionLatex(rootN, K);

  return {
    solvable: true,
    A,
    B,
    C,
    method: 'perfect-square',
    roots: [rootCheck],
    answerLatex: `x = ${rootLtx}`,
  };
}

function genFactoring(random: ProblemRandom): SolvableResult {
  let t = random.integer(-12, 12);
  let k = random.integer(-12, 12);
  while (k === t) k = random.integer(-12, 12);

  const B = t + k;
  const C = t * k;
  const root1 = -t;
  const root2 = -k;
  const [r1, r2] = root1 <= root2 ? [root1, root2] : [root2, root1];

  return {
    solvable: true,
    A: 1,
    B,
    C,
    method: 'factoring',
    roots: r1 === r2 ? [r1] : [r1, r2],
    answerLatex: r1 === r2 ? `x = ${r1}` : `x_1 = ${r1}, \\enspace x_2 = ${r2}`,
  };
}

function genAtoC(random: ProblemRandom): SolvableResult {
  let A: number, r1: number, n: number;
  do {
    A = random.integer(2, 6);
    r1 = random.integer(-8, 8);
    while (r1 === 0) r1 = random.integer(-8, 8);
    n = random.integer(-8, 8);
    while (n === 0 || gcd(Math.abs(n), A) !== 1 || A * r1 + n === 0) n = random.integer(-8, 8);
  } while (Math.abs(A * r1 * n) > 200);

  const B = -(A * r1 + n);
  const C = r1 * n;
  const t = -A * r1;
  const k = -n;

  const root1Check = rootCheckValue(-t, A);
  const root2Check = rootCheckValue(-k, A);
  const root1Ltx = rootLatex(-t, A);
  const root2Ltx = rootLatex(-k, A);

  return {
    solvable: true,
    A,
    B,
    C,
    method: 'a-to-c',
    roots: [root1Check, root2Check],
    answerLatex: `x_1 = ${root1Ltx}, \\enspace x_2 = ${root2Ltx}`,
  };
}

function genUnsolvable(random: ProblemRandom): UnsolvableResult {
  let A: number;
  let B: number;
  let C: number;
  do {
    A = random.integer(2, 7);
    B = random.integer(-12, 12);
    while (B === 0) B = random.integer(-12, 12);
    C = random.integer(-12, 12);
    while (C === 0) C = random.integer(-12, 12);
  } while (isZeroSumSolvable(A, B, C) || isPerfectSquareSolvable(A, B, C) || findIntegerFactors(B, A * C) !== false);

  return { solvable: false, A, B, C };
}

function methodRef(method: Method) {
  switch (method) {
    case 'zero-sum':
      return <Dep on={methodZeroSum}>Zero sum</Dep>;
    case 'perfect-square':
      return <Dep on={methodSquare}>Perfect square</Dep>;
    case 'factoring':
      return <Dep on={methodFactoring}>Factoring</Dep>;
    case 'a-to-c':
      return <Dep on={methodAtoC}>Transfer A to C</Dep>;
  }
}

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const roll = random.integer(1, 10);

  if (roll <= 2) {
    const result = genUnsolvable(random);
    const equation = formatTrinomial(result.A, result.B, result.C, 'x', 2, 1);

    return {
      problemContent: (
        <>
          <ProblemDescription>
            <BlockMath>{equation}</BlockMath>
          </ProblemDescription>
          <ProblemCheck label="Solvable mentally?" no />
          <ProblemAnswer>
            <P>None of the mental methods works for this equation.</P>
          </ProblemAnswer>
        </>
      ),
    };
  }

  const generators = [genZeroSum, genPerfectSquare, genFactoring, genAtoC];
  const gen = generators[random.integer(0, generators.length - 1)];
  const result = gen(random);
  const equation = formatTrinomial(result.A, result.B, result.C, 'x', 2, 1);

  const rootsCheck = <RootsCheck roots={result.roots as [any, ...any[]]} />;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Solvable mentally?" yes>
          {rootsCheck}
        </ProblemCheck>
        <ProblemAnswer>
          <P>Method: {methodRef(result.method)}.</P>
          <BlockMath>{result.answerLatex}</BlockMath>
        </ProblemAnswer>
      </>
    ),
    ensureStorage: [
      <Dep on={methodZeroSum}>Zero sum</Dep>,
      <Dep on={methodSquare}>Perfect square</Dep>,
      <Dep on={methodFactoring}>Factoring</Dep>,
      <Dep on={methodAtoC}>Transfer A to C</Dep>,
    ],
  };
});
