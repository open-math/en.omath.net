var { Dep, P, ProblemDescription, ProblemHint, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;
// node_modules/@open-math/shared/dist/utils/number.js
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}
function simplifyFraction(n, d) {
  if (d < 0) {
    n = -n;
    d = -d;
  }
  const g = gcd(Math.abs(n), d);
  return [n / g, d / g];
}
function simplifySqrt(n) {
  let k = 1;
  let r = n;
  for (let f = 2; f * f <= r; f++) {
    while (r % (f * f) === 0) {
      k *= f;
      r /= f * f;
    }
  }
  return [k, r];
}

// node_modules/@open-math/shared/dist/utils/qed.js

// node_modules/@open-math/shared/dist/utils/roots.js

// node_modules/@erudit-js/core/dist/problemCheck.js
function defineProblemCheck(name) {
  function finalizeProblemCheck() {
    return {
      name
    };
  }
  return finalizeProblemCheck;
}

// node_modules/@open-math/shared/dist/checks/mEqualityCheck.js
var mathEqualityCheckDefinition = defineProblemCheck("math-equality")();

// node_modules/@open-math/shared/dist/utils/math.js


// content/01-foundations/02-equations/03-quadratic/4-quadratic-formula/scripts/quadratic-shared.tsx
function sqrtLatex(n) {
  const [k, r] = simplifySqrt(n);
  if (r === 1) return `${k}`;
  if (k === 1) return `\\sqrt{${r}}`;
  return `${k}\\sqrt{${r}}`;
}

// content/01-foundations/02-equations/03-quadratic/5-factoring/scripts/mental-roots.tsx
function makeIntegerRoot(random) {
  const v = random.integer(-15, 15);
  return { factorLatex: `${v}`, checkValue: v, answerLatex: `${v}` };
}
function makeFractionRoot(random) {
  const d = random.integer(2, 7);
  let n;
  do {
    n = random.integer(-9, 9);
  } while (n === 0 || gcd(Math.abs(n), d) !== 1);
  const [sn, sd] = simplifyFraction(n, d);
  const sign = sn < 0 ? "-" : "";
  const latex = `${sign}\\frac{${Math.abs(sn)}}{${sd}}`;
  return { factorLatex: latex, checkValue: `${sn}/${sd}`, answerLatex: latex };
}
function makeSqrtRoot(random) {
  const bases = [2, 3, 5, 6, 7];
  const base = bases[random.integer(0, bases.length - 1)];
  const neg = random.boolean();
  const latex = neg ? `-${sqrtLatex(base)}` : sqrtLatex(base);
  const check = neg ? `-sqrt(${base})` : `sqrt(${base})`;
  return { factorLatex: latex, checkValue: check, answerLatex: latex };
}
function makeSquareRoot(random) {
  const v = random.integer(2, 6);
  const neg = random.boolean();
  const val = v * v;
  const latex = neg ? `-${v}^2` : `${v}^2`;
  const ansLatex = `${neg ? "-" : ""}${val}`;
  return { factorLatex: latex, checkValue: neg ? -val : val, answerLatex: ansLatex };
}
function formatFactor(root) {
  const latex = root.factorLatex;
  if (latex.startsWith("-")) {
    return `\\left(x + ${latex.slice(1)}\\right)`;
  }
  return `\\left(x - ${latex}\\right)`;
}
var mental_roots_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const makers = [makeIntegerRoot, makeFractionRoot, makeSqrtRoot, makeSquareRoot];
  const maker1 = makers[random.integer(0, makers.length - 1)];
  const maker2 = makers[random.integer(0, makers.length - 1)];
  const root1 = maker1(random);
  let root2 = maker2(random);
  let attempts = 0;
  while (root2.checkValue === root1.checkValue && attempts < 20) {
    root2 = maker2(random);
    attempts++;
  }
  let A = random.integer(-5, 5);
  while (A === 0) A = random.integer(-5, 5);
  const aPrefix = A === 1 ? "" : A === -1 ? "-" : `${A}`;
  const factored = `${aPrefix}${formatFactor(root1)}${formatFactor(root2)} = 0`;
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsx(P, { children: "Solve the equation:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: factored })
      ] }),
      /* @__PURE__ */ jsx(RootsCheck, { roots: [root1.checkValue, root2.checkValue] }),
      /* @__PURE__ */ jsxs(ProblemHint, { children: [
        "The roots are the opposites of the numbers next to ",
        /* @__PURE__ */ jsx(M, { children: "x" }),
        " in each bracket. See the full explanation in the",
        " ",
        /* @__PURE__ */ jsx(Dep, { on: {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/zero-product-property"}, children: "Zero product property" }),
        " page."
      ] }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: `x_1 = ${root1.answerLatex}, \\enspace x_2 = ${root2.answerLatex}` }) })
    ] })
  };
});
export {
  mental_roots_default as default
};
