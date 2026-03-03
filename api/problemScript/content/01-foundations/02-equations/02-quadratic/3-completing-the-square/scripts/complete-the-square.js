var { B, P, ProblemDescription, ProblemAnswer, BlockMath, math, jsx, jsxs, Fragment, defineProblemScript } = globalThis.ERUDIT_GLOBAL;
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

// node_modules/@open-math/shared/dist/utils/math.js


// content/01-foundations/02-equations/02-quadratic/3-completing-the-square/scripts/complete-the-square.tsx
var gcd = (a, b) => {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b !== 0n) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};
var norm = (r) => {
  if (r.d === 0n) {
    throw new Error("Zero denominator");
  }
  const sign = r.d < 0n ? -1n : 1n;
  const n = r.n * sign;
  const d = r.d * sign;
  const g = gcd(n, d);
  return { n: n / g, d: d / g };
};
var sub = (a, b) => norm({ n: a.n * b.d - b.n * a.d, d: a.d * b.d });
var asLatex = (r) => {
  const rr = norm(r);
  if (rr.n === 0n) return "0";
  if (rr.d === 1n) return rr.n.toString();
  const sign = rr.n < 0n ? "-" : "";
  const n = rr.n < 0n ? -rr.n : rr.n;
  const d = rr.d;
  return `${sign}\\frac{${n.toString()}}{${d.toString()}}`;
};
var asLatexWithSign = (r) => {
  const rr = norm(r);
  if (rr.n === 0n) return "";
  if (rr.n < 0n) {
    return ` - ${asLatex({ n: -rr.n, d: rr.d })}`;
  }
  return ` + ${asLatex(rr)}`;
};
var formatPoly = (A, B, C, v) => {
  const parts = [];
  if (A === 1) parts.push(`${v}^2`);
  else if (A === -1) parts.push(`-${v}^2`);
  else parts.push(`${A}${v}^2`);
  if (B > 0) parts.push(` + ${B}${v}`);
  else if (B < 0) parts.push(` - ${Math.abs(B)}${v}`);
  if (C > 0) parts.push(` + ${C}`);
  else if (C < 0) parts.push(` - ${Math.abs(C)}`);
  return parts.join("");
};
var completeSquare = (A, B, C, v) => {
  const k = Math.sqrt(A);
  if (!Number.isInteger(k)) {
    throw new Error("A must be a perfect square");
  }
  const shift = norm({ n: BigInt(B), d: BigInt(2 * k) });
  const tail = sub({ n: BigInt(C), d: 1n }, norm({ n: BigInt(B * B), d: BigInt(4 * A) }));
  const kv = k === 1 ? v : `${k}${v}`;
  const inside = shift.n === 0n ? kv : `${kv} ${shift.n < 0n ? "-" : "+"} ${asLatex({ n: shift.n < 0n ? -shift.n : shift.n, d: shift.d })}`;
  const square = `\\left(${inside}\\right)^2`;
  const tailLatex = asLatexWithSign(tail);
  return {
    from: formatPoly(A, B, C, v),
    to: `${square}${tailLatex}`
  };
};
var complete_the_square_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const v1 = getRandomLatinLetter(random, { casing: "lower" });
  const v2 = getRandomLatinLetter(random, { casing: "lower" });
  const v3 = getRandomLatinLetter(random, { casing: "lower" });
  const v4 = getRandomLatinLetter(random, { casing: "lower" });
  const p1 = random.integer(2, 15);
  const A1 = 1;
  const B1 = -2 * p1;
  const C1 = 0;
  const p2 = random.integer(3, 17);
  const A2 = 1;
  const B2 = -p2;
  const C2 = 0;
  const p3 = random.integer(3, 15);
  const q3 = random.integer(-12, 12);
  const A3 = 1;
  const B3 = random.boolean() ? p3 : -p3;
  const C3 = q3 === 0 ? random.integer(1, 12) : q3;
  const k4 = random.integer(2, 5);
  const A4 = k4 * k4;
  let B4 = random.integer(-15, 15);
  while (B4 === 0) B4 = random.integer(-15, 15);
  const C4 = random.integer(-12, 12);
  const e1 = completeSquare(A1, B1, C1, v1);
  const e2 = completeSquare(A2, B2, C2, v2);
  const e3 = completeSquare(A3, B3, C3, v3);
  const e4 = completeSquare(A4, B4, C4, v4);
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsx(P, { children: "Complete the square:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
              1)\enspace ${e1.from} >>
              2)\enspace ${e2.from} >>
              3)\enspace ${e3.from} >>
              4)\enspace ${e4.from}
          ` })
      ] }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: math`
              1)\enspace ${e1.to} >>
              2)\enspace ${e2.to} >>
              3)\enspace ${e3.to} >>
              4)\enspace ${e4.to}
          ` }) })
    ] })
  };
});
export {
  complete_the_square_default as default
};
