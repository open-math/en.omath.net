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
function isPerfectSquare(n) {
  if (n < 0)
    return false;
  const s = Math.round(Math.sqrt(n));
  return s * s === n;
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
function rootCheckValue(n, d) {
  const [sn, sd] = simplifyFraction(n, d);
  return sd === 1 ? sn : `${sn}/${sd}`;
}

// content/01-foundations/02-equations/03-quadratic/8-mental-solving/scripts/perfect-square.tsx
function generateSolvable(random) {
  const K = random.integer(1, 6);
  const T = random.integer(1, 7);
  const minus = random.boolean();
  const A = K * K;
  const C = T * T;
  const B = minus ? -2 * K * T : 2 * K * T;
  return { A, B, C, K, T, minus };
}
function generateUnsolvable(random, reason) {
  if (reason === "negative-c") {
    const K2 = random.integer(1, 5);
    const T2 = random.integer(1, 5);
    const A2 = K2 * K2;
    const C2 = -(T2 * T2);
    const B2 = random.boolean() ? -2 * K2 * T2 : 2 * K2 * T2;
    return { A: A2, B: B2, C: C2 };
  }
  if (reason === "not-square") {
    let A2;
    let C2;
    if (random.boolean()) {
      do {
        A2 = random.integer(2, 20);
      } while (isPerfectSquare(A2));
      C2 = random.integer(1, 15);
    } else {
      A2 = [1, 4, 9, 16, 25][random.integer(0, 4)];
      do {
        C2 = random.integer(2, 20);
      } while (isPerfectSquare(C2));
    }
    let B2 = random.integer(-15, 15);
    while (B2 === 0) B2 = random.integer(-15, 15);
    return { A: A2, B: B2, C: C2 };
  }
  const K = random.integer(1, 5);
  const T = random.integer(1, 5);
  const A = K * K;
  const C = T * T;
  const correctB = 2 * K * T;
  let B;
  do {
    B = random.integer(-20, 20);
  } while (B === 0 || Math.abs(B) === correctB);
  return { A, B, C };
}
var perfect_square_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const roll = random.integer(1, 10);
  const solvable = roll <= 6;
  if (!solvable) {
    const reasons = ["not-square", "bad-b", "negative-c", "negative-c"];
    const reason = reasons[random.integer(0, reasons.length - 1)];
    const { A: A2, B: B2, C: C2 } = generateUnsolvable(random, reason);
    const equation2 = formatTrinomial(A2, B2, C2, "x", 2, 1);
    return {
      problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation2 }) }),
        /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable by this method?", no: true }),
        /* @__PURE__ */ jsxs(ProblemAnswer, { children: [
          reason === "not-square" && /* @__PURE__ */ jsxs(P, { children: [
            "The coefficient ",
            /* @__PURE__ */ jsxs(M, { children: [
              "A = ",
              A2
            ] }),
            " or ",
            /* @__PURE__ */ jsxs(M, { children: [
              "C = ",
              C2
            ] }),
            " is not a perfect square. The perfect-square method does not apply."
          ] }),
          reason === "bad-b" && /* @__PURE__ */ jsxs(P, { children: [
            "The coefficients ",
            /* @__PURE__ */ jsx(M, { children: "A" }),
            " and ",
            /* @__PURE__ */ jsx(M, { children: "C" }),
            " are perfect squares, but ",
            /* @__PURE__ */ jsxs(M, { children: [
              "|B| = ",
              Math.abs(B2)
            ] }),
            " is not equal to",
            " ",
            /* @__PURE__ */ jsxs(M, { children: [
              "2 \\cdot ",
              Math.round(Math.sqrt(A2)),
              " \\cdot ",
              Math.round(Math.sqrt(Math.abs(C2))),
              " =",
              " ",
              2 * Math.round(Math.sqrt(A2)) * Math.round(Math.sqrt(Math.abs(C2)))
            ] }),
            ". The method does not apply."
          ] }),
          reason === "negative-c" && /* @__PURE__ */ jsxs(P, { children: [
            "The coefficients ",
            /* @__PURE__ */ jsx(M, { children: "A" }),
            " and ",
            /* @__PURE__ */ jsx(M, { children: "|C|" }),
            " are perfect squares, and ",
            /* @__PURE__ */ jsx(M, { children: "|B|" }),
            " fits too, but there is a minus sign in front of ",
            /* @__PURE__ */ jsx(M, { children: "C" }),
            ". The square-of-a-sum or square-of-a-difference formulas need a ",
            /* @__PURE__ */ jsx(M, { children: "+" }),
            " ",
            "before the last term. The method does not apply."
          ] })
        ] })
      ] })
    };
  }
  const { A, B, C, K, T, minus } = generateSolvable(random);
  const equation = formatTrinomial(A, B, C, "x", 2, 1);
  const rootN = minus ? T : -T;
  const rootCheck = rootCheckValue(rootN, K);
  const rootLtx = fractionLatex(rootN, K);
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation }) }),
      /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable by this method?", yes: true, children: /* @__PURE__ */ jsx(RootsCheck, { roots: [rootCheck] }) }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: `x = ${rootLtx}` }) })
    ] })
  };
});
export {
  perfect_square_default as default
};
