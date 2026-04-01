var { B, Dep, P, ProblemDescription, ProblemCheck, ProblemAnswer, BlockMath, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;
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

// content/01-foundations/02-equations/03-quadratic/7-mental-solving/scripts/mental-shared.tsx
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
function isPerfectSquareSolvable(A, B, C) {
  if (A <= 0 || C < 0) return false;
  if (!isPerfectSquare(A) || !isPerfectSquare(C)) return false;
  const K = Math.round(Math.sqrt(A));
  const T = Math.round(Math.sqrt(C));
  if (Math.abs(B) !== 2 * K * T) return false;
  return { K, T, minus: B < 0 };
}
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

// content/01-foundations/02-equations/03-quadratic/7-mental-solving/scripts/mixed.tsx
var methodZeroSum = {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/mental-solving/article/$methodZeroSum"};
var methodSquare = {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/mental-solving/article/$methodSquare"};
var methodFactoring = {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/mental-solving/article/$methodFactoring"};
var methodAtoC = {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/mental-solving/article/$methodAtoC"};
function genZeroSum(random) {
  let A = random.integer(1, 7);
  let C = random.integer(-12, 12);
  while (C === 0) C = random.integer(-12, 12);
  const minusVariant = random.boolean();
  let B = minusVariant ? A + C : -(A + C);
  [A, B, C] = reduceCoefficients(A, B, C);
  const root1 = minusVariant ? -1 : 1;
  const root2Check = rootCheckValue(minusVariant ? -C : C, A);
  const root2Ltx = rootLatex(minusVariant ? -C : C, A);
  const [rn, rd] = simplifyFraction(minusVariant ? -C : C, A);
  const isDouble = rn === root1 && rd === 1;
  return {
    solvable: true,
    A,
    B,
    C,
    method: "zero-sum",
    roots: isDouble ? [root1] : [root1, root2Check],
    answerLatex: isDouble ? `x = ${root1}` : `x_1 = ${root1}, \\enspace x_2 = ${root2Ltx}`
  };
}
function genPerfectSquare(random) {
  const K = random.integer(1, 6);
  const T = random.integer(1, 7);
  const minus = random.boolean();
  const A = K * K;
  const C = T * T;
  const B = minus ? -2 * K * T : 2 * K * T;
  const rootN = minus ? T : -T;
  const rootCheck = rootCheckValue(rootN, K);
  const rootLtx = fractionLatex(rootN, K);
  return {
    solvable: true,
    A,
    B,
    C,
    method: "perfect-square",
    roots: [rootCheck],
    answerLatex: `x = ${rootLtx}`
  };
}
function genFactoring(random) {
  let t = random.integer(-12, 12);
  let k = random.integer(-12, 12);
  while (k === t) k = random.integer(-12, 12);
  const B = t + k;
  const C = t * k;
  const root1 = -t;
  const root2 = -k;
  const [r1, r2] = root1 <= root2 ? [root1, root2] : [root2, root1];
  return {
    solvable: true,
    A: 1,
    B,
    C,
    method: "factoring",
    roots: r1 === r2 ? [r1] : [r1, r2],
    answerLatex: r1 === r2 ? `x = ${r1}` : `x_1 = ${r1}, \\enspace x_2 = ${r2}`
  };
}
function genAtoC(random) {
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
  const root1Check = rootCheckValue(-t, A);
  const root2Check = rootCheckValue(-k, A);
  const root1Ltx = rootLatex(-t, A);
  const root2Ltx = rootLatex(-k, A);
  return {
    solvable: true,
    A,
    B,
    C,
    method: "a-to-c",
    roots: [root1Check, root2Check],
    answerLatex: `x_1 = ${root1Ltx}, \\enspace x_2 = ${root2Ltx}`
  };
}
function genUnsolvable(random) {
  let A;
  let B;
  let C;
  do {
    A = random.integer(2, 7);
    B = random.integer(-12, 12);
    while (B === 0) B = random.integer(-12, 12);
    C = random.integer(-12, 12);
    while (C === 0) C = random.integer(-12, 12);
  } while (isZeroSumSolvable(A, B, C) || isPerfectSquareSolvable(A, B, C) || findIntegerFactors(B, A * C) !== false);
  return { solvable: false, A, B, C };
}
function methodRef(method) {
  switch (method) {
    case "zero-sum":
      return /* @__PURE__ */ jsx(Dep, { on: methodZeroSum, children: "Zero sum" });
    case "perfect-square":
      return /* @__PURE__ */ jsx(Dep, { on: methodSquare, children: "Perfect square" });
    case "factoring":
      return /* @__PURE__ */ jsx(Dep, { on: methodFactoring, children: "Factoring" });
    case "a-to-c":
      return /* @__PURE__ */ jsx(Dep, { on: methodAtoC, children: "Transfer A to C" });
  }
}
var mixed_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const roll = random.integer(1, 10);
  if (roll <= 2) {
    const result2 = genUnsolvable(random);
    const equation2 = formatTrinomial(result2.A, result2.B, result2.C, "x", 2, 1);
    return {
      problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation2 }) }),
        /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable mentally?", no: true }),
        /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(P, { children: "None of the mental methods works for this equation." }) })
      ] })
    };
  }
  const generators = [genZeroSum, genPerfectSquare, genFactoring, genAtoC];
  const gen = generators[random.integer(0, generators.length - 1)];
  const result = gen(random);
  const equation = formatTrinomial(result.A, result.B, result.C, "x", 2, 1);
  const rootsCheck = /* @__PURE__ */ jsx(RootsCheck, { roots: result.roots });
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: equation }) }),
      /* @__PURE__ */ jsx(ProblemCheck, { label: "Solvable mentally?", yes: true, children: rootsCheck }),
      /* @__PURE__ */ jsxs(ProblemAnswer, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "Method: ",
          methodRef(result.method),
          "."
        ] }),
        /* @__PURE__ */ jsx(BlockMath, { children: result.answerLatex })
      ] })
    ] }),
    ensureStorage: [
      /* @__PURE__ */ jsx(Dep, { on: methodZeroSum, children: "Zero sum" }),
      /* @__PURE__ */ jsx(Dep, { on: methodSquare, children: "Perfect square" }),
      /* @__PURE__ */ jsx(Dep, { on: methodFactoring, children: "Factoring" }),
      /* @__PURE__ */ jsx(Dep, { on: methodAtoC, children: "Transfer A to C" })
    ]
  };
});
export {
  mixed_default as default
};
