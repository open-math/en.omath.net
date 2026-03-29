import { isPerfectSquare } from '@open-math/shared/utils';
import { formatTrinomial, fractionLatex, rootCheckValue } from './mental-shared';

//
// Perfect-square practice: ~60% solvable, ~40% unsolvable
// Unsolvable sub-cases:
//   - A or C is not a perfect square
//   - A and C are perfect squares, but |B| ≠ 2KT
//   - All checks pass, but C is negative
//

function generateSolvable(random: ProblemRandom): {
  A: number;
  B: number;
  C: number;
  K: number;
  T: number;
  minus: boolean;
} {
  const K = random.integer(1, 6);
  const T = random.integer(1, 7);
  const minus = random.boolean();
  const A = K * K;
  const C = T * T;
  const B = minus ? -2 * K * T : 2 * K * T;
  return { A, B, C, K, T, minus };
}

type UnsolvableReason = 'not-square' | 'bad-b' | 'negative-c';

function generateUnsolvable(random: ProblemRandom, reason: UnsolvableReason): { A: number; B: number; C: number } {
  if (reason === 'negative-c') {
    const K = random.integer(1, 5);
    const T = random.integer(1, 5);
    const A = K * K;
    const C = -(T * T);
    const B = random.boolean() ? -2 * K * T : 2 * K * T;
    return { A, B, C };
  }

  if (reason === 'not-square') {
    let A: number;
    let C: number;
    if (random.boolean()) {
      do {
        A = random.integer(2, 20);
      } while (isPerfectSquare(A));
      C = random.integer(1, 15);
    } else {
      A = [1, 4, 9, 16, 25][random.integer(0, 4)];
      do {
        C = random.integer(2, 20);
      } while (isPerfectSquare(C));
    }
    let B = random.integer(-15, 15);
    while (B === 0) B = random.integer(-15, 15);
    return { A, B, C };
  }

  const K = random.integer(1, 5);
  const T = random.integer(1, 5);
  const A = K * K;
  const C = T * T;
  const correctB = 2 * K * T;
  let B: number;
  do {
    B = random.integer(-20, 20);
  } while (B === 0 || Math.abs(B) === correctB);
  return { A, B, C };
}

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const roll = random.integer(1, 10);
  const solvable = roll <= 6;

  if (!solvable) {
    const reasons: UnsolvableReason[] = ['not-square', 'bad-b', 'negative-c', 'negative-c'];
    const reason = reasons[random.integer(0, reasons.length - 1)];

    const { A, B, C } = generateUnsolvable(random, reason);
    const equation = formatTrinomial(A, B, C, 'x', 2, 1);

    return {
      problemContent: (
        <>
          <ProblemDescription>
            <BlockMath>{equation}</BlockMath>
          </ProblemDescription>
          <ProblemCheck label="Solvable by this method?" no />
          <ProblemAnswer>
            {reason === 'not-square' && (
              <P>
                The coefficient <M>A = {A}</M> or <M>C = {C}</M> is not a perfect square. The perfect-square method does
                not apply.
              </P>
            )}
            {reason === 'bad-b' && (
              <P>
                The coefficients <M>A</M> and <M>C</M> are perfect squares, but <M>|B| = {Math.abs(B)}</M> is not equal
                to{' '}
                <M>
                  2 \cdot {Math.round(Math.sqrt(A))} \cdot {Math.round(Math.sqrt(Math.abs(C)))} ={' '}
                  {2 * Math.round(Math.sqrt(A)) * Math.round(Math.sqrt(Math.abs(C)))}
                </M>
                . The method does not apply.
              </P>
            )}
            {reason === 'negative-c' && (
              <P>
                The coefficients <M>A</M> and <M>|C|</M> are perfect squares, and <M>|B|</M> fits too, but there is a
                minus sign in front of <M>C</M>. The square-of-a-sum or square-of-a-difference formulas need a <M>+</M>{' '}
                before the last term. The method does not apply.
              </P>
            )}
          </ProblemAnswer>
        </>
      ),
    };
  }

  const { A, B, C, K, T, minus } = generateSolvable(random);
  const equation = formatTrinomial(A, B, C, 'x', 2, 1);

  const rootN = minus ? T : -T;
  const rootCheck = rootCheckValue(rootN, K);
  const rootLtx = fractionLatex(rootN, K);

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Solvable by this method?" yes>
          <RootsCheck roots={[rootCheck]} />
        </ProblemCheck>
        <ProblemAnswer>
          <BlockMath>{`x = ${rootLtx}`}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
