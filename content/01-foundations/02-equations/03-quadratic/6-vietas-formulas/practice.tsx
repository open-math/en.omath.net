import article from './article';

// #region Links
//
//

const oneRootOne = $CONTENT.foundations.equations.quadratic.factoring.practice.$oneRootOne;
const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;

//
//
// #endregion

export default defineProse({
  uniques: {
    rootFromRoot: Problem,
  },
})(({ uniques }) => (
  <>
    <Problems title="Nice coefficients" level="easy" method>
      <P>Construct a quadratic equation with integer coefficients if one of its roots is known to be:</P>

      <SubProblem>
        <ProblemDescription>
          <M>7</M>
        </ProblemDescription>
        <ProblemHint>
          Plug the data into <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> and pick the second root so
          the coefficients come out as integers.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x^2 - 49 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Let's take <M>A = 1</M>. Then from <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> we get:
          </P>
          <BlockMath>{math`
            \begin{cases}
              7 + x_2 = -B \\
              7 \cdot x_2 = C
            \end{cases}
          `}</BlockMath>
          <P>
            You don't have to think long here. For <M>x_2</M> you can take any integer. For example, <M>-7</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              7 - 7 = 0 = -B \\
              7 \cdot (-7) = -49 = C
            \end{cases}
          `}</BlockMath>
          <P>
            Then <M>B = 0</M>, <M>C = -49</M>, and we get the quadratic equation:
          </P>
          <BlockMath>{math`x^2 - 49 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`-1\frac{1}{2}`}</M>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`2x^2 - 13x - 24 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Convert <M>{math`-1\frac{1}{2}`}</M> into an improper fraction:
          </P>
          <BlockMath>{math`-1\frac{1}{2} = -\left(1 + \frac{1}{2}\right) = -\left(\frac{2}{2} + \frac{1}{2}\right) = -\frac{3}{2}`}</BlockMath>
          <P>
            Since the denominator of the fraction is <M>2</M>, it makes sense to make the coefficient <M>A</M> equal to{' '}
            <M>2</M> as well. Then from <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> we get:
          </P>
          <BlockMath>{math`
            \begin{cases}
              -\frac{3}{2} + x_2 = -\frac{B}{2} \\
              -\frac{3}{2} \cdot x_2 = \frac{C}{2}
            \end{cases}
          `}</BlockMath>
          <P>The second root has to be chosen so that two conditions hold:</P>
          <List ordered>
            <Li>
              It has to be expressible as a fraction with denominator <M>2</M>, so we don't have to bring anything to a
              common denominator in the first Vieta formula.
            </Li>
            <Li>
              It also has to be expressible as an integer, so it doesn't "mess up" the denominator <M>2</M> in the
              second Vieta formula.
            </Li>
          </List>
          <P>
            Any even integer fits those conditions, for example <M>8</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              -\frac{3}{2} + 8 = -\frac{3}{2} + \frac{16}{2} = \frac{13}{2} = -\frac{B}{2} \\
              -\frac{3}{2} \cdot 8 = \frac{-24}{2} = \frac{C}{2}
            \end{cases}
          `}</BlockMath>
          <P>
            Then <M>B = -13</M>, <M>C = -24</M>, and we get the quadratic equation:
          </P>
          <BlockMath>{math`2x^2 - 13x - 24 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`\sqrt{6}`}</M>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`3x^2 - 18 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Let's take <M>A = 3</M>. Then from <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> we get:
          </P>
          <BlockMath>{math`
            \begin{cases}
              \sqrt{6} + x_2 = -\frac{B}{3} \\
              \sqrt{6} \cdot x_2 = \frac{C}{3}
            \end{cases}
          `}</BlockMath>
          <P>
            In the first formula we absolutely need to get rid of the root. The only option is to make the second root
            the opposite one, namely <M>{math`-\sqrt{6}`}</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              \cancel{\sqrt{6}} - \cancel{\sqrt{6}} = 0 = -\frac{B}{3} \\
              \sqrt{6} \cdot (-\sqrt{6}) = -6 = \frac{C}{3}
            \end{cases}
          `}</BlockMath>
          <P>
            Then <M>B = 0</M>, <M>C = -18</M>, and we get the quadratic equation:
          </P>
          <BlockMath>{math`3x^2 - 18 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`3 + \sqrt{3}`}</M>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`2x^2 - 12x + 12 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Let's take <M>A = 2</M>. Then from <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> we get:
          </P>
          <BlockMath>{math`
            \begin{cases}
              3 + \sqrt{3} + x_2 = -\frac{B}{2} \\
              (3 + \sqrt{3}) \cdot x_2 = \frac{C}{2}
            \end{cases}
          `}</BlockMath>
          <P>
            The second root has to be chosen so that in the first formula it kills off <M>\sqrt{3}</M>, and in the
            second formula the root disappears through the difference of squares formula{' '}
            <M>{math`(a + b)(a - b) = a^2 - b^2`}</M>. So the second root has to be <M>{math`3 - \sqrt{3}`}</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              3 + \cancel{\sqrt{3}} + 3 - \cancel{\sqrt{3}} = 6 = -\frac{B}{2} \\
              (3 + \sqrt{3})(3 - \sqrt{3}) = 3^2 - (\sqrt{3})^2 = 9 - 3 = 6 = \frac{C}{2}
            \end{cases}
          `}</BlockMath>
          <P>
            Then <M>B = -12</M>, <M>C = 12</M>, and we get the quadratic equation:
          </P>
          <BlockMath>{math`2x^2 - 12x + 12 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`2 - \sqrt{5}`}</M>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`3x^2 - 12x - 3 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Let's take <M>A = 3</M>. Then from <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> we get:
          </P>
          <BlockMath>{math`
            \begin{cases}
              2 - \sqrt{5} + x_2 = -\frac{B}{3} \\
              (2 - \sqrt{5}) \cdot x_2 = \frac{C}{3}
            \end{cases}
          `}</BlockMath>
          <P>
            The second root has to be chosen so that in the first formula it kills off <M>\sqrt{5}</M>, and in the
            second formula the root disappears through the difference of squares formula{' '}
            <M>{math`(a + b)(a - b) = a^2 - b^2`}</M>. So the second root has to be <M>{math`2 + \sqrt{5}`}</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              2 - \cancel{\sqrt{5}} + 2 + \cancel{\sqrt{5}} = 4 = -\frac{B}{3} \\
              (2 - \sqrt{5})(2 + \sqrt{5}) = 2^2 - (\sqrt{5})^2 = 4 - 5 = -1 = \frac{C}{3}
            \end{cases}
          `}</BlockMath>
          <P>
            Then <M>B = -12</M>, <M>C = -3</M>, and we get the quadratic equation:
          </P>
          <BlockMath>{math`3x^2 - 12x - 3 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Letter test" level="easy">
      <ProblemDescription>
        <P>
          For which values of <M>p</M> and <M>q</M> are the roots of the equation <M>{math`x^2 + px + q = 0`}</M> equal
          to <M>2p</M> and <M>{math`\dfrac{q}{2}`}</M>?
        </P>
      </ProblemDescription>
      <MathValueCheck label="p" answer={1} />
      <MathValueCheck label="q" answer={-6} />
      <ProblemAnswer>
        <BlockMath>{math`p = 1, \enspace q = -6`}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Denote the roots of the equation by <M>x_1</M> and <M>x_2</M>. The problem tells us what those roots are:
        </P>
        <BlockMath>{math`
          x_1 = 2p
          >>{big}
          x_2 = \frac{q}{2}
        `}</BlockMath>
        <P>
          Write down <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> for this equation:
        </P>
        <BlockMath>{math`
          \begin{dcases}
            x_1 + x_2 = -p \\
            x_1x_2 = q
          \end{dcases}
        `}</BlockMath>
        <P>Substitute the roots with their values:</P>
        <BlockMath>{math`
          \begin{dcases}
            2p + \frac{q}{2} = -p \\
            2p\cdot\frac{q}{2} = q
          \end{dcases}
        `}</BlockMath>
        <P>Let's deal with the lower formula:</P>
        <BlockMath>{math`
          2p\cdot\frac{q}{2} = q \\
          p\cdot q = q
        `}</BlockMath>
        <P>
          By the <Dep on={sameActionRule}>same action rule</Dep>, divide both sides by <M>q</M>:
        </P>
        <BlockMath>{math`
          \frac{p\cdot \cancel{q}}{\cancel{\yellow{q}}} = \frac{\cancel{q}}{\cancel{\yellow{q}}} \\
          \boxed{p = 1}
        `}</BlockMath>
        <P>Now let's deal with the upper formula:</P>
        <BlockMath>{math`2p + \frac{q}{2} = -p`}</BlockMath>
        <P>
          Subtract <M>2p</M> from both sides:
        </P>
        <BlockMath>{math`\frac{q}{2} = -3p`}</BlockMath>
        <P>
          Multiply both sides by <M>2</M>:
        </P>
        <BlockMath>{math`q = -6p`}</BlockMath>
        <P>
          Substitute the value we found, <M>p = 1</M>:
        </P>
        <BlockMath>{math`
          q = -6\cdot 1 \\
          \boxed{q = -6}
        `}</BlockMath>
        <P>
          So, when <M>p = 1</M> and <M>q = -6</M>, the roots of the equation <M>{math`x^2 + px + q = 0`}</M> are{' '}
          <M>2p</M> and <M>{math`\dfrac{q}{2}`}</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problems title="Balancing the roots" level="medium">
      <SubProblem>
        <ProblemDescription>
          <P>
            In the equation <M>{math`x^2-4x+a=0`}</M>, the sum of the squares of the roots is <M>16</M>. Find <M>a</M>.
          </P>
        </ProblemDescription>
        <MathValueCheck answer={0} />
        <ProblemHint>The sum of squares can be completed into the identity called the square of a sum.</ProblemHint>
        <ProblemAnswer>
          <M>a = 0</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Write down the formulas we know, including <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            x_1 + x_2 = 4
            >>{big}
            x_1x_2 = a
            >>{big}
            x_1^2 + x_2^2 = 16
          `}</BlockMath>
          <P>
            If we add <M>{math`2x_1x_2`}</M> to both sides of the last formula by the{' '}
            <Dep on={sameActionRule}>same action rule</Dep>, we can package it into the identity called the square of a
            sum:
          </P>
          <BlockMath>{math`
            x_1^2 + x_2^2 + \yellow{2x_1x_2} = 16 + \yellow{2x_1x_2} \\
            (x_1 + x_2)^2 = 16 + 2x_1x_2
          `}</BlockMath>
          <P>
            But from Vieta's formulas we know that <M>{math`x_1 + x_2 = 4`}</M> and <M>{math`x_1x_2 = a`}</M>. Plug
            those values into the resulting formula:
          </P>
          <BlockMath>{math`
            (4)^2 = 16 + 2a \\
            16 = 16 + 2a
          `}</BlockMath>
          <P>
            Subtract <M>16</M> from both sides:
          </P>
          <BlockMath>{math`
            16 - \yellow{16} = 16 + 2a - \yellow{16} \\
            0 = 2a
          `}</BlockMath>
          <P>
            Divide both sides by <M>2</M>:
          </P>
          <BlockMath>{math`
            \frac{0}{\yellow{2}} = \frac{2a}{\yellow{2}} \\
            0 = a
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            In the equation <M>{math`x^2-2x+a=0`}</M>, the square of the difference of the roots is <M>16</M>. Find{' '}
            <M>a</M>.
          </P>
        </ProblemDescription>
        <MathValueCheck answer={-3} />
        <ProblemHint>
          The square of the difference can be completed into the identity called the square of a sum.
        </ProblemHint>
        <ProblemAnswer>
          <M>a = -3</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Write down the formulas we know, including <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            x_1 + x_2 = 2
            >>{big}
            x_1x_2 = a
            >>{big}
            (x_1 - x_2)^2 = 16
          `}</BlockMath>
          <P>Expand the square of the difference of the roots:</P>
          <BlockMath>{math`
            (x_1 - x_2)^2 = x_1^2 - 2x_1x_2 + x_2^2
            \\
            16 = x_1^2 - 2x_1x_2 + x_2^2
          `}</BlockMath>
          <P>
            By adding <M>{math`4x_1x_2`}</M> to both sides using the <Dep on={sameActionRule}>same action rule</Dep>, we
            can package the expression on the right into the identity called the square of a sum:
          </P>
          <BlockMath>{math`
            16 + \yellow{4x_1x_2} = x_1^2 - 2x_1x_2 + x_2^2 + \yellow{4x_1x_2} \\
            16 + 4x_1x_2 = x_1^2 + 2x_1x_2 + x_2^2 \\
            16 + 4x_1x_2 = (x_1 + x_2)^2
          `}</BlockMath>
          <P>
            But from Vieta's formulas we know that <M>{math`x_1 + x_2 = 2`}</M> and <M>{math`x_1x_2 = a`}</M>. Plug
            those values into the resulting formula:
          </P>
          <BlockMath>{math`
            16 + 4a = (2)^2 \\
            16 + 4a = 4
          `}</BlockMath>
          <P>
            Subtract <M>16</M> from both sides:
          </P>
          <BlockMath>{math`
            16 - \yellow{16} + 4a = 4 - \yellow{16} \\
            4a = -12
          `}</BlockMath>
          <P>
            Divide both sides by <M>4</M>:
          </P>
          <BlockMath>{math`
            \frac{4a}{\yellow{4}} = \frac{-12}{\yellow{4}} \\
            a = -3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Twisted sum" level="medium">
      <ProblemDescription>
        <P>
          Two different numbers <M>a</M> and <M>b</M> satisfy the following chain of equalities:
        </P>
        <BlockMath>a^2 + 3a + 1 = b^2 + 3b + 1 = 0</BlockMath>
        <P>Find the value of the following expression:</P>
        <BlockMath>{math`\frac{a}{b} + \frac{b}{a}`}</BlockMath>
      </ProblemDescription>
      <MathValueCheck label="Value of the expression" answer={7} />
      <ProblemHint>
        The numbers <M>a</M> and <M>b</M> are the two roots of the quadratic equation <M>x^2 + 3x + 1 = 0</M>, so you
        can write down <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> for them.
      </ProblemHint>
      <ProblemHint>
        Rewrite the sum you need so that the numerator and denominator look like expressions from Vieta's formulas.
      </ProblemHint>
      <ProblemAnswer>
        <M>7</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>To make the chain easier to look at, split it into two separate true equalities:</P>
        <BlockMath>{math`a^2 + 3a + 1 = 0 >>{big} b^2 + 3b + 1 = 0`}</BlockMath>
        <P>
          The problem says that <M>a</M> and <M>b</M> are different. Plugging them into the same quadratic trinomial
          gives two true equalities, with the same coefficients both times. That means <M>a</M> and <M>b</M> are the
          roots of the quadratic equation <M>x^2 + 3x + 1 = 0</M>! Since they are roots, we can write down{' '}
          <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> for them:
        </P>
        <BlockMath>{math`
          \begin{cases}
            a + b = -3 \\
            ab = 1
          \end{cases}
        `}</BlockMath>
        <P>Now rewrite the sum we need so that we can plug values from Vieta's formulas into it:</P>
        <BlockMath>{math`
          \frac{a}{b} + \frac{b}{a} = \frac{a^2 + b^2}{ab} = \ldots
        `}</BlockMath>
        <P>
          In the numerator we have a sum of squares. We can add double the product and subtract it right away, so
          nothing really changes. Then the numerator turns into a perfect square:
        </P>
        <BlockMath>{math`
          \ldots = \frac{\overbrace{a^2 + b^2 + \yellow{2ab}}^{\small (a + b)^2} - \yellow{2ab}}{ab} = \frac{(a + b)^2 - 2ab}{ab} = \ldots
        `}</BlockMath>
        <P>Plug in the data from Vieta's formulas:</P>
        <BlockMath>{math`
          \ldots = \frac{(-3)^2 - 2\cdot 1}{1} = \frac{9 - 2}{1} = 7
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem $={uniques.rootFromRoot} title="A root from a root" level="medium" method>
      <ProblemDescription>
        <P>
          Let <M>x_1</M> and <M>x_2</M> be the roots of a quadratic equation in general form{' '}
          <M>{math`Ax^2 + Bx + C = 0`}</M>. Assume that neither the roots nor the coefficients are zero. Construct a new
          equation whose roots are:
        </P>
        <List ordered>
          <Li>Opposite to the roots of the original equation</Li>
          <Li>Reciprocal to the roots of the original equation</Li>
          <Li>
            <M>5</M> times the roots of the original equation
          </Li>
        </List>
        <P>
          Applying the formulas you get, write down <M>3</M> new equations obtained from <M>{math`3x^2 - x - 1 = 0`}</M>
          .
        </P>
      </ProblemDescription>
      <MathExpressionCheck label="Opposite roots equation" answer="3x^2+x-1=0" />
      <MathExpressionCheck label="Reciprocal roots equation" answer="-x^2-x+3=0" />
      <MathExpressionCheck label="5× roots equation" answer="3x^2-5x-25=0" />
      <ProblemHint>
        Introduce new roots <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> and relate them to the old ones. Build new{' '}
        <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> from the new roots.
      </ProblemHint>
      <ProblemAnswer>
        <List ordered>
          <Li>
            <P>
              When the roots are replaced with their opposites, the coefficient <M>B</M> changes sign:
            </P>
            <BlockMath>{math`Ax^2 - Bx + C = 0`}</BlockMath>
            <P>New equation:</P>
            <BlockMath>{math`3x^2 + x - 1 = 0`}</BlockMath>
          </Li>
          <Li>
            <P>
              When the roots are replaced with their reciprocals, the coefficients <M>A</M> and <M>C</M> swap places:
            </P>
            <BlockMath>{math`Cx^2 + Bx + A = 0`}</BlockMath>
            <P>New equation:</P>
            <BlockMath>{math`-x^2 - x + 3 = 0`}</BlockMath>
          </Li>
          <Li>
            <P>
              When the roots are replaced with roots that are <M>5</M> times larger, the coefficient <M>B</M> is
              multiplied by <M>5</M> and <M>C</M> by <M>25</M>:
            </P>
            <BlockMath>{math`Ax^2 + 5Bx + 25C = 0`}</BlockMath>
            <P>New equation:</P>
            <BlockMath>{math`3x^2 - 5x - 25 = 0`}</BlockMath>
          </Li>
        </List>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Write down <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep>:
        </P>
        <BlockMath>{math`
          \begin{cases}
            x_1 + x_2 = -\frac{B}{A} \\
            x_1x_2 = \frac{C}{A}
          \end{cases}
        `}</BlockMath>

        <ProblemSection title="Opposite roots">
          <P>
            We need new roots <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> that are opposite to <M>x_1</M> and <M>x_2</M>
            :
          </P>
          <BlockMath>{math`
            x_1' = -x_1
            >>{big}
            x_2' = -x_2
          `}</BlockMath>
          <P>
            Build new <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> from the new roots:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = -x_1 - x_2 \\
              x_1'x_2' = (-x_1)(-x_2)
            \end{cases}
          `}</BlockMath>
          <P>Let's sort out the upper formula:</P>
          <BlockMath>{math`
            x_1' + x_2' = -x_1 - x_2 = -\left(x_1 + x_2\right) = -\left(-\frac{B}{A}\right) = -\frac{-B}{A}
          `}</BlockMath>
          <P>Now the lower formula:</P>
          <BlockMath>{math`
            x_1'x_2' = (-x_1) \cdot (-x_2) = x_1x_2 = \frac{C}{A}
          `}</BlockMath>
          <P>Final form of the new Vieta's formulas:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = -\frac{-B}{A} \\
              x_1'x_2' = \frac{C}{A}
            \end{cases}
          `}</BlockMath>
          <P>So the coefficients of this equation, relative to the old one, will be:</P>
          <BlockMath>{math`A \rarr A >> B \rarr -B >> C \rarr C`}</BlockMath>
          <P>New quadratic equation:</P>
          <BlockMath>{math`Ax^2 - Bx + C = 0`}</BlockMath>
          <P>
            When the roots are replaced with their opposites, only the coefficient <M>B</M> changes sign. So for the
            equation <M>{math`3x^2 - x - 1 = 0`}</M>, the equation with opposite roots will be:
          </P>
          <BlockMath>{math`3x^2 + x - 1 = 0`}</BlockMath>
        </ProblemSection>

        <ProblemSection title="Reciprocal roots">
          <P>
            We need new roots <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> that are reciprocal to <M>x_1</M> and{' '}
            <M>x_2</M>:
          </P>
          <BlockMath>{math`
            x_1' = \frac{1}{x_1}
            >>{big}
            x_2' = \frac{1}{x_2}
          `}</BlockMath>
          <P>Build new Vieta's formulas from the new roots:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = \frac{1}{x_1} + \frac{1}{x_2} \\
              x_1'x_2' = \frac{1}{x_1}\cdot\frac{1}{x_2}
            \end{cases}
          `}</BlockMath>
          <P>Let's sort out the upper formula:</P>
          <BlockMath>{math`
            x_1' + x_2' = \frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1x_2} = \frac{-\frac{B}{A}}{\frac{C}{A}} = -\frac{B}{C}
          `}</BlockMath>
          <P>Now the lower formula:</P>
          <BlockMath>{math`
            x_1'x_2' = \frac{1}{x_1}\cdot\frac{1}{x_2} = \frac{1}{x_1x_2} = \frac{1}{\frac{C}{A}} = \frac{A}{C}
          `}</BlockMath>
          <P>Final form of the new Vieta's formulas:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = -\frac{B}{C} \\
              x_1'x_2' = \frac{A}{C}
            \end{cases}
          `}</BlockMath>
          <P>So the coefficients of this equation, relative to the old one, will be:</P>
          <BlockMath>{math`A \rarr C >> B \rarr B >> C \rarr A`}</BlockMath>
          <P>New quadratic equation:</P>
          <BlockMath>{math`Cx^2 + Bx + A = 0`}</BlockMath>
          <P>
            When the roots are replaced with their reciprocals, the coefficient <M>A</M> swaps places with the
            coefficient <M>C</M>. So for the equation <M>{math`3x^2 - x - 1 = 0`}</M>, the equation with reciprocal
            roots will be:
          </P>
          <BlockMath>{math`-x^2 - x + 3 = 0`}</BlockMath>
        </ProblemSection>

        <ProblemSection title="5 times larger">
          <P>
            We need new roots <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> that are <M>5</M> times larger than the roots{' '}
            <M>x_1</M> and <M>x_2</M>:
          </P>
          <BlockMath>{math`
            x_1' = 5x_1
            >>{big}
            x_2' = 5x_2
          `}</BlockMath>
          <P>Build new Vieta's formulas from the new roots:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = 5x_1 + 5x_2 \\
              x_1'x_2' = (5x_1)(5x_2)
            \end{cases}
          `}</BlockMath>
          <P>Let's sort out the upper formula:</P>
          <BlockMath>{math`
            x_1' + x_2' = 5x_1 + 5x_2 = 5\left(x_1 + x_2\right) = 5\left(-\frac{B}{A}\right) = -\frac{5B}{A}
          `}</BlockMath>
          <P>Now the lower formula:</P>
          <BlockMath>{math`
            x_1'x_2' = (5x_1)(5x_2) = 25(x_1x_2) = 25\left(\frac{C}{A}\right) = \frac{25C}{A}
          `}</BlockMath>
          <P>Final form of the new Vieta's formulas:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = -\frac{5B}{A} \\
              x_1'x_2' = \frac{25C}{A}
            \end{cases}
          `}</BlockMath>
          <P>So the coefficients of this equation, relative to the old one, will be:</P>
          <BlockMath>{math`A \rarr A >> B \rarr 5B >> C \rarr 25C`}</BlockMath>
          <P>New quadratic equation:</P>
          <BlockMath>{math`Ax^2 + 5Bx + 25C = 0`}</BlockMath>
          <P>
            Roots that are <M>5</M> times larger make <M>B</M> get multiplied by <M>5</M> and <M>C</M> by <M>25</M>.
          </P>
          <P>
            So for the equation <M>{math`3x^2 - x - 1 = 0`}</M>, the equation with roots <M>5</M> times larger will be:
          </P>
          <BlockMath>{math`3x^2 - 5x - 25 = 0`}</BlockMath>
        </ProblemSection>
      </ProblemSolution>
      <ProblemNote>
        <P>This problem gives a few neat mathematical facts:</P>
        <List ordered>
          <Li>
            If you replace the roots of a quadratic equation with their opposites, its coefficient <M>B</M> changes
            sign!
          </Li>
          <Li>
            If you replace the roots of an equation with their reciprocals, its coefficients <M>A</M> and <M>C</M> swap
            places!
          </Li>
          <Li>
            If you multiply the roots by <M>n</M>, then the coefficient <M>B</M> gets multiplied by <M>n</M>, and{' '}
            <M>C</M> by <M>n^2</M>!
          </Li>
        </List>
      </ProblemNote>
    </Problem>

    <Problems title="Root transformer" level="medium">
      <P>
        Let <M>x_1</M> and <M>x_2</M> be the roots of the quadratic equation <M>{math`2x^2 - 7x - 3 = 0`}</M>. Construct
        a new quadratic equation whose roots are the numbers:
      </P>

      <SubProblem>
        <ProblemDescription>
          <M>{math`x_1 + \dfrac{1}{x_2}`}</M> and <M>{math`x_2 + \dfrac{1}{x_1}`}</M>
        </ProblemDescription>
        <MathExpressionCheck label="New equation" answer="6x^2-7x-1=0" />
        <ProblemHint>
          Use the trick of building new <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> from the new
          roots from the problem <Ref to={uniques.rootFromRoot}>A root from a root</Ref>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`6x^2 - 7x - 1 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We need new roots <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> related to the original roots <M>x_1</M> and{' '}
            <M>x_2</M> like this:
          </P>
          <BlockMath>{math`
            x_1' = x_1 + \frac{1}{x_2}
            >>{big}
            x_2' = x_2 + \frac{1}{x_1}
          `}</BlockMath>
          <P>Bring the right-hand sides to a common denominator:</P>
          <BlockMath>{math`
            x_1' = \frac{x_1x_2 + 1}{x_2}
            >>{big}
            x_2' = \frac{x_2x_1 + 1}{x_1}
          `}</BlockMath>
          <P>
            The product of the roots <M>{math`x_1x_2`}</M> can be found from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formula</Dep>. It equals <M>{math`-\dfrac{3}{2}`}</M>.
            Substitute that value into the expressions for the new roots:
          </P>
          <BlockMath>{math`
            x_1' = \frac{-\frac{3}{2} + 1}{x_2} = -\frac{1}{2x_2}
            >>{big}
            x_2' = \frac{-\frac{3}{2} + 1}{x_1} = -\frac{1}{2x_1}
          `}</BlockMath>
          <P>Build Vieta's formulas for the new quadratic equation:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{1}{2x_2} - \frac{1}{2x_1}
              \\
              x_1'x_2' = \left(-\frac{1}{2x_2}\right)\left(-\frac{1}{2x_1}\right)
            \end{dcases}
          `}</BlockMath>
          <P>Let's deal with the lower formula:</P>
          <BlockMath>{math`
            x_1'x_2' = \frac{1}{4x_1x_2} = \frac{1}{4\cdot\left(-\frac{3}{2}\right)} = \frac{-1}{6}
          `}</BlockMath>
          <P>Now the upper formula:</P>
          <BlockMath>{math`
            x_1' + x_2' =
            -\frac{1}{2x_2} - \frac{1}{2x_1} =
            -\frac{1}{2}\left(\frac{1}{x_2} + \frac{1}{x_1}\right) =
            -\frac{1}{2}\cdot\frac{x_1 + x_2}{x_1x_2} =
            -\frac{1}{2}\cdot\frac{\frac{7}{2}}{-\frac{3}{2}} =
            -\frac{1}{2}\cdot\left(-\frac{7}{3}\right) =
            \frac{7}{6}
          `}</BlockMath>
          <P>Write the final Vieta's formulas with the new roots:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{-7}{6} \\
              x_1'x_2' = \frac{-1}{6}
            \end{dcases}
          `}</BlockMath>
          <P>Then the coefficients of the new quadratic equation are:</P>
          <BlockMath>{math`A = 6, \enspace B = -7, \enspace C = -1`}</BlockMath>
          <P>Quadratic equation with the new roots:</P>
          <BlockMath>{math`6x^2 - 7x - 1 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`x_1^2x_2`}</M> and <M>{math`x_1x_2^2`}</M>
        </ProblemDescription>
        <MathExpressionCheck label="New equation" answer="8x^2+42x-27=0" />
        <ProblemHint>
          Use the trick of building new <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> from the new
          roots from the problem <Ref to={uniques.rootFromRoot}>A root from a root</Ref>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`8x^2 + 42x - 27 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We need new roots <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> related to the original roots <M>x_1</M> and{' '}
            <M>x_2</M> like this:
          </P>
          <BlockMath>{math`
            x_1' = x_1^2x_2 = (x_1x_2)x_1
            >>{big}
            x_2' = x_1x_2^2 = (x_1x_2)x_2
          `}</BlockMath>
          <P>
            The product of the roots <M>{math`x_1x_2`}</M> can be found from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formula</Dep>. It equals <M>{math`-\dfrac{3}{2}`}</M>.
            Substitute that value into the expressions for the new roots:
          </P>
          <BlockMath>{math`
            x_1' = -\frac{3}{2}x_1
            >>{big}
            x_2' = -\frac{3}{2}x_2
          `}</BlockMath>
          <P>Build Vieta's formulas for the new quadratic equation:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{3}{2}x_1 - \frac{3}{2}x_2
              \\
              x_1'x_2' = \left(-\frac{3}{2}x_1\right)\left(-\frac{3}{2}x_2\right)
            \end{dcases}
          `}</BlockMath>
          <P>Let's deal with the upper formula:</P>
          <BlockMath>{math`
            x_1' + x_2' =
            -\frac{3}{2}\left(x_1 + x_2\right) =
            -\frac{3}{2}\cdot\frac{7}{2} =
            -\frac{21}{4}
          `}</BlockMath>
          <P>Now the lower formula:</P>
          <BlockMath>{math`
            x_1'x_2' =
            \left(-\frac{3}{2}x_1\right)\left(-\frac{3}{2}x_2\right) =
            \frac{9}{4}\cdot(x_1x_2) =
            \frac{9}{4}\cdot\left(-\frac{3}{2}\right) =
            -\frac{27}{8}
          `}</BlockMath>
          <P>Now Vieta's formulas look like this:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{21}{4} \\
              x_1'x_2' = \frac{-27}{8}
            \end{dcases}
          `}</BlockMath>
          <P>
            In the fraction from the upper formula, multiply numerator and denominator by <M>2</M> so the denominators
            of both formulas match:
          </P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{42}{8} \\
              x_1'x_2' = \frac{-27}{8}
            \end{dcases}
          `}</BlockMath>
          <P>Then the coefficients of the new quadratic equation are:</P>
          <BlockMath>{math`A = 8, \enspace B = 42, \enspace C = -27`}</BlockMath>
          <P>Quadratic equation with the new roots:</P>
          <BlockMath>{math`8x^2 + 42x - 27 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`\dfrac{1}{x_1^2}`}</M> and <M>{math`\dfrac{1}{x_2^2}`}</M>
        </ProblemDescription>
        <MathExpressionCheck label="New equation" answer="9x^2-61x+4=0" />
        <ProblemHint>
          Use the trick of building new <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> from the new
          roots from the problem <Ref to={uniques.rootFromRoot}>A root from a root</Ref>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`9x^2 - 61x + 4 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We need new roots <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> related to the original roots <M>x_1</M> and{' '}
            <M>x_2</M> like this:
          </P>
          <BlockMath>{math`
            x_1' = \frac{1}{x_1^2}
            >>{big}
            x_2' = \frac{1}{x_2^2}
          `}</BlockMath>
          <P>Build Vieta's formulas for the new quadratic equation:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = \frac{1}{x_1^2} + \frac{1}{x_2^2}
              \\
              x_1'x_2' = \frac{1}{x_1^2}\cdot\frac{1}{x_2^2}
            \end{dcases}
          `}</BlockMath>
          <P>Let's deal with the upper formula:</P>
          <BlockMath>{math`
            x_1' + x_2' =
            \frac{1}{x_1^2} + \frac{1}{x_2^2} =
            \frac{x_2^2 + x_1^2}{x_1^2x_2^2} = \cdots
          `}</BlockMath>
          <P>
            The sum of the squares of the roots can be obtained from the identity called the square of a sum. For that,
            it's enough to subtract <M>2ab</M> from both sides using the <Dep on={sameActionRule}>same action rule</Dep>
            :
          </P>
          <BlockMath>{math`
            (a+b)^2 = a^2 + 2ab + b^2
            \\
            (a+b)^2 - 2ab = a^2 + b^2
          `}</BlockMath>
          <P>
            Use our root notation instead of <M>a</M> and <M>b</M>:
          </P>
          <BlockMath>{math`
            \cdots = \frac{(x_1 + x_2)^2 - 2x_1x_2}{x_1^2x_2^2} =
            \frac{\left(-\frac{7}{2}\right)^2 - 2\left(-\frac{3}{2}\right)}{x_1^2x_2^2} =
            \frac{\frac{61}{4}}{x_1^2x_2^2} =
            \frac{61}{4x_1^2x_2^2} = \cdots
          `}</BlockMath>
          <P>
            The product of the squares of the roots <M>{math`x_1^2x_2^2`}</M> can be written as the square of the
            product of the roots <M>{math`(x_1x_2)^2`}</M>:
          </P>
          <BlockMath>{math`
            \cdots = \frac{61}{4(x_1x_2)^2} = \frac{61}{4\left(-\frac{3}{2}\right)^2} = \frac{61}{4\cdot\frac{9}{4}} = \frac{61}{9}
          `}</BlockMath>
          <P>Now let's deal with the lower formula:</P>
          <BlockMath>{math`
            x_1'x_2' = \frac{1}{x_1^2x_2^2} = \frac{1}{(x_1x_2)^2} = \frac{1}{\left(-\frac{3}{2}\right)^2} = \frac{4}{9}
          `}</BlockMath>
          <P>Final Vieta's formulas with the new roots look like this:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{-61}{9} \\
              x_1'x_2' = \frac{4}{9}
            \end{dcases}
          `}</BlockMath>
          <P>Then the coefficients of the new quadratic equation are:</P>
          <BlockMath>{math`A = 9, \enspace B = -61, \enspace C = 4`}</BlockMath>
          <P>Quadratic equation with the new roots:</P>
          <BlockMath>{math`9x^2 - 61x + 4 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`\dfrac{x_1}{x_2} + 1`}</M> and <M>{math`\dfrac{x_2}{x_1} + 1`}</M>
        </ProblemDescription>
        <MathExpressionCheck label="New equation" answer="6x^2+49x-49=0" />
        <ProblemHint>
          Use the trick of building new <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> from the new
          roots from the problem <Ref to={uniques.rootFromRoot}>A root from a root</Ref>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`6x^2 + 49x - 49 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We need new roots <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> related to the original roots <M>x_1</M> and{' '}
            <M>x_2</M> like this:
          </P>
          <BlockMath>{math`
            x_1' = \frac{x_1}{x_2} + 1
            >>{big}
            x_2' = \frac{x_2}{x_1} + 1
          `}</BlockMath>
          <P>Build Vieta's formulas for the new quadratic equation:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = \left(\frac{x_1}{x_2} + 1\right) + \left(\frac{x_2}{x_1} + 1\right)
              \\
              x_1'x_2' = \left(\frac{x_1}{x_2} + 1\right)\left(\frac{x_2}{x_1} + 1\right)
            \end{dcases}
          `}</BlockMath>
          <P>Let's deal with the upper formula:</P>
          <BlockMath>{math`
            x_1' + x_2' =
            \left(\frac{x_1}{x_2} + 1\right) + \left(\frac{x_2}{x_1} + 1\right) =
            \frac{x_1^2 + x_2^2}{x_1x_2} + 2 = \cdots
          `}</BlockMath>
          <P>We already found the sum of squares in the previous part. Substitute that value:</P>
          <BlockMath>{math`
            \cdots =
            \frac{\frac{61}{4}}{-\frac{3}{2}} + 2 =
            -\frac{61}{6} + 2 =
            -\frac{61}{6} + \frac{12}{6} =
            -\frac{49}{6}
          `}</BlockMath>
          <P>Now the lower formula:</P>
          <BlockMath>{math`
            x_1'x_2' =
            \left(\frac{x_1}{x_2} + 1\right)\left(\frac{x_2}{x_1} + 1\right) =
            \frac{\cancel{x_1}}{\cancel{x_2}}\cdot\frac{\cancel{x_2}}{\cancel{x_1}} + \frac{x_1}{x_2} + \frac{x_2}{x_1} + 1 =
            \frac{x_1^2 + x_2^2}{x_1x_2} + 2 = -\frac{49}{6}
          `}</BlockMath>
          <P>Final Vieta's formulas with the new roots look like this:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{49}{6} \\
              x_1'x_2' = \frac{-49}{6}
            \end{dcases}
          `}</BlockMath>
          <P>Then the coefficients of the new quadratic equation are:</P>
          <BlockMath>{math`A = 6, \enspace B = 49, \enspace C = -49`}</BlockMath>
          <P>Quadratic equation with the new roots:</P>
          <BlockMath>{math`6x^2 + 49x - 49 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Acrobatic roots" level="medium">
      <SubProblem>
        <ProblemDescription>
          <P>
            Without calculating the roots of the equation <M>{math`3x^2 + 8x - 1 = 0`}</M>, find:
          </P>
          <BlockMath>{math`x_1^2 + x_2^2`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer={'70/9'} />
        <ProblemHint>
          <P>Use the square-of-a-sum formula:</P>
          <BlockMath>{math`(a + b)^2 = a^2 + 2ab + b^2`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`\frac{70}{9}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>A sum of squares like this can be obtained using the square-of-a-sum formula:</P>
          <BlockMath>{math`(a+b)^2 = a^2 + 2ab + b^2`}</BlockMath>
          <BlockMath>{math`(x_1 + x_2)^2 = x_1^2 + 2x_1x_2 + x_2^2`}</BlockMath>
          <P>
            The sum and product of the roots can be found from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -\frac{B}{A} = -\frac{8}{3} \\
              x_1x_2 = \frac{C}{A} = -\frac{1}{3}
            \end{cases}
          `}</BlockMath>
          <P>Substitute that data into the square-of-a-sum formula:</P>
          <BlockMath>{math`
            \left(-\frac{8}{3}\right)^2 = x_1^2 + 2\left(-\frac{1}{3}\right) + x_2^2
            \\
            \frac{64}{9} = x_1^2 - \frac{2}{3} + x_2^2
          `}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, add <M>{math`\frac{2}{3}`}</M> to both sides of the
            equation:
          </P>
          <BlockMath>{math`
            \frac{64}{9} + \yellow{\frac{2}{3}} = x_1^2 - \cancel{\frac{2}{3}} + x_2^2 + \cancel{\yellow{\frac{2}{3}}}
          `}</BlockMath>
          <P>Bring to a common denominator and add:</P>
          <BlockMath>{math`
            \frac{64}{9} + \frac{6}{9} = x_1^2 + x_2^2
            \\
            \boxed{\frac{70}{9} = x_1^2 + x_2^2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Without calculating the roots of the equation <M>{math`3x^2 + 8x - 1 = 0`}</M>, find:
          </P>
          <BlockMath>{math`x_1x_2^3 + x_2x_1^3`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer={'-70/27'} />
        <ProblemHint>Factor out the common factor.</ProblemHint>
        <ProblemAnswer>
          <M>{math`-\frac{70}{27}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Factor out the common factor <M>{math`x_1x_2`}</M>:
          </P>
          <BlockMath>{math`x_1x_2(x_1^2 + x_2^2)`}</BlockMath>
          <P>
            The product of the roots can be found from <Dep on={article.uniques.vietasFormulas}>Vieta's formula</Dep>:
          </P>
          <BlockMath>{math`x_1x_2 = \frac{C}{A} = -\frac{1}{3}`}</BlockMath>
          <P>We already found the sum of the squares of the roots earlier:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = \frac{70}{9}`}</BlockMath>
          <P>Substitute that data into the expression:</P>
          <BlockMath>{math`x_1x_2(x_1^2 + x_2^2) = -\frac{1}{3} \cdot \frac{70}{9}`}</BlockMath>
          <P>Result:</P>
          <BlockMath>{math`\boxed{x_1x_2^3 + x_2x_1^3 = -\frac{70}{27}}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Without calculating the roots of the equation <M>{math`3x^2 + 8x - 1 = 0`}</M>, find:
          </P>
          <BlockMath>{math`\frac{x_1}{x_2^2} + \frac{x_2}{x_1^2}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer={'-584/3'} />
        <ProblemHint>
          <P>Use the cube-of-a-sum formula:</P>
          <BlockMath>{math`(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`-\frac{584}{3}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Bring the fractions to a common denominator:</P>
          <BlockMath>{math`\frac{x_1^3 + x_2^3}{x_1^2x_2^2}`}</BlockMath>
          <P>
            In the numerator, the sum of cubes can be obtained with the cube-of-a-sum formula the same way we previously
            used the square-of-a-sum formula:
          </P>
          <BlockMath>{math`(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3`}</BlockMath>
          <P>
            This formula is easy to get even if you don't know its expanded form by heart. On the left side you just
            multiply the bracket by itself three times.
          </P>
          <P>
            Replace <M>a</M> and <M>b</M> with our roots:
          </P>
          <BlockMath>{math`(x_1 + x_2)^3 = x_1^3 + 3x_1^2x_2 + 3x_1x_2^2 + x_2^3`}</BlockMath>
          <P>
            On the right side, factor out the common factor <M>{math`3x_1x_2`}</M> from the middle terms:
          </P>
          <BlockMath>{math`(x_1 + x_2)^3 = x_1^3 + 3x_1x_2(x_1 + x_2) + x_2^3`}</BlockMath>
          <P>
            Replace the sums and products with the data we already know from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`\left(-\frac{8}{3}\right)^3 = x_1^3 + 3\left(-\frac{1}{3}\right)\left(-\frac{8}{3}\right) + x_2^3`}</BlockMath>
          <P>Do the arithmetic:</P>
          <BlockMath>{math`
            \left(-\frac{8}{3}\right)^3 = x_1^3 + \frac{8}{3} + x_2^3
            \\
            -\frac{512}{27} = x_1^3 + \frac{8}{3} + x_2^3
          `}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract the fraction <M>{math`\frac{8}{3}`}</M>{' '}
            from both sides:
          </P>
          <BlockMath>{math`
            -\frac{512}{27} - \yellow{\frac{8}{3}} = x_1^3 + \cancel{\frac{8}{3}} + x_2^3 - \cancel{\yellow{\frac{8}{3}}}
          `}</BlockMath>
          <P>Bring to a common denominator and subtract:</P>
          <BlockMath>{math`
            -\frac{512}{27} - \frac{72}{27} = x_1^3 + x_2^3
            \\
            -\frac{584}{27} = x_1^3 + x_2^3
          `}</BlockMath>
          <P>Substitute the numerator we computed back into the fraction:</P>
          <BlockMath>{math`\frac{-\frac{584}{27}}{x_1^2x_2^2}`}</BlockMath>
          <P>
            In the denominator, the product <M>{math`x_1^2x_2^2`}</M> can be combined under one square to get{' '}
            <M>{math`(x_1x_2)^2`}</M>. And we know the product of the roots:
          </P>
          <BlockMath>{math`
            \frac{-\frac{584}{27}}{\left(-\frac{1}{3}\right)^2}
            =
            \frac{-\frac{584}{27}}{\frac{1}{9}}
            =
            -\frac{584}{27} \cdot 9
            =
            \boxed{-\frac{584}{3}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Without calculating the roots of the equation <M>{math`3x^2 + 8x - 1 = 0`}</M>, find:
          </P>
          <BlockMath>{math`x_1^4 + x_2^4`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer={'4882/81'} />
        <ProblemHint>
          <P>
            Path 1 -- derive the fourth-power formula for <M>{math`(a + b)^4`}</M> with your own hands by multiplying
            this bracket by itself four times.
          </P>
          <P>
            Path 2 -- make a substitution: <M>{math`n = x_1^2`}</M> and <M>{math`m = x_2^2`}</M>.
          </P>
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`\frac{4882}{81}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            This example can be solved in several ways. The first, direct and bulky, way is to derive the fourth-power
            formula for <M>{math`(a+b)^4`}</M> by multiplying the bracket by itself four times and then plug in the
            known data.
          </P>
          <P>
            But we'll be smarter. Make a variable substitution: <M>{math`n = x_1^2`}</M> and <M>{math`m = x_2^2`}</M>.
            Then we get:
          </P>
          <BlockMath>{math`x_1^4 + x_2^4 = n^2 + m^2`}</BlockMath>
          <P>The sum of squares can be obtained using the square-of-a-sum formula:</P>
          <BlockMath>{math`(a+b)^2 = a^2 + 2ab + b^2`}</BlockMath>
          <BlockMath>{math`(n + m)^2 = n^2 + 2nm + m^2`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>2nm</M> from both sides:
          </P>
          <BlockMath>{math`
            (n + m)^2 - \yellow{2nm} = n^2 + \cancel{2nm} + m^2 - \cancel{\yellow{2nm}}
            \\
            (n + m)^2 - 2nm = n^2 + m^2
          `}</BlockMath>
          <P>Go back to the original variables:</P>
          <BlockMath>{math`(x_1^2 + x_2^2)^2 - 2(x_1x_2)^2 = x_1^4 + x_2^4`}</BlockMath>
          <P>
            We found the sum of the squares of the roots in the first subproblem. We know the product of the roots from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formula</Dep>. Plug in the data and compute:
          </P>
          <BlockMath>{math`
            \left(\frac{70}{9}\right)^2 - 2\left(-\frac{1}{3}\right)^2
            =
            \frac{4900}{81} - 2\cdot\frac{1}{9}
            =
            \frac{4900}{81} - \frac{18}{81}
            =
            \boxed{\frac{4882}{81}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Without calculating the roots of the equation <M>{math`2x^2 - 5x - 4 = 0`}</M>, find:
          </P>
          <BlockMath>{math`\frac{1}{x_1^2} + \frac{1}{x_2^2}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer={'41/16'} />
        <ProblemHint>
          Bring the fractions to a common denominator. We already expressed the sum of squares in the numerator in the
          first subproblem.
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`\frac{41}{16}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Bring the fractions to a common denominator:</P>
          <BlockMath>{math`\frac{x_2^2 + x_1^2}{x_1^2x_2^2}`}</BlockMath>
          <P>We already expressed the sum of squares in the numerator in the first subproblem:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2`}</BlockMath>
          <P>Substitute this formula into the numerator:</P>
          <BlockMath>{math`\frac{(x_1 + x_2)^2 - 2x_1x_2}{x_1^2x_2^2}`}</BlockMath>
          <P>
            In the denominator, the product <M>{math`x_1^2x_2^2`}</M> can be combined under one square to get{' '}
            <M>{math`(x_1x_2)^2`}</M>:
          </P>
          <BlockMath>{math`\frac{(x_1 + x_2)^2 - 2x_1x_2}{(x_1x_2)^2}`}</BlockMath>
          <P>
            The sum and product of the roots can be found from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -\frac{B}{A} = \frac{5}{2} \\
              x_1x_2 = \frac{C}{A} = -2
            \end{cases}
          `}</BlockMath>
          <P>Substitute that data into the expression and compute:</P>
          <BlockMath>{math`
            \frac{\left(\frac{5}{2}\right)^2 - 2\cdot(-2)}{\left(-2\right)^2}
            =
            \frac{\frac{25}{4} + 4}{4}
            =
            \frac{\frac{25}{4} + \frac{16}{4}}{4}
            =
            \frac{\frac{41}{4}}{4}
            =
            \boxed{\frac{41}{16}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Without calculating the roots of the equation <M>{math`2x^2 - 5x - 4 = 0`}</M>, find:
          </P>
          <BlockMath>{math`x_1x_2^4 + x_2x_1^4`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer={'-245/4'} />
        <ProblemHint>
          Factor out the common factor. We already expressed the sum of cubes in the third subproblem.
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`-\frac{245}{4}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Factor out the common factor <M>{math`x_1x_2`}</M>:
          </P>
          <BlockMath>{math`x_1x_2(x_1^3 + x_2^3)`}</BlockMath>
          <P>We already expressed the sum of cubes in the third subproblem:</P>
          <BlockMath>{math`x_1^3 + x_2^3 = (x_1 + x_2)^3 - 3x_1x_2(x_1 + x_2)`}</BlockMath>
          <P>Plug this formula into the expression:</P>
          <BlockMath>{math`x_1x_2\left((x_1 + x_2)^3 - 3x_1x_2(x_1 + x_2)\right)`}</BlockMath>
          <P>
            We know the sum and product of the roots from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep>. Plug in the data and compute:
          </P>
          <BlockMath>{math`
            -2\left(\left(\frac{5}{2}\right)^3 - 3\cdot(-2)\cdot\frac{5}{2}\right)
            =
            -2\left(\frac{125}{8} + 15\right)
            =
            -2\left(\frac{125}{8} + \frac{120}{8}\right)
            =
            -2\cdot\frac{245}{8}
            =
            \boxed{-\frac{245}{4}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Without calculating the roots of the equation <M>{math`2x^2 - 5x - 4 = 0`}</M>, find:
          </P>
          <BlockMath>{math`\frac{x_1}{x_2^3} + \frac{x_2}{x_1^3}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer={'-2441/324'} />
        <ProblemHint>
          Bring the fractions to a common denominator. We already expressed the sum of fourth powers in the fourth
          subproblem.
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`-\frac{2441}{324}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Bring the fractions to a common denominator:</P>
          <BlockMath>{math`\frac{x_1^4 + x_2^4}{x_1^3x_2^3}`}</BlockMath>
          <P>
            We already expressed the sum of fourth powers in the numerator in the fourth subproblem. Repeat the steps
            shown there and you get:
          </P>
          <BlockMath>{math`x_1^4 + x_2^4 = \frac{4882}{81}`}</BlockMath>
          <P>
            In the denominator, the product <M>{math`x_1^3x_2^3`}</M> can be combined under one cube to get{' '}
            <M>{math`(x_1x_2)^3`}</M>. We know the product of the roots from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formula</Dep>. Compute:
          </P>
          <BlockMath>{math`x_1^3x_2^3 = (x_1x_2)^3 = \left(-2\right)^3 = -8`}</BlockMath>
          <P>Substitute the computed numerator and denominator into our expression:</P>
          <BlockMath>{math`
            \frac{x_1^4 + x_2^4}{x_1^3x_2^3}
            =
            \frac{\frac{4882}{81}}{-8}
            =
            -\frac{4882}{648}
            =
            \boxed{-\frac{2441}{324}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Without calculating the roots of the equation <M>{math`2x^2 - 5x - 4 = 0`}</M>, find:
          </P>
          <BlockMath>{math`x_1^6 + x_2^6`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer={'61049/64'} />
        <ProblemHint>
          <P>
            Make a variable substitution: <M>{math`n = x_1^2`}</M> and <M>{math`m = x_2^2`}</M>. Use the formulas from
            the previous subproblems.
          </P>
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`\frac{61049}{64}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Deriving the sixth-power formula for <M>{math`(a+b)^6`}</M> by hand by multiplying the bracket by itself six
            times -- that's way too long and inefficient.
            {/* TODO: Add a link to the binomial theorem once the /combinatorics/binomial-theorem page exists */} Even
            if you know such a cool thing as the binomial theorem. And then you'd still have a huge pile of algebra.
          </P>
          <P>
            Let's be smarter. Make a variable substitution: <M>{math`n = x_1^3`}</M> and <M>{math`m = x_2^3`}</M>. Then
            we get:
          </P>
          <BlockMath>{math`x_1^6 + x_2^6 = n^2 + m^2`}</BlockMath>
          <P>We already expressed the sum of squares in the fifth subproblem:</P>
          <BlockMath>{math`n^2 + m^2 = (n + m)^2 - 2nm`}</BlockMath>
          <P>Go back to the original variables:</P>
          <BlockMath>{math`x_1^6 + x_2^6 = (x_1^3 + x_2^3)^2 - 2(x_1^3x_2^3)`}</BlockMath>
          <P>We found the sum of cubes in the sixth subproblem. Let's compute directly with numbers:</P>
          <BlockMath>{math`
            x_1^3 + x_2^3 = \left(\frac{5}{2}\right)^3 - 3\cdot(-2)\cdot\frac{5}{2} = \frac{125}{8} + 15 = \frac{125}{8} + \frac{120}{8} = \frac{245}{8}
          `}</BlockMath>
          <P>
            The product of the cubes of the roots <M>{math`x_1^3x_2^3`}</M> can be combined under one cube to get{' '}
            <M>{math`(x_1x_2)^3`}</M>. We know the product of the roots from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formula</Dep>. Compute:
          </P>
          <BlockMath>{math`x_1^3x_2^3 = (x_1x_2)^3 = \left(-2\right)^3 = -8`}</BlockMath>
          <P>Substitute the values we computed into the expression:</P>
          <BlockMath>{math`
            \left(\frac{245}{8}\right)^2 - 2\cdot(-8)
            =
            \frac{60025}{64} + 16
            =
            \frac{60025}{64} + \frac{1024}{64}
            =
            \frac{61049}{64}
            =
            \boxed{\frac{61049}{64}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Roots and parameters" level="medium">
      <SubProblem>
        <ProblemDescription>
          <P>
            It is known that the roots of the equation <M>{math`x^2 - 5x + a = 0`}</M> are <M>1</M> less than the roots
            of the equation <M>{math`x^2 - 7x + 3a - 6 = 0`}</M>. Find <M>a</M> and the roots of each equation.
          </P>
        </ProblemDescription>
        <MathValueCheck label="a" answer={6} />
        <MathValueCheck label="Roots of 1st equation" answers={[2, 3]} />
        <MathValueCheck label="Roots of 2nd equation" answers={[3, 4]} />
        <ProblemHint>
          Write down <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> for the product for both equations.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`a = 6 \\ x_1' = 2, \enspace x_2' = 3 \\ x_1 = 3, \enspace x_2 = 4`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Denote the roots of the first equation by <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M>, and the roots of the
            second by <M>x_1</M> and <M>x_2</M>. Express in mathematical language the fact that the roots of the first
            equation are <M>1</M> less than the roots of the second:
          </P>
          <BlockMath>{math`
            x_1' = x_1 - 1
            >>{big}
            x_2' = x_2 - 1
          `}</BlockMath>
          <P>Write down the product-form Vieta's formulas for the first and second equations:</P>
          <BlockMath>{math`
            x_1x_2 = 3a - 6
            \\
            x_1'x_2' = a
          `}</BlockMath>
          <P>
            Replace <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> with expressions through <M>x_1</M> and <M>x_2</M>:
          </P>
          <BlockMath>{math`
            x_1x_2 = 3a - 6
            \\
            (x_1 - 1)(x_2 - 1) = a
          `}</BlockMath>
          <P>Expand the brackets and combine like terms:</P>
          <BlockMath>{math`
            x_1x_2 = 3a - 6
            \\
            x_1x_2 - x_1 - x_2 + 1 = a
          `}</BlockMath>
          <P>
            Replace <M>{math`x_1x_2`}</M> in the lower formula with <M>{math`3a - 6`}</M> from the upper formula:
          </P>
          <BlockMath>{math`3a - 6 - x_1 - x_2 + 1 = a \\ 3a - 5 - x_1 - x_2 = a`}</BlockMath>
          <P>Factor out a minus sign to get the sum of the roots:</P>
          <BlockMath>{math`3a - 5 - (x_1 + x_2) = a`}</BlockMath>
          <P>
            Replace the sum of the roots of the second equation <M>{math`x_1 + x_2`}</M> with <M>7</M> from Vieta's
            formula for that second equation, and find <M>a</M> using the{' '}
            <Dep on={sameActionRule}>same action rule</Dep>:
          </P>
          <BlockMath>{math`
            3a - 5 - 7 = a
            \\
            3a - 12 = a
            \\
            2a = 12
            \\
            \boxed{a = 6}
          `}</BlockMath>
          <P>
            Write either one of the two equations with the value of <M>a</M> we found:
          </P>
          <BlockMath>{math`x^2 - 5x + 6 = 0`}</BlockMath>
          <P>
            This is a monic equation, and its roots are found in your head again by{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep>. Their product has to be <M>6</M>, and their
            sum has to be <M>5</M>. Obviously the roots are <M>2</M> and <M>3</M>:
          </P>
          <BlockMath>{math`x_1' = 2, \enspace x_2' = 3`}</BlockMath>
          <P>
            By the problem statement, the roots of the second equation are <M>1</M> bigger, so:
          </P>
          <BlockMath>{math`x_1 = 3, \enspace x_2 = 4`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            It is known that the roots of the equation <M>{math`x^2 - 13x + b = 0`}</M> are equal respectively to the
            squares of the roots of the equation <M>{math`x^2 + ax + 6 = 0`}</M>. Find <M>a</M> and <M>b</M> and the
            roots of each equation.
          </P>
        </ProblemDescription>
        <MathValueCheck label="a" answer={-5} />
        <MathValueCheck label="b" answer={36} />
        <MathValueCheck label="Roots of 1st equation" answers={[4, 9]} />
        <MathValueCheck label="Roots of 2nd equation" answers={[2, 3]} />
        <ProblemHint>
          First find <M>b</M>, then the roots of both equations, and then <M>a</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`a = -5, \enspace b = 36 \\ x_1' = 4, \enspace x_2' = 9 \\ x_1 = 2, \enspace x_2 = 3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title='Finding "b"'>
            <P>
              Denote the roots of the first equation by <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M>, and the roots of
              the second by <M>x_1</M> and <M>x_2</M>. Express in mathematical language the fact that the roots of the
              first equation are equal to the squares of the roots of the second equation:
            </P>
            <BlockMath>{math`
              x_1' = x_1^2
              >>{big}
              x_2' = x_2^2
            `}</BlockMath>
            <P>Write down the product-form Vieta's formulas for the first and second equations:</P>
            <BlockMath>{math`
              x_1x_2 = 6
              \\
              x_1'x_2' = b
            `}</BlockMath>
            <P>
              Replace <M>{math`x_1'`}</M> and <M>{math`x_2'`}</M> with expressions through <M>x_1</M> and <M>x_2</M>:
            </P>
            <BlockMath>{math`
              x_1x_2 = 6
              \\
              (x_1^2)(x_2^2) = b
            `}</BlockMath>
            <P>Write the product of squares as a single squaring:</P>
            <BlockMath>{math`
              x_1x_2 = 6
              \\
              (x_1x_2)^2 = b
            `}</BlockMath>
            <P>
              Replace <M>{math`x_1x_2`}</M> in the lower formula with <M>6</M> from the upper formula:
            </P>
            <BlockMath>{math`
              (6)^2 = b
              \\
              \boxed{b = 36}
            `}</BlockMath>
          </ProblemSection>

          <ProblemSection title="Roots of the equations">
            <P>
              Write the first equation with the value of <M>b</M> we found:
            </P>
            <BlockMath>{math`x^2 - 13x + 36 = 0`}</BlockMath>
            <P>
              This is a monic equation, and its roots are found in your head again by{' '}
              <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep>. Their product has to be <M>36</M>, and
              their sum has to be <M>13</M>. Obviously the roots are <M>4</M> and <M>9</M>:
            </P>
            <BlockMath>{math`x_1' = 4, \enspace x_2' = 9`}</BlockMath>
            <P>
              The problem says the roots of the second equation are equal to the square roots of the roots of the first,
              so:
            </P>
            <BlockMath>{math`x_1 = 2, \enspace x_2 = 3`}</BlockMath>
          </ProblemSection>

          <ProblemSection title='Finding "a"'>
            <P>Write down the sum-form Vieta formula for the second equation:</P>
            <BlockMath>{math`x_1 + x_2 = -a`}</BlockMath>
            <P>Substitute the roots of the second equation that we found:</P>
            <BlockMath>{math`
              2 + 3 = -a
              \\
              5 = -a
              \\
              \boxed{a = -5}
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Checking the quadratic formula" level="hard">
      <SubProblem label="Warm-up">
        <ProblemDescription>
          <P>
            Let the roots of a quadratic equation be denoted by <M>n</M> and <M>m</M>. Express the following expression,
            built from the coefficients of that same equation, in terms of those roots:
          </P>
          <BlockMath>{math`
            \frac{B^2 - 4AC}{A^2}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Expression in terms of the roots" answer="(n-m)^2" />
        <ProblemHint>
          Rewrite the expression so that the fractions <M>-B/A</M> and <M>C/A</M> appear in it. Then substitute the sum
          and product of the roots from <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> into those
          fractions.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`\frac{B^2 - 4AC}{A^2} = (n - m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Rewrite the expression so that fractions from{' '}
            <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> show up:
          </P>
          <BlockMath>{math`
            \frac{B^2 - 4AC}{A^2} =
            \frac{B^2}{A^2} - \frac{4\cancel{A}C}{A^{\cancel{2}}} =
            \left(\frac{B}{A}\right)^2 - 4\cdot\frac{C}{A} =
            \left(-\frac{B}{A}\right)^2 - 4\cdot\frac{C}{A} = \ldots
          `}</BlockMath>
          <P>
            Now substitute the sum and product of the roots from Vieta's formulas for those fractions, expand the
            brackets, and simplify:
          </P>
          <BlockMath>{math`
            \ldots = \left(n + m\right)^2 - 4nm = \\
            = n^2 + 2nm + m^2 - 4nm = \\
            = n^2 - 2nm + m^2 = \\
            = (n - m)^2
          `}</BlockMath>
          <P>Strip out the middle steps, and you get the final equality:</P>
          <BlockMath>{math`
            \frac{B^2 - 4AC}{A^2} = (n - m)^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Check">
        <ProblemDescription>
          <P>
            Using <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> and the result of the previous
            subproblem, prove that the <Dep on={quadraticFormula}>general quadratic formula</Dep> really works:
          </P>
          <BlockMath>{math`
            \frac{-B \pm \sqrt{B^2 - 4AC}}{2A}
          `}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          Factor <M>1/2</M> out of the root formula and split the big fraction into two smaller ones.
        </ProblemHint>
        <ProblemHint>
          Rewrite the fraction with the root so that the expression from the previous subproblem appears under the root
          sign.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Let's rewrite the formula so that we get a fraction from Vieta's formulas and the expression from the
            previous subproblem:
          </P>
          <BlockMath>{math`
            \frac{-B \pm \sqrt{B^2 - 4AC}}{2A} = \frac{1}{2}\left[ \frac{-B \pm \sqrt{B^2 - 4AC}}{A} \right] = \\
            = \frac{1}{2}\left[ -\frac{B}{A} \pm \frac{\sqrt{B^2 - 4AC}}{A} \right] =
            \frac{1}{2}\left[ -\frac{B}{A} \pm \sqrt{\frac{B^2 - 4AC}{A^2}} \right] = \ldots
          `}</BlockMath>
          <P>
            Substitute the sum of the roots from Vieta's formulas into the left fraction, and the expression we got in
            the previous subproblem under the root sign:
          </P>
          <BlockMath>{math`
            \ldots = \frac{1}{2}\left[ (n + m) \pm \sqrt{(n - m)^2} \right]
            = \frac{(n + m) \pm (n - m)}{2}
          `}</BlockMath>
          <P>
            Depending on which sign you pick in place of <M>\pm</M>, you get the two roots of the equation:
          </P>
          <BlockMath>{math`
            + : \frac{(n + m) + (n - m)}{2} = \frac{1}{2}\cdot 2n = n >>
            - : \frac{(n + m) - (n - m)}{2} = \frac{1}{2}\cdot 2m = m
          `}</BlockMath>
          <P>The root formula really does work.</P>
          <QED />
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Root difference" level="hard">
      <ProblemDescription>
        <P>
          Without calculating the roots of the equation <M>{math`2x^2 - 5x + 1 = 0`}</M>, find just the difference and
          the difference of the squares of its roots. Why do both give two possible answers?
        </P>
      </ProblemDescription>
      <ProblemHint>
        <P>Use algebraic identities:</P>
        <BlockMath>{math`
          (a + b)^2 = a^2 + 2ab + b^2 \\
          (a - b)^2 = a^2 - 2ab + b^2 \\
          a^2 - b^2 = (a - b)(a + b)
        `}</BlockMath>
      </ProblemHint>
      <ProblemHint>
        <P>Relate the square of the difference to the square of the sum of the roots:</P>
        <BlockMath>{math`(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1x_2`}</BlockMath>
      </ProblemHint>
      <ProblemAnswer>
        <P>Difference of the roots:</P>
        <BlockMath>{math`x_1 - x_2 = \pm\frac{\sqrt{17}}{2}`}</BlockMath>
        <P>Difference of the squares of the roots:</P>
        <BlockMath>{math`x_1^2 - x_2^2 = \pm\frac{5\sqrt{17}}{4}`}</BlockMath>
        <P>
          The arbitrary nature of the labels <M>x_1</M> and <M>x_2</M> means the difference of the roots does not have
          one single value, but two possible values with opposite signs.
        </P>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Difference of the roots">
          <P>
            Write down <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> for this equation to get the
            starting data:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = \frac{5}{2} \\
              x_1x_2 = \frac{1}{2}
            \end{cases}
          `}</BlockMath>
          <P>
            Write down two algebraic identities, the square of a sum and the square of a difference, where sums and
            differences of numbers appear:
          </P>
          <BlockMath>{math`
            (a + b)^2 = a^2 + 2ab + b^2 \\
            (a - b)^2 = a^2 - 2ab + b^2
          `}</BlockMath>
          <P>The difference of the roots appears in the square-of-a-difference formula. Using our notation:</P>
          <BlockMath>{math`(x_1 - x_2)^2 = x_1^2 - 2x_1x_2 + x_2^2`}</BlockMath>
          <P>
            The formula on the right-hand side can be transformed into a square of a sum if we add{' '}
            <M>{math`4x_1x_2`}</M> to both sides by the <Dep on={sameActionRule}>same action rule</Dep>:
          </P>
          <BlockMath>{math`
            (x_1 - x_2)^2 + \yellow{4x_1x_2} = x_1^2 - 2x_1x_2 + x_2^2 + \yellow{4x_1x_2}
            \\
            (x_1 - x_2)^2 + 4x_1x_2 = x_1^2 + 2x_1x_2 + x_2^2
            \\
            (x_1 - x_2)^2 + 4x_1x_2 = (x_1 + x_2)^2
          `}</BlockMath>
          <P>
            Now subtract <M>{math`4x_1x_2`}</M> from both sides:
          </P>
          <BlockMath>{math`
            (x_1 - x_2)^2 + \cancel{4x_1x_2} - \cancel{\yellow{4x_1x_2}} = (x_1 + x_2)^2 - \yellow{4x_1x_2}
            \\
            (x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1x_2
          `}</BlockMath>
          <P>
            We got a formula where one side is the difference of the roots we want, and the other side is made of
            expressions known from Vieta's formulas. Plug in the data and compute:
          </P>
          <BlockMath>{math`
            (x_1 - x_2)^2 = \left(\frac{5}{2}\right)^2 - 4\cdot\frac{1}{2}
            \\
            (x_1 - x_2)^2 = \frac{25}{4} - 2
            \\
            (x_1 - x_2)^2 = \frac{25}{4} - \frac{8}{4}
            \\
            (x_1 - x_2)^2 = \frac{17}{4}
          `}</BlockMath>
          <P>
            So, if you square the difference <M>{math`x_1 - x_2`}</M>, you get <M>{math`\frac{17}{4}`}</M>. That means
            the original difference is the positive or negative root of that fraction, because when you square, the sign
            gets "lost" anyway:
          </P>
          <BlockMath>{math`
            x_1 - x_2 = \pm\sqrt{\frac{17}{4}}
            \\
            \boxed{x_1 - x_2 = \pm\frac{\sqrt{17}}{2}}
          `}</BlockMath>
        </ProblemSection>

        <ProblemSection title="Difference of the squares of the roots">
          <P>Let's use one more identity, the difference of squares:</P>
          <BlockMath>{math`a^2 - b^2 = (a-b)(a+b)`}</BlockMath>
          <P>Using our notation:</P>
          <BlockMath>{math`x_1^2 - x_2^2 = (x_1 - x_2)(x_1 + x_2)`}</BlockMath>
          <P>
            Substitute the difference of the roots found earlier into the left bracket, and the sum of the roots from
            Vieta's formulas into the right one:
          </P>
          <BlockMath>{math`
            x_1^2 - x_2^2 = \left(\pm\frac{\sqrt{17}}{2}\right)\left(\frac{5}{2}\right)
            \\
            x_1^2 - x_2^2 = \pm\frac{5\sqrt{17}}{4}
            \\
            \boxed{x_1^2 - x_2^2 = \pm\frac{5\sqrt{17}}{4}}
          `}</BlockMath>
        </ProblemSection>

        <ProblemSection title="Why are there two values?">
          <P>
            This is easy to demonstrate with an example. Suppose the roots are <M>5</M> and <M>3</M>.
          </P>
          <P>
            We <B>arbitrarily</B> label them <M>x_1</M> and <M>x_2</M>. Because we ourselves don't know which number got
            which label, the difference can have two "same-size" but opposite-sign values:
          </P>
          <List ordered>
            <Li>
              <M>{math`5 - 3 = 2`}</M> if <M>{math`x_1 = 5`}</M> and <M>{math`x_2 = 3`}</M>.
            </Li>
            <Li>
              <M>{math`3 - 5 = -2`}</M> if <M>{math`x_1 = 3`}</M> and <M>{math`x_2 = 5`}</M>.
            </Li>
          </List>
          <P>
            If we want to account for both cases in one answer, that's exactly where <M>{math`\pm 2`}</M> comes from!
          </P>
          <P>
            So, the arbitrary nature of the labels <M>x_1</M> and <M>x_2</M> leads not to one specific value of the
            difference of the roots, but to two possible values with opposite signs. But the square of that difference
            is always uniquely determined, because when you square it, the sign, whatever it was, gets "lost"!
          </P>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="A doubled root" level="hard">
      <ProblemDescription>
        <P>
          For which values of the parameter <M>a</M> is one root of the quadratic equation twice the other?
        </P>
        <BlockMath>{math`(a^2 - 5a + 3)x^2 + (3a-1)x + 2 = 0`}</BlockMath>
      </ProblemDescription>
      <MathValueCheck answer={'2/3'} />
      <ProblemHint>
        Write down <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> for this equation.
      </ProblemHint>
      <ProblemHint>One root is twice the other. Write that condition in mathematical language.</ProblemHint>
      <ProblemHint>
        Substitute the expression for the root from the first formula into the second and find the value of the
        parameter <M>a</M>.
      </ProblemHint>
      <ProblemAnswer>
        <M>{math`a = \frac{2}{3}`}</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>"One root is twice the other" is written in mathematical language like this:</P>
        <BlockMath>{math`x_1 = 2x_2`}</BlockMath>
        <P>
          Write down <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> for this equation:
        </P>
        <BlockMath>{math`
          \begin{dcases}
            x_1 + x_2 = -\frac{3a-1}{a^2 - 5a + 3} \\
            x_1x_2 = \frac{2}{a^2 - 5a + 3}
          \end{dcases}
        `}</BlockMath>
        <P>
          Replace <M>x_1</M> with <M>{math`2x_2`}</M> in both formulas:
        </P>
        <BlockMath>{math`
          \begin{dcases}
            3x_2 = -\frac{3a-1}{a^2 - 5a + 3} \\
            2x_2^2 = \frac{2}{a^2 - 5a + 3}
          \end{dcases}
        `}</BlockMath>
        <P>
          In both formulas, isolate <M>x_2</M> using the <Dep on={sameActionRule}>same action rule</Dep>:
        </P>
        <BlockMath>{math`
          \begin{dcases}
            x_2 = -\frac{3a-1}{3(a^2 - 5a + 3)} \\
            x_2^2 = \frac{1}{a^2 - 5a + 3}
          \end{dcases}
        `}</BlockMath>
        <P>
          In the second formula, replace <M>x_2</M> with its value from the first formula:
        </P>
        <BlockMath>{math`
          \left(-\frac{3a-1}{3(a^2 - 5a + 3)}\right)^2 = \frac{1}{a^2 - 5a + 3}
          \\
          \frac{(3a-1)^2}{9(a^2 - 5a + 3)^{\cancel{2}}} = \frac{1}{\cancel{a^2 - 5a + 3}}
          \\
          (3a-1)^2 = 9(a^2 - 5a + 3)
          \\
          \cancel{9a^2} - 6a + 1 = \cancel{9a^2} - 45a + 27
          \\
          -6a + 1 = -45a + 27
          \\
          39a = 26
          \\
          3\cdot\cancel{13}a = 2\cdot\cancel{13}
          \\
          3a = 2
          \\
          \boxed{a = \frac{2}{3}}
        `}</BlockMath>
        <P>
          So, when <M>{math`a = \frac{2}{3}`}</M>, one root of the quadratic equation is twice the other.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="I'm out of root-themed titles" level="hard">
      <ProblemDescription>
        <P>
          The numbers <M>n</M> and <M>m</M> are the roots of the quadratic equation <M>x^2 + 5x + 3 = 0</M>. Without
          calculating the values of those roots, determine what quadratic equation will have the following roots:
        </P>
        <BlockMath>{math`
          \left( n - \frac{1}{n} \right)^2 \quad \text{and} \quad \left( m - \frac{1}{m} \right)^2
        `}</BlockMath>
      </ProblemDescription>
      <ProblemHint>
        <P>
          Write down <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> for the original equation and for
          the new one. In the new formulas, do the transformations needed so that expressions from the old Vieta
          formulas show up. It's pretty tedious, but that's the job. Then plug them in and compute.
        </P>
      </ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`
          9x^2 - 154x + 81 = 0
        `}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Write down <Dep on={article.uniques.vietasFormulas}>Vieta's formulas</Dep> for the roots of the original
          equation:
        </P>
        <BlockMath>{math`
          \begin{cases}
          n + m = -5 \\
          nm = 3
          \end{cases}
        `}</BlockMath>
        <P>Now write down Vieta's formulas for the new roots:</P>
        <BlockMath>{math`
          \begin{cases}
          \left( n - \frac{1}{n} \right)^2 + \left( m - \frac{1}{m} \right)^2 = \text{?} \\
          \left( n - \frac{1}{n} \right)^2 \cdot \left( m - \frac{1}{m} \right)^2 = \text{?}
          \end{cases}
        `}</BlockMath>
        <P>
          Our job is to transform each of these new Vieta formulas until we can stick expressions from the old Vieta
          formulas into them. Let's go.
        </P>
        <ProblemSection title="Sum of the new roots">
          <P>
            Rewrite the formula for the sum of the new roots. We'll turn it into a square of a sum by adding and
            compensating the needed terms:
          </P>
          <BlockMath>{math`
            \left( n - \frac{1}{n} \right)^2 + \left( m - \frac{1}{m} \right)^2 = \\
            = \left( n - \frac{1}{n} \right)^2 + \yellow{ 2\left(n - \frac{1}{n}\right)\left(m - \frac{1}{m}\right)} + \left( m - \frac{1}{m} \right)^2 - \yellow{2\left(n - \frac{1}{n}\right)\left(m - \frac{1}{m}\right)} = \\
            = \left( n - \frac{1}{n} + m - \frac{1}{m} \right)^2 - 2\left(n - \frac{1}{n}\right)\left(m - \frac{1}{m}\right) = \\
            = \left[(n + m) - \frac{m + n}{nm}\right]^2 - 2\left(nm - n\cdot\frac{1}{m} - m\cdot\frac{1}{n} + \frac{1}{nm}\right) = \\
            = \left[(n + m) - \frac{m + n}{nm}\right]^2 - 2\left(nm - \frac{n^2 + m^2}{nm} + \frac{1}{nm}\right) = \\
            = \left[(n + m) - \frac{m + n}{nm}\right]^2 - 2\left(nm - \frac{(n^2 + \yellow{2nm} + m^2) - \yellow{2nm}}{nm} + \frac{1}{nm}\right) = \\
            = \left[(n + m) - \frac{m + n}{nm}\right]^2 - 2\left(nm - \frac{(n + m)^2 - 2nm}{nm} + \frac{1}{nm}\right) = \ldots
          `}</BlockMath>
          <P>Now plug in the numbers and compute:</P>
          <BlockMath>{math`
            \ldots = \left[(-5) - \frac{-5}{3}\right]^2 - 2\left(3 - \frac{(-5)^2 - 2\cdot 3}{3} + \frac{1}{3}\right) = \\
            = \left(-\frac{10}{3}\right)^2 - 2\left(3 - \frac{25 - 6}{3} + \frac{1}{3}\right) = \frac{100}{9} - 2\left(3 - \frac{19}{3} + \frac{1}{3}\right) = \\
              = \frac{100}{9} - 2\left(3 - \frac{18}{3}\right) = \frac{100}{9} - 2\cdot(-3) = \frac{100}{9} + 6 = \frac{100}{9} + \frac{54}{9} = \boxed{\frac{154}{9}}
          `}</BlockMath>
        </ProblemSection>
        <ProblemSection title="Product of the new roots">
          <P>Now rewrite the formula for the product of the new roots:</P>
          <BlockMath>{math`
            \left( n - \frac{1}{n} \right)^2 \cdot \left( m - \frac{1}{m} \right)^2 = \left[ \left(n - \frac{1}{n}\right)\left(m - \frac{1}{m}\right) \right]^2 \\
            = \left(nm - n\cdot\frac{1}{m} - m\cdot\frac{1}{n} + \frac{1}{nm}\right)^2 = \\
            = \left(nm - \frac{n^2 + m^2}{nm} + \frac{1}{nm}\right)^2 = \\
            = \left(nm - \frac{(n^2 + \yellow{2nm} + m^2) - \yellow{2nm}}{nm} + \frac{1}{nm}\right)^2 = \\
            = \left(nm - \frac{(n + m)^2 - 2nm}{nm} + \frac{1}{nm}\right)^2 = \ldots
          `}</BlockMath>
          <P>Plug in the numbers and compute:</P>
          <BlockMath>{math`
            \ldots = \left(3 - \frac{(-5)^2 - 2\cdot 3}{3} + \frac{1}{3}\right)^2 = \left(3 - \frac{25 - 6}{3} + \frac{1}{3}\right)^2 = \\
              = \left(3 - \frac{19}{3} + \frac{1}{3}\right)^2 = \left(3 - \frac{18}{3}\right)^2 = (-3)^2 = \boxed{9}
          `}</BlockMath>
        </ProblemSection>
        <ProblemSection title="Final equation">
          <P>Let's sort out the sum-of-roots formula for the new equation:</P>
          <BlockMath>{math`
              -\frac{B}{A} = \frac{154}{9} = -\frac{-154}{9}
          `}</BlockMath>
          <P>Now let's sort out the product-of-roots formula:</P>
          <BlockMath>{math`
              \frac{C}{A} = 9 = \frac{81}{9}
          `}</BlockMath>
          <P>So the final quadratic equation with the new roots is:</P>
          <BlockMath>9x^2 - 154x + 81 = 0</BlockMath>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="Zero-sum game" level="hard">
      <ProblemDescription>
        Using <B>only</B> Vieta's formulas, figure out what the roots of a quadratic equation are if the sum of its
        coefficients is equal to zero.
      </ProblemDescription>
      <MathExpressionCheck label="Roots of the equation" answers={[1, 'C/A']} />
      <ProblemHint>
        Express one of the coefficients from the zero sum and substitute it into Vieta's formula.
      </ProblemHint>
      <ProblemHint>
        Carry out the transformations so that you can substitute roots from the other Vieta formula.
      </ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`x_1 = 1 >>{big} x_2 = \frac{C}{A}`}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>The problem tells us that the sum of the coefficients is zero:</P>
        <BlockMath>{math`A + B + C = 0`}</BlockMath>
        <P>Express one coefficient through the others using the zero-sum equality:</P>
        <BlockMath>-B = A + C</BlockMath>
        <P>
          Write down Vieta's formulas and replace <M>-B</M> with <M>A + C</M>:
        </P>
        <BlockMath>{math`
          \begin{cases}
            x_1 + x_2 = -\frac{B}{A} \\
            x_1 x_2 = \frac{C}{A}
          \end{cases}
          >>
          \begin{cases}
            x_1 + x_2 = \frac{A + C}{A} \\
            x_1 x_2 = \frac{C}{A}
          \end{cases}
          >>
          \begin{cases}
            x_1 + x_2 = 1 + \frac{C}{A} \\
            x_1 x_2 = \frac{C}{A}
          \end{cases}
        `}</BlockMath>
        <P>
          Notice that a fraction <M>C/A</M> appeared on the right. According to the second Vieta formula, that same
          fraction is equal to the product of the roots. Replace the fraction with that product:
        </P>
        <BlockMath>x_1 + x_2 = 1 + x_1x_2</BlockMath>
        <P>Move all terms to one side, say the left:</P>
        <BlockMath>x_1 - x_1x_2 + x_2 - 1 = 0</BlockMath>
        <P>Now for a combo of transformations:</P>
        <Table>
          <Tr>
            <Td>
              Factor <M>x_1</M> out of the first two terms.
            </Td>
            <Td freeze center>
              <M currentColor>x_1(1 - x_2) + (x_2 - 1) = 0</M>
            </Td>
          </Tr>
          <Tr>
            <Td>
              Factor <M>-1</M> out of the left bracket so it matches the right one.
            </Td>
            <Td freeze center>
              <M currentColor>-x_1(x_2 - 1) + (x_2 - 1) = 0</M>
            </Td>
          </Tr>
          <Tr>
            <Td>
              Factor out <M>(x_2 - 1)</M>.
            </Td>
            <Td freeze center>
              <M currentColor>(x_2 - 1)(1 - x_1) = 0</M>
            </Td>
          </Tr>
          <Tr>
            <Td>
              Factor <M>-1</M> out of the second bracket to make them look the same.
            </Td>
            <Td freeze center>
              <M currentColor>-(x_1 - 1)(x_2 - 1) = 0</M>
            </Td>
          </Tr>
          <Tr>
            <Td>
              Multiply both sides of the equation by <M>-1</M> to get rid of the minus sign.
            </Td>
            <Td freeze center>
              <M currentColor>(x_1 - 1)(x_2 - 1) = 0</M>
            </Td>
          </Tr>
        </Table>
        <P>
          We got two factors whose product is zero. If at least one bracket becomes zero, the whole product becomes zero
          too. So one of the roots <B>must definitely be equal to</B> <M>1</M>!
        </P>
        <P>
          Let the root <M>x_1</M> be the one equal to one. Substitute it into the second Vieta formula:
        </P>
        <BlockMath>{math`
          x_1x_2 = \frac{C}{A} >>
          1 \cdot x_2 = \frac{C}{A} >>
          \boxed{x_2 = \frac{C}{A}}
        `}</BlockMath>
        <P>
          Nice result -- if the sum of the coefficients of a quadratic equation is zero, then one root must be equal to{' '}
          <M>1</M>, and the other one is <M>C/A</M>!
        </P>
      </ProblemSolution>
      <ProblemNote>
        This problem fully repeats <Ref to={oneRootOne}>One root is one</Ref>, the result is just reached by a different
        route. There we used factoring, and here we used Vieta's formulas.
      </ProblemNote>
    </Problem>
  </>
));
