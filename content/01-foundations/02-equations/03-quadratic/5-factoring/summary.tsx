import article from './article';

// #region Assets
//
//

import factoringAlgorithm from './assets/factoring-algorithm.svg';

//
//
// #endregion

// #region Links
//
//

const articleLink = $CONTENT.foundations.equations.quadratic.factoring.article;
const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;
const discriminant = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$discriminant;
const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;

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

    <Include toc>{article.uniques.manualFactoringExamples}</Include>

    <H1>Factoring in the general case</H1>

    <P>
      Here is the direct derivation of the general factoring formula using{' '}
      <Dep on={completingTheSquare}>completing the square</Dep> and the difference of squares formula. If you want the
      full blow-by-blow version, the <Ref to={articleLink}>article</Ref> breaks down every step in detail.
    </P>

    <Table
      snippet={{
        key: true,
        seo: 'Deriving the factorization formula for a quadratic trinomial',
        title: 'Deriving the factorization formula',
        description: 'A step-by-step derivation of the factorization formula for a quadratic trinomial, with notes.',
      }}
      toc
    >
      <Tr>
        <Td> </Td>
        <Td>
          <B>Step</B>
        </Td>
        <Td center>
          <B>Expression</B>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>1</B>
        </Td>
        <Td>Write it in the general form.</Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle Ax^2 + Bx + C`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>2</B>
        </Td>
        <Td>
          Factor out <M>A</M>.
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle A\left(x^2 + \frac{B}{A}x + \frac{C}{A}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>3</B>
        </Td>
        <Td>
          Add and compensate the <M>2</M> to set up a perfect square.
        </Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle A\left(x^2 + \yellow{2} \cdot x \frac{B}{A} \cdot \yellow{\frac{1}{2}} + \frac{C}{A}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>4</B>
        </Td>
        <Td>
          Add and subtract <M>b^2</M> to complete the square.
        </Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle A\left(\underbrace{x^2 + 2 \cdot x \frac{B}{A} \cdot \frac{1}{2} + \yellow{\left(\frac{B}{2A}\right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left(\frac{B}{2A}\right)^2} + \frac{C}{A}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>5</B>
        </Td>
        <Td>Complete the square.</Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle A\left(\left[x + \frac{B}{2A}\right]^2 - \frac{B^2}{4A^2} + \frac{C}{A}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>6</B>
        </Td>
        <Td>Bring the right-hand side to a common denominator.</Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle A\left(\left[x + \frac{B}{2A}\right]^2 - \frac{B^2 - 4AC}{4A^2}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>7</B>
        </Td>
        <Td>
          Introduce the <Dep on={discriminant}>discriminant</Dep>.
        </Td>
        <Td center freeze>
          <M currentColor>{math`
            \displaystyle A\left(\left[x + \frac{B}{2A}\right]^2 - \frac{\brand{D}}{4A^2}\right)
          `}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>8</B>
        </Td>
        <Td>Factor it using the difference of squares formula.</Td>
        <Td center freeze>
          <M currentColor>{math`
            \displaystyle A\left(x + \frac{B}{2A} - \frac{\sqrt{D}}{2A}\right)\left(x + \frac{B}{2A} + \frac{\sqrt{D}}{2A}\right)
          `}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>9</B>
        </Td>
        <Td>Bring everything to a common denominator.</Td>
        <Td center freeze>
          <M currentColor>{math`
            \displaystyle A\left(x - \underbrace{\frac{-B - \sqrt{D}}{2A}}_{\text{Root 1}}\right)\left(x - \underbrace{\frac{-B + \sqrt{D}}{2A}}_{\text{Root 2}}\right)
          `}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>10</B>
        </Td>
        <Td>
          Replace the fractions with the notation from the <Dep on={quadraticFormula}>quadratic formula</Dep>.
        </Td>
        <Td center freeze>
          <M currentColor>{math`
            \displaystyle A(x - x_1)(x - x_2)
          `}</M>
        </Td>
      </Tr>
    </Table>

    <Include toc>{article.uniques.generalFactoring}</Include>

    <Include toc>{article.uniques.generalFactoringExamples}</Include>

    <Include toc>{article.uniques.quadraticFromAny}</Include>
  </>
));
