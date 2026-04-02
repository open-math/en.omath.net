// #region Assets
//
//
//

import rootClasses from './assets/root-classes.svg';

//
//
// #endregion

// #region Links
//
//
//

const incompleteQuadratics = $CONTENT.foundations.equations.quadratic.incomplete;
const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;
const quadraticFormulaPage = $CONTENT.foundations.equations.quadratic.quadraticFormula;
const factoringPage = $CONTENT.foundations.equations.quadratic.factoring;
const vietasFormulasPage = $CONTENT.foundations.equations.quadratic.vietasFormulas;
const mentalSolvingPage = $CONTENT.foundations.equations.quadratic.mentalSolving;
const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;
const factoring = $CONTENT.foundations.equations.quadratic.factoring.article.$generalFactoring;
const vietasFormulas = $CONTENT.foundations.equations.quadratic.vietasFormulas.article.$vietasFormulas;
const zeroSumRule = $CONTENT.foundations.equations.quadratic.mentalSolving.article.$methodZeroSum;
const mentalSolvingAtoC = $CONTENT.foundations.equations.quadratic.mentalSolving.article.$methodAtoC;
const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const alwaysGlobal = $CONTENT.foundations.equations.elementary.article.$alwaysGlobal;
const linearRootClasses = $CONTENT.foundations.equations.elementary.practice.$linearRootClasses;

//
//
// #endregion

export default defineProse({
  uniques: {
    mixedProblems: P,
    quadraticRootClasses: Problem,
  },
})(({ uniques }) => (
  <>
    <P
      $={uniques.mixedProblems}
      snippet={{
        key: true,
        title: 'Mixed Problems',
        seo: 'Mixed problems on quadratic equations',
        description: `
          Mixed problems that in one way or another reduce to quadratic trinomials or quadratic equations.
        `,
      }}
    >
      In the problems on this page, you can use all methods and formulas related to quadratic equations:
    </P>

    <List ordered>
      <Li>
        <Dep on={incompleteQuadratics}>Incomplete form</Dep>
      </Li>
      <Li>
        <Dep on={completingTheSquare}>Completing the square</Dep>
      </Li>
      <Li>
        <Dep on={quadraticFormulaPage}>Quadratic formula</Dep>
      </Li>
      <Li>
        <Dep on={factoringPage}>Factoring</Dep>
      </Li>
      <Li>
        <Dep on={vietasFormulasPage}>Vieta's Formulas</Dep>
      </Li>
      <Li>
        <Dep on={mentalSolvingPage}>Solving quadratic equations mentally</Dep>
      </Li>
    </List>

    <P>
      Throw everything into the fight in any order!
      <Br />
      The main thing is to come out on top in the most spectacular and efficient way. 😎
    </P>

    <Important title="This is the finale, not the beginning!">
      The problems here assume that you already know how to use the formulas! If this is a problem for you, make sure to
      work through the practice pages from each of the topics listed above, and then come back here.
    </Important>

    <Problem title="A Number and Its Reciprocal" level="easy">
      <ProblemDescription>
        The sum of a number and its reciprocal is <M>{math`\dfrac{5}{2}`}</M>. Find the number.
      </ProblemDescription>
      <RootsCheck roots={[2, [0.5, '1/2']]} />
      <ProblemAnswer>
        Two numbers satisfy this condition: <M>2</M> or <M>{math`\dfrac{1}{2}`}</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let the required number be <M>x</M>. Then the sum of this number and its reciprocal can be written
          mathematically like this:
        </P>
        <BlockMath>{math`x + \frac{1}{x} = \frac{5}{2}`}</BlockMath>
        <P>Bring the expression on the left to a common denominator:</P>
        <BlockMath>{math`\frac{x^2 + 1}{x} = \frac{5}{2}`}</BlockMath>
        <P>
          By the <Dep on={sameActionRule}>same action rule</Dep>, multiply both sides by <M>x</M>:
        </P>
        <BlockMath>{math`
            \frac{x^2 + 1}{\cancel{x}} \cdot \cancel{\yellow{x}} = \frac{5}{2} \cdot \yellow{x}
            \\
            x^2 + 1 = \frac{5x}{2}
          `}</BlockMath>
        <P>
          Multiply both sides by <M>2</M> to get rid of the denominator in the fraction:
        </P>
        <BlockMath>{math`
            \yellow{2}(x^2 + 1) = \frac{5x}{\cancel{2}} \cdot \cancel{\yellow{2}}
            \\
            2x^2 + 2 = 5x
          `}</BlockMath>
        <P>
          Subtract <M>5x</M> from both sides:
        </P>
        <BlockMath>{math`
            2x^2 + 2 - \yellow{5x} = \cancel{5x} - \cancel{\yellow{5x}}
            \\
            2x^2 - 5x + 2 = 0
          `}</BlockMath>
        <P>We got a quadratic equation in general form. Determine the coefficients:</P>
        <BlockMath>{math`A = 2, \enspace B = -5, \enspace C = 2`}</BlockMath>
        <P>Find the discriminant:</P>
        <BlockMath>{math`D = B^2 - 4AC = (-5)^2 - 4\cdot2\cdot2 = 25 - 16 = 9`}</BlockMath>
        <P>The discriminant is positive, so the equation has two distinct roots:</P>
        <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-5) \pm \sqrt{9}}{2\cdot2} = \frac{5 \pm 3}{4}
            \\
            x_1 = \frac{8}{4} = 2, \enspace x_2 = \frac{2}{4} = \frac{1}{2}
            \\
            \boxed{x_1 = 2, \enspace x_2 = \frac{1}{2}}
          `}</BlockMath>
        <P>
          It turns out that the conditions of the problem are satisfied not by one number, but by two: <M>2</M> or{' '}
          <M>{math`\dfrac{1}{2}`}</M>!
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Consecutive Squares" level="easy">
      <ProblemDescription>
        <P>
          The sum of the squares of two consecutive even numbers is <M>244</M>. Find these numbers.
        </P>
      </ProblemDescription>
      <RootsCheck roots={[-12, 10]} />
      <ProblemHint>
        Let the first even number be <M>x</M>. Then the next even number after it will be <M>x + 2</M>.
      </ProblemHint>
      <ProblemAnswer>
        These could have been the numbers <M>-12</M> and <M>-10</M> or <M>10</M> and <M>12</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let the first even number be <M>x</M>. Then the next even number after it will be <M>x + 2</M>. The sum of the
          squares of these numbers is <M>244</M>:
        </P>
        <BlockMath>{math`x^2 + (x + 2)^2 = 244`}</BlockMath>
        <P>Open the parentheses and combine like terms:</P>
        <BlockMath>{math`
            x^2 + (x^2 + 4x + 4) = 244
            \\
            2x^2 + 4x + 4 = 244
          `}</BlockMath>
        <P>
          Subtract <M>244</M> from both sides by the <Dep on={sameActionRule}>same action rule</Dep>:
        </P>
        <BlockMath>{math`2x^2 + 4x - 240 = 0`}</BlockMath>
        <P>
          Divide both sides of the equality by <M>2</M>:
        </P>
        <BlockMath>{math`x^2 + 2x - 120 = 0`}</BlockMath>
        <P>
          We got a monic quadratic equation. Find its roots using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
        </P>
        <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -2 \\
              x_1 \cdot x_2 = -120
            \end{cases}
          `}</BlockMath>
        <P>
          The sum of the roots is <M>-2</M>, and the product is <M>-120</M>. Clearly these roots are <M>-12</M> and{' '}
          <M>10</M>.
        </P>
        <P>
          It turns out that the condition of the problem is satisfied by two pairs of even numbers: <M>-12</M> and{' '}
          <M>-10</M>, and also <M>10</M> and <M>12</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problems title="Everything at Once!" level="easy">
      <P>Solve the quadratic equation in every possible way, and then factor it:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4m^2 + m - 3 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[['3/4', 0.75], -1]} />
        <MathExpressionCheck label="Factoring" answer="4(m-3/4)(m+1)" />
        <ProblemAnswer>
          <BlockMath>{math`m_1 = \frac{3}{4} >> m_2 = -1`}</BlockMath>
          <BlockMath>{math`4\left(m - \frac{3}{4}\right)(m + 1) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Mentally">
            <P>
              "Move" coefficient <M>A</M> over to <M>C</M> and get the equation in monic form:
            </P>
            <BlockMath>{math`m^2 + m - 12 = 0`}</BlockMath>
            <P>
              Write out <Dep on={vietasFormulas}>Vieta's formulas</Dep> for this equation:
            </P>
            <BlockMath>{math`
              \begin{dcases}
                x_1 + x_2 = -1 \\
                x_1x_2 = -12
              \end{dcases}
            `}</BlockMath>
            <P>
              The sum of the roots is <M>-1</M>, and the product is <M>-12</M>. Clearly these roots are <M>-4</M> and{' '}
              <M>3</M>.
            </P>
            <P>
              These are the roots of the monic equation. To get the roots of the original equation, we can{' '}
              <Dep on={mentalSolvingAtoC}>divide</Dep> the monic roots by <M>4</M>:
            </P>
            <BlockMath>{math`x_1 = -1 >> x_2 = \frac{3}{4}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Completing the Square">
            <P>Complete the square:</P>
            <BlockMath>{math`
              (2m)^2 + \yellow{2} \cdot \yellow{2}m \cdot \yellow{\frac{1}{4}} - 3 = 0
              \\
              \underbrace{(2m)^2 + 2m \cdot \frac{1}{4} + \yellow{\left(\frac{1}{4}\right)^2}}_{\normalsize a^2 + 2\cdot a\cdot b + b^2} - \yellow{\left(\frac{1}{4}\right)^2} - 3 = 0
              \\
              \left(2m + \frac{1}{4}\right)^2 - \frac{1}{16} - 3 = 0
              \\
              \left(2m + \frac{1}{4}\right)^2 - \frac{49}{16} = 0
            `}</BlockMath>
            <P>
              By the <Dep on={sameActionRule}>same action rule</Dep>, add <M>{math`\frac{49}{16}`}</M> to both sides:
            </P>
            <BlockMath>{math`\left(2m + \frac{1}{4}\right)^2 = \frac{49}{16}`}</BlockMath>
            <P>
              The number in parentheses squared equals the fraction <M>{math`\frac{49}{16}`}</M>. So the number itself
              equals the positive or negative root of this fraction:
            </P>
            <BlockMath>{math`2m + \frac{1}{4} = \pm\frac{7}{4}`}</BlockMath>
            <P>Solve the two simple sub-equations:</P>
            <BlockMath>{math`m_1 = \frac{3}{4} >> m_2 = -1`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Quadratic Formula">
            <P>Determine the coefficients:</P>
            <BlockMath>{math`A = 4, \enspace B = 1, \enspace C = -3`}</BlockMath>
            <P>Find the discriminant:</P>
            <BlockMath>{math`D = B^2 - 4AC = 1^2 - 4\cdot4\cdot(-3) = 1 + 48 = 49`}</BlockMath>
            <P>The discriminant is positive, so the equation has two distinct roots:</P>
            <BlockMath>{math`m_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-1 \pm 7}{8}`}</BlockMath>
            <BlockMath>{math`m_1 = \frac{6}{8} = \frac{3}{4} >> m_2 = -1`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Factoring">
            <P>
              We already know both roots of this equation. So we can use the <Dep on={factoring}>alternative form</Dep>{' '}
              of writing a quadratic equation as a product of two factors:
            </P>
            <BlockMath>{math`4\left(x - \frac{3}{4}\right)(x+1) = 0`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`2x^2 + 3x + 3 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>The equation has no solutions, so it cannot be factored either.</ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Mentally">
            <P>
              "Move" coefficient <M>A</M> over to <M>C</M> and get the equation in monic form:
            </P>
            <BlockMath>{math`x^2 + 3x + 6 = 0`}</BlockMath>
            <P>
              Write out <Dep on={vietasFormulas}>Vieta's formulas</Dep> for this equation:
            </P>
            <BlockMath>{math`
              \begin{dcases}
                x_1 + x_2 = -3 \\
                x_1x_2 = 6
              \end{dcases}
            `}</BlockMath>
            <P>
              It doesn't seem possible to pick integer roots. Maybe there aren't any. This cannot be solved mentally.
            </P>
          </ProblemSection>
          <ProblemSection title="Completing the Square">
            <P>Complete the square:</P>
            <BlockMath>{math`
              (\sqrt{2}x)^2 + \yellow{2} \cdot \yellow{\sqrt{2}}x \cdot 3 \cdot \yellow{\frac{1}{2\sqrt{2}}} + 3 = 0
              \\
              \underbrace{(\sqrt{2}x)^2 + 2 \cdot \sqrt{2}x \cdot \frac{3}{2\sqrt{2}} + \yellow{\left(\frac{3}{2\sqrt{2}}\right)^2}}_{\normalsize a^2 + 2\cdot a \cdot b + b^2} - \yellow{\left(\frac{3}{2\sqrt{2}}\right)^2} + 3 = 0
              \\
              \left(\sqrt{2}x + \frac{3}{2\sqrt{2}}\right)^2 - \frac{9}{8} + 3 = 0
              \\
              \left(\sqrt{2}x + \frac{3}{2\sqrt{2}}\right)^2 + \frac{15}{8} = 0
            `}</BlockMath>
            <P>
              By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>{math`\frac{15}{8}`}</M> from both
              sides:
            </P>
            <BlockMath>{math`\left(\sqrt{2}x + \frac{3}{2\sqrt{2}}\right)^2 = -\frac{15}{8}`}</BlockMath>
            <P>
              Because of the square on the left, we can never get a negative number there, and that is exactly what we
              need on the right. No matter what we substitute for <M>x</M>, we will always get a false equality. So this
              equation has no solutions.
            </P>
          </ProblemSection>
          <ProblemSection title="Quadratic Formula">
            <P>Determine the coefficients:</P>
            <BlockMath>{math`A = 2, \enspace B = 3, \enspace C = 3`}</BlockMath>
            <P>Find the discriminant:</P>
            <BlockMath>{math`D = B^2 - 4AC = 3^2 - 4\cdot2\cdot3 = 9 - 24 = -15`}</BlockMath>
            <P>The discriminant is negative, so the equation has no solutions.</P>
          </ProblemSection>
          <ProblemSection title="Factoring">
            <P>This equation has no solutions, so it cannot be factored either.</P>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(v+1)(v-5) = 4`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['2+sqrt(13)', '2-sqrt(13)']} />
        <MathExpressionCheck label="Factoring" answer="(v-2-sqrt(13))(v-2+sqrt(13))" />
        <ProblemAnswer>
          <BlockMath>{math`v_1 = 2 + \sqrt{13}, \enspace v_2 = 2 - \sqrt{13}`}</BlockMath>
          <BlockMath>{math`(v - 2 - \sqrt{13})(v - 2 + \sqrt{13}) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Bring the equation to the general form of a quadratic equation:</P>
          <BlockMath>{math`v^2 - 5v + v - 5 = 4`}</BlockMath>
          <P>
            Subtract <M>4</M> from both sides by the <Dep on={sameActionRule}>same action rule</Dep>:
          </P>
          <BlockMath>{math`v^2 - 5v + v - 5 - 4 = 0`}</BlockMath>
          <P>Combine like terms:</P>
          <BlockMath>{math`v^2 - 4v - 9 = 0`}</BlockMath>
          <ProblemSection title="Mentally">
            <P>
              The equation is already monic. Write out <Dep on={vietasFormulas}>Vieta's formulas</Dep> for it:
            </P>
            <BlockMath>{math`
              \begin{dcases}
                x_1 + x_2 = 4 \\
                x_1x_2 = -9
              \end{dcases}
            `}</BlockMath>
            <P>It doesn't seem possible to find integer roots. This cannot be solved mentally.</P>
          </ProblemSection>
          <ProblemSection title="Completing the Square">
            <P>Complete the square:</P>
            <BlockMath>{math`
              \underbrace{v^2 - 2 \cdot v \cdot 2 + \yellow{2^2}}_{\normalsize a^2 - 2\cdot a \cdot b + b^2} - \yellow{2^2} - 9 = 0
              \\
              (v - 2)^2 - 4 - 9 = 0
              \\
              (v - 2)^2 - 13 = 0
            `}</BlockMath>
            <P>
              By the <Dep on={sameActionRule}>same action rule</Dep>, add <M>13</M> to both sides:
            </P>
            <BlockMath>{math`(v - 2)^2 = 13`}</BlockMath>
            <P>
              The number in parentheses squared equals <M>13</M>. So the number itself equals the positive or negative
              root of this fraction:
            </P>
            <BlockMath>{math`
              v - 2 = \pm\sqrt{13}
              \\
              v = 2 \pm \sqrt{13}
              \\
              v_1 = 2 + \sqrt{13}, \enspace v_2 = 2 - \sqrt{13}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Quadratic Formula">
            <P>Determine the coefficients:</P>
            <BlockMath>{math`A = 1, \enspace B = -4, \enspace C = -9`}</BlockMath>
            <P>Find the discriminant:</P>
            <BlockMath>{math`D = B^2 - 4AC = (-4)^2 - 4\cdot1\cdot(-9) = 16 + 36 = 52`}</BlockMath>
            <P>The discriminant is positive, so the equation has two distinct roots:</P>
            <BlockMath>{math`v_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-4) \pm \sqrt{52}}{2\cdot1} = \frac{4 \pm 2\sqrt{13}}{2} = 2 \pm \sqrt{13}`}</BlockMath>
            <BlockMath>{math`v_1 = 2 + \sqrt{13}, \enspace v_2 = 2 - \sqrt{13}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Factoring">
            <P>
              We already know the roots of the equation. So we can <Dep on={factoring}>factor</Dep> it:
            </P>
            <BlockMath>{math`(v - 2 - \sqrt{13})(v - 2 + \sqrt{13}) = 0`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(y + 2)(y + 6) = 21`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, -9]} />
        <MathExpressionCheck label="Factoring" answer="(y-1)(y+9)" />
        <ProblemAnswer>
          <BlockMath>{math`y_1 = 1, \enspace y_2 = -9`}</BlockMath>
          <BlockMath>{math`(y - 1)(y + 9) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Bring the equation to the general form of a quadratic equation:</P>
          <BlockMath>{math`
            (y + 2)(y + 6) = 21
            \\
            y^2 + 6y + 2y + 12 = 21
          `}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>21</M> from both sides:
          </P>
          <BlockMath>{math`y^2 + 6y + 2y + 12 - 21 = 0`}</BlockMath>
          <P>Combine like terms:</P>
          <BlockMath>{math`y^2 + 8y - 9 = 0`}</BlockMath>
          <ProblemSection title="Mentally">
            <P>
              The equation is already monic. Write out <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
            </P>
            <BlockMath>{math`
              \begin{dcases}
                x_1 + x_2 = -8 \\
                x_1 \cdot x_2 = -9
              \end{dcases}
            `}</BlockMath>
            <P>
              The sum of the roots is <M>-8</M>, and the product is <M>-9</M>. Clearly these are the numbers <M>-9</M>{' '}
              and <M>1</M>. They are also the roots of this equation.
            </P>
          </ProblemSection>
          <ProblemSection title="Completing the Square">
            <P>Complete the square:</P>
            <BlockMath>{math`
              \underbrace{y^2 + 2 \cdot y \cdot 4 + \yellow{4^2}}_{\normalsize a^2 + 2 \cdot a \cdot b + b^2} - \yellow{4^2} - 9 = 0
              \\
              (y + 4)^2 - 16 - 9 = 0
              \\
              (y + 4)^2 - 25 = 0
            `}</BlockMath>
            <P>
              By the <Dep on={sameActionRule}>same action rule</Dep>, add <M>25</M> to both sides:
            </P>
            <BlockMath>{math`(y+4)^2 = 25`}</BlockMath>
            <P>
              Some number <M>y + 4</M>, squared, gives <M>25</M>. So this number itself is the positive or negative root
              of <M>25</M>:
            </P>
            <BlockMath>{math`
              y + 4 = \pm 5
              \\
              y_1 = 1, \enspace y_2 = -9
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Quadratic Formula">
            <P>Determine the coefficients:</P>
            <BlockMath>{math`A = 1, \enspace B = 8, \enspace C = -9`}</BlockMath>
            <P>Find the discriminant:</P>
            <BlockMath>{math`D = B^2 - 4AC = 8^2 - 4\cdot1\cdot(-9) = 64 + 36 = 100`}</BlockMath>
            <P>The discriminant is positive, so the equation has two distinct roots:</P>
            <BlockMath>{math`y_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-8 \pm \sqrt{100}}{2\cdot1} = \frac{-8 \pm 10}{2} = -4 \pm 5`}</BlockMath>
            <BlockMath>{math`y_1 = 1 >> y_2 = -9`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Factoring">
            <P>
              We know the roots of this equation. So we can <Dep on={factoring}>factor</Dep> it:
            </P>
            <BlockMath>{math`(y - 1)(y + 9) = 0`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{1}{3}n^2 + \frac{1}{2} = -n`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['(sqrt(3)-3)/2', '(-sqrt(3)-3)/2']} />
        <MathExpressionCheck label="Factoring" answer="2(n-(sqrt(3)-3)/2)(n-(-sqrt(3)-3)/2)" />
        <ProblemAnswer>
          <BlockMath>{math`n_1 = \frac{\sqrt{3} - 3}{2} >> n_2 = \frac{-\sqrt{3} - 3}{2}`}</BlockMath>
          <BlockMath>{math`2\left(n - \frac{\sqrt{3} - 3}{2}\right)\left(n - \frac{-\sqrt{3} - 3}{2}\right) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Get rid of the fractions in the equation by the <Dep on={sameActionRule}>same action rule</Dep>, multiplying
            both sides by <M>6</M>:
          </P>
          <BlockMath>{math`2n^2 + 3 = -6n`}</BlockMath>
          <P>
            Add <M>6n</M> to both sides:
          </P>
          <BlockMath>{math`2n^2 + 6n + 3 = 0`}</BlockMath>
          <ProblemSection title="Mentally">
            <P>
              "Move" coefficient <M>A</M> over to <M>C</M> to get a monic equation:
            </P>
            <BlockMath>{math`n^2 + 6n + 6 = 0`}</BlockMath>
            <P>
              Write out <Dep on={vietasFormulas}>Vieta's formulas</Dep> for it:
            </P>
            <BlockMath>{math`
              \begin{cases}
                n_1 + n_2 = -6 \\
                n_1n_2 = 6
              \end{cases}
            `}</BlockMath>
            <P>
              The sum of the roots is <M>-6</M>, and the product is <M>6</M>. It will not be possible to find integer
              roots. So this cannot be solved mentally.
            </P>
          </ProblemSection>
          <ProblemSection title="Completing the Square">
            <P>Complete the square:</P>
            <BlockMath>{math`
              (\sqrt{2}n)^2 + 2 \cdot \yellow{\sqrt{2}}n \cdot 3 \cdot \yellow{\frac{1}{\sqrt{2}}} + 3 = 0
              \\
              \underbrace{(\sqrt{2}n)^2 + 2 \cdot \sqrt{2}n \cdot \frac{3}{\sqrt{2}} + \yellow{\left(\frac{3}{\sqrt{2}}\right)^2}}_{\normalsize a^2 + 2ab + b^2} - \yellow{\left(\frac{3}{\sqrt{2}}\right)^2} + 3 = 0
              \\
              \left(\sqrt{2}n + \frac{3}{\sqrt{2}}\right)^2 - \frac{9}{2} + 3 = 0
              \\
              \left(\sqrt{2}n + \frac{3}{\sqrt{2}}\right)^2 - \frac{3}{2} = 0
            `}</BlockMath>
            <P>
              By the <Dep on={sameActionRule}>same action rule</Dep>, add <M>{math`\frac{3}{2}`}</M> to both sides:
            </P>
            <BlockMath>{math`\left(\sqrt{2}n + \frac{3}{\sqrt{2}}\right)^2 = \frac{3}{2}`}</BlockMath>
            <P>
              Some number squared equals <M>{math`\frac{3}{2}`}</M>. So the number itself is the positive or negative
              root of this fraction:
            </P>
            <BlockMath>{math`
              \sqrt{2}n + \frac{3}{\sqrt{2}} = \pm\sqrt{\frac{3}{2}}
              \\
              \sqrt{2}n + \frac{3}{\sqrt{2}} = \pm\frac{\sqrt{3}}{\sqrt{2}}
            `}</BlockMath>
            <P>
              Multiply both sides by <M>{math`\sqrt{2}`}</M>:
            </P>
            <BlockMath>{math`2n + 3 = \pm\sqrt{3}`}</BlockMath>
            <P>Solving these two simple sub-equations, we find the roots:</P>
            <BlockMath>{math`n_1 = \frac{\sqrt{3} - 3}{2} >> n_2 = \frac{-\sqrt{3} - 3}{2}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Quadratic Formula">
            <P>Determine the coefficients:</P>
            <BlockMath>{math`A = 2, \enspace B = 6, \enspace C = 3`}</BlockMath>
            <P>Find the discriminant:</P>
            <BlockMath>{math`D = B^2 - 4AC = 6^2 - 4\cdot2\cdot3 = 36 - 24 = 12`}</BlockMath>
            <P>The discriminant is positive, so the equation has two distinct roots:</P>
            <BlockMath>{math`n_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-6 \pm \sqrt{12}}{2\cdot2} = \frac{-6 \pm 2\sqrt{3}}{4} = \frac{-3 \pm \sqrt{3}}{2}`}</BlockMath>
            <BlockMath>{math`n_1 = \frac{-3 + \sqrt{3}}{2} >> n_2 = \frac{-3 - \sqrt{3}}{2}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Factoring">
            <P>
              We already know the roots of the equation. So we can <Dep on={factoring}>factor</Dep> it:
            </P>
            <BlockMath>{math`2\left(n - \frac{-3 + \sqrt{3}}{2}\right)\left(n - \frac{-3 - \sqrt{3}}{2}\right) = 0`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Reading the Coffee Grounds" level="medium" method>
      <P>Solve the quadratic equations without using the quadratic formula:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`463x^2 - 102x - 361 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, '-361/463']} />
        <ProblemHint>
          Use the <Dep on={zeroSumRule}>zero-sum method</Dep> or just try to guess the first root:{' '}
          <M>{math`0, 1, -1, 2, -2`}</M>.
        </ProblemHint>
        <ProblemHint>
          The second root is found easily using <Dep on={vietasFormulas}>Vieta's formulas</Dep> and the product of the
          roots.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 1 >>{big} x_2 = \frac{-361}{463}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Mental Solution">
            <P>
              The <Dep on={zeroSumRule}>zero-sum method</Dep> applies to this equation -- the sum of the coefficients is
              zero:
            </P>
            <BlockMath>{math`463 - 102 - 361 = 0`}</BlockMath>
            <P>
              Then one of the roots is <M>1</M>, and the second is found by the formula:
            </P>
            <BlockMath>{math`
              x_1 = 1 >> x_2 = \frac{-361}{463}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Guessing the Root">
            <P>
              By guessing, we find that one of the roots is <M>1</M>:
            </P>
            <BlockMath>{math`
              463 \cdot 1^2 - 102 \cdot 1 - 361 = 0
              \\
              463 - 102 - 361 = 0
              \\
              463 - 463 = 0
              \\
              0 = 0
            `}</BlockMath>
            <P>
              The second root can be found using <Dep on={vietasFormulas}>Vieta's formulas</Dep> and the product of the
              roots:
            </P>
            <BlockMath>{math`
              \underset{x_1}{1} \cdot x_2 = \frac{-361}{463}
              \\
              \boxed{x_2 = \frac{-361}{463}}
            `}</BlockMath>
            <P>Roots of the equation:</P>
            <BlockMath>{math`x_1 = 1 >>{big} x_2 = \frac{-361}{463}`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`67 x^2 - 105x - 172 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-1, '172/67']} />
        <ProblemHint>
          Use the <Dep on={zeroSumRule}>zero-sum method</Dep> or just try to guess the first root:{' '}
          <M>{math`0, 1, -1, 2, -2`}</M>.
        </ProblemHint>
        <ProblemHint>
          The second root is found easily using <Dep on={vietasFormulas}>Vieta's formulas</Dep> and the product of the
          roots.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -1 >>{big} x_2 = \frac{172}{67}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Mental Solution">
            <P>
              The <Dep on={zeroSumRule}>zero-sum method</Dep> applies to this equation -- the sum of the coefficients
              with the sign of <M>B</M> flipped is zero:
            </P>
            <BlockMath>{math`67 - (-105) - 172 = 0`}</BlockMath>
            <P>
              Then one of the roots is <M>-1</M>, and the second is found by the formula:
            </P>
            <BlockMath>{math`
              x_1 = -1 >> x_2 = \frac{172}{67}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Guessing the Root">
            <P>
              By guessing, we find that one of the roots is <M>-1</M>:
            </P>
            <BlockMath>{math`
            67 \cdot (-1)^2 - 105 \cdot (-1) - 172 = 0
            \\
            67 + 105 - 172 = 0
            \\
            172 - 172 = 0
            \\
            0 = 0
          `}</BlockMath>
            <P>
              The second root can be found using <Dep on={vietasFormulas}>Vieta's formulas</Dep> and the product of the
              roots:
            </P>
            <BlockMath>{math`
            \underset{x_1}{-1} \cdot x_2 = \frac{-172}{67}
            \\
            \boxed{x_2 = \frac{172}{67}}
          `}</BlockMath>
            <P>Roots of the equation:</P>
            <BlockMath>{math`x_1 = -1 >>{big} x_2 = \frac{172}{67}`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`13x^2 - 33x + 14 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[2, '7/13']} />
        <ProblemHint>
          Try to guess the first root: <M>{math`0, 1, -1, 2, -2`}</M>.
        </ProblemHint>
        <ProblemHint>
          The second root is found easily using <Dep on={vietasFormulas}>Vieta's formulas</Dep> and the product of the
          roots.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 2 >>{big} x_2 = \frac{7}{13}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By guessing, we find that one of the roots is <M>2</M>:
          </P>
          <BlockMath>{math`
            13 \cdot 2^2 - 33 \cdot 2 + 14 = 0
            \\
            52 - 66 + 14 = 0
            \\
            -14 + 14 = 0
            \\
            0 = 0
          `}</BlockMath>
          <P>
            The second root can be found using <Dep on={vietasFormulas}>Vieta's formulas</Dep> and the product of the
            roots:
          </P>
          <BlockMath>{math`
            \underset{x_1}{2} \cdot x_2 = \frac{14}{13}
            \\
            \boxed{x_2 = \frac{7}{13}}
          `}</BlockMath>
          <P>Roots of the equation:</P>
          <BlockMath>{math`x_1 = 2 >>{big} x_2 = \frac{7}{13}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`8x^2 + 25x + 18 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-2, '-9/4']} />
        <ProblemHint>
          Try to guess the first root: <M>{math`0, 1, -1, 2, -2`}</M>.
        </ProblemHint>
        <ProblemHint>
          The second root is found easily using <Dep on={vietasFormulas}>Vieta's formulas</Dep> and the product of the
          roots.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -2 >>{big} x_2 = -\frac{9}{4}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By guessing, we find that one of the roots is <M>-2</M>:
          </P>
          <BlockMath>{math`
            8 \cdot (-2)^2 + 25 \cdot (-2) + 18 = 0
            \\
            32 - 50 + 18 = 0
            \\
            -18 + 18 = 0
            \\
            0 = 0
          `}</BlockMath>
          <P>
            The second root can be found using <Dep on={vietasFormulas}>Vieta's formulas</Dep> and the product of the
            roots:
          </P>
          <BlockMath>{math`
            \underset{x_1}{-2} \cdot x_2 = \frac{18}{8}
            \\
            \boxed{x_2 = -\frac{9}{4}}
          `}</BlockMath>
          <P>Roots of the equation:</P>
          <BlockMath>{math`x_1 = -2 >>{big} x_2 = -\frac{9}{4}`}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          <P>
            If you see that a quadratic equation will be "unpleasant" to solve with the general formulas (for example,
            if you will have to work with large numbers), then first try to guess one of its roots. Try a few small
            integers:
          </P>
          <BlockMath>{math`0, 1, -1, 2, -2`}</BlockMath>
        </ProblemNote>
      </SubProblem>
    </Problems>

    <Problems title="Shadowboxing" level="medium" pretty>
      <P>Solve the quadratic equation without using the quadratic formula:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`2x^2 - 5x - 7 = 2 \cdot \left(\frac{3}{5}\right)^2 - 5 \cdot \left(\frac{3}{5}\right) - 7`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['3/5', '19/10']} />
        <ProblemHint>
          Guess the first root of the equation. Notice that the expressions on the left and right are almost identical.
        </ProblemHint>
        <ProblemHint>
          Use <Dep on={vietasFormulas}>Vieta's formula</Dep> and the sum of the roots to find the second root.
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = \dfrac{3}{5}`}</M> and <M>{math`x_2 = \dfrac{19}{10}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We notice that the expressions on the left and right are the same, but on the right the number{' '}
            <M>{math`\frac{3}{5}`}</M> was substituted instead of <M>x</M>. So we have already found one root, because
            if we substitute the fraction <M>{math`\frac{3}{5}`}</M> for <M>x</M> on the left, the left side becomes
            completely identical to the right side. The equality becomes true:
          </P>
          <BlockMath>{math`2\cdot\left(\frac{3}{5}\right)^2 - 5\cdot\left(\frac{3}{5}\right) - 7 = 2\cdot\left(\frac{3}{5}\right)^2 - 5\cdot\left(\frac{3}{5}\right) - 7`}</BlockMath>
          <P>
            To find the second root, we can use <Dep on={vietasFormulas}>Vieta's formula</Dep> and the sum of the roots:
          </P>
          <BlockMath>{math`
            \frac{3}{5} + x_2 = \frac{5}{2}
            \\
            \frac{6}{10} + x_2 = \frac{25}{10}
            \\
            \boxed{x_2 = \frac{19}{10}}
          `}</BlockMath>
          <P>
            So, the roots of this equation are <M>{math`\dfrac{3}{5}`}</M> and <M>{math`\dfrac{19}{10}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3x^2 + 7x - 2 = 3 \cdot \left(-\frac{16}{3}\right)^2 + 7 \cdot \left(-\frac{16}{3}\right) - 2`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['-16/3', 3]} />
        <ProblemHint>Use the hint from the first item.</ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = -\dfrac{16}{3}`}</M> and <M>{math`x_2 = 3`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The first root is <M>{math`\dfrac{-16}{3}`}</M>, because when we substitute this number for <M>x</M>, the
            left side becomes completely identical to the right side. The equality becomes true:
          </P>
          <BlockMath>{math`3\cdot\left(-\frac{16}{3}\right)^2 + 7\cdot\left(-\frac{16}{3}\right) - 2 = 3\cdot\left(-\frac{16}{3}\right)^2 + 7\cdot\left(-\frac{16}{3}\right) - 2`}</BlockMath>
          <P>
            To find the second root, we can use <Dep on={vietasFormulas}>Vieta's formula</Dep> and the sum of the roots:
          </P>
          <BlockMath>{math`
            -\frac{16}{3} + x_2 = -\frac{7}{3}
            \\
            x_2 = \frac{9}{3}
            \\
            \boxed{x_2 = 3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4x^2 - 3x + 9 = 4 \cdot (3.7)^2 - 3\cdot(3.7 - 3)`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[[3.7, '37/10'], '-59/20']} />
        <ProblemHint>Use the hint from the first item.</ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = 3.7`}</M> and <M>{math`x_2 = -\dfrac{59}{20}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>Open the parentheses on the right side of the equation and get symmetric expressions:</P>
          <BlockMath>{math`4x^2 - 3x + 9 = 4 \cdot (3.7)^2 - 3\cdot(3.7) + 9`}</BlockMath>
          <P>
            We immediately get the root <M>3.7</M>, because when we substitute this number for <M>x</M>, the left side
            becomes completely identical to the right side. The equality becomes true:
          </P>
          <BlockMath>{math`4\cdot(3.7)^2 - 3\cdot(3.7) + 9 = 4\cdot(3.7)^2 - 3\cdot(3.7) + 9`}</BlockMath>
          <P>
            To find the second root, we can use <Dep on={vietasFormulas}>Vieta's formula</Dep> and the sum of the roots:
          </P>
          <BlockMath>{math`
            3.7 + x_2 = \frac{3}{4}
            \\
            \frac{37}{10} + x_2 = \frac{3}{4}
            \\
            \frac{74}{20} + x_2 = \frac{15}{20}
            \\
            \boxed{x_2 = -\frac{59}{20}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`5x^2 + 10x + 3 = 5 \cdot 4.2 \cdot (4.2 - 2) + 3`}</BlockMath>
        </ProblemDescription>
        <RootsCheck
          roots={[
            [-4.2, '-21/5'],
            [-6.2, '-31/5'],
          ]}
        />
        <ProblemHint>Use the hint from the first item.</ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = -4.2`}</M> and <M>{math`x_2 = -6.2`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            On the right side of the equation, open the parentheses, but do not touch <M>4.2</M>, getting almost
            symmetric expressions:
          </P>
          <BlockMath>{math`5x^2 + 10x + 3 = 5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3`}</BlockMath>
          <P>
            The expressions on the left and right are almost the same, except that the signs in front of <M>10x</M> are
            different. It is easy to guess that the first root is <M>-4.2</M>, because when we substitute this number
            for <M>x</M>, the left side becomes completely identical to the right side. The equality becomes true:
          </P>
          <BlockMath>{math`
            5 \cdot (-4.2)^2 + 10 \cdot (-4.2) + 3 = 5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3
            \\
            5 \cdot (-1)^2 \cdot (4.2)^2 - 10 \cdot (4.2) + 3 = 5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3
            \\
            5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3 = 5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3
          `}</BlockMath>
          <P>
            To find the second root, we can use <Dep on={vietasFormulas}>Vieta's formula</Dep> and the sum of the roots:
          </P>
          <BlockMath>{math`
            -4.2 + x_2 = -\frac{10}{5}
            \\
            -4.2 + x_2 = -2
            \\
            \boxed{x_2 = -6.2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Slow Train" level="medium">
      <ProblemDescription>
        A train travels <M>200</M> kilometers at a constant speed. If it were moving <M>10</M> kilometers per hour
        faster, it would cover this distance <M>1</M> hour sooner. At what speed was the train traveling?
      </ProblemDescription>
      <MathValueCheck label="Speed (km/h)" answer={40} />
      <ProblemHint>
        Write out the formula for time in both situations. Combine these formulas into one equation.
      </ProblemHint>
      <ProblemAnswer>
        The original speed of the train was <M>40</M> kilometers per hour.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let the original speed of the train be <M>v</M>. Then the time it takes to travel <M>200</M> kilometers will
          be:
        </P>
        <BlockMath>{math`t = \frac{200}{v}`}</BlockMath>
        <P>
          We also know that if the train were going <M>10</M> kilometers per hour faster, then it would cover this
          distance <M>1</M> hour faster. Mathematically, this can be written like this:
        </P>
        <BlockMath>{math`t-1 = \frac{200}{v + 10}`}</BlockMath>
        <P>
          Replace <M>t</M> in this equality with the expression from the first equality:
        </P>
        <BlockMath>{math`\frac{200}{v} - 1 = \frac{200}{v+10}`}</BlockMath>
        <P>
          By the <Dep on={sameActionRule}>same action rule</Dep>, multiply both sides by <M>{math`v(v + 10)`}</M>:
        </P>
        <BlockMath>{math`200(v + 10) - v(v + 10) = 200v`}</BlockMath>
        <P>Open the parentheses:</P>
        <BlockMath>{math`200v + 2000 - v^2 - 10v = 200v`}</BlockMath>
        <P>
          Subtract <M>200v</M> from both sides:
        </P>
        <BlockMath>{math`2000 - v^2 - 10v = 0`}</BlockMath>
        <P>Swap the terms around:</P>
        <BlockMath>{math`-v^2 - 10v + 2000 = 0`}</BlockMath>
        <P>
          Multiply both sides by <M>-1</M>:
        </P>
        <BlockMath>{math`v^2 + 10v - 2000 = 0`}</BlockMath>
        <P>
          We got a monic quadratic equation. Find its roots using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
        </P>
        <BlockMath>{math`
            \begin{cases}
              v_1 + v_2 = -10 \\
              v_1 \cdot v_2 = -2000
            \end{cases}
          `}</BlockMath>
        <P>
          The sum of the roots is <M>-10</M>, and the product is <M>-2000</M>. Clearly these roots are <M>-50</M> and{' '}
          <M>40</M>.
        </P>
        <P>
          Negative speed makes no sense in this problem, so we discard the root <M>-50</M>. That leaves only the
          positive root <M>40</M>.
        </P>
        <P>
          So, the original speed of the train was <M>40</M> kilometers per hour.
        </P>
      </ProblemSolution>
    </Problem>

    <Problems title="Fine Tuning" level="medium">
      <SubProblem>
        <ProblemDescription>
          <P>
            For which values of <M>k</M> is the product of the roots of the quadratic equation below equal to zero?
          </P>
          <BlockMath>{math`x^2 + 3x + (k^2 - 7k + 12) = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="k" answers={[3, 4]} />
        <ProblemAnswer>
          <M>k = 3</M> and <M>k = 4</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Write out <Dep on={vietasFormulas}>Vieta's formula</Dep> for the product of the roots of this quadratic
            equation:
          </P>
          <BlockMath>{math`x_1x_2 = k^2 - 7k + 12`}</BlockMath>
          <P>We need the product of the roots to be zero. Then the expression on the right must be zero:</P>
          <BlockMath>{math`k^2 - 7k + 12 = 0`}</BlockMath>
          <P>
            We got a quadratic equation. It is monic, so it can be solved mentally using Vieta's formulas. It is enough
            to think of which numbers add up to <M>7</M> and multiply to <M>12</M>. Clearly, these are <M>3</M> and{' '}
            <M>4</M>.
          </P>
          <P>
            So, when <M>k = 3</M> and <M>k = 4</M>, the expression <M>{math`k^2 - 7k + 12`}</M> becomes zero, which
            means the product of the roots of the quadratic equation given in the problem also becomes zero.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            For which values of <M>k</M> is the sum of the roots of the quadratic equation below equal to zero?
          </P>
          <BlockMath>{math`x^2 + (k^2 + 4k - 5)x - k = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="k" answers={[-5, 1]} />
        <ProblemAnswer>
          <M>k = -5</M> and <M>k = 1</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Write out <Dep on={vietasFormulas}>Vieta's formula</Dep> for the sum of the roots of this quadratic
            equation:
          </P>
          <BlockMath>{math`x_1 + x_2 = -(k^2 + 4k - 5)`}</BlockMath>
          <P>We need the sum of the roots to be zero. Then the expression on the right must be zero:</P>
          <BlockMath>{math`-(k^2 + 4k - 5) = 0`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, multiply both sides by <M>-1</M>:
          </P>
          <BlockMath>{math`k^2 + 4k - 5 = 0`}</BlockMath>
          <P>
            We got a quadratic equation. It is monic, so it can be solved mentally using Vieta's formulas. It is enough
            to think of which numbers add up to <M>-4</M> and multiply to <M>-5</M>. Clearly, these are <M>-5</M> and{' '}
            <M>1</M>.
          </P>
          <P>
            So, when <M>k = -5</M> and <M>k = 1</M>, the expression <M>{math`k^2 + 4k - 5`}</M> becomes zero, which
            means the sum of the roots of the quadratic equation given in the problem also becomes zero.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            For which values of <M>a</M> is the sum of the roots of the equation equal to the sum of the squares of its
            roots?
          </P>
          <BlockMath>{math`x^2 - 2a(x-1) - 1 = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="a" answers={[1, '1/2']} />
        <ProblemHint>Bring the quadratic equation to general form.</ProblemHint>
        <ProblemHint>
          Complete the sum of the squares of the roots into the algebraic identity "square of a sum".
        </ProblemHint>
        <ProblemAnswer>
          <M>a = 1</M> or <M>{math`a = \frac{1}{2}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            First, bring the quadratic equation to general form. To do this, open the parentheses and combine like
            terms:
          </P>
          <BlockMath>{math`
            x^2 - 2a(x - 1) - 1 = 0
            \\
            x^2 - 2ax + 2a - 1 = 0
            \\
            x^2 - 2ax + (2a - 1) = 0
          `}</BlockMath>
          <P>
            Now write out <Dep on={vietasFormulas}>Vieta's formulas</Dep> for this quadratic equation:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = 2a \\
              x_1x_2 = 2a - 1
            \end{cases}
          `}</BlockMath>
          <P>Finally, write the equality that we need according to the problem:</P>
          <BlockMath>{math`x_1 + x_2 = x_1^2 + x_2^2`}</BlockMath>
          <P>
            By adding <M>{math`2x_1x_2`}</M> to both sides using the <Dep on={sameActionRule}>same action rule</Dep>, we
            can pack the right side into the algebraic identity "square of a sum":
          </P>
          <BlockMath>{math`
            x_1 + x_2 + \yellow{2x_1x_2} = x_1^2 + \yellow{2x_1x_2} + x_2^2
            \\
            x_1 + x_2 + 2x_1x_2 = (x_1 + x_2)^2
          `}</BlockMath>
          <P>Substitute the data from Vieta's formulas into the resulting equality:</P>
          <BlockMath>{math`
            2a + 2(2a - 1) = (2a)^2
            \\
            2a + 4a - 2 = 4a^2
            \\
            6a - 2 = 4a^2
          `}</BlockMath>
          <P>
            Divide both sides of the equality by <M>2</M>, and do not forget about the{' '}
            <Dep on={alwaysGlobal}>global</Dep> nature of this action:
          </P>
          <BlockMath>{math`
            \frac{6a - 2}{\yellow{2}} = \frac{4a^2}{\yellow{2}}
            \\
            3a - 1 = 2a^2
          `}</BlockMath>
          <P>Move all data to one side of the equality:</P>
          <BlockMath>{math`2a^2 - 3a + 1 = 0`}</BlockMath>
          <P>
            We got a quadratic equation. One root can be guessed: it is <M>1</M>. Then the second root is found mentally
            in an elementary way using Vieta's formula for coefficient <M>C</M>:
          </P>
          <BlockMath>{math`\underset{a_1}{1}\cdot \ ? = \frac{1}{2} \\ a_2 = \frac{1}{2}`}</BlockMath>
          <P>
            So, when <M>a = 1</M> or <M>{math`a = \frac{1}{2}`}</M>, the sum of the roots of the quadratic equation
            given in the problem will be equal to the sum of the squares of its roots.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title='The Supremacy of "C"' level="medium">
      <ProblemDescription>
        <P>Derive general formulas for solving quadratic equations of the form:</P>
        <BlockMath>{math`x^2 + 2x + C = 0`}</BlockMath>
        <P>Under what conditions does this equation have solutions?</P>
      </ProblemDescription>
      <ProblemHint>Just solve this equation by completing the square or by the quadratic formula.</ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`x_1 = -1 + \sqrt{1 - C} >> x_2 = -1 - \sqrt{1 - C}`}</BlockMath>
        <P>
          If the expression <M>1 - C</M> is negative, then the equation has no solutions.
        </P>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Using Completing the Square">
          <P>Complete the square:</P>
          <BlockMath>{math`
              x^2 + 2x + C = 0
              \\
              \underbrace{x^2 + 2 \cdot x \cdot 1 + \yellow{1}}_{\small a^2 + 2 \cdot a \cdot b + b^2} - \yellow{1} + C = 0
              \\
              (x+1)^2 - 1 + C = 0
            `}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, add <M>1</M> to both sides and subtract <M>C</M>:
          </P>
          <BlockMath>{math`(x+1)^2 = 1 - C`}</BlockMath>
          <P>
            Since the left side cannot be negative, <M>1 - C</M> must be nonnegative, otherwise the equation will have
            no solutions. Some number <M>x + 1</M> squared equals <M>1 - C</M>. So this number itself is the positive or
            negative root of <M>1 - C</M>:
          </P>
          <BlockMath>{math`x + 1 = \pm\sqrt{1 - C}`}</BlockMath>
          <P>
            Subtract <M>1</M> from both sides:
          </P>
          <BlockMath>{math`x = -1 \pm \sqrt{1 - C}`}</BlockMath>
          <P>Roots of the equation:</P>
          <BlockMath>{math`x_1 = -1 + \sqrt{1 - C} >> x_2 = -1 - \sqrt{1 - C}`}</BlockMath>
        </ProblemSection>
        <ProblemSection title="Using the Quadratic Formula">
          <P>Determine the coefficients:</P>
          <BlockMath>{math`A = 1, \enspace B = 2, \enspace C = C`}</BlockMath>
          <P>Find the discriminant:</P>
          <BlockMath>{math`D = B^2 - 4AC = 2^2 - 4\cdot1\cdot C = 4 - 4C = 4(1 - C)`}</BlockMath>
          <P>
            The discriminant must be nonnegative, otherwise the equation will have no solutions. <M>4</M> does not
            affect anything, so the expression <M>1 - C</M> must be nonnegative. If the discriminant is nonnegative,
            then the equation has two distinct roots:
          </P>
          <BlockMath>{math`x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-2 \pm \sqrt{4(1 - C)}}{2\cdot1} = \frac{-2 \pm 2\sqrt{1 - C}}{2} = -1 \pm \sqrt{1 - C}`}</BlockMath>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="Eternal Optimist" level="medium">
      <ProblemDescription>
        <P>
          Is it true that if all terms of a quadratic equation in general form have a <M>+</M> sign, for example{' '}
          <M>{math`3x^2 + x + 100 = 0`}</M>, then it has no solutions? After all, we are adding three positive numbers,
          and there is no way their sum can be <M>0</M>!
        </P>
        <P>If this is not true, then give a counterexample and explain in detail why this logic is wrong.</P>
        {/* TODO: Strengthen with an inequality -- in the inequalities topic, add a problem to determine exactly under which conditions a quadratic equation with positive coefficients does or does not have solutions */}
      </ProblemDescription>
      <ProblemCheck label="Is it true that there are no solutions?" no />
      <ProblemHint>You can find a counterexample in the algebraic identity "square of a sum".</ProblemHint>
      <ProblemAnswer>
        No, this is not true. Counterexample: <M>{math`x^2 + 2x + 1 = 0`}</M> has the root <M>-1</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Counterexample">
          <P>We can prove this statement is wrong if we recall the algebraic identity "square of a sum":</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <P>
            Replace <M>a</M> and <M>b</M> with <M>x</M> and <M>1</M>, and we get:
          </P>
          <BlockMath>{math`x^2 + 2x + 1 = (x + 1)^2`}</BlockMath>
          <P>It turns out that we can build this kind of "positive" quadratic equation:</P>
          <BlockMath>{math`x^2 + 2x + 1 = 0 \\ (x+1)^2 = 0`}</BlockMath>
          <P>
            The root of this equation is <M>-1</M>. This is the counterexample that disproves the claim that if all
            terms of a quadratic equation have a <M>+</M> sign, then it has no solutions.
          </P>
        </ProblemSection>
        <ProblemSection title="Why is this statement wrong?">
          <P>
            Even though all coefficients really are positive, this statement does not take into account that the root
            itself may be negative. When the root is negative, the positive terms <M>{math`Ax^2`}</M> and <M>C</M> can
            sometimes be offset by the negative term <M>Bx</M>, and the sum will be <M>0</M>, which is exactly the
            solution of the equation!
          </P>
        </ProblemSection>
      </ProblemSolution>
      <ProblemNote>
        Even though the statement in the problem is wrong, we can still get an interesting mathematical fact from it. If
        we have a "positive" quadratic equation with positive coefficients, then its roots, if it has any, will always
        be negative!
      </ProblemNote>
    </Problem>

    <Problems title="Variable Substitution" level="medium" method pretty>
      <P>Solve the equation:</P>

      <SubProblem label="Sample">
        <ProblemDescription>
          <BlockMath>{math`x^4 - 7x^2 - 144 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[4, -4]} />
        <ProblemHint>
          Introduce the notation <M>{math`t = x^2`}</M>. Replace <M>{math`x^2`}</M> in the equation with <M>t</M> and{' '}
          <M>{math`x^4`}</M> with <M>{math`t^2`}</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 4 >> x_2 = -4`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>What?! This is not a quadratic equation at all, you may rightly say. True. But we will solve it anyway.</P>
          <P>
            Notice that <M>{math`x^4`}</M> can be written as <M>{math`(x^2)^2`}</M>:
          </P>
          <BlockMath>{math`(x^2)^2 - 7x^2 - 144 = 0`}</BlockMath>
          <P>
            We notice that <M>{math`x^2`}</M> appears twice. Let us denote this <M>{math`x^2`}</M> by the letter{' '}
            <M>t</M>:
          </P>
          <BlockMath>{math`t^2 - 7t - 144 = 0`}</BlockMath>
          <P>
            And this is already the most ordinary quadratic equation in general form! Solving it in any way (by
            completing the square or by the quadratic formula), we find two roots:
          </P>
          <BlockMath>{math`t_1 = 16 >> t_2 = -9`}</BlockMath>
          <P>
            But we remember that <M>{math`t = x^2`}</M>. So we replace <M>t</M> back with the original{' '}
            <M>{math`x^2`}</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x^2 = 16 >> x^2 = -9`}</BlockMath>
          <P>
            The first sub-equation has two roots: <M>4</M> and <M>-4</M>. But the second sub-equation has no solutions,
            because the square of a number cannot be negative.
          </P>
          <P>
            So, the original scary, complicated, and unsolvable-looking equation has only two roots: <M>4</M> and{' '}
            <M>-4</M>!
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^6 + 9x^3 + 8 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-2, -1]} />
        <ProblemHint>
          Make the substitution <M>{math`t = x^3`}</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -2 >> x_2 = -1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that <M>{math`x^6`}</M> can be written as <M>{math`(x^3)^2`}</M>:
          </P>
          <BlockMath>{math`(x^3)^2 + 9x^3 + 8 = 0`}</BlockMath>
          <P>
            We notice that <M>{math`x^3`}</M> appears twice. Let us denote this <M>{math`x^3`}</M> by the letter{' '}
            <M>t</M>:
          </P>
          <BlockMath>{math`t^2 + 9t + 8 = 0`}</BlockMath>
          <P>
            And this is already the most ordinary quadratic equation in general form! This equation is monic, so it can
            be solved mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = -9 \\
              t_1t_2 = 8
            \end{cases}
          `}</BlockMath>
          <P>
            The sum of the roots is <M>-9</M>, and the product is <M>8</M>. Clearly these are the numbers <M>-8</M> and{' '}
            <M>-1</M>. They are also the roots of our equation in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = -8 >> t_2 = -1`}</BlockMath>
          <P>
            But we remember that <M>{math`t = x^3`}</M>. So we replace <M>t</M> back with the original{' '}
            <M>{math`x^3`}</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x^3 = -8 >> x^3 = -1`}</BlockMath>
          <P>
            Which number, multiplied by itself three times, gives <M>-8</M>? That number is <M>-2</M>. And which number,
            multiplied by itself three times, gives <M>-1</M>? That number is <M>-1</M>.
          </P>
          <P>We get two roots of the original equation:</P>
          <BlockMath>{math`x_1 = -2 >> x_2 = -1`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{4}{x^2+4} + \frac{5}{x^2 + 5} = 2`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0]} />
        <ProblemHint>
          Make the substitution <M>{math`t = x^2`}</M>.
        </ProblemHint>
        <ProblemAnswer>
          <M>0</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We notice that the equation contains only <M>{math`x^2`}</M>. Let us denote it by the letter <M>t</M>:
          </P>
          <BlockMath>{math`\frac{4}{t+4} + \frac{5}{t + 5} = 2`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, multiply both sides by <M>{math`(t+4)(t+5)`}</M>:
          </P>
          <BlockMath>{math`4(t+5) + 5(t+4) = 2(t+4)(t+5)`}</BlockMath>
          <P>
            Subtract <M>{math`2(t+4)(t+5)`}</M> from both sides:
          </P>
          <BlockMath>{math`4(t+5) + 5(t+4) - 2(t+4)(t+5) = 0`}</BlockMath>
          <P>Open the parentheses and combine like terms:</P>
          <BlockMath>{math`
            4t + 20 + 5t + 20 - 2(t^2 + 9t + 20) = 0
            \\
            4t + 5t + 20 + 20 - 2t^2 - 18t - 40 = 0
            \\
            -2t^2 - 9t = 0
          `}</BlockMath>
          <P>
            Factor out <M>-t</M>:
          </P>
          <BlockMath>{math`-t(2t + 9) = 0`}</BlockMath>
          <P>
            For the left side to become <M>0</M> and the equality to be true, either <M>t</M> must be <M>0</M> (this is
            the first root), or <M>2t + 9</M> must be <M>0</M>:
          </P>
          <BlockMath>{math`2t_2 + 9 = 0 \\ t_2 = -\frac{9}{2}`}</BlockMath>
          <P>
            So, we have two roots in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 0 >> t_2 = -\frac{9}{2}`}</BlockMath>
          <P>
            But we remember that <M>{math`t = x^2`}</M>. So we replace <M>t</M> back with the original{' '}
            <M>{math`x^2`}</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x^2 = 0 >>{big} x^2 = -\frac{9}{2}`}</BlockMath>
          <P>
            The first sub-equation has one root: <M>0</M>. But the second sub-equation has no solutions, because the
            square of a number cannot be negative.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2 + x - 2}{x} + \frac{2x}{x^2 + x - 2} - 3 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['sqrt(2)', '-sqrt(2)', 2, -1]} />
        <ProblemHint>
          <P>Make the substitution:</P>
          <BlockMath>{math`t = \frac{x^2 + x - 2}{x}`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = \sqrt{2} >> x_2 = -\sqrt{2} >> x_3 = 2 >> x_4 = -1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that the fraction in the middle is the inverted fraction from the left. Let us denote this fraction
            by the letter <M>t</M>:
          </P>
          <BlockMath>{math`t = \frac{x^2 + x - 2}{x}`}</BlockMath>
          <P>Then the equation can be rewritten like this:</P>
          <BlockMath>{math`t + \frac{2}{t} - 3 = 0`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, multiply both sides by <M>t</M>:
          </P>
          <BlockMath>{math`t^2 - 3t + 2 = 0`}</BlockMath>
          <P>
            Solve this monic quadratic equation mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = 3 \\
              t_1t_2 = 2
            \end{cases}
          `}</BlockMath>
          <P>
            Here it is immediately clear that only the numbers <M>1</M> and <M>2</M> multiply to <M>2</M> and add up to{' '}
            <M>3</M>. They are also the roots of our equation in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 1 >> t_2 = 2`}</BlockMath>
          <P>
            Replace <M>t</M> back with the fraction and get two sub-equations:
          </P>
          <BlockMath>{math`\frac{x^2 + x - 2}{x} = 1 >>{big} \frac{x^2 + x - 2}{x} = 2`}</BlockMath>
          <P>
            Multiply both sides of both equations by <M>x</M>:
          </P>
          <BlockMath>{math`x^2 + x - 2 = x >>{big} x^2 + x - 2 = 2x`}</BlockMath>
          <P>
            In the first sub-equation, subtract <M>x</M> from both sides, and in the second subtract <M>2x</M>:
          </P>
          <BlockMath>{math`x^2 - 2 = 0 >>{big} x^2 - x - 2 = 0`}</BlockMath>
          <P>
            Solve both of these equations however you like (they can be solved mentally) and get the following roots:
          </P>
          <BlockMath>{math`x_1 = \sqrt{2} >> x_2 = -\sqrt{2} >> x_3 = 2 >> x_4 = -1`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2 + 2x + 1}{x^2 + 2x + 2} + \frac{x^2 + 2x + 2}{x^2 + 2x + 3} = \frac{7}{6}`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, -2]} />
        <ProblemHint>
          <P>Make the substitution:</P>
          <BlockMath>{math`t = x^2 + 2x`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 0 >> x_2 = -2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We notice that in the fractions, in both numerator and denominator, the expression <M>{math`x^2 + 2x`}</M>{' '}
            keeps repeating. Let us denote this expression by the letter <M>t</M>:
          </P>
          <BlockMath>{math`\frac{t+1}{t+2} + \frac{t+2}{t+3} = \frac{7}{6}`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, multiply both sides by <M>{math`6(t+2)(t+3)`}</M>:
          </P>
          <BlockMath>{math`6(t+3)(t+1) + 6(t+2)^2 = 7(t+2)(t+3)`}</BlockMath>
          <P>
            Subtract <M>{math`7(t+2)(t+3)`}</M> from both sides:
          </P>
          <BlockMath>{math`6(t+3)(t+1) + 6(t+2)^2 - 7(t+2)(t+3) = 0`}</BlockMath>
          <P>Open the parentheses and combine like terms:</P>
          <BlockMath>{math`
            6(t^2 + 4t + 3) + 6(t^2 + 4t + 4) - 7(t^2 + 5t + 6) = 0
            \\
            6t^2 + 24t + 18 + 6t^2 + 24t + 24 - 7t^2 - 35t - 42 = 0
            \\
            5t^2 + 13t = 0
          `}</BlockMath>
          <P>
            Factor out <M>t</M>:
          </P>
          <BlockMath>{math`t(5t + 13) = 0`}</BlockMath>
          <P>
            For the left side to become <M>0</M> and the equality to be true, either <M>t</M> must be <M>0</M> (this is
            the first root), or <M>5t + 13</M> must be <M>0</M>:
          </P>
          <BlockMath>{math`5t_2 + 13 = 0 \\ t_2 = -\frac{13}{5}`}</BlockMath>
          <P>
            So, we have two roots in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 0 >> t_2 = -\frac{13}{5}`}</BlockMath>
          <P>
            But we remember that <M>{math`t = x^2 + 2x`}</M>. So we replace <M>t</M> back with the original expression
            and get two sub-equations:
          </P>
          <BlockMath>{math`x^2 + 2x = 0 >>{big} x^2 + 2x = -\frac{13}{5}`}</BlockMath>
          <BlockMath>{math`x(x+2) = 0 >>{big} 5x^2 + 10x + 13 = 0`}</BlockMath>
          <P>
            The first sub-equation has two roots: <M>0</M> and <M>-2</M>. But the second sub-equation has no solutions,
            because its discriminant is negative and equal to <M>-120</M>.
          </P>
          <P>
            So the original equation also has only two roots: <M>0</M> and <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{21}{x^2-4x+10} - x^2 + 4x = 6`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[3, 1]} />
        <ProblemHint>
          <P>Make the substitution:</P>
          <BlockMath>{math`t = x^2 - 4x`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 3 >> x_2 = 1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We notice that in the middle we almost have the same expression <M>{math`x^2-4x`}</M> as in the denominator
            of the fraction. Factor out <M>-1</M> in the middle:
          </P>
          <BlockMath>{math`\frac{21}{x^2-4x+10} - (x^2 - 4x) = 6`}</BlockMath>
          <P>
            Introduce the notation <M>{math`t = x^2 - 4x`}</M>:
          </P>
          <BlockMath>{math`\frac{21}{t + 10} - t = 6`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, multiply both sides by <M>t + 10</M>:
          </P>
          <BlockMath>{math`21 - t(t+10) = 6(t + 10)`}</BlockMath>
          <P>
            Subtract <M>{math`6(t + 10)`}</M> from both sides:
          </P>
          <BlockMath>{math`21 - t(t+10) - 6(t + 10) = 0`}</BlockMath>
          <P>Open the parentheses and combine like terms:</P>
          <BlockMath>{math`-t^2 - 16t - 39 = 0`}</BlockMath>
          <P>
            Multiply both sides by <M>-1</M>:
          </P>
          <BlockMath>{math`t^2 + 16t + 39 = 0`}</BlockMath>
          <P>
            Solve this monic quadratic equation mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = -16 \\
              t_1t_2 = 39
            \end{cases}
          `}</BlockMath>
          <P>
            Here it is immediately clear that only the numbers <M>-3</M> and <M>-13</M> multiply to <M>39</M> and add up
            to <M>-16</M>. They are also the roots of our equation in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = -3 >> t_2 = -13`}</BlockMath>
          <P>
            Replace <M>t</M> back with the expression <M>{math`x^2-4x`}</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x^2 - 4x = -3 >>{big} x^2 - 4x = -13`}</BlockMath>
          <BlockMath>{math`x^2 -4x + 3 = 0 >>{big} x^2 -4x + 13 = 0`}</BlockMath>
          <P>
            The first sub-equation is solved mentally and has two roots: <M>3</M> and <M>1</M>. But the second
            sub-equation has no solutions, because its discriminant is negative and equal to <M>-36</M>.
          </P>
          <P>
            So the original equation also has only two roots: <M>3</M> and <M>1</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Blood and Sweat" level="hard">
      <P>Solve the equation:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2+x+2}{3x^2+5x-14} = \frac{x^2+x+6}{3x^2+5x-10}`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-4, 2]} />
        <ProblemHint>
          <P>
            You can solve the equation directly too, but it will be very tedious and bulky. So it is better to make a
            double substitution:
          </P>
          <BlockMath>{math`u = x^2 + x + 2 >>{big} v = 3x^2 + 5x - 14`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -4 >> x_2 = 2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that with minimal changes, the expressions in the fraction on the right can be turned into the
            expressions from the fraction on the left:
          </P>
          <BlockMath>{math`\frac{x^2+x+2}{3x^2+5x-14} = \frac{(x^2+x+2) + 4}{(3x^2+5x-14) + 4}`}</BlockMath>
          <P>
            Replace the identical expressions with the letters <M>u</M> and <M>v</M>:
          </P>
          <BlockMath>{math`\frac{u}{v} = \frac{u+4}{v+4}`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, multiply both sides by <M>{math`v(v+4)`}</M>:
          </P>
          <BlockMath>{math`u(v+4) = v(u+4)`}</BlockMath>
          <P>Open the parentheses:</P>
          <BlockMath>{math`uv + 4u = uv + 4v`}</BlockMath>
          <P>
            Subtract <M>uv</M> from both sides:
          </P>
          <BlockMath>{math`4u = 4v`}</BlockMath>
          <P>
            Divide both sides by <M>4</M>:
          </P>
          <BlockMath>{math`u = v`}</BlockMath>
          <P>Return to the original expressions:</P>
          <BlockMath>{math`x^2 + x + 2 = 3x^2 + 5x - 14`}</BlockMath>
          <P>Collect all terms on the right side:</P>
          <BlockMath>{math`0 = 2x^2 + 4x - 16`}</BlockMath>
          <P>
            Divide both sides by <M>2</M>:
          </P>
          <BlockMath>{math`0 = x^2 + 2x - 8`}</BlockMath>
          <P>
            Solve this monic quadratic equation mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -2 \\
              x_1x_2 = -8
            \end{cases}
          `}</BlockMath>
          <P>
            Here it is immediately clear that only the numbers <M>-4</M> and <M>2</M> multiply to <M>-8</M> and add up
            to <M>-2</M>. They are also the roots of our equation:
          </P>
          <BlockMath>{math`x_1 = -4 >> x_2 = 2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x^2 + 2x)^2 - (x+1)^2 = 55`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[2, -4]} />
        <ProblemHint>
          <P>Make the substitution:</P>
          <BlockMath>{math`t = x^2 + 2x`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 2 >> x_2 = -4`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Square the parentheses on the right and get:</P>
          <BlockMath>{math`(x^2 + 2x)^2 - (x^2 + 2x + 1) = 55`}</BlockMath>
          <P>
            Notice that on the left side we have two identical expressions <M>{math`x^2 + 2x`}</M>. Let us denote this
            expression by the letter <M>t</M>:
          </P>
          <BlockMath>{math`t^2 - (t + 1) = 55 \\ t^2 - t - 1 = 55 \\ t^2 - t - 56 = 0`}</BlockMath>
          <P>
            Solve this monic quadratic equation mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = 1 \\
              t_1t_2 = -56
            \end{cases}
          `}</BlockMath>
          <P>
            Here it is immediately clear that only the numbers <M>8</M> and <M>-7</M> multiply to <M>-56</M> and add up
            to <M>1</M>. They are also the roots of our equation in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 8 >> t_2 = -7`}</BlockMath>
          <P>
            Replace <M>t</M> back with the expression <M>{math`x^2 + 2x`}</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x^2 + 2x = 8 >>{big} x^2 + 2x = -7`}</BlockMath>
          <BlockMath>{math`x^2 + 2x - 8 = 0 >>{big} x^2 + 2x + 7 = 0`}</BlockMath>
          <P>
            The first sub-equation is solved mentally and has two roots: <M>2</M> and <M>-4</M>. But the second
            sub-equation has no solutions, because its discriminant is negative and equal to <M>-24</M>. So the original
            equation also has only two roots: <M>2</M> and <M>-4</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x^2 - 3x)^2 - 14x^2 + 42x + 40 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[5, -2, 4, -1]} />
        <ProblemHint>
          <P>Make the substitution:</P>
          <BlockMath>{math`t = x^2 - 3x`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 5 >> x_2 = -2 >> x_3 = 4 >> x_4 = -1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In the middle expression, factor out <M>-14</M>:
          </P>
          <BlockMath>{math`(x^2 - 3x)^2 -14(x^2 - 3x) + 40 = 0`}</BlockMath>
          <P>
            Notice that on the left side we have two identical expressions <M>{math`x^2 - 3x`}</M>. Let us denote this
            expression by the letter <M>t</M>:
          </P>
          <BlockMath>{math`t^2 - 14t + 40 = 0`}</BlockMath>
          <P>
            Solve this monic quadratic equation mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = 14 \\
              t_1t_2 = 40
            \end{cases}
          `}</BlockMath>
          <P>
            Here it is immediately clear that only the numbers <M>10</M> and <M>4</M> multiply to <M>40</M> and add up
            to <M>14</M>. They are also the roots of our equation in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 10 >> t_2 = 4`}</BlockMath>
          <P>
            Replace <M>t</M> back with the expression <M>{math`x^2 - 3x`}</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x^2 - 3x = 10 >>{big} x^2 - 3x = 4`}</BlockMath>
          <BlockMath>{math`x^2 - 3x - 10 = 0 >>{big} x^2 - 3x - 4 = 0`}</BlockMath>
          <P>
            The first sub-equation is solved mentally and has two roots: <M>5</M> and <M>-2</M>. The second sub-equation
            is also solved mentally and has two roots: <M>4</M> and <M>-1</M>. So the original equation has four roots:{' '}
            <M>5</M>, <M>-2</M>, <M>4</M>, and <M>-1</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x-2)(x-3)^2(x-4) = 20`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['3+sqrt(5)', '3-sqrt(5)']} />
        <ProblemHint>
          Multiply the first factor by the third, and in the middle expand the square. Denote the identical expressions
          in parentheses by the letter <M>t</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 3 + \sqrt{5} >> x_2 = 3 - \sqrt{5}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Multiply the first factor by the third, and in the middle expand the square:</P>
          <BlockMath>{math`(x^2 - 6x + 8)(x^2 - 6x + 9) = 20`}</BlockMath>
          <P>
            Notice that on the left side we have two identical expressions <M>{math`x^2 - 6x`}</M>. Let us denote this
            expression by the letter <M>t</M>:
          </P>
          <BlockMath>{math`(t + 8)(t + 9) = 20 \\ t^2 + 17t + 72 = 20 \\ t^2 + 17t + 52 = 0`}</BlockMath>
          <P>
            Solve this monic quadratic equation mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = -17 \\
              t_1t_2 = 52
            \end{cases}
          `}</BlockMath>
          <P>
            Here it is immediately clear that only the numbers <M>-13</M> and <M>-4</M> multiply to <M>52</M> and add up
            to <M>-17</M>. They are also the roots of our equation in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = -13 >> t_2 = -4`}</BlockMath>
          <P>
            Replace <M>t</M> back with the expression <M>{math`x^2 - 6x`}</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x^2 - 6x = -13 >>{big} x^2 - 6x = -4`}</BlockMath>
          <BlockMath>{math`x^2 - 6x + 13 = 0 >>{big} x^2 - 6x + 4 = 0`}</BlockMath>
          <P>
            The first sub-equation has no solutions, because its discriminant is negative and equal to <M>-16</M>. Solve
            the second equation using the quadratic formula. Determine the coefficients:
          </P>
          <BlockMath>{math`A = 1, \enspace B = -6, \enspace C = 4`}</BlockMath>
          <P>Find the discriminant:</P>
          <BlockMath>{math`D = B^2 - 4AC = (-6)^2 - 4\cdot1\cdot4 = 36 - 16 = 20`}</BlockMath>
          <P>Find the roots of the equation:</P>
          <BlockMath>{math`x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{6 \pm \sqrt{20}}{2} = \frac{6 \pm 2\sqrt{5}}{2} = 3 \pm \sqrt{5}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{1}{x(x+2)} - \frac{1}{(x+1)^2} = \frac{1}{12}`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, -3]} />
        <ProblemHint>
          In the denominator of the second fraction, expand the parentheses and factor out <M>x</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 1 >> x_2 = -3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In the denominator of the second fraction, open the parentheses and factor out <M>x</M>.
          </P>
          <BlockMath>{math`
            \frac{1}{x(x+2)} - \frac{1}{x^2 + 2x + 1} = \frac{1}{12}
            \\
            \frac{1}{x(x+2)} - \frac{1}{x(x+2) + 1} = \frac{1}{12}
          `}</BlockMath>
          <P>
            Notice that on the left side we have two identical expressions <M>{math`x(x+2)`}</M>. Let us denote this
            expression by the letter <M>t</M>:
          </P>
          <BlockMath>{math`\frac{1}{t} - \frac{1}{t + 1} = \frac{1}{12}`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, multiply both sides by <M>{math`12t(t + 1)`}</M>:
          </P>
          <BlockMath>{math`12(t + 1) - 12t = t(t + 1)`}</BlockMath>
          <P>Open the parentheses and combine like terms:</P>
          <BlockMath>{math`
            12t + 12 - 12t = t^2 + t
            \\
            12 = t^2 + t
          `}</BlockMath>
          <P>
            Subtract <M>12</M> from both sides:
          </P>
          <BlockMath>{math`0 = t^2 + t - 12`}</BlockMath>
          <P>
            Solve this monic quadratic equation mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = -1 \\
              t_1t_2 = -12
            \end{cases}
          `}</BlockMath>
          <P>
            Here it is immediately clear that only the numbers <M>-4</M> and <M>3</M> multiply to <M>-12</M> and add up
            to <M>-1</M>. They are also the roots of our equation in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = -4 >> t_2 = 3`}</BlockMath>
          <P>
            Replace <M>t</M> back with the expression <M>{math`x(x+2)`}</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x(x+2) = -4 >>{big} x(x+2) = 3`}</BlockMath>
          <BlockMath>{math`x^2 + 2x + 4 = 0 >>{big} x^2 + 2x - 3 = 0`}</BlockMath>
          <P>
            The first sub-equation has no solutions, because its discriminant is negative and equal to <M>-12</M>. The
            second sub-equation can be solved mentally and yields the roots <M>1</M> and <M>-3</M>. These numbers will
            also be the roots of the original equation.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\left( x^2 + \frac{16}{x^2} \right) - x - \frac{4}{x} - 12 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[4, 1, -2]} />
        <ProblemHint>Complete the square in the parentheses on the left.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 4 >> x_2 = 1 >> x_3 = -2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Complete the square on the left in the parentheses:</P>
          <BlockMath>{math`
            \left( \underbrace{x^2 + \yellow{2x\frac{4}{x}} + \frac{16}{x^2}}_{\small a^2 + 2 \cdot a \cdot b + b^2} - \underbrace{\yellow{2x\frac{4}{x}}}_{\small 8} \right) - x - \frac{4}{x} - 12 = 0
            \\
            \left(x + \frac{4}{x}\right)^2 - 8 - \left(x + \frac{4}{x}\right) - 12 = 0
          `}</BlockMath>
          <P>Introduce the notation:</P>
          <BlockMath>{math`t = x + \frac{4}{x}`}</BlockMath>
          <P>Then the equation can be rewritten like this:</P>
          <BlockMath>{math`t^2 - 8 - t - 12 = 0 \\ t^2 - t - 20 = 0`}</BlockMath>
          <P>
            Solve this monic quadratic equation mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>. Clearly
            only the numbers <M>5</M> and <M>-4</M> multiply to <M>-20</M> and add up to <M>1</M>. They are also the
            roots of our equation in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 5 >> t_2 = -4`}</BlockMath>
          <P>
            Replace <M>t</M> back with the expression in <M>x</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x + \frac{4}{x} = 5 >>{big} x + \frac{4}{x} = -4`}</BlockMath>
          <P>
            Multiply both sides of both equations by <M>x</M>:
          </P>
          <BlockMath>{math`x^2 + 4 = 5x >>{big} x^2 + 4 = -4x`}</BlockMath>
          <BlockMath>{math`x^2 - 5x + 4 = 0 >>{big} x^2 + 4x + 4 = 0`}</BlockMath>
          <P>
            Both sub-equations are solved mentally. The first gives two roots: <M>4</M> and <M>1</M>. The second has one
            root <M>-2</M>. So the original equation has three roots: <M>4</M>, <M>1</M>, and <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + 2x + \frac{2}{x} + \frac{1}{x^2} = 1`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['(-3+sqrt(5))/2', '(-3-sqrt(5))/2']} />
        <ProblemHint>Complete the square from the terms with squares.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = \frac{-3 + \sqrt{5}}{2} >> x_2 = \frac{-3 - \sqrt{5}}{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Group the terms with squares. Also factor out <M>2</M> from the remaining terms:
          </P>
          <BlockMath>{math`x^2 + \frac{1}{x^2} + 2\left(x + \frac{1}{x}\right) = 1`}</BlockMath>
          <P>Complete the square on the left:</P>
          <BlockMath>{math`
            \underbrace{x^2 + \yellow{2x\frac{1}{x}} + \frac{1}{x^2}}_{\small a^2 + 2 \cdot a \cdot b + b^2} - \yellow{2x\frac{1}{x}} + 2\left(x + \frac{1}{x}\right) = 1
            \\
            \left(x + \frac{1}{x}\right)^2 - 2 + 2\left(x + \frac{1}{x}\right) = 1
          `}</BlockMath>
          <P>Introduce the notation:</P>
          <BlockMath>{math`t = x + \frac{1}{x}`}</BlockMath>
          <P>Then the equation can be rewritten like this:</P>
          <BlockMath>{math`t^2 + 2t - 2 = 1 \\ t^2 + 2t - 3 = 0`}</BlockMath>
          <P>
            Solve this monic quadratic equation mentally using <Dep on={vietasFormulas}>Vieta's formulas</Dep>. Clearly
            only the numbers <M>1</M> and <M>-3</M> multiply to <M>-3</M> and add up to <M>-2</M>. They are also the
            roots of our equation in <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 1 >> t_2 = -3`}</BlockMath>
          <P>
            Replace <M>t</M> back with the expression in <M>x</M> and get two sub-equations:
          </P>
          <BlockMath>{math`x + \frac{1}{x} = 1 >>{big} x + \frac{1}{x} = -3`}</BlockMath>
          <P>
            Multiply both sides of both equations by <M>x</M>:
          </P>
          <BlockMath>{math`x^2 + 1 = x >>{big} x^2 + 1 = -3x`}</BlockMath>
          <BlockMath>{math`x^2 - x + 1 = 0 >>{big} x^2 + 3x + 1 = 0`}</BlockMath>
          <P>
            The first sub-equation has no solutions, because its discriminant is negative and equal to <M>-3</M>. Solve
            the second sub-equation using the <Dep on={quadraticFormula}>quadratic formula</Dep>:
          </P>
          <BlockMath>{math`x_1 = \frac{-3 + \sqrt{5}}{2} >> x_2 = \frac{-3 - \sqrt{5}}{2}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Ups and Downs" level="hard" method>
      <SubProblem>
        <ProblemDescription>
          <P>
            For what value of the parameter <M>m</M> is the sum of the squares of the roots of the equation smallest?
          </P>
          <BlockMath>{math`x^2 + (2-m)x - m - 3 = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="m" answer={1} />
        <ProblemHint>
          Write out <Dep on={vietasFormulas}>Vieta's formulas</Dep> for this quadratic equation. They will help you
          express the sum of the squares of the roots in terms of <M>m</M>.
        </ProblemHint>
        <ProblemHint>The sum of squares can be completed into the algebraic identity "square of a sum".</ProblemHint>
        <ProblemHint>
          {/* TODO: Link to the "Minimum and Maximum" problem when it exists */}
          Find the minimum using the completing-the-square trick.
        </ProblemHint>
        <ProblemAnswer>
          <M>m = 1</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Write out <Dep on={vietasFormulas}>Vieta's formulas</Dep> for this quadratic equation:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = m - 2 \\
              x_1x_2 = -m - 3
            \end{cases}
          `}</BlockMath>
          <P>Write out the sum of the squares of the roots:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = \cdots`}</BlockMath>
          <P>
            This sum can be represented differently if we add and immediately subtract <M>{math`2x_1x_2`}</M>. Then we
            can pack part of the expression into the algebraic identity "square of a sum":
          </P>
          <BlockMath>{math`\cdots = x_1^2 + \yellow{2x_1x_2} + x_2^2 - \yellow{2x_1x_2} = (x_1 + x_2)^2 - 2x_1x_2 = \cdots`}</BlockMath>
          <P>Substitute the data from Vieta's formulas into the resulting expression:</P>
          <BlockMath>{math`\cdots = (m - 2)^2 - 2(-m - 3) = (m - 2)^2 + 2m + 6 = m^2 - 4m + 4 + 2m + 6 = m^2 - 2m + 10`}</BlockMath>
          <P>So, the sum of the squares of the roots is equal to the quadratic trinomial:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = m^2 - 2m + 10`}</BlockMath>
          <P>
            Since the sum must be as small as possible, we need to find the minimum of this quadratic trinomial.
            Complete the square of the trinomial. To do this, complete it into the algebraic identity "square of a
            difference":
          </P>
          <BlockMath>{math`m^2 - 2m + 10 = m^2 - 2m + \yellow{1} + 10 - \yellow{1} = \boxed{(m - 1)^2 + 9}`}</BlockMath>
          <P>
            We cannot change <M>+9</M> in any way, so the only thing left is to minimize <M>{math`(m-1)^2`}</M>. Since
            this is a square, it cannot be negative, so its minimum is <M>0</M>.
          </P>
          <BlockMath>{math`(m-1)^2 = 0 \\ \boxed{m = 1}`}</BlockMath>
          <P>
            So, when <M>m = 1</M>, the sum of the squares of the roots of the quadratic equation given in the problem
            will be the smallest.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            For what value of the parameter <M>m</M> is the sum of the squares of the roots of the equation largest?
          </P>
          <BlockMath>{math`x^2 + (m-1)x + m^2 - \frac{3}{2} = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="m" answer={-1} />
        <ProblemHint>Use the hint from the first item.</ProblemHint>
        <ProblemAnswer>
          <M>m = -1</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Write out <Dep on={vietasFormulas}>Vieta's formulas</Dep> for this quadratic equation:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = 1 - m \\
              x_1x_2 = m^2 - \frac{3}{2}
            \end{cases}
          `}</BlockMath>
          <P>Write out the sum of the squares of the roots:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = \cdots`}</BlockMath>
          <P>
            This sum can be represented differently if we add and immediately subtract <M>{math`2x_1x_2`}</M>. Then we
            can pack part of the expression into the algebraic identity "square of a sum":
          </P>
          <BlockMath>{math`\cdots = x_1^2 + \yellow{2x_1x_2} + x_2^2 - \yellow{2x_1x_2} = (x_1 + x_2)^2 - 2x_1x_2 = \cdots`}</BlockMath>
          <P>Substitute the data from Vieta's formulas into the resulting expression:</P>
          <BlockMath>{math`\cdots = (1 - m)^2 - 2\left(m^2 - \frac{3}{2}\right) = (1 - m)^2 - 2m^2 + 3 = 1 - 2m + m^2 - 2m^2 + 3 = -m^2 - 2m + 4`}</BlockMath>
          <P>So, the sum of the squares of the roots is equal to the quadratic trinomial:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = -m^2 - 2m + 4`}</BlockMath>
          <P>
            Since the sum must be as large as possible, we need to find the maximum of this quadratic trinomial. Factor
            out the minus sign from the quadratic trinomial:
          </P>
          <BlockMath>{math`-m^2 - 2m + 4 = -\left(m^2 + 2m - 4\right)`}</BlockMath>
          <P>Now complete the square:</P>
          <BlockMath>{math`-\left(m^2 + 2m - 4\right) = -\left(m^2 + 2m + 1 - 1 - 4\right) = -\left([m + 1]^2 - 5\right) = \boxed{5 - (m + 1)^2}`}</BlockMath>
          <P>
            We cannot change <M>5</M> in any way, so the only thing left is to minimize <M>{math`(m + 1)^2`}</M>. Since
            this is a square, it cannot be negative, so its minimum is <M>0</M>.
          </P>
          <BlockMath>{math`(m + 1)^2 = 0 \\ \boxed{m = -1}`}</BlockMath>
          <P>
            So, when <M>m = -1</M>, the sum of the squares of the roots of the quadratic equation given in the problem
            will be the largest.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem $={uniques.quadraticRootClasses} title="Quadratic Root Classes" level="hard" pretty>
      <ProblemDescription>
        <P>
          The three equations below have the same roots and differ from each other only by a common factor by which all
          coefficients were multiplied.
        </P>
        <BlockMath>{math`\underset{\text{Monic}}{x^2 + 6x - 7 = 0} >>{big} \underset{\text{Multiplied by }2}{2x^2 + 12x - 14 = 0} >>{big} \underset{\text{Multiplied by }3}{3x^2 + 18x - 21 = 0}`}</BlockMath>
        <P>
          By dividing both sides of the second equation by <M>2</M>, and the third by <M>3</M>, we get the original
          first equation again. By multiplying both sides of the second equation by <M>{math`\frac{3}{2}`}</M>, we get
          the third equation. In short, all three equations can be reduced to each other by multiplying by some number.
        </P>
        <P>
          But do there exist two equations with <B>the same roots</B> that cannot be reduced to each other by
          multiplication by some number? If they do exist, give an example of such equations. If they do not, prove it
          rigorously.
        </P>
        {/* TODO: Connect this to the space of quadratic equations -- coefficients A, B, and C can be viewed as coordinates of a point in the three-dimensional "space of quadratic equations". Then all quadratic equations with the same roots will lie on one line passing through the origin! */}
      </ProblemDescription>
      <ProblemCheck label="Do such equations exist?" no />
      <ProblemHint>
        <P>
          Prove it by contradiction. Assume that there <B>do exist</B> two quadratic equations with the same roots{' '}
          <M>{math`x_1`}</M> and <M>{math`x_2`}</M> that cannot be reduced to each other:
        </P>
        <BlockMath>{math`A_1x^2 + B_1x + C_1 = 0 >>{big} A_2x^2 + B_2x + C_2 = 0`}</BlockMath>
      </ProblemHint>
      <ProblemHint>
        You need to get a contradiction to prove that such equations do not exist. Use{' '}
        <Dep on={factoring}>factoring</Dep> or <Dep on={vietasFormulas}>Vieta's formulas</Dep>.
      </ProblemHint>
      <ProblemAnswer>
        All quadratic equations with the same roots differ from each other only by a common factor.
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Using Factoring">
          <P>
            We will prove this by contradiction. Assume that there <B>do exist</B> two quadratic equations with the same
            roots <M>{math`x_1`}</M> and <M>{math`x_2`}</M> that cannot be reduced to each other:
          </P>
          <BlockMath>{math`A_1x^2 + B_1x + C_1 = 0 >>{big} A_2x^2 + B_2x + C_2 = 0`}</BlockMath>
          <P>
            Both of these equations have roots, so they can be <Dep on={factoring}>factored</Dep>:
          </P>
          <BlockMath>{math`A_1(x - x_1)(x - x_2) = 0 >>{big} A_2(x - x_1)(x - x_2) = 0`}</BlockMath>
          <P>
            We can see that these forms differ only in the coefficients <M>{math`A_1`}</M> and <M>{math`A_2`}</M>. But
            coefficient <M>{math`A_2`}</M> can <B>always</B> be obtained from <M>{math`A_1`}</M> by multiplying by some
            number <M>k</M>.
          </P>
          <BlockMath>{math`A_2 = k \cdot A_1`}</BlockMath>
          <P>
            Therefore, it is enough to multiply both sides of the left equation by this very <M>k</M> by the{' '}
            <Dep on={sameActionRule}>same action rule</Dep>, and we get the right equation:
          </P>
          <BlockMath>{math`
              A_1(x - x_1)(x - x_2) = 0
              \\
              \overbrace{\yellow{k} \cdot A_1}^{A_2}(x - x_1)(x - x_2) = 0 \cdot \yellow{k}
              \\
              A_2(x - x_1)(x - x_2) = 0
            `}</BlockMath>
          <P>
            But this essentially means that both equations originally declared "not reducible" are in fact{' '}
            <B>reducible</B> to each other! We got a contradiction: the equations are simultaneously not reducible and
            reducible to each other! Since we arrived at a contradiction, our original assumption about the existence of
            two quadratic equations with the same roots that cannot be reduced to each other is false. Therefore, there{' '}
            <B>do not exist</B> two quadratic equations with the same roots that cannot be reduced to each other.
          </P>
          <P>All quadratic equations with the same roots differ from each other only by a common factor!</P>
          <QED />
        </ProblemSection>
        <ProblemSection title="Using Vieta's Formulas">
          <P>
            We will prove this by contradiction. Assume that there <B>do exist</B> two quadratic equations with the same
            roots <M>{math`x_1`}</M> and <M>{math`x_2`}</M> that cannot be reduced to each other:
          </P>
          <BlockMath>{math`A_1x^2 + B_1x + C_1 = 0 >>{big} A_2x^2 + B_2x + C_2 = 0`}</BlockMath>
          <P>
            Write out <Dep on={vietasFormulas}>Vieta's formulas</Dep> for both equations:
          </P>
          <BlockMath>{math`
              \begin{cases}
                x_1 + x_2 = -\frac{B_1}{A_1} \\
                x_1 \cdot x_2 = \frac{C_1}{A_1}
              \end{cases} >>{big}
              \begin{cases}
                x_1 + x_2 = -\frac{B_2}{A_2} \\
                x_1 \cdot x_2 = \frac{C_2}{A_2}
              \end{cases}
            `}</BlockMath>
          <P>
            Since the sum <M>{math`x_1 + x_2`}</M> is equal to both the fraction <M>{math`-\frac{B_1}{A_1}`}</M> and the
            fraction <M>{math`-\frac{B_2}{A_2}`}</M>, those fractions must also be equal to each other:
          </P>
          <BlockMath>{math`
              -\frac{B_1}{A_1} = x_1 + x_2 = -\frac{B_2}{A_2}
              \\
              -\frac{B_1}{A_1} = -\frac{B_2}{A_2}
            `}</BlockMath>
          <P>
            Get rid of the distracting minus signs by the <Dep on={sameActionRule}>same action rule</Dep>, multiplying
            both sides of the equality by <M>-1</M>:
          </P>
          <BlockMath>{math`\frac{B_1}{A_1} = \frac{B_2}{A_2}`}</BlockMath>
          <P>
            Since we assume that the equations cannot be reduced to each other, these fractions cannot be reduced to
            each other either, that is, the second fraction cannot be obtained from the first by multiplying numerator
            and denominator by the same number. In the language of mathematics, this can be written like this:
          </P>
          <BlockMath>{math`\frac{B_1}{A_1} = \frac{\overbrace{n \cdot B_1}^{B_2}}{\underbrace{m \cdot A_1}_{A_2}}, \enspace n \neq m`}</BlockMath>
          <P>
            This notation shows explicitly that to obtain <M>{math`B_2`}</M> and <M>{math`A_2`}</M>, we must multiply{' '}
            <M>{math`B_1`}</M> and <M>{math`A_1`}</M> by some <B>necessarily different</B> numbers <M>n</M> and <M>m</M>
            .
          </P>
          <P>
            Multiply both sides of the equality by <M>{math`A_1`}</M>:
          </P>
          <BlockMath>{math`
              \frac{B_1\cdot\cancel{A_1}}{\cancel{A_1}} = \frac{n \cdot B_1 \cdot \cancel{A_1}}{m \cdot \cancel{A_1}}
              \\
              B_1 = \frac{n}{m}B_1
            `}</BlockMath>
          <P>
            This equality must be true. Since it is true, it must be that <M>n = m</M>, so that these numbers cancel and
            we get simply <M>{math`B_1 = B_1`}</M>.
          </P>
          <P>
            Wait! But <M>n</M> and <M>m</M> must be <B>different</B> numbers, because these fractions, like the original
            quadratic equations, cannot be reduced to each other!
          </P>
          <P>
            We got a contradiction: we need mutually opposite things to be true at the same time, both <M>n = m</M> and{' '}
            <M>{math`n \neq m`}</M>! Since we arrived at a contradiction, our original assumption about the existence of
            two quadratic equations with the same roots that cannot be reduced to each other is false. Therefore, there{' '}
            <B>do not exist</B> two quadratic equations with the same roots that cannot be reduced to each other.
          </P>
          <P>All quadratic equations with the same roots differ from each other only by a common factor!</P>
          <QED />
        </ProblemSection>
      </ProblemSolution>
      <ProblemNote>
        <P>
          This problem leads to a beautiful and interesting mathematical fact. The same fact also{' '}
          <Ref to={linearRootClasses}>works</Ref> for linear equations.
        </P>
        <P>
          Any pair of roots <M>{math`x_1`}</M> and <M>{math`x_2`}</M> forms a <B>whole class</B> of quadratic equations,
          all of which differ from each other only by multiplying both sides by the same number. If you know one
          equation from this class, you can get any other equation from this class by multiplying it by any number. And
          all these equations will have the same roots.
        </P>
        <P>
          Moreover, there <B>do not exist</B> quadratic equations with the same roots that do not belong to this class.
          This class contains absolutely all possible quadratic equations with the given roots!
        </P>
        <P>
          It turns out that the entire set of all quadratic equations is divided into classes, "bags". Each such class,
          each "bag" of equations, has its own "tag" written with the roots that all equations in this bag have. All
          equations in the bag differ only by multiplying both sides by the same number!
        </P>
        <Image src={rootClasses} width="500px" invert="dark">
          <Caption>
            All quadratic equations are stuffed into "bags" with the same roots
            <CaptionSecondary>Equations in one bag differ only by a common factor</CaptionSecondary>
          </Caption>
        </Image>
        <P>
          This situation is similar to how any fraction, for example <M>{math`\frac{1}{2}`}</M>, forms a{' '}
          <B>whole class of fractions denoting the same thing</B>, which differ from each other only by multiplying the
          numerator and denominator by the same number:
        </P>
        <BlockMath>{math`\frac{1}{2} = \frac{2}{4} = \frac{3}{6} = \cdots`}</BlockMath>
      </ProblemNote>
    </Problem>
  </>
));
