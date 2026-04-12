// #region Assets
//
//

import formulasDerivation from './assets/formulas-derivation.svg';
import vietaNormal from './assets/vieta-normal.webp';
import vieteRemember from './assets/vieta-remember.svg';

//
//
// #endregion

// #region Links
//
//

const equationSolution = $CONTENT.foundations.equations.elementary.article.$equationSolution;
const quadraticTrinomial = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticTrinomial;
const generalFactoring = $CONTENT.foundations.equations.quadratic.factoring.article.$generalFactoring;
const manualFactoring = $CONTENT.foundations.equations.quadratic.factoring.article.$manualFactoring;

//
//
// #endregion

export default defineProse({
  uniques: {
    rootCoeffConnection: Important,
    onlyRoots: Important,
    vietasFormulas: Statement,
    formulasFaq: List,
    usageFastCheck: Problems,
    usageConstructing: Problem,
    usageCoefficients: Problem,
  },
})(({ uniques }) => (
  <>
    <H1>From roots to coefficients</H1>

    <P>
      We already carried out <Dep on={generalFactoring}>factoring</Dep> of a{' '}
      <Dep on={quadraticTrinomial}>quadratic trinomial</Dep> in standard form. In the end we arrived at this beautiful
      equality:
    </P>

    <BlockMath>Ax^2 + Bx + C = A(x - x_1)(x - x_2)</BlockMath>

    <P>Let's expand the brackets on the right-hand side:</P>

    <BlockMath>{math`
      Ax^2 + Bx + C = A(x^2 - xx_1 - xx_2 + x_1x_2) \\
      Ax^2 + Bx + C = A(x^2 - (x_1 + x_2)x + x_1x_2) \\
      Ax^2 + Bx + C = Ax^2 - A(x_1 + x_2)x + Ax_1x_2
    `}</BlockMath>

    <P>
      Since these expressions are equal, the coefficients of the same powers of the variable <M>x</M> must also be
      equal. Let's mark them with colors so it is easier to see:
    </P>

    <Image src={formulasDerivation} invert="dark" width="400px" />

    <BlockMath>{math`
      \blue{A} = \blue{A} \\
      \yellow{B} = \yellow{-A(x_1 + x_2)} \\
      \green{C} = \green{Ax_1x_2}
    `}</BlockMath>

    <P>
      The equality <M>A = A</M> is obvious so we skip it. But the other two equalities are very interesting. Let's
      rewrite them so that one side has only roots and the other side has only coefficients:
    </P>

    <BlockMath>{math`
      -A(x_1 + x_2) = B \\
      \boxed{x_1 + x_2 = -\frac{B}{A}}
      >>{big}
      Ax_1x_2 = C \\
      \boxed{x_1x_2 = \frac{C}{A}}
    `}</BlockMath>

    <Important $={uniques.rootCoeffConnection} title="The connection between roots and coefficients">
      <P>
        If a quadratic equation has roots <M>x_1</M> and <M>x_2</M>, then those roots are tied to the coefficients of
        the quadratic trinomial <M>A, B</M>, and <M>C</M> by two simple formulas:
      </P>
      <BlockMath>{math`
        x_1 + x_2 = -\frac{B}{A} >>{big}
        x_1x_2 = \frac{C}{A}
      `}</BlockMath>
    </Important>

    <H1>Maybe not only the roots?</H1>

    <P>
      We found a nice simple connection between the roots and the coefficients of a quadratic trinomial. But do only the
      roots satisfy these formulas? What if there is some other pair of numbers, say <M>n</M> and <M>m</M>, which{' '}
      <B>are not roots</B>, but whose sum and product give the exact same results?
    </P>

    <BlockMath>{math`
      n + m = \blue{-\frac{B}{A}} >>{big}
      nm = \green{\frac{C}{A}}
    `}</BlockMath>

    <P>The quadratic trinomial looks like this:</P>

    <BlockMath>Ax^2 + Bx + C</BlockMath>

    <P>Let's rewrite it so we can substitute our sum and product into it:</P>

    <BlockMath>{math`
      Ax^2 + Bx + C = \\
      A\left(x^2 + \frac{B}{A}x + \frac{C}{A}\right) = \\
      A\left(x^2 - \underbrace{\left[\blue{-\frac{B}{A}}\right]}_{\small n+m}x + \underbrace{\green{\frac{C}{A}}}_{\small nm}\right)
    `}</BlockMath>

    <P>
      Substitute the coefficient expressions with the expressions involving the numbers <M>n</M> and <M>m</M>, then
      factor it <Dep on={manualFactoring}>by hand</Dep>:
    </P>

    <BlockMath>{math`
      A\left(x^2 - (n+m)x + nm\right) = \\
      = A\left(x^2 - nx - mx + nm\right) = \\
      = A\left(x(x-n) - m(x-n)\right) = \\
      = A(x-n)(x-m)
    `}</BlockMath>

    <P>
      Notice that the expression we got matches the <Dep on={generalFactoring}>general factoring</Dep> form exactly.
      That means our "maybe not roots?" numbers <M>n</M> and <M>m</M> <B accent>are roots after all</B>:
    </P>

    <BlockMath>{math`
      A(x-\blue{n})(x-\green{m}) = A(x-\blue{x_1})(x-\green{x_2}) \\
      \boxed{n = x_1} \qquad \boxed{m = x_2}
    `}</BlockMath>

    <Important $={uniques.onlyRoots} title="These can only be the roots!">
      <B accent>There is no</B> other pair of numbers, besides the actual pair of roots itself, that satisfies the{' '}
      <Dep on={uniques.rootCoeffConnection}>connection formulas</Dep> between the roots and the coefficients of a
      quadratic trinomial.
    </Important>

    <P>In other study materials you might see a different wording, but it means the same thing:</P>

    <Important title="You can guess the roots">
      If you somehow (for example, by guessing) found two numbers that satisfy the{' '}
      <Dep on={uniques.rootCoeffConnection}>connection formulas</Dep> between roots and coefficients, then those two
      numbers <B accent>must be the roots</B> of the corresponding quadratic equation.
    </Important>

    <P>
      Why do we even need this statement? It may look obvious but it is not. Without this statement we have no guarantee
      that numbers which fit the coefficient formulas are actually roots of the equation. For example, you might guess
      the numbers <M>2</M> and <M>3</M>, they fit the formulas, but are not roots of the equation! That is why we proved
      separately that if numbers fit the formulas, then they are definitely roots too!
    </P>

    <H1>Vieta's formulas</H1>

    <P>
      We proved two pretty curious statements: that the coefficients and roots of any quadratic trinomial are{' '}
      <Dep on={uniques.rootCoeffConnection}>linked by simple formulas</Dep>, and also that{' '}
      <Dep on={uniques.onlyRoots}>there is no</Dep> other pair of numbers that satisfies those formulas besides the pair
      of roots themselves. Put those two statements together and you get a very useful result, named after the French
      mathematician Francois Viete, who was the first to notice this connection.
    </P>

    <Statement
      $={uniques.vietasFormulas}
      title="Vieta's formulas"
      snippet={{
        key: true,
        seo: "What are Vieta's formulas?",
        description: `
          The sum of the roots of a quadratic trinomial equals -B/A, and the product of the roots equals C/A.
          There are no numbers other than the roots that satisfy these formulas.
        `,
      }}
    >
      <P>
        The roots <M>x_1</M> and <M>x_2</M> of the quadratic trinomial <M>Ax^2 + Bx + C</M> are tied to its coefficients
        by two simple formulas called <B accent>Vieta's formulas</B>:
      </P>
      <BlockMath>{math`
        \begin{cases}
          x_1 + x_2 = -\dfrac{B}{A} \\
          x_1x_2 = \dfrac{C}{A}
        \end{cases}
      `}</BlockMath>
      <P>
        <B accent>There do not exist</B> any other two numbers besides the roots themselves that satisfy these formulas.
      </P>
    </Statement>

    <P>
      Do not get scared by the big curly brace to the left of Vieta's formulas. It only means that both equalities must
      hold, not just one of them. You will meet this brace properly in the topic about systems of equations.
    </P>

    {/* TODO: Insert a link to the topic about systems of equations. */}

    <Callout icon={vietaNormal} title="The extraordinary Viete">
      <P>
        Sir Francois Viete literally changed the language of science. In the 16th century he was the first to
        systematically denote unknown and known quantities with letters (vowels for unknowns, consonants for knowns),
        turning bulky wordy equations into the compact notation we still use today.
      </P>
      <P>
        He was damn good at cryptography too -- he managed to break a difficult Spanish cipher during wartime, helping
        France so much that the other side accused him of sorcery.
      </P>
    </Callout>

    <P>Now we need to clear up a few points that often cause confusion and weird mix-ups. Pay attention!</P>

    <List $={uniques.formulasFaq} unordered>
      <Li>
        <P
          snippet={{
            key: true,
            seo: `Is it Vieta's formulas or Vieta's theorem?`,
            title: 'Formulas or theorem?',
            description: `
              In English, "Vieta's formulas" is the usual name, though some books also say "Vieta's theorem."
              This topic uses "Vieta's formulas" as the main name.
            `,
          }}
        >
          <B>So is it "Vieta's formulas" or "Vieta's theorem"?</B>
        </P>
        <P>
          In English, <B accent>"Vieta's formulas" is the usual name</B>, and that is the name we will use here. Some
          books also say "Vieta's theorem," especially when they want to include not only the two equalities themselves,
          but also the fact that no other numbers besides the roots can satisfy them.
        </P>
      </Li>
      <Li>
        <P
          snippet={{
            seo: "What is the converse of Vieta's theorem?",
            title: 'What is the converse?',
            description: `
              The direct part is about the formulas existing, and the converse is about the formulas working only for roots.
              You do not need to stress over it.
            `,
          }}
        >
          <B>Direct and converse theorems</B>
        </P>
        <P>
          In some study materials, Vieta's theorem is split into the "direct" one, or just "Vieta's theorem," which is
          about the connection between roots and coefficients, and the "converse Vieta's theorem," which is about only
          roots satisfying those formulas. Just stick with the name <B accent>"Vieta's formulas"</B>, otherwise you will
          only confuse yourself, and who the hell needs that?
        </P>
      </Li>
      <Li>
        <P
          snippet={{
            key: true,
            seo: "How do you remember Vieta's formulas?",
            title: 'How to remember?',
            description: `
              You do not have to memorize them; they are derived instantly by expanding the brackets in the factored form.
            `,
          }}
        >
          <B>Remembering the formulas</B>
        </P>
        <P>
          You do not have to memorize them by heart. When you need them, just expand the brackets in{' '}
          <M>A(x-x_1)(x-x_2)</M> and you immediately get the formulas. If you absolutely must memorize something, then
          just remember that the product of the two negative constants <M>-x_1</M> and <M>-x_2</M> gives the constant
          term <M>C</M>. The coefficient <M>A</M> is forever getting under your feet, so you have to divide by it. Then
          only the negative <M>-B</M> is left for the sum of the roots.
        </P>
        <Image src={vieteRemember} width="500px" />
      </Li>
    </List>

    <H1
      snippet={{
        key: true,
        seo: "What are Vieta's formulas used for?",
        title: 'What are they used for?',
        description: `
          The formulas are used for quick root checks, building equations from roots, and establishing links between coefficients.
        `,
      }}
    >
      Using Vieta's formulas
    </H1>

    <P>
      A fair question may come up -- why the hell do we even need these formulas? In fact they are very useful, because
      they give a direct and simple connection between the coefficients of a quadratic equation and its roots. And you
      can use that connection in all kinds of ways:
    </P>

    <Problems $={uniques.usageFastCheck} title="Quick root checking" level="example">
      <P>
        <Dep on={uniques.vietasFormulas}>Vieta's formulas</Dep> let you quickly check whether given numbers are roots of
        a quadratic equation.
      </P>

      <SubProblem label="The slow way">
        <ProblemDescription>
          <P>
            Usually, checking roots means plugging each number into the equation and checking whether you end up with a{' '}
            <Dep on={equationSolution}>true equality</Dep>.
          </P>
          <P>
            Check whether the pair of numbers <M>8</M> and <M>3</M> are roots of the following quadratic equation:
          </P>
          <BlockMath>x^2 - 10x + 16 = 0</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Are these roots?" no />
        <ProblemAnswer>This pair of numbers is not the roots of this equation.</ProblemAnswer>
        <ProblemSolution>
          <P>Plug the numbers into the equation one by one and check whether the equalities come out true:</P>
          <BlockMath>{math`
            8^2 - 10 \cdot 8 + 16 = 0 \\
            64 - 80 + 16 = 0 \\
            \boxed{\green{0 = 0}}
            >>{big}
            3^2 - 10 \cdot 3 + 16 = 0 \\
            9 - 30 + 16 = 0 \\
            \boxed{\red{-5 \neq 0}}
          `}</BlockMath>
          <P>
            The number <M>8</M> turned the equation into a true equality, so it{' '}
            <Dep on={equationSolution}>is a root</Dep> of the equation. But the number <M>3</M> led to a false equality,
            so it is not a root.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Using Vieta's formulas">
        <ProblemDescription>
          <P>
            Plugging a value into several places at once, squaring it, adding and subtracting all that -- it is pretty
            tedious. But with Vieta's formulas you can do the check almost instantly.
          </P>
          <P>
            Try checking the pair <M>8</M> and <M>3</M> first, and then <M>8</M> and <M>2</M>, using Vieta's formulas.
            The quadratic equation is the same:
          </P>
          <BlockMath>x^2 - 10x + 16 = 0</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          The pair <M>8</M> and <M>3</M> is not the roots, but the pair <M>8</M> and <M>2</M> is the roots of this
          equation.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The pair of numbers <M>8</M> and <M>3</M> does not work, because it already falls apart when checked against
            the sum formula:
          </P>
          <BlockMath>{math`
            8 + 3 = 11 \neq -\frac{-10}{1} = 10
          `}</BlockMath>
          <P>
            Try the second pair of numbers, <M>8</M> and <M>2</M>:
          </P>
          <BlockMath>{math`
            8 + 2 = 10 = -\frac{-10}{1} \\
            8 \cdot 2 = 16 = \frac{16}{1}
          `}</BlockMath>
          <P>
            Both equalities are true! So the numbers <M>8</M> and <M>2</M> really are roots of the equation!
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem $={uniques.usageConstructing} title="Building equations from roots" level="example">
      <ProblemDescription>
        <P>
          <Dep on={uniques.vietasFormulas}>Vieta's formulas</Dep> let you build quadratic equations "backwards": from a
          known pair of roots, get a quadratic equation. Teachers use this all the time to create practice equations for
          students.
        </P>
        <P>
          Build a quadratic equation with roots <M>\sqrt{2}</M> and <M>-\sqrt{2}</M>.
        </P>
      </ProblemDescription>
      <ProblemHint>
        Write down Vieta's formulas, but substitute <M>\sqrt{2}</M> and <M>-\sqrt{2}</M> in place of <M>x_1</M> and{' '}
        <M>x_2</M>.
      </ProblemHint>
      <ProblemAnswer>
        <P>You can build infinitely many such equations. Here are three examples:</P>
        <BlockMath>{math`
          -4x^2 + 8 = 0 >>
          \frac{1}{2}x^2 - 1 = 0 >>
          \frac{\sqrt{2}}{2}x^2 - \sqrt{2} = 0
        `}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Write down Vieta's formulas, but substitute <M>\sqrt{2}</M> and <M>-\sqrt{2}</M> in place of <M>x_1</M> and{' '}
          <M>x_2</M>:
        </P>

        <BlockMath>{math`
          \begin{cases}
            \sqrt{2} + (-\sqrt{2}) = 0 \\
            \sqrt{2} \cdot (-\sqrt{2}) = -2
          \end{cases}
          >>
          \begin{cases}
            0 = -\frac{B}{A} \\
            -2 = \frac{C}{A}
          \end{cases}
        `}</BlockMath>

        <P>
          From the equality <M>{math`0 = -\frac{B}{A}`}</M> it becomes clear that the coefficient <M>B</M> has to be
          zero, because there is simply no other way to make that fraction become zero.
        </P>

        <P>
          From the equality <M>{math`-2 = \frac{C}{A}`}</M> it becomes clear that infinitely many equations can be
          built, as long as coefficients <M>A</M> and <M>C</M> have opposite signs and <M>C</M> is twice <M>A</M>.
          Examples:
        </P>

        <BlockMath>{math`
          C = 8, \ A = -4 >>
          C = -1, \ A = \frac{1}{2} >>
          C = -\sqrt{2}, \ A = \frac{\sqrt{2}}{2}
        `}</BlockMath>

        <P>
          That gives us three quadratic equations with roots <M>\pm \sqrt{2}</M>:
        </P>

        <BlockMath>{math`
          -4x^2 + 8 = 0 >>
          \frac{1}{2}x^2 - 1 = 0 >>
          \frac{\sqrt{2}}{2}x^2 - \sqrt{2} = 0
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem $={uniques.usageCoefficients} title="Linking coefficients through the roots" level="example">
      <ProblemDescription>
        <P>
          <Dep on={uniques.vietasFormulas}>Vieta's formulas</Dep> let you "transfer" a relationship between roots into a
          relationship between coefficients in a quadratic trinomial. This helps you understand what quadratic
          trinomials with unusual root properties must look like.
        </P>
        <P>
          What restrictions do the coefficients of quadratic equations have if one root is twice the other? Build three
          such equations with actual numbers.
        </P>
      </ProblemDescription>
      <ProblemHint>
        Write down Vieta's formulas, only substitute <M>2x_1</M> in place of <M>x_2</M>.
      </ProblemHint>
      <ProblemHint>
        Isolate <M>x_1</M> in both equations and set the results equal to each other.
      </ProblemHint>
      <ProblemAnswer>
        <P>
          In any quadratic equation where one root is twice the other, coefficients <M>A</M> and <M>C</M> necessarily
          have the same sign: either both positive or both negative. Examples:
        </P>

        <BlockMath>{math`
            2x^2 + 9x + 9 = 0 >>{big}
            2x^2 - 9x + 9 = 0 >>{big}
            \sqrt{3}x^2 = 0
          `}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          The statement says that one root is twice the other. So the roots definitely exist. Let us denote them by{' '}
          <M>x_1</M> and <M>x_2</M>. Mathematically, the phrase "one root is twice the other" can be written like this:
        </P>

        <BlockMath>x_2 = 2x_1</BlockMath>

        <P>Write down Vieta's formulas:</P>

        <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -\frac{B}{A} \\
              x_1x_2 = \frac{C}{A}
            \end{cases}
          `}</BlockMath>

        <P>
          Replace <M>x_2</M> with <M>2x_1</M>:
        </P>

        <BlockMath>{math`
            \begin{cases}
              x_1 + 2x_1 = -\frac{B}{A} \\
              x_1 \cdot 2x_1 = \frac{C}{A}
            \end{cases}
            >>{big}
            \begin{cases}
              3x_1 = -\frac{B}{A} \\
              2x_1^2 = \frac{C}{A}
            \end{cases}
          `}</BlockMath>

        <P>
          Isolate <M>x_1</M> in both equations:
        </P>

        <BlockMath>{math`
            \begin{cases}
              x_1 = -\frac{B}{3A} \\
              x_1^2 = \frac{C}{2A}
            \end{cases}
          `}</BlockMath>

        <P>
          Substitute the value of <M>x_1</M> from the first equation into the second equation and you get:
        </P>

        <BlockMath>{math`
            \left(-\frac{B}{3A}\right)^2 = \frac{C}{2A} \\
            \frac{B^2}{9A^2} = \frac{C}{2A} \\
            B^2 = \frac{9}{2}AC
          `}</BlockMath>

        <P>
          From the last equality it becomes clear that for any quadratic equation where one root is twice the other,
          coefficients <M>A</M> and <M>C</M> must always have the same sign (either both positive or both negative),
          otherwise <M>AC</M> would be negative, while <M>B^2</M> cannot be negative. Coefficient <M>B</M>, on the other
          hand, can have any sign.
        </P>

        <P>
          To build examples of such equations, let us just pick some random values for coefficients <M>A</M> and{' '}
          <M>C</M> (remember, they must have the same sign), and then compute <M>B</M> from the coefficient relation we
          derived above. Let <M>A = 2</M> and <M>C = 9</M>. Then:
        </P>

        <BlockMath>{math`
            B^2 = \frac{9}{2}AC = \frac{9}{2} \cdot 2 \cdot 9 = 81 \\
            B = \pm \sqrt{81} = \pm 9
          `}</BlockMath>

        <P>That immediately gives two quadratic equations:</P>

        <BlockMath>{math`
            2x^2 + 9x + 9 = 0 >>{big}
            2x^2 - 9x + 9 = 0
          `}</BlockMath>

        <P>Solve both equations, and indeed in both cases one root is twice the other:</P>

        <BlockMath>{math`
            2x^2 + 9x + 9 = 0 \\
            x_1 = \frac{-3}{2}, \quad x_2 = -3
            >>{big}
            2x^2 - 9x + 9 = 0 \\
            x_1 = \frac{3}{2}, \quad x_2 = 3
          `}</BlockMath>

        <P>
          For the third example, let us take <M>B = 0</M>. Then coefficient <M>C</M> also has to be zero. <M>A</M>{' '}
          cannot equal zero, otherwise this would no longer be a quadratic equation.
        </P>

        <BlockMath>{math`
            0 = \frac{9}{2}A \cdot 0
          `}</BlockMath>

        <P>
          Coefficient <M>A</M> can be any nonzero number, because in any case it gets multiplied by zero and the result
          is zero. Let <M>A = \sqrt{3}</M>:
        </P>

        <BlockMath>{math`
            \sqrt{3}x^2 + 0x + 0 = 0 \\
            \sqrt{3}x^2 = 0 \\
            x_1 = 0, \quad x_2 = 0
          `}</BlockMath>

        <P>
          Even here the "doubled root" condition holds, because <M>2 \cdot 0 = 0</M>!
        </P>
      </ProblemSolution>
    </Problem>

    <H1>Generalizing the formulas</H1>

    <P>
      Do such interesting formulas exist only for quadratic equations? Not at all. They are universal and work for
      equations of any degree. Whatever the highest degree of the equation is, that is how many Vieta's formulas you
      get. Here are examples for degrees from <M>1</M> to <M>3</M>:
    </P>

    <BlockMath>{math`
      Ax + B = 0 \\
      \begin{cases}
        x_1 = -\frac{B}{A}
      \end{cases}
      >>{top}
      Ax^2 + Bx + C = 0 \\
      \begin{cases}
        x_1 + x_2 = -\frac{B}{A} \\
        x_1x_2 = \frac{C}{A}
      \end{cases}
      >>{top}
      Ax^3 + Bx^2 + Cx + D = 0 \\
      \begin{cases}
        x_1 + x_2 + x_3 = -\frac{B}{A} \\
        x_1x_2 + x_1x_3 + x_2x_3 = \frac{C}{A} \\
        x_1x_2x_3 = -\frac{D}{A}
      \end{cases}
    `}</BlockMath>

    <P>
      It works out this way because in fact any equation with a polynomial can be factored into a bunch of factors, not
      just quadratic trinomials. We are not going to prove that here, and we do not need it yet, but the factorization
      looks like this:
    </P>

    <BlockMath>{math`
      Ax + B = A(x - x_1) \\
      Ax^2 + Bx + C = A(x - x_1)(x - x_2) \\
      Ax^3 + Bx^2 + Cx + D = A(x - x_1)(x - x_2)(x - x_3)
    `}</BlockMath>

    <P>
      Expanding the brackets and matching coefficients is exactly what gives Vieta's formulas for equations of any
      degree.
    </P>
  </>
));
