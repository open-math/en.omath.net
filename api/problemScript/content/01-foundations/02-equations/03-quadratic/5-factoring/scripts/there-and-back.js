var { B, Dep, P, ProblemDescription, ProblemHint, ProblemAnswer, BlockMath, math, jsx, jsxs, Fragment, defineProblemScript, MathExpressionCheck } = globalThis.ERUDIT_GLOBAL;

// content/01-foundations/02-equations/03-quadratic/5-factoring/scripts/there-and-back.tsx
var there_and_back_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  function genRoots() {
    let t = random.integer(-12, 12);
    let k = random.integer(-12, 12);
    while (k === t) k = random.integer(-12, 12);
    if (t > k) [t, k] = [k, t];
    return [t, k];
  }
  const [t1, k1] = genRoots();
  const [t2, k2] = genRoots();
  const B1 = -(t1 + k1);
  const C1 = t1 * k1;
  const B2 = -(t2 + k2);
  const C2 = t2 * k2;
  function formatFactor(r) {
    if (r === 0) return "x";
    if (r > 0) return `(x - ${r})`;
    return `(x + ${-r})`;
  }
  function formatTrinomial(B, C) {
    let expr = "x^2";
    if (B === 1) expr += " + x";
    else if (B === -1) expr += " - x";
    else if (B > 0) expr += ` + ${B}x`;
    else if (B < 0) expr += ` - ${Math.abs(B)}x`;
    if (C > 0) expr += ` + ${C}`;
    else if (C < 0) expr += ` - ${Math.abs(C)}`;
    return expr;
  }
  const factored1 = `${formatFactor(t1)}${formatFactor(k1)}`;
  const trinomial1 = formatTrinomial(B1, C1);
  const factored2 = `${formatFactor(t2)}${formatFactor(k2)}`;
  const trinomial2 = formatTrinomial(B2, C2);
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsx(P, { children: "Factor the first expression, and rewrite the expression on the right in standard quadratic trinomial form:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`1) \enspace ${trinomial1} >>{big} 2) \enspace ${factored2}` })
      ] }),
      /* @__PURE__ */ jsx(MathExpressionCheck, { label: "1) Factored form", answer: factored1 }),
      /* @__PURE__ */ jsx(MathExpressionCheck, { label: "2) Expanded form", answer: trinomial2 }),
      /* @__PURE__ */ jsxs(ProblemHint, { children: [
        "For factoring, review the",
        " ",
        /* @__PURE__ */ jsx(Dep, { on: {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/factoring/article/$manualFactoring"}, children: "examples" }),
        " from the article."
      ] }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: math`1) \enspace ${factored1} >>{big} 2) \enspace ${trinomial2}` }) })
    ] })
  };
});
export {
  there_and_back_default as default
};
