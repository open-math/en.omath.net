export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  // Generate coefficient A (non-zero)
  let A = random.integer(-10, 10);
  while (A === 0) {
    A = random.integer(-10, 10);
  }

  // Generate coefficient B
  const B = random.integer(-20, 20);

  // Format equation: Ax + B = 0
  let equation = '';
  if (A === 1) {
    equation = 'x';
  } else if (A === -1) {
    equation = '-x';
  } else {
    equation = `${A}x`;
  }

  if (B > 0) {
    equation += ` + ${B} = 0`;
  } else if (B < 0) {
    equation += ` - ${Math.abs(B)} = 0`;
  } else {
    equation += ' = 0';
  }

  // Calculate root: x = -B/A
  let root = '';
  if (B === 0) {
    root = '0';
  } else if (B % A === 0) {
    // Integer root
    const intRoot = -B / A;
    root = intRoot.toString();
  } else {
    // Fraction root
    const numerator = -B;
    const denominator = A;

    // Simplify fraction by finding GCD
    const gcd = (a: number, b: number): number => {
      a = Math.abs(a);
      b = Math.abs(b);
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };

    const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
    const simplifiedNum = numerator / divisor;
    const simplifiedDen = denominator / divisor;

    if (simplifiedDen === 1) {
      root = simplifiedNum.toString();
    } else if (simplifiedDen === -1) {
      root = (-simplifiedNum).toString();
    } else if (simplifiedDen < 0) {
      root = `-\\frac{${Math.abs(simplifiedNum)}}{${Math.abs(simplifiedDen)}}`;
    } else if (simplifiedNum < 0) {
      root = `-\\frac{${Math.abs(simplifiedNum)}}{${simplifiedDen}}`;
    } else {
      root = `\\frac{${simplifiedNum}}{${simplifiedDen}}`;
    }
  }

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <P>Solve the equation using the previously derived general formula:</P>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        <ProblemCheck
          label="Root of the equation"
          answer={root
            .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
            .replace(/^-?\\frac/, (m) => (m.includes('-') ? '-' : ''))}
        />
        <ProblemAnswer>
          <BlockMath>{root}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Identify the coefficients <M>A</M> and <M>B</M> in the equation:
          </P>
          <BlockMath>{math`
            A = ${A}, \enspace B = ${B}
          `}</BlockMath>
          <P>Substitute them into the general formula:</P>
          <BlockMath>{math`
            x = -\frac{B}{A}
            >>{big}
            x = -\frac{ ${B} }{ ${A} }
            >>{big}
            \boxed{x = ${root} }
          `}</BlockMath>
        </ProblemSolution>
      </>
    ),
  };
});
