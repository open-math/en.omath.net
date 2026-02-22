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

// content/01-foundations/02-equations/01-elementary/scripts/general-formula.tsx
var general_formula_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  let A = random.integer(-10, 10);
  while (A === 0) {
    A = random.integer(-10, 10);
  }
  const B = random.integer(-20, 20);
  let equation = "";
  if (A === 1) {
    equation = "x";
  } else if (A === -1) {
    equation = "-x";
  } else {
    equation = `${A}x`;
  }
  if (B > 0) {
    equation += ` + ${B} = 0`;
  } else if (B < 0) {
    equation += ` - ${Math.abs(B)} = 0`;
  } else {
    equation += " = 0";
  }
  let root = "";
  if (B === 0) {
    root = "0";
  } else if (B % A === 0) {
    const intRoot = -B / A;
    root = intRoot.toString();
  } else {
    const numerator = -B;
    const denominator = A;
    const gcd = (a, b) => {
      a = Math.abs(a);
      b = Math.abs(b);
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };
    const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
    const simplifiedNum = numerator / divisor;
    const simplifiedDen = denominator / divisor;
    if (simplifiedDen === 1) {
      root = simplifiedNum.toString();
    } else if (simplifiedDen === -1) {
      root = (-simplifiedNum).toString();
    } else if (simplifiedDen < 0) {
      root = `-\\frac{${Math.abs(simplifiedNum)}}{${Math.abs(simplifiedDen)}}`;
    } else if (simplifiedNum < 0) {
      root = `-\\frac{${Math.abs(simplifiedNum)}}{${simplifiedDen}}`;
    } else {
      root = `\\frac{${simplifiedNum}}{${simplifiedDen}}`;
    }
  }
  const plainRoot = root.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "$1/$2").replace(/^-?\\frac/, (m) => m.includes("-") ? "-" : "");
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        /* @__PURE__ */ jsx(P, { children: "Solve the equation using the previously derived general formula:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: equation })
      ] }),
      /* @__PURE__ */ jsx(RootsCheck, { root: plainRoot }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(BlockMath, { children: root }) }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "Identify the coefficients ",
          /* @__PURE__ */ jsx(M, { children: "A" }),
          " and ",
          /* @__PURE__ */ jsx(M, { children: "B" }),
          " in the equation:"
        ] }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            A = ${A}, \enspace B = ${B}
          ` }),
        /* @__PURE__ */ jsx(P, { children: "Substitute them into the general formula:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            x = -\frac{B}{A}
            >>{big}
            x = -\frac{ ${B} }{ ${A} }
            >>{big}
            \boxed{x = ${root} }
          ` })
      ] })
    ] })
  };
});
export {
  general_formula_default as default
};
