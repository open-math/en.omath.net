import { getRandomLatinLetter } from '@open-math/shared/utils';

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const v = getRandomLatinLetter(random, { casing: 'lower' });

  const a = random.integer(-1000, 1000);
  const b = random.integer(-1000, 1000);

  const nonZeroA = a === 0 ? 5 : a;
  const nonZeroB = b === 0 ? 7 : b;

  let firstFactor, firstEquation;
  if (nonZeroA > 0) {
    firstFactor = `(${v}-${nonZeroA})`;
    firstEquation = `${v} - ${nonZeroA} = 0`;
  } else {
    firstFactor = `(${v}+${-nonZeroA})`;
    firstEquation = `${v} + ${-nonZeroA} = 0`;
  }

  let secondFactor, secondEquation;
  if (nonZeroB > 0) {
    secondFactor = `(${v}+${nonZeroB})`;
    secondEquation = `${v} + ${nonZeroB} = 0`;
  } else {
    secondFactor = `(${v}-${-nonZeroB})`;
    secondEquation = `${v} - ${-nonZeroB} = 0`;
  }

  const solution1 = nonZeroA;
  const solution2 = -nonZeroB;

  // Sometimes add a coefficient before brackets
  const coeffType = random.integer(0, 3); // 0 = no coeff, 1 = integer, 2 = square, 3 = fraction
  let coeffLatex = '';
  let coeffLabel = '';
  let hasCoeff = false;

  if (coeffType === 1) {
    const c = random.integer(2, 20);
    coeffLatex = `${c}`;
    coeffLabel = `${c}`;
    hasCoeff = true;
  } else if (coeffType === 2) {
    const base = random.integer(2, 10);
    coeffLatex = `${base}^2`;
    coeffLabel = `${base}^2`;
    hasCoeff = true;
  } else if (coeffType === 3) {
    const num = random.integer(1, 9);
    let den = random.integer(2, 9);
    if (num === den) den = den + 1;
    coeffLatex = `\\frac{${num}}{${den}}`;
    coeffLabel = `\\frac{${num}}{${den}}`;
    hasCoeff = true;
  }

  const equation = hasCoeff ? `${coeffLatex} ${firstFactor}${secondFactor} = 0` : `${firstFactor}${secondFactor} = 0`;

  const divideStep = hasCoeff
    ? math`
        \brand{\div ${coeffLabel}} \ | \ ${coeffLatex} ${firstFactor}${secondFactor} = 0 \ | \ \brand{\div ${coeffLabel}} \\
        \frac{\cancel{${coeffLatex}} ${firstFactor}${secondFactor}}{\cancel{${coeffLabel}}} = \frac{0}{${coeffLabel}} \\
        ${firstFactor}${secondFactor} = 0
      `
    : null;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <BlockMath>{math`
            ${equation}
          `}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[solution1, solution2]} />
        <ProblemAnswer>
          <M>{solution1}</M> and <M>{solution2}</M>
        </ProblemAnswer>
        <ProblemSolution>
          {hasCoeff && (
            <>
              <P>
                First get rid of the coefficient in front of the brackets. Divide both sides of the equation by{' '}
                <M>{coeffLatex}</M>:
              </P>
              <BlockMath>{divideStep!}</BlockMath>
            </>
          )}
          <P>
            This equation can be split into two sub-equations, and the whole point of each one is to make its
            corresponding bracket equal to zero:
          </P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                	ext{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                ${firstFactor} = 0 & ${secondFactor} = 0 \\
                ${firstEquation} & ${secondEquation} \\
                \boxed{${v} = ${solution1}} & \boxed{${v} = ${solution2}}
            \end{array}
          `}</BlockMath>
          <P>
            So we get two solutions of the equation: <M>{solution1}</M> and <M>{solution2}</M>.
          </P>
        </ProblemSolution>
      </>
    ),
  };
});
