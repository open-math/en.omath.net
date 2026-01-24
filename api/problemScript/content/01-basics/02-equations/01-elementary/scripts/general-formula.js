// jsx-runtime-shim:jsx-runtime-shim
var jsx = globalThis.jsx;
var jsxs = globalThis.jsxs;
var Fragment = globalThis.Fragment;

// content/01-basics/02-equations/01-elementary/scripts/general-formula.tsx
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
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsx(P, { children: "Решите уравнение, используя выведенную ранее общую формулу:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: equation })
      ] }),
      /* @__PURE__ */ jsx(
        ProblemCheck,
        {
          label: "Корень уравнения",
          answer: root.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1/$2").replace(/^-?\\frac/, (m) => m.includes("-") ? "-" : "")
        }
      ),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: root }) }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "Определяем коэффициенты ",
          /* @__PURE__ */ jsx(M, { children: "A" }),
          " и ",
          /* @__PURE__ */ jsx(M, { children: "B" }),
          " в уравнении:"
        ] }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
                        A = ${A}, \enspace B = ${B}
                    ` }),
        /* @__PURE__ */ jsx(P, { children: "Подставляем их в общую формулу:" }),
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
