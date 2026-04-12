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
function reduceCoefficients(A, B, C) {
  const g = gcd(gcd(Math.abs(A), Math.abs(B)), Math.abs(C));
  A /= g;
  B /= g;
  C /= g;
  if (A < 0) {
    A = -A;
    B = -B;
    C = -C;
  }
  return [A, B, C];
}
function isZeroSumSolvable(A, B, C) {
  if (A + B + C === 0) return "plus";
  if (A - B + C === 0) return "minus";
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

// content/01-foundations/02-equations/03-quadratic/8-mental-solving/scripts/zero-sum.tsx
function generateSolvable(random) {
  const roll = random.integer(0, 15);
  let A;
  let C;
  if (roll <= 5) {
    A = 1;
    C = random.integer(-12, 12);
    while (C === 0 || C === 1 || C === -1) C = random.integer(-12, 12);
  } else if (roll <= 9) {
    A = random.integer(2, 5);
    let k = random.integer(-5, 5);
    while (k === 0 || k === 1 || k === -1) k = random.integer(-5, 5);
    C = A * k;
  } else if (roll <= 13) {
    A = [2, 3, 5, 7][random.integer(0, 3)];
    C = random.integer(-12, 12);
    while (C === 0 || C === -A || C % A === 0) C = random.integer(-12, 12);
  } else {
    A = random.integer(2, 7);
    C = random.integer(-15, 15);
    while (C === 0 || C === A || C === -A) C = random.integer(-15, 15);
  }
  const minusVariant = random.boolean();
  let B = minusVariant ? A + C : -(A + C);
  [A, B, C] = reduceCoefficients(A, B, C);
  return { A, B, C, minusVariant };
}
function generateUnsolvable(random) {
  let A;
  let B;
  let C;
  do {
    A = random.integer(1, 7);
    B = random.integer(-15, 15);
    while (B === 0) B = random.integer(-15, 15);
    C = random.integer(-15, 15);
    while (C === 0) C = random.integer(-15, 15);
    [A, B, C] = reduceCoefficients(A, B, C);
  } while (isZeroSumSolvable(A, B, C));
  return { A, B, C };
}
var zero_sum_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const solvable = random.integer(1, 10) <= 7;
  if (!solvable) {
    const { A: A2, B: B2, C: C2 } = generateUnsolvable(random);
    const equation2 = formatTrinomial(A2, B2, C2, "x", 2, 1);
    return {
      problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation2 }) }),
        /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable by this method?", no: true }),
        /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsxs(P, { children: [
          "The coefficient sum ",
          /* @__PURE__ */ jsx(M, { children: `${A2} + ${B2 > 0 ? `(${B2})` : `(${B2})`} + ${C2 > 0 ? `(${C2})` : `(${C2})`}` }),
          " is not zero with either ",
          /* @__PURE__ */ jsx(M, { children: "+B" }),
          " or ",
          /* @__PURE__ */ jsx(M, { children: "-B" }),
          ". The zero-sum method does not apply."
        ] }) })
      ] })
    };
  }
  const { A, B, C, minusVariant } = generateSolvable(random);
  const equation = formatTrinomial(A, B, C, "x", 2, 1);
  const [rn, rd] = simplifyFraction(minusVariant ? -C : C, A);
  const root1 = minusVariant ? -1 : 1;
  const isDoubleRoot = rn === root1 && rd === 1;
  const root2Check = rootCheckValue(minusVariant ? -C : C, A);
  const root2Ltx = rootLatex(minusVariant ? -C : C, A);
  const answerLatex = isDoubleRoot ? `x = ${root1}` : `x_1 = ${root1}, \\enspace x_2 = ${root2Ltx}`;
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation }) }),
      /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable by this method?", yes: true, children: /* @__PURE__ */ jsx(RootsCheck, { roots: isDoubleRoot ? [root1] : [root1, root2Check] }) }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: answerLatex }) })
    ] })
  };
});
export {
  zero_sum_default as default
};
