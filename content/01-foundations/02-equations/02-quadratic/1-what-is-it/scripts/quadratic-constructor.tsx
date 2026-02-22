import { getRandomLatinLetter } from '@open-math/shared/utils';

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  // Helper function to generate different types of coefficients
  const generateCoeff = () => {
    const type = random.integer(1, 6);
    switch (type) {
      case 1: // Simple integer
        return random.integer(-10, 10);
      case 2: // Fraction
        const num = random.integer(-12, 12);
        const den = random.integer(2, 8);
        return `\\frac{${num}}{${den}}`;
      case 3: // Square root
        const radicand = random.integer(2, 20);
        const sign = random.boolean() ? '' : '-';
        return `${sign}\\sqrt{${radicand}}`;
      case 4: // Expression with parentheses
        const a = random.integer(1, 5);
        const b = random.integer(1, 5);
        const op = random.boolean() ? '+' : '-';
        return `(${a}${op}${b})`;
      case 5: // Multiple of pi
        const coeff = random.integer(-3, 3);
        return coeff === 0 ? random.integer(1, 5) : `${coeff}\\pi`;
      default: // Mixed expression
        const base = random.integer(1, 5);
        const root = random.integer(2, 9);
        return `${base}\\sqrt{${root}}`;
    }
  };

  // Helper function to evaluate expressions and simplify fractions
  const processCoeff = (coeff: any) => {
    const coeffStr = String(coeff);

    // Handle parenthetical expressions like (3+2) or (5-1)
    const parenMatch = coeffStr.match(/^\((\d+)([\+\-])(\d+)\)$/);
    if (parenMatch) {
      const [, a, op, b] = parenMatch;
      const result = op === '+' ? parseInt(a!) + parseInt(b!) : parseInt(a!) - parseInt(b!);
      return result;
    }

    // Handle fractions like \frac{6}{3}
    const fracMatch = coeffStr.match(/^\\frac\{(-?\d+)\}\{(\d+)\}$/);
    if (fracMatch) {
      const [, num, den] = fracMatch;
      const numVal = parseInt(num!);
      const denVal = parseInt(den!);
      const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));
      const divisor = gcd(Math.abs(numVal), denVal);
      const simplifiedNum = numVal / divisor;
      const simplifiedDen = denVal / divisor;

      if (simplifiedDen === 1) {
        return simplifiedNum;
      } else {
        // Move minus sign in front of \frac if fraction is negative
        if (simplifiedNum < 0) {
          return `-\\frac{${Math.abs(simplifiedNum)}}{${simplifiedDen}}`;
        } else {
          return `\\frac{${simplifiedNum}}{${simplifiedDen}}`;
        }
      }
    }

    return coeff;
  };

  // Generate coefficients
  let A = generateCoeff();
  let B = generateCoeff();
  let C = generateCoeff();

  // Ensure A is not zero (for quadratic equation)
  while (processCoeff(A) === 0) {
    A = generateCoeff();
  }

  // Helper function to format coefficient for LaTeX
  const formatCoeff = (coeff: any, isFirst: boolean = false, variable: string = '') => {
    const processedCoeff = processCoeff(coeff);
    const coeffStr = String(processedCoeff);

    if (coeffStr === '0') return '';

    if (isFirst) {
      if (coeffStr === '1' && variable) return variable;
      if (coeffStr === '-1' && variable) return `-${variable}`;
      return `${coeffStr} ${variable}`;
    } else {
      if (coeffStr === '1' && variable) return ` + ${variable}`;
      if (coeffStr === '-1' && variable) return ` - ${variable}`;
      if (coeffStr.startsWith('-')) return ` - ${coeffStr.slice(1)} ${variable}`;
      return ` + ${coeffStr} ${variable}`;
    }
  };

  const letter = getRandomLatinLetter(random, 'lower');

  // Build LaTeX equation
  let equation = formatCoeff(A, true, `${letter}^2`);

  const bTerm = formatCoeff(B, false, `${letter}`);
  if (bTerm) equation += bTerm;

  const cTerm = formatCoeff(C, false, '');
  if (cTerm) equation += cTerm;

  equation += ' = 0';

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <P>
            Construct a quadratic equation with variable <M>{letter}</M> from the given coefficients:
          </P>
          <BlockMath>{math`A = ${A}, \enspace B = ${B}, \enspace C = ${C}`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`${equation}`}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
