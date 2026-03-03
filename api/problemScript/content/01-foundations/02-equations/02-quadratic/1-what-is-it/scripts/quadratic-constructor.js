var { B, P, ProblemDescription, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript } = globalThis.ERUDIT_GLOBAL;
// node_modules/@open-math/shared/dist/utils/letter.js
var DEFAULT_SKIP = ["i", "f", "g", "e", "z"];
function getRandomLatinLetter(random, options) {
  const { casing = "any", skip = DEFAULT_SKIP } = options ?? {};
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const skipLower = new Set(skip.map((l) => l.toLowerCase()));
  const pool = casing === "lower" ? lowerLetters : casing === "upper" ? upperLetters : lowerLetters + upperLetters;
  const filtered = pool.split("").filter((ch) => !skipLower.has(ch.toLowerCase()));
  return random.arrayElement(filtered);
}

// node_modules/@open-math/shared/dist/utils/qed.js

// node_modules/@open-math/shared/dist/utils/roots.js

// node_modules/@open-math/shared/dist/utils/math.js


// content/01-foundations/02-equations/02-quadratic/1-what-is-it/scripts/quadratic-constructor.tsx
var quadratic_constructor_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const generateCoeff = () => {
    const type = random.integer(1, 6);
    switch (type) {
      case 1:
        return random.integer(-10, 10);
      case 2:
        const num = random.integer(-12, 12);
        const den = random.integer(2, 8);
        return `\\frac{${num}}{${den}}`;
      case 3:
        const radicand = random.integer(2, 20);
        const sign = random.boolean() ? "" : "-";
        return `${sign}\\sqrt{${radicand}}`;
      case 4:
        const a = random.integer(1, 5);
        const b = random.integer(1, 5);
        const op = random.boolean() ? "+" : "-";
        return `(${a}${op}${b})`;
      case 5:
        const coeff = random.integer(-3, 3);
        return coeff === 0 ? random.integer(1, 5) : `${coeff}\\pi`;
      default:
        const base = random.integer(1, 5);
        const root = random.integer(2, 9);
        return `${base}\\sqrt{${root}}`;
    }
  };
  const processCoeff = (coeff) => {
    const coeffStr = String(coeff);
    const parenMatch = coeffStr.match(/^\((\d+)([\+\-])(\d+)\)$/);
    if (parenMatch) {
      const [, a, op, b] = parenMatch;
      const result = op === "+" ? parseInt(a) + parseInt(b) : parseInt(a) - parseInt(b);
      return result;
    }
    const fracMatch = coeffStr.match(/^\\frac\{(-?\d+)\}\{(\d+)\}$/);
    if (fracMatch) {
      const [, num, den] = fracMatch;
      const numVal = parseInt(num);
      const denVal = parseInt(den);
      const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b);
      const divisor = gcd(Math.abs(numVal), denVal);
      const simplifiedNum = numVal / divisor;
      const simplifiedDen = denVal / divisor;
      if (simplifiedDen === 1) {
        return simplifiedNum;
      } else {
        if (simplifiedNum < 0) {
          return `-\\frac{${Math.abs(simplifiedNum)}}{${simplifiedDen}}`;
        } else {
          return `\\frac{${simplifiedNum}}{${simplifiedDen}}`;
        }
      }
    }
    return coeff;
  };
  let A = generateCoeff();
  let B = generateCoeff();
  let C = generateCoeff();
  while (processCoeff(A) === 0) {
    A = generateCoeff();
  }
  const formatCoeff = (coeff, isFirst = false, variable = "") => {
    const processedCoeff = processCoeff(coeff);
    const coeffStr = String(processedCoeff);
    if (coeffStr === "0") return "";
    if (isFirst) {
      if (coeffStr === "1" && variable) return variable;
      if (coeffStr === "-1" && variable) return `-${variable}`;
      return `${coeffStr} ${variable}`;
    } else {
      if (coeffStr === "1" && variable) return ` + ${variable}`;
      if (coeffStr === "-1" && variable) return ` - ${variable}`;
      if (coeffStr.startsWith("-")) return ` - ${coeffStr.slice(1)} ${variable}`;
      return ` + ${coeffStr} ${variable}`;
    }
  };
  const letter = getRandomLatinLetter(random, { casing: "lower" });
  let equation = formatCoeff(A, true, `${letter}^2`);
  const bTerm = formatCoeff(B, false, `${letter}`);
  if (bTerm) equation += bTerm;
  const cTerm = formatCoeff(C, false, "");
  if (cTerm) equation += cTerm;
  equation += " = 0";
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "Construct a quadratic equation with variable ",
          /* @__PURE__ */ jsx(M, { children: letter }),
          " from the given coefficients:"
        ] }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`A = ${A}, \enspace B = ${B}, \enspace C = ${C}` })
      ] }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: math`${equation}` }) })
    ] })
  };
});
export {
  quadratic_constructor_default as default
};
