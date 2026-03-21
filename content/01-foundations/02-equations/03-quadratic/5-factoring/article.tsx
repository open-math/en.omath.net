import type { XOR } from 'ts-xor';

// #region Assets
//
//

import twoWays from './assets/two-ways.svg';
import factoringStep1 from './assets/factoring-step-1.svg';
import factoringStep2 from './assets/factoring-step-2.svg';
import factoringStep3 from './assets/factoring-step-3.svg';
import virginChad from './assets/virgin-chad.webp';
import rootsPlane from './assets/roots-plane.svg';

//
//
// #endregion

// #region Links
//
//

const zeroProductProperty = $CONTENT.foundations.equations.zeroProductProperty;
const quadraticPolynomial = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticTrinomial;
const quadraticEquation = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticEquation;
const incompleteQuadratic = $CONTENT.foundations.equations.quadratic.incomplete.article.$quadraticMissingTerms;
const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;
const compensate = $CONTENT.foundations.equations.quadratic.completingTheSquare.article.$compensate;
const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;
const discriminant = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$discriminant;

//
//
// #endregion

export const RootsFactoringCheck = (
  props: {
    children?: undefined;
  } & XOR<{ empty: true }, { factoredForm: string; roots: [string | number, ...Array<string | number>] }>,
) => {
  if (props.empty) {
    return (
      <>
        <ProblemCheck label="Can it be factored?" no />
      </>
    );
  }

  return (
    <>
      <ProblemCheck label="Can it be factored?" yes>
        <MathExpressionCheck label="Factored form" answer={props.factoredForm} />
        <RootsCheck roots={props.roots} />
      </ProblemCheck>
    </>
  );
};

export default defineProse({
  uniques: {
    whyFactoring: List,
    manualFactoring: H1,
    manualFactoringExamples: Problems,
    generalFactoring: Statement,
    generalFactoringExamples: Problems,
    quadraticFromAny: Important,
    rootsPlane: H1,
  },
})(({ uniques }) => (
  <>
    <H1>The way of sum and product</H1>

    <P>
      Any number can be written in infinitely many different ways. All those ways split into two categories: writing it
      as a <B>sum of terms</B> (addition) and writing it as a <B>product of factors</B> (multiplication).
    </P>

    <Image src={twoWays} width="600px">
      <Caption>So which side are you on?</Caption>
    </Image>

    <P>
      It may seem like there is no real difference between these notations. Just write everything with plus signs and
      don't give a damn. But factor form is useful too. Why? Because in complicated expressions, factor form lets you
      cancel stuff, while a sum of terms does not. See for yourself with the number <M>42</M>:
    </P>

    <BlockMath>{math`
      \frac{\yellow{3 + 13 + 26}}{11 \cdot 7 \cdot 3} = \ \red{\text{?!}} >>{big}
      \frac{\blue{2 \cdot \cancel{3} \cdot \cancel{7}}}{11 \cdot \cancel{7} \cdot \cancel{3}} = \green{\frac{2}{11}}
    `}</BlockMath>

    <P>
      Just like ordinary numbers can be written through addition or multiplication,{' '}
      <Dep on={quadraticPolynomial}>quadratic trinomials</Dep> can also be written in two ways. So far we've only been
      using the sum form, for example:
    </P>

    <BlockMath>{math`x^2 + 8x + 15`}</BlockMath>

    <P>
      So how the hell do you rewrite that as multiplication? Looks impossible. But if you mess around with the middle
      term a bit and factor out a common factor twice in a row, you can pull off some dark magic:
    </P>

    <BlockMath>{math`
      x^2 + 8x + 15 = \\
      = x^2 + \underbrace{3x + 5x}_{\small 8x} + 15 = \\
      = x(x + 3) + 5(x + 3) = \\
      = (x + 3)(x + 5)
    `}</BlockMath>

    <P>
      We started with a sum of three terms (<M>x^2</M>, <M>8x</M>, and <M>15</M>), and ended up with a product of two
      factors (<M>x + 3</M> and <M>x + 5</M>). That process is called factoring a quadratic trinomial:
    </P>

    <Diagram>{math`
      flowchart TD
        sum["$$ x^2 + 8x + 15 $$"]
        product["$$ (x + 3)\cdot(x + 5) $$"]

        sum -->|**Factoring**| product
        product -->|Expand the brackets| sum

        class sum,product fill
    `}</Diagram>

    <P>
      Imagine we had some ugly complicated expression. In the sum form we'd be stuck, but in factor form we can simplify
      it!
    </P>

    <BlockMath>{math`
      \frac{\yellow{x^2 + 8x + 15}}{2(x + 3)} = \ \red{\text{?!}} >>{big}
      \frac{\blue{\cancel{(x + 3)} \cdot (x + 5)}}{2\cancel{(x + 3)}} = \green{\frac{x + 5}{2}}
    `}</BlockMath>

    <P>
      Just don't start thinking that now everything should always be written as multiplication. That's bullshit. There
      are countless situations where the sum form simplifies an expression and factor form just shits the bed:
    </P>

    <BlockMath>{math`
      -\cancel{15} + \yellow{\cancel{x^2} + 8x + \cancel{15}} - \cancel{x^2} = \green{8x} >>{big}
      -15 + \blue{(x + 3) \cdot (x + 5)} - x^2 = \red{\text{?!}}
    `}</BlockMath>

    <Important
      title="Both plus and multiplication matter!"
      snippet={{
        key: true,
        description: `
          In different situations, you need to be able to write expressions both as sums and as products of factors.
        `,
      }}
    >
      Both ways of writing expressions, whether <B accent>as a sum</B> or <B accent>as a product of factors</B>, turn
      out to be damn useful in different situations. If you want actual mathematical harmony, you need to handle both of
      them freely.
    </Important>

    <H1>Why do this at all?</H1>

    <P>
      That's a damn good question. Was moral and spiritual decay not enough already? Now we're going to corrupt young
      and innocent quadratic trinomials too?! Still, there are good reasons to do this, and there are plenty of them:
    </P>

    <List
      $={uniques.whyFactoring}
      ordered
      snippet={{
        seo: 'Why is factoring a quadratic trinomial useful?',
        key: true,
        title: 'Why bother?',
        description: `
          Factoring quadratic trinomials lets you simplify expressions, see the roots right away, and gives you an alternative way to solve quadratic equations.
        `,
      }}
    >
      <Li>
        <P>
          <B>You can simplify expressions</B>
        </P>
        <P>Writing a quadratic trinomial as a product of factors often lets you simplify complicated expressions:</P>
        <BlockMath>{math`
          \frac{5 \cdot (x^2 - 2x - 24)}{(x+4) \cdot (x-6) \cdot 10} = \frac{5 \cdot \cancel{(x+4)} \cdot \cancel{(x-6)}}{10 \cdot \cancel{(x+4)} \cdot \cancel{(x-6)}} = \frac{5}{10} = \frac{1}{2} = 0.5
        `}</BlockMath>
      </Li>
      <Li>
        <P>
          <B>Getting back to the sum is easy</B>
        </P>
        <P>
          Once a quadratic trinomial is factored, getting the sum form back is just a matter of expanding the brackets:
        </P>
        <BlockMath>{math`
          2(x-1)(4+x) = 2(4x + x^2 - 4 -x) = 2(x^2 + 3x - 4) = \boxed{2x^2 + 6x - 8}
        `}</BlockMath>
        <P>But going the other way, from the sum form to factors, is much harder!</P>
        <BlockMath>{math`2x^2 + 6x - 8 = \ldots \text{ ? } \ldots = \boxed{2(x-1)(4+x)}`}</BlockMath>
      </Li>
      <Li>
        <P>
          <B>The roots become visible immediately</B>
        </P>
        <P>
          Writing a quadratic trinomial as a product of factors lets you immediately see the roots of its "equation." In
          that form it falls under the <Dep on={zeroProductProperty}>Zero product property</Dep> -- you just set each
          factor equal to zero separately and get a true equality <M>0 = 0</M>:
        </P>
        <Diagram>{math`
          flowchart TD
            trinomial["$$ x^2 - 7x + 6 = 0 $$"]
            factors["$$ (x - 1)(x - 6) = 0 $$"]
            trinomial --> whichRoots["Which roots?!"]
            subEquation1["$$ x - 1 = 0 $$"]
            subEquation2["$$ x - 6 = 0 $$"]
            factors -->|Sub-equation 1| subEquation1
            factors -->|Sub-equation 2| subEquation2
            subEquation1 --> root1["$$ x_1 = 1 $$"]
            subEquation2 --> root2["$$ x_2 = 6 $$"]

            class whichRoots,root1,root2 fill
        `}</Diagram>
        <P>
          In factor form, the roots are the numbers next to <M>x</M>, but with the opposite sign!
        </P>
      </Li>
      <Li>
        <P>
          <B>It's a way to solve quadratic equations</B>
        </P>
        <P>
          Factoring is one more way to solve quadratic equations, alongside the methods you already know:{' '}
          <Dep on={completingTheSquare}>completing the square</Dep> and the{' '}
          <Dep on={quadraticFormula}>general root formula</Dep>. We rewrite the quadratic trinomial as multiplication
          and immediately see the roots if that expression were a quadratic equation. A big plus is that for simple
          quadratics, this lets you find the roots <B>fast</B>, sometimes <B>right in your head</B>!
        </P>
      </Li>
    </List>

    <P>
      Because of all those advantages, quadratic trinomials are usually written in factored form, and only in rarer
      cases, when there's a real need, do we quickly expand the brackets and switch back to the sum form.
    </P>

    <Image src={virginChad} />

    <H1>Don't confuse a trinomial with an equation!</H1>

    <P>
      One more time, just in case: do not confuse a <Dep on={quadraticPolynomial}>quadratic trinomial</Dep> with a{' '}
      <Dep on={quadraticEquation}>quadratic equation</Dep>. A quadratic trinomial is just an expression. It does not
      have to be tied to any equality or equation at all. When we factor it, we're simply rewriting it in another form.
    </P>

    <BlockMath>x^2 + 8x + 15 = (x + 3)(x + 5)</BlockMath>

    <P>
      A quadratic equation, on the other hand, is not just an expression but an equality, and it must contain an equal
      sign "<M>=</M>". On one side of that sign there must <B>definitely</B> be some quadratic trinomial, and on the
      other side there must <B>definitely</B> be zero. Of course, the quadratic trinomial "inside" a quadratic equation
      can also be factored:
    </P>

    <BlockMath>{math`
      x^2 + 8x + 15 = 0 \\
      (x+3)(x+5) = 0
    `}</BlockMath>

    <P>
      As you can see, a nice "side effect" of that factoring is that we instantly start seeing the roots of this
      quadratic equation: <M>-3</M> and <M>-5</M>.
    </P>

    <H1
      $={uniques.manualFactoring}
      snippet={{ key: true, description: 'A method for factoring "simple" quadratic trinomials by hand.' }}
    >
      Factoring by hand
    </H1>

    <P>
      Writing the number <M>42</M> as <M>2 \cdot 3 \cdot 7</M>, and writing the quadratic trinomial <M>x^2 + 8x + 15</M>{' '}
      as <M>(x + 3)\cdot(x + 5)</M>, are both called factoring. Factoring a number is usually easy, but factoring a
      trinomial turns into a little puzzle. Now we're going to learn how to crack that puzzle.
    </P>

    <P>
      The main trick is always the same: split coefficients <M>B</M> and <M>C</M> into two numbers, let's call them{' '}
      <M>t</M> and <M>k</M>. But you can't split them however you feel like it. There are infinitely many ways to do
      that. You need a split where the <B>sum</B> <M>t + k</M> <B>gives coefficient</B> <M>B</M>, while the{' '}
      <B>product</B> <M>t \cdot k</M> <B>gives coefficient</B> <M>C</M>!
    </P>

    <Image src={factoringStep1} invert="dark" width="500px" />

    <P>
      Why does <M>B</M> come from addition while <M>C</M> comes from multiplication? Why not both from addition, or both
      from multiplication? Because now we can pull off a brutal combo of repeated factoring out of a common factor, and
      that's exactly what creates multiplication inside the expression.
    </P>

    <P>
      First we factor out <M>x</M> from the first and second terms. Then we factor out <M>k</M> from the second and
      third terms. Finally, we factor out the new common factor <M>(x+t)</M>. And that's it, the quadratic trinomial is
      factored!
    </P>

    <Image src={factoringStep2} invert="dark" width="500px" />

    <P>
      You probably want to see a visualization of the process. Yep, there is one, and it shows perfectly why the numbers{' '}
      <M>t</M> and <M>k</M> need to work both in addition and in multiplication. We have a little square with area{' '}
      <M>x^2</M>, a rectangle with area <M>Bx</M>, and some weird shapeless blob with area <M>C</M>. We split the
      rectangle <M>Bx</M> into two smaller rectangles so the leftover space can be filled by a rectangle with area{' '}
      <M>t \cdot k = C</M>. Long story short, when <Dep on={completingTheSquare}>completing the square</Dep> we built a
      square out of pieces, and now we're building a rectangle out of them.
    </P>

    <Image src={factoringStep3} invert="dark" width="600px" />

    <P>
      Now that you've got the core idea, you absolutely need to drill it on a bunch of examples. Try to solve every one
      of them yourself.
    </P>

    <Problems $={uniques.manualFactoringExamples} title="Examples of hand factoring" level="example">
      <P>Factor the quadratic trinomial and find the roots of the corresponding quadratic equation:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 5x + 6</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x+2)(x+3)" />
        <RootsCheck roots={[-2, -3]} />
        <ProblemAnswer>
          <BlockMath>(x+2)(x+3)</BlockMath>
        </ProblemAnswer>
        <ProblemHint>
          Which numbers add up to <M>5</M> and multiply to <M>6</M>?
        </ProblemHint>
        <ProblemSolution>
          <P>
            Think about which numbers add up to <M>5</M> and multiply to <M>6</M>. It's pretty easy to guess that those
            numbers are <M>2</M> and <M>3</M>. We split coefficients <M>B</M> and <M>C</M> into those numbers and get:
          </P>
          <BlockMath>{math`
            x^2 + 5x + 6 = \\
            = x^2 + \underbrace{2x + 3x}_{\small 5x} + \underbrace{2 \cdot 3}_{\small 6} = \\
            = x(x + 2) + 3(x + 2) = \\
            = (x + 2)(x + 3)
          `}</BlockMath>
          <P>The solutions of the corresponding equation are the opposites of the numbers used for factoring:</P>
          <BlockMath>{math`
            x^2 + 5x + 6 = 0 \\
            (x+2)(x+3) = 0 \\
            x_1 = -2, \quad x_2 = -3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 6x + 9</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x+3)^2" />
        <RootsCheck roots={[-3]} />
        <ProblemAnswer>
          <BlockMath>(x+3)^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Which numbers add up to <M>6</M> and multiply to <M>9</M>? Those are <M>3</M> and <M>3</M>. We split
            coefficients <M>B</M> and <M>C</M> into those numbers and get:
          </P>
          <BlockMath>{math`
            x^2 + 6x + 9 = \\
            = x^2 + \underbrace{3x + 3x}_{\small 6x} + \underbrace{3 \cdot 3}_{\small 9} = \\
            = x(x + 3) + 3(x + 3) = \\
            = (x + 3)(x + 3) = (x + 3)^2
          `}</BlockMath>
          <P>The solution of the corresponding equation is the opposite of the number used for factoring:</P>
          <BlockMath>{math`
            x^2 + 6x + 9 = 0 \\
            (x+3)^2 = 0 \\
            x_{1,2} = -3
          `}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          <P>
            In this example, factoring happened to match completing the square. That also happens pretty often. You
            could have written it like this too:
          </P>
          <BlockMath>{math`
            x^2 + 6x + 9 = \underbrace{(x^2) + 2 \cdot x \cdot 3 + (3^2)}_{a^2 + 2ab + b^2 = (a+b)^2} = (x + 3)^2
          `}</BlockMath>
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 6x</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="x(x+6)" />
        <RootsCheck roots={[0, -6]} />
        <ProblemHint>
          To factor it, it's enough to pull <M>x</M> out as a common factor.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>x(x+6)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Here we have an "incomplete quadratic expression" with coefficient <M>C = 0</M>. I'd like to call it an{' '}
            <Ref to={incompleteQuadratic}>incomplete quadratic equation</Ref>, but it's not even an equation 🤣. To
            factor it, it's enough to pull out <M>x</M>:
          </P>
          <BlockMath>x^2 + 6x = x(x + 6)</BlockMath>
          <P>
            But you can also solve it with our trick. Which two numbers add up to <M>B = 6</M> and multiply to{' '}
            <M>C = 0</M>? Obviously one of them has to be <M>0</M> to kill coefficient <M>C</M>, and then the other one
            has to be <M>6</M>!
          </P>
          <BlockMath>{math`
            x^2 + 6x = \\
            = x^2 + \underbrace{0x + 6x}_{\small 6x} + \underbrace{0 \cdot 6}_{\small 0} = \\
            = x(x + 0) + 6(x + 0) = \\
            = (x + 0)(x + 6) = x(x + 6)
          `}</BlockMath>
          <P>The solutions of the corresponding equation are the opposites of the numbers used for factoring:</P>
          <BlockMath>{math`
            x^2 + 6x = 0 \\
            x(x + 6) = 0 \\
            x_1 = 0, \quad x_2 = -6
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 7x + 6</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x-1)(x-6)" />
        <RootsCheck roots={[1, 6]} />
        <ProblemHint>
          You don't have to split it into two positive numbers. One of the numbers, or even both, can be negative! After
          all, any difference can still be written as a sum: <M>2 - 3 = 2 + (-3)</M> or even{' '}
          <M>-8 - 10 = (-8) + (-10)</M>!
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>(x-1)(x-6)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Interesting case. The sum has to be negative, but the product has to be positive. That can only happen if
            both numbers are negative. So what are they? <M>-1</M> and <M>-6</M>! We split coefficients <M>B</M> and{' '}
            <M>C</M> into those numbers and get:
          </P>
          <BlockMath>{math`
            x^2 - 7x + 6 = \\
            = x^2 + \underbrace{-1x + -6x}_{\small -7x} + \underbrace{-1 \cdot -6}_{\small 6} = \\
            = x(x - 1) - 6(x - 1) = \\
            = (x - 1)(x - 6)
          `}</BlockMath>
          <P>The solutions of the corresponding equation are the opposites of the numbers used for factoring:</P>
          <BlockMath>{math`
            x^2 - 7x + 6 = 0 \\
            (x-1)(x-6) = 0 \\
            x_1 = 1, \quad x_2 = 6
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 1</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x-1)(x+1)" />
        <RootsCheck roots={[1, -1]} />
        <ProblemHint>Use an identity formula.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>(x-1)(x+1)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>This expression can be factored using the identity called the "difference of squares":</P>
          <BlockMath>{math`
            x^2 - 1 = \underbrace{x^2 - 1^2}_{a^2 - b^2 = (a+b)(a-b)} = (x - 1)(x + 1)
          `}</BlockMath>
          <P>
            But you can also solve it with our trick. Which two numbers add up to <M>B = 0</M> and multiply to{' '}
            <M>C = -1</M>? Of course, they're <M>1</M> and <M>-1</M>!
          </P>
          <BlockMath>{math`
            x^2 - 1 = \\
            = x^2 + \underbrace{1x + -1x}_{\small 0x} + \underbrace{1 \cdot -1}_{\small -1} = \\
            = x(x + 1) - 1(x + 1) = \\
            = (x + 1)(x - 1)
          `}</BlockMath>
          <P>The solutions of the corresponding equation are the opposites of the numbers used for factoring:</P>
          <BlockMath>{math`
            x^2 - 1 = 0 \\
            (x-1)(x+1) = 0 \\
            x_1 = 1, \quad x_2 = -1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 2x - 24</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="(x-6)(x+4)" />
        <RootsCheck roots={[6, -4]} />
        <ProblemAnswer>
          <BlockMath>(x-6)(x+4)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Which two numbers add up to <M>-2</M> and multiply to <M>-24</M>? Those are <M>4</M> and <M>-6</M>. We split
            coefficients <M>B</M> and <M>C</M> into those numbers and get:
          </P>
          <BlockMath>{math`
            x^2 - 2x - 24 = \\
            = x^2 + \underbrace{4x + -6x}_{\small -2x} + \underbrace{4 \cdot -6}_{\small -24} = \\
            = x(x + 4) - 6(x + 4) = \\
            = (x + 4)(x - 6)
          `}</BlockMath>
          <P>The solutions of the corresponding equation are the opposites of the numbers used for factoring:</P>
          <BlockMath>{math`
            x^2 - 2x - 24 = 0 \\
            (x-6)(x+4) = 0 \\
            x_1 = 6, \quad x_2 = -4
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^2 - 6x + 4</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Factored form" answer="2(x-1)(x-2)" />
        <RootsCheck roots={[1, 2]} />
        <ProblemHint>
          First factor <M>2</M> out of all the terms.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>2(x-1)(x-2)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            First, factor <M>2</M> out of all the terms:
          </P>
          <BlockMath>{math`
            2x^2 - 6x + 4 = 2(x^2 - 3x + 2)
          `}</BlockMath>
          <P>
            Now we need to factor the quadratic trinomial <M>x^2 - 3x + 2</M>. Which two numbers add up to <M>-3</M> and
            multiply to <M>2</M>? Those are <M>-1</M> and <M>-2</M>!
          </P>
          <BlockMath>{math`
            2(x^2 - 3x + 2) = \\
              = 2(x^2 + \underbrace{-1x + -2x}_{\small -3x} + \underbrace{-1 \cdot -2}_{\small 2}) = \\
              = 2(x(x - 1) - 2(x - 1)) = \\
              = 2(x - 1)(x - 2)
          `}</BlockMath>
          <P>The solutions of the corresponding equation are the opposites of the numbers used for factoring:</P>
          <BlockMath>{math`
            2x^2 - 6x + 4 = 0 \\
            2(x-1)(x-2) = 0 \\
            x_1 = 1, \quad x_2 = 2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1>Factoring in the general case</H1>

    <P>
      Tricks and visualizations are cool, sure, but they only work for special cases. Just like with the{' '}
      <Ref to={quadraticFormula}>general root formula</Ref> for quadratic equations, we need to factor not specific
      quadratic trinomials, but their <Dep on={quadraticPolynomial}>standard form</Dep> right away:
    </P>

    <BlockMath>Ax^2 + Bx + C, \quad A \neq 0</BlockMath>

    <P>
      Here's the plan. We'll complete the square inside the quadratic trinomial, then use the identity "difference of
      squares" to get the final factors. In a simplified toy version, it looks something like this:
    </P>

    <BlockMath>{math`
      \underbrace{x^2 + 2x + 1}_{\text{perfect square}} - 9 =
      \underbrace{(x + 1)^2 - 3^2}_{\text{difference of squares}} = \\
      = (x + 1 - 3)(x + 1 + 3) = \\
      = (x - 2)(x + 4)
    `}</BlockMath>

    <P>
      Let's do it. First we need to get rid of coefficient <M>A</M> in front of <M>x^2</M>. Why? Because we don't know
      its sign. God forbid it turns out to be negative, because then we won't be able to take the square root of{' '}
      <M>Ax^2</M>! So we factor it out of all three terms:
    </P>

    <BlockMath>{math`A\left( x^2 + \frac{B}{A}x + \frac{C}{A} \right)`}</BlockMath>

    <P>
      We leave the constant term <M>{math`C/A`}</M> alone for now. We'll need it for the difference of squares. The
      remaining two terms will be packed into the square of a sum, <M>a^2 + 2ab + b^2 = (a+b)^2</M>. But we're missing
      what we need to complete the square. There's no factor of two, and there's no third term playing the role of{' '}
      <M>b^2</M>. So we have to add those missing pieces and then subtract them back out to{' '}
      <Dep on={compensate}>keep the value of the expression unchanged</Dep>:
    </P>

    <BlockMath>{math`
      A\left( x^2 + \yellow{2} \cdot x\frac{B}{A} \cdot \yellow{\frac{1}{2}} + \frac{C}{A} \right) \\
      A\left( x^2 + 2 \cdot x \cdot \frac{B}{2A} + \frac{C}{A} \right)
    `}</BlockMath>

    <P>
      The fraction <M>{math`\frac{B}{2A}`}</M> naturally becomes <M>b</M>, because <M>a</M> is already being played by{' '}
      <M>x</M>. To complete the square, the only thing left is to add and compensate <M>b^2</M>:
    </P>

    <BlockMath>{math`
      A\left( \underbrace{x^2 + 2 \cdot x \cdot \frac{B}{2A} + \yellow{\left( \frac{B}{2A} \right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left( \frac{B}{2A} \right)^2} + \frac{C}{A} \right) \\
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \left[ \frac{B}{2A} \right]^2 + \frac{C}{A} \right) \\
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \left[ \frac{B^2}{4A^2} - \frac{C}{A} \right] \right) \\
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \frac{B^2 - 4AC}{4A^2} \right) \\
    `}</BlockMath>

    <P>
      There it is, our old friend, the <Dep on={discriminant}>discriminant</Dep>. We substitute it in to simplify this
      already ugly expression:
    </P>

    <BlockMath>{math`
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \frac{D}{4A^2} \right)
    `}</BlockMath>

    <P>
      We successfully completed the square. Now notice that inside the brackets we get a difference of squares.
      Technically, it only becomes one if the discriminant <M>D \geq 0</M>, because only then can we take its square
      root. So let's assume that condition and finally finish the factoring:
    </P>

    <BlockMath>{math`
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \left[ \frac{\sqrt{D}}{2A} \right]^2 \right) = \\
      = A\left( \left[ x + \frac{B}{2A} - \frac{\sqrt{D}}{2A} \right] \cdot \left[ x + \frac{B}{2A} + \frac{\sqrt{D}}{2A} \right] \right) = \\
      = A\left( x + \frac{B - \sqrt{D}}{2A} \right) \left( x + \frac{B + \sqrt{D}}{2A} \right)
    `}</BlockMath>

    <P>
      Notice that next to <M>x</M> in both brackets, we almost got the <Dep on={quadraticFormula}>formulas</Dep> for the
      two possible roots of the quadratic equation. To make them match exactly, we just need to pull a minus sign out of
      the numerators:
    </P>

    <BlockMath>{math`
      A\left( x - \underbrace{\frac{-B + \sqrt{D}}{2A}}_{\small x_1} \right) \left( x - \underbrace{\frac{-B - \sqrt{D}}{2A}}_{\small x_2} \right) \\
      \boxed{A (x - x_1)(x - x_2)}
    `}</BlockMath>

    <P>
      That's it. This nightmare is over. As you can see, factoring a quadratic trinomial in standard form almost repeats
      the derivation of the general root formula for a quadratic equation. The only difference is that we don't have an
      equation here, no "left" or "right" side, so instead of taking a square root "from both sides of the equation," we
      used the difference-of-squares identity.
    </P>

    <Statement
      $={uniques.generalFactoring}
      title="Factoring a quadratic trinomial"
      snippet={{
        key: true,
        title: 'General factoring form',
        seo: 'Formula for factoring a quadratic trinomial',
        description: `
          If a quadratic trinomial has roots, it can always be factored using those roots.
        `,
      }}
    >
      <P>
        If a <Dep on={quadraticPolynomial}>quadratic trinomial</Dep> has <Dep on={quadraticFormula}>roots</Dep> (let's
        call them <M>x_1</M> and <M>x_2</M>), then that trinomial can <B>always</B> be <B accent>factored</B>:
      </P>

      <Diagram>{math`
        flowchart TD
          standartForm["**Standard form**<br />$$ Ax^2 + Bx + C $$"]
          factorsForm["**Factored form**<br />$$ A(x - x_1)(x - x_2) $$"]

          factorsForm -->|Expand the brackets| standartForm
          standartForm -->|**Factoring**| factorsForm

          class standartForm,factorsForm fill
      `}</Diagram>

      <P>
        These are two different notations, one through addition and one through multiplication, but they mean the same
        thing, just like <M>10 + 6</M> and <M>2\cdot8</M> denote the same number. You can switch a quadratic trinomial
        into factor form and back again <B>in absolutely any situation</B>!
      </P>
    </Statement>

    <P>
      No more tricks are needed. To factor a quadratic trinomial, you just solve the corresponding quadratic equation in
      whatever way is most convenient for you. If that equation has no roots, then the quadratic trinomial cannot be
      factored. Let's practice the procedure on some examples:
    </P>

    <Problems $={uniques.generalFactoringExamples} title="Examples of factoring through roots" level="example">
      <P>Factor the quadratic trinomial by solving the corresponding quadratic equation:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>4x^2 + 15x - 4</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck factoredForm="4(x - 1/4)(x + 4)" roots={['1/4', -4]} />
        <ProblemAnswer>
          <BlockMath>{math`4\left(x - \frac{1}{4}\right)(x + 4)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`
            A = 4, \quad B = 15, \quad C = -4
          `}</BlockMath>
          <P>Find the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = 15^2 - 4 \cdot 4 \cdot (-4) = 225 + 64 = 289
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_1 = \frac{-B + \sqrt{D}}{2A} = \frac{-15 + 17}{8} = \frac{1}{4} >>
            x_2 = \frac{-B - \sqrt{D}}{2A} = \frac{-15 - 17}{8} = -4
          `}</BlockMath>
          <P>Write down the factorization:</P>
          <BlockMath>{math`
            4x^2 + 15x - 4 = 4\left(x - \frac{1}{4}\right)(x + 4)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^2 - 9x - 18</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck factoredForm="2(x - 6)(x + 3/2)" roots={[6, '-3/2']} />
        <ProblemAnswer>
          <BlockMath>{math`2(x - 6)\left(x + \frac{3}{2}\right)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`
            A = 2, \quad B = -9, \quad C = -18
          `}</BlockMath>
          <P>Find the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = (-9)^2 - 4 \cdot 2 \cdot (-18) = 81 + 144 = 225
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_1 = \frac{-B + \sqrt{D}}{2A} = \frac{9 + 15}{4} = 6 >>
            x_2 = \frac{-B - \sqrt{D}}{2A} = \frac{9 - 15}{4} = -\frac{3}{2}
          `}</BlockMath>
          <P>Write down the factorization:</P>
          <BlockMath>{math`
            2x^2 - 9x - 18 = 2(x - 6)\left(x + \frac{3}{2}\right)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 5x - 5</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck
          factoredForm="(x - (-5 + 3*sqrt(5))/2)(x - (-5 - 3*sqrt(5))/2)"
          roots={['(-5 + 3*sqrt(5))/2', '(-5 - 3*sqrt(5))/2']}
        />
        <ProblemAnswer>
          <BlockMath>{math`
            \left(x - \frac{-5 + 3\sqrt{5}}{2}\right)\left(x - \frac{-5 - 3\sqrt{5}}{2}\right)
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`
            A = 1, \quad B = 5, \quad C = -5
          `}</BlockMath>
          <P>Find the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = 5^2 - 4 \cdot 1 \cdot (-5) = 25 + 20 = 45
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_1 = \frac{-B + \sqrt{D}}{2A} = \frac{-5 + 3\sqrt{5}}{2} >>
            x_2 = \frac{-B - \sqrt{D}}{2A} = \frac{-5 - 3\sqrt{5}}{2}
          `}</BlockMath>
          <P>Write down the factorization:</P>
          <BlockMath>{math`
            x^2 + 5x - 5 = \left(x - \frac{-5 + 3\sqrt{5}}{2}\right)\left(x - \frac{-5 - 3\sqrt{5}}{2}\right)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>3x^2 + 2x + 1</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck empty />
        <ProblemAnswer>
          <P>This trinomial has no roots, so it cannot be factored.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`
            A = 3, \quad B = 2, \quad C = 1
          `}</BlockMath>
          <P>Find the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = 2^2 - 4 \cdot 3 \cdot 1 = 4 - 12 = -8 < 0
          `}</BlockMath>
          <P>
            Since the discriminant is negative, the quadratic equation has no roots, which means the quadratic trinomial
            cannot be factored.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 4x + 4</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck factoredForm="(x-2)^2" roots={[2]} />
        <ProblemAnswer>
          <BlockMath>(x-2)^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Identify the coefficients:</P>
          <BlockMath>{math`
            A = 1, \quad B = -4, \quad C = 4
          `}</BlockMath>
          <P>Find the discriminant:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = (-4)^2 - 4 \cdot 1 \cdot 4 = 16 - 16 = 0
          `}</BlockMath>
          <P>Find the roots:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B}{2A} = \frac{4}{2} = 2
          `}</BlockMath>
          <P>Write down the factorization:</P>
          <BlockMath>{math`
            x^2 - 4x + 4 = (x - 2)(x - 2) = (x - 2)^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      The general formula for writing any quadratic trinomial as a product of factors gives us one very neat and
      interesting fact about quadratic trinomials and quadratic equations:
    </P>

    <Important
      $={uniques.quadraticFromAny}
      title="Any two numbers can be roots!"
      snippet={{
        key: true,
        seo: 'Any pair of numbers can be the roots of a quadratic trinomial',
        description: `
          The general factorization formula implies that any two numbers are roots of some quadratic trinomial.
        `,
      }}
    >
      <P>
        The mere fact that the formula <M>A(x-x_1)(x-x_2)</M> exists means that{' '}
        <B accent>for any two numbers there are infinitely many quadratic trinomials</B> whose roots are exactly those
        numbers!
      </P>
      <P>
        Take the numbers <M>5</M> and <M>-2</M>. Plug them in for <M>x_1</M> and <M>x_2</M> in the factorization
        formula, and by choosing any values you want for <M>A</M>, you can write down as many quadratic trinomials as
        you like:
      </P>
      <BlockMath>{math`
        A = 1, \quad (x - 5)(x - (-2)) = \boxed{x^2 - 3x - 10} \\
        A = -3, \quad -3(x - 5)(x - (-2)) = \boxed{-3x^2 + 9x + 30} \\
      `}</BlockMath>
    </Important>

    <H1
      $={uniques.rootsPlane}
      snippet={{
        key: true,
        seo: 'Coordinate plane of roots of quadratic equations',
        title: 'Roots plane',
        description: `
          A geometric visualization of the fact that absolutely any two numbers can be roots of some quadratic trinomial.
        `,
      }}
    >
      The roots plane of quadratic equations
    </H1>

    <P>
      That cool fact that <Dep on={uniques.quadraticFromAny}>any two numbers</Dep> produce a quadratic trinomial can be
      visualized in an equally cool way. You can draw a pair of numbers, that is, roots, as a point on a coordinate
      plane where one axis is responsible for the "first" roots and the other for the "second" ones. Every point on that
      plane represents some quadratic trinomial. Let's call this picture the "roots plane of quadratic trinomials."
      Nice, right? 😎
    </P>

    <Image src={rootsPlane} invert="dark" width="550px" />

    <P>
      We can ignore coefficient <M>A</M> because it cannot affect the roots in any way. All it does is scale the
      resulting coefficients up or down:
    </P>

    <BlockMath>{math`
      A(x-x_1)(x-x_2) = A\left( x^2 - (x_1 + x_2)x + x_1x_2 \right)
    `}</BlockMath>

    <P>So all quadratic trinomials split into two categories:</P>

    <List ordered>
      <Li>
        <P>
          <B>"Rectangular" quadratic trinomials</B>
        </P>
        <P>
          These quadratic trinomials have two roots or one root, can be factored, and appear as a rectangle or a line on
          the roots plane.
        </P>
      </Li>
      <Li>
        <P>
          <B>"Wrong" quadratic trinomials</B>
        </P>
        <P>
          These quadratic trinomials have no roots, cannot be factored, and do not form a rectangle or a line on the
          roots plane.
        </P>
      </Li>
    </List>
  </>
));
