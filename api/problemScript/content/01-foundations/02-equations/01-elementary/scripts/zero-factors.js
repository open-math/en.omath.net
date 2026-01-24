// jsx-runtime-shim:jsx-runtime-shim
var jsx = globalThis.jsx;
var jsxs = globalThis.jsxs;
var Fragment = globalThis.Fragment;

// content/01-foundations/02-equations/01-elementary/scripts/zero-factors.tsx
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
        /* @__PURE__ */ jsx(P, { children: "Solve the equation:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
                        ${firstFactor}${secondFactor} = 0
                    ` })
      ] }),
      /* @__PURE__ */ jsx(ProblemCheck, { label: "Equation roots", hint: "Comma separated", set: [solution1, solution2] }),
      /* @__PURE__ */ jsxs(ProblemAnswer, { children: [
        /* @__PURE__ */ jsx(M, { children: solution1 }),
        " and ",
        /* @__PURE__ */ jsx(M, { children: solution2 })
      ] }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsx(P, { children: "The equation can be split into two sub-equations, the goal of each is to make the corresponding bracket equal to zero:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                            ${firstFactor} = 0 & ${secondFactor} = 0 \\
                            ${firstEquation} & ${secondEquation} \\
                            \boxed{x = ${solution1}} & \boxed{x = ${solution2}}
                        \end{array}
                    ` }),
        /* @__PURE__ */ jsxs(P, { children: [
          "We found two solutions: ",
          /* @__PURE__ */ jsx(M, { children: solution1 }),
          " and ",
          /* @__PURE__ */ jsx(M, { children: solution2 })
        ] })
      ] })
    ] })
  };
});
export {
  zero_factors_default as default
};
