var { B, Dep, Ref, ProblemDescription, ProblemHint, ProblemAnswer, BlockMath, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;
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
function buildProblemContent(gen, additionalContent) {
  return defineProblemScript('__auto_generated__',{
    isGenerator: true
  })(({ random }) => {
    const v = getRandomLatinLetter(random, { casing: "lower" });
    const eq = gen(random, v);
    const rootsCheck = eq.hasRoots ? eq.roots.length === 1 ? /* @__PURE__ */ jsx(RootsCheck, { has: true, root: eq.roots[0] }) : /* @__PURE__ */ jsx(RootsCheck, { has: true, roots: eq.roots }) : /* @__PURE__ */ jsx(RootsCheck, { empty: true });
    return {
      problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: eq.equation }) }),
        rootsCheck,
        /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: eq.answerLatex }) }),
        additionalContent
      ] })
    };
  });
}
function genQuadraticInteger(random, v) {
  const hasRoots = random.integer(1, 10) <= 7;
  if (!hasRoots) {
    const B2 = random.integer(-10, 10);
    const delta = random.integer(1, 5);
    const C2 = Math.floor(B2 * B2 / 4) + delta;
    return {
      equation: formatTrinomial(1, B2, C2, v, 2, 1),
      hasRoots: false,
      roots: [],
      answerLatex: "\\text{no roots}"
    };
  }
  let r1 = random.integer(-15, 15);
  let r2 = random.integer(-15, 15);
  while (r2 === r1) r2 = random.integer(-15, 15);
  const B = -(r1 + r2);
  const C = r1 * r2;
  if (r1 > r2) [r1, r2] = [r2, r1];
  return {
    equation: formatTrinomial(1, B, C, v, 2, 1),
    hasRoots: true,
    roots: [r1, r2],
    answerLatex: `${v}_1 = ${r1}, \\enspace ${v}_2 = ${r2}`
  };
}
function genQuadraticFraction(random, v) {
  const hasRoots = random.integer(1, 10) <= 7;
  if (!hasRoots) {
    const A2 = random.integer(2, 6);
    let B2 = random.integer(-8, 8);
    while (B2 === 0) B2 = random.integer(-8, 8);
    const delta = random.integer(1, 5);
    const C2 = Math.sign(A2) * (Math.floor(B2 * B2 / (4 * Math.abs(A2))) + delta);
    return {
      equation: formatTrinomial(A2, B2, C2, v, 2, 1),
      hasRoots: false,
      roots: [],
      answerLatex: "\\text{no roots}"
    };
  }
  const denoms = [1, 2, 3, 4, 5];
  let d1 = denoms[random.integer(0, denoms.length - 1)];
  let d2 = denoms[random.integer(0, denoms.length - 1)];
  if (d1 === 1 && d2 === 1) d2 = denoms[random.integer(1, denoms.length - 1)];
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
  const root1Str = sd1 === 1 ? `${sn1}` : `${sn1}/${sd1}`;
  const root2Str = sd2 === 1 ? `${sn2}` : `${sn2}/${sd2}`;
  return {
    equation: formatTrinomial(A, B, C, v, 2, 1),
    hasRoots: true,
    roots: [root1Str, root2Str],
    answerLatex: `${v}_1 = ${fractionLatex(sn1, sd1)}, \\enspace ${v}_2 = ${fractionLatex(sn2, sd2)}`
  };
}
function genQuadraticIrrational(random, v) {
  const hasRoots = random.integer(1, 10) <= 7;
  const A = random.integer(1, 3);
  let B = random.integer(-9, 9);
  while (B === 0) B = random.integer(-9, 9);
  if (!hasRoots) {
    const delta = random.integer(1, 5);
    const minC = Math.ceil((B * B + 1) / (4 * A));
    const C2 = minC + delta;
    return {
      equation: formatTrinomial(A, B, C2, v, 2, 1),
      hasRoots: false,
      roots: [],
      answerLatex: "\\text{no roots}"
    };
  }
  let C;
  let D;
  do {
    C = random.integer(-12, 12);
    D = B * B - 4 * A * C;
  } while (D <= 0 || isPerfectSquare(D));
  const denom = 2 * A;
  const root1 = `(${-B} + sqrt(${D})) / ${denom}`;
  const root2 = `(${-B} - sqrt(${D})) / ${denom}`;
  const [k, r] = simplifySqrt(D);
  const g2 = gcd(gcd(Math.abs(-B), k), denom);
  const redB = -B / g2;
  const redK = k / g2;
  const redDenom = denom / g2;
  const sqrtPart = r === 1 ? `${redK}` : redK === 1 ? `\\sqrt{${r}}` : `${redK}\\sqrt{${r}}`;
  let answerLatex;
  if (redDenom === 1) {
    answerLatex = `${v}_{1,2} = ${redB} \\pm ${sqrtPart}`;
  } else {
    answerLatex = `${v}_{1,2} = \\frac{${redB} \\pm ${sqrtPart}}{${redDenom}}`;
  }
  return {
    equation: formatTrinomial(A, B, C, v, 2, 1),
    hasRoots: true,
    roots: [root1, root2],
    answerLatex
  };
}
var quadraticGens = {
  integer: genQuadraticInteger,
  fraction: genQuadraticFraction,
  irrational: genQuadraticIrrational
};
function createQuadraticProblem(tier) {
  const algorithm = {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/quadratic-formula/summary/$algorithm"};
  const examples = {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/quadratic-formula/article/$examples"};
  return buildProblemContent(
    quadraticGens[tier],
    /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(ProblemHint, { children: [
      "Follow the ",
      /* @__PURE__ */ jsx(Dep, { on: algorithm, children: "solving algorithm" }),
      " for quadratic equations. If you still have questions, review the detailed ",
      /* @__PURE__ */ jsx(Ref, { to: examples, children: "worked examples" }),
      "."
    ] }) })
  );
}

// content/01-foundations/02-equations/03-quadratic/4-quadratic-formula/scripts/quadratic/irrational.tsx
var irrational_default = createQuadraticProblem("irrational");
export {
  irrational_default as default
};
