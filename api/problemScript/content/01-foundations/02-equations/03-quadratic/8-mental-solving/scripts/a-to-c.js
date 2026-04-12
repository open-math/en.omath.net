var { B, P, ProblemDescription, ProblemCheck, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;
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
function fractionLatex(n, d) {
  const [sn, sd] = simplifyFraction(n, d);
  if (sd === 1) return sn.toString();
  const sign = sn < 0 ? "-" : "";
  return `${sign}\\frac{${Math.abs(sn)}}{${sd}}`;
}
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

// content/01-foundations/02-equations/03-quadratic/8-mental-solving/scripts/mental-shared.tsx
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
function rootCheckValue(n, d) {
  const [sn, sd] = simplifyFraction(n, d);
  return sd === 1 ? sn : `${sn}/${sd}`;
}
function rootLatex(n, d) {
  const [sn, sd] = simplifyFraction(n, d);
  return sd === 1 ? `${sn}` : fractionLatex(sn, sd);
}

// content/01-foundations/02-equations/03-quadratic/8-mental-solving/scripts/a-to-c.tsx
function generateSolvable(random) {
  let A, r1, n;
  do {
    A = random.integer(2, 6);
    r1 = random.integer(-8, 8);
    while (r1 === 0) r1 = random.integer(-8, 8);
    n = random.integer(-8, 8);
    while (n === 0 || gcd(Math.abs(n), A) !== 1 || A * r1 + n === 0) n = random.integer(-8, 8);
  } while (Math.abs(A * r1 * n) > 200);
  const B = -(A * r1 + n);
  const C = r1 * n;
  const t = -A * r1;
  const k = -n;
  return { A, B, C, t, k };
}
function generateUnsolvable(random) {
  let A;
  let B;
  let C;
  do {
    A = random.integer(2, 7);
    B = random.integer(-12, 12);
    while (B === 0) B = random.integer(-12, 12);
    C = random.integer(-12, 12);
    while (C === 0) C = random.integer(-12, 12);
  } while (findIntegerFactors(B, A * C) !== false);
  return { A, B, C };
}
var a_to_c_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const solvable = random.integer(1, 10) <= 6;
  if (!solvable) {
    const { A: A2, B: B2, C: C2 } = generateUnsolvable(random);
    const equation2 = formatTrinomial(A2, B2, C2, "x", 2, 1);
    const reducedEquation = formatTrinomial(1, B2, A2 * C2, "x", 2, 1);
    return {
      problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation2 }) }),
        /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable by this method?", no: true }),
        /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsxs(P, { children: [
          "The reduced equation ",
          /* @__PURE__ */ jsx(M, { children: reducedEquation.replace(" = 0", "") }),
          " still does not factor over the integers. Transferring ",
          /* @__PURE__ */ jsx(M, { children: "A" }),
          " to ",
          /* @__PURE__ */ jsx(M, { children: "C" }),
          " does not rescue it."
        ] }) })
      ] })
    };
  }
  const { A, B, C, t, k } = generateSolvable(random);
  const equation = formatTrinomial(A, B, C, "x", 2, 1);
  const root1Check = rootCheckValue(-t, A);
  const root2Check = rootCheckValue(-k, A);
  const root1Ltx = rootLatex(-t, A);
  const root2Ltx = rootLatex(-k, A);
  const answerLatex = `x_1 = ${root1Ltx}, \\enspace x_2 = ${root2Ltx}`;
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation }) }),
      /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable by this method?", yes: true, children: /* @__PURE__ */ jsx(RootsCheck, { roots: [root1Check, root2Check] }) }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: answerLatex }) })
    ] })
  };
});
export {
  a_to_c_default as default
};
