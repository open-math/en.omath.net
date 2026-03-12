import article from './article';

// #region Assets
//
//

import factoringAlgorithm from './assets/factoring-algorithm.svg';

//
//
// #endregion

export default defineProse()(() => (
  <>
    <Diagram
      toc={true}
      snippet={{
        key: true,
        title: 'Factoring cases',
        description: `
          All possible ways a quadratic trinomial can factor.
        `,
      }}
    >
      {math`
        flowchart TD
          trinomial["**Quadratic trinomial**<br />$$Ax^2 + Bx + C$$"]
          trinomial <-->|$$ D > 0 $$| twoRoots["$$A(x-x_1)(x-x_2)$$"]
          trinomial <-->|$$ D = 0 $$| oneRoot["$$A(x-x_{0})^2$$"]
          trinomial -->|$$ D < 0 $$| noRoots["**Can't be factored**"]

          class twoRoots,oneRoot,noRoots fill
      `}
      <Caption>Possible factorization cases for a quadratic trinomial</Caption>
    </Diagram>

    <H1>Why factor at all?</H1>

    <Include>{article.uniques.whyFactoring}</Include>

    <H1>Factoring by hand</H1>

    <P>
      Simple quadratic trinomials can sometimes be factored by hand. To do that, you rewrite coefficient <M>B</M> as the
      sum of two numbers, and coefficient <M>C</M> as the product of those <B>exact same</B> two numbers. Geometrically,
      that means you take a few smaller shapes and assemble one big rectangle out of them.
    </P>

    <Image src={factoringAlgorithm} invert="dark" />

    <Include toc>{article.uniques.manualFactoring}</Include>

    <H1>Factoring in the general case</H1>

    <Include toc>{article.uniques.generalFactoring}</Include>

    <Include toc>{article.uniques.generalFactoringExamples}</Include>
  </>
));
