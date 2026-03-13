var { B, Dep, P, ProblemDescription, ProblemHint, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, MathExpressionCheck, RootsCheck } = globalThis.ERUDIT_GLOBAL;
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

// node_modules/@open-math/shared/dist/utils/math.js


// content/01-foundations/02-equations/02-quadratic/4-quadratic-formula/scripts/quadratic-shared.tsx
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

// content/01-foundations/02-equations/02-quadratic/5-factoring/scripts/factor-quadratic.tsx
function formatFactor(n, d, v) {
  const [sn, sd] = simplifyFraction(n, d);
  if (sd === 1) {
    if (sn === 0) return v;
    if (sn > 0) return `(${v} - ${sn})`;
    return `(${v} + ${-sn})`;
  }
  if (sn > 0) return `\\left(${v} - ${fractionLatex(sn, sd)}\\right)`;
  return `\\left(${v} + ${fractionLatex(-sn, sd)}\\right)`;
}
function formatFactorPlain(n, d, v) {
  const [sn, sd] = simplifyFraction(n, d);
  if (sd === 1) {
    if (sn === 0) return v;
    if (sn > 0) return `(${v} - ${sn})`;
    return `(${v} + ${-sn})`;
  }
  if (sn > 0) return `(${v} - ${sn}/${sd})`;
  return `(${v} + ${-sn}/${sd})`;
}
function formatIrrFactor(a, k, r, addSqrt, v, latex) {
  const sqrtStr = latex ? k === 1 ? `\\sqrt{${r}}` : `${k}\\sqrt{${r}}` : k === 1 ? `sqrt(${r})` : `${k}*sqrt(${r})`;
  let terms = v;
  if (a > 0) terms += ` + ${a}`;
  else if (a < 0) terms += ` - ${-a}`;
  if (addSqrt) terms += ` + ${sqrtStr}`;
  else terms += ` - ${sqrtStr}`;
  return `(${terms})`;
}
var factor_quadratic_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const v = "x";
  const type = random.integer(0, 2);
  let equation;
  let factoredLatex;
  let factoredPlain;
  let roots;
  const quadraticFormula = {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/quadratic-formula/article/$formula"};
  const factoredFormula = {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/factoring/article/$generalFactoring"};
  let hint = /* @__PURE__ */ jsxs(ProblemHint, { children: [
    "Find the roots using the ",
    /* @__PURE__ */ jsx(Dep, { on: quadraticFormula, children: "quadratic formula" }),
    ". Use these roots to factor the quadratic trinomial via ",
    /* @__PURE__ */ jsx(Dep, { on: factoredFormula, children: "factoring formula" }),
    "."
  ] });
  if (type === 0) {
    const A = random.integer(1, 5);
    const subType = random.integer(0, 9);
    let r1;
    let r2;
    if (subType <= 1) {
      r1 = random.integer(1, 10);
      r2 = -r1;
    } else if (subType === 2) {
      r1 = 0;
      r2 = random.integer(-10, 10);
      while (r2 === 0) r2 = random.integer(-10, 10);
    } else {
      r1 = random.integer(-10, 10);
      r2 = random.integer(-10, 10);
      while (r2 === r1) r2 = random.integer(-10, 10);
    }
    if (r1 > r2) [r1, r2] = [r2, r1];
    const B = -A * (r1 + r2);
    const C = A * r1 * r2;
    equation = formatTrinomial(A, B, C, v, 2, 1).replace(" = 0", "");
    const f1 = formatFactor(r1, 1, v);
    const f2 = formatFactor(r2, 1, v);
    factoredLatex = A === 1 ? `${f1}${f2}` : `${A}${f1}${f2}`;
    const f1p = formatFactorPlain(r1, 1, v);
    const f2p = formatFactorPlain(r2, 1, v);
    factoredPlain = A === 1 ? `${f1p}${f2p}` : `${A}${f1p}${f2p}`;
    roots = [r1, r2];
    if (r1 === 0 || r2 === 0) {
      hint = /* @__PURE__ */ jsxs(ProblemHint, { children: [
        "Factor out ",
        /* @__PURE__ */ jsx(M, { children: "x" }),
        "."
      ] });
    } else if (r1 + r2 === 0 && A === 1) {
      hint = /* @__PURE__ */ jsx(ProblemHint, { children: "Use the difference of squares formula." });
    } else if (r1 + r2 === 0) {
      hint = /* @__PURE__ */ jsx(ProblemHint, { children: "Factor out the common factor first, then use the difference of squares formula." });
    }
  } else if (type === 1) {
    const denoms = [2, 3, 4, 5];
    const d1 = denoms[random.integer(0, denoms.length - 1)];
    const d2 = denoms[random.integer(0, denoms.length - 1)];
    let n1;
    do {
      n1 = random.integer(-7, 7);
    } while (n1 === 0 || gcd(Math.abs(n1), d1) !== 1);
    let n2;
    do {
      n2 = random.integer(-7, 7);
    } while (n2 === 0 || gcd(Math.abs(n2), d2) !== 1 || n1 * d2 === n2 * d1);
    let A = d1 * d2;
    let B = -(n1 * d2 + n2 * d1);
    let C = n1 * n2;
    const g = gcd(gcd(Math.abs(A), Math.abs(B)), Math.abs(C));
    A /= g;
    B /= g;
    C /= g;
    if (A < 0) {
      A = -A;
      B = -B;
      C = -C;
    }
    const val1 = n1 / d1;
    const val2 = n2 / d2;
    let [sn1, sd1] = simplifyFraction(n1, d1);
    let [sn2, sd2] = simplifyFraction(n2, d2);
    if (val1 > val2) {
      [sn1, sd1, sn2, sd2] = [sn2, sd2, sn1, sd1];
    }
    equation = formatTrinomial(A, B, C, v, 2, 1).replace(" = 0", "");
    const f1 = formatFactor(sn1, sd1, v);
    const f2 = formatFactor(sn2, sd2, v);
    factoredLatex = A === 1 ? `${f1}${f2}` : `${A}${f1}${f2}`;
    const f1p = formatFactorPlain(sn1, sd1, v);
    const f2p = formatFactorPlain(sn2, sd2, v);
    factoredPlain = A === 1 ? `${f1p}${f2p}` : `${A}${f1p}${f2p}`;
    const root1Str = sd1 === 1 ? `${sn1}` : `${sn1}/${sd1}`;
    const root2Str = sd2 === 1 ? `${sn2}` : `${sn2}/${sd2}`;
    roots = [root1Str, root2Str];
  } else {
    const b = random.integer(-5, 5);
    const B = 2 * b;
    let C;
    let bSqMinusC;
    do {
      C = random.integer(-12, 12);
      bSqMinusC = b * b - C;
    } while (bSqMinusC <= 0 || isPerfectSquare(bSqMinusC));
    equation = formatTrinomial(1, B, C, v, 2, 1).replace(" = 0", "");
    const [k0, r0] = simplifySqrt(bSqMinusC);
    const f1L = formatIrrFactor(b, k0, r0, true, v, true);
    const f1P = formatIrrFactor(b, k0, r0, true, v, false);
    const f2L = formatIrrFactor(b, k0, r0, false, v, true);
    const f2P = formatIrrFactor(b, k0, r0, false, v, false);
    factoredLatex = `${f1L}${f2L}`;
    factoredPlain = `${f1P}${f2P}`;
    const D = B * B - 4 * C;
    roots = [`(${-B} - sqrt(${D})) / 2`, `(${-B} + sqrt(${D})) / 2`];
  }
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsx(P, { children: "Factor the quadratic trinomial and find the roots of the corresponding quadratic equation:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: equation })
      ] }),
      /* @__PURE__ */ jsx(MathExpressionCheck, { label: "Factored form", answer: factoredPlain }),
      /* @__PURE__ */ jsx(RootsCheck, { roots }),
      hint,
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: factoredLatex }) })
    ] })
  };
});
export {
  factor_quadratic_default as default
};
