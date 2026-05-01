var { Dep, P, ProblemDescription, ProblemHint, ProblemSolution, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, MathValueCheck } = globalThis.ERUDIT_GLOBAL;

// content/01-foundations/01-polynomials/01-special-products/scripts/simple-difference.tsx
var simple_difference_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const n = random.integer(1e4, 999999);
  const d = random.integer(2, 15);
  const n1 = n - d;
  const n2 = n + d;
  const answer = d * d;
  const diffOfSquares = {"__ERUDIT_globalContentItem":true,"__path":"foundations/polynomials/special-products/article/$diffOfSquares"};
  const simpleProduct = {"__ERUDIT_globalContentItem":true,"__path":"foundations/polynomials/special-products/practice/$simpleProduct"};
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        "Compute the expression",
        " ",
        /* @__PURE__ */ jsxs(M, { children: [
          n,
          "^2 - ",
          n1,
          " \\cdot ",
          n2
        ] }),
        "."
      ] }),
      /* @__PURE__ */ jsx(MathValueCheck, { answer }),
      /* @__PURE__ */ jsxs(ProblemHint, { children: [
        "This is a modified version of the ",
        /* @__PURE__ */ jsx(Dep, { on: simpleProduct, children: "Simple product" }),
        " problem."
      ] }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(M, { children: answer }) }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "Notice that",
          " ",
          /* @__PURE__ */ jsxs(M, { children: [
            n1,
            " = ",
            n,
            " - ",
            d
          ] }),
          " ",
          "and",
          " ",
          /* @__PURE__ */ jsxs(M, { children: [
            n2,
            " = ",
            n,
            " + ",
            d
          ] }),
          ", so the factors sit symmetrically around ",
          /* @__PURE__ */ jsx(M, { children: n }),
          ". Apply the",
          " ",
          /* @__PURE__ */ jsx(Dep, { on: diffOfSquares, children: "difference of squares" }),
          " formula to their product:"
        ] }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            ${n1} \cdot ${n2} = (${n} - ${d})(${n} + ${d}) = ${n}^2 - ${d}^2
          ` }),
        /* @__PURE__ */ jsx(P, { children: "Substitute this into the original expression:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            ${n}^2 - ${n1} \cdot ${n2} = ${n}^2 - \left(${n}^2 - ${d}^2\right) = \cancel{${n}^2} - \cancel{${n}^2} + ${d}^2 = ${d}^2 = ${answer}
          ` }),
        /* @__PURE__ */ jsxs(P, { children: [
          "The huge ",
          /* @__PURE__ */ jsxs(M, { children: [
            n,
            "^2"
          ] }),
          " terms kill each other off, and all that survives is the tiny square",
          " ",
          /* @__PURE__ */ jsxs(M, { children: [
            d,
            "^2 = ",
            answer
          ] }),
          "."
        ] })
      ] })
    ] })
  };
});
export {
  simple_difference_default as default
};
