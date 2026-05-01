var { Dep, P, ProblemDescription, ProblemHint, ProblemSolution, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, MathValueCheck } = globalThis.ERUDIT_GLOBAL;

// content/01-foundations/01-polynomials/01-special-products/scripts/simple-product.tsx
var simple_product_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const round = random.integer(2, 9) * 100;
  const offset = random.integer(1, 3);
  const n1 = round + offset;
  const n2 = round - offset;
  const answer = round * round - offset * offset;
  const diffOfSquares = {"__ERUDIT_globalContentItem":true,"__path":"foundations/polynomials/special-products/article/$diffOfSquares"};
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        "Without multiplying directly, find the value of",
        " ",
        /* @__PURE__ */ jsxs(M, { children: [
          n1,
          " \\cdot ",
          n2
        ] }),
        "."
      ] }),
      /* @__PURE__ */ jsx(MathValueCheck, { answer }),
      /* @__PURE__ */ jsx(ProblemHint, { children: "Rewrite the numbers as parentheses. You can choose them so the two parentheses are identical except for the sign between their terms." }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(M, { children: answer }) }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "The first number can be written as",
          " ",
          /* @__PURE__ */ jsxs(M, { children: [
            n1,
            " = ",
            round,
            " + ",
            offset
          ] }),
          ", and the second as",
          " ",
          /* @__PURE__ */ jsxs(M, { children: [
            n2,
            " = ",
            round,
            " - ",
            offset
          ] }),
          ". Then the product follows the ",
          /* @__PURE__ */ jsx(Dep, { on: diffOfSquares, children: "difference of squares" }),
          " formula:"
        ] }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            ${n1} \cdot ${n2} = (${round} + ${offset})(${round} - ${offset}) = ${round}^2 - ${offset}^2 = ${round * round} - ${offset * offset} = ${answer}
          ` })
      ] })
    ] })
  };
});
export {
  simple_product_default as default
};
