import { authorContribution } from '#project/utils/contributions';

// #region Problem Scripts
//
//

import zeroProductPropertyScript from './scripts/zero-product-property';

//
//
// #endregion

// #region Link
//
//

const elementaryEquations = $CONTENT.foundations.equations.elementary;
const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const equationSolution = $CONTENT.foundations.equations.elementary.article.$equationSolution;

//
//
// #endregion

export const page = definePage({
  title: 'Zero Product Property',
  description: `
    A simple and very effective way to solve equations made of factors (brackets) whose product is zero.
    You need this method, because a huge number of different equations get reduced to exactly this form.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
  dependencies: [
    {
      dependency: $CONTENT.foundations.equations.elementary,
      reason: "If you can't solve elementary equations, you definitely won't solve these either.",
    },
  ],
});

export const content = defineProse({
  uniques: {
    zeroProductMethod: Statement,
    zeroProductExamples: Problems,
  },
})(({ uniques }) => (
  <>
    <H1>Brackets and zero</H1>

    <P>
      It may seem like once you know how to solve <Dep on={elementaryEquations}>elementary equations</Dep>, every door
      is open and now you can handle anything. Not quite. Using the <Dep on={sameActionRule}>same action rule</Dep>, we
      really can do a lot, but there are plenty of equations where you need a trick, not some canned algorithm. Here are
      a couple of examples:
    </P>

    <BlockMath>{math`
      (x-1)(x-2) = 0 >>{big} 2x(10+x)(2x-1) = 0
    `}</BlockMath>

    <P>
      Just expand the brackets and isolate <M>x</M> on one side, what could be easier?! All right, let's try it:
    </P>

    <BlockMath>{math`
      x^2 - 2x - x + 2 = 0 \\
      x^2 - 3x + 2 = 0 \\
      \text{???}
      >>{big}{top}
      2x(20x - 10 + 2x^2 - x) = 0 \\
      2x(2x^2 + 19x - 10) = 0 \\
      4x^3 + 38x^2 - 20x = 0 \\
      \text{???}
    `}</BlockMath>

    <P>
      Well, shit. That isn't working. We get too many variables, and on top of that they come in different powers, so
      combining like terms becomes impossible. We just ran into a whole class of equations that the elementary method
      can't handle. So how do we solve them?
    </P>

    <H1>How the solution works</H1>

    <P>
      These equations are solved very simply! First, look at what they actually look like. They are all just a bunch of
      factors whose product is <B>guaranteed</B> to be zero:
    </P>

    <BlockMath>{math`
      (x-1)(x-2) = 0 \\
      \underbrace{(x-1)}_{\text{Factor 1}} \cdot \underbrace{(x-2)}_{\text{Factor 2}} = 0
      >>{big}{top}
      2x(10+x)(2x-1) = 0 \\
      \underbrace{(2x)}_{\text{Factor 1}} \cdot \underbrace{(10+x)}_{\text{Factor 2}} \cdot \underbrace{(2x-1)}_{\text{Factor 3}} = 0
    `}</BlockMath>

    <P>
      We know that anything multiplied by zero gives zero, and it doesn't matter at all whether that thing is a number,
      a bracket, or some expression with variables. Zero wipes all of it out:
    </P>

    <BlockMath>{math`
      5 \cdot \red{0} = 0 >>{big}
      \frac{\sqrt{2}}{2} \cdot \red{0} = 0 >>{big}
      \red{0} \cdot (x-2) = 0
    `}</BlockMath>

    <P>
      We can use this nice fact. We do not have to solve the whole equation at once. We know the result has to be zero,
      and the left-hand side is nothing but multiplication. It is enough to make <B>at least one</B> factor equal to
      zero, and it will <B>instantly zero out</B> every other factor, and who gives a damn what numbers they become.
    </P>

    <P>
      By this logic, the equation <M>(x-1)(x-2) = 0</M> splits into two <Dep on={elementaryEquations}>elementary</Dep>{' '}
      sub-equations:
    </P>

    <Diagram>{math`
      flowchart TD
        original["**Original equation**<br />$$ (x-1)(x-2) = 0 $$"]
        original -->|Set the first factor to zero| sub1["**Sub-equation 1**<br />$$ x-1 = 0 $$"]
        original -->|Set the second factor to zero| sub2["**Sub-equation 2**<br />$$ x-2 = 0 $$"]
        sub1 --> sol1["$$ x_1 = 1 $$"]
        sub2 --> sol2["$$ x_2 = 2 $$"]

        class sol1,sol2 fill
    `}</Diagram>

    <P>Let's check the two roots we found by direct substitution:</P>

    <BlockMath>{math`
      \boxed{\textbf{1}} \quad (\brand{1} - 1) \cdot (\brand{1} - 2) = 0 \\
      \red{0} \cdot (-1) = 0 \\
      0 = 0
      >>{big}
      \boxed{\textbf{2}} \quad (\brand{2} - 1) \cdot (\brand{2} - 2) = 0 \\
      1 \cdot \red{0} = 0 \\
      0 = 0
    `}</BlockMath>

    <P>
      We got true equalities, which <Dep on={equationSolution}>proves the roots are correct</Dep>. As you can see, we do
      not care at all what the other factors turn into, because that "whatever" still gets multiplied by zero and ends
      up as zero.
    </P>

    <P>Let's solve the second equation the same way:</P>

    <Diagram>{math`
      flowchart TD
        original["**Original equation**<br />$$ 2x(10+x)(2x-1) = 0 $$"]
        original --> sub1["**Sub-equation 1**<br />$$ 2x = 0 $$"]
        original --> sub2["**Sub-equation 2**<br />$$ 10+x = 0 $$"]
        original --> sub3["**Sub-equation 3**<br />$$ 2x-1 = 0 $$"]
        sub1 --> sol1["$$ x_1 = 0 $$"]
        sub2 --> sol2["$$ x_2 = -10 $$"]
        sub3 --> sol3["$$ x_3 = \frac{1}{2} $$"]

        class sol1,sol2,sol3 fill
    `}</Diagram>

    <P>Check the roots by substitution:</P>

    <BlockMath>{math`
      \boxed{\textbf{1}} \quad 2 \cdot \brand{0} \cdot (10 + \brand{0}) \cdot (2 \cdot \brand{0} - 1) = 0 \\
      \red{0} \cdot 10 \cdot (-1) = 0 \\
      0 = 0
      >>{big}
      \boxed{\textbf{2}} \quad 2 \cdot (\brand{-10}) \cdot (10 + \brand{-10}) \cdot (2 \cdot (\brand{-10}) - 1) = 0 \\
      -20 \cdot \red{0} \cdot (-21) = 0 \\
      0 = 0
      >>{big}
      \boxed{\textbf{3}} \quad 2 \cdot \brand{\frac{1}{2}} \cdot \left(10 + \brand{\frac{1}{2}}\right) \cdot \left(2 \cdot \brand{\frac{1}{2}} - 1\right) = 0 \\
      1 \cdot \frac{21}{2} \cdot \red{0} = 0 \\
      0 = 0
    `}</BlockMath>

    <P>Now we've confirmed that all three numbers really are roots of the equation.</P>

    <H1>Zero product property</H1>

    <P>
      As you can see, even complicated equations can be cracked if you use the right mathematical properties. This
      method works beautifully and gets used all the time, both in school math and in higher math. It doesn't really
      have one universally fixed name. So instead of describing the same trick over and over, let's call it the "Zero
      product property":
    </P>

    <Statement
      $={uniques.zeroProductMethod}
      title="Zero Product Property"
      snippet={{
        key: true,
        seo: 'What is zero product property?',
        description: `
          A convenient way to quickly solve equations written as a product of factors equal to zero.
        `,
      }}
    >
      <P>
        <B>Any</B> equation made of factors (brackets) whose product is zero can be solved by{' '}
        <B accent>setting each factor equal to zero separately</B>.
      </P>
      <Diagram>{math`
        flowchart TD
          sourceEquation["**Original equation**<br />$$ 11x(x-8)(x^2 - 4)\cdots = 0 $$"]

          sourceEquation --> sub1["**Sub-equation 1**<br />$$ x = 0 $$"]
          sourceEquation --> sub2["**Sub-equation 2**<br />$$ x-8 = 0 $$"]
          sourceEquation --> sub3["**Sub-equation 3**<br />$$ x^2 - 4 = 0 $$"]
          sourceEquation --> subN["**Sub-equation N**<br />$$ \ldots $$"]

          sub1 --> sol1["$$ x_1 = 0 $$"]
          sub2 --> sol2["$$ x_2 = 8 $$"]
          sub3 --> sol3["$$ x_{3,4} = \pm 2 $$"]

          class sol1,sol2,sol3,sol4 fill
      `}</Diagram>
    </Statement>

    <Problems
      $={uniques.zeroProductExamples}
      title="Practicing zero product property"
      level="easy"
      snippet={{
        key: 'Usage examples',
        description: `
          Practice problems for the zero product property with detailed solutions.
        `,
      }}
    >
      <P>Solve the equation:</P>

      <SubProblem script={zeroProductPropertyScript()} />

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x(x + 7)(x - 11) = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, -7, 11]} />
        <ProblemHint>
          There are already three factors here, so you get three sub-equations and therefore three solutions to the
          original equation.
        </ProblemHint>
        <ProblemAnswer>
          <M>0</M>, <M>-7</M> and <M>11</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            There are three factors here, so we get three sub-equations and therefore three solutions to the original
            equation. The first sub-equation is already "solved automatically" for us, because $x$ is already standing
            there alone:
          </P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Sub-equation 1} & \text{\small Sub-equation 2} & \text{\small Sub-equation 3} \\
                \boxed{x = 0} & x + 7 = 0 & x - 11 = 0 \\
                & \boxed{x = -7} & \boxed{x = 11}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`10(x+3)(2x-8)(8x+1) = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-3, 4, [-0.125, '-1/8']]} />
        <ProblemHint>
          Get rid of <M>10</M>, then solve the sub-equations for each factor.
        </ProblemHint>
        <ProblemHint>The first sub-equation is trivial. The others have to be solved as actual equations.</ProblemHint>
        <ProblemSolution>
          <P>
            To keep <M>10</M> from getting in the way, use the <Dep on={sameActionRule}>same action rule</Dep> and
            divide both sides of the equation by <M>10</M>.
          </P>
          <BlockMath>{math`
            \brand{\div 10} \ | \ 10(x+3)(2x-8)(8x+1) = 0 \ | \ \brand{\div 10} \\
            \frac{\cancel{10}(x+3)(2x-8)(8x+1)}{\cancel{10}} = \frac{0}{10} \\
            (x+3)(2x-8)(8x+1) = 0
          `}</BlockMath>
          <P>
            Now the left-hand side has three factors containing <M>x</M>, so that means three sub-equations. The first
            one is trivial and gives the root <M>-3</M>; the second and third need to be solved normally.
          </P>
          <ProblemSection title="Second sub-equation">
            <BlockMath>{math`2x - 8 = 0`}</BlockMath>
            <P>
              To isolate <M>x</M>, first get rid of subtracting <M>8</M>. For that, use the same action rule and add{' '}
              <M>8</M> to both sides of the equation:
            </P>
            <BlockMath>{math`
              \brand{+ 8} \ | \ 2x - 8 = 0 \ | \ \brand{+ 8} \\
              \cancel{8} + 2x - \cancel{8} = 0 + 8 \\
              2x = 8
            `}</BlockMath>
            <P>
              Now divide both sides of the equation by <M>2</M>:
            </P>
            <BlockMath>{math`
              \brand{\div 2} \ | \ 2x = 8 \ | \ \brand{\div 2} \\
              \frac{\cancel{2}x}{\cancel{2}} = \frac{8}{2} \\
              \boxed{x = 4}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Third sub-equation">
            <BlockMath>{math`8x + 1 = 0`}</BlockMath>
            <P>
              To isolate <M>x</M>, we need to get rid of multiplying by <M>8</M> and adding <M>1</M>. Start with the
              addition: use the same action rule and subtract <M>1</M> from both sides of the equation:
            </P>
            <BlockMath>{math`
              \brand{- 1} \ | \ 8x + 1 = 0 \ | \ \brand{- 1} \\
              -\cancel{1} + 8x + \cancel{1} = 0 - 1 \\
              8x = -1
            `}</BlockMath>
            <P>
              Now divide both sides of the equation by <M>8</M>:
            </P>
            <BlockMath>{math`
              \brand{\div 8} \ | \ 8x = -1 \ | \ \brand{\div 8} \\
              \frac{\cancel{8}x}{\cancel{8}} = \frac{-1}{8} \\
              \boxed{x = -\frac{1}{8}}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Summary">
            <P>
              The original equation has three solutions: <M>-3</M>, <M>4</M>, and <M>{math`-\frac{1}{8}`}</M>, because
              substituting any of those three numbers for <M>x</M> turns the corresponding factor into zero, and that
              zero then multiplies every other factor and makes the entire left-hand side zero, which makes the equality
              true.
            </P>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`0 = (x^2 - 4)(x + 1)`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-2, 2, -1]} />
        <ProblemHint>Two factors on the right lead to two sub-equations.</ProblemHint>
        <ProblemHint>The first sub-equation has two roots.</ProblemHint>
        <ProblemAnswer>
          <M>-2</M>, <M>2</M>, and <M>-1</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            On the right side of the equation we have two factors, each of which gives a root of the original equation.
            The root from the second factor is easy: it is <M>-1</M>. To get the root from the first factor, we need to
            solve the equation:
          </P>
          <BlockMath>{math`x^2 - 4 = 0`}</BlockMath>
          <P>
            To leave <M>x^2</M> alone, we need to get rid of subtracting <M>4</M>. For that, use the{' '}
            <Dep on={sameActionRule}>same action rule</Dep> and add <M>4</M> to both sides of the equation:
          </P>
          <BlockMath>{math`
            \brand{+ 4} \ | \ x^2 - 4 = 0 \ | \ \brand{+ 4} \\
            \cancel{4} + x^2 - \cancel{4} = 0 + 4 \\
            x^2 = 4
          `}</BlockMath>
          <P>
            What number squared gives <M>4</M>? There are two of them: <M>2</M> and <M>-2</M>.
          </P>
          <P>
            So the original equation has three roots: <M>-1</M>, <M>2</M>, and <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{\left(x + \frac{1}{2}\right)x}{17} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, [-0.5, '-1/2']]} />
        <ProblemHint>
          First get rid of the denominator <M>17</M>. Then solve the sub-equations for each factor.
        </ProblemHint>
        <ProblemAnswer>
          <M>0</M> and <M>{math`-\frac{1}{2}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            To get rid of the fraction denominator, use the <Dep on={sameActionRule}>same action rule</Dep> and multiply
            both sides of the equation by <M>17</M>. Then the <M>17</M> on the left cancels out:
          </P>
          <BlockMath>{math`
            \brand{\cdot 17} \ | \ \frac{\left(x + \frac{1}{2}\right)x}{17} = 0 \ | \ \brand{\cdot 17} \\
            \cancel{17}\cdot\frac{\left(x + \frac{1}{2}\right)x}{\cancel{17}} = 0\cdot 17 \\
            \left(x + \frac{1}{2}\right)x = 0
          `}</BlockMath>
          <P>
            We have two factors, and each of them gives a root of the original equation. The root from the second factor
            is easy: it is <M>0</M>. To get the root from the first factor, it is enough to solve a trivial equation:
          </P>
          <BlockMath>{math`
            x + \frac{1}{2} = 0 \\
            \brand{- \frac{1}{2}} \ | \ x + \frac{1}{2} = 0 \ | \ \brand{- \frac{1}{2}} \\
            -\cancel{\frac{1}{2}} + x + \cancel{\frac{1}{2}} = 0 - \frac{1}{2} \\
            \boxed{x = -\frac{1}{2}}
          `}</BlockMath>
          <P>
            So the original equation has two roots: <M>0</M> and <M>{math`-\frac{1}{2}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x+11)(x-1) + 12 = 12`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-11, 1]} />
        <ProblemHint>
          Think about how to get rid of <M>12</M> on both sides in one move.
        </ProblemHint>
        <ProblemAnswer>
          <M>-11</M> and <M>1</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We have the same number <M>12</M> on both sides of the equals sign. We can simplify the equation a lot by
            using the <Dep on={sameActionRule}>same action rule</Dep> and subtracting <M>12</M> from both sides:
          </P>
          <BlockMath>{math`
            \brand{- 12} \ | \ (x+11)(x-1) + 12 = 12 \ | \ \brand{- 12} \\
            -\cancel{12} + (x+11)(x-1) + \cancel{12} = \cancel{12} - \cancel{12} \\
            (x+11)(x-1) = 0
          `}</BlockMath>
          <P>After that it's the usual routine. Solve two sub-equations and get two roots:</P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                x + 11 = 0 & x - 1 = 0 \\
                \boxed{x = -11} & \boxed{x = 1}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`7x^2 = 42x`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, 6]} />
        <ProblemHint>Simplify the equation.</ProblemHint>
        <ProblemHint>Group the x terms on one side, for example on the left.</ProblemHint>
        <ProblemHint>Factor out the common multiplier.</ProblemHint>
        <ProblemAnswer>
          <M>0</M> and <M>6</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            First let's simplify the equation by using the <Dep on={sameActionRule}>same action rule</Dep> to divide
            both sides by <M>7</M>:
          </P>
          <BlockMath>{math`
            \brand{\div 7} \ | \ 7x^2 = 42x \ | \ \brand{\div 7} \\
            \frac{\cancel{7}x^2}{\cancel{7}} = \frac{42x}{7} \\
            x^2 = 6x
          `}</BlockMath>
          <P>
            Now group the x terms on the left side of the equation. To do that, we need to get rid of <M>6x</M> on the
            right. Using the same action rule, subtract <M>6x</M> from both sides:
          </P>
          <BlockMath>{math`
            \brand{- 6x} \ | \ x^2 = 6x \ | \ \brand{- 6x} \\
            x^2 - 6x = \cancel{6x} - \cancel{6x} \\
            x^2 - 6x = 0
          `}</BlockMath>
          <P>
            On the left side, both terms have a common factor <M>x</M>. Factor it out:
          </P>
          <BlockMath>{math`x(x-6) = 0`}</BlockMath>
          <P>We have a product of two factors equal to zero. So the left side splits into two sub-equations:</P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                \boxed{x = 0} & x - 6 = 0 \\
                & \boxed{x = 6}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2}{x-3} = 4x`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, 4]} />
        <ProblemHint>
          Group all <M>x</M> terms on one side of the equation and factor out common factors.
        </ProblemHint>
        <ProblemAnswer>
          The equation has two solutions: <M>0</M> and <M>4</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Pull <M>x-3</M> out of the denominator. To do that, use the <Dep on={sameActionRule}>same action rule</Dep>
            and multiply both sides of the equation by <M>x-3</M>:
          </P>
          <BlockMath>{math`
            \brand{\cdot (x-3)} \ | \ \frac{x^2}{x-3} = 4x \ | \ \brand{\cdot (x-3)} \\
            \cancel{(x-3)}\cdot\frac{x^2}{\cancel{x-3}} = 4x\cdot(x-3) \\
            x^2 = 4x^2 - 12x
          `}</BlockMath>
          <P>
            Now group all x terms on the right side. For that, subtract <M>x^2</M> from both sides of the equation:
          </P>
          <BlockMath>{math`
            \brand{- x^2} \ | \ x^2 = 4x^2 - 12x \ | \ \brand{- x^2} \\
            -\cancel{x^2} + \cancel{x^2} = 4x^2 - 12x - x^2 \\
            0 = 3x^2 - 12x
          `}</BlockMath>
          <P>
            Factor out <M>3x</M>:
          </P>
          <BlockMath>{math`0 = 3x(x - 4)`}</BlockMath>
          <P>We got a product of factors equal to zero. So this equation splits into two sub-equations:</P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                \boxed{x = 0} & x - 4 = 0 \\
                & \boxed{x = 4}
            \end{array}
          `}</BlockMath>
          <P>
            The equation has two solutions: <M>0</M> and <M>4</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^3 - 9x = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, 3, -3]} />
        <ProblemHint>
          Factor out <M>x</M>.
        </ProblemHint>
        <ProblemHint>
          Think about what number squared gives <M>9</M>.
        </ProblemHint>
        <ProblemAnswer>
          <M>0</M>, <M>3</M>, and <M>-3</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that both terms on the left have a common factor <M>x</M>. Factor it out:
          </P>
          <BlockMath>{math`x(x^2 - 9) = 0`}</BlockMath>
          <P>
            We got a product of two factors equal to zero. The first factor immediately gives the root <M>x = 0</M>. Set
            the second factor equal to zero:
          </P>
          <BlockMath>{math`
            x^2 - 9 = 0 \\
            \brand{+ 9} \ | \ x^2 - 9 = 0 \ | \ \brand{+ 9} \\
            x^2 = 9
          `}</BlockMath>
          <P>
            What number squared gives <M>9</M>? There are two of them: <M>3</M> and <M>-3</M>.
          </P>
          <P>
            So the equation has three roots: <M>0</M>, <M>3</M>, and <M>-3</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x-1)^2 = (x-1)`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, 2]} />
        <ProblemHint>
          Move <M>(x-1)</M> from the right side to the left.
        </ProblemHint>
        <ProblemHint>
          Factor out <M>(x-1)</M>.
        </ProblemHint>
        <ProblemAnswer>
          <M>1</M> and <M>2</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>(x-1)</M> from both sides of the
            equation:
          </P>
          <BlockMath>{math`
            \brand{- (x-1)} \ | \ (x-1)^2 = (x-1) \ | \ \brand{- (x-1)} \\
            (x-1)^2 - (x-1) = \cancel{(x-1)} - \cancel{(x-1)} \\
            (x-1)^2 - (x-1) = 0
          `}</BlockMath>
          <P>
            Notice that both terms on the left share a common factor <M>(x-1)</M>. Factor it out:
          </P>
          <BlockMath>{math`(x-1)\big((x-1) - 1\big) = 0 \\ (x-1)(x-2) = 0`}</BlockMath>
          <P>Solve the two sub-equations:</P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                x - 1 = 0 & x - 2 = 0 \\
                \boxed{x = 1} & \boxed{x = 2}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^3 = 4x`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, 2, -2]} />
        <ProblemHint>Group all terms on one side of the equation.</ProblemHint>
        <ProblemHint>Factor out the common multiplier.</ProblemHint>
        <ProblemAnswer>
          <M>0</M>, <M>2</M>, and <M>-2</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>4x</M> from both sides of the equation
            so everything gets grouped on the left:
          </P>
          <BlockMath>{math`
            \brand{- 4x} \ | \ x^3 = 4x \ | \ \brand{- 4x} \\
            x^3 - 4x = \cancel{4x} - \cancel{4x} \\
            x^3 - 4x = 0
          `}</BlockMath>
          <P>
            Factor out <M>x</M>:
          </P>
          <BlockMath>{math`x(x^2 - 4) = 0`}</BlockMath>
          <P>
            The first factor immediately gives the root <M>x = 0</M>. Set the second factor equal to zero:
          </P>
          <BlockMath>{math`
            x^2 - 4 = 0 \\
            \brand{+ 4} \ | \ x^2 - 4 = 0 \ | \ \brand{+ 4} \\
            x^2 = 4
          `}</BlockMath>
          <P>
            What number squared gives <M>4</M>? There are two of them: <M>2</M> and <M>-2</M>.
          </P>
          <P>
            So the equation has three roots: <M>0</M>, <M>2</M>, and <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3x^2 + 12x = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, -4]} />
        <ProblemHint>Factor out the common multiplier.</ProblemHint>
        <ProblemAnswer>
          <M>0</M> and <M>-4</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that both terms on the left have a common factor <M>3x</M>. Factor it out:
          </P>
          <BlockMath>{math`3x(x + 4) = 0`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, divide both sides of the equation by <M>3</M>:
          </P>
          <BlockMath>{math`
            \brand{\div 3} \ | \ 3x(x + 4) = 0 \ | \ \brand{\div 3} \\
            x(x + 4) = 0
          `}</BlockMath>
          <P>We have a product of two factors equal to zero. Split it into two sub-equations:</P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                \boxed{x = 0} & x + 4 = 0 \\
                & \boxed{x = -4}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>
  </>
));
