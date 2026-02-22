import { mathRegexp } from '@open-math/shared/utils';
import { QED } from '@open-math/shared/utils';
import { RootsCheck } from '#project/utils/roots';

// #region Assets
//

import completingTheSquare1 from './assets/completing-the-square-1.svg';
import completingTheSquare2 from './assets/completing-the-square-2.svg';
import completingTheSquare3 from './assets/completing-the-square-3.svg';

//
// #endregion

// #region Links
//

const elementaryEquations = $CONTENT.foundations.equations.elementary;
const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const quadraticEquation = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticEquation;
const incompleteQuadratics = $CONTENT.foundations.equations.quadratic.incomplete;
const incompleteC0Roots = $CONTENT.foundations.equations.quadratic.incomplete.article.$c0Roots;

//
// #endregion

// #region Todos
//

/**
 * Add a link to the article on shortened multiplication formulas when it is ready.
 */

/**
 * Add a link to the square root and how to work with it when the article is ready.
 */

//
// #endregion

export const compactFormLabel = 'Compact form';

export default defineProse({
  uniques: {
    whatIsIt: Term,
    completeSimple: Problems,
    completeHard: Problems,
    solvingQuadratics: Problems,
    _expandBrackets: Details,
    _checkGeometric: Details,
    _compensate: Details,
    _completeForEquation: Details,
    _checkRoots: Details,
  },
})(({ uniques }) => (
  <>
    <P>
      We have already learned to determine whether an equation is <Dep on={quadraticEquation}>quadratic</Dep>. We even
      learned to solve their simplified forms — <Ref to={incompleteQuadratics}>incomplete</Ref> quadratic equations. But
      enough half-measures! It's time to learn how to solve any quadratic equation! And the process called{' '}
      <B>completing the square</B> will help us with this.
    </P>

    <H1>What is this "completing" thing?</H1>

    <P>
      There are two wonderful, very useful and frequently used formulas called "square of a sum" and "square of a
      difference" (not to be confused with "difference of squares"!). It is difficult to even call them formulas, these
      are just two different notations for the same thing. They look like this:
    </P>

    <BlockMath>{math`
      (a + b)^2 = a^2 + 2ab + b^2 >>{big}
      (a - b)^2 = a^2 - 2ab + b^2 >>{big}
    `}</BlockMath>

    <P>
      These are two of the three special products formulas. You can verify their correctness if you simply
      <Ref to={uniques._expandBrackets}>expand</Ref> the parentheses on the left side of the equation and combine like
      terms.
    </P>

    <Details $={uniques._expandBrackets} title="Expanding parentheses">
      <P>Let's start with the square of the sum:</P>
      <BlockMath>(a+b)^2</BlockMath>
      <P>Squaring by definition means that this expression is multiplied by itself:</P>
      <BlockMath>(a+b)^2 = (a+b)\cdot(a+b)</BlockMath>
      <P>Now simply expand the parentheses and combine like terms:</P>
      <BlockMath>{math`
        (a+b)^2 = (a+b) \cdot (a+b) \\
        = a \cdot a + a \cdot b + b \cdot a + b \cdot b \\
        = a^2 + ab + ba + b^2 \\
        = a^2 + 2ab + b^2
      `}</BlockMath>
      <QED />

      <Hr />

      <P>Now let's move on to the square of the difference:</P>
      <BlockMath>(a-b)^2</BlockMath>
      <P>Similarly: squaring means multiplying the expression by itself:</P>
      <BlockMath>(a-b)^2 = (a-b)\cdot(a-b)</BlockMath>
      <P>Expand the parentheses and combine like terms:</P>
      <BlockMath>{math`
        (a-b)^2 = (a-b) \cdot (a-b) \\
        = a \cdot a - a \cdot b - b \cdot a + b \cdot b \\
        = a^2 - ab - ba + b^2 \\
        = a^2 - 2ab + b^2
      `}</BlockMath>
      <QED />
    </Details>

    <P>
      Using one of these formulas, we "unpack" the squared expression, getting an expanded one. But since the expression
      can be "unpacked" into a long one, is it possible to reverse the process — <B>"pack"</B> a long expression into a
      squared one? It is possible. Such a process is called <B>completing the square</B>!
    </P>

    <Term
      $={uniques.whatIsIt}
      title="Completing the square"
      snippet={{
        search: ['Completing the square'],
        key: 'What is it?',
        seo: 'What is completing the square?',
        description: `
          "Packing" an expanded expression into a squared binomial.
        `,
      }}
    >
      <P>The process of "packing" an expanded expression into a squared binomial (a parenthesis squared):</P>
      <Diagram>{math`
          flowchart TB
            compact["$$ (a \pm b)^2 $$"] o-->|Expanding| expanded["$$ a^2 \pm 2ab + b^2 $$"]
            expanded o-->|**Completing the square**| compact
            class compact,expanded fill
      `}</Diagram>
      <P>Examples:</P>
      <BlockMath>{math`
        x^2 + 2x + 1 \Rightarrow \green{(x + 1)^2} >>{big}
        16 - 8y + y^2 \Rightarrow \green{(4 - y)^2} >>{big}
        t^2 - t \Rightarrow \green{\left(t - \frac{1}{2}\right)^2} - \frac{1}{4}
      `}</BlockMath>
    </Term>

    <P>
      The last example from the definition looks suspicious, right? That's because the "packing" doesn't always go
      smoothly. We will talk about this below, not essential for now.
    </P>

    <H1
      snippet={{
        key: true,
        seo: 'Why complete the square?',
        title: 'Why do this?',
        description: `
          Completing the square is a powerful tool for transforming expressions and solving quadratic equations.
        `,
      }}
    >
      Why bother?
    </H1>

    <P>
      Most likely, you have one small question... <B>Why the heck do this?</B> Where can completing the square be
      useful? There are actually two reasons:
    </P>

    <List ordered>
      <Li>
        To the great joy of mathematicians (and ours too), completing the square turned out to be the key to solving any
        quadratic equation in general form!
      </Li>
      <Li>
        <P>
          This allows simplifying expressions! Before completing the square, the unknown occurs in the expression twice
          — in the second and first degree.
        </P>
        <BlockMath>{math`9\underset{\text{One}}{\red{x^2}} + 6\underset{\text{Two}}{\red{x}} + 1`}</BlockMath>
        <P>
          After completing the square, the unknown occurs only once. This can be useful not only for solving equations
          but also for other tasks.
        </P>
        <BlockMath>{math`(3\underset{\text{One}}{\brand{x}} + 1)^2`}</BlockMath>
      </Li>
    </List>

    <Important title="Different notations — Same value">
      <P>
        Packed and unpacked forms denote <B accent>the same object</B>, just written differently. All three of the
        following expressions are essentially the same:
      </P>
      <BlockMath>9z^2 + 6z = 3z(3z + 2) = (3z + 1)^2 - 1</BlockMath>
      <P>
        The first is the "unpacked" form, the second with <M>3z</M> factored out, and the third with the completed
        square. Just as numbers <M>{math`\frac{1}{2}`}</M>, <M>{math`\frac{2}{4}`}</M> and <M>0.5</M> — are different
        notations for the same value. In different situations, it is convenient to use different forms of notation!
      </P>
    </Important>

    <P>
      We have learned what completing the square is and why it is needed. Let's get to know this process a little
      better! Let's learn how to perform it ourselves!
    </P>

    <H1>Geometric completion</H1>

    <P>
      Before we start all this abstract fussing with letters, let's first visualize the process. Just like in the good
      old days of Euclid and Pythagoras. And it will immediately become clear to you why the process is called
      "completing the square".
    </P>

    <P>Let's start with this expanded expression:</P>

    <BlockMath>p^2 + 6p + 9</BlockMath>

    <P>
      Let's try to pack it into a squared expression, that is, complete the square. To do this, let's represent this
      expanded expression as the sum of the areas of three figures:
    </P>

    <List ordered>
      <Li>
        A square with side <M>p</M>. Its area is <M>p^2</M>.
      </Li>
      <Li>
        A rectangle with sides <M>6</M> and <M>p</M>. Its area is <M>6p</M>.
      </Li>
      <Li>
        A square with area <M>9</M>.
      </Li>
    </List>

    <Image src={completingTheSquare1} width="450px" invert="dark" />

    <P>
      A rectangle with area <M>6p</M> can be "cut" into two identical rectangles with sides <M>3</M> and <M>p</M>. And
      the square with area <M>9</M> has sides equal to <M>3</M>. Notice how we intentionally obtained two identical
      numbers (threes) in the middle and on the right side of the expression!
    </P>

    <Image src={completingTheSquare2} width="500px" invert="dark" />

    <P>
      Now all these figures can be combined with each other along sides with equal lengths. This creates one large
      square with side <M>p + 3</M>!
    </P>

    <Image src={completingTheSquare3} width="500px" invert="dark" />

    <P>
      The total area of this large square is <M>(p + 3)\cdot(p+3) = (p+3)^2</M>. We didn't add or remove anything, only
      cut and rearranged the figures. So, the original sum of areas <M>p^2 + 6p + 9</M> and the resulting area
      <M>(p + 3)^2</M> are the same!
    </P>

    <BlockMath>{math`
      \underbrace{p^2 + 6p + 9}_{\text{Square + Rectangle + Square}} = \underbrace{(p+3)^2}_{\text{Large Square}}
    `}</BlockMath>

    <P>
      The correctness of the result obtained can be <Ref to={uniques._checkGeometric}>verified</Ref> simply by expanding
      the parentheses and combining like terms.
    </P>

    <Details $={uniques._checkGeometric} title="Verifying the equality of areas">
      <P>Let's prove the following equality:</P>
      <BlockMath>p^2 + 6p + 9 = (p + 3)^2</BlockMath>
      <P>Expand the parentheses on the right side of the equation:</P>
      <BlockMath>{math`
        (p+3)^2 = (p+3) \cdot (p+3) \\
        = p \cdot p + p \cdot 3 + 3 \cdot p + 3 \cdot 3 \\
        = p^2 + 3p + 3p + 9 \\
        = p^2 + 6p + 9
      `}</BlockMath>
      <P>We got the same expression as on the left side of the equation. Everything adds up!</P>
      <QED />
    </Details>

    <P>
      Now you have visually seen what completing the square is. And the name no longer seems so mysterious. Because from
      the available pieces: unknown square <M>p^2</M>, rectangle <M>6p</M> and another square <M>3^2</M> we assemble or{' '}
      <B>complete</B> a new large square with side <M>p + 3</M>.
    </P>

    <H1>Algebraic completion</H1>

    <P>
      No matter how good the visualization looks, it has a few downsides. There isn't always space at hand to draw
      rectangles and squares. Also, it only works well with positive terms. If some terms are subtracted, then you have
      to change the approach and get perverted in every way.
    </P>

    <P>
      And this is exactly where abstractions and algebra come to our aid. It doesn't give a damn about drawings, only
      numbers and formulas, only hardcore! Let's learn to carry out the process of completing the square manually and
      without any drawings. Let's start with this expanded expression:
    </P>

    <BlockMath>25p^2 - 20p + 4</BlockMath>

    <P>
      To begin with, we need to understand <Ref to={uniques.whatIsIt}>which special product formula</Ref> we can match
      this expression to: square of a sum <M>(a+b)^2</M> or square of a difference <M>(a-b)^2</M>. We see a negative
      sign in the middle term, which means we will pack into the square of a difference <M>(a-b)^2</M>.
    </P>

    <P>
      Rewrite this expression so that it takes the form <M>a^2 - 2ab + b^2</M> (something squared minus two multiplied
      by something plus something squared). In our case <M>25p^2</M> can be represented as <M>(5p)^2</M>. In the center,
      the term <M>-20p</M> can be represented as <M>-2 \cdot 5p \cdot 2</M>. On the right, the number <M>4</M> can be
      represented as <M>2^2</M>.
    </P>

    <BlockMath>{math`
      \underbrace{(\brand{5p})^2}_{\normalsize\brand{a}^2} - \underbrace{2 \cdot (\brand{5p}) \cdot \green{2}}_{\normalsize 2\cdot\brand{a}\cdot\green{b}} + \underbrace{\green{2}^2}_{\normalsize\green{b}^2}
    `}</BlockMath>

    <P>
      We have successfully reduced the expression to the form of the expanded square of a difference. Notice that the
      role of <M>a</M> is played by <M>5p</M>, and <M>b</M> by the number <M>2</M>. So we can pack this expression into
      the square of a difference
      <M>(a-b)^2</M>:
    </P>

    <BlockMath>{math`(\underset{a}{5p} - \underset{b}{2})^2`}</BlockMath>

    <P>Completing the square went successfully and without any drawings!</P>

    <BlockMath>{math`
      25p^2 - 20p + 4 \\
      = (5p)^2 - 2 \cdot 5p \cdot 2 + 2^2 \\
      = \boxed{(5p - 2)^2}
    `}</BlockMath>

    <P>Practice performing this process on a few examples to get used to it:</P>

    <Problems $={uniques.completeSimple} title="Completing the square" level="example">
      <P>Algebraically complete the square in the expression:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 10x + 25</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(x + 5)^2')} />
        <ProblemHint>
          Pay attention to <M>25</M>. This is the square of the number <M>5</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>(x + 5)^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see two pluses, which means we can pack this expression into the square of a sum <M>(a+b)^2</M>. To do
            this, it must be brought to the form <M>a^2 + 2ab + b^2</M>.
          </P>
          <P>
            On the right, the number <M>25</M> can be represented as <M>5^2</M>. This means that in the center, the
            number <M>10</M> must be split so that we definitely get the number <M>2</M> (required for the formula) and{' '}
            <M>5</M> (to match <M>5^2</M>). We get:
          </P>
          <BlockMath>{math`\brand{x}^2 + 2\cdot \brand{x} \cdot \green{5} + \green{5}^2`}</BlockMath>
          <P>
            The role of <M>a</M> is played by <M>x</M>, and <M>b</M> by the number <M>5</M>. Then the packed expression
            will look like this:
          </P>
          <BlockMath>(x+5)^2</BlockMath>
          <P>Result:</P>
          <BlockMath>x^2 + 10x + 25 = (x + 5)^2</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>y^2 - 4y + 4</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(y - 2)^2')} />
        <ProblemHint>
          Pay attention to <M>4</M>. This is the square of the number <M>2</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>(y - 2)^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see a negative sign, which means we can pack this expression into the square of a difference{' '}
            <M>(a-b)^2</M>. To do this, it must be brought to the form <M>a^2 - 2ab + b^2</M>.
          </P>
          <P>
            On the right, the number <M>4</M> can be represented as <M>2^2</M>. This means that in the center, the
            number <M>-4</M> must be split so that we definitely get the number <M>2</M> (required for the formula) and{' '}
            <M>2</M> (to match <M>2^2</M>). We get:
          </P>
          <BlockMath>{math`\brand{y}^2 - 2\cdot \brand{y} \cdot \green{2} + \green{2}^2`}</BlockMath>
          <P>
            The role of <M>a</M> is played by <M>y</M>, and <M>b</M> by the number <M>2</M>. Then the packed expression
            will look like this:
          </P>
          <BlockMath>(y - 2)^2</BlockMath>
          <P>Result:</P>
          <BlockMath>y^2 - 4y + 4 = (y - 2)^2</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>4z^2 - 12z + 9</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(2z - 3)^2')} />
        <ProblemHint>
          The left side can be represented as the square of <M>2z</M>, and the right side as the square of <M>3</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>(2z - 3)^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see a negative sign, which means we can pack this expression into the square of a difference{' '}
            <M>(a-b)^2</M>. To do this, it must be brought to the form <M>a^2 - 2ab + b^2</M>.
          </P>
          <P>
            On the left, the term <M>4z^2</M> can be represented as <M>(2z)^2</M>. On the right, the number <M>9</M> can
            be represented as <M>3^2</M>. This means that in the center, the term <M>-12z</M> must be split so that we
            definitely get the number <M>2</M> (required for the formula), <M>2z</M> (to match <M>(2z)^2</M>) and{' '}
            <M>3</M> (to match <M>3^2</M>). We get:
          </P>
          <BlockMath>{math`(\brand{2z})^2 - 2 \cdot \brand{2z} \cdot \green{3} + \green{3}^2`}</BlockMath>
          <P>
            The role of <M>a</M> is played by <M>2z</M>, and <M>b</M> by the number <M>3</M>. Then the packed expression
            will look like this:
          </P>
          <BlockMath>(2z - 3)^2</BlockMath>
          <P>Result:</P>
          <BlockMath>4z^2 - 12z + 9 = (2z - 3)^2</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>144 + 48t + 4t^2</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(12 + 2t)^2')} />
        <ProblemHint>
          The left side can be represented as the square of <M>12</M>, and the right side as the square of <M>2t</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>(12 + 2t)^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see pluses, which means we can pack this expression into the square of a sum <M>(a+b)^2</M>. To do this,
            it must be brought to the form <M>a^2 + 2ab + b^2</M>.
          </P>
          <P>
            On the left, the number <M>144</M> can be represented as <M>12^2</M>. On the right, the term <M>4t^2</M> can
            be represented as <M>(2t)^2</M>. This means that in the center, the term <M>48t</M> must be split so that we
            definitely get the number <M>2</M> (required for the formula), <M>12</M> (to match <M>12^2</M>) and{' '}
            <M>2t</M> (to match <M>(2t)^2</M>). We get:
          </P>
          <BlockMath>{math`(\brand{12})^2 + 2 \cdot \brand{12} \cdot \green{2t} + (\green{2t})^2`}</BlockMath>
          <P>
            The role of <M>a</M> is played by <M>12</M>, and <M>b</M> by the term <M>2t</M>. Then the packed expression
            will look like this:
          </P>
          <BlockMath>(12 + 2t)^2</BlockMath>
          <P>Result:</P>
          <BlockMath>144 + 48t + 4t^2 = (12 + 2t)^2</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{k^2}{4} + k + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(1/2k + 1)^2', '(k/2 + 1)^2')} />
        <ProblemHint>
          The left side represents the square of <M>k/2</M>, and the right side represents the square of <M>1</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`\left(\frac{k}{2} + 1\right)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see pluses, which means we can pack this expression into the square of a sum <M>(a+b)^2</M>. To do this,
            it must be brought to the form <M>a^2 + 2ab + b^2</M>.
          </P>
          <P>
            On the left, the term <M>k^2/4</M> can be represented as <M>(k/2)^2</M>. On the right, the number <M>1</M>{' '}
            can be represented as <M>1^2</M>. In the center, the coefficient before <M>k</M> is <M>1</M>. A <M>2</M> can
            be obtained if we rewrite it as <M>{math`2\cdot\frac{1}{2}`}</M>. We get:
          </P>
          <BlockMath>{math`\left(\brand{\frac{k}{2}}\right)^2 + 2 \cdot \brand{\frac{1}{2}k} \cdot \green{1} + \green{1}^2`}</BlockMath>
          <P>
            The role of <M>a</M> is played by <M>k/2</M>, and <M>b</M> by the number <M>1</M>. Then the packed
            expression will look like this:
          </P>
          <BlockMath>{math`\left(\frac{k}{2} + 1\right)^2`}</BlockMath>
          <P>Result:</P>
          <BlockMath>{math`\frac{k^2}{4} + k + 1 = \left(\frac{k}{2} + 1\right)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1
      snippet={{
        seo: 'Completing the square with incomplete terms',
        description: `
          Sometimes, an expression lacks the necessary components for perfect "packing" into a square of a sum or difference.
          Then "tails" appear...
        `,
      }}
    >
      Completing with incomplete terms
    </H1>

    <P>
      Remember that last weird example from the <Ref to={uniques.whatIsIt}>definition</Ref>? For some reason, there was
      an ugly "tail" in the form <M>-1/4</M> next to the squared expression. We'll deal with this right now. Until now,
      all components for completing the square were inherent in the original expression. But sometimes a component is
      missing. Let's consider such an example:
    </P>

    <BlockMath>x^2 + 5x</BlockMath>

    <P>
      We see a plus, which means we can try to pack this expression into the square of a sum <M>(a+b)^2</M>. To do this,
      it must be brought to the form <M>a^2 + 2ab + b^2</M>. On the left we already have <M>x^2</M>, which means
      <M>a = x</M>. But then problems begin. We don't have a two for <M>2ab</M>, as well as <M>b</M> and <M>b^2</M>.
      Such situations are encountered constantly.
    </P>

    <P>
      Fortunately, nothing prevents us from adding missing terms and immediately{' '}
      <Ref to={uniques._compensate}>compensating</Ref> for them, so that the total value of the expression remains
      unchanged. For example, we can multiply by <M>2</M> and divide by <M>2</M> right there. The final value has not
      changed, but <B>we have added the necessary terms</B>:
    </P>

    <Details $={uniques._compensate} title="Adding and compensating">
      <P>
        Let's take for example the number <M>5</M>. We can add anything to it. If we take it back—that is, compensate—it
        will remain the number <M>5</M>.
      </P>
      <BlockMath>{math`
        5 = \yellow{2} \cdot 5 \cdot \yellow{\frac{1}{2}} = \cancel{2} \cdot 5 \cdot \frac{1}{\cancel{2}} = 5 \\
        5 = \yellow{3t} + 5 - \yellow{3t} = \cancel{3t} + 5 - \cancel{3t} = 5
      `}</BlockMath>
      <P>
        Compensation requires the opposite action. If we multiply, then compensation is division. If we add, then
        compensation is subtraction. And so on. The main thing is to ensure that the rules of arithmetic are not
        violated!
      </P>
    </Details>

    <BlockMath>{math`
      x^2 + 5x \\
      x^2 + \yellow{2} \cdot x \cdot 5 \cdot \yellow{\frac{1}{2}} \\
      x^2 + 2 \cdot x \cdot \frac{5}{2}
    `}</BlockMath>

    <P>
      We already have <M>a</M>, which is <M>x</M>. There is also <M>2ab</M>, which is{' '}
      <M>{math`2 \cdot x \cdot \frac{5}{2}`}</M>. Then <M>b</M> is <M>5/2</M>. To get the "packable" form of the square
      of a sum, all that remains is to add <M>b^2</M>, that is <M>25/4</M>, and immediately subtract it, so that the
      final value does not change:
    </P>

    <BlockMath>{math`
      \underbrace{x^2 + 2 \cdot x \cdot \frac{5}{2} + \yellow{\left(\frac{5}{2}\right)^2}}_{\normalsize a^2 + 2 \cdot a \cdot b + b^2} - \yellow{\left(\frac{5}{2}\right)^2} \\
      \\
      \left(x + \frac{5}{2}\right)^2 - \frac{25}{4}
    `}</BlockMath>

    <P>
      Completing the square was successful, even though we are left with a "tail" in the form of an extra constant. This
      "tail" compensates for everything we added to complete the square:
    </P>

    <BlockMath>{math`
      x^2 + 5x
      = \underbrace{\left(x + \frac{5}{2}\right)^2}_{\text{Full Square}} - \underbrace{\frac{25}{4}}_{\text{Tail}}
    `}</BlockMath>

    <P>
      As you can see, we can add absolutely any term we need. The main thing is not to forget to immediately compensate
      for it! In fact, adding terms to bring expressions to the desired form is a powerful and regularly applied trick
      in all of mathematics. It would seem that we, on the contrary, clutter the expression by adding extra terms, but
      hell no, because part of these terms will be "packed"!
    </P>

    <P>Practice the advanced process of completing the square by adding the necessary terms:</P>

    <Problems $={uniques.completeHard} title="Completing the square with incomplete terms" level="example">
      <P>Complete the square in the expression by adding and compensating terms:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2-x</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(x - 1/2)^2 - 1/4')} />
        <ProblemHint>
          A two from one can be obtained if one is represented as <M>{math`2\cdot\frac{1}{2}`}</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`\left(x - \frac{1}{2}\right)^2 - \frac{1}{4}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see a negative sign at the term with <M>x</M>, which means we can pack this expression into the square of
            a difference <M>(a-b)^2</M>. To do this, it must be brought to the form <M>a^2 - 2ab + b^2</M>.
          </P>
          <P>In the center, we are missing a two. We add it and immediately compensate:</P>
          <BlockMath>{math`
            x^2 - \yellow{2} \cdot x \cdot \yellow{\frac{1}{2}}
          `}</BlockMath>
          <P>
            The fraction <M>1/2</M> naturally becomes our <M>b</M>. Now to complete the square, we lack <M>b^2</M>, that
            is <M>{math`\left(\frac{1}{2}\right)^2`}</M>. Add it and immediately subtract it, so as not to change the
            value of the expression:
          </P>
          <BlockMath>{math`
            \underbrace{x^2 - 2\cdot x \cdot \frac{1}{2} + \yellow{\left(\frac{1}{2}\right)^2}}_{\normalsize a^2 - 2\cdot a\cdot b + b^2} - \yellow{\left(\frac{1}{2}\right)^2}
          `}</BlockMath>
          <P>Result:</P>
          <BlockMath>{math`
            x^2 - x = \left(x - \frac{1}{2}\right)^2 - \frac{1}{4}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>4y^2 + 28y</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(2y + 7)^2 - 49')} />
        <ProblemHint>
          In the center we must "reserve" two twos: one from <M>4y^2</M>, and the other required by the square of a sum
          formula.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(2y + 7)^2 - 49`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see a plus, which means we can pack this expression into the square of a sum <M>(a+b)^2</M>. To do this,
            it must be brought to the form <M>a^2 + 2ab + b^2</M>.
          </P>
          <P>
            On the left, the term <M>4y^2</M> can be represented as <M>(2y)^2</M>. This means one two is already
            "reserved" for <M>a</M>. Another two is needed for the square of a sum formula. Therefore, in the center, we
            need to add two twos and of course immediately compensate for them:
          </P>
          <BlockMath>{math`
            \underbrace{(2y)^2}_{\normalsize a^2} + \yellow{2} \cdot \underbrace{\yellow{2}y}_{\normalsize a} \cdot \underbrace{\yellow{\frac{1}{4}} \cdot 28}_{\normalsize b}
          `}</BlockMath>
          <P>
            The term <M>28 \cdot 1/4</M> naturally becomes our <M>b</M>. Let's reduce the fraction to simplify the
            numbers:
          </P>
          <BlockMath>{math`
            (2y)^2 + 2 \cdot 2y \cdot 7
          `}</BlockMath>
          <P>
            To complete the square, we only lack <M>b^2</M>, which is <M>7^2</M>. Add it and immediately subtract it, so
            as not to change the value of the expression:
          </P>
          <BlockMath>{math`
            \underbrace{(2y)^2 + 2 \cdot 2y \cdot 7 + \yellow{7^2}}_{\normalsize a^2 + 2\cdot a \cdot b + b^2} - \yellow{7^2}
          `}</BlockMath>
          <P>Result:</P>
          <BlockMath>{math`4y^2 + 28y = (2y + 7)^2 - 49`}</BlockMath>
          <Hr />
          <P>
            Notice that in the solution above, we added two twos and then compensated for them. Because of this, we had
            to simplify afterwards. It was possible (and <B>necessary</B>) to do it more simply—take these two twos from
            the already existing number <M>28</M>!
          </P>
          <BlockMath>{math`
            4y^2 + 28y = \\
            (2y)^2 + \underbrace{2 \cdot 2y \cdot 7}_{\normalsize 2 \cdot 2 \cdot 7 = 28} + \yellow{7^2} - \yellow{7^2} = \\
            (2y + 7)^2 - 49
          `}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          <B>Always, when possible</B>, try to form the necessary terms from already existing numbers. This will avoid
          unnecessary actions, appearance of large numbers and simplify the solution! This applies not only to
          completing the square but also to other processes in mathematics.
        </ProblemNote>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>16t^2 + 24t - 20</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(4t + 3)^2 - 29')} />
        <ProblemHint>
          Just ignore the <M>-20</M> at the end.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(4t + 3)^2 - 29`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see a plus, which means we can pack this expression into the square of a sum <M>(a+b)^2</M>. To do this,
            it must be brought to the form <M>a^2 + 2ab + b^2</M>.
          </P>
          <P>
            On the left, the term <M>16t^2</M> can be represented as <M>(4t)^2</M>. This means we already have <M>a</M>.
            In the center, the term <M>24t</M> can be represented as <M>2 \cdot 4t \cdot 3</M>. Naturally, <M>b</M>{' '}
            becomes <M>3</M>. For the square of a sum formula, we only lack <M>b^2</M>, which is <M>3^2</M>. Add it and
            immediately subtract it, so as not to change the value of the expression:
          </P>
          <BlockMath>{math`
            \underbrace{(4t)^2 + 2 \cdot 4t \cdot 3 + \yellow{3^2}}_{\normalsize a^2 + 2\cdot a \cdot b + b^2} - \yellow{3^2} - 20
          `}</BlockMath>
          <P>Result:</P>
          <BlockMath>{math`16t^2 + 24t - 20 = (4t + 3)^2 - 29`}</BlockMath>
          <P>
            Notice how we completely ignored the number <M>-20</M> 🤭. It simply became part of the formed "tail".
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>-5-7k+25k^2</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(5k - 7/10)^2 - 549/100')} />
        <ProblemHint>
          To confuse you, the entire expression was reversed. Just rearrange the terms so that the term with the squared
          unknown is first.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`\left(5k - \frac{7}{10}\right)^2 - \frac{549}{100}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The sum does not change by swapping the terms, so feel free to rearrange them so that the term with the
            squared unknown is first:
          </P>
          <BlockMath>25k^2 - 7k - 5</BlockMath>
          <P>
            We see a negative sign, which means we can pack this expression into the square of a difference{' '}
            <M>(a-b)^2</M>. To do this, it must be brought to the form <M>a^2 - 2ab + b^2</M>.
          </P>
          <P>
            On the left, the term <M>25k^2</M> can be represented as <M>(5k)^2</M>. This means we already have <M>a</M>.
            In the center from the term <M>-7k</M>, there is no way to pull out either a two (for the formula), or the
            number <M>5</M> (for <M>a</M>). Therefore, introduce these factors and immediately compensate for them:
          </P>
          <BlockMath>{math`
            \underbrace{25k^2}_{\normalsize a^2} - \yellow{2} \cdot \underbrace{\yellow{5}k}_{\normalsize a} \cdot \underbrace{\yellow{\frac{1}{2\cdot 5}}\cdot7}_{\normalsize b} - 5
          `}</BlockMath>
          <P>
            The term <M>7 \cdot 1/(2\cdot 5)</M> naturally becomes our <M>b</M>. Now to complete the square, we lack{' '}
            <M>b^2</M>. Add it and immediately subtract it, so as not to change the value of the expression:
          </P>
          <BlockMath>{math`
            \underbrace{25k^2 - 2 \cdot 5k \cdot \frac{7}{10} + \yellow{\left(\frac{7}{10}\right)^2}}_{\normalsize a^2 - 2\cdot a \cdot b + b^2} - \yellow{\left(\frac{7}{10}\right)^2} - 5
          `}</BlockMath>
          <P>Combine tails:</P>
          <BlockMath>{math`
            -5 - 7k + 25k^2 = \\
            \left(5k - \frac{7}{10}\right)^2 - \frac{49}{100} - 5 = \left(5k - \frac{7}{10}\right)^2 - \frac{49}{100} - \frac{500}{100} = \\
            \left(5k - \frac{7}{10}\right)^2 - \frac{549}{100}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>3p^2 - 8p</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(sqrt(3)p - 4/sqrt(3))^2 - 16/3')} />
        <ProblemHint>Square root of three won't be clean. Take the "messy" root.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`\left(\sqrt{3}p - \frac{4}{\sqrt{3}}\right)^2 - \frac{16}{3}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We see a negative sign, which means we can pack this expression into the square of a difference{' '}
            <M>(a-b)^2</M>. To do this, it must be brought to the form <M>a^2 - 2ab + b^2</M>.
          </P>
          <P>
            On the left, the term <M>3p^2</M> can be represented as <M>{math`(\sqrt{3}p)^2`}</M>. This means we already
            have <M>a</M>. In the center, from the eight, we can borrow the two we need for the formula. But the square
            root of three will have to be added and immediately compensated for, since it is not in the original
            expression. We get:
          </P>
          <BlockMath>{math`
            \underbrace{3p^2}_{\normalsize a^2} - \yellow{2} \cdot \underbrace{\yellow{\sqrt{3}}p}_{\normalsize a} \cdot \underbrace{\yellow{\frac{1}{\sqrt{3}}}4}_{\normalsize b}
          `}</BlockMath>
          <P>
            The term <M>{math`4 \cdot 1/\sqrt{3}`}</M> naturally becomes our <M>b</M>. Now to complete the square, we
            lack <M>b^2</M>. Add it and immediately subtract it, so as not to change the value of the expression:
          </P>
          <BlockMath>{math`
            \underbrace{3p^2 - 2 \cdot \sqrt{3}p \cdot \frac{4}{\sqrt{3}} + \yellow{\left(\frac{4}{\sqrt{3}}\right)^2}}_{\normalsize a^2 - 2\cdot a \cdot b + b^2} - \yellow{\left(\frac{4}{\sqrt{3}}\right)^2}
          `}</BlockMath>
          <P>Result:</P>
          <BlockMath>{math`
            3p^2 - 8p = \left(\sqrt{3}p - \frac{4}{\sqrt{3}}\right)^2 - \frac{16}{3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      Congratulations, you officially learned how to complete the square in any situation! Pretty cool, huh? Can't see a
      happy face! Rejoice harder!
    </P>

    <H1
      snippet={{
        key: 'Solving equations',
        seo: 'Solving quadratic equations by completing the square',
        description: `
          Completing the square is the key to solving absolutely any quadratic equations.
        `,
      }}
    >
      Solving quadratic equations
    </H1>

    <P>
      Maybe you didn't even notice this, but you have already learned how to solve quadratic equations, any of them! The
      thing is, completing the square allows us to easily move from a quadratic equation to a regular linear one
      (without powers), which is solved elementarily. Let's try to solve our first ever full quadratic equation:
    </P>

    <BlockMath>x^2 + 6x - 7 = 0</BlockMath>

    <P>
      First, complete the square of the expression on the left side of the equation. We are missing terms for
      completion, but we already <Ref to={uniques._completeForEquation}>know how to work</Ref> with such situations.
    </P>

    <Details $={uniques._completeForEquation} title="Completing the square">
      <BlockMath>{math`
        x^2 + 6x - 7 = 0 \\
        x^2 + 2\cdot x \cdot 3 - 7 = 0 \\
        x^2 + 2\cdot x \cdot 3 + \yellow{3^2} - \yellow{3^2} - 7 = 0 \\
        (x + 3)^2 - 9 - 7 = 0 \\
        (x + 3)^2 - 16 = 0
      `}</BlockMath>
    </Details>

    <BlockMath>(x + 3)^2 - 16 = 0</BlockMath>

    <P>
      Isolate the completed square, that is, leave it alone on one side of the equation, and move all other terms to the
      other side. To do this, by the <Dep on={sameActionRule}>same action rule</Dep> add number <M>16</M> to both parts
      of the equation:
    </P>

    <BlockMath>(x+3)^2 = 16</BlockMath>

    <P>
      For convenience, replace the expression in parentheses <M>(x+3)</M> with variable <M>t</M> (from the word{' '}
      <I>
        <B>t</B>emporary
      </I>{' '}
      — but actually any letter could have been chosen):
    </P>

    <BlockMath>t^2 = 16</BlockMath>

    <P>
      Now let's use our brains a bit. A number <M>t</M> is squared—that is, multiplied by itself—and we get
      <M>16</M>. What number is this? Of course, it's either <M>4</M>, or <M>-4</M>! So we get two possible values for{' '}
      <M>t</M>:
    </P>

    <BlockMath>{math`t_1 = 4 >>{big} t_2 = -4`}</BlockMath>

    <P>
      But we are looking not for <M>t</M>, but for <M>x</M>. Therefore, perform the reverse substitution, solve two
      sub-equations and get two roots of the original equation:
    </P>

    <BlockMath>{math`
      \overbrace{x_1 + 3}^{\small t_1} = 4 \\ x_1 = 4 - 3 \\ \boxed{x_1 = 1} >>{big}
      \overbrace{x_2 + 3}^{\small t_2} = -4 \\ x_2 = -4 - 3 \\ \boxed{x_2 = -7}
    `}</BlockMath>

    <P>
      Congratulations, you just solved your first full quadratic equation! The equation <M>x^2 + 6x - 7 = 0</M> has two
      solutions: <M>1</M> and <M>-7</M>. You can verify the correctness of this solution by
      <Ref to={uniques._checkRoots}>substituting</Ref> them into the original equation and checking for a true equality.
    </P>

    <Details $={uniques._checkRoots} title="Trust, but verify">
      <P>
        Let's check that <M>x_1 = 1</M> and <M>x_2 = -7</M> are indeed solutions to the equation <M>x^2 + 6x - 7 = 0</M>
        .
      </P>
      <P>
        Substitute <M>x_1 = 1</M> into the original equation:
      </P>
      <BlockMath>{math`
        x^2 + 6x - 7 = 0 \\
        1^2 + 6\cdot1 - 7 = 0 \\
        1 + 6 - 7 = 0 \\
        0 = 0
      `}</BlockMath>
      <P>
        Substitute <M>x_2 = -7</M> into the original equation:
      </P>
      <BlockMath>{math`
        x^2 + 6x - 7 = 0 \\
        (-7)^2 + 6\cdot(-7) - 7 = 0 \\
        49 - 42 - 7 = 0 \\
        0 = 0
      `}</BlockMath>
      <P>
        In both cases we got a true equality. So, both numbers <M>1</M> and <M>-7</M> are indeed solutions to the
        original equation!
      </P>
    </Details>

    <P>Let's try to solve some more quadratic equations and see what surprises they might have in store.</P>

    <Problems $={uniques.solvingQuadratics} title="Quadratic equations via completing the square" level="example">
      <P>Solve the quadratic equation by completing the square:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 2x - 35 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-5, 7]} />
        <ProblemAnswer>
          Roots of the equation: <M>-5</M> and <M>7</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>Complete the square on the left:</P>
          <BlockMath>{math`
            x^2 - 2x - 35 = \\
            \underbrace{x^2 - 2 \cdot x \cdot 1 + \yellow{1^2}}_{\normalsize a^2 - 2\cdot a \cdot b + b^2} - \yellow{1^2} - 35 = \\
            (x - 1)^2 - 1 - 35 = \\
            (x - 1)^2 - 36
          `}</BlockMath>
          <P>We get this packed quadratic equation:</P>
          <BlockMath>(x - 1)^2 - 36 = 0</BlockMath>
          <P>Isolate the completed square:</P>
          <BlockMath>(x - 1)^2 = 36</BlockMath>
          <P>Substitute the expression in parentheses with a variable:</P>
          <BlockMath>t^2 = 36</BlockMath>
          <P>
            Find two possible values for <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 6 >>{big} t_2 = -6`}</BlockMath>
          <P>Perform the reverse substitution and find the roots of the original equation:</P>
          <BlockMath>{math`
            \overbrace{x_1 - 1}^{\small t_1} = 6 \\ x_1 = 6 + 1 \\ \boxed{x_1 = 7} >>{big}
            \overbrace{x_2 - 1}^{\small t_2} = -6 \\ x_2 = -6 + 1 \\ \boxed{x_2 = -5}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>y^2 - y - 1 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['(1+sqrt(5))/2', '(1-sqrt(5))/2']} />
        <ProblemHint>External simplicity can be deceptive. Sometimes the root is not calculated cleanly...</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`
            y_1 = \frac{1 + \sqrt{5}}{2} >>{big} y_2 = \frac{1 - \sqrt{5}}{2}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Complete the square on the left:</P>
          <BlockMath>{math`
            y^2 - y - 1 = \\
            \underbrace{y^2 - \yellow{2} \cdot y \cdot \yellow{\frac{1}{2}} + \yellow{\left(\frac{1}{2}\right)^2}}_{\normalsize a^2 - 2\cdot a \cdot b + b^2} - \yellow{\left(\frac{1}{2}\right)^2} - 1 = \\
            \left(y - \frac{1}{2}\right)^2 - \frac{1}{4} - 1 = \\
            \left(y - \frac{1}{2}\right)^2 - \frac{5}{4}
          `}</BlockMath>
          <P>We get this packed quadratic equation:</P>
          <BlockMath>{math`\left(y - \frac{1}{2}\right)^2 - \frac{5}{4} = 0`}</BlockMath>
          <P>Isolate the completed square:</P>
          <BlockMath>{math`\left(y - \frac{1}{2}\right)^2 = \frac{5}{4}`}</BlockMath>
          <P>Substitute the expression in parentheses with a variable:</P>
          <BlockMath>{math`t^2 = \frac{5}{4}`}</BlockMath>
          <P>
            Find two possible values for <M>t</M>: the positive and negative square roots of the fraction <M>5/4</M>:
          </P>
          <BlockMath>{math`
            t_1 = \sqrt{\frac{5}{4}} = \frac{\sqrt{5}}{2} >>{big} t_2 = -\sqrt{\frac{5}{4}} = -\frac{\sqrt{5}}{2}
          `}</BlockMath>
          <P>Perform the reverse substitution and find the roots of the original equation:</P>
          <BlockMath>{math`
            \overbrace{y_1 - \frac{1}{2}}^{\small t_1} = \frac{\sqrt{5}}{2} \\ \boxed{y_1 = \frac{1 + \sqrt{5}}{2}} >>{big}
            \overbrace{y_2 - \frac{1}{2}}^{\small t_2} = -\frac{\sqrt{5}}{2} \\ \boxed{y_2 = \frac{1 - \sqrt{5}}{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>-z^2 + 5z - 9 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemHint>
          Multiply both sides of the equation by <M>-1</M>, otherwise you won't be able to complete the square.
        </ProblemHint>
        <ProblemAnswer>The equation has no roots.</ProblemAnswer>
        <ProblemSolution>
          <P>
            At first glance, it doesn't look like we can complete the square here or fit it into the square of a sum or
            difference formula. But notice that if we change all the signs in the expression on the left to their
            opposites, then we get an expression suspiciously similar to the expanded form of the square of a
            difference. Let's multiply both sides of the equation by
            <M>-1</M> according to the <Dep on={sameActionRule}>same action rule</Dep>:
          </P>
          <BlockMath>z^2 - 5z + 9 = 0</BlockMath>
          <P>Complete the square on the left:</P>
          <BlockMath>{math`
            z^2 - 5z + 9 = \\
            \underbrace{z^2 - \yellow{2} \cdot z \cdot \yellow{\frac{1}{2}}5 + \yellow{\left(\frac{5}{2}\right)^2}}_{\normalsize a^2 - 2\cdot a \cdot b + b^2} - \yellow{\left(\frac{5}{2}\right)^2} + 9 = \\
            \left(z - \frac{5}{2}\right)^2 - \frac{25}{4} + 9 = \\
            \left(z - \frac{5}{2}\right)^2 + \frac{11}{4}
          `}</BlockMath>
          <P>We obtain this packed quadratic equation:</P>
          <BlockMath>{math`\left(z - \frac{5}{2}\right)^2 + \frac{11}{4} = 0`}</BlockMath>
          <P>
            Isolate the completed square. To do this, subtract the fraction <M>11/4</M> from both sides of the equation.
          </P>
          <BlockMath>{math`\left(z - \frac{5}{2}\right)^2 = -\frac{11}{4}`}</BlockMath>
          <P>
            Whatever number we substitute for <M>z</M>, it will be squared, and thus we will never obtain a negative
            number <B>on the left</B>. But <B>on the right</B>, a negative number is required. Since there are no
            numbers that make this equation true, this equation has no solutions!
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>k^2 + 10k + 49 = 24 - 10k - 3k^2</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots="-5/2" />
        <ProblemHint>
          Using the <Dep on={sameActionRule}>same action rule</Dep>, combine like terms and bring the whole equation to{' '}
          <Dep on={quadraticEquation}>general form</Dep>.
        </ProblemHint>
        <ProblemAnswer>
          The equation has a single root: <M>-5/2</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            First, using the <Dep on={sameActionRule}>same action rule</Dep>, combine like terms and bring the whole
            equation to <Dep on={quadraticEquation}>general form</Dep>. Collect all terms on the left side of the
            equation:
          </P>
          <BlockMath>{math`
            k^2 + 10k + 49 = 24 - 10k - 3k^2 \\
            k^2 + 10k + 49 - 24 + 10k + 3k^2 = 0 \\
            4k^2 + 20k + 25 = 0
          `}</BlockMath>
          <P>
            Complete the square on the left. This is a rare case where it can be completed immediately, without the need
            to add extra terms!
          </P>
          <BlockMath>{math`
            4k^2 + 20k + 25 =
            \underbrace{(2k)^2 + 2 \cdot 2k \cdot 5 + 5^2}_{\normalsize a^2 + 2\cdot a \cdot b + b^2} =
            (2k + 5)^2
          `}</BlockMath>
          <P>We get the equation:</P>
          <BlockMath>(2k + 5)^2 = 0</BlockMath>
          <P>Replace the parentheses with a variable:</P>
          <BlockMath>t^2 = 0</BlockMath>
          <P>
            What number multiplied by itself gives zero? Of course, it's zero and only zero! Therefore, <M>t = 0</M>.
            Perform the reverse substitution and find the only root of the original equation:
          </P>
          <BlockMath>{math`
            \overbrace{2k + 5}^{\small t} = 0 \\ 2k = -5 \\ \boxed{k = -\frac{5}{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>6t = 9t^2</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[0, '2/3']} />
        <ProblemAnswer>
          The equation has two roots: <M>0</M> and <M>2/3</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Bring the equation to <Dep on={quadraticEquation}>general form</Dep>, grouping the terms on the right:
          </P>
          <BlockMath>0 = 9t^2 - 6t</BlockMath>
          <P>There are two ways to solve this:</P>
          <ProblemSection title="Via completing the square">
            <P>Complete the square on the right:</P>
            <BlockMath>{math`
              9t^2 - 6t = \\
              \underbrace{(3t)^2 - 2 \cdot 3t \cdot 1 + \yellow{1^2}}_{\normalsize a^2 - 2\cdot a \cdot b + b^2} - \yellow{1^2} = \\
              (3t - 1)^2 - 1
            `}</BlockMath>
            <P>We get the equation:</P>
            <BlockMath>0 = (3t - 1)^2 - 1</BlockMath>
            <P>Isolate the completed square:</P>
            <BlockMath>1 = (3t - 1)^2</BlockMath>
            <P>Replace the parentheses with a variable. This time we have to take some other letter:</P>
            <BlockMath>1 = u^2</BlockMath>
            <P>
              What number multiplied by itself gives one? It can be either one or negative one! Therefore we get two
              possible values for <M>u</M>:
            </P>
            <BlockMath>{math`u_1 = 1 >>{big} u_2 = -1`}</BlockMath>
            <P>Perform the reverse substitution and find the roots of the original equation:</P>
            <BlockMath>{math`
              \overbrace{3t - 1}^{\small u_1} = 1 \\ 3t = 2 \\ \boxed{t_1 = \frac{2}{3}} >>{big}
              \overbrace{3t - 1}^{\small u_2} = -1 \\ 3t = 0 \\ \boxed{t_2 = 0}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="As an incomplete quadratic equation">
            <P>
              Immediately notice that we got an <Dep on={incompleteQuadratics}>incomplete quadratic equation</Dep> with
              the coefficient <M>C = 0</M>. Factor out <M>t</M>.
            </P>
            <BlockMath>0 = t(9t - 6)</BlockMath>
            <P>
              Equate each factor to zero (because if even one is equal to zero, the whole right side becomes zero) and
              find the roots:
            </P>
            <BlockMath>{math`
              \boxed{t_1 = 0} >>{big} 9t_2 - 6 = 0 \\ 9t_2 = 6 \\ t_2 = \frac{6}{9} \\ \boxed{t_2 = \frac{2}{3}}
            `}</BlockMath>
            <Hr />
            <P>
              And if you remembered the <Dep on={incompleteC0Roots}>general formula for roots</Dep> of this type of
              quadratic equation (although knowing it by heart is not necessary), you could have found the roots almost
              instantly:
            </P>
            <BlockMath>{math`
              t_1 = 0 >>{big} t_2 = -\frac{-6}{9} = \frac{6}{9} = \frac{2}{3}
             `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      That's it! Now you can solve <B>any</B> quadratic equation! The difference compared to{' '}
      <Ref to={elementaryEquations}>elementary equations</Ref> is, of course, significant. We had to go through a whole
      preparatory journey: getting to know quadratic equations, solving their incomplete forms, and mastering the art of
      completing the square.
    </P>

    <P>
      In future materials, we will derive universal general formulas for solving quadratic equations, which are much
      more convenient to apply than completing the square each time. We will also study interesting properties of
      quadratic trinomials and equations. So stay tuned, it will be interesting!
    </P>
  </>
));
