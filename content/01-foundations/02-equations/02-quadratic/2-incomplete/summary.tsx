import article from './article';

// #region Links
//

const whatIsQuadratic = $CONTENT.foundations.equations.quadratic.whatIsIt;

//
// #endregion

export default defineProse({
  uniques: {
    allFormulas: Diagram,
  },
})(({ uniques }) => (
  <>
    <P>
      When you come across a <Dep on={whatIsQuadratic}>quadratic equation</Dep>, don't rush to use complex methods right
      away. It might turn out that the equation is incomplete:
    </P>

    <Include toc>{article.uniques.quadraticMissingTerms}</Include>

    <P>In that case, solving the equation is simple and fast. You can solve it manually or use general formulas:</P>

    <Diagram
      $={uniques.allFormulas}
      toc
      snippet={{
        search: true,
        key: 'General formulas',
        seo: 'General formulas for solving incomplete quadratic equations',
        title: 'General formulas for incomplete quadratic equations',
        description: `
          Formulas for all three types of incomplete quadratic equations:
          when "B" and "C" are zero, when "C" is zero, and when "B" is zero.
        `,
      }}
    >{math`
      flowchart TD
        bc0[**B = 0 and C = 0**<br>$$ Ax^2 = 0 $$] --> bc0Roots[$$ x = 0 $$]
        c0[**C = 0**<br>$$ Ax^2 + Bx = 0 $$]
        c0 --> c0Roots1[$$ x_1 = 0 $$]
        c0 --> c0Roots2[$$ x_2 = -\frac{B}{A} $$]
        b0[**B = 0**<br>$$ Ax^2 + C = 0 $$] --> b0Roots[$$ x_{1,2} = \pm \sqrt{-\frac{C}{A}} $$]
        class bc0Roots,c0Roots1,c0Roots2,b0Roots fill
    `}</Diagram>

    <BlockMath>{math`
      \overbrace{5x^2 = 0}^{B = 0 \ \text{and} \ C = 0} \\ \boxed{x = 0} >>{big}{top}
      \overbrace{x^2 + 3x = 0}^{C = 0} \\ \boxed{x_1 = 0} \\ \boxed{x_2 = -\frac{3}{1} = -3} >>{big}{top}
      \overbrace{2x^2 - 8 = 0}^{B = 0} \\ x_{1,2} = \pm \sqrt{-\frac{-8}{2}} \\ x_{1,2} = \pm \sqrt{4} \\ \boxed{x_{1,2} = \pm 2}
    `}</BlockMath>

    <Include toc>{article.uniques.doNotMemorize}</Include>
  </>
));
