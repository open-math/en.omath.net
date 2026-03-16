import article from '../article';

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  // Generate two pairs of distinct integer roots
  function genRoots(): [number, number] {
    let t = random.integer(-12, 12);
    let k = random.integer(-12, 12);
    while (k === t) k = random.integer(-12, 12);
    if (t > k) [t, k] = [k, t];
    return [t, k];
  }

  const [t1, k1] = genRoots();
  const [t2, k2] = genRoots();

  const B1 = -(t1 + k1);
  const C1 = t1 * k1;
  const B2 = -(t2 + k2);
  const C2 = t2 * k2;

  function formatFactor(r: number): string {
    if (r === 0) return 'x';
    if (r > 0) return `(x - ${r})`;
    return `(x + ${-r})`;
  }

  function formatTrinomial(B: number, C: number): string {
    let expr = 'x^2';
    if (B === 1) expr += ' + x';
    else if (B === -1) expr += ' - x';
    else if (B > 0) expr += ` + ${B}x`;
    else if (B < 0) expr += ` - ${Math.abs(B)}x`;
    if (C > 0) expr += ` + ${C}`;
    else if (C < 0) expr += ` - ${Math.abs(C)}`;
    return expr;
  }

  const factored1 = `${formatFactor(t1)}${formatFactor(k1)}`;
  const trinomial1 = formatTrinomial(B1, C1);
  const factored2 = `${formatFactor(t2)}${formatFactor(k2)}`;
  const trinomial2 = formatTrinomial(B2, C2);

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <P>
            Factor the first expression, and rewrite the expression on the right in standard quadratic trinomial form:
          </P>
          <BlockMath>{math`1) \enspace ${trinomial1} >>{big} 2) \enspace ${factored2}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="1) Factored form" answer={factored1} />
        <MathExpressionCheck label="2) Expanded form" answer={trinomial2} />
        <ProblemHint>
          For factoring, review the{' '}
          <Dep on={$CONTENT.foundations.equations.quadratic.factoring.article.$manualFactoring}>examples</Dep> from the
          article.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`1) \enspace ${factored1} >>{big} 2) \enspace ${trinomial2}`}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
