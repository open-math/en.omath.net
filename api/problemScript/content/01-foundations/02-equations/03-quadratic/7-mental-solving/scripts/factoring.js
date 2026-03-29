var { B, P, ProblemDescription, ProblemCheck, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;
// node_modules/@open-math/shared/dist/utils/number.js
function isPerfectSquare(n) {
  if (n < 0)
    return false;
  const s = Math.round(Math.sqrt(n));
  return s * s === n;
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
function formatTrinomial(A, B, C, v, highPow, lowPow) {
  const parts = [];
  const vHigh = highPow === 1 ? v : `${v}^${highPow}`;
  if (A === 1) parts.push(vHigh);
  else if (A === -1) parts.push(`-${vHigh}`);
  else parts.push(`${A}${vHigh}`);
  if (B !== 0) {
    const vLow = lowPow === 1 ? v : `${v}^${lowPow}`;
    if (B === 1) parts.push(` + ${vLow}`);
    else if (B === -1) parts.push(` - ${vLow}`);
    else if (B > 0) parts.push(` + ${B}${vLow}`);
    else parts.push(` - ${Math.abs(B)}${vLow}`);
  }
  if (C !== 0) {
    if (C > 0) parts.push(` + ${C}`);
    else parts.push(` - ${Math.abs(C)}`);
  }
  return parts.join("") + " = 0";
}

// content/01-foundations/02-equations/03-quadratic/7-mental-solving/scripts/mental-shared.tsx
function findIntegerFactors(B, C) {
  const absC = Math.abs(C);
  for (let i = 1; i * i <= absC; i++) {
    if (absC % i !== 0) continue;
    const j = absC / i;
    for (const [t, k] of [
      [i, j],
      [-i, -j],
      [i, -j],
      [-i, j]
    ]) {
      if (t + k === B && t * k === C) return [t, k];
    }
  }
  if (C === 0 && B !== 0) return [0, B];
  return false;
}

// content/01-foundations/02-equations/03-quadratic/7-mental-solving/scripts/factoring.tsx
function generateSolvable(random) {
  let t = random.integer(-12, 12);
  let k = random.integer(-12, 12);
  while (k === t) k = random.integer(-12, 12);
  const B = t + k;
  const C = t * k;
  return { B, C, t, k };
}
function generateUnsolvable(random) {
  let B;
  let C;
  do {
    B = random.integer(-10, 10);
    C = random.integer(-15, 15);
    while (C === 0) C = random.integer(-15, 15);
  } while (findIntegerFactors(B, C) !== false || isPerfectSquare(B * B - 4 * C));
  return { B, C };
}
var factoring_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const solvable = random.integer(1, 10) <= 7;
  if (!solvable) {
    const { B: B2, C: C2 } = generateUnsolvable(random);
    const equation2 = formatTrinomial(1, B2, C2, "x", 2, 1);
    return {
      problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation2 }) }),
        /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable by this method?", no: true }),
        /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsxs(P, { children: [
          "There are no integers whose sum is ",
          /* @__PURE__ */ jsx(M, { children: B2 }),
          " and whose product is ",
          /* @__PURE__ */ jsx(M, { children: C2 }),
          ". So this one is not getting factored in your head."
        ] }) })
      ] })
    };
  }
  const { B, C, t, k } = generateSolvable(random);
  const equation = formatTrinomial(1, B, C, "x", 2, 1);
  const root1 = -t;
  const root2 = -k;
  const [r1, r2] = root1 <= root2 ? [root1, root2] : [root2, root1];
  const answerLatex = r1 === r2 ? `x = ${r1}` : `x_1 = ${r1}, \\enspace x_2 = ${r2}`;
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation }) }),
      /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable by this method?", yes: true, children: /* @__PURE__ */ jsx(RootsCheck, { roots: r1 === r2 ? [r1] : [r1, r2] }) }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: answerLatex }) })
    ] })
  };
});
export {
  factoring_default as default
};
