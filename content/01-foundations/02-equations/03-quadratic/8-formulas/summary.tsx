export default defineProse({
  uniques: {
    formulas: Diagram,
    methods: Diagram,
  },
})(({ uniques }) => (
  <>
    <Diagram
      $={uniques.formulas}
      snippet={{
        key: true,
        title: 'Formulas chart',
        seo: 'Formulas chart for quadratic equations',
        description: `
          A visual chart of all formulas and concepts related to quadratic equations, showing the logic behind their derivation.
        `,
      }}
      toc
    >
      {math`
        flowchart TD
          quadraticTrinomial["
            **Quadratic trinomial**
            $$ Ax^2 + Bx + C, \ \ A \neq 0 $$
          "]

          quadraticEquation["
            **Quadratic equation**
            $$ Ax^2 + Bx + C = 0, \ \ A \neq 0 $$
          "]

          discriminant["
            **Discriminant**
            $$ D = B^2 - 4AC $$
          "]

          noRoots["No roots"]
          oneRoot["One root:<br />$$ x = - \frac{B}{2A} $$"]
          twoRoots["Two roots:<br />$$ x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} $$"]

          factoring["
            **Factoring**
            $$ A(x - x_1)(x - x_2) $$
          "]

          vietasFormulas["
            **Vieta's formulas**
            $$
              \begin{cases}
                x_1 + x_2 = -\frac{B}{A} \\
                x_1 \cdot x_2 = \frac{C}{A}
              \end{cases}
            $$
          "]

          quadraticTrinomial -->|"Trinomial equals $0$"| quadraticEquation
          quadraticEquation -->|"Completing&nbsp;the&nbsp;square<br />(transforming&nbsp;the&nbsp;equation)"| discriminant

          discriminant -->|"$D < 0$"| noRoots
          discriminant -->|"$D = 0$"| oneRoot
          discriminant -->|"$D > 0$"| twoRoots

          twoRoots --> factoring

          quadraticTrinomial -->|"Completing&nbsp;the&nbsp;square<br />(equivalent&nbsp;transformations)"| factoring

          factoring -->|Expanding the parentheses| vietasFormulas
      `}
      <Caption>
        General chart of concepts and formulas for quadratic equations
        <CaptionSecondary>The arrows show the logical order of derivation</CaptionSecondary>
      </Caption>
    </Diagram>

    <Hr />

    <Diagram
      $={uniques.methods}
      snippet={{
        key: true,
        title: 'Solution chart',
        seo: 'Chart of methods for solving quadratic equations',
        description: `
          A visual chart of all ways to solve quadratic equations: the universal method, incomplete quadratic equations, and mental methods.
        `,
      }}
      toc
    >
      {math`
        flowchart LR
          quadraticEquation["
            **Quadratic equation**
            $$ Ax^2 + Bx + C = 0, \ \ A \neq 0 $$
          "]

          quadraticFormula["
            **Quadratic formula**
            $$ D = B^2 - 4AC $$
          "]
          quadraticEquation -->|Universal method| quadraticFormula

          quadraticFormulaRoots["$$ x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} $$"]
          quadraticFormula --> quadraticFormulaRoots

          incomplete["
            **Incomplete quadratic equations**
            $$ \begin{aligned} 1) \ Ax^2 + C = 0 \\ 2) \ Ax^2 + Bx = 0 \\ 3) \ Ax^2 = 0 \end{aligned} $$
          "]
          quadraticEquation -->|$B$ or $C$ or both are zero| incomplete

          incomplete1Roots["$$ 1) \ x_{1,2} = \pm \sqrt{\frac{-C}{A}} $$"]
          incomplete2Roots["$$ 2) \ x_1 = 0, \ x_2 = -\frac{B}{A} $$"]
          incomplete3Roots["$$ 3) \ x_1 = x_2 = 0 $$"]
          incomplete --> incomplete1Roots
          incomplete --> incomplete2Roots
          incomplete --> incomplete3Roots

          zeroSum["
            **Zero sum**
            $$ A \pm B + C = 0 $$
          "]
          quadraticEquation -->|Mental 1| zeroSum

          zeroSumRoots["$$ x_1 = \pm 1, \ x_2 = \pm \frac{C}{A} $$"]
          zeroSum --> zeroSumRoots

          perfectSquare["
            **Perfect square**
            $$ (Kx)^2 \pm 2 \cdot Kx \cdot T + (T)^2 $$
          "]
          quadraticEquation -->|Mental 2| perfectSquare

          perfectSquareRoots["$$ x_1 = x_2 = \mp \frac{T}{K} $$"]
          perfectSquare --> perfectSquareRoots

          factoring["
            **Factoring**
            $$ x^2 + (t + k)x + tk $$
          "]
          quadraticEquation -->|Mental 3| factoring

          factoringRoots["$$ x_1 = -t, \ x_2 = -k $$"]
          factoring --> factoringRoots

          AtoC["
            **Move A to C**
            $$ x'^2 + Bx' + AC = 0 $$
          "]
          quadraticEquation -->|Mental 4| AtoC

          AtoCRoots["$$ x_{1,2} = \frac{x'_{1,2}}{A} $$"]
          AtoC --> AtoCRoots

          class incomplete,quadraticFormula,zeroSum,perfectSquare,factoring,AtoC fill
      `}
      <Caption>General chart of methods for solving quadratic equations</Caption>
    </Diagram>
  </>
));
