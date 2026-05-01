export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const isSum = random.boolean();

  let n: number;
  let round: number;
  let offset: number;

  if (isSum) {
    round = random.integer(1, 9) * 10;
    offset = random.integer(1, Math.min(5, 99 - round));
    n = round + offset;
  } else {
    round = random.integer(2, 10) * 10;
    offset = random.integer(1, Math.min(5, round - 11));
    n = round - offset;
  }

  const answer = n * n;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          Square <M>{n}</M> without multiplying directly.
          <Br />
          Try to do it in your head.
        </ProblemDescription>
        <MathValueCheck answer={answer} />
        <ProblemHint>
          {isSum ? 'Use the square of a sum formula.' : 'Use the square of a difference formula.'}
        </ProblemHint>
        <ProblemAnswer>
          <M>{answer}</M>
        </ProblemAnswer>
      </>
    ),
  };
});
