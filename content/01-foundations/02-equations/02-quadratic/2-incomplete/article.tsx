import { QED } from '#project/utils/qed';

// #region Links
//

const whatIsQuadratic = $CONTENT.foundations.equations.quadratic.whatIsIt;
const quadraticEquation = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticEquation;
const equationSolution = $CONTENT.foundations.equations.elementary.article.$equationSolution;
const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const zeroFactors = $CONTENT.foundations.equations.elementary.practice.$zeroFactors;

//
// #endregion

// #region Todos
//

/**
 * Add a link to the square root and how to work with it when the article is ready.
 */

//
// #endregion

export const hasRootsLabel = 'Has solutions?';
export const rootsLabel = 'Equation roots';

export default defineProse({
  uniques: {
    quadraticMissingTerms: Term,
    c0Roots: Statement,
    b0Roots: Statement,
    doNotMemorize: Important,
  },
})(({ uniques }) => (
  <>
    <H1>What is it?</H1>

    <P>
      You have already met and learned to recognize <Dep to={whatIsQuadratic}>quadratic equations</Dep>. Now it is time
      to learn how to solve them. Before tackling full quadratic equations of general form, let's start with something
      simpler. Sometimes, a quadratic equation is missing some parts of the general form. Such quadratic equations are
      called incomplete.
    </P>

    <Term
      $={uniques.quadraticMissingTerms}
      title="Incomplete quadratic equation"
      snippet={{
        search: true,
        quick: true,
        seo: 'What is an incomplete quadratic equation?',
        description: `
          A quadratic equation in which coefficient B or C or both are zero.
        `,
      }}
    >
      <P>
        <Dep to={quadraticEquation}>Quadratic equation</Dep>, in which coefficient <M>B</M> or <M>C</M> or both are
        zero:
      </P>

      <Diagram>{math`
          flowchart TD
            quadratic[**Quadratic equations**] -->|All terms present| full[**Complete**<br>$$ Ax^2 + Bx + C = 0 $$]
            quadratic -->|Some terms missing| missing[**Incomplete**]
            missing --> missingBC[**B = 0 and C = 0**<br>$$ Ax^2 = 0 $$]
            missing --> missingC[**C = 0**<br>$$ Ax^2 + Bx = 0 $$]
            missing --> missingB[**B = 0**<br>$$ Ax^2 + C = 0 $$]
            class missing fill
      `}</Diagram>

      <P>Examples:</P>

      <BlockMath>{math`
        \underbrace{10x^2 = 0}_{B = 0 \ \text{and} \ C = 0} >>{big}
        \underbrace{x^2 + x = 0}_{C = 0} >>{big}
        \underbrace{3x^2 - 8 = 0}_{B = 0}
      `}</BlockMath>
    </Term>

    <P>
      What if coefficient <M>A</M> is zero? That can happen too, but then, by definition, it won't be a quadratic
      equation anymore, because the thing that makes it "quadratic" -- <M>x^2</M> -- will disappear!
    </P>

    <H1
      snippet={{
        quick: true,
        seo: 'How to solve incomplete quadratic equations?',
        title: 'Solving such equations',
        description: `
          Detailed analysis of solving all types of incomplete quadratic equations with derivation of general formulas.
        `,
      }}
    >
      Solving incomplete quadratic equations
    </H1>

    <P>
      The good news is that any of the three types of incomplete quadratic equations is solved very simply, without
      using any tricks or complicated calculations. Let's analyze each case separately.
    </P>

    <H2>If both "B" and "C" are zero</H2>

    <P>
      The simplest of all three types of incomplete quadratic equations -- when both coefficients <M>B</M> and <M>C</M>{' '}
      are zero:
    </P>

    <BlockMath>{math`
      8\brand{x^2} = 0 >>{big}
      -\frac{7}{2}\brand{x^2} = 0 >>{big}
      \frac{\sqrt{2} + \log_2{9}}{999 - 56^3}\brand{x^2} = 0
    `}</BlockMath>

    <P>
      It absolutely doesn't matter what stands next to <M>x^2</M>. The point is that this "something" is multiplied by
      our unknown, and the result must be zero. How do we get zero with 100% guarantee during multiplication? Very
      simple: zero will result if the unknown itself is zero! The equation always has a unique solution:
    </P>

    <BlockMath>{math`
      8 \cdot \brand{0} = 0 \\ \boxed{x = 0} >>{big}
      -\frac{7}{2} \cdot \brand{0} = 0 \\ \boxed{x = 0} >>{big}
      \frac{\sqrt{2} + \log_2{9}}{999 - 56^3} \cdot \brand{0} = 0 \\ \boxed{x = 0}
    `}</BlockMath>

    <Statement title='Quadratic equation root when "B" = 0 and "C" = 0'>
      <StatementMain>
        <P>
          <B>Any</B> incomplete quadratic equation with zero coefficients <M>B</M> and <M>C</M> <B>always</B> has a
          unique solution <M>x = 0</M> and it doesn't matter what coefficient <M>A</M> is!
        </P>

        <Diagram>{math`
          flowchart LR
            bc0[$$ Ax^2 = 0 $$] --> solution[$$ x = 0 $$]
            class solution fill
        `}</Diagram>
      </StatementMain>
      <StatementProof>
        <P>
          Whatever coefficient <M>A</M> is, substituting <M>x = 0</M> into the equation literally multiplies it by zero
          and results in a true equality <M>0 = 0</M>. Therefore <M>x = 0</M> -- is the only{' '}
          <Dep to={equationSolution}>solution to the equation</Dep>.
        </P>
        <P>{QED}</P>
      </StatementProof>
    </Statement>

    <H2>If "C" is zero</H2>

    <P>
      The next type of incomplete quadratic equations -- when coefficient <M>C</M> is zero. To solve them, it's enough
      to master the <Dep to={sameActionRule}>same action rule</Dep> and the ability to solve equations using the{' '}
      <Dep to={zeroFactors}>set of factors equal to zero</Dep>.
    </P>

    <Problems title='Quadratic equations when "C" = 0' level="easy">
      <P>Solve the equation:</P>
      <SubProblem label="Sample">
        <ProblemDescription>
          <BlockMath>x^2 + 5x = 0</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} set={[0, -5]} />
        <ProblemHint>
          Factor <M>x</M> out.
        </ProblemHint>
        <ProblemAnswer>
          <M>x_1 = 0, \quad x_2 = -5</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In the left part of the equation, we see that both terms have a common factor <M>x</M>. We factor it out:
          </P>
          <BlockMath>x(x + 5) = 0</BlockMath>
          <P>
            We have already <Dep to={zeroFactors}>solved</Dep> similar equations involving a set of factors equal to
            zero. It is enough to find separately for which <M>x</M> each of the factors becomes zero. After all, if at
            least one of them becomes zero, it will be multiplied by all other factors, and the entire left side will
            become zero.
          </P>
          <Diagram>{math`
            flowchart TD
              base["$$ x(x+5) = 0 $$"] -->|Sub-equation 1| factor1[$$ x = 0 $$]
              base -->|Sub-equation 2| factor2[$$ x + 5 = 0 $$] --> solution2[$$ x = -5 $$]
              class factor1,solution2 fill
          `}</Diagram>
          <P>
            So, at value <M>x = 0</M> or <M>x = -5</M> the equation turns into a true equality. These are the roots of
            our quadratic equation.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>8x=x^2</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} set={[0, 8]} />
        <ProblemHint>
          Group the x's in one part of the equation using the <Dep to={sameActionRule}>same action rule</Dep>.
        </ProblemHint>
        <ProblemAnswer>
          <M>x_1 = 0, \quad x_2 = 8</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Let's move all x's to the right side of the equation. To do this, we need to get rid of <M>8x</M> on the
            left. Using the same action rule, we subtract <M>8x</M> from both sides of the equation:
          </P>
          <BlockMath>0 = x^2 - 8x</BlockMath>
          <P>
            Factor out <M>x</M> and solve two sub-equations:
          </P>
          <BlockMath>0 = x(x - 8)</BlockMath>
          <P>
            We get two answers: <M>x_1 = 0</M> and <M>x_2 = 8</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^2 - 7x = 0</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} set={[0, [3.5, '7/2']]} />
        <ProblemAnswer>
          <M>{math`x_1 = 0, \quad x_2 = \dfrac{7}{2}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Factor out <M>x</M>:
          </P>
          <BlockMath>x(2x - 7) = 0</BlockMath>
          <P>
            We get two sub-equations. In the first, the obvious root is <M>x = 0</M>. In the second, first add <M>7</M>{' '}
            to both sides:
          </P>
          <BlockMath>2x-7 = 0 \\ 2x = 7</BlockMath>
          <P>
            Now divide both sides of the equation by <M>2</M>:
          </P>
          <BlockMath>{math`x = \frac{7}{2}`}</BlockMath>
          <P>
            So, the roots of the equation: <M>x_1 = 0</M> and <M>{math`x_2 = \frac{7}{2}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{2}{7}x - \frac{1}{35}x^2 = 0`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} set={[0, -10]} />
        <ProblemAnswer>
          <M>{math`x_1 = 0, \quad x_2 = -10`}</M>
        </ProblemAnswer>
        <ProblemHint>
          Bring fractions to a common denominator. Then get rid of denominators by multiplying both parts of the
          equation by the common denominator.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Let's bring the fractions to a common denominator. To do this, it is enough to multiply the numerator and
            denominator of the left fraction by <M>5</M>:
          </P>
          <BlockMath>{math`
            \frac{2\cdot\brand{5}}{7\cdot\brand{5}}x - \frac{1}{35}x^2 = 0 \\
            \frac{10}{35}x - \frac{1}{35}x^2 = 0
          `}</BlockMath>
          <P>
            Now, using the same action rule, multiply both sides of the equation by the common denominator <M>35</M> to
            get rid of the fractions:
          </P>
          <BlockMath>{math`
            \brand{35} \cdot \left( \frac{10}{35}x - \frac{1}{35}x^2 \right) = 0 \cdot \brand{35} \\
            \cancel{35}\frac{10}{\cancel{35}}x - \cancel{35}\frac{1}{\cancel{35}}x^2 = 0 \\
            10x - x^2 = 0
          `}</BlockMath>
          <P>
            Now factor out <M>x</M>:
          </P>
          <BlockMath>x(10 - x) = 0</BlockMath>
          <P>
            We get two sub-equations. In the first, the obvious root is <M>x = 0</M>. In the second:
          </P>
          <BlockMath>{math`10 - x = 0 \\ \boxed{10 = x}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Statement $={uniques.c0Roots} title='Quadratic equation roots when "C" = 0'>
      <StatementMain>
        <P>
          <B>Any</B> incomplete quadratic equation with zero coefficient <M>C</M> <B>always</B> has two roots, which can
          be found by formulas:
        </P>
        <Diagram>{math`
          flowchart LR
            c0["$$ Ax^2 + Bx = 0 $$"]
            c0 --> solution1["$$ x_1 = 0 $$"]
            c0 --> solution2["$$ x_2 = -\frac{B}{A} $$"]
            class solution1,solution2 fill
        `}</Diagram>
      </StatementMain>
      <StatementProof>
        <P>
          Factor out <M>x</M>:
        </P>
        <BlockMath>{math`
          Ax^2 + Bx = 0 \\
          x(Ax + B) = 0
        `}</BlockMath>
        <P>
          We get a <Dep to={zeroFactors}>standard equation form</Dep> with a set of factors on one side and zero on the
          other. Such an equation can be split into two sub-equations and solved separately. In the first case, we get
          the obvious root <M>x = 0</M>. In the second case, we get an elementary equation <M>Ax + B = 0</M> and solve
          it for <M>x</M> (since coefficients <M>A</M> and <M>B</M> are known to us).
        </P>
        <Diagram>{math`
          flowchart TD
            base["$$ x(Ax + B) = 0 $$"] -->|Sub-equation 1| factor1[$$ x = 0 $$]
            base -->|Sub-equation 2| factor2[$$ Ax + B = 0 $$] --> solution2[$$ x = -\frac{B}{A} $$]
            class factor1,solution2 fill
        `}</Diagram>
        <P>{QED}</P>
      </StatementProof>
    </Statement>

    <P>
      The benefit of the general formula is that you don't need to factor out and do other transformations every time.
      It suffices to just look at the equation, determine coefficients <M>A</M> and <M>B</M> and immediately substitute
      them into the formula.
    </P>

    <BlockMath>{math`
      0 = x + x^2 \\ \boxed{x_1 = 0} \\ \boxed{x_2 = -\frac{1}{1} = -1} >>{big}
      -16x = 4x^2 \\ \boxed{x_1 = 0} \\ \boxed{x_2 = -\frac{-16}{4} = 4} >>{big}
      \frac{1}{2}x^2 + 20x = 0 \\ \boxed{x_1 = 0} \\ \boxed{x_2 = -\frac{20}{\frac{1}{2}} = -\frac{20}{1}\cdot\frac{2}{1} = -40}
    `}</BlockMath>

    <H2>If "B" is zero</H2>

    <P>
      The last type of incomplete quadratic equations -- when coefficient <M>B</M> is zero. The "middle" of the equation
      disappears, and we are left only with <M>Ax^2</M> alone with some constant term <M>C</M>. These are solved very
      simply. Ordinary understanding of what a square root is and how to extract it is sufficient.
    </P>

    <Problems title='Quadratic equations when "B" = 0' level="easy">
      <P>Solve the equation:</P>
      <SubProblem label="Sample 1">
        <ProblemDescription>
          <BlockMath>2x^2 - 18 = 0</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} hint="Yes/No" answer={/^yes$/iu}>
          <ProblemCheck label={rootsLabel} set={[-3, 3]} />
        </ProblemCheck>
        <ProblemHint>
          Isolate <M>x^2</M> on the left side of the equation. Then use the understanding of what a square root is.
        </ProblemHint>
        <ProblemAnswer>
          <M>x_1 = -3, \quad x_2 = 3</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Isolate <M>x^2</M>. To do this, first add <M>18</M> to both parts of the equation, and then divide both
            parts by <M>2</M>:
          </P>
          <BlockMath>{math`
            2x^2 = 18 \\
            x^2 = 9
          `}</BlockMath>
          <P>
            Now, use your brain. Some unknown number <M>x</M> was squared, that is, multiplied by itself, and we got{' '}
            <M>9</M>. What number is this? Of course, <M>3</M> and <M>-3</M>, because both of these numbers when
            multiplied by themselves will give <M>9</M>!
          </P>
          <P>
            So, we got two roots: <M>x_1 = 3</M> and <M>x_2 = -3</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem label="Sample 2">
        <ProblemDescription>
          <BlockMath>{math`5=-\frac{1}{20}x^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} hint="Yes/No" answer={/^no$/iu} />
        <ProblemHint>
          To leave <M>x^2</M> alone in the right part, multiply both parts of the equation by <M>-20</M>.
        </ProblemHint>
        <ProblemHint>Do numbers that give a negative number when multiplied by themselves exist?</ProblemHint>
        <ProblemAnswer>
          <P>This equation has no solutions.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            To get <M>x^2</M> alone on the right side, multiply both sides of the equation by <M>-20</M>:
          </P>
          <BlockMath>{math`
            \brand{-20} \cdot 5 = -\frac{1}{20}x^2 \cdot \brand{-20} \\
            -100 = \cancel{-} \ \frac{\cancel{20}}{\cancel{20}} x^2 \\
            -100 = x^2
          `}</BlockMath>
          <P>
            Some unknown number <M>x</M> was multiplied by itself, and we got <M>-100</M>. But such a number does not
            exist! After all, any number multiplied by itself will give a positive result. So, the equation has no
            solutions!
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2}{4} - 9 = 0`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} hint="Yes/No" answer={/^yes$/iu}>
          <ProblemCheck label={rootsLabel} set={[-6, 6]} />
        </ProblemCheck>
        <ProblemHint>
          Multiply both parts of the equation by <M>4</M> to get rid of the fraction. Then isolate <M>x^2</M> and
          extract the square root.
        </ProblemHint>
        <ProblemAnswer>
          <M>x_1 = -6, \quad x_2 = 6</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Working with fractions is inconvenient. To get rid of them, multiply both parts of the equation by <M>4</M>:
          </P>
          <BlockMath>{math`
            \brand{4} \cdot \left( \frac{x^2}{4} - 9 \right) = 0 \cdot \brand{4} \\
            \cancel{4} \cdot \frac{x^2}{\cancel{4}} - 4 \cdot 9 = 0 \\
            x^2 - 36 = 0
          `}</BlockMath>
          <P>
            Now, add <M>36</M> to both sides of the equation to isolate <M>x^2</M>:
          </P>
          <BlockMath>{math`
            x^2 = 36
          `}</BlockMath>
          <P>
            What number multiplied by itself will give <M>36</M>? Of course, these are numbers <M>6</M> and <M>-6</M>!
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`0 = - 3x^2 - 12`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} hint="Yes/No" answer={/^no$/iu} />
        <ProblemAnswer>
          <M>x_1 = -2, \quad x_2 = 2</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Multiply both parts of the equation by <M>-1</M> to get rid of minuses:
          </P>
          <BlockMath>{math`0 = 3x^2 + 12`}</BlockMath>
          <P>
            Now divide both parts of the equation by <M>3</M> to simplify numbers:
          </P>
          <BlockMath>{math`
            \frac{0}{\brand{3}} = \frac{3x^2 + 12}{\brand{3}} \\
            0 = \frac{\cancel{3}x^2}{\cancel{3}} + \frac{12}{3} \\
            0 = x^2 + 4
          `}</BlockMath>
          <P>
            Subtract <M>4</M> from both parts of the equation:
          </P>
          <BlockMath>{math`-4 = x^2`}</BlockMath>
          <P>
            What number multiplied by itself gives <M>-4</M>? Such a number does not exist, so the equation has no
            solutions!
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 = 3`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} hint="Yes/No" answer={/^yes$/iu} />
        <ProblemHint>Please note that the answer is not always beautiful...</ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = -\sqrt{3}, \quad x_2 = \sqrt{3}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            What number multiplied by itself will give <M>3</M>? There is no such integer. But there are irrational
            numbers! Numbers <M>\sqrt{3}</M> and <M>-\sqrt{3}</M> are, by definition of the square root, the numbers
            that give <M>3</M> when multiplied by themselves!
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Statement $={uniques.b0Roots} title='Quadratic equation roots when "B" = 0'>
      <StatementMain>
        <P>
          <B>Any</B> incomplete quadratic equation with zero coefficient <M>B</M> <B>potentially</B> (if the root can be
          extracted) has two roots, which can be found by formulas:
        </P>
        <Diagram>{math`
          flowchart LR
            b0["$$ Ax^2 + C = 0 $$"] --> roots["$$ x_{1,2} = \pm \sqrt{-\frac{C}{A}} $$"]
            class roots fill
        `}</Diagram>
      </StatementMain>
      <StatementProof>
        <P>
          Isolate <M>x^2</M> on the left side of the equation. To do this, first subtract <M>C</M> from both sides of
          the equation, and then divide both sides by <M>A</M>:
        </P>
        <BlockMath>{math`
          Ax^2 + C = 0 \\
          Ax^2 = -C \\
          x^2 = -\frac{C}{A}
        `}</BlockMath>
        <P>
          Some unknown number <M>x</M> multiplied by itself gave this thingy on the right. If a square root can be
          extracted from it, we get two roots (identical in absolute value, but different in sign):
        </P>
        <BlockMath>{math`
          x = \pm \sqrt{-\frac{C}{A}}
        `}</BlockMath>
        <P>If the square root cannot be extracted, then this equation has no solutions either.</P>
        <P>{QED}</P>
      </StatementProof>
    </Statement>

    <P>Now you can use the derived general formula to calculate roots instantly:</P>

    <BlockMath>{math`
      x^2 - 16 = 0 \\ x_{1,2} = \pm \sqrt{-\frac{-16}{1}} \\ x_{1,2} = \pm \sqrt{16} \\ \boxed{x_{1,2} = \pm 4} >>{big}
      3x^2 + 12 = 0 \\ x_{1,2} = \pm \sqrt{-\frac{12}{3}} \\ x_{1,2} = \pm \sqrt{-4} \\ \boxed{\text{(no solutions)}} >>{big}
      5x^2 - 9 = 0 \\ x_{1,2} = \pm \sqrt{-\frac{-9}{5}} \\ x_{1,2} = \pm \sqrt{\frac{9}{5}} \\ \boxed{x_{1,2} = \pm \frac{3}{\sqrt{5}}}
    `}</BlockMath>

    <H1>How to use?</H1>

    <P>
      We figured out how to solve all types of incomplete quadratic equations. No cunning tricks or complicated
      transformations. It was quite simple, right? Moreover, we even derived general formulas for roots for each type of
      incomplete quadratic equation.
    </P>

    <Important $={uniques.doNotMemorize} title="Do not memorize general formulas!">
      <P>
        It may seem that since we derived general formulas, they must be memorized. This is not true. Do not learn them.
        Most people don't even remember them. The most important thing is --{' '}
        <B accent>to be able to quickly notice that the equation is incomplete</B> (consists of one or two terms), which
        means it is solved quickly and simply!
      </P>
    </Important>

    <P>
      Ah, if only quadratic equations in general form could be solved so simply! But things are somewhat more
      complicated there…
    </P>
  </>
));
