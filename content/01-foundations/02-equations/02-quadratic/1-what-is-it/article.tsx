// #region Media
//

import gardenProblem from './assets/garden-problem.webp';
import impatientCyclist from './assets/impatient-cyclist.webp';
import framingPhoto from './assets/framing-photo.webp';

//
// #endregion

// #region Links
//

const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const alwaysGlobal = $CONTENT.foundations.equations.elementary.article.$alwaysGlobal;

//
// #endregion

type CoefficientAnswer = string | number | Array<string | number>;
export function quadraticOrNot(quadratic: true, A: CoefficientAnswer, B: CoefficientAnswer, C: CoefficientAnswer): any;
export function quadraticOrNot(quadratic: false): any;
export function quadraticOrNot(
  quadratic?: boolean,
  A?: CoefficientAnswer,
  B?: CoefficientAnswer,
  C?: CoefficientAnswer,
) {
  return (
    <ProblemCheck
      label="Quadratic"
      hint="Yes/No"
      answer={quadratic ? /^yes$/iu : /^no$/iu}
      children={
        quadratic
          ? [
              <ProblemCheck label="Coefficient A" answers={Array.isArray(A) ? A : [A]} />,
              <ProblemCheck label="Coefficient B" answers={Array.isArray(B) ? B : [B]} />,
              <ProblemCheck label="Coefficient C" answers={Array.isArray(C) ? C : [C]} />,
            ]
          : undefined
      }
    />
  );
}

export default defineProse({
  uniques: {
    problematicEquations: Problems,
    quadraticTrinomial: Term,
    quadraticEquation: Term,
    powerNotOrder: Important,
    quadraticOrNot: Problems,
    _equivalenceExplain: Details,
  },
})(({ uniques }) => (
  <>
    <H1>Complicated square</H1>

    <P>
      We solve almost all <Ref to={$CONTENT.foundations.equations.elementary}>elementary equations</Ref> by simplifying
      them step by step until we get a simple equality of the form <M>x = A</M> or <M>A = x</M> (which is the same
      thing), where <M>A</M> is some number that is the solution to the equation. It might seem that now we are
      all-powerful and can solve any equation! Well, let's check it out!
    </P>

    <Problems
      title="Equations with a nuance..."
      level="example"
      applied
      $={uniques.problematicEquations}
      snippet={{
        search: true,
        quick: true,
        title: 'Quadratic equations in real life',
        description: `
          Examples of various real-life situations that boil down to quadratic equations.
          This will make it clear why we need to be able to solve them at all.
        `,
      }}
    >
      <SubProblem label="The Naughty Garden">
        <ProblemDescription>
          <P>
            An ancient Greek king (they were called basileis) ordered a luxurious garden to be built with an area of{' '}
            <M>36</M> square meters. Also, one of its sides must be <M>5</M> meters longer than the other. What should
            be the length and width of the garden?
          </P>

          <Image src={gardenProblem} width="600px">
            <Caption>Ancient sages are confused...</Caption>
          </Image>
        </ProblemDescription>
        <ProblemSolution>
          <P>
            Let's denote the length of the smaller side of the garden as <M>x</M> meters, then the length of the larger
            side will be equal to <M>x + 5</M> meters. The area of the garden is equal to the product of its sides, that
            is, we get the equation:
          </P>

          <BlockMath>{math`x(x+5) = 36`}</BlockMath>

          <P>
            So, what should we do with this?
            <Br />
            You can expand the brackets, you can group all the terms on one side. But it seems like everything is only
            getting worse... Try to find the solution yourself.
          </P>

          <BlockMath>{math`
            x^2 + 5x = 36 >>{big} x^2 + 5x - 36 = 0 >>{big} ???
          `}</BlockMath>

          <P>
            No matter how you look at it, it is not possible to bring this equation to the form <M>x = A</M> and get a
            nice answer. After all, the variable appears twice: raised to the second power <M>x^2</M> ("squared") and
            simply as <M>x</M>. They are <B>not</B> like terms, they cannot be combined. What should we do with such
            monsters?! Is our only option simply to guess the answer?
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Impatient cyclist">
        <ProblemDescription>
          <P>
            A cyclist went to visit his grandmother in the nearest city, located <M>60</M> kilometers away. If he had
            driven <M>2</M> km/h faster, he would have gotten there <M>1</M> hour earlier. What was his initial speed?
          </P>
          <Image src={impatientCyclist} width="600px">
            <Caption>And could have got there faster!</Caption>
          </Image>
        </ProblemDescription>
        <ProblemSolution>
          <P>
            Let's denote the initial speed of the cyclist as <M>v</M>. The time <M>t</M> he spent on the trip can be
            obtained by dividing the distance traveled by his speed:
          </P>
          <BlockMath>{math`t = \frac{60}{v}`}</BlockMath>
          <P>
            On the other hand, the same time, but one hour less (<M>t-1</M>), can be obtained by dividing the distance
            by his increased speed (<M>v + 2</M>):
          </P>
          <BlockMath>{math`t - 1 = \frac{60}{v + 2}`}</BlockMath>
          <P>
            In the second equation, we replace <M>t</M> with what it is equal to in the first one:
          </P>
          <BlockMath>{math`\frac{60}{v} - 1 = \frac{60}{v + 2}`}</BlockMath>
          <P>
            Let's pull <M>v</M> out of the denominators. To do this, using the same action{' '}
            <Dep to={sameActionRule}>rule</Dep> we multiply both sides of the equation by <M>v(v+2)</M>:
          </P>
          <BlockMath>{math`
            \brand{v(v+2)} \cdot \left( \frac{60}{v} - 1 \right) = \left( \frac{60}{v + 2} \right) \cdot \brand{v(v+2)} \\
            \frac{60\cancel{v}(v+2)}{\cancel{v}} - v(v+2) = \frac{60v\cancel{(v+2)}}{\cancel{v+2}} \\
            60(v+2) - v(v+2) = 60v
          `}</BlockMath>
          <P>Expand the brackets and collect like terms:</P>
          <BlockMath>{math`60v + 120 - v^2 - 2v = 60v`}</BlockMath>
          <P>
            Notice the same terms <M>60v</M> in both parts. They can be eliminated by subtracting them from both sides
            of the equation:
          </P>
          <BlockMath>{math`
            \brand{60v} - 60v + 120 - v^2 - 2v = 60v - \brand{60v} \\
            -v^2 - 2v + 120 = 0
          `}</BlockMath>
          <P>Equation with a square again! So what to do next?!</P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Picture frame">
        <ProblemDescription>
          <P>
            A craftsman was commissioned to make a beautiful wooden frame for a beautiful family portrait measuring{' '}
            <M>8x10</M> inches. In order for the picture with the frame to look beautiful in a closet with other things
            dear to the heart, its total area must be exactly <M>160</M> square inches. What should be the width of the
            frame?
          </P>
          <Image src={framingPhoto} width="600px">
            <Caption>Beautiful picture in a beautiful frame!</Caption>
          </Image>
        </ProblemDescription>
        <ProblemSolution>
          <P>
            Let's denote the desired width of the frame by the variable <M>w</M>. The picture with the frame has the
            shape of a rectangle with sides <M>8 + 2w</M> and <M>10 + 2w</M> (<M>2w</M> because the frame is on both
            sides of the picture). The area of a rectangle is calculated as the product of its sides, that is:
          </P>
          <BlockMath>{math`(8 + 2w)(10 + 2w) = 160`}</BlockMath>
          <P>Expand the brackets and collect like terms:</P>
          <BlockMath>{math`
            80 + 16w + 20w + 4w^2 = 160 \\
            4w^2 + 36w + 80 = 160
          `}</BlockMath>
          <P>
            So for the third time we have arrived. Again a variable raised to the second power, and again it is unclear
            what to do next!
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      As you can see, such equations appear regularly. This is not some unique case. Such equations, in which the
      unknown is raised to the second power, are found everywhere. It is not good when damn gardens, picture frames and
      simple motion problems can break our equations and lead us to a dead end! We urgently need to figure out how to
      solve such equations!
    </P>

    <H1>Quadratic trinomial</H1>

    <P>
      To solve such equations, we must first understand what we are dealing with. It seems obvious to classify equations
      that have <M>x^2</M> as quadratic. But, as always, the most obvious approach may not be the best one. This
      approach has serious drawbacks:
    </P>

    <List type="ol">
      <Li>
        <P>
          <B>There may be no square, but the equation is still quadratic!</B>
        </P>
        <P>
          In the examples about the garden and the picture frame above, we have already seen that an equation that
          initially has no squares can turn out to be quadratic; squares appear after transformations.
        </P>
        <BlockMath>{math`
          x(x+5) = 36 \Rightarrow x^2 + 5x - 36 = 0 \\
          (8 + 2w)(10 + 2w) = 160 \Rightarrow 4w^2 + 36w + 80 = 160
        `}</BlockMath>
      </Li>
      <Li>
        <P>
          <B>There may be a square, but the equation is not quadratic!</B>
        </P>
        <P>
          Sometimes the existing <M>x^2</M> is eliminated in the process of transformations and plays no role:
        </P>
        <BlockMath>{math`
          x^2 + x = x^2 + 5 \\
          \brand{ - \ x^2 \ } | \ x^2 + x = x^2 + 5 \ | \brand{ - x^2 } \\
          - \cancel{x^2} + \cancel{x^2} + x = \cancel{x^2} + 5 - \cancel{x^2} \\
          \boxed{x = 5}
        `}</BlockMath>
      </Li>
    </List>

    <P>
      Our enemy is cunning and treacherous! Quadratic equations can be disguised, hiding their square, or they can have
      an explicit square and not be quadratic at all! But mathematicians are no fools either and were able to figure out
      a way to determine exactly which equations are quadratic and which are not.
    </P>

    <P>
      As in any good detective story, first mathematicians analyzed all equations and identified a "modus operandi", a
      general portrait that is characteristic of all quadratic equations. They quite simply called this portrait a{' '}
      <B>quadratic trinomial</B>.
    </P>

    <Term
      $={uniques.quadraticTrinomial}
      title="Quadratic trinomial"
      snippet={{
        quick: true,
        search: true,
        description: `
          Polynomial with the maximum power of the variable equal to two.
          Acts as a "template" or "general form" for all quadratic equations.
        `,
        seo: {
          title: 'What is a quadratic trinomial?',
        },
      }}
    >
      <P>Any polynomial written in the following "standard" form:</P>
      <BlockMath>{math`Ax^2 + Bx + C, \quad A \neq 0`}</BlockMath>
      <P>For example:</P>
      <BlockMath>{math`
        \underset{{\large\phantom{A}} A = 3, \ B = 1, \ C=10 {\large\phantom{A}}}{3x^2 + x + 10}
        >>{big}
        \underset{{\large\phantom{A}} A = 1, \ B = 0, \ C=-5 {\large\phantom{A}}}{x^2 - 5}
        >>{big}
        \underset{{\large\phantom{A}} A = -1, \ B = 0, \ C=0 {\large\phantom{A}}}{-x^2}
      `}</BlockMath>
    </Term>

    <List type="ul">
      <Li>
        <P>
          <B>Why quadratic?</B>
        </P>
        <P>Because the maximum power of the variable in it is two, that is, "variable squared".</P>
      </Li>
      <Li>
        <P>
          <B>Why trinomial?</B>
        </P>
        <P>
          Because it consists of three terms (monomials): <M>Ax^2</M>, <M>Bx</M> and <M>C</M>. And even if there are
          fewer terms, as for example in <M>x^2 + 3</M>, the missing term can be considered equal to zero:{' '}
          <M>x^2 + 0x + 3</M>.
        </P>
      </Li>
      <Li>
        <P>
          <B>
            Why <M>A \neq 0</M>?
          </B>
        </P>
        <P>
          Because if <M>A = 0</M>, <M>x^2</M> multiplied by it becomes zero and disappears. And the polynomial is no
          longer quadratic! There is no "square", that is, the second power, in it.
        </P>
      </Li>
    </List>

    <H1>Quadratic equation</H1>

    <P>
      "Quadratic trinomial" is a general name for mathematical expressions of a certain type. They are sometimes used on
      their own, but now it is important that they help us formulate a solid and clear definition of quadratic
      equations.
    </P>

    <Term
      $={uniques.quadraticEquation}
      title="Quadratic equation"
      snippet={{
        quick: true,
        search: true,
        description: `
          Any equation that can be reduced to the form of a quadratic trinomial by transformations without losing roots.
        `,
      }}
    >
      <P>
        <B accent>The general form</B> of a quadratic equation is any equation that has a quadratic trinomial on one
        side and zero on the other:
      </P>
      <BlockMath>{math`
        \underbrace{\overbrace{Ax^2 + Bx + C}^{\text{Quadratic trinomial}} = 0}_{\text{Quadratic equation}}, \quad A \neq 0
      `}</BlockMath>
      <P>
        Any equation that has this general form or can be reduced to it by transformations{' '}
        <Ref to={uniques._equivalenceExplain}>without changing the roots</Ref> is called a{' '}
        <B accent>quadratic equation</B>:
      </P>
      <BlockMath>{math`
        -3x^2 + 6x + 9 = 0 >>{big}
        \underbrace{80 + j = 5j^2 - 10}_{5j^2 - j - 90 = 0} >>{big}
        \underbrace{y^2 = 0}_{y^2 + 0y + 0 = 0} >>{big}
        \underbrace{(t+2)(5-t) = 0}_{-t^2 + 3t + 10 = 0}
      `}</BlockMath>
      <Details $={uniques._equivalenceExplain} title='What does "without changing roots" mean?'>
        <P>
          You can transform equations using the same action <Ref to={sameActionRule}>rule</Ref> in different ways. You
          can, for example, add two to both sides or divide both sides by ten. With such transformations, the resulting
          new equation has the same roots as the original one.
        </P>
        <P>
          But you can, for example, multiply both sides by <M>0</M> and get the equality <M>0=0</M>. It is always true
          and naturally has no "roots". This is an example of "loss of roots". There are also actions that lead to the
          gaining of "extra roots". We will deal completely and in detail with these strange matters when we study{' '}
          <Ref to={$CONTENT.foundations.equations.equivalence}>equivalent</Ref> equations.
        </P>
        <P>
          That is why the definition of a quadratic equation specifically states that reduction to the general form must
          occur without changing (losing or appearing) roots!
        </P>
      </Details>
    </Term>

    <Important $={uniques.powerNotOrder} title="Power matters, not position">
      <P>
        The vast majority of beginners get confused when determining the coefficients <M>A</M>, <M>B</M> and <M>C</M> in
        a quadratic equation. Coefficients are attached to the powers of <M>x</M>. But the positions they occupy{' '}
        <B accent>do not matter</B>!
      </P>

      <List type="ol">
        <Li>
          Coefficient <M>A</M> <B accent>always stands</B> next to <M>x^2</M>.
        </Li>
        <Li>
          Coefficient <M>B</M> <B accent>always stands</B> next to <M>x</M>.
        </Li>
        <Li>
          Coefficient <M>C</M> <B accent>always stands</B> alone. There are no variables next to it!
        </Li>
      </List>

      <P>
        Consider the example <M>-3 + 4x^2 - 2x = 0</M>. Remember that <M>A</M> is always before <M>x^2</M>, so it is
        equal to <M>4</M>. <M>B</M> is always before <M>x</M>, so it is equal to <M>-2</M>. <M>-3</M> stands alone; this
        is the coefficient <M>C</M>.
      </P>
    </Important>

    <P>
      Now we know the enemy by sight and understand that the coefficients depend not on the position in the equation,
      but on the power of <M>x</M> they accompany. Let's practice determining whether equations are quadratic and
      finding their coefficients <M>A</M>, <M>B</M> and <M>C</M>.
    </P>

    <Problems
      $={uniques.quadraticOrNot}
      title="Quadratic or not?"
      level="easy"
      snippet={{
        seo: {
          title: 'Determination of coefficients of a quadratic equation',
          description: `
            Exercise to determine if an equation is quadratic and find its coefficients A, B and C.
          `,
        },
      }}
    >
      <P>
        Check if the equation is quadratic or not. If the equation is quadratic, using the same action{' '}
        <Dep to={sameActionRule}>rule</Dep>, bring it to the general form and find the values of its coefficients{' '}
        <M>A</M>, <M>B</M> and <M>C</M>.
      </P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`2x^2 + 3x - 5 = 0`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 2, 3, -5)}
        <ProblemAnswer>
          <P>The equation is quadratic.</P>
          <BlockMath>{math` A = 2, \quad B = 3, \quad C = -5 `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            This equation already has the general form of a quadratic equation and therefore is quadratic. Coefficients:
          </P>
          <BlockMath>{math`A = 2, \quad B = 3, \quad C = -5`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3x + 5 = 0`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(false)}
        <ProblemAnswer>
          <P>The equation is not quadratic.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            This equation is not quadratic, since it does not have <M>x^2</M>. Strictly speaking, it can still be
            reduced to the general form:
          </P>
          <BlockMath>{math`0x^2 + 3x + 5 = 0`}</BlockMath>
          <P>
            Coefficients: <M>A = 0</M>, <M>B = 3</M> and <M>C = 5</M>. But{' '}
            <Dep to={uniques.quadraticEquation}>by definition</Dep> of the general form of a quadratic equation,
            coefficient <M>A</M> cannot be equal to <M>0</M>. So this equation is not quadratic!
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`-4 + x^2 = 0`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 0, -4)}
        <ProblemAnswer>
          <P>The equation is quadratic.</P>
          <BlockMath>{math` A = 1, \quad B = 0, \quad C = -4 `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Coefficient <M>A</M> at <M>x^2</M> is <M>1</M>, since <M>x^2</M> can be written as <M>1x^2</M>. Coefficient{' '}
            <M>B</M> at <M>x</M> is <M>0</M>, since there is no <M>x</M> in the equation, that is, it can be written as{' '}
            <M>0x</M>. Coefficient <M>C</M> (which is alone) is <M>-4</M>.
          </P>
          <P>This equation is quadratic and in general form looks like this:</P>
          <BlockMath>{math`x^2 + 0x - 4 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 = 5`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 0, -5)}
        <ProblemAnswer>
          <P>The equation is quadratic.</P>
          <BlockMath>{math` A = 1, \quad B = 0, \quad C = -5 `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Group all terms on the left side. To do this, we need to get rid of <M>5</M> on the right side. To do this,
            using the same action <Dep to={sameActionRule}>rule</Dep>, we subtract <M>5</M> from both sides of the
            equation:
          </P>
          <BlockMath>{math`
            \brand{- 5} \ | \ x^2 = 5 \ | \ \brand{- 5} \\
            -5 + x^2 = \cancel{5} - \cancel{5} \\
            x^2 - 5 = 0
          `}</BlockMath>
          <P>
            Coefficient <M>A</M> at <M>x^2</M> is <M>1</M>, since <M>x^2</M> can be written as <M>1x^2</M>. Coefficient{' '}
            <M>B</M> at <M>x</M> is <M>0</M>, since there is no <M>x</M> in the equation, that is, it can be written as{' '}
            <M>0x</M>. Coefficient <M>C</M> (which is alone) is <M>-5</M>.
          </P>
          <P>This equation is quadratic and in general form looks like this:</P>
          <BlockMath>{math`x^2 + 0x - 5 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + x = 0`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 1, 0)}
        <ProblemAnswer>
          <P>The equation is quadratic.</P>
          <BlockMath>{math` A = 1, \quad B = 1, \quad C = 0 `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Coefficient <M>A</M> at <M>x^2</M> is <M>1</M>, since <M>x^2</M> can be written as <M>1x^2</M>. Coefficient{' '}
            <M>B</M> at <M>x</M> is <M>1</M>, since <M>x</M> can be written as <M>1x</M>. Coefficient <M>C</M> (which is
            alone) is <M>0</M>, since it is not in the equation at all.
          </P>
          <P>This equation is quadratic and in general form looks like this:</P>
          <BlockMath>{math`x^2 + x + 0 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x(x + 1) = 0`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 1, 0)}
        <ProblemAnswer>
          <P>The equation is quadratic.</P>
          <BlockMath>{math` A = 1, \quad B = 1, \quad C = 0 `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the brackets:</P>
          <BlockMath>{math`x^2 + x = 0`}</BlockMath>
          <P>
            We got the same equation as in the previous example. It is quadratic. Coefficients: <M>A = 1</M>,{' '}
            <M>B = 1</M>, <M>C = 0</M>. General form:
          </P>
          <BlockMath>{math`x^2 + x + 0 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x - 2)(x + 3) = 5`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 1, -11)}
        <ProblemAnswer>
          <P>The equation is quadratic.</P>
          <BlockMath>{math` A = 1, \quad B = 1, \quad C = -11 `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the brackets on the left side and collect like terms:</P>
          <BlockMath>{math`
            (x - 2)(x + 3) = 5 \\
            x^2 + 3x - 2x - 6 = 5 \\
            x^2 + x - 6 = 5
          `}</BlockMath>
          <P>
            Now group all terms on the left side. To do this, we need to get rid of <M>5</M> on the right side. To do
            this, using the same action <Dep to={sameActionRule}>rule</Dep>, we subtract <M>5</M> from both sides of the
            equation:
          </P>
          <BlockMath>{math`
            \brand{- 5} \ | \ x^2 + x - 6 = 5 \ | \ \brand{- 5} \\
            -5 + x^2 + x - 6 = \cancel{5} - \cancel{5} \\
            x^2 + x - 11 = 0
          `}</BlockMath>
          <P>
            This equation is quadratic and we have already found its general form. Coefficient <M>A</M> at <M>x^2</M> is{' '}
            <M>1</M>, since <M>x^2</M> can be written as <M>1x^2</M>. Coefficient <M>B</M> at <M>x</M> is <M>1</M>,
            since <M>x</M> can be written as <M>1x</M>. Coefficient <M>C</M> (which is alone) is <M>-11</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3 = x^2 + x`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 1, -3)}
        <ProblemAnswer>
          <P>The equation is quadratic.</P>
          <BlockMath>{math` A = 1, \quad B = 1, \quad C = -3 `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            This time, group all terms on the right side. To do this, we need to get rid of <M>3</M> on the left side.
            To do this, using the same action <Dep to={sameActionRule}>rule</Dep>, we subtract <M>3</M> from both sides
            of the equation:
          </P>
          <BlockMath>{math`
            \brand{- 3} \ | \ 3 = x^2 + x \ | \ \brand{- 3} \\
            -\cancel{3} + \cancel{3} = x^2 + x - 3 \\
            0 = x^2 + x - 3
          `}</BlockMath>
          <P>
            We got a quadratic equation in general form. Coefficient <M>A</M> at <M>x^2</M> is <M>1</M>. Coefficient{' '}
            <M>B</M> at <M>x</M> is <M>1</M>. Coefficient <M>C</M> (which is alone) is <M>-3</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x + \dfrac{1}{x} = 2`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, -2, 1)}
        <ProblemAnswer>
          <P>The equation is quadratic.</P>
          <BlockMath>{math` A = 1, \quad B = -2, \quad C = 1 `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            We need to pull <M>x</M> out of the denominator on the left side. To do this, using{' '}
            <Dep to={sameActionRule}>the rule</Dep> of the same action, we multiply both sides of the equation by{' '}
            <M>x</M>. We put the left side in brackets, since any action on the equation is{' '}
            <Dep to={alwaysGlobal}>global</Dep>.
          </P>

          <BlockMath>{math`
            \brand{\cdot x} \ | \ x + \dfrac{1}{x} = 2 \ | \ \brand{\cdot x} \\
            x\left( x + \frac{1}{x} \right) = 2x \\
            x^2 + \frac{\cancel{x}}{\cancel{x}} = 2x \\
            x^2 + 1 = 2x
          `}</BlockMath>
          <P>
            Now group all terms on the left side. To do this, we need to get rid of <M>2x</M> on the right side. To do
            this, we subtract <M>2x</M> from both sides of the equation:
          </P>
          <BlockMath>{math`
            \brand{- 2x} \ | \ x^2 + 1 = 2x \ | \ \brand{- 2x} \\
            -2x + x^2 + 1 = \cancel{2x} - \cancel{2x} \\
            x^2 - 2x + 1 = 0
          `}</BlockMath>
          <P>
            We got a quadratic equation in general form. Coefficient <M>A</M> at <M>x^2</M> is <M>1</M>. Coefficient{' '}
            <M>B</M> at <M>x</M> is <M>-2</M>. Coefficient <M>C</M> (which is alone) is <M>1</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + 2x = x^2`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(false)}
        <ProblemAnswer>
          <P>The equation is not quadratic.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            On the left and right, we notice identical terms <M>x^2</M>. To get rid of them, using the same action{' '}
            <Dep to={sameActionRule}>rule</Dep>, we subtract <M>x^2</M> from both sides of the equation:
          </P>
          <BlockMath>{math`
            \brand{- x^2} \ | \ x^2 + 2x = x^2 \ | \ \brand{- x^2} \\
            -\cancel{x^2} + \cancel{x^2} + 2x = \cancel{x^2} - \cancel{x^2} \\
            2x = 0
          `}</BlockMath>
          <P>This equation is not quadratic. Strictly speaking, it can still be reduced to the general form:</P>
          <BlockMath>{math`0x^2 + 2x + 0 = 0`}</BlockMath>
          <P>
            Coefficients: <M>A = 0</M>, <M>B = 2</M> and <M>C = 0</M>. But{' '}
            <Dep to={uniques.quadraticEquation}>by definition</Dep> of the general form of a quadratic equation,
            coefficient <M>A</M> cannot be equal to <M>0</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      Beginners and those who struggle with this topic regularly get confused and use the terms "quadratic trinomial"
      and "quadratic equation" as synonyms. Just in case, let's clarify once again. A quadratic trinomial and a
      quadratic equation are <B>NOT the same thing</B> at all, but completely different mathematical objects! A
      quadratic trinomial is just a type of mathematical expression and often appears as a part of more complex
      expressions.
    </P>

    <P>For example, there are three quadratic trinomials (colored) in the complex expression below:</P>

    <BlockMath>{math`
      \frac{\brand{5x^2 + \dfrac{1}{\sqrt{2}}x - 8} - \sqrt{\dfrac{\brand{y + 2y^2 + 4}}{2}}}{\brand{z^2 - 3z + 1}}
    `}</BlockMath>

    <P>
      Sometimes quadratic trinomials can occur in equations. And if there is a way to transform this equation to a form
      with only a quadratic trinomial on one side and zero on the other, then such an equation is called "quadratic":
    </P>

    <BlockMath>{math`
      \underbrace{\overbrace{10x^2 - 20x + 100}^{\text{Quadratic trinomial}} = 0}_{\text{Quadratic equation}}
    `}</BlockMath>

    <H1>Why all the fuss?</H1>

    <P>
      Why exactly did we spend so much time defining quadratic trinomials, naming their coefficients, and doing other
      things? There are two reasons for this:
    </P>

    <List type="ol">
      <Li>Now we can decide for certain which equations are quadratic and which are not.</Li>
      <Li>
        We defined key terms that will be used to create formulas for solving quadratic equations and discovering their
        interesting and useful properties.
      </Li>
    </List>
  </>
));
