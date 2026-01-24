// jsx-runtime-shim:jsx-runtime-shim
var jsx = globalThis.jsx;
var jsxs = globalThis.jsxs;
var Fragment = globalThis.Fragment;

// content/01-basics/02-equations/01-elementary/scripts/zero-factors.tsx
var zero_factors_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const a = random.integer(-1e3, 1e3);
  const b = random.integer(-1e3, 1e3);
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
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsx(P, { children: "Решите уравнение:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
                        ${firstFactor}${secondFactor} = 0
                    ` })
      ] }),
      /* @__PURE__ */ jsx(ProblemCheck, { label: "Корни уравнения", hint: "Через запятую", set: [solution1, solution2] }),
      /* @__PURE__ */ jsxs(ProblemAnswer, { children: [
        /* @__PURE__ */ jsx(M, { children: solution1 }),
        " и ",
        /* @__PURE__ */ jsx(M, { children: solution2 })
      ] }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsx(P, { children: "Уравнение можно разбить на два под-уравнения, цель каждого из которых -- сделать соответствующую скобку равной нулю:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                            ${firstFactor} = 0 & ${secondFactor} = 0 \\
                            ${firstEquation} & ${secondEquation} \\
                            \boxed{x = ${solution1}} & \boxed{x = ${solution2}}
                        \end{array}
                    ` }),
        /* @__PURE__ */ jsxs(P, { children: [
          "Получили два решения уравнения: ",
          /* @__PURE__ */ jsx(M, { children: solution1 }),
          " и ",
          /* @__PURE__ */ jsx(M, { children: solution2 })
        ] })
      ] })
    ] })
  };
});
export {
  zero_factors_default as default
};
