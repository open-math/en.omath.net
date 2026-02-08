import { QED } from '#project/utils/qed';

import article, { hasRootsLabel, rootsLabel } from './article';
import summary from './summary';

// #region Links
//

const equationSolution = $CONTENT.foundations.equations.elementary.article.$equationSolution;
const quadraticEquation = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticEquation;
const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;

//
// #endregion

// #region Todos
//

/**
 * Add a link to the article "Why division by zero is impossible".
 */

/**
 * Add a link to the article "What is a square root".
 */

//
// #endregion

export default defineProse()(() => (
  <>
    <Problem title="Haste Makes Waste" level="easy" method>
      <ProblemDescription>
        <P>Max needs to solve the following equation at the blackboard:</P>
        <BlockMath>4x^2 = 80x</BlockMath>
        <P>
          He remembered the <Dep on={article.uniques.c0Roots}>general formula</Dep> for solving incomplete quadratic
          equations when <M>C = 0</M> and used it:
        </P>
        <BlockMath>{math`
          x_1 = 0 >>{big} x_2 = -\frac{B}{A} = -\frac{80}{4} = -20
        `}</BlockMath>
        <P>
          Did he solve the equation correctly? Solve the equation, check the roots. If he made a mistake, clearly state
          what happened and how to avoid it.
        </P>
      </ProblemDescription>
      <ProblemHint>
        This is somehow related to the <Dep on={quadraticEquation}>general form</Dep> of a quadratic equation.
      </ProblemHint>
      <ProblemAnswer>
        <P>
          Correct roots: <M>0</M> and <M>20</M>.
        </P>
        <P>
          Max's mistake was that he did not bring the quadratic equation to the{' '}
          <Dep on={quadraticEquation}>general form</Dep> (trinomial on one side, zero on the other). Therefore, he used
          the coefficient <M>B</M> with a plus sign instead of a minus!
        </P>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Finding the correct roots">
          <P>
            First, let's verify if Max's roots are correct. Let's solve it manually. We group all terms on the left side
            of the equation. To do this, we subtract <M>80x</M> from both sides using the same action rule:
          </P>
          <BlockMath>4x^2 - 80x = 0</BlockMath>
          <P>
            To simplify, divide both sides of the equation by <M>4</M>:
          </P>
          <BlockMath>x^2 - 20x = 0</BlockMath>
          <P>
            Now let's factor out <M>x</M> and solve two sub-equations (equate each factor to zero):
          </P>
          <BlockMath>x(x - 20) = 0</BlockMath>
          <BlockMath>{math`
            \boxed{x_1=0} >>{big} x_2 - 20=0 \\ \boxed{x_2=20}
          `}</BlockMath>
          <P>
            Our second root is <M>20</M>, and Max's result was <M>-20</M>. So, he solved the equation incorrectly. How
            is that possible? He used the general formula!
          </P>
        </ProblemSection>
        <ProblemSection title="Max's Mistake">
          <P>
            Max used the general formula but completely forgot the <B>form</B> of the quadratic equation for which it
            was derived. It was derived for the form <M>Ax^2 + Bx = 0</M>, that is, for the{' '}
            <Dep on={quadraticEquation}>general form</Dep> of a quadratic equation!
          </P>
          <P>
            However, in this problem, the equation was in the form <M>4x^2 = 80x</M>, which is not reduced to the
            general form. Therefore, he used the coefficient <M>B</M> with a plus sign instead of a minus!
          </P>
        </ProblemSection>
      </ProblemSolution>
      <ProblemNote>
        <P>Always bring the quadratic equation to the general form before determining its coefficients!</P>
      </ProblemNote>
    </Problem>

    <Problems
      title="Solving incomplete equations"
      level="easy"
      snippet={{
        seo: 'Problems on solving incomplete quadratic equations',
        description: `
          A set of problems to practice solving all types of incomplete quadratic equations.
          With detailed solutions and answers.
      `,
      }}
    >
      <P>
        First, solve the incomplete quadratic equation manually. After that, be sure to find the roots using the{' '}
        <Dep on={summary.uniques.allFormulas}>general formulas</Dep> and compare the results.
      </P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + x = 0</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} answers={[0, -1]} />
        <ProblemAnswer>
          Equation roots: <M>0</M> and <M>-1</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In this equation, the coefficient <M>C</M> is zero. Therefore, we can factor out <M>x</M> and solve two
            sub-equations (equate each factor to zero):
          </P>
          <BlockMath>{math`
            x(x + 1) = 0
          `}</BlockMath>
          <BlockMath>{math`
            \boxed{x_1=0} >>{big} x_2 + 1 = 0 \\ \boxed{x_2=-1}
          `}</BlockMath>
          <Hr />
          <P>Check with the general formula:</P>
          <BlockMath>{math`
            x_1 = 0 \\ x_2 = -\frac{B}{A} = -\frac{1}{1} = -1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>3y=7y^2</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} answers={[0, '3/7']} />
        <ProblemAnswer>
          Equation roots: <M>0</M> and <M>{math`\dfrac{3}{7}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Let's group the terms on one side of the equation, for example, on the right. This leaves zero on the left.
            To do this, subtract <M>3y</M> from both sides of the equation using the same action rule:
          </P>
          <BlockMath>0 = 7y^2 - 3y</BlockMath>
          <P>
            Now let's factor out <M>y</M> and solve two sub-equations (equate each factor to zero):
          </P>
          <BlockMath>0 = y(7y - 3)</BlockMath>
          <BlockMath>{math`
            \boxed{0=y_1} >>{big} 0 = 7y_2-3 \\ \boxed{\frac{3}{7}=y_2}
          `}</BlockMath>
          <Hr />
          <P>Check with the general formula:</P>
          <BlockMath>{math`
            y_1 = 0 \\ y_2 = -\frac{B}{A} = -\frac{-3}{7} = \frac{3}{7}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`0=-\frac{18}{\sqrt{3}}z^2 -\frac{9}{\sqrt{3}}z`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} answers={[0, ['-1/2', -0.5]]} />
        <ProblemAnswer>
          Equation roots: <M>0</M> and <M>{math`-\dfrac{1}{2}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Get rid of roots in denominators by multiplying both sides by <M>{math`\sqrt{3}`}</M> using the same action
            rule:
          </P>
          <BlockMath>0 = -18z^2 - 9z</BlockMath>
          <P>
            Multiply both sides by <M>-1</M> to remove the minus signs:
          </P>
          <BlockMath>0 = 18z^2 + 9z</BlockMath>
          <P>
            Notice that both terms are divisible by <M>9</M>, so divide both sides of the equation by this number:
          </P>
          <BlockMath>0 = 2z^2 + z</BlockMath>
          <P>
            Now let's factor out <M>z</M> and solve two sub-equations (equate each factor to zero):
          </P>
          <BlockMath>0 = z(2z + 1)</BlockMath>
          <BlockMath>{math`
            \boxed{0=z_1} >>{big} 0 = 2z_2+1 \\ \boxed{-\frac{1}{2}=z_2}
          `}</BlockMath>
          <Hr />
          <P>Check with the general formula:</P>
          <BlockMath>{math`
            z_1 = 0 \\ z_2 = -\frac{B}{A} = -\frac{-\frac{18}{\sqrt{3}}}{-\frac{9}{\sqrt{3}}} = -\frac{18}{\cancel{\sqrt{3}}}\cdot\frac{\cancel{\sqrt{3}}}{9} = -\frac{18}{9} = -\frac{1}{2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{1}{2}t + t^2 = -9t^2 - \frac{2}{4}t`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} answers={[0, ['-1/10', -0.1]]} />
        <ProblemAnswer>
          Equation roots: <M>0</M> and <M>{math`-\dfrac{1}{10}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>Group all terms on the left side of the equation, sequentially applying the same action rule:</P>
          <BlockMath>{math`\frac{1}{2}t + t^2 + 9t^2 + \frac{2}{4}t = 0`}</BlockMath>
          <P>Combine like terms:</P>
          <BlockMath>{math`t + 10t^2 = 0`}</BlockMath>
          <P>
            Factor out <M>t</M> and solve two sub-equations (equate each factor to zero):
          </P>
          <BlockMath>{math`t(1 + 10t) = 0`}</BlockMath>
          <BlockMath>{math`
            \boxed{t_1=0} >>{big} 1 + 10t_2 = 0 \\ 10t_2 = -1 \\ \boxed{t_2 = -\frac{1}{10}}
          `}</BlockMath>
          <Hr />
          <P>Check with the general formula:</P>
          <BlockMath>{math`
            t_1 = 0 \\ t_2 = -\frac{B}{A} = -\frac{1}{10}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`0=\frac{\sqrt{2}}{999}x^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} answer={0} />
        <ProblemAnswer>
          The equation has only one root: <M>0</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The only way to get zero on the right is if <M>x=0</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 100 = 0</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} yes>
          <ProblemCheck label={rootsLabel} answers={[10, -10]} />
        </ProblemCheck>
        <ProblemAnswer>
          Equation roots: <M>10</M> and <M>-10</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Isolate <M>x^2</M>. It is hindered by the subtraction of <M>100</M>. Using the same action rule, add{' '}
            <M>100</M> to both sides of the equation:
          </P>
          <BlockMath>{math`x^2 = 100`}</BlockMath>
          <P>
            What number must be squared to get <M>100</M>? Obviously, these are numbers <M>10</M> and <M>-10</M>.
          </P>
          <Hr />
          <P>Check with the general formula:</P>
          <BlockMath>{math`
            x_{1,2} = \pm\sqrt{-\frac{C}{A}} = \pm\sqrt{-\frac{-100}{1}} = \pm\sqrt{100} = \pm 10
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>0 = 9r^2 - 16</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} yes>
          <ProblemCheck label={rootsLabel} answers={['-4/3', '4/3']} />
        </ProblemCheck>
        <ProblemAnswer>
          Equation roots: <M>{math`\dfrac{4}{3}`}</M> and <M>{math`-\dfrac{4}{3}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Isolate <M>r^2</M>. It is hindered by the subtraction of <M>16</M>. Using the same action rule, add{' '}
            <M>16</M> to both sides of the equation:
          </P>
          <BlockMath>{math`9r^2 = 16`}</BlockMath>
          <P>
            Divide both sides of the equation by <M>9</M> to leave <M>r^2</M> alone:
          </P>
          <BlockMath>{math`r^2 = \frac{16}{9}`}</BlockMath>
          <P>
            What should be multiplied by itself to get <M>{math`\frac{16}{9}`}</M>? There should be <M>4</M> in the
            numerator and <M>3</M> in the denominator, so these are fractions <M>{math`\frac{4}{3}`}</M> and{' '}
            <M>{math`-\frac{4}{3}`}</M>!
          </P>
          <BlockMath>{math`r = \pm\frac{4}{3}`}</BlockMath>
          <Hr />
          <P>Check with the general formula:</P>
          <BlockMath>{math`
            r_{1,2} = \pm\sqrt{-\frac{C}{A}} = \pm\sqrt{-\frac{-16}{9}} = \pm\sqrt{\frac{16}{9}} = \pm\frac{4}{3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{64}{\sqrt{111}} + \frac{16}{\sqrt{111}}j^2 = 0`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} no />
        <ProblemAnswer>The equation has no roots.</ProblemAnswer>
        <ProblemSolution>
          <P>Using the same action rule, we get rid of the term without a variable:</P>
          <BlockMath>{math`
            \frac{16}{\sqrt{111}}j^2 = -\frac{64}{\sqrt{111}}
          `}</BlockMath>
          <P>
            Now divide both sides of the equation by <M>{math`\frac{16}{\sqrt{111}}`}</M> to isolate <M>j^2</M>:
          </P>
          <BlockMath>{math`
            \frac{\cancel{\frac{16}{\sqrt{111}}}}{\cancel{\frac{16}{\sqrt{111}}}}j^2 = \frac{-\frac{64}{\sqrt{111}}}{\frac{16}{\sqrt{111}}}
            \\
            j^2 = -\frac{64}{\cancel{\sqrt{111}}} \cdot \frac{\cancel{\sqrt{111}}}{16}
            \\
            j^2 = -\frac{64}{16}
            \\
            j^2 = -4
          `}</BlockMath>
          <P>
            What number must be squared to get <M>-4</M>? None, because squaring always gives a positive number! So the
            equation has no roots.
          </P>
          <Hr />
          <P>Check with the general formula:</P>
          <BlockMath>{math`
            j_{1,2} = \pm\sqrt{-\frac{C}{A}} = \pm\sqrt{-\frac{\frac{64}{\sqrt{111}}}{\frac{16}{\sqrt{111}}}} = \pm\sqrt{-\frac{64}{\cancel{\sqrt{111}}}\cdot\frac{\cancel{\sqrt{111}}}{16}} = \pm\sqrt{-4}
          `}</BlockMath>
          <P>You cannot take a root of a negative number, so there are no roots.</P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{21}{4}m^2 - 10 = 6 - 7m^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} yes>
          <ProblemCheck label={rootsLabel} answers={['8/7', '-8/7']} />
        </ProblemCheck>
        <ProblemAnswer>
          Equation roots: <M>{math`\dfrac{8}{7}`}</M> and <M>{math`-\dfrac{8}{7}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            To get rid of the fraction, multiply both sides of the equation by <M>4</M> using the same action rule:
          </P>
          <BlockMath>{math`21m^2 - 40 = 24 - 28m^2`}</BlockMath>
          <P>Group all terms with the variable on the left side, and without it on the right:</P>
          <BlockMath>{math`21m^2 + 28m^2 = 24 + 40`}</BlockMath>
          <P>Combine like terms:</P>
          <BlockMath>{math`49m^2 = 64`}</BlockMath>
          <P>Divide both sides of the equation by 49:</P>
          <BlockMath>{math`m^2 = \frac{64}{49}`}</BlockMath>
          <P>
            Some fraction multiplied by itself must give <M>{math`\frac{64}{49}`}</M>. For this, the numerator must be{' '}
            <M>8</M>, and the denominator <M>7</M>. So, these are fractions <M>{math`\frac{8}{7}`}</M> and{' '}
            <M>{math`-\frac{8}{7}`}</M>.
          </P>
          <Hr />
          <P>After combining like terms, bring the equation to the general form:</P>
          <BlockMath>{math`49m^2 - 64 = 0`}</BlockMath>
          <P>Check with the general formula:</P>
          <BlockMath>{math`
            m_{1,2} = \pm\sqrt{-\frac{C}{A}} = \pm\sqrt{-\frac{-64}{49}} = \pm\sqrt{\frac{64}{49}} = \pm\frac{8}{7}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>(30k + 2)k + 42k^2 = 72 + 2k</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} yes>
          <ProblemCheck label={rootsLabel} answers={[1, -1]} />
        </ProblemCheck>
        <ProblemAnswer>
          Equation roots: <M>1</M> and <M>-1</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the parentheses:</P>
          <BlockMath>{math`30k^2 + 2k + 42k^2 = 72 + 2k`}</BlockMath>
          <P>Combine like terms:</P>
          <BlockMath>{math`72k^2 + 2k = 72 + 2k`}</BlockMath>
          <P>
            Notice that all terms on both sides of the equation are divisible by <M>2</M>. Divide:
          </P>
          <BlockMath>{math`36k^2 + k = 36 + k`}</BlockMath>
          <P>
            Subtract <M>k</M> from both sides of the equation:
          </P>
          <BlockMath>{math`36k^2 = 36`}</BlockMath>
          <P>
            Divide both sides of the equation by <M>36</M>:
          </P>
          <BlockMath>{math`k^2 = 1`}</BlockMath>
          <P>
            What number must be squared to get <M>1</M>? These are numbers <M>1</M> and <M>-1</M>. We don't even need to
            check with the general formula. Everything is obvious here.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Sign property" level="easy" method>
      <ProblemDescription>
        <P>
          Prove that if in an incomplete quadratic equation with <M>B=0</M> the remaining two coefficients have the same
          sign, then the equation has no roots. And if the signs are different, then there are two roots.
        </P>
        <P>Using this fact, mentally determine whether the following equations have solutions:</P>
        <BlockMath>{math`
          3x^2 + 5 = 0 >>{big}
          -2x^2 = -7 >>{big}
          9999 = -x^2 >>{big}
          -4x^2 - 1 + 10 = 0
        `}</BlockMath>
      </ProblemDescription>
      <ProblemCheck label="Equation 1. Has solutions?" no />
      <ProblemCheck label="Equation 2. Has solutions?" yes />
      <ProblemCheck label="Equation 3. Has solutions?" no />
      <ProblemCheck label="Equation 4. Has solutions?" yes />
      <ProblemHint>
        Use the <Dep on={article.uniques.b0Roots}>general root formula</Dep> for an incomplete quadratic equation when{' '}
        <M>B=0</M>.
      </ProblemHint>
      <ProblemAnswer>
        <P>The second and fourth equations have solutions.</P>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Proof">
          <P>
            Recall the <Dep on={article.uniques.b0Roots}>general root formula</Dep> for an incomplete quadratic equation
            when <M>B=0</M>:
          </P>
          <BlockMath>{math`x_{1,2} = \pm\sqrt{-\frac{C}{A}}`}</BlockMath>
          <P>
            A square root can only be taken from a positive number. In other words, this part must <B>necessarily</B> be
            positive:
          </P>
          <BlockMath>{math`-\frac{C}{A} > 0`}</BlockMath>
          <P>
            Consider all possible variants of signs of <M>C</M> and <M>A</M>.
          </P>
          <List type="ul">
            <Li>
              <P>
                <M>C</M> and <M>A</M> are both positive numbers. Then their quotient is also a positive number.
                Multiplied by the minus in front of the fraction, the result will be a negative number, and the root
                cannot be taken.
              </P>
              <P>
                <B>Signs are the same -- no roots.</B>
              </P>
            </Li>
            <Li>
              <P>
                <M>C</M> and <M>A</M> are both negative numbers. Then their quotient is also a positive number.
                Multiplied by the minus in front of the fraction, the result will be a negative number, and the root
                cannot be taken.
              </P>
              <P>
                <B>Signs are the same -- no roots.</B>
              </P>
            </Li>
            <Li>
              <P>
                <M>C</M> and <M>A</M> have different signs. Then their quotient is a negative number. Multiplied by the
                minus in front of the fraction, the result will be a positive number, and the root can be taken.
              </P>
              <P>
                <B>Signs are different -- roots exist.</B>
              </P>
            </Li>
          </List>
          <P>
            So we have proved that such incomplete quadratic equations will have roots only if the remaining two
            coefficients have different signs.
          </P>
          <P>{QED}</P>
        </ProblemSection>
        <ProblemSection title="Checking for Solutions">
          <List type="ol">
            <Li>
              Coefficients <M>3</M> and <M>5</M>. Signs are the same. No solutions.
            </Li>
            <Li>
              Both coefficients have a minus sign, but one of them is on the other side of the equation. If we add{' '}
              <M>7</M> to both sides of the equation, we get <M>-2x^2 + 7 = 0</M>. Coefficients have different signs.
              Solutions exist.
            </Li>
            <Li>
              After grouping the terms on one side (it doesn't matter which), the coefficients will be <M>9999</M> and{' '}
              <M>1</M>, or <M>-1</M> and <M>-9999</M>. In both cases, the signs are the same. No solutions.
            </Li>
            <Li>
              Combine like terms (add <M>-1</M> and <M>10</M>) and get coefficients <M>-4</M> and <M>9</M>. Signs are
              different. Solutions exist.
            </Li>
          </List>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="Stressed Beam" level="easy" applied>
      <ProblemDescription>
        The bending stress <M>\sigma</M> in a steel beam supporting a bridge is equal to half the square of its
        deflection <M>r</M> from the central axis. If the stress exceeds <M>8</M>, irreversible deformation of the beam
        will begin. What is the maximum distance from the central axis that a point on the beam can reach without
        deforming?
      </ProblemDescription>
      <ProblemCheck label={rootsLabel} answer={4} />
      <ProblemHint>Write down the equation to find the critical deflection of the beam and solve it.</ProblemHint>
      <ProblemAnswer>
        The maximum must be no more than <M>4</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let's translate the text into the language of mathematics. We have some "bending stress" <M>\sigma</M>, which
          depends on the deflection <M>r</M>. Moreover, the dependence is equal to half the square of the deflection:
        </P>
        <BlockMath>{math`\sigma = \frac{r^2}{2}`}</BlockMath>
        <P>
          We need to find the maximum deflection <M>r</M> at which the stress does not exceed <M>8</M>. That is, instead
          of <M>\sigma</M>, we substitute the maximum permissible value of <M>8</M> and solve the equation:
        </P>
        <BlockMath>{math`8 = \frac{r^2}{2}`}</BlockMath>
        <P>
          Multiply both sides of the equation by <M>2</M> to get rid of the fraction:
        </P>
        <BlockMath>{math`16 = r^2`}</BlockMath>
        <P>
          Now solve for the roots of the equation. What number must be squared to get <M>16</M>? These are numbers{' '}
          <M>4</M> and <M>-4</M>:
        </P>
        <BlockMath>{math`\pm 4 = r`}</BlockMath>
        <P>
          Since deflection is simply distance, and distance cannot be negative, the maximum permissible beam deflection
          is <M>4</M>!
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Divide, Cannot Pardon" level="medium">
      <ProblemDescription>
        <P>
          Masha needed to solve an incomplete quadratic equation with <M>C=0</M>:
        </P>
        <BlockMath>2x^2 + 3x = 0</BlockMath>
        <P>
          She decided to use the <Dep on={sameActionRule}>same action rule</Dep> and divided both sides of the equation
          by <M>x</M>:
        </P>
        <BlockMath>2x + 3 = 0</BlockMath>
        <P>
          Solving this elementary equation, she found the root <M>{math`x = -\frac{3}{2}`}</M> and handed the work to
          the teacher for checking. Did she solve the equation correctly? If not, explain in detail what Masha's mistake
          is.
        </P>
      </ProblemDescription>
      <ProblemHint>Division and zero are not very good friends.</ProblemHint>
      <ProblemAnswer>
        <P>
          Masha found only one of the two roots of the equation. She missed the second root because when dividing both
          sides by <M>x</M>, she did not take into account that <M>x</M> can be equal to zero, and that this case must
          be <B>checked separately</B>!
        </P>
        <P>
          Since she found only one root, she <Dep on={equationSolution}>did not solve</Dep> the equation!
        </P>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          The idea of dividing both sides by <M>x</M> is generally correct, and Masha used it correctly. She indeed
          found a root of the equation. Her only mistake was assuming this was the only root; thus, she did not solve
          the problem completely.
        </P>
        <P>
          The issue is that when dividing both sides by an <B>unknown</B> variable <M>x</M>, she failed to account for
          the possibility that it could be <M>0</M>! If <M>x=0</M>, she cannot divide, because division by zero is
          impossible.
        </P>
        <P>
          Therefore, she should have first stated the condition that she is dividing under the assumption that <M>x</M>{' '}
          is not zero, and then found the root.
        </P>
        <P>
          However, she must then consider the case where <M>x</M> <B>is</B> zero:
        </P>
        <BlockMath>2\cdot 0^2 + 3\cdot 0 = 0 \\ 0 = 0</BlockMath>
        <P>
          It turns out that <M>0</M> is also a root of this equation! She missed this <M>0</M>!
        </P>
      </ProblemSolution>
      <ProblemNote>
        <P>
          When solving equations where you want to divide both sides by an unknown, your equation splits into two
          "branches". In the first branch, you divide by the unknown, assuming it is not zero. In the second branch, you
          must manually check the case where the unknown is zero.
        </P>
        <Diagram>{math`
          flowchart TD
            equation["$$ 2x^2 + 3x = 0 $$"] --> division(["Want to divide by $x$"])
            division -->|$ x \neq 0 $<br>Division possible<br>Divide| subEquation1["$$ 2x + 3 = 0 $$"]
            division -->|$ x = 0 $<br>Division impossible<br>Check manually| subEquation2["$$ 2\cdot 0^2 + 3\cdot 0 = 0 $$"]
        `}</Diagram>
      </ProblemNote>
    </Problem>
  </>
));
