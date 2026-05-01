export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const n = random.integer(10000, 999999);
  const d = random.integer(2, 15);
  const n1 = n - d;
  const n2 = n + d;
  const answer = d * d;

  const diffOfSquares = $CONTENT.foundations.polynomials.specialProducts.article.$diffOfSquares;
  const simpleProduct = $CONTENT.foundations.polynomials.specialProducts.practice.$simpleProduct;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          Compute the expression{' '}
          <M>
            {n}^2 - {n1} \cdot {n2}
          </M>
          .
        </ProblemDescription>
        <MathValueCheck answer={answer} />
        <ProblemHint>
          This is a modified version of the <Dep on={simpleProduct}>Simple product</Dep> problem.
        </ProblemHint>
        <ProblemAnswer>
          <M>{answer}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that{' '}
            <M>
              {n1} = {n} - {d}
            </M>{' '}
            and{' '}
            <M>
              {n2} = {n} + {d}
            </M>
            , so the factors sit symmetrically around <M>{n}</M>. Apply the{' '}
            <Dep on={diffOfSquares}>difference of squares</Dep> formula to their product:
          </P>
          <BlockMath>{math`
            ${n1} \cdot ${n2} = (${n} - ${d})(${n} + ${d}) = ${n}^2 - ${d}^2
          `}</BlockMath>
          <P>Substitute this into the original expression:</P>
          <BlockMath>{math`
            ${n}^2 - ${n1} \cdot ${n2} = ${n}^2 - \left(${n}^2 - ${d}^2\right) = \cancel{${n}^2} - \cancel{${n}^2} + ${d}^2 = ${d}^2 = ${answer}
          `}</BlockMath>
          <P>
            The huge <M>{n}^2</M> terms kill each other off, and all that survives is the tiny square{' '}
            <M>
              {d}^2 = {answer}
            </M>
            .
          </P>
        </ProblemSolution>
      </>
    ),
  };
});
