var { B, Ref, ProblemDescription, ProblemHint, ProblemAnswer, BlockMath, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;
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
function sqrtLatex(n) {
  const [k, r] = simplifySqrt(n);
  if (r === 1) return `${k}`;
  if (k === 1) return `\\sqrt{${r}}`;
  return `${k}\\sqrt{${r}}`;
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
function genBiquadraticInteger(random, v) {
  const hasRoots = random.integer(1, 10) <= 7;
  if (!hasRoots) {
    if (random.boolean()) {
      const B2 = random.integer(-8, 8);
      const delta = random.integer(1, 5);
      const C2 = Math.floor(B2 * B2 / 4) + delta;
      return {
        equation: formatTrinomial(1, B2, C2, v, 4, 2),
        hasRoots: false,
        roots: [],
        answerLatex: "\\text{no roots}"
      };
    } else {
      const t12 = random.integer(1, 6);
      const t22 = random.integer(1, 6);
      return {
        equation: formatTrinomial(1, t12 + t22, t12 * t22, v, 4, 2),
        hasRoots: false,
        roots: [],
        answerLatex: "\\text{no roots}"
      };
    }
  }
  const x1 = random.integer(1, 7);
  const x2 = random.integer(1, 7);
  const t1 = x1 * x1;
  const t2 = x2 * x2;
  const B = -(t1 + t2);
  const C = t1 * t2;
  const rootSet = /* @__PURE__ */ new Set();
  rootSet.add(-x1);
  rootSet.add(x1);
  if (x2 !== x1) {
    rootSet.add(-x2);
    rootSet.add(x2);
  }
  const sortedRoots = [...rootSet].sort((a, b) => a - b);
  return {
    equation: formatTrinomial(1, B, C, v, 4, 2),
    hasRoots: true,
    roots: sortedRoots,
    answerLatex: sortedRoots.map((r) => `${v} = ${r}`).join(", \\enspace ")
  };
}
function genBiquadraticFraction(random, v) {
  const hasRoots = random.integer(1, 10) <= 7;
  if (!hasRoots) {
    const A2 = random.integer(2, 6);
    let B2 = random.integer(-8, 8);
    while (B2 === 0) B2 = random.integer(-8, 8);
    const delta = random.integer(1, 5);
    const C2 = Math.sign(A2) * (Math.floor(B2 * B2 / (4 * Math.abs(A2))) + delta);
    return {
      equation: formatTrinomial(A2, B2, C2, v, 4, 2),
      hasRoots: false,
      roots: [],
      answerLatex: "\\text{no roots}"
    };
  }
  const denoms = [1, 2, 3, 4, 5];
  let q1 = denoms[random.integer(0, denoms.length - 1)];
  let q2 = denoms[random.integer(0, denoms.length - 1)];
  if (q1 === 1 && q2 === 1) q2 = denoms[random.integer(1, denoms.length - 1)];
  let p1, p2;
  do {
    p1 = random.integer(1, 6);
  } while (gcd(p1, q1) !== 1);
  do {
    p2 = random.integer(1, 6);
  } while (gcd(p2, q2) !== 1 || p1 === p2 && q1 === q2);
  let A = q1 * q2 * (q1 * q2);
  let B = -(p1 * p1 * q2 * q2 + p2 * p2 * q1 * q1);
  let C = p1 * p1 * p2 * p2;
  const g = gcd(gcd(Math.abs(A), Math.abs(B)), Math.abs(C));
  A /= g;
  B /= g;
  C /= g;
  const [sn1, sd1] = simplifyFraction(p1, q1);
  const [sn2, sd2] = simplifyFraction(p2, q2);
  const entries = [];
  const addPair = (p, q) => {
    const posVal = p / q;
    const posLatex = q === 1 ? `${p}` : `\\frac{${p}}{${q}}`;
    const negLatex = q === 1 ? `${-p}` : `-\\frac{${p}}{${q}}`;
    const posCheck = q === 1 ? `${p}` : `${p}/${q}`;
    const negCheck = q === 1 ? `${-p}` : `-(${p}/${q})`;
    entries.push({ val: -posVal, latex: negLatex, check: negCheck });
    entries.push({ val: posVal, latex: posLatex, check: posCheck });
  };
  addPair(sn1, sd1);
  if (!(sn1 === sn2 && sd1 === sd2)) {
    addPair(sn2, sd2);
  }
  entries.sort((a, b) => a.val - b.val);
  const unique = [];
  for (const e of entries) {
    if (unique.length === 0 || Math.abs(e.val - unique[unique.length - 1].val) > 1e-12) {
      unique.push(e);
    }
  }
  return {
    equation: formatTrinomial(A, B, C, v, 4, 2),
    hasRoots: true,
    roots: unique.map((e) => e.check),
    answerLatex: unique.map((e) => `${v} = ${e.latex}`).join(", \\enspace ")
  };
}
function genBiquadraticIrrational(random, v) {
  const hasRoots = random.integer(1, 10) <= 7;
  if (!hasRoots) {
    if (random.boolean()) {
      const B2 = random.integer(-8, 8);
      const delta = random.integer(1, 5);
      const C2 = Math.floor(B2 * B2 / 4) + delta;
      return {
        equation: formatTrinomial(1, B2, C2, v, 4, 2),
        hasRoots: false,
        roots: [],
        answerLatex: "\\text{no roots}"
      };
    } else {
      const t12 = random.integer(1, 8);
      const t22 = random.integer(1, 8);
      return {
        equation: formatTrinomial(1, t12 + t22, t12 * t22, v, 4, 2),
        hasRoots: false,
        roots: [],
        answerLatex: "\\text{no roots}"
      };
    }
  }
  const nonSquares = [2, 3, 5, 6, 7, 8, 10, 11, 12, 13];
  const squares = [1, 4, 9];
  let t1, t2;
  if (random.integer(1, 10) <= 4) {
    t1 = squares[random.integer(0, squares.length - 1)];
    t2 = nonSquares[random.integer(0, nonSquares.length - 1)];
  } else {
    const picked = random.arrayElements(nonSquares, 2, true);
    t1 = picked[0];
    t2 = picked[1];
  }
  const B = -(t1 + t2);
  const C = t1 * t2;
  const sorted = [t1, t2].sort((a, b) => a - b);
  const entries = [];
  for (const t of sorted) {
    const srt = sqrtLatex(t);
    entries.push({ val: -Math.sqrt(t), latex: `-${srt}`, check: `-sqrt(${t})` });
    entries.push({ val: Math.sqrt(t), latex: `${srt}`, check: `sqrt(${t})` });
  }
  entries.sort((a, b) => a.val - b.val);
  return {
    equation: formatTrinomial(1, B, C, v, 4, 2),
    hasRoots: true,
    roots: entries.map((e) => e.check),
    answerLatex: entries.map((e) => `${v} = ${e.latex}`).join(", \\enspace ")
  };
}
var biquadraticGens = {
  integer: genBiquadraticInteger,
  fraction: genBiquadraticFraction,
  irrational: genBiquadraticIrrational
};
function createBiquadraticProblem(tier) {
  const examples = {"__ERUDIT_globalContentItem":true,"__path":"foundations/equations/quadratic/quadratic-formula/article/$biquadraticExamples"};
  return buildProblemContent(
    biquadraticGens[tier],
    /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(ProblemHint, { children: [
      "Review the detailed ",
      /* @__PURE__ */ jsx(Ref, { to: examples, children: "worked examples" }),
      " for solving biquadratic equations."
    ] }) })
  );
}

// content/01-foundations/02-equations/03-quadratic/4-quadratic-formula/scripts/biquadratic/fraction.tsx
var fraction_default = createBiquadraticProblem("fraction");
export {
  fraction_default as default
};
