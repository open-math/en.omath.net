import { RootsCheck } from '#project/utils/roots';

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const a = random.integer(-1000, 1000);
  const b = random.integer(-1000, 1000);

  const nonZeroA = a === 0 ? 5 : a;
  const nonZeroB = b === 0 ? 7 : b;

  let firstFactor, firstEquation;
  if (nonZeroA > 0) {
    firstFactor = `(x-${nonZeroA})`;
    firstEquation = `x - ${nonZeroA} = 0`;
  } else {
    firstFactor = `(x+${-nonZeroA})`;
    firstEquation = `x + ${-nonZeroA} = 0`;
  }

  let secondFactor, secondEquation;
  if (nonZeroB > 0) {
    secondFactor = `(x+${nonZeroB})`;
    secondEquation = `x + ${nonZeroB} = 0`;
  } else {
    secondFactor = `(x-${-nonZeroB})`;
    secondEquation = `x - ${-nonZeroB} = 0`;
  }

  const solution1 = nonZeroA;
  const solution2 = -nonZeroB;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <P>Solve the equation:</P>
          <BlockMath>{math`
            ${firstFactor}${secondFactor} = 0
          `}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[solution1, solution2]} />
        <ProblemAnswer>
          <M>{solution1}</M> and <M>{solution2}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The equation can be split into two sub-equations, the goal of each is to make the corresponding bracket
            equal to zero:
          </P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                ${firstFactor} = 0 & ${secondFactor} = 0 \\
                ${firstEquation} & ${secondEquation} \\
                \boxed{x = ${solution1}} & \boxed{x = ${solution2}}
            \end{array}
          `}</BlockMath>
          <P>
            We found two solutions: <M>{solution1}</M> and <M>{solution2}</M>
          </P>
        </ProblemSolution>
      </>
    ),
  };
});
