export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const round = random.integer(2, 9) * 100;
  const offset = random.integer(1, 3);
  const n1 = round + offset;
  const n2 = round - offset;
  const answer = round * round - offset * offset;

  const diffOfSquares = $CONTENT.foundations.polynomials.specialProducts.article.$diffOfSquares;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          Without multiplying directly, find the value of{' '}
          <M>
            {n1} \cdot {n2}
          </M>
          .
        </ProblemDescription>
        <MathValueCheck answer={answer} />
        <ProblemHint>
          Rewrite the numbers as parentheses. You can choose them so the two parentheses are identical except for the
          sign between their terms.
        </ProblemHint>
        <ProblemAnswer>
          <M>{answer}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The first number can be written as{' '}
            <M>
              {n1} = {round} + {offset}
            </M>
            , and the second as{' '}
            <M>
              {n2} = {round} - {offset}
            </M>
            . Then the product follows the <Dep on={diffOfSquares}>difference of squares</Dep> formula:
          </P>
          <BlockMath>{math`
            ${n1} \cdot ${n2} = (${round} + ${offset})(${round} - ${offset}) = ${round}^2 - ${offset}^2 = ${round * round} - ${offset * offset} = ${answer}
          `}</BlockMath>
        </ProblemSolution>
      </>
    ),
  };
});
