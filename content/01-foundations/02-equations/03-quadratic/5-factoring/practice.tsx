import article from './article';

// #region Assets
//
//

import interestingDots from './assets/roots-plane-interesting-dots.svg';
import planeSymmetry from './assets/roots-plane-symmetry.svg';

//
//
// #endregion

// #region Scripts
//
//

import mentalRoots from './scripts/mental-roots';
import thereAndBack from './scripts/there-and-back';
import factoring from './scripts/factor-quadratic';
import zeroSum from './scripts/zero-sum';

//
//
// #endregion

// #region Links
//
//

const zeroProductProperty = $CONTENT.foundations.equations.zeroProductProperty.$zeroProductMethod;
const biquadraticEquation = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$biquadratic;

//
//
// #endregion

export default defineProse({
  uniques: {
    zeroSum: Problems,
  },
})(({ uniques }) => (
  <>
    <Problem title="No-brainer roots" level="easy" script={mentalRoots()} />

    <Problem title="There and back again" level="easy" script={thereAndBack()} />

    <Problem
      title="Factoring"
      level="easy"
      snippet={{
        seo: 'Exercises on factoring a quadratic trinomial',
        description: `
          Infinitely generated exercises for practicing factoring a quadratic trinomial through its roots.
        `,
      }}
      script={factoring()}
    />

    <Problems $={uniques.zeroSum} title="Zero-sum game" level="easy" pretty method>
      <SubProblem label="Roots of the equation" standalone>
        <ProblemDescription>
          <P>
            What are the roots of a quadratic equation if the sum of its coefficients is equal to <M>0</M>?
          </P>
          <BlockMath>A + B + C = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Roots of the equation" answers={[1, 'C/A']} />
        <ProblemHint>
          Use the condition that the sum of coefficients is zero to express one of the coefficients, then substitute it
          into the standard form of the quadratic equation.
        </ProblemHint>
        <ProblemHint>
          Try factoring something out. Maybe not from all terms at once, maybe only from two of them.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 1 >>{big} x_2 = \frac{C}{A}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Let's express one coefficient, say <M>B</M>, through the others using the zero-sum condition:
          </P>
          <BlockMath>{math`
            A + B + C = 0 \\
            B = - A - C
          `}</BlockMath>
          <P>
            Now substitute the expression on the right in place of <M>B</M> in the standard quadratic equation:
          </P>
          <BlockMath>{math`
            Ax^2 + Bx + C = 0 \\
            Ax^2 + (-A - C)x + C = 0 \\
            Ax^2 - Ax - Cx + C = 0
          `}</BlockMath>
          <P>
            Factor <M>Ax</M> out of the first two terms and <M>-C</M> out of the last two:
          </P>
          <BlockMath>{math`
            Ax(x - 1) - C(x - 1) = 0 \\
            (Ax - C)(x - 1) = 0
          `}</BlockMath>
          <P>
            We got an equation made of factors whose product is zero. By the{' '}
            <Dep on={zeroProductProperty}>zero product property</Dep>, we solve it by setting each factor equal to zero
            separately:
          </P>
          <BlockMath>{math`
            Ax - C = 0 \\
            Ax = C \\
            \boxed{x = \frac{C}{A}}
            >>{big}{top}
            x - 1 = 0 \\
            \boxed{x = 1}
          `}</BlockMath>
          <P>
            Nice result: if the sum of coefficients of a quadratic equation is zero, then one root is definitely equal
            to <M>1</M>, and the other is <M>C/A</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Not just plus signs">
        <ProblemDescription>
          <P>And what are the roots of quadratic equations whose coefficients satisfy this relation:</P>
          <BlockMath>A - B + C = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Roots of the equation" answers={[-1, '-C/A']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -1 >>{big} x_2 = -\frac{C}{A}`}</BlockMath>
        </ProblemAnswer>
      </SubProblem>

      <SubProblem label="Practice" script={zeroSum()} />
    </Problems>

    <Problems title="Bracket chaos" level="medium">
      <P>Simplify the equation down to a product of factors and find the roots:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x + 5)(x - 1) = 3x + 7`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x+4)(x-3)" />
        <RootsCheck roots={[-4, 3]} />
        <ProblemAnswer>
          <BlockMath>{math`(x + 4)(x - 3) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the brackets on the left-hand side:</P>
          <BlockMath>{math`
            x^2 + 4x - 5 = 3x + 7
          `}</BlockMath>
          <P>Move everything to one side of the equation, say the left:</P>
          <BlockMath>{math`
            x^2 + 4x - 5 - 3x - 7 = 0 \\
            x^2 + x - 12 = 0
          `}</BlockMath>
          <P>
            Factor it. Which two numbers add up to <M>1</M> and multiply to <M>-12</M>? Those are <M>4</M> and <M>-3</M>
            :
          </P>
          <BlockMath>{math`(x + 4)(x - 3) = 0`}</BlockMath>
          <P>
            The roots are the opposites of the numbers next to <M>x</M> in each bracket: <M>-4</M> and <M>3</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x + 4)(x - 1) = 2(x + 1)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x+3)(x-2)" />
        <RootsCheck roots={[-3, 2]} />
        <ProblemAnswer>
          <BlockMath>{math`(x + 3)(x - 2) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the brackets on both sides:</P>
          <BlockMath>{math`
            x^2 + 3x - 4 = 2x + 2
          `}</BlockMath>
          <P>Move everything to the left:</P>
          <BlockMath>{math`
            x^2 + 3x - 4 - 2x - 2 = 0 \\
            x^2 + x - 6 = 0
          `}</BlockMath>
          <P>
            Factor it. The sum must be <M>1</M>, and the product must be <M>-6</M>. Those numbers are <M>3</M> and{' '}
            <M>-2</M>:
          </P>
          <BlockMath>{math`(x + 3)(x - 2) = 0`}</BlockMath>
          <P>
            The roots are the opposites of the numbers next to <M>x</M> in each bracket: <M>-3</M> and <M>2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(2x + 1)(x - 4) - (x - 3)(x + 2) + 3 = 0`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x-1)(x-5)" />
        <RootsCheck roots={[1, 5]} />
        <ProblemAnswer>
          <BlockMath>{math`(x - 1)(x - 5) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the brackets:</P>
          <BlockMath>{math`
            2x^2 - 4x + x - 4 - (x^2 + 2x - 3x - 6) + 3 = 0 \\
            2x^2 - 7x - 4 - (x^2 - x - 6) + 3 = 0 \\
            2x^2 - 7x - 4 - x^2 + x + 6 + 3 = 0 \\
            x^2 - 6x + 5 = 0
          `}</BlockMath>
          <P>
            Factor it. The sum must be <M>-6</M>, and the product must be <M>5</M>. Those are <M>-1</M> and <M>-5</M>:
          </P>
          <BlockMath>{math`(x - 1)(x - 5) = 0`}</BlockMath>
          <P>
            The roots are the opposites of the numbers next to <M>x</M> in each bracket: <M>1</M> and <M>5</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x + 3)(x - 2) + (x - 4)(x + 1) = (x + 5)(x - 6) + 26`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x-3)(x+2)" />
        <RootsCheck roots={[-2, 3]} />
        <ProblemAnswer>
          <BlockMath>{math`(x - 3)(x + 2) = 0`}</BlockMath>
        </ProblemAnswer>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x + 2)^2 + (x - 3)^2 = (x + 1)(x - 1) + 22`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x-4)(x+2)" />
        <RootsCheck roots={[-2, 4]} />
        <ProblemAnswer>
          <BlockMath>{math`(x - 4)(x + 2) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the squares on the left and the product on the right using algebraic identities:</P>
          <BlockMath>{math`
            (x + 2)^2 = x^2 + 4x + 4 \\
            (x - 3)^2 = x^2 - 6x + 9 \\
            (x + 1)(x - 1) = x^2 - 1
          `}</BlockMath>
          <P>Substitute:</P>
          <BlockMath>{math`
            (x^2 + 4x + 4) + (x^2 - 6x + 9) = (x^2 - 1) + 22 \\
            2x^2 - 2x + 13 = x^2 + 21
          `}</BlockMath>
          <P>Move everything to the left:</P>
          <BlockMath>{math`
            x^2 - 2x - 8 = 0
          `}</BlockMath>
          <P>
            Factor it. The sum must be <M>-2</M>, and the product must be <M>-8</M>. Those are <M>-4</M> and <M>2</M>:
          </P>
          <BlockMath>{math`(x - 4)(x + 2) = 0`}</BlockMath>
          <P>
            The roots are the opposites of the numbers next to <M>x</M> in each bracket: <M>4</M> and <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Master of both elements" level="medium" pretty>
      <P>
        Get really damn good at handling quadratic trinomials that are written in two forms at once: as a sum and as a
        product of factors, yin and yang style. Simplify the expression:
      </P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x - 3)(x + 5) - x^2 + 9`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Answer" answer="2(x - 3)" />
        <ProblemAnswer>
          <BlockMath>2(x - 3)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the brackets, then factor out the common factor at the end:</P>
          <BlockMath>{math`
            (x - 3)(x + 5) - x^2 + 9 = \\
            = x^2 + 5x - 3x - 15 - x^2 + 9 = \\
            = \cancel{x^2} + 2x - 15 - \cancel{x^2} + 9 = \\
            = 2x - 6 = 2(x - 3)
          `}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          You can't simplify this expression without expanding the brackets first -- the terms are in different "forms,"
          factors on the left and a sum on the right. But once the brackets are expanded, the <M>x^2</M> terms wipe each
          other out and only a simple linear term remains.
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2 + 5x + 6}{x + 2} - (x - 1)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Answer" answer="4" />
        <ProblemAnswer>
          <BlockMath>4</BlockMath>
        </ProblemAnswer>
        <ProblemHint>Factor the numerator of the fraction.</ProblemHint>
        <ProblemSolution>
          <P>Factor the numerator of the fraction:</P>
          <BlockMath>{math`
            x^2 + 5x + 6 = (x + 2)(x + 3)
          `}</BlockMath>
          <P>Substitute and cancel:</P>
          <BlockMath>{math`
            \frac{\cancel{(x + 2)}(x + 3)}{\cancel{x + 2}} - (x - 1) = \\
            = (x + 3) - (x - 1) = \\
            = \cancel{x} + 3 - \cancel{x} + 1 = 4
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{(x + 1)(x - 4) + 2x + 2}{x - 2}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Answer" answer="x + 1" />
        <ProblemAnswer>
          <BlockMath>x + 1</BlockMath>
        </ProblemAnswer>
        <ProblemHint>Expand the brackets in the numerator, combine like terms, then factor again.</ProblemHint>
        <ProblemSolution>
          <P>Expand the product in the numerator:</P>
          <BlockMath>{math`
            (x + 1)(x - 4) + 2x + 2 = \\
            = x^2 - 4x + x - 4 + 2x + 2 = \\
            = x^2 - x - 2
          `}</BlockMath>
          <P>
            Factor the trinomial we got. Which numbers add up to <M>-1</M> and multiply to <M>-2</M>? Those are <M>1</M>{' '}
            and <M>-2</M>:
          </P>
          <BlockMath>{math`
            x^2 - x - 2 = (x + 1)(x - 2)
          `}</BlockMath>
          <P>Substitute the simplified numerator back into the fraction and cancel:</P>
          <BlockMath>{math`
            \frac{(x + 1)\cancel{(x - 2)}}{\cancel{x - 2}} = x + 1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x - 2)(x + 4) - (x - 1)(x + 1)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Answer" answer="2x - 7" />
        <ProblemAnswer>
          <BlockMath>2x - 7</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand both pairs of brackets:</P>
          <BlockMath>{math`
            (x - 2)(x + 4) - (x - 1)(x + 1) = \\
            = (x^2 + 4x - 2x - 8) - (x^2 - 1) = \\
            = \cancel{x^2} + 2x - 8 - \cancel{x^2} + 1 = \\
            = 2x - 7
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2 - 7x + 12}{x - 3} + \frac{(x + 2)(x - 2) - x^2}{x + 5}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Answer" answer="x - 4 - 4/(x + 5)" />
        <ProblemAnswer>
          <BlockMath>{math`x - 4 - \frac{4}{x + 5}`}</BlockMath>
        </ProblemAnswer>
        <ProblemHint>
          In the first fraction, factor the numerator. In the second one, expand the brackets in the numerator.
        </ProblemHint>
        <ProblemSolution>
          <P>Handle the first fraction. Factor the numerator:</P>
          <BlockMath>{math`
            x^2 - 7x + 12 = (x - 3)(x - 4)
          `}</BlockMath>
          <P>Cancel:</P>
          <BlockMath>{math`
            \frac{\cancel{(x - 3)}(x - 4)}{\cancel{x - 3}} = x - 4
          `}</BlockMath>
          <P>Now the second fraction. Expand the brackets in the numerator:</P>
          <BlockMath>{math`
            (x + 2)(x - 2) - x^2 = x^2 - 4 - x^2 = -4
          `}</BlockMath>
          <P>We get:</P>
          <BlockMath>{math`
            (x - 4) + \frac{-4}{x + 5} = x - 4 - \frac{4}{x + 5}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems
      title="Factoring biquadratic trinomials"
      level="hard"
      snippet={{
        key: 'Factoring biquadratics',
        seo: 'Factoring a biquadratic trinomial',
        description: `
          Exercises for practicing factoring biquadratic trinomials through an intermediate substitution.
        `,
      }}
    >
      <P>
        Factor the <Dep on={biquadraticEquation}>biquadratic trinomial</Dep> as far as possible:
      </P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^4 - 5x^2 + 4</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x-1)(x+1)(x-2)(x+2)" />
        <ProblemAnswer>
          <BlockMath>(x - 1)(x + 1)(x - 2)(x + 2)</BlockMath>
        </ProblemAnswer>
        <ProblemHint>
          First factor it for the variable <M>t = x^2</M>, then continue factoring for the variable <M>x</M>.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Make the substitution <M>t = x^2</M>:
          </P>
          <BlockMath>{math`t^2 - 5t + 4`}</BlockMath>
          <P>
            Which two numbers add up to <M>-5</M> and multiply to <M>4</M>? Those are <M>-1</M> and <M>-4</M>:
          </P>
          <BlockMath>{math`t^2 - 5t + 4 = (t - 1)(t - 4)`}</BlockMath>
          <P>
            Go back to the variable <M>x</M>:
          </P>
          <BlockMath>{math`
            (x^2 - 1)(x^2 - 4)
          `}</BlockMath>
          <P>Each bracket is a difference of squares:</P>
          <BlockMath>{math`
            \underbrace{(x - 1)(x + 1)}_{\small x^2 - 1}\underbrace{(x - 2)(x + 2)}_{\small x^2 - 4}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^4 - 13x^2 + 36</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x-2)(x+2)(x-3)(x+3)" />
        <ProblemAnswer>
          <BlockMath>(x - 2)(x + 2)(x - 3)(x + 3)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Make the substitution <M>t = x^2</M>:
          </P>
          <BlockMath>{math`t^2 - 13t + 36 = (t - 4)(t - 9)`}</BlockMath>
          <P>
            Go back to <M>x</M> and factor the differences of squares:
          </P>
          <BlockMath>{math`
            (x^2 - 4)(x^2 - 9) = (x - 2)(x + 2)(x - 3)(x + 3)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^4 + 3x^2 - 4</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x-1)(x+1)(x^2+4)" />
        <ProblemAnswer>
          <BlockMath>(x - 1)(x + 1)(x^2 + 4)</BlockMath>
        </ProblemAnswer>
        <ProblemHint>One of the quadratic factors can be factored further, and the other one can't.</ProblemHint>
        <ProblemSolution>
          <P>
            Make the substitution <M>t = x^2</M>:
          </P>
          <BlockMath>{math`t^2 + 3t - 4 = (t - 1)(t + 4)`}</BlockMath>
          <P>
            Go back to <M>x</M>:
          </P>
          <BlockMath>{math`(x^2 - 1)(x^2 + 4)`}</BlockMath>
          <P>
            The first bracket <M>(x^2 - 1)</M> is a difference of squares, so it factors into <M>(x - 1)(x + 1)</M>. But
            the second bracket <M>(x^2 + 4)</M> is a sum of squares, and it can't be factored any further. So we get:
          </P>
          <BlockMath>{math`(x - 1)(x + 1)(x^2 + 4)`}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          If all the "roots for the variable <M>t</M>" are positive, then each bracket can be split into two linear
          factors by difference of squares. If one or even both of those "roots for <M>t</M>" are negative, then the
          corresponding bracket becomes a "sum of squares" and won't factor any further.
        </ProblemNote>
      </SubProblem>
    </Problems>

    <Problems title="Exploring the trinomial plane" level="hard">
      <P>
        Let's explore the <Dep on={article.uniques.rootsPlane}>coordinate plane</Dep> of "rectangular" quadratic
        trinomials together:
      </P>
      <SubProblem label="Special cases">
        <ProblemDescription>
          <P>
            Study what kinds of quadratic trinomials appear at the locations marked with red dots. Describe the general
            form and give a couple of examples with specific numbers.
          </P>
          <Image src={interestingDots} invert="dark" width="500px" />
        </ProblemDescription>
        <ProblemAnswer>
          <ProblemSection title="The origin">
            <P>
              At the origin, both variables are zero: <M>t = k = 0</M>. That gives this factorization and quadratic
              trinomial:
            </P>
            <BlockMath>(x+0)(x+0) = x \cdot x = x^2</BlockMath>
          </ProblemSection>
          <ProblemSection title="Axes Ot and Ok">
            <P>
              Whether you're on axis <M>Ot</M> or <M>Ok</M>, one of the numbers will be <M>0</M>. So points on those
              axes have the general form <M>(x+0)(x+k)</M> or <M>(x+t)(x+0)</M> and produce quadratic trinomials with no
              constant term <M>C</M>:
            </P>
            <BlockMath>{math`x(x-2) = x^2 - 2x >> (x+8)x = x^2 + 8x >> \left(x - \frac{\sqrt{2}}{2}\right)x = x^2 - \frac{\sqrt{2}}{2}x`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Diagonal at 45 degrees">
            <P>
              On this diagonal, the numbers <M>t</M> and <M>k</M> are equal both in magnitude and in sign. Every point
              on this diagonal gives a perfect square, either as a square of a sum for positive <M>t</M> and <M>k</M>,
              or a square of a difference for negative <M>t</M> and <M>k</M>:
            </P>
            <BlockMath>{math`(x+2)^2 = x^2 + 4x + 4 >> (x-1)^2 = x^2 - 2x + 1 >> \left(x + \frac{\sqrt{3}}{2}\right)^2 = x^2 + \sqrt{3}x + \frac{3}{4}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Diagonal at -45 degrees">
            <P>
              On this diagonal, the numbers <M>t</M> and <M>k</M> have the same magnitude but opposite signs. Every
              single point on this line gives a difference of squares:
            </P>
            <BlockMath>{math`(x-2)(x+2) = x^2 - 4 >> (x+10)(x-10) = x^2 - 100`}</BlockMath>
          </ProblemSection>
        </ProblemAnswer>
      </SubProblem>
      <SubProblem label="Symmetric points">
        <ProblemDescription>
          <P>
            What similarities and differences do you see between quadratic trinomials formed by points symmetric with
            respect to the origin? Study the behavior of coefficients <M>B</M> and <M>C</M>, as well as the roots of the
            corresponding equations.
          </P>
          <Image src={planeSymmetry} invert="dark" width="500px" />
        </ProblemDescription>
        <ProblemAnswer>
          <ProblemSection title="First and third quadrants">
            <P>
              Symmetric points in the first and third quadrants of the coordinate plane produce pairs of numbers{' '}
              <M>t</M> and <M>k</M> that are equal in magnitude but opposite in sign:
            </P>
            <BlockMath>(x+3)(x+10) = x^2 + 13x + 30 \quad | \quad (x-3)(x-10) = x^2 - 13x + 30</BlockMath>
            <P>
              The resulting quadratic trinomials differ only in the sign of coefficient <M>B</M>, while coefficient{' '}
              <M>C</M> is always positive. The roots of the corresponding equations also have the same magnitudes but
              opposite signs.
            </P>
          </ProblemSection>
          <ProblemSection title="Second and fourth quadrants">
            <P>
              The situation is exactly the same, but coefficient <M>C</M> is always negative:
            </P>
            <BlockMath>(x-3)(x+10) = x^2 + 7x - 30 \quad | \quad (x+3)(x-10) = x^2 - 7x - 30</BlockMath>
          </ProblemSection>
        </ProblemAnswer>
      </SubProblem>
      <SubProblem label="Odd one out">
        <ProblemDescription>Are there any "extra" quadrants on this coordinate plane?</ProblemDescription>
        <ProblemHint>Maybe some of the quadrants produce identical quadratic trinomials?</ProblemHint>
        <ProblemAnswer>
          <P>
            Either the second quadrant or the fourth quadrant is redundant, because the quadratic trinomials you get in
            them are no different from each other. There is no difference because swapping the order of factors does not
            change the product:
          </P>
          <BlockMath>{math`
            x^2 + 7x - 30 = \underbrace{(x-3)(x+10)}_{\small\text{Second quadrant}} = \underbrace{(x+10)(x-3)}_{\small\text{Fourth quadrant}} = x^2 + 7x - 30
          `}</BlockMath>
        </ProblemAnswer>
      </SubProblem>
    </Problems>
  </>
));
