var { B, P, ProblemDescription, ProblemSolution, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;

// content/01-foundations/02-equations/01-elementary/scripts/general-formula.tsx
var general_formula_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  let A = random.integer(-10, 10);
  while (A === 0) {
    A = random.integer(-10, 10);
  }
  const B = random.integer(-20, 20);
  let equation = "";
  if (A === 1) {
    equation = "x";
  } else if (A === -1) {
    equation = "-x";
  } else {
    equation = `${A}x`;
  }
  if (B > 0) {
    equation += ` + ${B} = 0`;
  } else if (B < 0) {
    equation += ` - ${Math.abs(B)} = 0`;
  } else {
    equation += " = 0";
  }
  let root = "";
  if (B === 0) {
    root = "0";
  } else if (B % A === 0) {
    const intRoot = -B / A;
    root = intRoot.toString();
  } else {
    const numerator = -B;
    const denominator = A;
    const gcd = (a, b) => {
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
  const plainRoot = root.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1/$2").replace(/^-?\\frac/, (m) => m.includes("-") ? "-" : "");
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsx(P, { children: "Solve the equation using the previously derived general formula:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: equation })
      ] }),
      /* @__PURE__ */ jsx(RootsCheck, { root: plainRoot }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: root }) }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "Identify the coefficients ",
          /* @__PURE__ */ jsx(M, { children: "A" }),
          " and ",
          /* @__PURE__ */ jsx(M, { children: "B" }),
          " in the equation:"
        ] }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            A = ${A}, \enspace B = ${B}
          ` }),
        /* @__PURE__ */ jsx(P, { children: "Substitute them into the general formula:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            x = -\frac{B}{A}
            >>{big}
            x = -\frac{ ${B} }{ ${A} }
            >>{big}
            \boxed{x = ${root} }
          ` })
      ] })
    ] })
  };
});
export {
  general_formula_default as default
};
