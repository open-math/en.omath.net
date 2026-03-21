var { P, ProblemDescription, ProblemSolution, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, RootsCheck } = globalThis.ERUDIT_GLOBAL;
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


// content/01-foundations/02-equations/02-zero-product-property/scripts/zero-product-property.tsx
var zero_product_property_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const v = getRandomLatinLetter(random, { casing: "lower" });
  const a = random.integer(-1e3, 1e3);
  const b = random.integer(-1e3, 1e3);
  const nonZeroA = a === 0 ? 5 : a;
  const nonZeroB = b === 0 ? 7 : b;
  let firstFactor, firstEquation;
  if (nonZeroA > 0) {
    firstFactor = `(${v}-${nonZeroA})`;
    firstEquation = `${v} - ${nonZeroA} = 0`;
  } else {
    firstFactor = `(${v}+${-nonZeroA})`;
    firstEquation = `${v} + ${-nonZeroA} = 0`;
  }
  let secondFactor, secondEquation;
  if (nonZeroB > 0) {
    secondFactor = `(${v}+${nonZeroB})`;
    secondEquation = `${v} + ${nonZeroB} = 0`;
  } else {
    secondFactor = `(${v}-${-nonZeroB})`;
    secondEquation = `${v} - ${-nonZeroB} = 0`;
  }
  const solution1 = nonZeroA;
  const solution2 = -nonZeroB;
  const coeffType = random.integer(0, 3);
  let coeffLatex = "";
  let coeffLabel = "";
  let hasCoeff = false;
  if (coeffType === 1) {
    const c = random.integer(2, 20);
    coeffLatex = `${c}`;
    coeffLabel = `${c}`;
    hasCoeff = true;
  } else if (coeffType === 2) {
    const base = random.integer(2, 10);
    coeffLatex = `${base}^2`;
    coeffLabel = `${base}^2`;
    hasCoeff = true;
  } else if (coeffType === 3) {
    const num = random.integer(1, 9);
    let den = random.integer(2, 9);
    if (num === den) den = den + 1;
    coeffLatex = `\\frac{${num}}{${den}}`;
    coeffLabel = `\\frac{${num}}{${den}}`;
    hasCoeff = true;
  }
  const equation = hasCoeff ? `${coeffLatex} ${firstFactor}${secondFactor} = 0` : `${firstFactor}${secondFactor} = 0`;
  const divideStep = hasCoeff ? math`
        \brand{\div ${coeffLabel}} \ | \ ${coeffLatex} ${firstFactor}${secondFactor} = 0 \ | \ \brand{\div ${coeffLabel}} \\
        \frac{\cancel{${coeffLatex}} ${firstFactor}${secondFactor}}{\cancel{${coeffLabel}}} = \frac{0}{${coeffLabel}} \\
        ${firstFactor}${secondFactor} = 0
      ` : null;
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ProblemDescription, { children: /* @__PURE__ */ jsx(BlockMath, { children: math`
            ${equation}
          ` }) }),
      /* @__PURE__ */ jsx(RootsCheck, { roots: [solution1, solution2] }),
      /* @__PURE__ */ jsxs(ProblemAnswer, { children: [
        /* @__PURE__ */ jsx(M, { children: solution1 }),
        " and ",
        /* @__PURE__ */ jsx(M, { children: solution2 })
      ] }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        hasCoeff && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(P, { children: [
            "First get rid of the coefficient in front of the brackets. Divide both sides of the equation by",
            " ",
            /* @__PURE__ */ jsx(M, { children: coeffLatex }),
            ":"
          ] }),
          /* @__PURE__ */ jsx(BlockMath, { children: divideStep })
        ] }),
        /* @__PURE__ */ jsx(P, { children: "This equation can be split into two sub-equations, and the whole point of each one is to make its corresponding bracket equal to zero:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                	ext{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                ${firstFactor} = 0 & ${secondFactor} = 0 \\
                ${firstEquation} & ${secondEquation} \\
                \boxed{${v} = ${solution1}} & \boxed{${v} = ${solution2}}
            \end{array}
          ` }),
        /* @__PURE__ */ jsxs(P, { children: [
          "So we get two solutions of the equation: ",
          /* @__PURE__ */ jsx(M, { children: solution1 }),
          " and ",
          /* @__PURE__ */ jsx(M, { children: solution2 }),
          "."
        ] })
      ] })
    ] })
  };
});
export {
  zero_product_property_default as default
};
