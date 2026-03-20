import { gcd, simplifyFraction } from '@open-math/shared/utils';
import { formatTrinomial, fractionLatex } from '../../4-quadratic-formula/scripts/quadratic-shared';

//
// Zero-sum quadratics:
//   50% -> A + B + C = 0, roots: x1 = 1, x2 = C/A
//   50% -> A - B + C = 0, roots: x1 = -1, x2 = -C/A
//

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
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

  const g = gcd(gcd(Math.abs(A), Math.abs(B)), Math.abs(C));
  A /= g;
  B /= g;
  C /= g;

  if (A < 0) {
    A = -A;
    B = -B;
    C = -C;
  }

  const equation = formatTrinomial(A, B, C, 'x', 2, 1);

  const [rn, rd] = simplifyFraction(minusVariant ? -C : C, A);

  const root1 = minusVariant ? -1 : 1;
  const isDoubleRoot = rn === root1 && rd === 1;

  const root2Check: number | string = rd === 1 ? rn : `${rn}/${rd}`;
  const root2Latex = rd === 1 ? `${rn}` : fractionLatex(rn, rd);

  const answerLatex = isDoubleRoot ? `x = ${root1}` : `x_1 = ${root1}, \\enspace x_2 = ${root2Latex}`;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <P>Solve the quadratic equation using the derived root formulas:</P>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        {isDoubleRoot ? <RootsCheck roots={root1} /> : <RootsCheck roots={[root1, root2Check]} />}
        <ProblemAnswer>
          <BlockMath>{answerLatex}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
