var { B, P, ProblemDescription, ProblemHint, ProblemSolution, ProblemAnswer, ProblemNote, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;
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

// content/01-foundations/02-equations/03-quadratic/4-quadratic-formula/scripts/david-goliath.tsx
var EASY_PRIMES = [2, 3, 5];
function buildDivisorChain(random) {
  const steps = random.integer(3, 5);
  const chain = [];
  chain.push(EASY_PRIMES[random.integer(0, EASY_PRIMES.length - 1)]);
  const ALL_PRIMES = [2, 3, 5, 7];
  let has7 = false;
  for (let i = 1; i < steps; i++) {
    if (has7) {
      chain.push(EASY_PRIMES[random.integer(0, EASY_PRIMES.length - 1)]);
    } else {
      const d = ALL_PRIMES[random.integer(0, ALL_PRIMES.length - 1)];
      if (d === 7) has7 = true;
      chain.push(d);
    }
  }
  chain.sort((a, b) => a - b);
  return chain;
}
function chainProduct(chain) {
  return chain.reduce((acc, d) => acc * d, 1);
}
function genInteger(random) {
  let r1 = random.integer(-10, 10);
  let r2 = random.integer(-10, 10);
  while (r2 === r1) r2 = random.integer(-10, 10);
  const A = 1;
  const B = -(r1 + r2);
  const C = r1 * r2;
  if (r1 > r2) [r1, r2] = [r2, r1];
  return {
    A,
    B,
    C,
    hasRoots: true,
    roots: [r1, r2],
    answerLatex: (v) => `${v}_1 = ${r1}, \\enspace ${v}_2 = ${r2}`
  };
}
function genFraction(random) {
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
  if (val1 > val2) [sn1, sd1, sn2, sd2] = [sn2, sd2, sn1, sd1];
  const root1Str = sd1 === 1 ? `${sn1}` : `${sn1}/${sd1}`;
  const root2Str = sd2 === 1 ? `${sn2}` : `${sn2}/${sd2}`;
  return {
    A,
    B,
    C,
    hasRoots: true,
    roots: [root1Str, root2Str],
    answerLatex: (v) => `${v}_1 = ${fractionLatex(sn1, sd1)}, \\enspace ${v}_2 = ${fractionLatex(sn2, sd2)}`
  };
}
function genIrrational(random) {
  const A = random.integer(1, 3);
  let B;
  do {
    B = random.integer(-9, 9);
  } while (B === 0);
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
  return {
    A,
    B,
    C,
    hasRoots: true,
    roots: [root1, root2],
    answerLatex: (v) => redDenom === 1 ? `${v}_{1,2} = ${redB} \\pm ${sqrtPart}` : `${v}_{1,2} = \\frac{${redB} \\pm ${sqrtPart}}{${redDenom}}`
  };
}
function genNoRoots(random) {
  const A = random.integer(1, 3);
  let B;
  do {
    B = random.integer(-9, 9);
  } while (B === 0);
  const delta = random.integer(1, 5);
  const minC = Math.ceil((B * B + 1) / (4 * A));
  const C = minC + delta;
  return {
    A,
    B,
    C,
    hasRoots: false,
    roots: [],
    answerLatex: () => "\\text{no roots}"
  };
}
var david_goliath_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const v = getRandomLatinLetter(random, { casing: "lower" });
  const roll = random.integer(1, 100);
  let base;
  if (roll <= 30) base = genInteger(random);
  else if (roll <= 55) base = genFraction(random);
  else if (roll <= 80) base = genIrrational(random);
  else base = genNoRoots(random);
  const chain = buildDivisorChain(random);
  const multiplier = chainProduct(chain);
  const bigA = base.A * multiplier;
  const bigB = base.B * multiplier;
  const bigC = base.C * multiplier;
  const bigEquation = formatTrinomial(bigA, bigB, bigC, v, 2, 1);
  const smallEquation = formatTrinomial(base.A, base.B, base.C, v, 2, 1);
  const rootsCheck = base.hasRoots ? base.roots.length === 1 ? /* @__PURE__ */ jsx(RootsCheck, { has: true, root: base.roots[0] }) : /* @__PURE__ */ jsx(RootsCheck, { has: true, roots: base.roots }) : /* @__PURE__ */ jsx(RootsCheck, { empty: true });
  const divisorList = chain.join(", ");
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: bigEquation }) }),
      rootsCheck,
      /* @__PURE__ */ jsx(ProblemHint, { children: "Look carefully at the coefficients. They're all divisible by some small number. Divide both sides by it. If needed, repeat this process a few times." }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: base.answerLatex(v) }) }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "All coefficients of the equation can be divided step by step by: ",
          /* @__PURE__ */ jsx(M, { children: divisorList }),
          "."
        ] }),
        /* @__PURE__ */ jsx(P, { children: "After simplifying, we get the equation:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: smallEquation }),
        /* @__PURE__ */ jsx(P, { children: "Now solve the resulting quadratic equation in the usual way." })
      ] }),
      /* @__PURE__ */ jsx(ProblemNote, { children: 'The title of the problem refers to the biblical story of how the young shepherd David defeated the giant Goliath using a sling. Here, the supposedly invincible "giant" is an equation with enormous coefficients, and the "sling" is the process of successive division by common divisors, which allows one to "defeat" the equation and find its roots.' })
    ] })
  };
});
export {
  david_goliath_default as default
};
