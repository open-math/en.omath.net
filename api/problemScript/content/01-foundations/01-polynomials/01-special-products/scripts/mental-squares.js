var { Br, ProblemDescription, ProblemHint, ProblemAnswer, M, jsx, jsxs, Fragment, defineProblemScript, MathValueCheck } = globalThis.ERUDIT_GLOBAL;

// content/01-foundations/01-polynomials/01-special-products/scripts/mental-squares.tsx
var mental_squares_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const isSum = random.boolean();
  let n;
  let round;
  let offset;
  if (isSum) {
    round = random.integer(1, 9) * 10;
    offset = random.integer(1, Math.min(5, 99 - round));
    n = round + offset;
  } else {
    round = random.integer(2, 10) * 10;
    offset = random.integer(1, Math.min(5, round - 11));
    n = round - offset;
  }
  const answer = n * n;
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        "Square ",
        /* @__PURE__ */ jsx(M, { children: n }),
        " without multiplying directly.",
        /* @__PURE__ */ jsx(Br, {}),
        "Try to do it in your head."
      ] }),
      /* @__PURE__ */ jsx(MathValueCheck, { answer }),
      /* @__PURE__ */ jsx(ProblemHint, { children: isSum ? "Use the square of a sum formula." : "Use the square of a difference formula." }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(M, { children: answer }) })
    ] })
  };
});
export {
  mental_squares_default as default
};
