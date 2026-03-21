var { B, P, ProblemDescription, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;
// node_modules/@open-math/shared/dist/utils/letter.js
var DEFAULT_SKIP = ["i", "f", "g", "e", "z"];
function getRandomLatinLetter(random, options) {
  const { casing = "any", skip = DEFAULT_SKIP } = options ?? {};
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const skipLower = new Set(skip.map((l) => l.toLowerCase()));
  const pool = casing === "lower" ? lowerLetters : casing === "upper" ? upperLetters : lowerLetters + upperLetters;
  const filtered = pool.split("").filter((ch) => !skipLower.has(ch.toLowerCase()));
  return random.arrayElement(filtered);
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


// content/01-foundations/02-equations/03-quadratic/4-quadratic-formula/scripts/even/shared.tsx
function formatEquation(A, B, C, v) {
  let eq = "";
  if (A === 1) eq += `${v}^2`;
  else if (A === -1) eq += `-${v}^2`;
  else eq += `${A}${v}^2`;
  if (B !== 0) {
    if (B === 1) eq += ` + ${v}`;
    else if (B === -1) eq += ` - ${v}`;
    else if (B > 0) eq += ` + ${B}${v}`;
    else eq += ` - ${Math.abs(B)}${v}`;
  }
  if (C !== 0) {
    if (C > 0) eq += ` + ${C}`;
    else eq += ` - ${Math.abs(C)}`;
  }
  eq += " = 0";
  return eq;
}
function createEvenQuadraticProblem(a1) {
  return defineProblemScript('__auto_generated__',{
    isGenerator: true
  })(({ random }) => {
    const v = getRandomLatinLetter(random, { casing: "lower" });
    let A;
    if (a1) {
      A = 1;
    } else {
      do {
        A = random.integer(-10, 10);
      } while (A === 0);
    }
    const hasRoots = random.integer(1, 10) <= 7;
    let B, C;
    let r1, r2;
    if (hasRoots) {
      r1 = random.integer(-8, 8);
      if (r1 === 0) r1 = 1;
      const needSameParity = Math.abs(A) % 2 === 1;
      const candidates = [];
      for (let v2 = -8; v2 <= 8; v2++) {
        if (v2 === 0) continue;
        if (v2 === r1) continue;
        if (v2 === -r1) continue;
        if (needSameParity && v2 % 2 !== r1 % 2) continue;
        candidates.push(v2);
      }
      r2 = candidates[random.integer(0, candidates.length - 1)];
      const k = -A * (r1 + r2) / 2;
      B = 2 * k;
      C = A * r1 * r2;
    } else {
      let k;
      do {
        k = random.integer(-6, 6);
      } while (k === 0);
      B = 2 * k;
      const delta = random.integer(1, 5);
      const m = Math.floor(k * k / Math.abs(A)) + delta;
      C = Math.sign(A) * m;
    }
    const equation = formatEquation(A, B, C, v);
    return {
      problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(ProblemDescription, { children: [
          /* @__PURE__ */ jsxs(P, { children: [
            "Use the derived formulas to solve a quadratic equation with an even coefficient ",
            /* @__PURE__ */ jsx(M, { children: "B" }),
            ":"
          ] }),
          /* @__PURE__ */ jsx(BlockMath, { children: equation })
        ] }),
        hasRoots ? /* @__PURE__ */ jsx(RootsCheck, { has: true, roots: [r1, r2] }) : /* @__PURE__ */ jsx(RootsCheck, { empty: true }),
        /* @__PURE__ */ jsx(ProblemAnswer, { children: hasRoots ? /* @__PURE__ */ jsxs(P, { children: [
          /* @__PURE__ */ jsx(M, { children: r1 }),
          " and ",
          /* @__PURE__ */ jsx(M, { children: r2 }),
          "."
        ] }) : /* @__PURE__ */ jsx(P, { children: "No roots." }) })
      ] })
    };
  });
}

// content/01-foundations/02-equations/03-quadratic/4-quadratic-formula/scripts/even/a1.tsx
var a1_default = createEvenQuadraticProblem(true);
export {
  a1_default as default
};
