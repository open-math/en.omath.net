// node_modules/@open-math/shared/dist/utils/mathRegexp.js
function mathRegexp(...expressions) {
  const anySpaceSymbol = "";
  const optMultSymbol = "";
  const anyNumberOfSpacesPattern = "\\s*";
  const optMultPattern = "\\s*(?:\\*\\s*)?";
  const escapeRegExp = (value) => value.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  const toSpaceFlexibleExpression = (expression) => {
    let value = expression.trim();
    value = value.replace(/(\d)(\p{L}|\()/gu, `$1${optMultSymbol}$2`);
    value = value.replace(/\s+/gu, anySpaceSymbol);
    value = value.replace(/\(/gu, `${anySpaceSymbol}(${anySpaceSymbol}`).replace(/\)/gu, `${anySpaceSymbol})${anySpaceSymbol}`).replace(/,/gu, `${anySpaceSymbol},${anySpaceSymbol}`).replace(/([+*/=^:-])/gu, `${anySpaceSymbol}$1${anySpaceSymbol}`);
    value = value.replace(/+/gu, anySpaceSymbol);
    value = value.replace(/**/gu, optMultSymbol);
    return `${anySpaceSymbol}${value}${anySpaceSymbol}`.replace(/+/gu, anySpaceSymbol);
  };
  const toPattern = (expression) => {
    const normalized = toSpaceFlexibleExpression(expression);
    const segments = normalized.split(/[]/u);
    const separators = normalized.match(/[]/gu) ?? [];
    let result = escapeRegExp(segments[0]);
    for (let i = 0; i < separators.length; i++) {
      result += separators[i] === optMultSymbol ? optMultPattern : anyNumberOfSpacesPattern;
      result += escapeRegExp(segments[i + 1]);
    }
    return result;
  };
  if (expressions.length === 0) {
    return /^$/u;
  }
  const alternatives = expressions.map(toPattern).join("|");
  return new RegExp(`^(?:${alternatives})$`, "u");
}

// node_modules/@open-math/shared/dist/utils/qed.js
var _jsx = globalThis["_jsx"];
var P2 = globalThis["P"];
var M2 = globalThis["M"];

// node_modules/@open-math/shared/dist/utils/roots.js
var _jsx2 = globalThis["_jsx"];
var ProblemCheck = globalThis["ProblemCheck"];
function toFlexibleValue(value) {
  if (typeof value === "string") {
    return mathRegexp(value);
  }
  return value;
}
function normalizeValue(value) {
  if (Array.isArray(value)) {
    return value.map(toFlexibleValue);
  }
  return toFlexibleValue(value);
}
function createRootsCheck(labels) {
  return function RootsCheck2(props) {
    if ("empty" in props) {
      return _jsx2(ProblemCheck, { label: labels.hasRoots, no: true });
    } else if ("root" in props) {
      const rootCheck = _jsx2(ProblemCheck, { label: labels.root, answer: normalizeValue(props.root) });
      if (!props.has) {
        return rootCheck;
      }
      return _jsx2(ProblemCheck, { label: labels.hasRoots, yes: true, children: rootCheck });
    } else {
      const roots = Array.isArray(props.roots) ? props.roots : [props.roots];
      const rootsCheck = _jsx2(ProblemCheck, { label: labels.roots, answers: roots.map((r) => normalizeValue(r)) });
      if (!props.has) {
        return rootsCheck;
      }
      return _jsx2(ProblemCheck, { label: labels.hasRoots, yes: true, children: rootsCheck });
    }
  };
}

// utils/roots.ts
var RootsCheck = createRootsCheck({
  hasRoots: "Has roots?",
  roots: "Roots",
  root: "Root"
});

// jsx-runtime-shim:jsx-runtime-shim
var jsx = globalThis.jsx;
var jsxs = globalThis.jsxs;
var Fragment = globalThis.Fragment;

// content/01-foundations/02-equations/01-elementary/scripts/zero-factors.tsx
var zero_factors_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const a = random.integer(-1e3, 1e3);
  const b = random.integer(-1e3, 1e3);
  const nonZeroA = a === 0 ? 5 : a;
  const nonZeroB = b === 0 ? 7 : b;
  let firstFactor, firstEquation;
  if (nonZeroA > 0) {
    firstFactor = `(x-${nonZeroA})`;
    firstEquation = `x - ${nonZeroA} = 0`;
  } else {
    firstFactor = `(x+${-nonZeroA})`;
    firstEquation = `x + ${-nonZeroA} = 0`;
  }
  let secondFactor, secondEquation;
  if (nonZeroB > 0) {
    secondFactor = `(x+${nonZeroB})`;
    secondEquation = `x + ${nonZeroB} = 0`;
  } else {
    secondFactor = `(x-${-nonZeroB})`;
    secondEquation = `x - ${-nonZeroB} = 0`;
  }
  const solution1 = nonZeroA;
  const solution2 = -nonZeroB;
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsx(P, { children: "Solve the equation:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            ${firstFactor}${secondFactor} = 0
          ` })
      ] }),
      /* @__PURE__ */ jsx(RootsCheck, { roots: [solution1, solution2] }),
      /* @__PURE__ */ jsxs(ProblemAnswer, { children: [
        /* @__PURE__ */ jsx(M, { children: solution1 }),
        " and ",
        /* @__PURE__ */ jsx(M, { children: solution2 })
      ] }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsx(P, { children: "The equation can be split into two sub-equations, the goal of each is to make the corresponding bracket equal to zero:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                ${firstFactor} = 0 & ${secondFactor} = 0 \\
                ${firstEquation} & ${secondEquation} \\
                \boxed{x = ${solution1}} & \boxed{x = ${solution2}}
            \end{array}
          ` }),
        /* @__PURE__ */ jsxs(P, { children: [
          "We found two solutions: ",
          /* @__PURE__ */ jsx(M, { children: solution1 }),
          " and ",
          /* @__PURE__ */ jsx(M, { children: solution2 })
        ] })
      ] })
    ] })
  };
});
export {
  zero_factors_default as default
};
