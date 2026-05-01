// #region Scripts
//
//

import mentalSquares from './scripts/mental-squares';

//
//
// #endregion

// #region Assets
//
//

import abSquaredMeme from './assets/a-b-squared-meme.svg';
import squareSumSchema from './assets/square-sum-schema.svg';
import squareDiffSchema from './assets/square-diff-schema.svg';
import foilSchema from './assets/foil.svg';
import ancientFormula from './assets/ancient-formula.webp';
import differenceOfSquaresSchema from './assets/diff-of-squares.svg';
import cubeSumAnimation from './assets/cube-sum.mp4';

//
//
// #endregion

// #region Links
//
//

const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;
const vietasFormulas = $CONTENT.foundations.equations.quadratic.vietasFormulas;
const cubeSumDiffFactorization = $CONTENT.foundations.polynomials.specialProducts.practice.$cubeSumDiffFactorization;

//
//
// #endregion

// Explain why these formulas have those names and how not to mix them up
// The names themselves already hint at the formula

// For all Statement SEO titles, use the format "Square of a sum formula", "Square of a difference formula", and so on.

// In Russian we call it the "fountain" method
// In English it is the FOIL method (First, Outer, Inner, Last)

// In the English version, use the term Freshman's Dream only.

// #region TODO
//
//

// TODO: Add a Reference link to an article about the Binomial Theorem (without dependency) at the end of this article.

//
//
// #endregion

export default defineProse({
  uniques: {
    introExamples: Problems,
    whatAreSpecialProducts: Term,
    squareSum: Statement,
    squareSumExpandExamples: Problems,
    squareSumFactorExamples: Problems,
    squareDiff: Statement,
    squareDiffExamples: Problems,
    fastSquare: Problems,
    diffOfSquares: Statement,
    diffOfSquaresExamples: Problems,
    cubeSum: Statement,
    cubeDiff: Statement,
    cubeSumDiffExamples: Problems,
    memorizationTips: List,
  },
})(({ uniques }) => (
  <>
    <H1
      snippet={{
        seo: 'What are Special Products?',
        description: `
          Special Products are formulas that let you quickly expand brackets or, going the other way, factor expressions back into brackets.
        `,
      }}
    >
      What Are Special Products?
    </H1>

    <P>
      In algebra, you constantly run into expressions where brackets are raised to a power, multiplied by each other, or
      sit in the numerator and denominator of a fraction. Simplifying every one of those from scratch by hand is tedious
      and makes it easy to slip up in long calculations. Try it yourself:
    </P>

    <Problems $={uniques.introExamples} title="Simplifying expressions" level="example">
      <P>Simplify the expression:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x+5)^2 - (x-5)(x+5) - 10(x+5)`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="0" />
        <ProblemAnswer>
          <BlockMath>{math`0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Expand each part one by one. Start with the square of a sum -- write it as a binomial times itself and
            expand it with FOIL:
          </P>
          <BlockMath>{math`
            (x+5)^2 = (x+5)(x+5) = x^2 + 5x + 5x + 25 = x^2 + 10x + 25
          `}</BlockMath>
          <P>Now the second product -- the same way:</P>
          <BlockMath>{math`
            (x-5)(x+5) = x^2 + \cancel{5x} - \cancel{5x} - 25 = x^2 - 25
          `}</BlockMath>
          <P>
            The terms <M>+5x</M> and <M>-5x</M> cancel immediately. The third part is straightforward:
          </P>
          <BlockMath>{math`10(x+5) = 10x + 50`}</BlockMath>
          <P>Substitute everything back and combine terms:</P>
          <BlockMath>{math`
            (x^2 + 10x + 25) - (x^2 - 25) - (10x + 50)
            = \cancel{x^2} + \cancel{10x} + 25 - \cancel{x^2} + 25 - \cancel{10x} - 50
            = \boxed{0}
          `}</BlockMath>
          <P>It looks complicated, yet the whole expression is exactly zero.</P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{(a+b)^2 - (a-b)^2}{4ab}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="1" />
        <ProblemAnswer>
          <BlockMath>{math`1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand both squares in the numerator separately by hand:</P>
          <BlockMath>{math`
            (a+b)^2 = (a + b)(a+b) = a^2 + ab + ba + b^2  = a^2 + 2ab + b^2 \\
            (a-b)^2 = (a - b)(a-b) = a^2 - ab - ba + b^2  = a^2 - 2ab + b^2
          `}</BlockMath>
          <P>Subtract the second from the first:</P>
          <BlockMath>{math`
            (a^2 + 2ab + b^2) - (a^2 - 2ab + b^2)
            = \cancel{a^2} + 2ab + \cancel{b^2} - \cancel{a^2} + 2ab - \cancel{b^2}
            = 4ab
          `}</BlockMath>
          <P>
            The entire numerator collapses to <M>4ab</M> -- exactly what sits in the denominator:
          </P>
          <BlockMath>{math`\frac{\cancel{4ab}}{\cancel{4ab}} = \boxed{1}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{(m+n)^2 - m^2 - n^2}{mn} \cdot \frac{(m-n)^2 - m^2 - n^2}{mn}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="-4" />
        <ProblemAnswer>
          <BlockMath>{math`-4`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Handle each numerator separately. Expand the square in the first one:</P>
          <BlockMath>{math`
            (m+n)^2 - m^2 - n^2 = \cancel{m^2} + 2mn + \cancel{n^2} - \cancel{m^2} - \cancel{n^2} = 2mn
          `}</BlockMath>
          <P>And in the second one:</P>
          <BlockMath>{math`
            (m-n)^2 - m^2 - n^2 = \cancel{m^2} - 2mn + \cancel{n^2} - \cancel{m^2} - \cancel{n^2} = -2mn
          `}</BlockMath>
          <P>Substitute back and cancel:</P>
          <BlockMath>{math`
            \frac{2\cancel{mn}}{\cancel{mn}} \cdot \frac{-2\cancel{mn}}{\cancel{mn}} = 2 \cdot (-2) = \boxed{-4}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      In all three examples, we kept doing the same routine work over and over -- expanding brackets inside powers.
      Those expansions look very similar -- squares, coefficients of <M>2</M>, and so on. Instead of wasting time on the
      same hand calculations every time, mathematicians studied the most common patterns and wrote them down as
      formulas. That is where the name comes from -- Special Products. Do not confuse them with anything else.
    </P>

    <Term
      $={uniques.whatAreSpecialProducts}
      title="Special Products"
      snippet={{
        key: 'What are Special Products?',
        description: `
          Formulas that let you quickly "unpack" compact powered expressions into expansions or, going the other way,
          "pack" long sums into a compact form. These formulas save you from doing routine calculations by hand.
        `,
      }}
    >
      Formulas that let you quickly "unpack" compact powered expressions into expansions or, going the other way, "pack"
      long sums into a compact form. These formulas save you from doing routine calculations by hand.
    </Term>

    <H1>Square of a Sum</H1>

    <P>
      Start with a classic mistake made by <M>90%</M> of people, most often school students who are "not that good" at
      math. It is so common that there is even a meme about it:
    </P>

    <Image src={abSquaredMeme} width="400px" />

    <P>
      It would be really nice if the last answer worked that way. People want it so badly that this dream of applying a
      power directly to the terms <M>{math`(a+b)^n = a^n + b^n`}</M> even has its own name --{' '}
      <Ref to="https://w.wiki/Pjb">"Freshman's Dream"</Ref>. You can see very quickly that this dream does not come true
      by plugging in actual numbers instead of letters:
    </P>

    <BlockMath>{math`
      \red{(1+2)^2 = 1^2 + 2^2 = 5} \\
      \boxed{\green{(1 + 2)^2 = 3^2 = 9}}
      >>{big}
      \red{(2+3)^3 = 2^3 + 3^3 = 35} \\
      \boxed{\green{(2 + 3)^3 = 5^3 = 125}}
    `}</BlockMath>

    <P>
      In the meme and the first example, the power is two, and the expression <M>(a+b)^2</M> is called the{' '}
      <B>"square of a sum"</B> because the whole sum <M>a + b</M> is being squared. That is exactly where the name comes
      from -- the square of the <I>entire</I> sum. The correct formula for <M>(a+b)^2</M> looks a lot like "Freshman's
      Dream", but it is slightly more complicated. You can derive it by hand very quickly. The most direct way is to
      write the square as a product of two identical binomials and expand the brackets with FOIL:
    </P>

    <Image src={foilSchema} invert="dark" width="600px">
      <Caption>Multiplying binomials with FOIL</Caption>
    </Image>

    <BlockMath>{math`
      (a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = \boxed{a^2 + 2ab + b^2}
    `}</BlockMath>

    <P>
      Going the other way, from the "sum" back into the packaged "product", is just as simple -- split <M>2ab</M> into
      two terms and factor out a common binomial several times in a row:
    </P>

    <BlockMath>{math`
      a^2 + 2ab + b^2 = a^2 + ab + ab + b^2 = a(a + b) + b(a + b) = (a + b)(a + b) = \boxed{(a + b)^2}
    `}</BlockMath>

    <P>
      The second derivation is geometric. You can think of <M>a</M> and <M>b</M> as two line segments. Their sum,
      squared, equals the area of a square whose side is made from those two segments. You can find the total area by
      adding the areas of the component shapes: the square of area <M>a^2</M>, two rectangles of area <M>ab</M>, and the
      square of area <M>b^2</M>.
    </P>

    <Image src={squareSumSchema} invert="dark">
      <Caption>Geometric derivation of the square of a sum formula</Caption>
    </Image>

    <Statement
      $={uniques.squareSum}
      title="Square of a sum formula"
      snippet={{
        key: true,
        search: ['Square of a sum formula'],
        title: 'Square of a Sum',
        description: `
          One of the Special Products formulas: (a+b)² = a² + 2ab + b².
          It lets you quickly expand brackets or, the other way around, pack an expanded expression back into them.
        `,
      }}
    >
      <BlockMath>(a + b)^2 = a^2 + 2ab + b^2</BlockMath>
    </Statement>

    <P>
      From this point on, you never need to multiply the same two brackets by hand again. It is enough to find three
      pieces <B>from left to right</B>, either mentally or on paper: the square of the first term, twice the product of
      the two terms, and the square of the second term. Then just write them with plus signs. Try it yourself:
    </P>

    <Problems $={uniques.squareSumExpandExamples} title="Expanding with the square of a sum" level="example">
      <P>Expand the brackets:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>(m+5)^2</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="m^2 + 10m + 25" />
        <ProblemAnswer>
          <BlockMath>m^2 + 10m + 25</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The role of <M>a</M> is played by <M>m</M>, and the role of <M>b</M> by <M>5</M>. From left to right, find
            the square of the first term, twice the product of the first and second, and the square of the second. With
            numbers this simple, you should do it mentally:
          </P>
          <BlockMath>{math`
            m^2 >>{big} 2 \cdot m \cdot 5 = 10m >>{big} 5^2 = 25
          `}</BlockMath>
          <P>Write those pieces with plus signs and the expansion is done:</P>
          <BlockMath>(m+5)^2 = m^2 + 10m + 25</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\left( 2 + \frac{1}{8}x \right)^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="4 + \frac{1}{2}x + \frac{1}{64}x^2" />
        <ProblemAnswer>
          <BlockMath>{math`4 + \frac{1}{2}x + \frac{1}{64}x^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The role of <M>a</M> is played by <M>2</M>, and the role of <M>b</M> by <M>{math`\frac{1}{8}x`}</M>. From
            left to right, find the square of the first term, twice the product of the first and second, and the square
            of the second. The numbers are harder here, so it is fine to compute all three separately on paper. Do not
            forget to reduce fractions.
          </P>
          <BlockMath>{math`
            2^2 = 4 >>{big}
            \cancel{2} \cdot \cancel{2} \cdot \frac{1}{\cancel{8}_{\small\cancel{4}_{\small 2}}}x = \frac{1}{2}x >>{big}
            \left( \frac{1}{8}x \right)^2 = \left(\frac{1}{8}\right)^2 x^2 = \frac{1}{64}x^2 
          `}</BlockMath>
          <P>Write those pieces with plus signs and the expansion is done:</P>
          <BlockMath>{math` \left( 2 + \frac{1}{8}x \right)^2 = 4 + \frac{1}{2}x + \frac{1}{64}x^2 `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(-7a - 3b)^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="49a^2 + 42ab + 9b^2" />
        <ProblemHint>
          <P>
            Option <M>1</M> - rewrite the expression under the square as a sum with an explicit plus sign:
          </P>
          <BlockMath>{math`(-7a - 3b)^2 = \left( (-7a) + (-3b) \right)^2`}</BlockMath>
          <P>Option 2 -- factor a minus sign out inside the sum.</P>
        </ProblemHint>

        <ProblemAnswer>
          <BlockMath>{math`49a^2 + 42ab + 9b^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Using an explicit plus sign">
            <P>
              The minus sign in <M>-7a - 3b</M> can be interpreted in two ways. On one hand, you can read it as the
              difference of <M>-7a</M> and <M>3b</M>. But you can also attach that minus sign to <M>3b</M>. Then you get
              a sum of two numbers, <M>-7a</M> and <M>-3b</M>, which can be written explicitly like this:
            </P>
            <BlockMath>{math`(-7a - 3b)^2 = \left( (-7a) + (-3b) \right)^2`}</BlockMath>
            <P>
              After that, it is the same procedure as before. In the square of a sum formula, the role of <M>a</M> is
              played by <M>-7a</M>, and the role of <M>b</M> by <M>-3b</M>. From left to right, find the square of the
              first term, twice the product of the first and second, and the square of the second.
            </P>
            <BlockMath>{math`
              (-7a)^2 = (-7)^2 a^2 = 49a^2 >>{big} 2 \cdot (-7a) \cdot (-3b) = 42ab >>{big} (-3b)^2 = (-3)^2 b^2 = 9b^2
            `}</BlockMath>
            <P>Write those pieces with plus signs and the expansion is done:</P>
            <BlockMath>{math`(-7a - 3b)^2 = 49a^2 + 42ab + 9b^2`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Factoring out the minus sign">
            <P>
              Factor a minus sign out of <M>-7a - 3b</M>:
            </P>
            <BlockMath>{math`-7a - 3b = -(7a + 3b)`}</BlockMath>
            <P>Now we have a sum inside the brackets, and the standalone minus sign disappears when squared:</P>
            <BlockMath>{math`(-(7a + 3b))^2 = (-1)^2 \cdot (7a + 3b)^2 = (7a + 3b)^2 = 49a^2 + 42ab + 9b^2`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      The square of a sum formula does not just help you expand brackets quickly. It also lets you go the other way --
      pack an expanded expression back into a bracket squared, into the square of a sum. This process is often called
      completing the square, and we will talk about it separately below.
    </P>

    <P>
      Packing is slightly harder than expanding. The main goal is to find <M>a</M> and <M>b</M> so you can build the
      square of a sum <M>(a+b)^2</M>. There are two ways to find them. The first and fastest way is to look at the{' '}
      <B>outer terms</B>: in simple cases, you immediately see perfect squares there, which instantly reveal <M>a</M>{' '}
      and <M>b</M>. After that, you only need to check that <M>2ab</M> matches the middle term, and the packing is done.
    </P>

    <P>
      The second way is to start with the <B>middle term</B>: it contains all the information about <M>a</M> and{' '}
      <M>b</M>. Take the middle term, divide it by <M>2</M>, and you get the product <M>ab</M>. Then you only need to
      figure out which part is <M>a</M> and which part is <M>b</M>.
    </P>

    <Problems $={uniques.squareSumFactorExamples} title="Packing into the square of a sum" level="example">
      <P>Write the sum as a square of a sum:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`49 + 14x + x^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(7 + x)^2" />
        <ProblemAnswer>
          <BlockMath>{math`(7 + x)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Using the outer terms">
            <P>
              Look at the outer terms: <M>49 = 7^2</M> and <M>x^2 = x^2</M>. Both are nice perfect squares, so you can
              immediately see <M>a = 7</M> and <M>b = x</M>. Check the middle term: <M>2ab = 2 \cdot 7 \cdot x = 14x</M>
              -- it matches. Write the result:
            </P>
            <BlockMath>{math`
              49 + 14x + x^2 = \underset{a^2}{7^2} + 2 \cdot \underset{a}{7} \cdot \underset{b}{x} + \underset{b^2}{x^2} = (7 + x)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Using the middle term">
            <P>
              Start with the middle term <M>14x</M>. Divide it by <M>2</M> and get <M>7x</M>. Now split that product
              into two factors whose squares match the outer terms <M>49</M> and <M>x^2</M>. Here it is immediate:
              <M>7x = 7 \cdot x</M>, so <M>a = 7</M> and <M>b = x</M>.
            </P>
            <BlockMath>{math`
              49 + 14x + x^2 = \underset{a^2}{7^2} + 2 \cdot \underset{a}{7} \cdot \underset{b}{x} + \underset{b^2}{x^2} = (7 + x)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`1 + 8y + 16y^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(1 + 4y)^2" />
        <ProblemHint>
          Use the fact that <M>1^2 = 1</M>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(1 + 4y)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Using the outer terms">
            <P>
              Look at the outer terms: <M>1 = 1^2</M> and <M>16y^2 = (4y)^2</M>. Both are nice perfect squares, so you
              can immediately see <M>a = 1</M> and <M>b = 4y</M>. Check the middle term:{' '}
              <M>2ab = 2 \cdot 1 \cdot 4y = 8y</M>
              -- it matches. Write the result:
            </P>
            <BlockMath>{math`
              1 + 8y + 16y^2 = \underset{a^2}{1^2} + 2 \cdot \underset{a}{1} \cdot \underset{b}{4y} + \underset{b^2}{(4y)^2} = (1 + 4y)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Using the middle term">
            <P>
              Start with the middle term <M>8y</M>. Divide it by <M>2</M> and get <M>4y</M>. That product has to be
              split into two factors whose squares match the outer terms <M>1</M> and <M>16y^2</M>. Recall that{' '}
              <M>1^2 = 1</M>, so we artificially insert a factor of one: <M>1 \cdot 4y</M>. Check: <M>1^2 = 1 = a</M>{' '}
              and <M>(4y)^2 = 16y^2 = b^2</M>. Everything matches. Write the square of a sum:
            </P>
            <BlockMath>{math`
              1 + 8y + 16y^2 = \underset{a^2}{1^2} + 2 \cdot \underset{a}{1} \cdot \underset{b}{4y} + \underset{b^2}{(4y)^2} = (1 + 4y)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{1}{4}k^2 + k + 1`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(k/2 + 1)^2" />
        <ProblemHint>The middle term does not always divide evenly by two. Do not let that stop you...</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`\left(\frac{k}{2} + 1 \right)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Using the outer terms">
            <P>
              Look at the outer terms: <M>{math`\frac{1}{4}k^2 = \left(\frac{k}{2}\right)^2`}</M> and <M>1 = 1^2</M>.
              Both are nice perfect squares, so you can immediately see <M>{math`a = \frac{k}{2}`}</M> and <M>b = 1</M>.
              Check the middle term: <M>{math`2ab = 2 \cdot \frac{k}{2} \cdot 1 = k`}</M> -- it matches. Write the
              result:
            </P>
            <BlockMath>{math`
              \frac{1}{4}k^2 + k + 1 =
              \underset{a^2}{\left( \frac{k}{2} \right)^2} + 2 \cdot \underset{a}{\frac{k}{2}} \cdot \underset{b}{1} + \underset{b^2}{1^2} =
              \left(\frac{k}{2} + 1 \right)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Using the middle term">
            <P>
              Start with the middle term <M>k</M>. Divide it by <M>2</M> even though it does not divide evenly. That
              gives <M>{math`\frac{k}{2}`}</M>. Now write that fraction as a product of two factors whose squares match
              the outer terms <M>{math`\frac{1}{4}k^2`}</M> and <M>1</M>. Recall that <M>1^2 = 1</M>, so we artificially
              insert a factor of one: <M>{math`\frac{k}{2} \cdot 1`}</M>. Check:{' '}
              <M>{math`\left( \frac{k}{2} \right)^2 = \frac{1}{4}k^2 = a^2`}</M> and <M>1^2 = 1 = b^2</M>. Everything
              matches. Write the square of a sum:
            </P>
            <BlockMath>{math`
              \frac{1}{4}k^2 + k + 1 =
              \underset{a^2}{\left( \frac{k}{2} \right)^2} + 2 \cdot \underset{a}{\frac{k}{2}} \cdot \underset{b}{1} + \underset{b^2}{1^2} =
              \left(\frac{k}{2} + 1 \right)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`16t^2 + 36m^2 + 48tm`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(4t + 6m)^2" />
        <ProblemHint>
          The terms in the sum do not always appear in the same order as in the square of a sum formula. In cases like
          this, you can reorder them, because swapping terms does not change a sum.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(4t + 6m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            This sum looks unusual: the second term is also a square. Swap the second and third terms (the sum does not
            change) so the pure squares sit on the outside and the mixed term is in the middle:
          </P>
          <BlockMath>{math`16t^2 + 48tm + 36m^2`}</BlockMath>
          <ProblemSection title="Using the outer terms">
            <P>
              Look at the outer terms: <M>16t^2 = (4t)^2</M> and <M>36m^2 = (6m)^2</M>. Both are nice perfect squares,
              so you can immediately see <M>a = 4t</M> and <M>b = 6m</M>. Check the middle term:{' '}
              <M>2ab = 2 \cdot 4t \cdot 6m = 48tm</M> -- it matches. Write the result:
            </P>
            <BlockMath>{math`
              16t^2 + 36m^2 + 48tm = \underset{a^2}{(4t)^2} + 2 \cdot \underset{a}{4t} \cdot \underset{b}{6m} + \underset{b^2}{(6m)^2} = (4t + 6m)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Using the middle term">
            <P>
              Start with the middle term <M>48tm</M>. Divide it by <M>2</M> and get <M>24tm</M>. Now split that product
              into two factors whose squares match the outer terms <M>16t^2</M> and <M>36m^2</M>. Here it is immediate:
              <M>24tm = 4t \cdot 6m</M>, so <M>a = 4t</M> and <M>b = 6m</M>. Check: <M>(4t)^2 = 16t^2 = a^2</M> and{' '}
              <M>(6m)^2 = 36m^2 = b^2</M>. Everything matches. Write the square of a sum:
            </P>
            <BlockMath>{math`
              16t^2 + 36m^2 + 48tm = \underset{a^2}{(4t)^2} + 2 \cdot \underset{a}{4t} \cdot \underset{b}{6m} + \underset{b^2}{(6m)^2} = (4t + 6m)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Callout title="Very ancient formulas" icon={ancientFormula}>
      <P>
        Special Products were already known in deep antiquity, all the way back to the ancient Greeks. Euclid, for
        example, was already using them geometrically in the 3rd century BCE to compute areas. He stated the square of a
        sum formula like this:
      </P>
      <P center>
        <I>
          "If a segment is divided into two parts in any way, then the area of the square built on the whole segment is
          equal to the sum of the areas of the squares built on each part, plus twice the area of the rectangle whose
          sides are those two parts."
        </I>
      </P>
      <P>
        Special Products took on their modern form much later, in the 16th and 17th centuries, thanks to mathematicians
        Francois Viete (the same Viete whose name appears in <Ref to={vietasFormulas}>Vieta's formulas</Ref>) and Rene
        Descartes. These formulas are still some of the most frequently used mathematical tricks everywhere in
        mathematics, from simplifying expressions in algebra to factoring equations in cryptography.
      </P>
    </Callout>

    <H1>Square of a Difference</H1>

    <P>
      By analogy with the square of a sum, an expression of the form <M>(a-b)^2</M> is called the square of a
      difference. The reason is clear: we have a difference of two numbers <M>a-b</M>, and we want to square that entire
      difference, that is, raise it to the second power. That is where the name comes from: the square of the{' '}
      <I>entire</I> difference.
    </P>

    <P>
      Algebraically, the square-of-a-difference formula is derived in both directions exactly the same way as the square
      of a sum: either expand with FOIL in one direction, or split the doubled term and factor out common factors in the
      other:
    </P>

    <BlockMath>{math`
      (a - b)^2 = (a - b)(a - b) = a^2 - ab - ba + b^2 = \boxed{a^2 - 2ab + b^2} \\
      a^2 - 2ab + b^2 = a^2 - ab - ab + b^2 = a(a - b) - b(a - b) = (a - b)(a - b) = \boxed{(a - b)^2}
    `}</BlockMath>

    <P>
      A geometric derivation is possible too. For the square of a sum, we found the total area of a large square whose
      side was made of two segments. Now we already have a large square with side <M>a</M>, and we shorten its sides by
      the length <M>b</M>. The area of the smaller square is exactly <M>(a-b)^2</M>:
    </P>

    <Image src={squareDiffSchema} invert="dark">
      <Caption>Geometric derivation of the square-of-a-difference formula</Caption>
    </Image>

    <Statement
      $={uniques.squareDiff}
      title="Square of a difference formula"
      snippet={{
        key: true,
        search: ['Square of a difference formula'],
        title: 'Square of a Difference',
        description: `
          One of the Special Products formulas: (a-b)² = a² - 2ab + b².
          It lets you expand parentheses quickly or, going the other way, factor an expression back into squared parentheses.
        `,
      }}
    >
      <BlockMath>(a - b)^2 = a^2 - 2ab + b^2</BlockMath>
    </Statement>

    <P>
      As you can see, the square of a difference formula differs from the square of a sum formula only by changing the
      first sign from plus to minus. It is enough to remember the plus version and, when needed, change the first sign
      to minus.
    </P>

    <Important title="There Is a Minus Sign, but It Is Still a Sum!">
      <P>
        Because the minus sign has two roles in mathematics, <B accent>any difference can be written as a sum</B> if the
        minus signs are understood as negation. Not three minus two <M>3-2</M>, but three plus negative two{' '}
        <M>3+(-2)</M>. This works for expressions too:
      </P>
      <BlockMath>- a - b + c - d = (-a) + (-b) + c + (-d)</BlockMath>
      <P>
        So do not be surprised when mathematicians call some expressions sums,{' '}
        <B>even if there are no plus signs at all!</B> We will do the same.
      </P>
    </Important>

    <P>
      Practice using the square-of-a-difference formula to expand parentheses quickly and to factor expressions back
      into them. The usage pattern is exactly the same as for the square of a sum; the main thing is not to get lost in
      the minus signs. When factoring back into parentheses, you divide not by <M>2</M> but by <M>-2</M>. This time we
      will combine both exercises, expansion and factoring, into one set:
    </P>

    <Problems $={uniques.squareDiffExamples} title="Examples Using the Square of a Difference" level="example">
      <SubProblem>
        <ProblemDescription>
          <P>Expand the parentheses:</P>
          <BlockMath>(6-c)^2</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="36 - 12c + c^2" />
        <ProblemAnswer>
          <BlockMath>36 - 12c + c^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Here <M>a</M> is played by the number <M>6</M>, and <M>b</M> by the letter <M>c</M>. From left to right,
            find the square of the first term, the negative of twice the product of the first and second terms, and the
            square of the second term. With numbers this simple, it is best to do the computation mentally:
          </P>
          <BlockMath>{math`
            6^2 = 36 >>{big} -2 \cdot 6 \cdot c = -12c >>{big} c^2
          `}</BlockMath>
          <P>Write all the results together:</P>
          <BlockMath>(6-c)^2 = 36 - 12c + c^2</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          <P>
            Many beginners often make the double minus mistake. When applying the square-of-a-difference formula, they
            take one minus sign from the formula and a second one from <M>-b</M>. As a result, minus times minus becomes
            plus, and they get the wrong answer:
          </P>
          <BlockMath>{math`
            (6-c)^2 = 36 - 2 \cdot 6 \cdot (-c) + c^2 = \red{36 + 12c + c^2}
          `}</BlockMath>
          <P>
            Remember once and for all:{' '}
            <B>
              any minus sign has already been accounted for in the square of a difference. Do not think about signs
              separately at all!
            </B>
          </P>
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Write the sum as a square of a difference:</P>
          <BlockMath>9x^2 - 6x + 1</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(3x - 1)^2" />
        <ProblemHint>
          You have not forgotten that <M>1^2 = 1</M>, have you?
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(3x - 1)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Using the Outer Terms">
            <P>
              Look at the outer terms: <M>9x^2 = (3x)^2</M> and <M>1 = 1^2</M>. Both are nice squares, so we can see
              right away that <M>a = 3x</M> and <M>b = 1</M>. Check the middle term:{' '}
              <M>-2ab = -2 \cdot 3x \cdot 1 = -6x</M> and it matches. So we write:
            </P>
            <BlockMath>{math`
              9x^2 - 6x + 1 = \underset{a^2}{(3x)^2} - 2 \cdot \underset{a}{3x} \cdot \underset{b}{1} + \underset{b^2}{1^2} = (3x - 1)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Using the Middle Term">
            <P>
              Start with the middle term <M>-6x</M>. Divide it by <M>-2</M> and get <M>3x</M>. This product must be
              split into two factors whose squares match the outer terms <M>9x^2</M> and <M>1</M>. Since <M>1^2 = 1</M>,
              we artificially include a factor of one: <M>3x = 3x \cdot 1</M>, so <M>a = 3x</M> and <M>b = 1</M>. Check:{' '}
              <M>9x^2 = (3x)^2 = a^2</M> and <M>1 = 1^2 = b^2</M>. Everything matches, so we write the square of a
              difference:
            </P>
            <BlockMath>{math`
              9x^2 - 6x + 1 = \underset{a^2}{(3x)^2} - 2 \cdot \underset{a}{3x} \cdot \underset{b}{1} + \underset{b^2}{1^2} = (3x - 1)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Expand the parentheses:</P>
          <BlockMath>(-7 + 2a)^2</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="4a^2 - 28a + 49" />
        <ProblemHint>Use the fact that changing the order of addends does not change a sum.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>4a^2 - 28a + 49</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            This sum has an unusual form. The minus sign is not in the middle but at the beginning. Swap the first and
            second terms (the sum does not change) so it is easier to compare with the square-of-a-difference formula:
          </P>
          <BlockMath>{math`(-7 + 2a)^2 = (2a - 7)^2`}</BlockMath>
          <P>
            Now <M>a</M> in the formula is played by <M>2a</M>, and <M>b</M> by <M>7</M>. From left to right, find the
            square of the first term, the negative of twice the product of the first and second terms, and the square of
            the second:
          </P>
          <BlockMath>{math`
            (2a)^2 = 4a^2 >>{big} -2 \cdot 2a \cdot 7 = -28a >>{big} 7^2 = 49
          `}</BlockMath>
          <P>Write all the results together:</P>
          <BlockMath>(-7 + 2a)^2 = 4a^2 - 28a + 49</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Write the sum as a square of a difference:</P>
          <BlockMath>{math`- 12k + 4k^2 + 9`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(2k - 3)^2" />
        <ProblemHint>Reorder the terms so they match the order in the square-of-a-difference formula.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(2k - 3)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            This sum has an unusual form: the pure squares are not at the ends. Reorder the terms (the sum does not
            change) so the mixed term ends up in the middle:
          </P>
          <BlockMath>{math`- 12k + 4k^2 + 9 = 4k^2 - 12k + 9`}</BlockMath>
          <ProblemSection title="Using the Outer Terms">
            <P>
              Look at the outer terms: <M>4k^2 = (2k)^2</M> and <M>9 = 3^2</M>. Both are nice squares, so we can see
              right away that <M>a = 2k</M> and <M>b = 3</M>. Check the middle term:{' '}
              <M>-2ab = -2 \cdot 2k \cdot 3 = -12k</M> and it matches. So we write:
            </P>
            <BlockMath>{math`
              4k^2 - 12k + 9 = \underset{a^2}{(2k)^2} - 2 \cdot \underset{a}{2k} \cdot \underset{b}{3} + \underset{b^2}{3^2} = (2k - 3)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Using the Middle Term">
            <P>
              Start with the middle term <M>-12k</M>. Divide it by <M>-2</M> and get <M>6k</M>. This product must be
              split into two factors whose squares match the outer terms <M>4k^2</M> and <M>9</M>. Here that is
              immediate: <M>6k = 2k \cdot 3</M>, so <M>a = 2k</M> and <M>b = 3</M>. Check: <M>(2k)^2 = 4k^2 = a^2</M>{' '}
              and <M>3^2 = 9 = b^2</M>. Everything matches, so we write the square of a difference:
            </P>
            <BlockMath>{math`
              4k^2 - 12k + 9 = \underset{a^2}{(2k)^2} - 2 \cdot \underset{a}{2k} \cdot \underset{b}{3} + \underset{b^2}{3^2} = (2k - 3)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Expand the parentheses:</P>
          <BlockMath>{math`
            \left( 5y - \frac{3}{4}x \right)^2
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="25y^2 - 15xy/2 + 9x^2/16" />
        <ProblemAnswer>
          <BlockMath>{math`
            25y^2 - \frac{15}{2}xy + \frac{9}{16}x^2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In the square-of-a-difference formula, <M>a</M> is played by <M>5y</M>, and <M>b</M> by{' '}
            <M>{math`\frac{3}{4}x`}</M>. From left to right, find the square of the first term, the negative of twice
            the product of the first and second terms, and the square of the second term. The numbers are more
            complicated here, so it is reasonable to compute all three separately on paper. Do not forget to simplify.
          </P>
          <BlockMath>{math`
            (5y)^2 = 5^2y^2 = 25y^2 >>{big} -\cancel{2} \cdot 5y \cdot \frac{3}{\cancel{4}_{\small 2}}x = -\frac{15}{2}xy >>{big} \left( \frac{3}{4}x \right)^2 = \left(\frac{3}{4}\right)^2 x^2 = \frac{9}{16}x^2
          `}</BlockMath>
          <P>Write all the results together:</P>
          <BlockMath>{math`
            \left( 5y - \frac{3}{4}x \right)^2 = 25y^2 - \frac{15}{2}xy + \frac{9}{16}x^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Write the sum as a square of a difference:</P>
          <BlockMath>{math`
            \frac{1}{4}m^2 - 5m + 25
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(m/2 - 5)^2" />
        <ProblemAnswer>
          <BlockMath>{math`\left(\frac{m}{2} - 5\right)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Using the Outer Terms">
            <P>
              Look at the outer terms: <M>{math`\frac{1}{4}m^2 = \left(\frac{m}{2}\right)^2`}</M> and <M>25 = 5^2</M>.
              Both are nice squares, so we can see right away that <M>{math`a = \frac{m}{2}`}</M> and <M>b = 5</M>.
              Check the middle term: <M>{math`-2ab = -2 \cdot \frac{m}{2} \cdot 5 = -5m`}</M> and it matches. So we
              write:
            </P>
            <BlockMath>{math`
              \frac{1}{4}m^2 - 5m + 25 =
              \underset{a^2}{\left(\frac{1}{2}m\right)^2} - 2 \cdot \underset{a}{\frac{1}{2}m} \cdot \underset{b}{5} + \underset{b^2}{5^2} =
              \left(\frac{m}{2} - 5\right)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Using the Middle Term">
            <P>
              Start with the middle term <M>-5m</M>. Divide it by <M>-2</M>, even though it does not divide evenly. That
              gives <M>{math`\frac{5m}{2}`}</M>. Now write this fraction as a product of two factors whose squares match
              the outer terms <M>{math`\frac{1}{4}m^2`}</M> and <M>25</M>. We factor it as{' '}
              <M>{math`\frac{5m}{2} = \frac{m}{2} \cdot 5`}</M>, so <M>{math`a = \frac{m}{2}`}</M> and <M>b = 5</M>.
              Check: <M>{math`\left(\frac{m}{2}\right)^2 = \frac{1}{4}m^2 = a^2`}</M> and <M>5^2 = 25 = b^2</M>.
              Everything matches, so we write the square of a difference:
            </P>
            <BlockMath>{math`
              \frac{1}{4}m^2 - 5m + 25 =
              \underset{a^2}{\left(\frac{1}{2}m\right)^2} - 2 \cdot \underset{a}{\frac{1}{2}m} \cdot \underset{b}{5} + \underset{b^2}{5^2} =
              \left(\frac{m}{2} - 5\right)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1
      snippet={{
        seo: 'Where are the square of a sum and the square of a difference used?',
        description: `
          Practical examples of using the Special Products formulas for the square of a sum and the square of a difference in different areas of mathematics and real life.
        `,
      }}
    >
      Applications of the Square and a Difference
    </H1>

    <P>
      Earlier we already mentioned one benefit of these Special Products formulas: they let us quickly rewrite
      expressions either as sums or as products. That makes complicated expressions easier to simplify. Now it is time
      to give a few more very useful and concrete examples of how these formulas are used.
    </P>

    <H2>Squaring Numbers Quickly</H2>

    <P>
      Almost everyone can square any number from <M>0</M> to <M>10</M>. That is just the multiplication table:{' '}
      <M>4^2 = 16</M>, <M>6^2 = 36</M>, <M>9^2 = 81</M>. You do not have trouble with the multiplication table, do you?
      👀 Students who are strong in math and olympiad contestants often know all squares up to <M>20</M> by heart. For
      example, <M>11^2 = 121</M>, <M>15^2 = 225</M>, <M>19^2 = 361</M>.
    </P>

    <P>
      So it turns out that <M>99%</M> of people only know square values by heart in the range from <M>0</M> to <M>20</M>
      . But what if you need to square a somewhat larger number, say something <M>{math`> 15`}</M>, quickly and without
      doing long multiplication?
    </P>

    <P>
      In today's digital world that is, of course, not much of a problem: you take out your phone, open a calculator,
      and compute it. But what if you do not have your phone, for example during an exam, or you would have to go get
      it? That is where the square-of-a-sum and square-of-a-difference formulas come to the rescue.
    </P>

    <Problems
      $={uniques.fastSquare}
      title="Quick Squares"
      level="easy"
      method
      snippet={{
        key: true,
        seo: 'How can you square a number quickly in your head?',
        description: `
          A universal method for quickly squaring any number by using the square-of-a-sum and square-of-a-difference formulas.
          For numbers within 100, this process can often be done mentally.
        `,
      }}
    >
      <SubProblem label="Sum Example">
        <ProblemDescription>
          Without multiplying directly, square the number <M>62</M>.<Br />
          Try to do it mentally.
        </ProblemDescription>
        <MathValueCheck answer={3844} />
        <ProblemHint>
          Can you write <M>62</M> as a sum of two simpler numbers?
        </ProblemHint>
        <ProblemHint>
          <M>62</M> is very close to the round number <M>60</M>...
        </ProblemHint>
        <ProblemAnswer>
          <M>3844</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that <M>62</M> is almost <M>60</M>. More exactly, <M>62 = 60 + 2</M>. Instead of computing{' '}
            <M>62^2</M> by hand, it is easier to use the square-of-a-sum formula:
          </P>
          <BlockMath>{math`
            62^2 = (60 + 2)^2 = 60^2 + 2 \cdot 60 \cdot 2 + 2^2 = 3600 + 240 + 4 = 3844
          `}</BlockMath>
          <P>
            We broke one difficult process into several simple steps, each of which is easy to do mentally: squaring the
            two easy numbers <M>60</M> and <M>2</M>, and doing the very simple multiplication <M>2 \cdot 60 \cdot 2</M>.
            Then we just add.
          </P>
          <P>
            There is another convenience here: the first two terms in the expansion always end in zero, as in the
            example above where we got <M>3600</M> and <M>240</M>. Numbers like that are easier to add and subtract.
          </P>
        </ProblemSolution>
        <ProblemNote>
          <P>
            The idea is this: if the number you want to square is a little larger, within about <M>5</M>, than the
            nearest round number ending in zero, then you can write it as a sum and use the square-of-a-sum formula.
            Examples:
          </P>
          <BlockMath>{math`
            24 \Rightarrow 20 + 4 >>{big}
            31 \Rightarrow 30 + 1 >>{big}
            44 \Rightarrow 40 + 4 >>{big}
            53 \Rightarrow 50 + 3
          `}</BlockMath>
        </ProblemNote>
      </SubProblem>

      <SubProblem label="Difference Example">
        <ProblemDescription>
          Without multiplying directly, square the number <M>48</M>.<Br />
          Try to do it mentally.
        </ProblemDescription>
        <MathValueCheck answer={2304} />
        <ProblemHint>
          Can you write <M>48</M> as a difference of two simpler numbers?
        </ProblemHint>
        <ProblemHint>
          <M>48</M> is very close to the round number <M>50</M>...
        </ProblemHint>
        <ProblemAnswer>
          <M>2304</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that <M>48</M> is almost <M>50</M>. More exactly, <M>48 = 50 - 2</M>. Instead of computing{' '}
            <M>48^2</M> by hand, it is easier to use the square-of-a-difference formula:
          </P>
          <BlockMath>{math`
            48^2 = (50 - 2)^2 = 50^2 - 2 \cdot 50 \cdot 2 + 2^2 = 2500 - 200 + 4 = 2304
          `}</BlockMath>
          <P>
            Again, we broke one difficult process into several simple steps, each of which is easy to do mentally:
            squaring the two easy numbers <M>50</M> and <M>2</M>, and doing the very simple multiplication{' '}
            <M>2 \cdot 50 \cdot 2</M>. Then we just combine the results.
          </P>
        </ProblemSolution>
        <ProblemNote>
          <P>
            The idea is this: if the number you want to square is a little smaller, within about <M>5</M>, than the
            nearest round number ending in zero, then you can write it as a difference and use the
            square-of-a-difference formula. Examples:
          </P>
          <BlockMath>{math`
            27 \Rightarrow 30 - 3 >>{big}
            39 \Rightarrow 40 - 1 >>{big}
            46 \Rightarrow 50 - 4 >>{big}
            57 \Rightarrow 60 - 3
          `}</BlockMath>
        </ProblemNote>
      </SubProblem>

      <SubProblem label="Practice" script={mentalSquares()} />
    </Problems>

    <P>
      So you simply look at how far your number is from the nearest round number ending in zero. If it is a little{' '}
      <B>larger</B> than that round number, write it as a sum and use the square-of-a-sum formula. If it is a little{' '}
      <B>smaller</B>, write it as a difference and use the square-of-a-difference formula. In both cases the expansion
      gives three terms, and <B>the first two always end in zero</B>, which makes the final addition easier.
    </P>

    <H2>Solving Quadratic Equations</H2>

    <P>
      Many different processes in everyday life, physics, mathematics, and other sciences reduce to equations that look
      a lot like these:
    </P>

    <BlockMath>{math`
      x^2 + 2x + 1 = 0 >>{big}
      36 - 18t + 9t^2 = 0 >>{big}
      4z^2 + 48z + 144 = 0
    `}</BlockMath>

    <P>
      These are all called quadratic equations, and the task is to determine which number is hidden behind the variable.
      It has to be a number that makes the left-hand side equal zero when substituted in place of the variable (
      <M>0 = 0</M>), otherwise the equation will not be true.
    </P>

    <P>
      So what numbers are they? You could only guess and plug in different values at random. But everything becomes much
      simpler if you notice that the left-hand sides are already expanded forms of the square of a sum or the square of
      a difference. Factor them back into parentheses and we get:
    </P>

    <BlockMath>{math`
      (x+1)^2 = 0 >>{big}
      (6 - 3t)^2 = 0 >>{big}
      (2z + 12)^2 = 0
    `}</BlockMath>

    <P>
      Now it is easy. What number should replace <M>x</M> so that adding <M>1</M> gives zero? Right: we should
      substitute <M>-1</M> for <M>x</M>. And what number should replace <M>t</M> so that subtracting that number from{' '}
      <M>6</M> gives zero? Right: we should substitute <M>2</M> for <M>t</M>. Finally, what should replace <M>z</M> so
      that adding it to <M>12</M> gives zero? We should substitute <M>-6</M>.
    </P>

    <BlockMath>{math`
      (\underset{x}{-1} + 1)^2 = 0 >>{big}
      (6 - 3 \cdot \underset{t}{2})^2 = 0 >>{big}
      (2 \cdot \underset{z}{-6} + 12)^2 = 0
    `}</BlockMath>

    <P>
      It may seem as if we have solved just a few mathematical puzzles, but in fact these variables can stand for the
      number of packs of cookies bought, the running time of a car engine, and other real quantities.
    </P>

    <Reference to={completingTheSquare}>
      The process of factoring an expanded expression into a square by using the square-of-a-sum or
      square-of-a-difference formula is called completing the square and is a universal method for solving any quadratic
      equation.
    </Reference>

    <H1>Difference of Squares</H1>

    <P>
      There is one more very useful and simple formula you need to know by heart. It is called the difference of squares
      and is written exactly the way it is read: <M>a^2 - b^2</M> (the difference of <B>two</B> squares, the difference
      of two numbers squared).
    </P>

    <P>
      It is not obvious at first glance what the difference of squares <M>a^2 - b^2</M> equals, so it is more convenient
      to start with a geometric derivation. Take a larger square with area <M>a^2</M> and cut out a smaller square with
      area <M>b^2</M>. Horizontally the length stays <M>a</M>, but the height decreases by <M>b</M>, so it becomes{' '}
      <M>a - b</M>. Cut off the protruding part, rotate it, and attach it to form a rectangle:
    </P>

    <Image src={differenceOfSquaresSchema} invert="dark">
      <Caption>Geometric derivation of the difference of squares formula</Caption>
    </Image>

    <Statement
      $={uniques.diffOfSquares}
      title="Difference of squares formula"
      snippet={{
        key: true,
        search: ['Difference of squares formula'],
        title: 'Difference of Squares',
        description: `
          One of the Special Products formulas: a² - b² = (a + b)(a - b).
          Lets you halve or double the degree.
          Used to simplify expressions.
        `,
      }}
    >
      <StatementMain>
        <BlockMath>a^2 - b^2 = (a + b)(a - b)</BlockMath>
      </StatementMain>
      <StatementSection title="Algebraic Derivation">
        <P>
          Let us get the difference of squares from the product of two binomials. To do that, just expand the brackets
          in any way you like, for example with FOIL:
        </P>
        <BlockMath>{math`
          (a+b)(a-b) = a \cdot a - a \cdot b + b \cdot a - b \cdot b = \boxed{a^2 - b^2}
        `}</BlockMath>
        <Hr />
        <P>
          Going the other way is a bit trickier. We need to artificially add and immediately subtract a term, then
          factor out the common factors:
        </P>
        <BlockMath>{math`
          a^2 - b^2 = a^2 + \underbrace{ab - ab}_{\text{Added and subtracted}} - b^2 = a(a+b) - b(a+b) = \boxed{(a+b)(a-b)}
        `}</BlockMath>
      </StatementSection>
    </Statement>

    <Important title="Difference of Squares ≠ Square of a Difference!">
      Beginners studying these formulas very often confuse the difference of squares with the square of a difference.
      Avoiding this mistake is easy -- just think about the name for one extra second. Difference of square{' '}
      <B accent>s</B> means there are <B accent>several squares</B>, so it is <M>a^2 - b^2</M>. But squar<B accent>e</B>{' '}
      of a difference means there is only <B accent>one square</B>, so it is <M>(a - b)^2</M>.
    </Important>

    <P>
      Why do we even need this formula? The whole point is that it lets you halve or raise the degree of two expressions
      almost mechanically. You will soon see how many things this one simple formula dramatically simplifies and how
      neatly it packs complicated expressions. But first, practice using it in examples for raising and lowering
      degrees:
    </P>

    <Problems $={uniques.diffOfSquaresExamples} title="Examples Using the Difference of Squares" level="example">
      <SubProblem>
        <ProblemDescription>
          <P>Write as a product of binomials:</P>
          <BlockMath>x^2 - 36</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(x + 6)(x - 6)" />
        <ProblemAnswer>
          <BlockMath>{math`(x + 6)(x - 6)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see two obvious squares: <M>x \Rightarrow x^2</M> and <M>6 \Rightarrow 36</M>. So <M>x</M> plays the role
            of <M>a</M> in the difference of squares formula, and <M>6</M> plays the role of <M>b</M>. Write the
            brackets according to the formula:
          </P>
          <BlockMath>{math`
            x^2 - 36 =
            \underset{a}{x^2} - \underset{b}{6^2} = (x + 6)(x - 6)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Expand the brackets:</P>
          <BlockMath>{math`(3 - x)(3 + x)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9 - x^2" />
        <ProblemAnswer>
          <BlockMath>{math`9 - x^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice the distinguishing feature of the difference of squares formula -- two almost identical brackets,
            with a plus in one and a minus in the other. So we can use it. Square the first term, then the second:
          </P>
          <BlockMath>{math`3^2 = 9 >>{big} x^2`}</BlockMath>
          <P>Write them with a minus sign:</P>
          <BlockMath>{math`9 - x^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Write as a product of binomials:</P>
          <BlockMath>{math`\frac{4}{81}k^2 - \frac{1}{25}b^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(2k/9 + b/5)(2k/9 - b/5)" />
        <ProblemAnswer>
          <BlockMath>{math`\left(\frac{2k}{9} + \frac{b}{5}\right)\left(\frac{2k}{9} - \frac{b}{5}\right)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Find the square roots of each term:</P>
          <BlockMath>{math`
            \frac{4}{81}k^2 = \frac{2^2}{9^2}k^2 = \left(\frac{2k}{9}\right)^2 >>{big}
            \frac{1}{25}b^2 = \frac{1^2}{5^2}b^2 = \left(\frac{b}{5}\right)^2
          `}</BlockMath>
          <P>
            So <M>2k/9</M> plays the role of <M>a</M> in the difference of squares formula, and <M>b/5</M> plays the
            role of <M>b</M>. Write the brackets according to the formula:
          </P>
          <BlockMath>{math`
            \frac{4}{81}k^2 - \frac{1}{25}b^2 =
            \underset{a}{\left(\frac{2k}{9}\right)^2} - \underset{b}{\left(\frac{b}{5}\right)^2} =
            \left(\frac{2k}{9} + \frac{b}{5}\right)\left(\frac{2k}{9} - \frac{b}{5}\right)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Expand the brackets:</P>
          <BlockMath>{math`\left( t + \frac{3}{4} \right)\left( \frac{3}{4} - t \right)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9/16 - t^2" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{9}{16} - t^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice the distinguishing feature of the difference of squares formula -- two almost identical brackets,
            with a plus in one and a minus in the other. The only issue is that the terms inside are in a different
            order. In the bracket with the plus sign, switch them around; the sum stays the same, and we get the form we
            need to apply the formula:
          </P>
          <BlockMath>{math`
            \left( t + \frac{3}{4} \right)\left( \frac{3}{4} - t \right) =
            \left( \frac{3}{4} + t \right)\left( \frac{3}{4} - t \right) = \ldots
          `}</BlockMath>
          <P>Now apply it:</P>
          <BlockMath>{math`
            \ldots = \left( \frac{3}{4} + t \right)\left( \frac{3}{4} - t \right) =
            \left(\frac{3}{4}\right)^2 - t^2 =
            \frac{9}{16} - t^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Write as a product of binomials:</P>
          <BlockMath>{math`9x^4z^2 - 0.09y^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(3x^2z + 0.3y)(3x^2z - 0.3y)" />
        <ProblemAnswer>
          <BlockMath>{math`(3x^2z + 0.3y)(3x^2z - 0.3y)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Find the square roots of each term:</P>
          <BlockMath>{math`
            9x^4z^2 = 3^2(x^2)^2z^2 = (3x^2z)^2 >>{big}
            0.09y^2 = \frac{9y^2}{100} = \frac{3^2y^2}{10^2} = \left(\frac{3y}{10}\right)^2 = (0.3y)^2
          `}</BlockMath>
          <P>
            So <M>3x^2z</M> plays the role of <M>a</M> in the difference of squares formula, and <M>0.3y</M> plays the
            role of <M>b</M>. Write the brackets according to the formula:
          </P>
          <BlockMath>{math`
            9x^4z^2 - 0.09y^2 =
            \underset{a}{(3x^2z)^2} - \underset{b}{(0.3y)^2} =
            (3x^2z + 0.3y)(3x^2z - 0.3y)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1>Cube of a Sum and a Difference</H1>

    <P>
      Up to this point we have only been playing with squares, meaning the second degree. And we already got three
      interesting formulas: the square of a sum, the square of a difference, and the difference of squares. Can we go
      further? Are there convenient formulas for working quickly with cubes, that is, the third degree? Of course there
      are. You do not have to memorize them, but it is useful at least to get familiar with them.
    </P>

    <P>
      There are quite a lot of Special Products in general, but we will only touch the most basic ones here -- the cube
      of a sum and the cube of a difference. Their names say exactly what they mean. A cube of a sum or a difference
      means you have a sum or a difference of two numbers, and the whole thing is raised to the third power. The
      formulas are derived the same way as the square of a sum -- by expanding brackets with FOIL:
    </P>

    <BlockMath>{math`
      (a+b)^3 = (a+b)^2(a+b) = (a^2 + 2ab + b^2)(a+b) = \boxed{a^3 + 3a^2b + 3ab^2 + b^3} \\
      (a-b)^3 = (a-b)^2(a-b) = (a^2 - 2ab + b^2)(a-b) = \boxed{a^3 - 3a^2b + 3ab^2 - b^3}
    `}</BlockMath>

    <Reference to={cubeSumDiffFactorization}>
      Deriving them in the opposite direction, from the expanded form back to the compact one, is already pretty tricky.
      Tricky enough to make a nice separate challenge problem for you to think about 😈 You can solve it now or leave it
      until you finish the article.
    </Reference>

    <P>
      Both formulas can also be derived geometrically. From the names alone, you can already tell that we are now
      dealing with three-dimensional figures. And instead of assembling a square, we will assemble a cube. It looks like
      this:
    </P>

    <Video src={cubeSumAnimation} invert="light" autoplay width="380px">
      <Caption>
        Geometric derivation of the cube of a sum
        <CaptionSecondary>
          Taken from the TikTok channel{' '}
          <Ref to="https://www.tiktok.com/@complex_math/video/7358570064724970759">@complex_math</Ref>
        </CaptionSecondary>
      </Caption>
    </Video>

    <P>
      This visualization makes it immediately clear where the coefficients <M>3</M> and the expressions of the form{' '}
      <M>a^2b</M> and <M>ab^2</M> come from. To fill the whole cube, you need three parallelepipeds with bases{' '}
      <M>a^2</M> and <M>b^2</M> and heights <M>b</M> and <M>a</M> respectively.
    </P>

    <Statement
      $={uniques.cubeSum}
      title="Cube of a sum formula"
      snippet={{
        key: true,
        search: ['Cube of a sum formula'],
        title: 'Cube of a Sum',
        description: `
          One of the Special Products formulas: (a + b)³ = a³ + 3a²b + 3ab² + b³.
          Lets you quickly expand the cube of a sum of two expressions.
          Used to simplify expressions and solve equations.
        `,
      }}
    >
      <BlockMath>(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3</BlockMath>
    </Statement>

    <Statement
      $={uniques.cubeDiff}
      title="Cube of a difference formula"
      snippet={{
        key: true,
        search: ['Cube of a difference formula'],
        title: 'Cube of a Difference',
        description: `
          One of the Special Products formulas: (a - b)³ = a³ - 3a²b + 3ab² - b³.
          Lets you quickly expand the cube of a difference of two expressions.
          Used to simplify expressions and solve equations.
        `,
      }}
    >
      <BlockMath>(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3</BlockMath>
    </Statement>

    <Problems
      $={uniques.cubeSumDiffExamples}
      title="Examples Using the Cube of a Sum and Cube of a Difference"
      level="example"
    >
      <SubProblem>
        <ProblemDescription>
          <P>Expand the brackets:</P>
          <BlockMath>{math`(x + 2)^3`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="x^3 + 6x^2 + 12x + 8" />
        <ProblemAnswer>
          <BlockMath>{math`x^3 + 6x^2 + 12x + 8`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In the cube of a sum formula, <M>x</M> plays the role of <M>a</M>, and <M>2</M> plays the role of <M>b</M>.
            Substitute them into the formula, calculating each term in order:
          </P>
          <BlockMath>{math`
            (x + 2)^3 = x^3 + 3 \cdot x^2 \cdot 2 + 3 \cdot x \cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Expand the brackets:</P>
          <BlockMath>{math`\left(\frac{1}{3} - \frac{2}{k}\right)^3`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="1/27 - 2/(3k) + 4/k^2 - 8/k^3" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{1}{27} - \frac{2}{3k} + \frac{4}{k^2} - \frac{8}{k^3}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In the cube of a difference formula, <M>1/3</M> plays the role of <M>a</M>, and <M>2/k</M> plays the role of{' '}
            <M>b</M>. Substitute them into the formula, writing out each term:
          </P>
          <BlockMath>{math`
            \left(\frac{1}{3} - \frac{2}{k}\right)^3 =
            \left(\frac{1}{3}\right)^3 - 3\left(\frac{1}{3}\right)^2 \cdot \frac{2}{k} + 3 \cdot \frac{1}{3} \cdot \left(\frac{2}{k}\right)^2 - \left(\frac{2}{k}\right)^3 = \\
            \frac{1}{27} - \cancel{3} \cdot \frac{1}{\cancel{9}_{\small 3}} \cdot \frac{2}{k} + \cancel{3} \cdot \frac{1}{\cancel{3}_{\small 1}} \cdot \frac{4}{k^2} - \frac{8}{k^3} = \\
            \frac{1}{27} - \frac{2}{3k} + \frac{4}{k^2} - \frac{8}{k^3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Write as a product of brackets:</P>
          <BlockMath>{math`
            m^3 + 6m^2n + 12mn^2 + 8n^3
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(m + 2n)^3" />
        <ProblemAnswer>
          <BlockMath>{math`(m + 2n)^3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Determine <M>a</M> and <M>b</M> from the outer terms: from the first one we get <M>a^3 = m^3</M>, so{' '}
            <M>a = m</M>; from the last one we get <M>b^3 = 8n^3 = (2n)^3</M>, so <M>b = 2n</M>. Rewrite each term in a
            form that clearly matches the cube of a sum formula, label them, and pack it up:
          </P>
          <BlockMath>{math`
            \underbrace{m^3}_{a^3} + 3 \cdot \underbrace{m^2}_{a^2} \cdot \underbrace{2n}_{b} + 3 \cdot \underbrace{m}_{a} \cdot \underbrace{(2n)^2}_{b^2} + \underbrace{(2n)^3}_{b^3} = (m + 2n)^3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Write as a product of brackets:</P>
          <BlockMath>{math`
            \frac{x^3}{8} - \frac{x^2y}{4} + \frac{xy^2}{6} - \frac{y^3}{27}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(x/2 - y/3)^3" />
        <ProblemAnswer>
          <BlockMath>{math`\left(\frac{x}{2} - \frac{y}{3}\right)^3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Determine <M>a</M> and <M>b</M> from the outer terms: from the first one we get <M>a^3 = x^3/8 = (x/2)^3</M>
            , so <M>a = x/2</M>; from the last one we get <M>b^3 = y^3/27 = (y/3)^3</M>, so <M>b = y/3</M>. Rewrite each
            term in a form that clearly matches the cube of a difference formula, label them, and pack it up:
          </P>
          <BlockMath>{math`
            \frac{x^3}{8} - \frac{x^2y}{4} + \frac{xy^2}{6} - \frac{y^3}{27} = \\
            \underbrace{\frac{x^3}{8}}_{a^3} - 3 \cdot \underbrace{\frac{x^2}{4}}_{a^2} \cdot \underbrace{\frac{y}{3}}_{b} + 3 \cdot \underbrace{\frac{x}{2}}_{a} \cdot \underbrace{\frac{y^2}{9}}_{b^2} - \underbrace{\frac{y^3}{27}}_{b^3} = \\
            \left(\frac{x}{2} - \frac{y}{3}\right)^3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1>How to memorize these formulas?</H1>

    <P>
      You only need to memorize three formulas by heart: the square of a sum <M>(a + b)^2</M>, the square of a
      difference <M>(a - b)^2</M>, and the difference of squares <M>a^2 - b^2</M>. They are everywhere, and you
      absolutely need to be able to spot them instantly and switch between expanded form and factored form. As for the
      cube formulas, it is enough to be able to recognize them. Here are a few tips that make all of these formulas
      easier to remember:
    </P>

    <List
      $={uniques.memorizationTips}
      unordered
      snippet={{
        key: true,
        seo: 'How to memorize Special Products?',
        title: 'How to memorize?',
        description: `
          A set of tips and tricks that help you memorize Special Products and avoid mixing them up.
        `,
      }}
    >
      <Li>
        <P>
          <B>Plus-minus sign</B>
        </P>
        <P>
          Do not memorize 4 separate formulas: the square of a sum, the square of a difference, the cube of a sum, and
          the cube of a difference. It is enough to remember 2 formulas if you use the plus-minus sign, because nothing
          changes except the signs:
        </P>
        <BlockMath>{math`
          (a \pm b)^2 = a^2 \pm 2ab + b^2 \\
          (a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3
        `}</BlockMath>
        <P>
          In sums, all signs are always pluses. In a difference, the minus sign always comes right after the first term
          in the expansion. In the cube case, it also appears in front of the last term.
        </P>
      </Li>
      <Li>
        <P>
          <B>The difference of squares stands apart</B>
        </P>
        <P>
          Formulas whose names start with the degree, like square and cube, have a similar shape, and they can be
          derived naturally by expanding brackets <M>(a+b)^2 = (a+b)(a+b) = \ldots</M>
        </P>
        <P>
          But the difference of squares <M>a^2-b^2</M> stands apart. First, it factors into brackets with a plus and a
          minus. Second, from the form <M>a^2 - b^2</M> you cannot naturally and explicitly get the product{' '}
          <M>(a+b)(a-b)</M> from the difference itself.
        </P>
      </Li>
      <Li>
        <P>
          <B>The degree matches the coefficient</B>
        </P>
        <P>
          In the square or cube of a sum/difference, the degree (second or third) also appears as a coefficient in the
          expansion. For the square it is <M>2</M>, and for the cube it is <M>3</M>:
        </P>
        <BlockMath>{math`
          (a \pm b)^{\normalsize\brand{2}} = a^2 \pm \brand{2}ab + b^2 \\
          (a \pm b)^{\normalsize\brand{3}} = a^3 \pm \brand{3}a^2b + \brand{3}ab^2 \pm b^3
        `}</BlockMath>
        <P>
          The coefficient is also easy to remember from the geometric derivation. For the square formulas, we build a
          square, and in the process two rectangles appear. For the cube formulas, we build a cube, and in the process
          two kinds of three parallelepipeds appear.
        </P>
      </Li>
    </List>

    <H1>Higher powers of Sum and Difference</H1>

    <P>
      Have you noticed that the higher the degree, the longer and more complicated these formulas become? Can we keep
      increasing the degree forever? Can we find the ultimate solution to Freshman's Dream?
    </P>

    <BlockMath>{math`
      (a \pm b)^1 = a \pm b \\
      (a \pm b)^2 = a^2 \pm 2ab + b^2 \\
      (a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3 \\
      \text{???}
    `}</BlockMath>

    <P>
      In fact, we can. There is a very powerful universal formula that automatically produces Special Products for
      absolutely any degree. It is called the <B>Binomial Theorem</B>, and it looks like this:
    </P>

    <BlockMath>{math`
      (a+b)^n = \sum\limits_{k=0}^{n} \binom{n}{k} a^{n-k}b^k, \quad \text{where } \binom{n}{k} = \frac{n!}{k!(n-k)!}
    `}</BlockMath>

    <P>
      This probably looks shocking. That is normal: the formula really does look intimidating, and deriving it requires
      some combinatorics, which is the topic where it is usually proved. And yet it does not require any higher
      mathematics; you can derive it at a regular school level.
    </P>

    <P>
      So the answer to the question of whether there are infinitely many such formulas is yes. You can keep increasing
      the degree and get more and more new formulas:
    </P>

    <BlockMath>{math`
      (a \pm b)^4 = a^4 \pm 4a^3b + 6a^2b^2 \pm 4ab^3 + b^4 \\
      (a \pm b)^5 = a^5 \pm 5a^4b + 10a^3b^2 \pm 10a^2b^3 + 5ab^4 \pm b^5 \\
      \ldots
    `}</BlockMath>

    <P>
      The Binomial Theorem shows up all over mathematics, both elementary and especially advanced. Just as these
      formulas let you turn sums into products of brackets and back again for small powers, the Binomial Theorem lets
      you do the same with expressions of any complexity.
    </P>
  </>
));
