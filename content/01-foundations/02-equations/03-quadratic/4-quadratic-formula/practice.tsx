import article from './article';

// #region Scripts
//
//
//

import evenA1 from './scripts/even/a1';
import evenGeneral from './scripts/even/general';
import quadraticInteger from './scripts/quadratic/integer';
import quadraticFraction from './scripts/quadratic/fraction';
import quadraticIrrational from './scripts/quadratic/irrational';
import biquadraticInteger from './scripts/biquadratic/integer';
import biquadraticFraction from './scripts/biquadratic/fraction';
import biquadraticIrrational from './scripts/biquadratic/irrational';
import davidGoliath from './scripts/david-goliath';

//
//
// #endregion

// #region Assets
//
//

import palindromial from './assets/palindromial.svg';

//
//
// #endregion

// #region Links
//
//

const zeroProductProperty = $CONTENT.foundations.equations.zeroProductProperty;

//
//
// #endregion

export default defineProse({
  uniques: {
    evenB: Problems,
    sridharasMethod: Problem,
    quadraticInF: Problems,
    palindromials: Problems,
  },
})(({ uniques }) => (
  <>
    <Problems
      title="Quadratic equations"
      level="easy"
      snippet={{
        seo: 'Quadratic equation practice problems',
        description: 'Practice solving quadratic equations with the quadratic formula.',
      }}
    >
      <P>
        Solve the quadratic equation using the <Dep on={article.uniques.formula}>quadratic formula</Dep>:
      </P>
      <SubProblem label="Integer roots" script={quadraticInteger()} />
      <SubProblem label="Fraction roots" script={quadraticFraction()} />
      <SubProblem label="Irrational roots" script={quadraticIrrational()} />
    </Problems>

    <Problems
      title="Biquadratic equations"
      level="easy"
      snippet={{
        seo: 'Biquadratic equation practice problems',
        description: 'Practice solving biquadratic equations by reducing them to quadratics.',
      }}
    >
      <P>
        Solve the <Dep on={article.uniques.biquadratic}>biquadratic equation</Dep>:
      </P>
      <SubProblem label="Integer roots" script={biquadraticInteger()} />
      <SubProblem label="Fraction roots" script={biquadraticFraction()} />
      <SubProblem label="Irrational roots" script={biquadraticIrrational()} />
    </Problems>

    <Problem title="David and Goliath" level="easy" script={davidGoliath()} />

    <Problems
      $={uniques.evenB}
      title="Even coefficient"
      level="medium"
      snippet={{
        seo: 'Quadratic equation with even B coefficient',
        key: true,
        description: 'A simpler root formula for quadratics when the coefficient B is even.',
      }}
      method
    >
      <SubProblem label="General formula">
        <ProblemDescription>
          Derive a general root formula for a quadratic equation assuming the coefficient <M>B</M> is an even number.
          Also derive a separate formula for the special case where <M>B</M> is even and <M>A = 1</M>.
        </ProblemDescription>
        <ProblemHint>
          Write the coefficient <M>B</M> as <M>2K</M>.
        </ProblemHint>
        <ProblemHint>
          Substitute <M>2K</M> instead of <M>B</M> into the quadratic formula (or re-derive it from scratch).
        </ProblemHint>
        <ProblemAnswer>
          <P>
            Root formula for a quadratic with an even coefficient <M>B = 2K</M>:
          </P>
          <BlockMath>{math`\boxed{x = \frac{-K \pm \sqrt{K^2 - AC}}{A}}`}</BlockMath>
          <P>
            If <M>A = 1</M>:
          </P>
          <BlockMath>{math`\boxed{x = -K \pm \sqrt{K^2 - C}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            If the coefficient <M>B</M> is even, then it is divisible by two. So we can write it as <M>B = 2K</M>, where{' '}
            <M>K</M> is some integer. From now on, we'll use this notation instead of <M>B</M>.
          </P>
          <ProblemSection title="Substitute into the formula">
            <P>
              Write down the <Dep on={article.uniques.formula}>quadratic formula</Dep>:
            </P>
            <BlockMath>{math`\boxed{x = \frac{-B \pm \sqrt{D}}{2A}}`}</BlockMath>
            <P>
              Substitute <M>2K</M> instead of <M>B</M> and simplify:
            </P>
            <BlockMath>{math`
              x = \frac{-2K \pm \sqrt{(2K)^2 - 4AC}}{2A} \\
              x = \frac{-2K \pm \sqrt{4K^2 - 4AC}}{2A} \\
              x = \frac{-2K \pm \sqrt{4(K^2 - AC)}}{2A} \\
              x = \frac{-2K \pm \sqrt{4}\sqrt{K^2 - AC}}{2A} \\
              x = \frac{-2K \pm 2\sqrt{K^2 - AC}}{2A} \\
              x = \frac{\cancel{2}(-K \pm \sqrt{K^2 - AC})}{\cancel{2}A} \\
              \boxed{x = \frac{-K \pm \sqrt{K^2 - AC}}{A}}
            `}</BlockMath>
            <P>
              If <M>A = 1</M>, the formula simplifies to:
            </P>
            <BlockMath>{math`\boxed{x = -K \pm \sqrt{K^2 - C}}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Derive it again">
            <P>Write the quadratic equation in general form:</P>
            <BlockMath>Ax^2 + Bx + C = 0</BlockMath>
            <P>
              Substitute <M>2K</M> instead of <M>B</M>:
            </P>
            <BlockMath>Ax^2 + 2Kx + C = 0</BlockMath>
            <P>
              Divide both sides by <M>A</M> and complete the square:
            </P>
            <BlockMath>{math`
              x^2 + \frac{2Kx}{A} + \frac{C}{A} = 0 \\
              \brand{x}^2 + 2 \cdot \brand{x} \cdot \frac{K}{A} + \frac{C}{A} = 0 \\
              \underbrace{x^2 + 2 \cdot x \cdot \frac{K}{A} + \yellow{\left(\frac{K}{A}\right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left(\frac{K}{A}\right)^2} + \frac{C}{A} = 0 \\
              \left(x + \frac{K}{A}\right)^2 - \frac{K^2}{A^2} + \frac{C}{A} = 0 \\
              \left(x + \frac{K}{A}\right)^2 = \frac{K^2}{A^2} - \frac{C}{A} \\
              \left(x + \frac{K}{A}\right)^2 = \frac{K^2 - AC}{A^2}
            `}</BlockMath>
            <P>
              Take the square root of both sides (assuming the "simplified"{' '}
              <Ref to={article.uniques.discriminant}>discriminant</Ref> <M>K^2 - AC</M> is non-negative):
            </P>
            <BlockMath>{math`
              x + \frac{K}{A} = \pm \frac{\sqrt{K^2 - AC}}{A} \\
              x = -\frac{K}{A} \pm \frac{\sqrt{K^2 - AC}}{A} \\
              \boxed{x = \frac{-K \pm \sqrt{K^2 - AC}}{A}}
            `}</BlockMath>
            <P>
              If <M>A = 1</M>, the formula simplifies to:
            </P>
            <BlockMath>{math`\boxed{x = -K \pm \sqrt{K^2 - C}}`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
        <ProblemNote>
          <P>
            Simpler formulas without extra multiplication let you solve quadratics with an even coefficient faster —
            sometimes even in your head. The easiest way to remember it: when <M>B</M> is even, the root formula is{' '}
            <B>the same as the general one</B>, just write <M>K</M> instead of <M>B</M> and remove the 2 and 4:
          </P>

          <BlockMath>{math`
            \frac{-\yellow{B} \pm \sqrt{\yellow{B}^2 - \red{4}AC}}{\red{2}A} \implies
            \frac{-\brand{K} \pm \sqrt{\brand{K}^2 - AC}}{A}
          `}</BlockMath>
        </ProblemNote>
      </SubProblem>
      <SubProblem label="Practice for A = 1" script={evenA1()} />
      <SubProblem label="General practice" script={evenGeneral()} />
    </Problems>

    <Problems title="Roots with letters" level="medium">
      <P>Derive expressions for the roots of the equations:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 7ax + 12a^2 = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Expressions for the roots" answers={['3a', '4a']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 4a >> x_2 = 3a`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 1 >> B = -7a >> C = 12a^2`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (-7a)^2 - 4 \cdot 1 \cdot 12a^2 = \\
            = 49a^2 - 48a^2 = \\
            = a^2
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-7a) \pm \sqrt{a^2}}{2} = \frac{7a \pm a}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{7a + a}{2} \\
            x_1 = \frac{8a}{2} \\
            \boxed{x_1 = 4a}
            >>
            x_2 = \frac{7a - a}{2} \\
            x_2 = \frac{6a}{2} \\
            \boxed{x_2 = 3a}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 5bx + 6b^2 = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Expressions for the roots" answers={['-2b', '-3b']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -2b >> x_2 = -3b`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 1 >> B = 5b >> C = 6b^2`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (5b)^2 - 4 \cdot 1 \cdot 6b^2 = \\
            = 25b^2 - 24b^2 = \\
            = b^2
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-5b \pm \sqrt{b^2}}{2} = \frac{-5b \pm b}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-5b + b}{2} \\
            x_1 = \frac{-4b}{2} \\
            \boxed{x_1 = -2b}
            >>
            x_2 = \frac{-5b - b}{2} \\
            x_2 = \frac{-6b}{2} \\
            \boxed{x_2 = -3b}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>7x^2 - 4ax - 3a^2 = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Expressions for the roots" answers={['a', '-3a/7']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = a >> x_2 = -\frac{3a}{7}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 7 >> B = -4a >> C = -3a^2`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (-4a)^2 - 4 \cdot 7 \cdot (-3a^2) = \\
            = 16a^2 + 84a^2 = \\
            = 100a^2
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-4a) \pm \sqrt{100a^2}}{2 \cdot 7} = \frac{4a \pm 10a}{14}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{4a + 10a}{14} \\
            x_1 = \frac{14a}{14} \\
            \boxed{x_1 = a}
            >>
            x_2 = \frac{4a - 10a}{14} \\
            x_2 = \frac{-6a}{14} \\
            \boxed{x_2 = -\frac{3a}{7}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>7x^2 + 13bx + 6b^2 = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Expressions for the roots" answers={['-6b/7', '-b']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -\frac{6b}{7} >> x_2 = -b`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 7 >> B = 13b >> C = 6b^2`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (13b)^2 - 4 \cdot 7 \cdot 6b^2 = \\
            = 169b^2 - 168b^2 = \\
            = b^2
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-13b \pm \sqrt{b^2}}{2 \cdot 7} = \frac{-13b \pm b}{14}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-13b + b}{14} \\
            x_1 = \frac{-12b}{14} \\
            \boxed{x_1 = -\frac{6b}{7}}
            >>
            x_2 = \frac{-13b - b}{14} \\
            x_2 = \frac{-14b}{14} \\
            \boxed{x_2 = -b}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem
      $={uniques.sridharasMethod}
      title="Sridhara's method"
      level="medium"
      snippet={{
        key: true,
        search: true,
        seo: 'Sridhara method for deriving the quadratic formula',
        description: 'A faster way to derive the quadratic formula, with one small trick.',
      }}
      pretty
    >
      <ProblemDescription>
        The Indian mathematician Sridhara came up with a way to derive the quadratic formula back in the <M>8</M>th
        century, in a method where fractions don't appear until the very last step. His first move is to multiply both
        sides by <M>4A</M>. Finish the derivation.
      </ProblemDescription>
      <ProblemHint>
        After multiplying by <M>4A</M>, the coefficient of <M>x^2</M> becomes <M>4A^2</M>, and you can take a square
        root of that.
      </ProblemHint>
      <ProblemSolution>
        <P>As always, start by writing the quadratic equation in general form:</P>
        <BlockMath>Ax^2 + Bx + C = 0</BlockMath>
        <P>
          In the usual derivation, the coefficient <M>A</M> is annoying because we don't know its sign. We can't just
          take a square root of it, so we divide by <M>A</M> to leave <M>x^2</M> alone.
        </P>
        <P>
          Sridhara found another way around this. Multiply both sides by <M>4A</M>:
        </P>
        <BlockMath>4A \cdot (Ax^2 + Bx + C) = 4A \cdot 0 \\ 4A^2 x^2 + 4ABx + 4AC = 0</BlockMath>
        <P>
          Get rid of the constant term by subtracting <M>4AC</M> from both sides:
        </P>
        <BlockMath>4A^2 x^2 + 4ABx = -4AC</BlockMath>
        <P>Now completing the square on the left is easy:</P>
        <BlockMath>{math`
          (\brand{2Ax})^2 + 2 \cdot \brand{2Ax} \cdot B = - 4AC
        `}</BlockMath>
        <P>
          The coefficient <M>B</M> naturally plays the role of <M>b</M> in the square-of-a-sum formula{' '}
          <M>a^2 + 2ab + b^2 = (a+b)^2</M>. We only need to add <M>B^2</M> and immediately subtract it back:
        </P>
        <BlockMath>{math`
          \underbrace{(2Ax)^2 + 2 \cdot (2Ax) \cdot B + \yellow{B^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{B^2} = -4AC \\
          (2Ax + B)^2 - B^2 = -4AC \\
          (2Ax + B)^2 = B^2 - 4AC
        `}</BlockMath>
        <P>
          On the right we recognize the familiar <Dep on={article.uniques.discriminant}>discriminant</Dep>:
        </P>
        <BlockMath>(2Ax + B)^2 = D</BlockMath>
        <P>
          In this form, its role is even clearer: the left side is definitely non-negative, and whether solutions exist
          depends on the sign of the discriminant. Take the square root of both sides (assuming <M>D \geq 0</M>):
        </P>
        <BlockMath>{math`
          2Ax + B = \pm \sqrt{D} \\
          2Ax = -B \pm \sqrt{D} \\
          \boxed{x = \frac{-B \pm \sqrt{D}}{2A}}
        `}</BlockMath>
        <QED />
      </ProblemSolution>
      <ProblemNote>
        Overall, Sridhara's method is simpler and faster than the classic one. The downside is that you must remember
        the "trick" of multiplying by <M>4A</M> as the first step, while the classic approach is more intuitive.
      </ProblemNote>
    </Problem>

    <Problem
      title="Biquadratic roots formula"
      level="medium"
      snippet={{
        seo: true,
        description: `
          A general formula that lets you quickly find all solutions of any biquadratic equation.
        `,
      }}
    >
      <ProblemDescription>
        <P>
          Derive the general root formula for a <Dep on={article.uniques.biquadratic}>biquadratic equation</Dep>:
        </P>
        <BlockMath>Ax^4 + Bx^2 + C = 0</BlockMath>
      </ProblemDescription>
      <ProblemHint>
        Split the <Dep on={article.uniques.formula}>quadratic formula</Dep> into two separate expressions.
      </ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`
          x_{1,2} = \pm \sqrt{\frac{-B + \sqrt{D}}{2A}} >>
          x_{3,4} = \pm \sqrt{\frac{-B - \sqrt{D}}{2A}}
        `}</BlockMath>
        <P>If a square root can't be taken (in real numbers), then the corresponding solution(s) don't exist.</P>
      </ProblemAnswer>
    </Problem>

    <Problem title="Substitution method" level="hard">
      <ProblemDescription>
        <P>
          Another way to derive the quadratic formula is to make a clever change of variables so that you get the
          simplest incomplete quadratic equation of the form <M>u^2 = s</M>, which is solved instantly. Use this
          substitution:
        </P>
        <BlockMath>{math`x = u - \frac{B}{2A}`}</BlockMath>
        <P>Carry out the substitution and finish the derivation of the quadratic formula.</P>
      </ProblemDescription>
      <ProblemSolution>
        <P>Write the quadratic equation in general form:</P>
        <BlockMath>Ax^2 + Bx + C = 0</BlockMath>
        <P>Apply the substitution, expand the parentheses, and combine like terms:</P>
        <BlockMath>{math`
          A\left(u - \frac{B}{2A}\right)^2 + B\left(u - \frac{B}{2A}\right) + C = 0 \\
          A\left(u^2 - 2u \cdot \frac{B}{2A} + \frac{B^2}{4A^2}\right) + Bu - \frac{B^2}{2A} + C = 0 \\
          Au^2 - \cancel{Bu} + \frac{B^2}{4A} + \cancel{Bu} - \frac{B^2}{2A} + C = 0 \\
          Au^2 + \frac{B^2}{4A} - \frac{B^2}{2A} + C = 0 \\
          Au^2 + C - \frac{B^2}{4A} = 0
        `}</BlockMath>
        <P>
          As you can see, the linear term in <M>u</M> cancels out. That was the whole point of the substitution. Now we
          only have <M>u</M> squared and a bunch of coefficients. Isolate <M>u^2</M>:
        </P>
        <BlockMath>{math`
          Au^2 = \frac{B^2}{4A} - C \\
          u^2 = \frac{B^2 - 4AC}{4A^2} \\
          u^2 = \frac{D}{4A^2}
        `}</BlockMath>
        <P>Take the square root of both sides:</P>
        <BlockMath>{math`
          u = \pm \frac{\sqrt{D}}{2A}
        `}</BlockMath>
        <P>
          Express <M>u</M> from our substitution:
        </P>
        <BlockMath>{math`
          x = u - \frac{B}{2A} \implies u = x + \frac{B}{2A}
        `}</BlockMath>
        <P>
          Substitute back and return to <M>x</M>:
        </P>
        <BlockMath>{math`
          x + \frac{B}{2A} = \pm \frac{\sqrt{D}}{2A} \\
          x = -\frac{B}{2A} \pm \frac{\sqrt{D}}{2A} \\
          \boxed{x = \frac{-B \pm \sqrt{D}}{2A}}
        `}</BlockMath>
        <QED />
      </ProblemSolution>
      <ProblemNote>
        <P>
          Out of the three derivations we've seen (classic, <Ref to={uniques.sridharasMethod}>Sridhara's</Ref>, and this
          substitution), this one is the most artificial and non-intuitive. But it clearly shows that you can pick a
          clever substitution so that, during transformations, the linear terms cancel each other out.
        </P>
        <P>
          This is neither rare nor unique. All kinds of clever substitutions are used all the time in math, especially
          in higher math. Get used to it 😉
        </P>
        <P>By the way, almost the same substitution is used to solve cubic equations:</P>
        <BlockMath>{math`x = u - \frac{B}{3A}`}</BlockMath>
        <P>It lets you get rid of the squared term, just like for quadratics we got rid of the linear term.</P>
      </ProblemNote>
    </Problem>

    <Problems title="Sneaky discriminant" level="hard" pretty>
      <P>Solve the equation:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 - (\sqrt{2} + 1)x + \sqrt{2} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, 'sqrt(2)']} />
        <ProblemHint>To avoid ugly root expressions, complete the square inside the discriminant.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 1 >> x_2 = \sqrt{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 1 >> B = -(\sqrt{2} + 1) >> C = \sqrt{2}`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (-(\sqrt{2} + 1))^2 - 4 \cdot 1 \cdot \sqrt{2} = \\
            = (\sqrt{2} + 1)^2 - 4\sqrt{2} = \\
            = 2 + 2\sqrt{2} + 1 - 4\sqrt{2} = \\
            = 3 - 2\sqrt{2}
          `}</BlockMath>
          <P>
            At first glance, it looks like we can't take a "nice" square root of the discriminant. But we can rewrite it
            to complete the square:
          </P>
          <BlockMath>{math`
            D = 3 - 2\sqrt{2} = \\
            = (\sqrt{2})^2 - 2 \cdot \sqrt{2} \cdot 1 + (1)^2 = \\
            = (1 - \sqrt{2})^2
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-(\sqrt{2} + 1)) \pm \sqrt{(\sqrt{2} - 1)^2}}{2} = \frac{\sqrt{2} + 1 \pm (1 - \sqrt{2})}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{\sqrt{2} + 1 + 1 - \sqrt{2}}{2} \\
            x_1 = \frac{2}{2} \\
            \boxed{x_1 = 1}
            >>
            x_2 = \frac{\sqrt{2} + 1 - 1 + \sqrt{2}}{2} \\
            x_2 = \frac{2\sqrt{2}}{2} \\
            \boxed{x_2 = \sqrt{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2  + (\sqrt{3} - 2)x - 2\sqrt{3} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[2, '-sqrt(3)']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 2 >> x_2 = -\sqrt{3}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 1 >> B = (\sqrt{3} - 2) >> C = -2\sqrt{3}`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (\sqrt{3} - 2)^2 - 4 \cdot 1 \cdot (-2\sqrt{3}) = \\
            = 3 - 4\sqrt{3} + 4 + 8\sqrt{3} = \\
            = 7 + 4\sqrt{3}
          `}</BlockMath>
          <P>Complete the square in the discriminant:</P>
          <BlockMath>{math`
            D = 7 + 4\sqrt{3} = \\
            = (2)^2 + 2 \cdot 2 \cdot \sqrt{3} + (\sqrt{3})^2 = \\
            = (2 + \sqrt{3})^2
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(\sqrt{3} - 2) \pm (2 + \sqrt{3})}{2} = \frac{-\sqrt{3} + 2 \pm (2 + \sqrt{3})}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-\sqrt{3} + 2 + 2 + \sqrt{3}}{2} \\
            x_1 = \frac{4}{2} \\
            \boxed{x_1 = 2}
            >>
            x_2 = \frac{-\sqrt{3} + 2 - 2 - \sqrt{3}}{2} \\
            x_2 = \frac{-2\sqrt{3}}{2} \\
            \boxed{x_2 = -\sqrt{3}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + (\sqrt{2} + \sqrt{6})x + 2\sqrt{3} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['-sqrt(6)', '-sqrt(2)']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -\sqrt{6} >> x_2 = -\sqrt{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 1 >> B = (\sqrt{2} + \sqrt{6}) >> C = 2\sqrt{3}`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (\sqrt{2} + \sqrt{6})^2 - 4 \cdot 1 \cdot 2\sqrt{3} = \\
            = (\sqrt{2})^2 + 2 \cdot \sqrt{2} \cdot \underbrace{\sqrt{2}\sqrt{3}}_{\small\sqrt{6}} + (\sqrt{2}\sqrt{3})^2 - 8\sqrt{3} = \\
            = (\sqrt{2})^2 + 4\sqrt{3} - 8\sqrt{3} + (\sqrt{2}\sqrt{3})^2 = \\
            = (\sqrt{2})^2 - 4\sqrt{3} + (\sqrt{2}\sqrt{3})^2 = \\
            = (\sqrt{2})^2 - 2 \cdot \sqrt{2} \cdot \sqrt{2}\sqrt{3} + (\sqrt{2}\sqrt{3})^2 = \\
            = (\sqrt{2} - \sqrt{6})^2
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(\sqrt{2} + \sqrt{6}) \pm (\sqrt{2} - \sqrt{6})}{2} = \frac{-\sqrt{2} - \sqrt{6} \pm (\sqrt{2} - \sqrt{6})}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-\sqrt{2} - \sqrt{6} + \sqrt{2} - \sqrt{6}}{2} \\
            x_1 = \frac{-2\sqrt{6}}{2} \\
            \boxed{x_1 = -\sqrt{6}}
            >>
            x_2 = \frac{-\sqrt{2} - \sqrt{6} - \sqrt{2} + \sqrt{6}}{2} \\
            x_2 = \frac{-2\sqrt{2}}{2} \\
            \boxed{x_2 = -\sqrt{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + (\sqrt{5} - \sqrt{15})x - 5\sqrt{3} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['sqrt(15)', '-sqrt(5)']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = \sqrt{15} >> x_2 = -\sqrt{5}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`A = 1 >> B = (\sqrt{5} - \sqrt{15}) >> C = -5\sqrt{3}`}</BlockMath>
          <P>Compute the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (\sqrt{5} - \sqrt{15})^2 - 4 \cdot 1 \cdot (-5\sqrt{3}) = \\
            = (\sqrt{5})^2 - 2 \cdot \sqrt{5} \cdot \underbrace{\sqrt{5}\sqrt{3}}_{\small\sqrt{15}} + (\sqrt{5}\sqrt{3})^2 + 20\sqrt{3} = \\
            = (\sqrt{5})^2 - 10 \sqrt{3} + (\sqrt{5}\sqrt{3})^2 + 20\sqrt{3} = \\
            = (\sqrt{5})^2 + 10 \sqrt{3} + (\sqrt{5}\sqrt{3})^2 = \\
            = (\sqrt{5})^2 + 2 \cdot \sqrt{5} \cdot \sqrt{5}\sqrt{3} + (\sqrt{5}\sqrt{3})^2 = \\
            = (\sqrt{5} + \sqrt{15})^2
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(\sqrt{5} - \sqrt{15}) \pm (\sqrt{5} + \sqrt{15})}{2} = \frac{-\sqrt{5} + \sqrt{15} \pm (\sqrt{5} + \sqrt{15})}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-\sqrt{5} + \sqrt{15} + \sqrt{5} + \sqrt{15}}{2} \\
            x_1 = \frac{2\sqrt{15}}{2} \\
            \boxed{x_1 = \sqrt{15}}
            >>
            x_2 = \frac{-\sqrt{5} + \sqrt{15} - \sqrt{5} - \sqrt{15}}{2} \\
            x_2 = \frac{-2\sqrt{5}}{2} \\
            \boxed{x_2 = -\sqrt{5}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems
      $={uniques.quadraticInF}
      title="Trinomial equations"
      level="hard"
      method
      snippet={{
        title: 'Trinomial equation',
        description: `
          A special kind of equation with three terms, where the same "unknown function" appears in different powers and the whole thing can be reduced to a quadratic.
        `,
        key: true,
        search: true,
        seo: {
          title: 'What is a trinomial equation?',
          description:
            'Definition of trinomial equations and worked examples of solving them by reducing to a quadratic equation.',
        },
      }}
    >
      <P>Solve the equation:</P>
      <SubProblem label="Example" standalone>
        <ProblemDescription>
          <P>
            A <B>trinomial equation</B> is any equation that can be reduced to the form:
          </P>
          <BlockMath>{math`Af^2(x) + Bf(x) + C = 0`}</BlockMath>
          <P>Figure out how to solve equations like this, and try it on:</P>
          <BlockMath>{math`2x^6 - 3x^3 + 1 = 0`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>You need to make a substitution.</ProblemHint>
        <ProblemAnswer>
          <P>
            Use the substitution <M>t = f(x)</M>, which reduces the equation to a quadratic. Solutions for this example:
          </P>
          <BlockMath>{math`x_1 = 1 >> x_2 = \frac{1}{\sqrt[3]{2}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Solution idea">
            <P>
              Notice that <M>f(x)</M> repeats twice. Introduce a new variable <M>t = f(x)</M>, then the equation
              becomes:
            </P>
            <BlockMath>{math`At^2 + Bt + C = 0`}</BlockMath>
            <P>This is a normal quadratic equation.</P>
          </ProblemSection>
          <ProblemSection title="Example solution">
            <P>
              Here <M>f(x) = x^3</M>:
            </P>
            <BlockMath>{math`2(x^3)^2 - 3(x^3) + 1 = 0`}</BlockMath>
            <P>
              Substitute <M>t = x^3</M>:
            </P>
            <BlockMath>{math`2t^2 - 3t + 1 = 0`}</BlockMath>
            <P>
              Compute the discriminant and find the roots for <M>t</M>:
            </P>
            <BlockMath>{math`
              D = (-3)^2 - 4 \cdot 2 \cdot 1 = 9 - 8 = 1
            `}</BlockMath>
            <BlockMath>{math`
              t_1 = \frac{3 + \sqrt{1}}{4} = 1 \\ t_1 = 1 >>
              t_2 = \frac{3 - \sqrt{1}}{4} = \frac{1}{2} \\ t_2 = \frac{1}{2}
            `}</BlockMath>
            <P>
              Now go back to the original variable <M>x</M>:
            </P>
            <BlockMath>{math`
              t_1 = x^3 = 1 \\ x_1 = \sqrt[3]{1} \\ \boxed{x_1 = 1} >>
              t_2 = x^3 = \frac{1}{2} \\ x_2 = \sqrt[3]{\frac{1}{2}} \\ \boxed{x_2 = \frac{1}{\sqrt[3]{2}}}
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
        <ProblemNote>
          <P>
            In some sources, trinomial equations are generalized even further to any equation with three terms, where
            the same function appears in different powers:
          </P>
          <BlockMath>Af^p(x) + Bf^q(x) + Cf^r(x) = 0</BlockMath>
          <P>In this broader meaning, of course, not all such equations can be solved by reducing to a quadratic.</P>
          <Hr />
          <P>
            By the way, a <Ref to={article.uniques.biquadratic}>biquadratic equation</Ref> is also a special case of a
            trinomial equation, because it can be written as:
          </P>
          <BlockMath>{math`A(x^2)^2 + B(x^2) + C = 0`}</BlockMath>
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^6 - 7x^3 - 8 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-1, 2]} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -1 >> x_2 = 2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Here <M>f(x) = x^3</M>:
          </P>
          <BlockMath>{math`(x^3)^2 - 7(x^3) - 8 = 0`}</BlockMath>
          <P>
            Substitute <M>t = x^3</M>:
          </P>
          <BlockMath>{math`t^2 - 7t - 8 = 0`}</BlockMath>
          <P>
            Solve the quadratic equation for <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 8 >> t_2 = -1
          `}</BlockMath>
          <P>
            Go back to the original variable <M>x</M>:
          </P>
          <BlockMath>{math`
            t_1 = x^3 = 8 \\ x_1 = \sqrt[3]{8} = 2 >> t_2 = x^3 = -1 \\ x_2 = \sqrt[3]{-1} = -1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^8 - 15x^4 - 16 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-2, 2]} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -2 >> x_2 = 2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In this equation, <M>f(x) = x^4</M>:
          </P>
          <BlockMath>{math`(x^4)^2 - 15(x^4) - 16 = 0`}</BlockMath>
          <P>
            Substitute <M>t = x^4</M>:
          </P>
          <BlockMath>{math`t^2 - 15t - 16 = 0`}</BlockMath>
          <P>
            Solve the quadratic equation for <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 16 >> t_2 = -1
          `}</BlockMath>
          <P>
            Go back to the original variable <M>x</M>:
          </P>
          <BlockMath>{math`
            t_1 = x^4 = 16 \\
            x = \sqrt[4]{16} \\
            x_{1,2} = \pm 2
            >>
            t_2 = x^4 = -1 \\
            \text{(no roots)}
          `}</BlockMath>
          <P>
            When you raise a number to the 4th power, you can't get a negative result, so there is no way to get{' '}
            <M>-1</M>. So <M>t_2</M> gives no roots for the original equation.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>36x^8 - 13x^4 + 1 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['-1/sqrt(2)', '1/sqrt(2)', '-1/sqrt(3)', '1/sqrt(3)']} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = -\frac{1}{\sqrt{2}} >>
            x_2 = \frac{1}{\sqrt{2}} >>
            x_3 = -\frac{1}{\sqrt{3}} >>
            x_4 = \frac{1}{\sqrt{3}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In this equation, <M>f(x) = x^4</M>:
          </P>
          <BlockMath>{math`(x^4)^2 - 15(x^4) - 16 = 0`}</BlockMath>
          <P>
            Substitute <M>t = x^4</M>:
          </P>
          <BlockMath>{math`36t^2 - 13t + 1 = 0`}</BlockMath>
          <P>
            Solve the quadratic equation for <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = \frac{1}{4} >>
            t_2 = \frac{1}{9}
          `}</BlockMath>
          <P>
            Go back to the original variable <M>x</M>:
          </P>
          <BlockMath>{math`
            t_1 = x^4 = \frac{1}{4} \\ x_{1,2} = \pm \frac{1}{\sqrt{2}} >>
            t_2 = x^4 = \frac{1}{9} \\ x_{3,4} = \pm \frac{1}{\sqrt{3}}
          `}</BlockMath>
          <P>That's four roots!</P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>(x^2 - 2x)^2 - 2(x^2 - 2x) - 3 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-1, 1, 3]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = -1 >> x_2 = 1 >> x_3 = 3
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Here <M>f(x) = x^2 - 2x</M>. Substitute <M>t = x^2 - 2x</M>:
          </P>
          <BlockMath>{math`
            t^2 - 2t - 3 = 0
          `}</BlockMath>
          <P>
            Solve the quadratic equation for <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = -1 >> t_2 = 3
          `}</BlockMath>
          <P>
            Go back to the original variable <M>x</M>:
          </P>
          <BlockMath>{math`
            \overbrace{x^2 - 2x}^{t_1} = -1 \\ x^2 - 2x + 1 \\ (x - 1)^2 = 0 \\ x_1 = 1 >>
            \overbrace{x^2 - 2x}^{t_2} = 3 \\ x^2 - 2x - 3 = 0 \\ x_2 = -1, \quad x_3 = 3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            x^8 - 3x^6 + 2x^2 = 0
          `}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[0, 1, 2]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 0 >> x_2 = 1 >> x_3 = 2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In its original form, this equation doesn't look like a trinomial. But it becomes one if we factor out{' '}
            <M>x^2</M>:
          </P>
          <BlockMath>{math`
            x^2(x^6 - 3x^4 + 2) = 0
          `}</BlockMath>
          <P>
            This is the standard case for the <Dep on={zeroProductProperty}>Zero product property</Dep>. The equation
            splits into two sub-equations:
          </P>
          <BlockMath>{math`
            x^2 = 0 >> x^6 - 3x^4 + 2 = 0
          `}</BlockMath>
          <P>The first sub-equation has a single solution:</P>
          <BlockMath>{math`\boxed{x_1 = 0}`}</BlockMath>
          <P>But the second sub-equation is trinomial:</P>
          <BlockMath>{math`
            (x^3)^2 - 3(x^3) + 2 = 0
          `}</BlockMath>
          <P>
            Substitute <M>t = x^3</M>:
          </P>
          <BlockMath>{math`
            t^2 - 3t + 2 = 0
          `}</BlockMath>
          <P>
            Solve the quadratic equation for <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 1 >> t_2 = 2
          `}</BlockMath>
          <P>
            Go back to the original variable <M>x</M>:
          </P>
          <BlockMath>{math`
            t_1 = x^3 = 1 \\ x_2 = \sqrt[3]{1} \\ \boxed{x_2 = 1} >>
            t_2 = x^3 = 2 \\ x_3 = \sqrt[3]{2} \\ \boxed{x_3 = 2}
          `}</BlockMath>
          <P>
            So the original equation has three roots: <M>x_1 = 0</M>, <M>x_2 = 1</M>, and <M>x_3 = 2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            \frac{x}{1-x} - \frac{3}{2}\sqrt{\frac{x}{1-x}} = 1
          `}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['4/5', 0.8]} />
        <ProblemAnswer>
          <BlockMath>{math`x = \frac{4}{5}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>At first glance, this might not look like a trinomial at all. But we can rewrite it more clearly:</P>
          <BlockMath>{math`
            \left(\sqrt{\frac{x}{1-x}}\right)^2 - \frac{3}{2}\left(\sqrt{\frac{x}{1-x}}\right) - 1 = 0
          `}</BlockMath>
          <P>
            Now it's obvious. Replace the ugly expression with <M>t</M>:
          </P>
          <BlockMath>{math`
            t^2 - \frac{3}{2}t - 1 = 0
          `}</BlockMath>
          <P>
            Multiply both sides by <M>2</M> to get rid of the fraction:
          </P>
          <BlockMath>{math`
            2t^2 - 3t - 2 = 0
          `}</BlockMath>
          <P>
            Solve the quadratic equation for <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 2 >> t_2 = -\frac{1}{2}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_1</M>. We will have to square both sides:
          </P>
          <BlockMath>{math`
            t_1 = \sqrt{\frac{x}{1-x}} = 2 \\
            \sqrt{\frac{x}{1-x}} = 2 \\
            \frac{x}{1-x} = 4 \\
            x = 4 - 4x \\
            5x = 4 \\
            \boxed{x = \frac{4}{5}}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = \sqrt{\frac{x}{1-x}} = -\frac{1}{2}
          `}</BlockMath>
          <P>
            A square root can't be negative, so root <M>t_2</M> gives no additional solutions to the original equation.
          </P>
          <P>
            So the original equation has a single solution <M>{math`\dfrac{4}{5}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            3\sqrt{\frac{x-1}{2x+1}} - \sqrt{\frac{2x+1}{x-1}} = 2
          `}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-2]} />
        <ProblemHint>
          <P>Use this identity:</P>
          <BlockMath>{math`\frac{a}{b} = \frac{1}{\dfrac{b}{a}}`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x = -2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that inside the second root we have the reciprocal of the fraction in the first root. Fractions can
            be conveniently "flipped" using the identity:
          </P>
          <BlockMath>{math`\frac{a}{b} = \frac{1}{\dfrac{b}{a}}`}</BlockMath>
          <P>Rewrite the equation in a more convenient form:</P>
          <BlockMath>{math`
            3\sqrt{\frac{x-1}{2x+1}} - \sqrt{\frac{1}{\dfrac{x-1}{2x+1}}} = 2 \\
            3\sqrt{\frac{x-1}{2x+1}} - \frac{1}{\sqrt{\dfrac{x-1}{2x+1}}} - 2 = 0
          `}</BlockMath>
          <P>
            Let the whole ugly root be <M>t</M>:
          </P>
          <BlockMath>{math`
            t = \sqrt{\frac{x-1}{2x+1}} \implies 3t - \frac{1}{t} - 2 = 0
          `}</BlockMath>
          <P>
            Multiply both sides by <M>t</M> to get rid of the fraction:
          </P>
          <BlockMath>{math`
            3t^2 - 1 - 2t = 0 \\
            3t^2 - 2t - 1 = 0
          `}</BlockMath>
          <P>Now we have a quadratic equation. Solve it:</P>
          <BlockMath>{math`
            t_1 = 1 >> t_2 = -\frac{1}{3}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = \sqrt{\frac{x-1}{2x+1}} = 1 \\
            \sqrt{\frac{x-1}{2x+1}} = 1 \\
            \frac{x-1}{2x+1} = 1 \\
            x - 1 = 2x + 1 \\
            \boxed{-2 = x}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = \sqrt{\frac{x-1}{2x+1}} = -\frac{1}{3}
          `}</BlockMath>
          <P>
            A square root can't be negative, so root <M>t_2</M> gives no additional solutions.
          </P>
          <P>
            So the original equation has a single solution <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems
      $={uniques.palindromials}
      title="Reciprocal equations"
      level="hard"
      method
      snippet={{
        title: 'Reciprocal equation',
        description: `
          A special kind of equation where coefficients mirror each other around the equation's "center".
        `,
        key: true,
        search: ['reciprocal equation', 'palindromic equation', 'symmetric equation'],
        seo: {
          title: 'What is a reciprocal (palindromic) equation?',
          description:
            'Definition of reciprocal (palindromic) equations and worked examples solved by reducing them to quadratic equations.',
        },
      }}
      pretty
    >
      <P>Solve the equation:</P>
      <SubProblem label="Example" standalone>
        <ProblemDescription>
          <P>
            <B>Reciprocal</B> equations, also called <B>palindromic</B> or <B>symmetric</B> equations, are equations
            where the coefficients mirror each other around the equation's "center":
          </P>
          <Image src={palindromial} width="500px" invert="dark" />
          <P>Figure out how to solve such equations and try it on the one above.</P>
        </ProblemDescription>
        <RootsCheck has roots={[2, ['1/2', 0.5]]} />
        <ProblemHint>
          Factor out <M>x^2</M> from the whole left side. Then group terms by the power of <M>x</M>. Think about what
          substitution to use.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 2 >> x_2 = \frac{1}{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemHint>
          <P>Think about how to do this transformation:</P>
          <BlockMath>{math`
            x^2 + \frac{1}{x^2} \implies \left(x + \frac{1}{x}\right)^2
          `}</BlockMath>
        </ProblemHint>
        <ProblemSolution>
          <P>
            First, note that <M>0</M> is definitely not a root of this equation: plugging it in gives the false
            statement <M>2 = 0</M>. So we can safely factor out <M>x^2</M> from the whole left side without worrying
            about division by zero:
          </P>
          <BlockMath>{math`
            x^2\left[ 2x^2 - 3x - 1 - \frac{3}{x} + \frac{2}{x^2} \right] = 0
          `}</BlockMath>
          <P>
            This is the standard case for the <Dep on={zeroProductProperty}>Zero product property</Dep>. As we've
            already checked, the root <M>x = 0</M> coming from <M>x^2</M> is not a solution, so we can ignore it and set
            the bracketed part to zero:
          </P>
          <BlockMath>{math`
            2x^2 - 3x - 1 - \frac{3}{x} + \frac{2}{x^2} = 0
          `}</BlockMath>
          <P>
            Group terms with the same powers of <M>x</M> and factor out what repeats:
          </P>
          <BlockMath>{math`
            2x^2 + \frac{2}{x^2} - 3x - \frac{3}{x} - 1 = 0 \\
            2\left(x^2 + \frac{1}{x^2}\right) - 3\left(x + \frac{1}{x}\right) - 1 = 0
          `}</BlockMath>
          <P>
            Notice how similar the expressions in parentheses are. The only problem is the squares of <M>x</M> in the
            left parentheses. How do we turn multiple squares into one? By completing the square.
          </P>
          <BlockMath>{math`
            x^2 + \frac{1}{x^2} = \underbrace{x^2 + \overbrace{2 \cdot \cancel{x} \cdot \frac{1}{\cancel{x}}}^{\small\yellow{2}} + \left(\frac{1}{x}\right)^2}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{2} = \left(x + \frac{1}{x}\right)^2 - 2
          `}</BlockMath>
          <P>
            Pretty slick, right? Since the original terms are reciprocals, they cancel in the middle term when we
            complete the square. And we're left with just the number 2, with no variables.
          </P>
          <P>Replace the old expression with multiple squares by a single square:</P>
          <BlockMath>{math`
            2\left(x + \frac{1}{x}\right)^2 - 4 - 3\left(x + \frac{1}{x}\right) - 1 = 0 \\
            2\left(x + \frac{1}{x}\right)^2 - 3\left(x + \frac{1}{x}\right) - 5 = 0
          `}</BlockMath>
          <P>
            Now we can make the substitution <M>{math`t = x + \dfrac{1}{x}`}</M>:
          </P>
          <BlockMath>{math`
            2t^2 - 3t - 5 = 0
          `}</BlockMath>
          <P>
            Solve the quadratic equation for <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = \frac{5}{2} >> t_2 = -1
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = x + \frac{1}{x} = \frac{5}{2} \\
            x + \frac{1}{x} = \frac{5}{2} \\
            2x + \frac{2}{x} = 5 \\
            2x^2 - 5x + 2 = 0 \\
            x_1 = 2, \qquad x_2 = \frac{1}{2}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = x + \frac{1}{x} = -1 \\
            x + \frac{1}{x} = -1 \\
            x^2 + 1 = -x \\
            x^2 + x + 1 = 0 \\
            D = 1 - 4 = -3 < 0 \\
            \text{(no roots)}
          `}</BlockMath>
          <P>
            So the original equation has two roots: <M>x_1 = 2</M> and <M>{math`x_2 = \dfrac{1}{2}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>6x^4 - 25x^3 + 12x^2 + 25x + 6 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[2, 3, [-0.5, '-1/2'], '-1/3']} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 2 >> x_2 = -\frac{1}{2} >> x_3 = 3 >> x_4 = -\frac{1}{3}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Since <M>0</M> is not a root, we can factor out <M>x^2</M> from the whole left side:
          </P>
          <BlockMath>{math`
            x^2\left[ 6x^2 - 25x + 12 + \frac{25}{x} + \frac{6}{x^2} \right] = 0
          `}</BlockMath>
          <P>Now look only at the part inside the square brackets:</P>
          <BlockMath>{math`
            6x^2 - 25x + 12 + \frac{25}{x} + \frac{6}{x^2} = 0 \\
            6x^2 + \frac{6}{x^2} - 25x + \frac{25}{x} + 12 = 0 \\
            6\left(x^2 + \frac{1}{x^2}\right) - 25\left(x - \frac{1}{x}\right) + 12 = 0
          `}</BlockMath>
          <P>
            This time, in the left parentheses we need to complete the square as a square of a difference, not a square
            of a sum:
          </P>
          <BlockMath>{math`
            x^2 + \frac{1}{x^2} = \underbrace{x^2 - \overbrace{2 \cdot \cancel{x} \cdot \frac{1}{\cancel{x}}}^{\small\yellow{2}} + \left(\frac{1}{x}\right)^2}_{\small a^2 - 2ab + b^2 = (a-b)^2} + \yellow{2} = \left(x - \frac{1}{x}\right)^2 + 2
          `}</BlockMath>
          <P>Replace the old expression with multiple squares by a single square:</P>
          <BlockMath>{math`
            6\left(x - \frac{1}{x}\right)^2 + 12 - 25\left(x - \frac{1}{x}\right) + 12 = 0 \\
            6\left(x - \frac{1}{x}\right)^2 - 25\left(x - \frac{1}{x}\right) + 24 = 0
          `}</BlockMath>
          <P>
            Make the substitution <M>{math`t = x - \dfrac{1}{x}`}</M>:
          </P>
          <BlockMath>{math`
            6t^2 - 25t + 24 = 0
          `}</BlockMath>
          <P>
            Solve the quadratic equation for <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = \frac{3}{2} >> t_2 = \frac{8}{3}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = x - \frac{1}{x} = \frac{3}{2} \\
            x - \frac{1}{x} = \frac{3}{2} \\
            2x - \frac{2}{x} = 3 \\
            2x^2 - 3x - 2 = 0 \\
            x_1 = 2, \qquad x_2 = -\frac{1}{2}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = x - \frac{1}{x} = \frac{8}{3} \\
            x - \frac{1}{x} = \frac{8}{3} \\
            3x - \frac{3}{x} = 8 \\
            3x^2 - 8x - 3 = 0 \\
            x_3 = 3, \qquad x_4 = -\frac{1}{3}
          `}</BlockMath>
          <P>So the original equation has four roots:</P>
          <BlockMath>{math`
            x_1 = 2 >> x_2 = -\frac{1}{2} >> x_3 = 3 >> x_4 = -\frac{1}{3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^4 - 15x^3 + 35x^2 - 30x + 8 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, 2, 4, ['1/2', 0.5]]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 1 >> x_2 = 2 >> x_3 = 4 >> x_4 = \frac{1}{2}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemHint>This isn't perfectly "mirrored", but it's solved by the exact same algorithm.</ProblemHint>
        <ProblemSolution>
          <P>
            Since <M>0</M> is not a root, we can factor out <M>x^2</M> from the whole left side:
          </P>
          <BlockMath>{math`
            x^2\left[ 2x^2 - 15x + 35 - \frac{30}{x} + \frac{8}{x^2} \right] = 0
          `}</BlockMath>
          <P>Now look only at the part inside the square brackets:</P>
          <BlockMath>{math`
            2x^2 - 15x + 35 - \frac{30}{x} + \frac{8}{x^2} \\
            2x^2 + \frac{8}{x^2} - 15x - \frac{30}{x} + 35 = 0 \\
            2\left(x^2 + \frac{4}{x^2}\right) - 15\left(x + \frac{2}{x}\right) + 35 = 0
          `}</BlockMath>
          <P>Complete the square for the left parentheses:</P>
          <BlockMath>{math`
            x^2 + \frac{4}{x^2} = \underbrace{x^2 + \overbrace{2 \cdot \cancel{x} \cdot \frac{2}{\cancel{x}}}^{\small\yellow{4}} + \left(\frac{2}{x}\right)^2}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{4} = \left(x + \frac{2}{x}\right)^2 - 4
          `}</BlockMath>
          <P>Replace the old expression with multiple squares by a single square:</P>
          <BlockMath>{math`
            2\left(x + \frac{2}{x}\right)^2 - 8 - 15\left(x + \frac{2}{x}\right) + 35 = 0 \\
            2\left(x + \frac{2}{x}\right)^2 - 15\left(x + \frac{2}{x}\right) + 27 = 0
          `}</BlockMath>
          <P>
            Make the substitution <M>{math`t = x + \dfrac{2}{x}`}</M>:
          </P>
          <BlockMath>{math`
            2t^2 - 15t + 27 = 0
          `}</BlockMath>
          <P>
            Solve the quadratic equation for <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 3 >> t_2 = \frac{9}{2}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = x + \frac{2}{x} = 3 \\
            x + \frac{2}{x} = 3 \\
            x^2 + 2 = 3x \\
            x^2 - 3x + 2 = 0 \\
            x_1 = 1, \qquad x_2 = 2
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = x + \frac{2}{x} = \frac{9}{2} \\
            2x + \frac{4}{x} = 9 \\
            2x^2 - 9x + 4 = 0 \\
            x_3 = 4, \qquad x_4 = \frac{1}{2}
          `}</BlockMath>
          <P>So the original equation has four roots:</P>
          <BlockMath>{math`
            x_1 = 1 >> x_2 = 2 >> x_3 = 4 >> x_4 = \frac{1}{2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^6 + x^5 - 6x^4 - 7x^3 - 6x^2 + x + 1 = 0`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          <P>Use the algebra identity "cube of a sum":</P>
          <BlockMath>{math`
            (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
          `}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = \frac{3 + \sqrt{5}}{2} >> x_2 = \frac{3 - \sqrt{5}}{2} >> x_3 = \frac{-3 + \sqrt{5}}{2} >> x_4 = \frac{-3 - \sqrt{5}}{2}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Since <M>0</M> is not a root, we can factor out <M>x^3</M> from the whole left side:
          </P>
          <BlockMath>{math`
            x^3\left[ x^3 + x^2 - 6x - 7 - \frac{6}{x} + \frac{1}{x^2} + \frac{1}{x^3} \right] = 0
          `}</BlockMath>
          <P>Now look only at the part inside the square brackets:</P>
          <BlockMath>{math`
            x^3 + x^2 - 6x - 7 - \frac{6}{x} + \frac{1}{x^2} + \frac{1}{x^3} = 0 \\
            x^3 + \frac{1}{x^3} + x^2 + \frac{1}{x^2} - 6\left(x + \frac{1}{x}\right) - 7 = 0
          `}</BlockMath>
          <P>Now build a "complete cube" on the left using the sum-of-cubes pattern:</P>
          <BlockMath>{math`
            x^3 + \frac{1}{x^3} = \\
            = \underbrace{x^3 + \overbrace{3 \cdot x^{\cancel{2}} \cdot \frac{1}{\cancel{x}}}^{\small\yellow{3x}} + \overbrace{3 \cdot \cancel{x} \cdot \frac{1}{x^{\cancel{2}}}}^{\small\yellow{\frac{3}{x}}} + \left(\frac{1}{x}\right)^3}_{\small a^3 + 3a^2b + 3ab^2 + b^3 = (a+b)^3} - 3x - \frac{3}{x} = \\
            = \left(x + \frac{1}{x}\right)^3 - 3\left(x + \frac{1}{x}\right)
          `}</BlockMath>
          <P>Complete the square in the middle:</P>
          <BlockMath>{math`
            x^2 + \frac{1}{x^2} = \underbrace{x^2 + \overbrace{2 \cdot \cancel{x} \cdot \frac{1}{\cancel{x}}}^{\small\yellow{2}} + \left(\frac{1}{x}\right)^2}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{2} = \left(x + \frac{1}{x}\right)^2 - 2
          `}</BlockMath>
          <P>Replace the old expressions with the new ones:</P>
          <BlockMath>{math`
            \left(x + \frac{1}{x}\right)^3 - 3\left(x + \frac{1}{x}\right) + \left(x + \frac{1}{x}\right)^2 - 2 - 6\left(x + \frac{1}{x}\right) - 7 = 0 \\
            \left(x + \frac{1}{x}\right)^3 + \left(x + \frac{1}{x}\right)^2 - 9\left(x + \frac{1}{x}\right) - 9 = 0
          `}</BlockMath>
          <P>
            Introduce a new variable <M>{math`t = x + \dfrac{1}{x}`}</M>:
          </P>
          <BlockMath>{math`
            t^3 + t^2 - 9t - 9 = 0
          `}</BlockMath>
          <P>
            Factor out <M>t</M> from the first and third terms:
          </P>
          <BlockMath>{math`
            t(t^2 - 9) + (t^2 - 9) = 0 \\
            (t + 1)(t^2 - 9) = 0
          `}</BlockMath>
          <P>
            From the left parentheses we get <M>t_1 = -1</M>, and from the right we get <M>t_2 = 3</M> and{' '}
            <M>t_3 = -3</M>.
          </P>
          <P>
            Go back to <M>x</M> for root <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = x + \frac{1}{x} = -1 \\
            x^2 + 1 = -x \\
            x^2 + x + 1 = 0 \\
            D = 1 - 4 = -3 < 0 \\
            \text{(no roots)}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = x + \frac{1}{x} = 3 \\
            x^2 + 1 = 3x \\
            x^2 - 3x + 1 = 0 \\
            D = 9 - 4 = 5 \\
            x_1 = \frac{3 + \sqrt{5}}{2}, \qquad x_2 = \frac{3 - \sqrt{5}}{2}
          `}</BlockMath>
          <P>
            Go back to <M>x</M> for root <M>t_3</M>:
          </P>
          <BlockMath>{math`
            t_3 = x + \frac{1}{x} = -3 \\
            x^2 + 1 = -3x \\
            x^2 + 3x + 1 = 0 \\
            D = 9 - 4 = 5 \\
            x_3 = \frac{-3 + \sqrt{5}}{2}, \qquad x_4 = \frac{-3 - \sqrt{5}}{2}
          `}</BlockMath>
          <P>So the original equation has four roots:</P>
          <BlockMath>{math`
            x_1 = \frac{3 + \sqrt{5}}{2} >> x_2 = \frac{3 - \sqrt{5}}{2} >> x_3 = \frac{-3 + \sqrt{5}}{2} >> x_4 = \frac{-3 - \sqrt{5}}{2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>
  </>
));
