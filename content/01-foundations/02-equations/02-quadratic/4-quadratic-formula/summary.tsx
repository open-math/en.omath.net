import article from './article';

// #region Links
//

const articleLink = $CONTENT.foundations.equations.quadratic.quadraticFormula.article;
const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;

//
// #endregion

export default defineProse({
  uniques: {
    algorithm: Diagram,
  },
})(({ uniques }) => (
  <>
    <Include toc="Why general formulas matter">{article.uniques.generalFormulas}</Include>

    <Hr />

    <Diagram
      $={uniques.algorithm}
      snippet={{
        seo: 'How to solve a quadratic equation',
        key: 'Solving algorithm',
        search: true,
        title: 'Quadratic equation solving algorithm',
        description: 'A diagram that shows how to solve any quadratic equation step by step.',
      }}
      toc="Solving algorithm"
    >
      {math`
        flowchart TD
          equation["**Write it in the general form**<br />$$ Ax^2 + Bx + C = 0 $$"]
          equation --> discriminant["**Compute the discriminant**<br />$$ D = B^2 - 4AC $$"]

          discriminant --> positive["$$ D > 0 $$"]
          discriminant --> zero["$$ D = 0 $$"]
          discriminant --> negative["$$ D < 0 $$"]

          positive -->|Two roots| twoRoots["$$ x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} $$"]
          zero -->|One root| oneRoot["$$ x = \frac{-B}{2A} $$"]
          negative --> noRoots["**No roots**"]

          class twoRoots,oneRoot,noRoots fill
      `}
      <Caption>How to solve any quadratic equation</Caption>
    </Diagram>

    <Hr />

    <P>
      A direct derivation of the quadratic formula via <Dep on={completingTheSquare}>completing the square</Dep>. If you
      want a more detailed explanation, the <Ref to={articleLink}>article</Ref> walks through every step.
    </P>

    <Table
      snippet={{
        key: true,
        seo: 'How to derive the quadratic formula',
        title: 'Deriving the quadratic formula',
        description: 'A step-by-step derivation of the quadratic formula with explanations.',
      }}
      toc
    >
      <Tr>
        <Td center> </Td>
        <Td>
          <B>Action</B>
        </Td>
        <Td center>
          <B>Equation</B>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>1</B>
        </Td>
        <Td>Write it in the general form.</Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle Ax^2 + Bx + C = 0`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>2</B>
        </Td>
        <Td>
          Divide both sides by <M>A</M>.
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle x^2 + \frac{B}{A}x + \frac{C}{A} = 0`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>3</B>
        </Td>
        <Td>Move the constant term to the right.</Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle x^2 + \frac{B}{A}x = -\frac{C}{A}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>4</B>
        </Td>
        <Td>Add and compensate the 2 needed for completing the square.</Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle x^2 + \yellow{2} \cdot  x \frac{B}{A} \cdot \yellow{\frac{1}{2}} = -\frac{C}{A}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>5</B>
        </Td>
        <Td>
          Add and compensate <M>b^2</M> to complete the square.
        </Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle \underbrace{x^2 + 2\cdot x \cdot \frac{B}{2A} + \yellow{\left( \frac{B}{2A} \right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left( \frac{B}{2A} \right)^2} = -\frac{C}{A}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>6</B>
        </Td>
        <Td>Complete the square on the left.</Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle \left( x + \frac{B}{2A} \right)^2 = -\frac{C}{A} + \left( \frac{B}{2A} \right)^2`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>7</B>
        </Td>
        <Td>Put the right-hand side over a common denominator.</Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle \left( x + \frac{B}{2A} \right)^2 = \frac{B^2 - 4AC}{4A^2}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>8</B>
        </Td>
        <Td>
          Introduce the <Dep on={article.uniques.discriminant}>discriminant</Dep>.
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle \left( x + \frac{B}{2A} \right)^2 = \frac{\brand{D}}{4A^2}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>9</B>
        </Td>
        <Td>
          Take the square root of both sides (if <M>D \ge 0</M>).
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle x_{1,2} + \frac{B}{2A} = \pm \frac{\sqrt{D}}{2A}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>10</B>
        </Td>
        <Td>
          Isolate <M>x</M> and get the final formula.
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle x_{1,2} = \frac{-B \pm \sqrt{D}}{2A}`}</M>
        </Td>
      </Tr>
    </Table>

    <Include toc>{article.uniques.discriminant}</Include>

    <Include toc>{article.uniques.formula}</Include>

    <Include toc>{article.uniques.examples}</Include>

    <Hr />

    <Include toc>{article.uniques.biquadratic}</Include>

    <Include toc>{article.uniques.biquadraticExamples}</Include>
  </>
));
