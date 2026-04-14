// #region Links
//

const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const linearFormula = $CONTENT.foundations.equations.elementary.practice.$linearRoot;
const zeroProductProperty = $CONTENT.foundations.equations.zeroProductProperty;
const whatIsQuadratic = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticEquation;
const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;
const compensate = $CONTENT.foundations.equations.quadratic.completingTheSquare.article.$compensate;

//
// #endregion

export default defineProse({
  uniques: {
    generalFormulas: Important,
    examples: Problems,
    discriminant: Term,
    formula: Statement,
    biquadratic: Term,
    biquadraticExamples: Problems,
    _squareRootExample: Details,
  },
})(({ uniques }) => (
  <>
    <P>
      Every time you solve a quadratic equation, doing a little puzzle with{' '}
      <Dep on={completingTheSquare}>completing the square</Dep> gets annoying. It would be nice to have one universal
      algorithm that works for literally any quadratic equation. Like: just plug numbers into a formula and get the
      answer.
    </P>

    <P>
      Turns out, that formula exists! Deriving it is not that hard, although for many students the process (and
      understanding it) is a real struggle. You just complete the square <B>not in one specific</B> equation with
      concrete numbers, but in a quadratic equation <Dep on={whatIsQuadratic}>in the general form</Dep>, with letters as
      coefficients!
    </P>

    <P>But let's start from a distance so you see how and why formulas like this get derived in the first place.</P>

    <H1>"General root formulas"</H1>

    <P>
      What does a "general formula for the roots" even mean, and how do you derive one? Let's look at a simple example
      of a <B>general</B> equation (meaning it has letters instead of specific numbers):
    </P>

    <BlockMath>{math`2x + A = 0`}</BlockMath>

    <P>
      We need to solve it, but <M>A</M> can be any number! What do we do? We just treat <M>A</M> like a number and do
      the usual operations. Here, by the <Dep on={sameActionRule}>same action rule</Dep>, we subtract <M>A</M> from both
      sides to get rid of it on the left:
    </P>

    <BlockMath>{math`
      2x + \cancel{A} - \cancel{\brand{A}} = 0 - \brand{A} \\
      2x = -A
    `}</BlockMath>

    <P>
      Now, by the same action rule, we divide both sides by <M>2</M> so that <M>x</M> is left alone on the left:
    </P>

    <BlockMath>{math`
      \frac{\cancel{2}x}{\cancel{\brand{2}}} = \frac{-A}{\brand{2}} \\
      \boxed{x = -\frac{A}{2}}
    `}</BlockMath>

    <P>
      We got a <B>general</B> root formula for every equation of the form <M>2x + A = 0</M>! No matter what number hides
      behind <M>A</M>, we can plug it in and instantly get the solution.
    </P>

    <BlockMath>{math`
      A = 3 \\
      2x + 3 = 0 \\
      x = \boxed{-\frac{3}{2}}
      >>
      A = 0 \\
      2x + 0 = 0 \\
      x = -\frac{0}{2} = \boxed{0}
      >>
      A = -8 \\
      2x - 8 = 0 \\
      x = -\frac{-8}{2} = \boxed{4}
    `}</BlockMath>

    <Important
      $={uniques.generalFormulas}
      title="General root formulas"
      snippet={{
        seo: 'What is a general formula for equation roots?',
        key: true,
        search: ['general formula for roots', 'formula for roots of an equation'],
        description: 'General root formulas let you solve a whole class of equations by direct substitution.',
      }}
    >
      General formulas for solutions (roots) let you basically <B accent>not solve</B> the equation step by step. You
      just substitute the coefficients and <B accent>get the roots directly</B>! This is especially useful for harder
      equations like <B accent>quadratics</B>, where the usual method takes a whole chain of steps.
    </Important>

    <P>
      The <Ref to={linearFormula}>general formula for linear equations</Ref> was derived the same way. Here are a few
      more examples with different numbers of coefficients:
    </P>

    <Problems title="Examples: deriving general formulas" level="example">
      <P>Derive a general solution formula for the equation.</P>
      <SubProblem label="1 coefficient">
        <ProblemDescription>
          <BlockMath>{math`\frac{T}{x} = 8`}</BlockMath>
          <P>
            Find the solutions for <M>T = 1, 8, 3</M>.
          </P>
        </ProblemDescription>
        <ProblemCheck
          answers={{
            ordered: true,
            values: [[0.125, '1/8'], 1, [0.375, '3/8']],
          }}
        />
        <ProblemAnswer>
          <BlockMath>{math`x = \frac{T}{8}`}</BlockMath>
          <P>
            Substitute the values of <M>T</M> and get the solutions:
          </P>
          <BlockMath>{math`
            T = 1 \Rightarrow \boxed{x = \frac{1}{8}} >>{big}
            T = 8 \Rightarrow \boxed{x = 1} >>{big}
            T = 3 \Rightarrow \boxed{x = \frac{3}{8}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We need to "pull" <M>x</M> out of the denominator. By the same action rule, we multiply both sides by{' '}
            <M>x</M>:
          </P>
          <BlockMath>{math`
            \cancel{x} \cdot \frac{T}{\cancel{x}}  = 8 \cdot \cancel{x} \\
            T = 8x
          `}</BlockMath>
          <P>
            Now divide both sides by <M>8</M> to isolate <M>x</M>:
          </P>
          <BlockMath>{math`
            \frac{T}{\cancel{8}} = \frac{8x}{\cancel{8}} \\
            x = \frac{T}{8}
          `}</BlockMath>
          <P>
            The general formula is ready. Now we plug in <M>T</M> from the statement and instantly get the answers:
          </P>
          <BlockMath>{math`
            T = 1 \Rightarrow \boxed{x = \frac{1}{8}} >>{big}
            T = 8 \Rightarrow \boxed{x = 1} >>{big}
            T = 3 \Rightarrow \boxed{x = \frac{3}{8}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem label="2 coefficients">
        <ProblemDescription>
          <BlockMath>{math`
            \left(\frac{x}{A} + 3\right)(x - C) = 0
          `}</BlockMath>
          <P>
            Find the solutions for <M>(A, C) = (1, 2); (-5, 3); (-3, -10)</M>.
          </P>
        </ProblemDescription>
        <ProblemCheck label="Roots for (A, C) = (1, 2)" answers={[-3, 2]} />
        <ProblemCheck label="Roots for (A, C) = (-5, 3)" answers={[15, 3]} />
        <ProblemCheck label="Roots for (A, C) = (-3, -10)" answers={[9, -10]} />
        <ProblemHint>
          Review the <Dep on={zeroProductProperty}>Zero product property</Dep>.
        </ProblemHint>
        <ProblemAnswer>
          <P>General solution formulas:</P>
          <BlockMath>{math`
            x_1 = -3A >> x_2 = C
          `}</BlockMath>
          <P>
            Roots for the given <M>A</M> and <M>C</M>:
          </P>
          <BlockMath>{math`
            (A, C) = (1, 2) \Rightarrow \boxed{x_1 = -3, \ x_2 = 2} \\
            (A, C) = (-5, 3) \Rightarrow \boxed{x_1 = 15, \ x_2 = 3} \\
            (A, C) = (-3, -10) \Rightarrow \boxed{x_1 = 9, \ x_2 = -10}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            This is a typical equation where a product of factors equals <M>0</M>. You can always split it into smaller
            sub-equations and solve them separately. Here we get:
          </P>
          <BlockMath>{math`
            \frac{x_1}{A} + 3 = 0 \\
            \frac{x_1}{A} = -3 \\
            \boxed{x_1 = -3A}
            >>{big}
            x_2 - C = 0 \\
            \boxed{x_2 = C}
          `}</BlockMath>
          <P>
            Now plug in <M>A</M> and <M>C</M> from the statement and get the answers:
          </P>
          <BlockMath>{math`
            (A, C) = (1, 2) \Rightarrow \boxed{x_1 = -3, \ x_2 = 2} \\
            (A, C) = (-5, 3) \Rightarrow \boxed{x_1 = 15, \ x_2 = 3} \\
            (A, C) = (-3, -10) \Rightarrow \boxed{x_1 = 9, \ x_2 = -10}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem label="3 coefficients">
        <ProblemDescription>
          <BlockMath>{math`
            Ax + Bx + C = 0
          `}</BlockMath>
          <P>
            Find the solutions for <M>(A, B, C) = (1, 2, 3); (-5, 0, 1)</M>.
          </P>
        </ProblemDescription>
        <ProblemCheck
          answers={{
            ordered: true,
            values: [-1, [0.2, '1/5']],
          }}
        />
        <ProblemHint>
          Factor out <M>x</M>.
        </ProblemHint>
        <ProblemAnswer>
          <P>General solution formula:</P>
          <BlockMath>{math`x = -\frac{C}{A + B}`}</BlockMath>
          <P>
            Solutions for the given <M>A</M>, <M>B</M>, and <M>C</M>:
          </P>
          <BlockMath>{math`
            (A, B, C) = (1, 2, 3) \Rightarrow \boxed{x = -\frac{3}{1 + 2} = -1} \\
            (A, B, C) = (-5, 0, 1) \Rightarrow \boxed{x = -\frac{1}{-5 + 0} = \frac{1}{5}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Factor out <M>x</M>:
          </P>
          <BlockMath>x(A + B) + C = 0</BlockMath>
          <P>
            By the same action rule, subtract <M>C</M> from both sides:
          </P>
          <BlockMath>x(A + B) = -C</BlockMath>
          <P>
            Now divide both sides by <M>A + B</M> to isolate <M>x</M>:
          </P>
          <BlockMath>{math`x = -\frac{C}{A + B}`}</BlockMath>
          <P>The general formula is ready. Now substitute the actual coefficient values and get the solutions:</P>
          <BlockMath>{math`
            (A, B, C) = (1, 2, 3) \Rightarrow x = -\frac{3}{1 + 2} = \boxed{-1} \\
            (A, B, C) = (-5, 0, 1) \Rightarrow x = -\frac{1}{-5 + 0} = \boxed{\frac{1}{5}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      Now that you get the main idea (and the usefulness) of such "general" formulas, let's derive a general formula for
      the roots of any quadratic equation — one that does not depend on specific coefficient values.
    </P>

    <H1>Completing the square</H1>

    <P>It all starts by writing the quadratic equation in the general (standard) form:</P>

    <BlockMath>Ax^2 + Bx + C = 0, \quad A \neq 0</BlockMath>

    <P>
      Completing the square with the coefficient <M>A</M> still in front is <B>impossible</B>! We don't know whether{' '}
      <M>A</M> is positive or negative (what if it's <M>-10</M>?), so taking a square root is not an option. So let's
      get rid of it: by the <Dep on={sameActionRule}>same action rule</Dep>, divide both sides by <M>A</M>. We're
      allowed to do that because by definition <M>A \neq 0</M> — otherwise it wouldn't be a quadratic equation.
    </P>

    <BlockMath>{math`
      \frac{Ax^2 + Bx + C}{A} = \frac{0}{A} \\
      \frac{\cancel{A}x^2}{\cancel{A}} + \frac{B}{A}x + \frac{C}{A} = 0 \\
      x^2 + \frac{B}{A}x + \frac{C}{A} = 0
    `}</BlockMath>

    <P>
      By the same action rule, subtract the "constant term" (the one without <M>x</M>) from both sides. It's just
      ballast — it will only get in the way when we try to complete the square on the left:
    </P>

    <BlockMath>{math`
      x^2 + \frac{B}{A}x + \cancel{\frac{C}{A}} - \cancel{\brand{\frac{C}{A}}} = 0 - \brand{\frac{C}{A}} \\
      x^2 + \frac{B}{A}x = -\frac{C}{A}
    `}</BlockMath>

    <P>
      On the left we now have two terms with a <M>+</M> sign. That means we can pack it into a square of a sum using{' '}
      <M>a^2 + 2ab + b^2 = (a + b)^2</M>. But we're missing some pieces! There is no 2 in the middle term, and there is
      no third term playing the role of <M>b^2</M>. So we'll add what we need and immediately{' '}
      <Dep on={compensate}>compensate</Dep> for it, to keep the equality true. Let's start by adding and compensating
      the 2:
    </P>

    <BlockMath>{math`
      x^2 + \yellow{2} \cdot x \frac{B}{A} \cdot \yellow{\frac{1}{2}} = -\frac{C}{A} \\
      x^2 + 2 \cdot x \cdot \frac{B}{2A} = -\frac{C}{A}
    `}</BlockMath>

    <P>
      The fraction <M>{math`\frac{B}{2A}`}</M> naturally becomes <M>b</M>, because <M>a</M> is already played by{' '}
      <M>x</M>. To complete the square, we only need to add and compensate <M>b^2</M>:
    </P>

    <BlockMath>{math`
      \underbrace{x^2 + 2 \cdot x \cdot \frac{B}{2A} + \yellow{\left( \frac{B}{2A} \right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left( \frac{B}{2A} \right)^2} = -\frac{C}{A} \\
      \left( x + \frac{B}{2A} \right)^2 - \left( \frac{B}{2A} \right)^2 = -\frac{C}{A}
    `}</BlockMath>

    <P>Keep the perfect square on the left and move the extra "tail" to the right:</P>

    <BlockMath>{math`
      \left( x + \frac{B}{2A} \right)^2 - \cancel{\left( \frac{B}{2A} \right)^2} + \cancel{\brand{\left( \frac{B}{2A} \right)^2}} = -\frac{C}{A} + \brand{\left( \frac{B}{2A} \right)^2} \\
      \left( x + \frac{B}{2A} \right)^2 = -\frac{C}{A} + \left( \frac{B}{2A} \right)^2 \\
      \left( x + \frac{B}{2A} \right)^2 = \frac{B^2 - 4AC}{4A^2}
    `}</BlockMath>

    <P>We successfully completed the square in a quadratic equation in general form! The hardest part is behind us.</P>

    <H1
      snippet={{
        seo: true,
        title: 'Derivation of the discriminant',
        description: 'How the discriminant of a quadratic equation is derived and why it is important.',
      }}
    >
      The discriminant
    </H1>

    <P>Take a close look at what we have now:</P>

    <BlockMath>{math`\left( x + \frac{B}{2A} \right)^2 = \frac{B^2 - 4AC}{4A^2}`}</BlockMath>

    <P>
      The whole left side is a square, so it is <B>100% non-negative</B>. If the left side is non-negative, then the
      right side <B>must also be non-negative</B>. Otherwise there are no solutions at all, because you would get a fake
      equality like "non-negative = negative".
    </P>

    <BlockMath>{math`\underbrace{\left( x + \frac{B}{2A} \right)^2}_{\small \green{\geq 0}} = \underbrace{\left(\frac{B^2 - 4AC}{4A^2}\right)}_{\small \green{\geq 0}}`}</BlockMath>

    <P>
      On the right, the denominator is <M>4</M> times a square, so the whole denominator is also <B>100% positive</B>{' '}
      (it can't be zero, because you can't divide by zero). So the only thing that decides the sign of the right-hand
      side — and therefore whether solutions exist — is the numerator <M>B^2 - 4AC</M>.
    </P>

    <BlockMath>{math`
      \underbrace{\green{\left( x + \frac{B}{2A} \right)^2}}_{\small \geq 0} = \frac{\overbrace{\red{B^2 - 4AC}}^{\small \text{Which sign?}}}{\underbrace{\green{4A^2}}_{\small > 0}} \\
    `}</BlockMath>

    <P>
      This numerator plays a <B>decisive</B> role in solving a quadratic equation. That's why it's called the
      discriminant — a number that "distinguishes" the cases. In cases of discrimination based on certain traits (such
      as skin color or language), people's rights are violated. Similarly, the discriminant, depending on its sign,
      determines whether a quadratic equation will have roots or not.
    </P>

    <Term
      $={uniques.discriminant}
      title="Discriminant"
      snippet={{
        seo: 'What is the discriminant of a quadratic equation?',
        key: true,
        search: true,
        description: `
          A special number computed from the coefficients of a quadratic equation. It tells you how many roots the equation has.
        `,
      }}
    >
      <P>
        The number <M>D</M>, computed from the coefficients of a <Dep on={whatIsQuadratic}>quadratic equation</Dep> in
        the general form <M>Ax^2 + Bx + C = 0</M> by the formula:
      </P>
      <BlockMath>{math`D = B^2 - 4AC`}</BlockMath>
      <P>
        From the discriminant you can tell in advance (without fully solving the equation) whether it has roots. If the
        discriminant is <B accent>negative</B> <M>{math`D < 0`}</M>, then the equation has <B accent>no roots</B>.
      </P>

      <P>
        The discriminant is used directly in the <Ref to={uniques.formula}>quadratic formula</Ref>.
      </P>
    </Term>

    <H1>The roots of a quadratic equation</H1>

    <P>
      Let's continue deriving the general formula for the roots of a quadratic equation. Assume the discriminant{' '}
      <M>D</M> is non-negative (zero or positive), because otherwise there are definitely no roots. Replace the
      numerator in our equation with the accepted discriminant notation:
    </P>

    <BlockMath>{math`
      \left( x + \frac{B}{2A} \right)^2 = \frac{D}{4A^2}
    `}</BlockMath>

    <P>
      Since we know for sure that both sides are non-negative, we can{' '}
      <Ref to={uniques._squareRootExample}>take the square root</Ref> of both sides. In other words, if "something"
      squared on the left equals the fraction on the right, then the original expression equals the square root of the
      right-hand side (with a plus or minus sign):
    </P>

    <Details $={uniques._squareRootExample} title="Taking a square root: why ± appears">
      <P>
        Let's look at a concrete example. Some number <M>x</M>, multiplied by itself, gives <M>16</M>. What is <M>x</M>?
      </P>
      <BlockMath>{math`x^2 = 16`}</BlockMath>
      <P>
        It equals the square root of <M>16</M>, with either a plus sign or a minus sign:
      </P>
      <BlockMath>{math`x = \pm \sqrt{16} = \pm 4`}</BlockMath>
      <Hr />
      <P>
        Now let's return to our case. We can name the parentheses on the left <M>T</M>, and the right-hand side <M>P</M>
        :
      </P>
      <BlockMath>{math`T^2 = P`}</BlockMath>
      <P>
        Some number <M>T</M>, multiplied by itself, gives <M>P</M>. What is <M>T</M>? Of course, it's the square root of{' '}
        <M>P</M>, with either a plus sign or a minus sign!
      </P>
      <BlockMath>{math`T = \pm \sqrt{P}`}</BlockMath>
      <P>
        Substitute our expressions for <M>T</M> and <M>P</M>:
      </P>
      <BlockMath>{math`
        x + \frac{B}{2A} = \pm \sqrt{\frac{D}{4A^2}}
      `}</BlockMath>
    </Details>

    <BlockMath>{math`
      x + \frac{B}{2A} = \pm \sqrt{\frac{D}{4A^2}} \\
      x + \frac{B}{2A} = \pm \frac{\sqrt{D}}{2A}
    `}</BlockMath>

    <P>
      We're almost there. We just need to get rid of the fraction next to <M>x</M>:
    </P>

    <BlockMath>{math`x = -\frac{B}{2A} \pm \frac{\sqrt{D}}{2A}`}</BlockMath>

    <P>Put the right-hand side over a common denominator:</P>

    <BlockMath>{math`\boxed{x = \frac{-B \pm \sqrt{D}}{2A}}`}</BlockMath>

    <P>
      Yes! Time to pop the champagne. We derived the general formula for the roots of any quadratic equation. Just
      substitute real numbers for the coefficients and you immediately get the roots. Notice that if the discriminant is
      zero, there is only one root, because it "kills" the ± part of the formula:
    </P>

    <BlockMath>{math`x = \frac{-B \pm \sqrt{0}}{2A} = \boxed{\frac{-B}{2A}}`}</BlockMath>

    <Statement
      $={uniques.formula}
      title="The quadratic formula"
      snippet={{
        search: true,
        key: 'Quadratic equation roots',
        description: `
          A general formula that lets you find the roots of any quadratic equation by plugging in the coefficients.
        `,
      }}
    >
      <P>
        For any <Dep on={whatIsQuadratic}>quadratic equation</Dep> in the general form:
      </P>
      <BlockMath>{math`Ax^2 + Bx + C = 0, \quad A \neq 0`}</BlockMath>
      <P>
        You can compute a special number, the <Dep on={uniques.discriminant}>discriminant</Dep> <M>D</M>, by the
        formula:
      </P>
      <BlockMath>{math`D = B^2 - 4AC`}</BlockMath>
      <P>The discriminant tells you how many roots the quadratic equation has:</P>
      <List unordered>
        <Li>
          <M>{math`D < 0`}</M> -- the quadratic equation has <B accent>no roots</B>
        </Li>
        <Li>
          <M>{math`D = 0`}</M> -- the quadratic equation has <B accent>one root</B>
        </Li>
        <Li>
          <M>{math`D > 0`}</M> -- the quadratic equation has <B accent>two distinct roots</B>
        </Li>
      </List>
      <P>The roots of the quadratic equation are found by the formula:</P>
      <BlockMath>{math`\boxed{x = \frac{-B \pm \sqrt{D}}{2A}}`}</BlockMath>
    </Statement>

    <Reference to={$CONTENT.foundations.equations.quadratic.quadraticFormula.practice.$sridharasMethod}>
      We derived the formula the "classic" way. But it's not the only way, and not even the simplest. There are many
      other approaches — you'll see some of them in Practice...
    </Reference>

    <P>
      Make sure you understand every step of the derivation. Repeat the steps on your own. Deriving the quadratic
      formula is a rare case in basic math where you need both algebraic transformations and careful reasoning about
      what you got. Great brain workout.
    </P>

    <P>
      Quadratic equations show up everywhere in both basic and higher math. So once you're sure you understand every
      step, you should <B>memorize</B> the discriminant and the quadratic formula. At least so you don't have to spend a
      whole page re-deriving them every single time 😂
    </P>

    <P>
      But that's all minor stuff. Now we have a universal algorithm for solving absolutely any quadratic equation. No
      more guessing, no more picking terms, no more inventing steps. Just plug numbers into the formulas and get the
      answer. Let's try it:
    </P>

    <Problems $={uniques.examples} title="Examples: solving quadratic equations" level="example">
      <P>
        Solve the quadratic equation using the <Dep on={uniques.formula}>quadratic formula</Dep>.
      </P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 2x - 8 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[4, -2]} />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{x_1 = 4} >> \boxed{x_2 = -2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 1, >> B = -2, >> C = -8`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`D = B^2 - 4AC = (-2)^2 - 4 \cdot 1 \cdot (-8) = 4 + 32 = 36`}</BlockMath>
          <P>The discriminant is positive, so the equation has two roots. Find them with the formula:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-2) \pm \sqrt{36}}{2 \cdot 1} = \frac{2 \pm 6}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{2 + 6}{2} = 4 \\ \boxed{x_1 = 4} >>
            x_2 = \frac{2 - 6}{2} = -2 \\ \boxed{x_2 = -2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>4y^2 + 20y + 30 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>The equation has no roots.</ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 4, >> B = 20, >> C = 30`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`D = B^2 - 4AC = 20^2 - 4 \cdot 4 \cdot 30 = 400 - 480 = -80`}</BlockMath>
          <P>The discriminant is negative, so the equation has no roots.</P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>6z = 9z^2</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[0, '2/3']} />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{z_1 = 0} >> \boxed{z_2 = \frac{2}{3}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Bring the equation to the general form. Group everything on one side (for example, the right side) by
            subtracting <M>6z</M> from both sides.
          </P>
          <BlockMath>{math`0 = 9z^2 - 6z`}</BlockMath>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 9, >> B = -6, >> C = 0`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`D = B^2 - 4AC = (-6)^2 - 4 \cdot 9 \cdot 0 = 36`}</BlockMath>
          <P>The discriminant is positive, so the equation has two roots. Find them with the formula:</P>
          <BlockMath>{math`
            z_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-6) \pm \sqrt{36}}{2 \cdot 9} = \frac{6 \pm 6}{18}
          `}</BlockMath>
          <BlockMath>{math`
            z_1 = \frac{6 + 6}{18} = \frac{12}{18} = \frac{2}{3} \\ \boxed{z_1 = \frac{2}{3}} >>
            z_2 = \frac{6 - 6}{18} = 0 \\ \boxed{z_2 = 0}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>-t^2 + 10t - 9 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, 9]} />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{t_1 = 1} >> \boxed{t_2 = 9}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = -1, >> B = 10, >> C = -9`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`D = B^2 - 4AC = 10^2 - 4 \cdot (-1) \cdot (-9) = 100 - 36 = 64`}</BlockMath>
          <P>The discriminant is positive, so the equation has two roots. Find them with the formula:</P>
          <BlockMath>{math`
            t_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-10 \pm \sqrt{64}}{2 \cdot (-1)} = \frac{-10 \pm 8}{-2}
          `}</BlockMath>
          <BlockMath>{math`
            t_1 = \frac{-10 + 8}{-2} = 1 \\ \boxed{t_1 = 1} >>
            t_2 = \frac{-10 - 8}{-2} = 9 \\ \boxed{t_2 = 9}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>16v^2 = 100</BlockMath>
        </ProblemDescription>
        <RootsCheck
          has
          roots={[
            [-2.5, '-5/2'],
            [2.5, '5/2'],
          ]}
        />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{v_1 = -\frac{5}{2}} >> \boxed{v_2 = \frac{5}{2}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Bring the equation to the general form. Group everything on one side (for example, the left side) by
            subtracting <M>100</M> from both sides.
          </P>
          <BlockMath>{math`16v^2 - 100 = 0`}</BlockMath>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 16, >> B = 0, >> C = -100`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`D = B^2 - 4AC = 0^2 - 4 \cdot 16 \cdot (-100) = 6400`}</BlockMath>
          <P>The discriminant is positive, so the equation has two roots. Find them with the formula:</P>
          <BlockMath>{math`
            v_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-0 \pm \sqrt{6400}}{2 \cdot 16} = \frac{\pm 80}{32}
          `}</BlockMath>
          <BlockMath>{math`
            v_1 = \frac{80}{32} = \frac{5}{2} \\ \boxed{v_1 = \frac{5}{2}} >>
            v_2 = \frac{-80}{32} = -\frac{5}{2} \\ \boxed{v_2 = -\frac{5}{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>(2k-7)^2 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[[3.5, '7/2']]} />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{k = \frac{7}{2}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the parentheses and combine like terms:</P>
          <BlockMath>{math`
            (2k-7)^2 = 0 \\
            (2k-7)(2k-7) = 0 \\
            4k^2 - 14k - 14k + 49 = 0 \\
            4k^2 - 28k + 49 = 0
          `}</BlockMath>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 4, >> B = -28, >> C = 49`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`D = B^2 - 4AC = (-28)^2 - 4 \cdot 4 \cdot 49 = 784 - 784 = 0`}</BlockMath>
          <P>The discriminant is zero, so the equation has exactly one root. Find it with the formula:</P>
          <BlockMath>{math`
            k = \frac{-B}{2A} = \frac{-(-28)}{2 \cdot 4} = \frac{28}{8} = \boxed{\frac{7}{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1>Higher powers</H1>

    <P>
      We derived a general formula for quadratic roots. What if we aim higher? There are cubic equations, where <M>x</M>{' '}
      is already to the third power. Can we study them in a similar way and learn how to solve them? Sure. A cubic
      equation can be written in the general form:
    </P>

    <BlockMath>{math`Ax^3 + Bx^2 + Cx + D = 0, \quad A \neq 0`}</BlockMath>

    <P>
      Such equations can have up to three different roots. If you work really hard with formulas and transformations,
      you can even derive a general root formula for cubic equations, known as <B>"Cardano's formula"</B> (Gerolamo
      Cardano). Although the method was actually invented by the mathematician Niccolo Tartaglia, who shared it with
      Cardano under an oath of secrecy. Cardano broke the oath, published the formula under his own name, and a loud
      scandal followed. Either way, you will probably never want to compute with it by hand:
    </P>

    <BlockMath>{math`
      x = \sqrt[3]{-\frac{Q}{2} + \sqrt{\left(\frac{Q}{2}\right)^2 + \left(\frac{P}{3}\right)^3}} + \sqrt[3]{-\frac{Q}{2} - \sqrt{\left(\frac{Q}{2}\right)^2 + \left(\frac{P}{3}\right)^3}} - \frac{B}{3A}
    `}</BlockMath>

    <P>
      Fourth-degree equations can also be solved in general form. You have to follow a specific algorithm with the
      trendy name <B>"Ferrari's method"</B> (Lodovico Ferrari), who was, by the way, a student of Cardano. It's even
      less pleasant than Cardano's formula.
    </P>

    <H2>Biquadratic equations</H2>

    <P>
      Let's look at a special type of "higher-degree" equation that you can solve without horrible scary formulas. They
      reduce to quadratics in a very straightforward way. This is not the only type like that, but it's one of the
      simplest and most common.
    </P>

    <Term
      $={uniques.biquadratic}
      title="Biquadratic equation"
      snippet={{
        key: true,
        seo: 'What is a biquadratic equation?',
        search: true,
        description: `
          A special type of fourth-degree equation that you can solve by reducing it to a quadratic equation.
        `,
      }}
    >
      <P>A special type of fourth-degree equation that can be written in the general form:</P>
      <BlockMath>Ax^4 + Bx^2 + C = 0, \quad A \neq 0</BlockMath>
      <P>Examples:</P>
      <BlockMath>{math`
        x^4 + 16x^2 + 55 = 0 >>{big}
        \frac{1}{2}y^2 - \sqrt{3}y^4 = 1 >>{big}
        5 = z(z^3 - 2\sqrt{3}z)
      `}</BlockMath>
      <P>
        Such equations can have up to four roots, and they are very easy to solve by reducing them to a quadratic via
        the substitution <M>t = x^2</M>:
      </P>
      <BlockMath>At^2 + Bt + C = 0</BlockMath>
    </Term>

    <P>
      It's called <B>bi</B>quadratic because "bi" means "two". Like bisexual people who are attracted to two sexes: men
      and women. A biquadratic equation is basically <B>quadratic twice</B>. A quadratic has <M>x^2</M> and <M>x^1</M>.
      In a biquadratic, the exponents get doubled and become <M>x^4</M> and <M>x^2</M>. Let's solve a few.
    </P>

    <Problems
      $={uniques.biquadraticExamples}
      title="Examples: solving biquadratic equations"
      level="easy"
      snippet={{
        seo: 'How to solve a biquadratic equation?',
        description: `
          A step-by-step method for solving biquadratic equations, with several worked examples.
        `,
      }}
    >
      <P>Solve the biquadratic equation:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^4 - 3x^2 + 1 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, -1, '1/sqrt(2)', '-1/sqrt(2)']} />
        <ProblemAnswer>
          <BlockMath>{math`
            \boxed{x_1 = 1} >> \boxed{x_2 = -1} >> \boxed{x_3 = \frac{1}{\sqrt{2}}} >> \boxed{x_4 = -\frac{1}{\sqrt{2}}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Make the substitution <M>t = x^2</M>. Then we get a quadratic equation:
          </P>
          <BlockMath>2t^2 - 3t + 1 = 0</BlockMath>
          <P>Compute the discriminant and find the roots:</P>
          <BlockMath>{math`D = (-3)^2 - 4 \cdot 2 \cdot 1 = 9 - 8 = 1`}</BlockMath>
          <BlockMath>{math`
            t_1 = \frac{3 + \sqrt{1}}{4} = 1 \\ \boxed{t_1 = 1} >>
            t_2 = \frac{3 - \sqrt{1}}{4} = \frac{1}{2} \\ \boxed{t_2 = \frac{1}{2}}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> and find the roots of the original biquadratic equation:
          </P>
          <BlockMath>{math`
            t_1 = x^2 = 1 \\
            x_{1,2} = \pm \sqrt{1} = \boxed{\pm 1}
            >>
            t_2 = x^2 = \frac{1}{2} \\
            x_{3,4} = \pm \sqrt{\frac{1}{2}} = \boxed{\pm \frac{1}{\sqrt{2}}}
          `}</BlockMath>
          <P>So the equation has four roots in total.</P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>-8 = x(2x^3 + 10x)</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>The equation has no roots.</ProblemAnswer>
        <ProblemSolution>
          <P>Expand and group everything on one side (for example, the right side):</P>
          <BlockMath>{math`
            -8 = x(2x^3 + 10x) \\
            -8 = 2x^4 + 10x^2 \\
            0 = 2x^4 + 10x^2 + 8
          `}</BlockMath>
          <P>
            Now we have a biquadratic equation. Substitute <M>t = x^2</M> to get a quadratic equation:
          </P>
          <BlockMath>0 = 2t^2 + 10t + 8</BlockMath>
          <P>Compute the discriminant and find the roots:</P>
          <BlockMath>{math`D = 10^2 - 4 \cdot 2 \cdot 8 = 100 - 64 = 36`}</BlockMath>
          <BlockMath>{math`
            t_1 = \frac{-10 + \sqrt{36}}{4} = \frac{-10 + 6}{4} = -1 \\ \boxed{t_1 = -1} >>
            t_2 = \frac{-10 - \sqrt{36}}{4} = \frac{-10 - 6}{4} = -4 \\ \boxed{t_2 = -4}
          `}</BlockMath>
          <P>Now do the reverse substitution:</P>
          <BlockMath>{math`
            t_1 = x^2 = -1 >>
            t_2 = x^2 = -4
          `}</BlockMath>
          <P>
            Contradiction! A number squared is always non-negative, but here it would have to be negative. So the
            original equation has no solutions, even though the substituted quadratic had two roots. A fun little trap.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>3x^4 + 2x^2 - 1 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['1/sqrt(3)', '-1/sqrt(3)']} />
        <ProblemAnswer>
          <BlockMath>{math`
            \boxed{x_1 = \frac{1}{\sqrt{3}}} >> \boxed{x_2 = -\frac{1}{\sqrt{3}}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Make the substitution <M>t = x^2</M>. Then we get a quadratic equation:
          </P>
          <BlockMath>3t^2 + 2t - 1 = 0</BlockMath>
          <P>Compute the discriminant and find the roots:</P>
          <BlockMath>{math`D = 2^2 - 4 \cdot 3 \cdot (-1) = 4 + 12 = 16`}</BlockMath>
          <BlockMath>{math`
            t_1 = \frac{-2 + \sqrt{16}}{6} = \frac{1}{3} \\ \boxed{t_1 = \frac{1}{3}} >>
            t_2 = \frac{-2 - \sqrt{16}}{6} = -1 \\ \boxed{t_2 = -1}
          `}</BlockMath>
          <P>
            As you can see, one root for <M>t</M> is negative, so you can't take its square root. That's why the
            biquadratic equation has only two solutions.
          </P>
          <BlockMath>{math`
            t_1 = x^2 = \frac{1}{3} \\
            x_{1,2} = \pm \sqrt{\frac{1}{3}} = \boxed{\pm \frac{1}{\sqrt{3}}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Reference to={$CONTENT.foundations.equations.quadratic.quadraticFormula.practice.$quadraticInF}>
      The 4th power is far from the limit. Equations of much higher degree can also reduce to quadratics. They're
      waiting for you in the Practicum... 👀
    </Reference>

    <H2>To infinity and beyond?</H2>

    <P>
      Since things are going so well, can we find general root formulas for equations of any degree? Surprisingly,{' '}
      <B>no</B>! Fourth-degree equations are the absolute maximum for which universal methods exist.
    </P>

    <Important
      title="No general formulas above degree 4"
      snippet={{
        key: 'Limits of formulas',
        title: 'Why there is no general formula for degree 5+',
        description: `
          For equations above the 4th degree, there is no universal "plug in numbers -- get roots" formula.
        `,
      }}
    >
      The Abel-Ruffini theorem proves that for equations of degree 5 and higher <B accent>there is no</B> general root
      formula. No more universal "Cardano formulas" or "Ferrari methods". Of course the roots still exist — you can
      approximate them using numerical methods — but a general "substitute -- get the answer" formula does not exist.
    </Important>
  </>
));
