import article from './article';

export default defineProse()(() => (
  <>
    <Diagram
      snippet={{
        key: true,
        seo: "How to derive Vieta's formulas?",
        title: 'Formulas derivation',
        description: `
          It is enough to write the equality between the standard quadratic trinomial form and its factorized form.
          Then just expand the brackets.
        `,
      }}
      toc
    >
      {math`
        flowchart TD
          equality["$$ Ax^2 + Bx + C = A(x-x_1)(x-x_2) $$"]
          expanded["$$ Ax^2 + Bx + C = Ax^2 - \underbrace{A(x_1 + x_2)}_{\small B}x + \underbrace{Ax_1x_2}_{\small C} $$"]
          vietasFormulas["**Vieta's formulas**<br />$$ \begin{cases} x_1 + x_2 = -\frac{B}{A} \\ x_1x_2 = \frac{C}{A} \end{cases} $$"]
          equality -->|**Expand the brackets**| expanded
          expanded -->|**Isolate the roots**| vietasFormulas
      `}
      <Caption>Deriving Vieta's formulas</Caption>
    </Diagram>

    <Hr />

    <Include toc>{article.uniques.vietasFormulas}</Include>

    <Include toc="Notes on the formulas">{article.uniques.formulasFaq}</Include>

    <H1>Using Vieta's formulas</H1>

    <P>
      The main value of Vieta's formulas is that they connect the roots of a quadratic equation with its coefficients in
      a simple, direct way. That connection can be used in all sorts of ways:
    </P>

    <Include toc>{article.uniques.usageFastCheck}</Include>

    <Include toc>{article.uniques.usageConstructing}</Include>

    <Include toc>{article.uniques.usageCoefficients}</Include>
  </>
));
