import { simplifyFraction } from '@open-math/shared/utils';
import { formatTrinomial, isZeroSumSolvable, reduceCoefficients, rootCheckValue, rootLatex } from './mental-shared';

//
// Zero-sum practice: ~70% solvable (A+B+C=0 or A-B+C=0), ~30% unsolvable
//

function generateSolvable(random: ProblemRandom): {
  A: number;
  B: number;
  C: number;
  minusVariant: boolean;
} {
  const roll = random.integer(0, 15);
  let A: number;
  let C: number;

  if (roll <= 5) {
    A = 1;
    C = random.integer(-12, 12);
    while (C === 0 || C === 1 || C === -1) C = random.integer(-12, 12);
  } else if (roll <= 9) {
    A = random.integer(2, 5);
    let k = random.integer(-5, 5);
    while (k === 0 || k === 1 || k === -1) k = random.integer(-5, 5);
    C = A * k;
  } else if (roll <= 13) {
    A = [2, 3, 5, 7][random.integer(0, 3)];
    C = random.integer(-12, 12);
    while (C === 0 || C === -A || C % A === 0) C = random.integer(-12, 12);
  } else {
    A = random.integer(2, 7);
    C = random.integer(-15, 15);
    while (C === 0 || C === A || C === -A) C = random.integer(-15, 15);
  }

  const minusVariant = random.boolean();
  let B = minusVariant ? A + C : -(A + C);

  [A, B, C] = reduceCoefficients(A, B, C);

  return { A, B, C, minusVariant };
}

function generateUnsolvable(random: ProblemRandom): { A: number; B: number; C: number } {
  let A: number;
  let B: number;
  let C: number;
  do {
    A = random.integer(1, 7);
    B = random.integer(-15, 15);
    while (B === 0) B = random.integer(-15, 15);
    C = random.integer(-15, 15);
    while (C === 0) C = random.integer(-15, 15);
    [A, B, C] = reduceCoefficients(A, B, C);
  } while (isZeroSumSolvable(A, B, C));

  return { A, B, C };
}

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const solvable = random.integer(1, 10) <= 7;

  if (!solvable) {
    const { A, B, C } = generateUnsolvable(random);
    const equation = formatTrinomial(A, B, C, 'x', 2, 1);

    return {
      problemContent: (
        <>
          <ProblemDescription>
            <BlockMath>{equation}</BlockMath>
          </ProblemDescription>
          <ProblemCheck label="Solvable by this method?" no />
          <ProblemAnswer>
            <P>
              The coefficient sum <M>{`${A} + ${B > 0 ? `(${B})` : `(${B})`} + ${C > 0 ? `(${C})` : `(${C})`}`}</M> is
              not zero with either <M>+B</M> or <M>-B</M>. The zero-sum method does not apply.
            </P>
          </ProblemAnswer>
        </>
      ),
    };
  }

  const { A, B, C, minusVariant } = generateSolvable(random);
  const equation = formatTrinomial(A, B, C, 'x', 2, 1);

  const [rn, rd] = simplifyFraction(minusVariant ? -C : C, A);
  const root1 = minusVariant ? -1 : 1;
  const isDoubleRoot = rn === root1 && rd === 1;

  const root2Check = rootCheckValue(minusVariant ? -C : C, A);
  const root2Ltx = rootLatex(minusVariant ? -C : C, A);

  const answerLatex = isDoubleRoot ? `x = ${root1}` : `x_1 = ${root1}, \\enspace x_2 = ${root2Ltx}`;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Solvable by this method?" yes>
          <RootsCheck roots={isDoubleRoot ? [root1] : [root1, root2Check]} />
        </ProblemCheck>
        <ProblemAnswer>
          <BlockMath>{answerLatex}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
