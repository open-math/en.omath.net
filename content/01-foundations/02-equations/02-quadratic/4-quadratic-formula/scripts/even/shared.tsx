import { getRandomLatinLetter } from '@open-math/shared/utils';

function formatEquation(A: number, B: number, C: number, v: string): string {
  let eq = '';

  // Av² term
  if (A === 1) eq += `${v}^2`;
  else if (A === -1) eq += `-${v}^2`;
  else eq += `${A}${v}^2`;

  // Bv term
  if (B !== 0) {
    if (B === 1) eq += ` + ${v}`;
    else if (B === -1) eq += ` - ${v}`;
    else if (B > 0) eq += ` + ${B}${v}`;
    else eq += ` - ${Math.abs(B)}${v}`;
  }

  // C term
  if (C !== 0) {
    if (C > 0) eq += ` + ${C}`;
    else eq += ` - ${Math.abs(C)}`;
  }

  eq += ' = 0';
  return eq;
}

export function createEvenQuadraticProblem(a1: boolean) {
  return defineProblemScript({
    isGenerator: true,
  })(({ random }) => {
    const v = getRandomLatinLetter(random, { casing: 'lower' });

    // Determine A
    let A: number;
    if (a1) {
      A = 1;
    } else {
      do {
        A = random.integer(-10, 10);
      } while (A === 0);
    }

    const hasRoots = random.integer(1, 10) <= 7;

    let B: number, C: number;
    let r1: number | undefined, r2: number | undefined;

    if (hasRoots) {
      // Pick r1 from [-8..8] \ {0}
      r1 = random.integer(-8, 8);
      if (r1 === 0) r1 = 1;

      // Build candidates for r2: non-zero, distinct from r1, sum ≠ 0 (keeps B ≠ 0),
      // and same parity as r1 when A is odd (ensures k = -A*(r1+r2)/2 is an integer)
      const needSameParity = Math.abs(A) % 2 === 1;
      const candidates: number[] = [];
      for (let v = -8; v <= 8; v++) {
        if (v === 0) continue;
        if (v === r1) continue;
        if (v === -r1) continue;
        if (needSameParity && v % 2 !== r1 % 2) continue;
        candidates.push(v);
      }
      r2 = candidates[random.integer(0, candidates.length - 1)];

      const k = (-A * (r1 + r2)) / 2;
      B = 2 * k;
      C = A * r1 * r2;
    } else {
      // No roots: pick k, then C such that k² - A*C < 0
      let k: number;
      do {
        k = random.integer(-6, 6);
      } while (k === 0);

      B = 2 * k;

      // We need A*C > k²
      // Set C = sign(A) * (floor(k²/|A|) + delta), delta ∈ [1..5]
      const delta = random.integer(1, 5);
      const m = Math.floor((k * k) / Math.abs(A)) + delta;
      C = Math.sign(A) * m;
    }

    const equation = formatEquation(A, B, C, v);

    return {
      problemContent: (
        <>
          <ProblemDescription>
            <P>
              Use the derived formulas to solve a quadratic equation with an even coefficient <M>B</M>:
            </P>
            <BlockMath>{equation}</BlockMath>
          </ProblemDescription>
          {hasRoots ? <RootsCheck has roots={[r1!, r2!]} /> : <RootsCheck empty />}
          <ProblemAnswer>
            {hasRoots ? (
              <P>
                <M>{r1!}</M> and <M>{r2!}</M>.
              </P>
            ) : (
              <P>No roots.</P>
            )}
          </ProblemAnswer>
        </>
      ),
    };
  });
}
