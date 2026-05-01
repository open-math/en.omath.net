export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  // a - b = 1, so the result is a + b; keep it in [101, 499] and odd.
  const b = random.integer(50, 249);
  const a = b + 1;
  const answer = a + b;

  const diffOfSquares = $CONTENT.foundations.polynomials.specialProducts.article.$diffOfSquares;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          Without calculating any squares, find the value of{' '}
          <M>
            {a}^2 - {b}^2
          </M>
          .
        </ProblemDescription>
        <MathValueCheck answer={answer} />
        <ProblemHint>
          <Dep on={diffOfSquares}>Difference of squares</Dep>
        </ProblemHint>
        <ProblemAnswer>
          <M>{answer}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Apply the <Dep on={diffOfSquares}>difference of squares</Dep> formula and rewrite the difference as a
            product of two parentheses:
          </P>
          <BlockMath>{math`
            ${a}^2 - ${b}^2 = (${a} + ${b})(${a} - ${b}) = ${answer} \cdot 1 = ${answer}
          `}</BlockMath>
          <P>
            The second parenthesis turned out to be <M>1</M>, so the answer is just the sum of the original numbers.
          </P>
        </ProblemSolution>
      </>
    ),
  };
});
