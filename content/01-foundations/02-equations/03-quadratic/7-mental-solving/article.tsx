// #region Assets
//
//

import areYouAdvancedMeme from './assets/are-you-advanced.mp4';
import methodSquareSchema from './assets/method-square.svg';
import methodFactoringSchema from '../5-factoring/assets/factoring-step-1.svg';
import methodAtoCSchema from './assets/method-A-to-C-schema.svg';

//
//
// #endregion

// #region Scripts
//
//

import zeroSumScript from './scripts/zero-sum';
import perfectSquareScript from './scripts/perfect-square';
import factoringScript from './scripts/factoring';
import atoCScript from './scripts/a-to-c';
import mixedScript from './scripts/mixed';

//
//
// #endregion

// #region Links
//
//

const zeroProductProperty = $CONTENT.foundations.equations.zeroProductProperty;
const incompleteQuadratics = $CONTENT.foundations.equations.quadratic.incomplete;
const incompleteQuadraticsDef = $CONTENT.foundations.equations.quadratic.incomplete.article.$quadraticMissingTerms;
const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;
const oneRootOne = $CONTENT.foundations.equations.quadratic.factoring.practice.$oneRootOne;
const vietasFormulas = $CONTENT.foundations.equations.quadratic.vietasFormulas.article.$vietasFormulas;
const manualFactoring = $CONTENT.foundations.equations.quadratic.factoring.article.$manualFactoring;

//
//
// #endregion

export default defineProse({
  uniques: {
    methodsIncomplete: Diagram,
    methodZeroSum: Statement,
    methodSquare: Statement,
    methodFactoring: Statement,
    methodAtoC: Statement,
    methodsAll: Diagram,
    methodsAllPractice: Problem,
  },
})(({ uniques }) => (
  <>
    <P>
      Any quadratic equation can be solved with the <Ref to={quadraticFormula}>quadratic formula</Ref>. But there is a
      special breed of people who like doing everything fast in their head and hate writing shit down on paper. If
      that's you too, you're in the right place.
    </P>

    <P>
      Mental solving of quadratic equations has a very real upside too -- in school, and pretty often even at
      university, quadratic equations are deliberately picked so their roots come out "nice," usually integers. If you
      know how to solve them in your head, you will spend <B>way less time</B> on them. And your classmates will get to
      watch you do math black magic and stare blankly for a bit. We all want to feel like Gauss or Euler once in a
      while, right? 😏
    </P>

    <Important title="Learn to solve them on paper first!">
      Before you try solving quadratic equations mentally, learn to solve them confidently in writing. It is{' '}
      <B accent>useless and pointless</B> to do in your head what you still cannot do properly even on paper.
    </Important>

    <H1>Incomplete Equations</H1>

    <P>
      All <Dep on={incompleteQuadraticsDef}>incomplete quadratic equations</Dep> can and should be solved mentally.
      Unlike full quadratic equations, there is nothing to guess there. They always have a straightforward and easy
      solution.
    </P>

    <Diagram
      $={uniques.methodsIncomplete}
      snippet={{
        key: true,
        seo: 'Mental solving of incomplete quadratics',
        title: 'Incomplete equations',
        description: `
          Every incomplete quadratic equation can be solved mentally by one of three formulas.
          There is nothing to guess.
          The solution is straightforward.
        `,
      }}
    >
      {math`
        flowchart TD
          methods["**Mental solving**<br />Incomplete quadratics"]

          methods --> methodB0["
            **B equals 0**
            $$ \begin{aligned} Ax^2 + C = 0 \\ 5x^2 - 20 = 0 \end{aligned} $$
          "]
          methodB0 --> rootsB0["$$x_{1,2} = \pm\sqrt{-\frac{C}{A}}$$"]

          methods --> methodC0["
            **C equals 0**
            $$ \begin{aligned} Ax^2 + Bx = 0 \\ 3x^2 + 12x = 0 \end{aligned} $$
          "]
          methodC0 --> root1C0["$$x_1 = 0$$"]
          methodC0 -->|1st Vieta formula| root2C0["$$x_2 = -\frac{B}{A}$$"]

          methods --> methodBC0["
            **B and C equal 0**
            $$ \begin{aligned} Ax^2 = 0 \\ 4x^2 = 0 \end{aligned} $$
          "]
          methodBC0 --> rootBC0["$$x_1 = x_2 = 0$$"]

        class methodB0,methodC0,methodBC0 fill
      `}
      <Caption>Ways to solve incomplete quadratics mentally</Caption>
    </Diagram>

    <P>
      If you're supposedly advanced, there should be no "where the hell did those formulas come from?" questions here.
      You're advanced and you didn't come here just for the memes, right? 👀
    </P>

    <Video src={areYouAdvancedMeme} autoplay />

    <P>
      Kidding 😏 But if you still got stuck, the full derivation lives in the topic on{' '}
      <Dep on={incompleteQuadratics}>incomplete quadratic equations</Dep>. From here on we only deal with full quadratic
      equations, and those are a lot trickier.
    </P>

    <H1>Zero Sum</H1>

    <P>
      The fastest and easiest method. Honestly, everyone who cares about mathematics should know it, whether or not they
      plan to solve quadratics mentally.
    </P>

    <Statement
      $={uniques.methodZeroSum}
      title="Zero sum"
      snippet={{
        key: true,
        seo: 'Mental solving of quadratic equations from the sum of coefficients',
        description: `
          A zero sum of coefficients lets you get the roots instantly.
          This is the simplest and most useful way to solve quadratic equations mentally.
        `,
      }}
    >
      <StatementMain>
        <P>
          If the sum of the coefficients of a quadratic equation is <M>0</M>, then one root is <M>1</M>, and the other
          is <M>C/A</M>. If you take the sum using negative <M>-B</M>, then both roots are negative too:
        </P>
        <BlockMath>{math`
          A + B + C = 0 \\
          \boxed{x_1 = 1 \quad x_2 = \frac{C}{A}}
          >>{big}
          A - B + C = 0 \\
          \boxed{x_1 = -1 \quad x_2 = -\frac{C}{A}}
        `}</BlockMath>
      </StatementMain>
      <StatementProof>
        See the proof in the solution of <Dep on={oneRootOne}>One root is one</Dep>.
      </StatementProof>
    </Statement>

    <P>
      Roots <M>1</M> and <M>-1</M> are easy enough, but how do you remember the second root? You can forget it if you
      want. No tragedy. Just use the second <Dep on={vietasFormulas}>Vieta formula</Dep>, the one about multiplication:
    </P>

    <BlockMath>{math`
      x_1 \cdot x_2 = \frac{C}{A} >>{big}
      \pm 1 \cdot x_1 = \pm \frac{C}{A}
    `}</BlockMath>

    <P>Now look at the examples and drill this method properly on actual equations instead of just nodding along.</P>

    <Problems title="Zero sum -- Practice" level="easy" method>
      <P>
        Decide mentally whether the quadratic equation can be solved by the{' '}
        <Dep on={uniques.methodZeroSum}>zero-sum method</Dep>. If yes, solve it mentally too. If not, explain why.
      </P>

      <SubProblem label="Plus sum">
        <ProblemDescription>
          <BlockMath>{math`2x^2 + 3x - 5 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, '-5/2']} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 1 >>{big} x_2 = -\frac{5}{2}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>The sum of the coefficients is zero:</P>
          <BlockMath>2 + 3 - 5 = 0</BlockMath>
          <P>
            So one root is <M>1</M>, and the second one is computed with the formula <M>C/A</M>:
          </P>
          <BlockMath>{math`
            x_1 = 1 >>{big}
            x_2 = \frac{-5}{2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Minus sum">
        <ProblemDescription>
          <BlockMath>{math`4y^2 + 5y + 1 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-1, '-1/4']} />
        <ProblemAnswer>
          <BlockMath>{math`
            y_1 = -1 >>{big} y_2 = -\frac{1}{4}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The coefficient sum with negative <M>B</M> is zero:
          </P>
          <BlockMath>4 - 5 + 1 = 0</BlockMath>
          <P>
            So one root is <M>-1</M>, and the second one is computed by <M>-C/A</M>:
          </P>
          <BlockMath>{math`
            y_1 = -1 >>{big}
            y_2 = -\frac{1}{4}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Practice" script={zeroSumScript()} />
    </Problems>

    <P>
      Because this check is so stupidly simple and so effective, you should always test the coefficient sum first,
      before you start solving by hand or move on to trickier mental methods. It takes a couple of seconds and sometimes
      gives the answer instantly.
    </P>

    <H1>Perfect Square</H1>

    <P>
      If there are formulas that never leave you to die, it is the special-product formulas. More specifically, the
      square of a sum and the square of a difference:
    </P>

    <BlockMath>{math`a^2 + 2ab + b^2 = (a + b)^2 >>{big} a^2 - 2ab + b^2 = (a - b)^2`}</BlockMath>

    <P>
      If you get lucky, the whole quadratic equation can be packed into one squared bracket and the root drops out
      immediately.
    </P>

    <Statement
      $={uniques.methodSquare}
      title="Perfect square"
      snippet={{
        key: true,
        seo: 'Mental solving of quadratic equations through a perfect square',
        description: `
          Sometimes a quadratic equation can be packed entirely into a square of a sum or a difference.
          In that case it has one root, and that root is easy to get.
        `,
      }}
    >
      <StatementMain>
        <P>
          If <B>both</B> outer coefficients <M>A</M> and <M>C</M> of a quadratic equation are perfect squares (
          <M>1, 4, 9, \ldots</M>), then maybe the entire equation can be packed into the square of a sum or the square
          of a difference. That depends on whether the middle coefficient <M>B</M> can be split into the product of{' '}
          <M>2</M> and the square roots of the other two coefficients:
        </P>
        <Image src={methodSquareSchema} invert="dark" width="300px" />
        <P>
          If that packing works, then the equation has exactly <B>one</B> root, and the sign of this root is the{' '}
          <B>opposite</B> of the sign in front of coefficient <M>B</M>:
        </P>
        <BlockMath>{math`\boxed{x_1 = x_2 = \mp\frac{T}{K}}`}</BlockMath>
      </StatementMain>
      <StatementProof>
        <P>Assume the quadratic equation really can be packed into a square of a sum or a difference:</P>
        <BlockMath>{math`
          Ax^2 \pm Bx + C = 0 \\
          (Kx)^2 \pm 2 \cdot Kx \cdot T + (T)^2 = 0 \\
          (Kx \pm T)^2 = 0 \\
          (Kx \pm T)(Kx \pm T) = 0
        `}</BlockMath>
        <P>
          This equation can be solved by the <Dep on={zeroProductProperty}>zero product property</Dep>. Since both
          factors are identical, it is enough to set just one of them equal to zero and get the only root:
        </P>
        <BlockMath>{math`
          Kx \pm T = 0 \\
          Kx = \mp T \\
          \boxed{x = \mp \frac{T}{K}}
        `}</BlockMath>
        <QED />
      </StatementProof>
    </Statement>

    <P>
      How do you remember which number goes in the numerator and which in the denominator? Easy. In basically every
      formula involving quadratic trinomials and equations (<Ref to={quadraticFormula}>the quadratic formula</Ref>,{' '}
      <Ref to={vietasFormulas}>Vieta's formulas</Ref>, even the <Ref to={uniques.methodZeroSum}>zero-sum method</Ref>{' '}
      above), coefficient <M>A</M> somehow always ends up <B>downstairs</B>, in the denominator.
    </P>

    <P>
      And in the current formula, <M>K</M> came from <M>A</M>. So it gets dragged downstairs too. That is why <M>K</M>{' '}
      sits in the denominator. Here is what the method looks like on actual equations:
    </P>

    <Problems title="Perfect square -- Practice" level="medium" method>
      <P>
        If the equation can be solved by the <Dep on={uniques.methodSquare}>perfect-square method</Dep>, solve it
        mentally. If not, explain why it fails.
      </P>

      <SubProblem label="With plus">
        <ProblemDescription>
          <BlockMath>{math`36x^2 + 6x + \frac{1}{4} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck root="-1/12" />
        <ProblemHint>
          The fraction <M>1/4</M> is the square of <M>1/2</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`-\frac{1}{12}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The coefficients <M>A</M> and <M>C</M> are perfect squares:
          </P>
          <BlockMath>{math`
            36 = 6^2 >>{big} \frac{1}{4} = \left(\frac{1}{2}\right)^2
          `}</BlockMath>
          <P>
            Coefficient <M>B</M> can be factored into <M>2</M> times the roots of the other two coefficients:
          </P>
          <BlockMath>{math`
            6x = 2 \cdot 6x \cdot \frac{1}{2}
          `}</BlockMath>
          <P>Everything has plus signs, so the equation packs into a square of a sum:</P>
          <BlockMath>{math`\left( 6x + \frac{1}{2} \right)^2 = 0`}</BlockMath>
          <P>
            Now use the formula for the root. Since the original equation has a plus sign in front of <M>B</M>, the root
            gets a minus sign:
          </P>
          <BlockMath>{math`
            x = - \frac{\frac{1}{2}}{6} = -\frac{1}{2 \cdot 6} = - \frac{1}{12}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="With minus">
        <ProblemDescription>
          <BlockMath>4y^2 - 28y + 49 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck root="7/2" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{7}{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The coefficients <M>A</M> and <M>C</M> are perfect squares:
          </P>
          <BlockMath>{math`
            4 = 2^2 >>{big} 49 = 7^2
          `}</BlockMath>
          <P>
            Coefficient <M>B</M> can be factored into <M>2</M> times the roots of the other two coefficients:
          </P>
          <BlockMath>{math`
            28y = 2 \cdot 2y \cdot 7
          `}</BlockMath>
          <P>
            There is a minus sign in front of <M>B</M>, while the other coefficients are positive. So the equation packs
            into a square of a difference:
          </P>
          <BlockMath>{math`(2y - 7)^2 = 0`}</BlockMath>
          <P>
            Now use the formula for the root. Since there is a minus sign in front of <M>B</M>, the root gets a plus:
          </P>
          <BlockMath>{math`y = \frac{7}{2}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Unsolvable ones">
        <ProblemDescription>
          <P>For the equations below, explain why they cannot be solved by the perfect-square method:</P>
          <BlockMath>{math`
            1) \ x^2 + 14x + 8 = 0 >>{big}
            2) \ 4y^2 - 5y + 9 = 0 >>{big}
            3) \ 16z^2 - 56z - 49 = 0
          `}</BlockMath>
        </ProblemDescription>
        <ProblemSolution>
          <ProblemSection title="Equation 1">
            Coefficient <M>A</M> is a perfect square, <M>1 = 1^2</M>, but coefficient <M>C</M> is not. That's enough.
            There is no point checking anything else.
          </ProblemSection>
          <ProblemSection title="Equation 2">
            Coefficients <M>A</M> and <M>C</M> are perfect squares (<M>4 = 2^2</M> and <M>9 = 3^2</M>), but coefficient{' '}
            <M>B</M> cannot be factored into <M>2</M>, <M>2</M>, and <M>3</M>.
          </ProblemSection>
          <ProblemSection title="Equation 3">
            <P>
              This is the sneaky one. The outer coefficients are perfect squares, and the middle coefficient factors
              just fine. The only problem is that coefficient <M>C = 49</M> has a minus sign in front of it, which stops
              us from packing the trinomial into a square of a sum or a square of a difference. Both formulas require a
              plus sign there:
            </P>
            <BlockMath>{math`
              a^2 \pm 2 \cdot a \cdot \ b \ \green{+} \ b^2 = (a \pm b)^2 \\
              (4z)^2 - 2 \cdot 4z \cdot 7 \red{-} (7)^2 = 🚫
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Practice" script={perfectSquareScript()} />
    </Problems>

    <H1>Factoring</H1>

    <P>
      Now for the real classic: factoring. This is the method you should try when the equation in front of you is{' '}
      <B>monic</B>, meaning its coefficient is <M>A = 1</M>:
    </P>

    <BlockMath>{math`
      x^2 + 8x + 15 = 0 >>{big}
      x^2 - 5x + 6 = 0 >>{big}
      x^2 - 6x - 16 = 0
    `}</BlockMath>

    <P>
      To solve these and many similar equations, it is enough to factor them mentally using the{' '}
      <Dep on={manualFactoring}>manual factoring</Dep> technique.
    </P>

    <Statement
      $={uniques.methodFactoring}
      title="Factoring"
      snippet={{
        key: true,
        seo: 'Mental solving of quadratic equations by factoring',
        description: `
          If the quadratic equation is monic (A = 1), you can try factoring it mentally.
          Find t and k so that t + k = B and tk = C. Then the roots are -t and -k.
        `,
      }}
    >
      <StatementMain>
        <P>
          A monic quadratic equation (<M>A = 1</M>) can often be factored mentally. To do that, you must represent
          coefficients <M>B</M> and <M>C</M> as the sum and product of two numbers. If that works, then{' '}
          <B accent>the roots are those two numbers, but with the signs flipped.</B>
        </P>
        <Image src={methodFactoringSchema} invert="dark" width="400px" />
        <BlockMath>{math`
          (x+t)(x+k) = 0 \\
          \boxed{x_1 = -t \quad x_2 = -k}
        `}</BlockMath>
      </StatementMain>
      <StatementProof>
        <P>
          Suppose we managed to find such numbers and <Dep on={manualFactoring}>factor</Dep> the quadratic equation:
        </P>
        <BlockMath>{math`
          x^2 + Bx + C = 0 \\
          x^2 + (t + k)x + tk = 0 \\
          (x+t)(x+k) = 0
        `}</BlockMath>
        <P>
          This is a standard zero-product equation. Apply the <Dep on={zeroProductProperty}>zero product property</Dep>{' '}
          and set each factor equal to zero:
        </P>
        <BlockMath>{math`
          x+t = 0 \\
          \boxed{x = -t}
          >>{big}
          x+k = 0 \\
          \boxed{x = -k}
        `}</BlockMath>
        <QED />
      </StatementProof>
    </Statement>

    <P>
      Some people prefer picking roots that fit <Ref to={vietasFormulas}>Vieta's formulas</Ref> right away. That also
      means hunting for a sum and a product. But there is an annoyance there: instead of the visible sum <M>B</M>, you
      have to mentally look for <M>-B</M>. Annoying. In our method, you do not have to flip anything in your head first.
      Just find numbers that give <M>B</M> and <M>C</M>, then flip both signs. Much nicer.
    </P>

    <Problems title="Factoring -- Practice" level="medium" method>
      <P>
        If possible, solve the quadratic equation mentally by the{' '}
        <Dep on={uniques.methodFactoring}>factoring method</Dep>. If not, explain why.
      </P>

      <SubProblem label="With pluses">
        <ProblemDescription>
          <BlockMath>x^2 + 8x + 15 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-3, -5]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = -3 >>{big} x_2 = -5
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The numbers <M>3</M> and <M>5</M> add up to <M>8</M> and multiply to <M>15</M>. So their opposites,
            <M>-3</M> and <M>-5</M>, are the roots. That's it.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="With one minus">
        <ProblemDescription>
          <BlockMath>x^2 - 5x + 6 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[2, 3]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 2 >>{big} x_2 = 3
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The numbers <M>-2</M> and <M>-3</M> add up to <M>-5</M> and multiply to <M>6</M>. So their opposites,
            <M>2</M> and <M>3</M>, are the roots.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="With two minuses">
        <ProblemDescription>
          <BlockMath>x^2 - 6x - 16 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-2, 8]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = -2 >>{big} x_2 = 8
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The numbers <M>2</M> and <M>-8</M> add up to <M>-6</M> and multiply to <M>-16</M>. So their opposites,
            <M>-2</M> and <M>8</M>, are the roots.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Practice" script={factoringScript()} />
    </Problems>

    <H1>Transfer A To C</H1>

    <P>
      In most cases, if all the easy mental methods above fail, that is enough to give up and slink back to the{' '}
      <Ref to={quadraticFormula}>quadratic formula</Ref> in disgrace. But there is one last bonus secret method that
      lets you get rid of coefficient <M>A</M> and try factoring mentally anyway.
    </P>

    <Statement
      $={uniques.methodAtoC}
      title="Transfer A to C"
      snippet={{
        key: true,
        seo: 'How do you get a monic quadratic equation?',
        description: `
          A simple way to turn a quadratic equation into a monic one that may be solvable mentally.
          To do it, transfer coefficient A to C.
        `,
      }}
    >
      <StatementMain>
        <P>
          In any quadratic equation <M>Ax^2 + Bx + C = 0</M>, you can "transfer <M>A</M> to <M>C</M>" and get the monic
          equation <M>x^2 + Bx + AC = 0</M>. The roots <M>x_1</M> and <M>x_2</M> of the original equation are equal to
          the roots <M>x'_1</M> and <M>x'_2</M> of the monic one, divided by <M>A</M>.
        </P>
        <Image src={methodAtoCSchema} invert="dark" width="300px" />
        <BlockMath>{math`
          \boxed{x_1 = \frac{x'_1}{A} \quad x_2 = \frac{x'_2}{A}}
        `}</BlockMath>
      </StatementMain>
      <StatementSection title="Proof via Vieta's formulas">
        <P>
          Write down <Dep on={vietasFormulas}>Vieta's formulas</Dep> for the original equation and for the monic one:
        </P>
        <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -\frac{B}{A} \\
              x_1 \cdot x_2 = \frac{C}{A}
            \end{cases}
            >>{big}
            \begin{cases}
              x'_1 + x'_2 = -B \\
              x'_1 \cdot x'_2 = AC
            \end{cases}
          `}</BlockMath>
        <P>
          Our goal is to take the roots of the monic equation, divide them by <M>A</M>, and get the same values that
          appear in Vieta's formulas for the original equation. Start with the sum:
        </P>
        <BlockMath>{math`
            \frac{x'_1}{A} + \frac{x'_2}{A} = \frac{\overbrace{x'_1 + x'_2}^{\small -B}}{A} = \boxed{\frac{-B}{A}}
          `}</BlockMath>
        <P>Now check the product:</P>
        <BlockMath>{math`
            \frac{x'_1}{A} \cdot \frac{x'_2}{A} = \frac{x'_1 \cdot x'_2}{A^2} = \frac{\cancel{A}C}{A^{\cancel{2}}} = \boxed{\frac{C}{A}}
          `}</BlockMath>
        <P>
          So the sum and product of those two expressions satisfy Vieta's formulas for the original equation. Which
          means they are the roots of the original equation.
        </P>
        <QED />
      </StatementSection>
      <StatementSection title="Proof via the quadratic formula">
        <P>Find the discriminants of the original equation and the monic one:</P>
        <BlockMath>{math`
          D = B^2 - 4AC >>{big} D' = B^2 - 4AC
        `}</BlockMath>
        <P>
          They are the same. Since they are the same, the root formulas differ only by coefficient <M>A</M> in the
          denominator:
        </P>
        <BlockMath>{math`
          x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{1}{A} \cdot \underbrace{\frac{-B \pm \sqrt{D'}}{2}}_{\small x'_{1,2}} \\
          \boxed{x_{1,2} = \frac{x'_{1,2}}{A}}
        `}</BlockMath>
        <QED />
      </StatementSection>
    </Statement>

    <P>
      Yes, you are absolutely right: first you turn one quadratic equation into another one, then solve that new one in
      your head, then divide the roots mentally by <M>A</M>. A method for real freaks, but sometimes it saves you. Here
      is what it looks like in practice:
    </P>

    <Problems title="Transfer A to C -- Practice" level="hard" method>
      <P>
        If possible, solve the quadratic equation mentally by <Dep on={uniques.methodAtoC}>transferring</Dep> <M>A</M>{' '}
        to <M>C</M>. If not, explain why.
      </P>
      <SubProblem label="Examples">
        <ProblemDescription>
          <BlockMath>{math`
            1) \ 5x^2 + 16x - 16 = 0 >>{big}
            2) \ -4y^2 + 33y - 8 = 0 >>{big}
            3) \ 3z^2 - 17z - 6 = 0
          `}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="Roots of equation 1" answers={['-4', '4/5']} />
        <MathValueCheck label="Roots of equation 2" answers={['8', '1/4']} />
        <MathValueCheck label="Roots of equation 3" answers={['6', '-1/3']} />
        <ProblemSolution>
          <ProblemSection title="Equation 1">
            <P>
              Multiply coefficient <M>A = 5</M> by <M>C = -16</M> and get the monic equation:
            </P>
            <BlockMath>{math`
              x^2 + 16x - 80 = 0
            `}</BlockMath>
            <P>
              We spot the minus sign in <M>-80</M>, so with the <Dep on={uniques.methodFactoring}>factoring</Dep> method
              one number must be positive and the other negative. Those numbers are clearly <M>20</M> and <M>-4</M>, so
              the roots of the monic equation are the opposite numbers: <M>-20</M> and <M>4</M>. To get the roots of the
              original equation, divide them by <M>5</M>:
            </P>
            <BlockMath>{math`
              x_1 = \frac{-20}{5} = -4 >>{big}
              x_2 = \frac{4}{5} = \frac{4}{5}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Equation 2">
            <P>
              Multiply coefficient <M>A = -4</M> by <M>C = -8</M> and get the monic equation:
            </P>
            <BlockMath>{math`
              y^2 + 33y + 32 = 0
            `}</BlockMath>
            <P>
              The numbers <M>1</M> and <M>32</M> add up to <M>33</M> and multiply to <M>32</M>. So their opposites,
              <M>-1</M> and <M>-32</M>, are the roots of the monic equation. To get the roots of the original one,
              divide them by <M>-4</M>:
            </P>
            <BlockMath>{math`
              y_1 = \frac{-1}{-4} = \frac{1}{4} >>{big}
              y_2 = \frac{-32}{-4} = 8
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Equation 3">
            <P>
              Multiply coefficient <M>A = 3</M> by <M>C = -6</M> and get the monic equation:
            </P>
            <BlockMath>{math`
              z^2 - 17z - 18 = 0
            `}</BlockMath>
            <P>
              We spot the minus sign in <M>-18</M>, so with the <Dep on={uniques.methodFactoring}>factoring</Dep> method
              one number must be positive and the other negative. Those numbers are <M>-18</M> and <M>1</M>, so the
              roots of the monic equation are the opposite numbers: <M>18</M> and <M>-1</M>. To get the roots of the
              original equation, divide them by <M>3</M>:
            </P>
            <BlockMath>{math`
              z_1 = \frac{18}{3} = 6 >>{big}
              z_2 = \frac{-1}{3} = -\frac{1}{3}
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Practice" script={atoCScript()} />
    </Problems>

    <P>
      By the way, remembering what you divide the roots of the monic equation by is easy too. Again, coefficient{' '}
      <M>A</M> lives downstairs in the denominator. So that is what you divide by.
    </P>

    <H1>Everything At Once</H1>

    <P>
      Let's gather all the mental methods for solving general quadratic equations into one scheme, ordered from easiest
      to hardest:
    </P>

    <Diagram
      $={uniques.methodsAll}
      snippet={{
        key: true,
        seo: 'Ways to solve quadratic equations mentally',
        title: 'Method chart',
        description: `
          A convenient chart listing all fast ways to solve quadratic equations mentally.
          Includes hints about the roots.
        `,
      }}
    >
      {math`
        flowchart LR
          methods["**Mental solving**<br />$$ Ax^2 + Bx + C = 0 $$"]

          methods --> methodZeroSum["
            **1. Zero sum**
            $$ \begin{aligned} A \pm B + C = 0 \\ 2x^2 + 3x - 5 = 0 \end{aligned} $$
          "]
          methodZeroSum --> methodZeroSumRoot1["$$ x_1 = \pm 1 $$"]
          methodZeroSum -->|2nd Vieta formula| methodZeroSumRoot2["$$ x_2 = \pm \frac{C}{A} $$"]

          methods --> methodSquare["
            **2. Perfect square**
            $$ \begin{aligned} (Kx)^2 \pm 2 \cdot Kx \cdot T + (T)^2 \\ 4x^2 + 12x + 9 = 0 \end{aligned} $$
          "]
          methodSquare -->|$A$ lives downstairs<br />$K$ came from $A$, so it does too| methodSquareRoot["$$ x_1 = x_2 = \mp \frac{T}{K} $$"]

          methods --> methodFactoring["
            **3. Factoring**
            $$ \begin{aligned} x^2 + (t + k)x + tk = 0 \\ x^2 + 8x + 15 = 0 \end{aligned} $$
          "]
          methodFactoring -->|Minus in front of $t$| methodFactoringRoot1["$$ x_1 = -t $$"]
          methodFactoring -->|Minus in front of $k$| methodFactoringRoot2["$$ x_2 = -k $$"]

          methods --> methodAtoC["
            **4. Transfer A to C**
            $$ \begin{aligned} x^2 + Bx + AC = 0 \\ 3x^2 - 17x - 6 = 0 \end{aligned} $$
          "]
          methodAtoC -->|$A$ lives downstairs<br />So divide the roots by $A$| methodAtoCRoots["$$ x_{1,2} = \frac{x'_{1,2}}{A} $$"]

          class methodZeroSum,methodSquare,methodFactoring,methodAtoC fill
      `}
      <Caption>
        Ways to solve quadratic equations mentally
        <CaptionSecondary>Ordered from easiest to hardest</CaptionSecondary>
      </Caption>
    </Diagram>

    <P>
      Practicing each method separately is good when you are just learning them and trying to memorize the patterns. But
      to build an actual skill in mentally solving quadratic equations, you need to practice them all together, on
      equations that do not scream which method fits. That is exactly what we do next.
    </P>

    <Problem
      $={uniques.methodsAllPractice}
      title="Mental solving of quadratic equations"
      level="medium"
      snippet={{
        key: true,
        seo: 'Practice problems on mentally solving quadratic equations',
        title: 'All methods mixed',
        description: `
          Infinitely generated practice on all methods of mental solving of quadratic equations:
          zero sum, perfect square, factoring, and transferring A to C.
        `,
      }}
      script={mixedScript()}
    />
  </>
));
