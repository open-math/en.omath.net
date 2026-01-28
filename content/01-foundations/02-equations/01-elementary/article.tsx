import { QED } from '#project/utils/qed';

// #region Media
//

import explainingMeme from './assets/explaining-meme.mp4';
import swingBalancer from './assets/swing-balancer.svg';
import weighingScales from './assets/weighing-scales.webp';
import robertRecorde from './assets/robert-recorde.jpg';
import firstPrintedEquation from './assets/first-printed-equation.png';
import scalesBalance from './assets/scales-balance.svg';
import scalesBalanceActions from './assets/scales-balance-actions.svg';
import equationScalesIdea from './assets/equation-scales-idea.svg';
import foundIt from './assets/found-it.svg';
import flyingNumbers from './assets/flying-numbers.jpg';
import magicTrianglesEpidemic from './assets/magic-triangles-epidemic.jpg';
import magicTriangleUsage from './assets/magic-triangle-usage.svg';
import savingMoney from './assets/saving-money.svg';
import cyclists from './assets/cyclists.svg';
import carFactory from './assets/car-factory.svg';

//
// #endregion

// #region Links
//

const twister = $CONTENT.foundations.equations.elementary.practice.$twister;
const magicTrianglesProblem = $CONTENT.foundations.equations.elementary.practice.$magicTriangles;

//
// #endregion

// #region Todos
//

/**
 * The more "Application of equations in real life" problems, the better!
 * Need additional spheres of life.
 * At least 5 items.
 */

//
// #endregion

export default defineProse({
    uniques: {
        equality: Term,
        equalityFalseTrue: Diagram,
        equation: Term,
        firstEquation: Callout,
        equationSolution: Term,
        equationGuessing: Problems,
        sameActionRule: Statement,
        sameActionRuleExamples: Problems,
        communistTest: Details,
        sideInvariance: Details,
        chainExamples: Problems,
        chainAlternate: Problems,
        alwaysGlobal: Important,
        commonMistakes: List,
        whySolveEquations: P,
        realLifeApplications: Problems,
        _v2t: Details,
    },
})(({ uniques }) => (
    <>
        <H1>Why so many words?</H1>

        <P>
            It would seem like a primitive topic! What could be simpler than elementary equations? There really is
            nothing complicated about them. However, for some reason, it always turns out that analyzing the simplest
            questions requires the most thorough explanations. Because this is the base and foundation, which is
            critically important to understand correctly.
        </P>

        <P>
            That is why everything is described here in such a way that you 100% understand the basic principles of
            working with equalities and equations. So those basic actions do not cause you any contradictions or
            misunderstandings. So that if necessary, you yourself could explain in detail every step of solving any
            equation.
        </P>

        <Video src={explainingMeme} width="400px" autoplay>
            <Caption>Literally you after reading this article</Caption>
        </Video>

        <P>
            The article might seem too large for such a simple topic, but don't worry—there is nothing complicated here.
            Most of the text is taken up by various examples ensuring that you understand everything correctly and will
            not make typical mistakes.
        </P>

        <H1>Equality</H1>

        <P>
            Let's look at the word "equation" more closely. It is related to "equal", "to equate", that is, to make
            equal, to make an equality. Interesting word... Before talking about equations, let's first figure out what
            "equality" is!
        </P>

        <P>
            In mathematics, we can write the same abstract object in different ways. For example, the number <M>3</M>{' '}
            can be written in an infinite number of different ways:
        </P>

        <List type="ul">
            <Li>
                <M>3</M>
            </Li>
            <Li>
                <M>1 + 2</M>
            </Li>
            <Li>
                <M>1 + 1 + 1</M>
            </Li>
            <Li>
                <M>5 - 2</M>
            </Li>
            <Li>and so on...</Li>
        </List>

        <P>
            The notations are different, but they all denote the same abstract object — "number three". To show that
            different notations denote the same object, mathematics uses the equals sign <M>=</M>.
        </P>

        <BlockMath>{math`
            3 = 1 + 2 = 1 + 1 + 1 = 5 - 2 = \ldots
        `}</BlockMath>

        <P>
            Now that we understand the purpose of the equals sign, we can formulate the definition of equality in
            mathematics:
        </P>

        <Term
            $={uniques.equality}
            title="Equality"
            snippet={{
                quick: true,
                search: ['equals'],
                seo: 'What is equality?',
                description: `
                    Two expressions with an equals sign "=" between them. Equality can be true (2 = 2) or false (2 = 0).
                `,
            }}
        >
            <P>
                Two expressions with an equals sign (<M>=</M>) between them.
            </P>

            <BlockMath>{math`
                5 = 5 >> 1 + 2 = 3 >> 0 = 4 >> 8x = \frac{1}{a}
            `}</BlockMath>
        </Term>

        <P>
            Not only numbers can stand on the sides of the equals sign, but also more complex constructions. Even the
            already mentioned number <M>3</M> can be written as a single digit "<M>3</M>" or as a complex construction
            like "<M>1 + 1 + 1</M>". Sometimes letters denoting some unknown numbers can stand there. To avoid
            clarifying every time what exactly should stand on the sides of the equality sign (numbers, letters,
            additions, multiplications, functions, ...), all this together is called by the general word{' '}
            <B>expression</B>. Therefore, the definition of equality refers specifically to "expressions".
        </P>

        <P>
            There are no restrictions on what can stand on the sides of the equals sign. You can write anything you want
            there. Therefore, equalities are divided into two categories: true and false.
        </P>

        <List type="ol">
            <Li>
                <B>True</B> equality is an equality in which expressions to the left and right of the equals sign denote
                the same object.
            </Li>
            <Li>
                <B>False</B> equality is an equality in which expressions to the left and right of the equals sign
                denote different objects.
            </Li>
        </List>

        <Diagram
            $={uniques.equalityFalseTrue}
            snippet={{
                quick: true,
                search: ['true equality', 'false equality'],
                title: 'True and false equality',
                description: `
                    If identical objects stand on the sides of the = sign, then the equality is true. If different — false.
                `,
            }}
        >
            {math`
                flowchart TD
                    equality["**Equality:**<br>$$ \small \text{expr.1} = \text{expr.2} $$"] -->|Same object on sides| true[**True**:<br>$$ 1 + 2 = 3 $$]
                    equality -->|Different objects on sides| false[**False**:<br>$$ 0 = 99 + 1 $$]
                    class equality fill
            `}
        </Diagram>

        <H1>Equalities in Real Life</H1>

        <P>
            Like many other mathematical concepts, equality has analogies in real life. And very visual and accurate
            ones, which you have definitely encountered.
        </P>

        <P>
            On a playground, you can almost always find a seesaw — a construction consisting of a long board lying on a
            support in the middle. If children of the same weight sit on both sides, the seesaw is in balance and does
            not tilt to either side. This is an example of true equality.
        </P>

        <P>
            True equality can also be obtained in a more interesting way: for example, an adult can sit on one side, and
            a couple of children on the other. Then to the left of the "equals sign" will be the weight of one adult,
            and to the right — the sum of the weights of two children.
        </P>

        <Flex justify="space-around" flexes={['1 0 300px', '1 0 300px']}>
            <Image src={swingBalancer} width="400px">
                <Caption>
                    True equality <M>{math`80\text{kg} = 40\text{kg} + 40\text{kg}`}</M>
                </Caption>
            </Image>

            <Image src={weighingScales} width="350px">
                <Caption>
                    Equality <M>5 = 2 + x</M>
                    <CaptionSecondary>
                        Weight of the unknown weight is <M>3</M>
                    </CaptionSecondary>
                </Caption>
            </Image>
        </Flex>

        <P>
            A more convenient analogy is mechanical scales. In essence, this is the same seesaw, but only more precise
            and intended not for fun, but for weighing all sorts of objects in different quantities. There are also
            special weights. The weight of some weights is known (these are ordinary numbers in equalities), and others
            are not (these are unknowns: <M>a</M>, <M>b</M> or <M>x</M>).
        </P>

        <P>
            The analogy with mechanical scales will be very useful to us later, remember it. It not only well
            illustrates the concept of equality itself, but also helps to visualize their transformations.
        </P>
        <H1>Equation</H1>

        <P>
            Now that we have dealt with the concept of equality, we can move on to equations. Everything is quite simple
            here. It happens that an unknown number is present in an equality. Such an unknown number can be designated,
            for example, with a question mark:
        </P>

        <BlockMath>{math`
            ? \ + 2 = 5 >>{big} 5 \ \cdot \ ? = 25 >>{big} \frac{8}{?} = 4 >>{big} 4 \cdot 8 = \ ?
        `}</BlockMath>

        <P>
            It is easy to guess what numbers are hidden behind the question marks: <M>3</M>, <M>5</M>, <M>2</M> and{' '}
            <M>32</M>. In mathematics, it is customary to denote unknown numbers by letters, for example, <M>x</M>,{' '}
            <M>y</M>, <M>z</M> and so on. It is more convenient to write equations with several unknowns this way, and
            you can show which unknowns are equal to each other. Compare yourself:
        </P>

        <BlockMath>{math`
            ? \ + \ ? = 2 \ \cdot \ ? - ? >>{big} x + y = 2x - y
        `}</BlockMath>

        <P>
            On the left, you can't understand what is what. But on the right, it is clearly understood that there are
            only two unknowns (<M>x</M> and <M>y</M>), and not four as it might seem from the left equality. And if we
            find, for example,
            <M>x</M>, then we can immediately substitute it in two places!
        </P>

        <Term
            $={uniques.equation}
            title="Equation"
            snippet={{
                quick: true,
                search: true,
                seo: 'What is an equation?',
                description: `
                    An equality in which there is one or more unknowns or variables.
                `,
            }}
        >
            <P>
                <Dep to={uniques.equality}>Equality</Dep> in which there is one or more <B>unknowns</B> or{' '}
                <B>variables</B>.
            </P>

            <BlockMath>{math`
                x + 3 = 5 >> t^2 + 8t = 100 >> z = \frac{1}{x}
            `}</BlockMath>
        </Term>

        <Callout $={uniques.firstEquation} title="The First Printed Equation" icon={robertRecorde}>
            <P>
                The first printed appearance of the equals sign, and at the same time the equation in a "quasi-modern"
                form, occurred in 1557 in the book "The Whetstone of Witte" by the English mathematician and physician
                Robert Recorde. He introduced the equals sign itself to, quote "avoide the tediouse repetition of these
                woordes: is equalle to". And the equation looked like this:
            </P>

            <Image src={firstPrintedEquation} width="400px" invert="dark" />

            <P>
                Looks scarce, but quite readable.
                <Br />
                And here is the same equation in modern notation:
            </P>

            <BlockMath>14x + 15 = 71</BlockMath>
        </Callout>

        <H1>Solving an Equation</H1>

        <P>
            We realized that any equation is just an <Ref to={uniques.equality}>equality</Ref> with unknowns. Recall
            that equality can be <Ref to={uniques.equalityFalseTrue}>true or false</Ref>. By substituting some numbers
            into the equation instead of unknowns, we can obtain both true and false equalities. Consider this equation:
        </P>

        <BlockMath>{math`
            10 \cdot x + 2 = 12
        `}</BlockMath>

        <P>
            Substituting the number <M>1</M> instead of <M>x</M>, we will get a true equality. And if we substitute any
            other number, for example <M>2</M>, then we will get a false equality:
        </P>

        <BlockMath>{math`
            \underbrace{10 \cdot 1 + 2}_{12} = 12 >>{big} \underbrace{10\cdot 2 + 2}_{22} = 12
        `}</BlockMath>

        <P>
            That is, we literally "equate" the equality, balance abstract scales in search of equilibrium, look for
            values at which the left side will be equal to the right. At <M>x = 1</M> the scales are balanced, and at{' '}
            <M>x = 2</M> the left bowl of the scale is heavier than the right one and they tilt to the left.
        </P>

        <Term
            $={uniques.equationSolution}
            title="Solving an Equation"
            snippet={{
                quick: true,
                search: ['root of equation'],
                seo: 'What does it mean to solve an equation?',
                description: `
                    "Solutions" or "roots" of an equation are numbers that, when substituted for unknowns, turn it into a true equality.
                    "To solve an equation" means to find all its roots and prove that there are no other roots.
                `,
            }}
        >
            <P>
                <B accent>Solutions</B> or <B accent>roots</B> of an equation are numbers that, when substituted for
                unknowns, turn it into a true equality.
            </P>

            <P>
                <B accent>"To solve an equation"</B> means to find <B>all</B> its roots and <B>prove</B> that there are
                no other roots. Moreover, there may be no roots at all, or there may be infinitely many.
            </P>
        </Term>

        <P>
            To solve the simplest equations, you don't even need to know any rules and methods. You can simply guess the
            roots! Let's try:
        </P>

        <Problems $={uniques.equationGuessing} title="Solving Equations by Guessing" level="example">
            <P>
                Solve <B>all</B> equations:
            </P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x + 3 = 5`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={2} />
                <ProblemHint>
                    What needs to be added to <M>3</M> to get <M>5</M>?
                </ProblemHint>
                <ProblemAnswer>
                    <M>2</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The equation has one root — the number <M>2</M>. Since only this number, when substituted
                        instead of the variable <M>x</M>, will turn the equation into a true equality:
                    </P>
                    <BlockMath>{math`
                        2 + 3 = 5 \\ 5 = 5
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`y^2 = 16`}</BlockMath>
                </ProblemDescription>
                <ProblemHint>
                    What number multiplied by itself gives <M>16</M>?
                </ProblemHint>
                <ProblemCheck answer={4} />
                <ProblemAnswer>
                    <M>4</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The second equation has two roots: <M>4</M> and <M>-4</M>. Because only these two numbers, when
                        multiplied by themselves, give <M>16</M>. Substituting any of these two numbers instead of{' '}
                        <M>y</M>, we get a true equality:
                    </P>
                    <BlockMath>{math`
                        4^2 = 16 \\ 16 = 16 >>{big} (-4)^2 = 16 \\ 16 = 16
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`0\cdot z = 15`}</BlockMath>
                </ProblemDescription>
                <ProblemHint>
                    Is there such a number that, when multiplied by <M>0</M>, gives <M>15</M>? Try substituting any
                    numbers that come to mind.
                </ProblemHint>
                <ProblemAnswer>The equation has no solutions.</ProblemAnswer>
                <ProblemSolution>
                    <P>
                        In the third equation, whatever number you substitute instead of <M>z</M>, it will immediately
                        be multiplied by <M>0</M>, which will give <M>0</M>. And this zero on the left will never become
                        equal to <M>15</M> on the right. We are doomed to always get a <B>false</B> equality:
                    </P>

                    <BlockMath>{math`
                        0\cdot z = 15 \\ 0 \neq 15
                    `}</BlockMath>

                    <P>
                        Since any number can be substituted for <M>z</M>, but it will always result in a false equality,
                        then this equation has no roots! This equation <B>has no solutions</B>!
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`0\cdot t + 15 = 15`}</BlockMath>
                </ProblemDescription>
                <ProblemHint>
                    Does substituting any number instead of <M>t</M> affect the result? Try substituting any numbers
                    that come to mind.
                </ProblemHint>
                <ProblemAnswer>The equation has infinitely many solutions.</ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Again, whatever number you substitute instead of <M>t</M>, it will immediately be multiplied by{' '}
                        <M>0</M>, which will give <M>0</M>. But unlike the previous equation, here on the left we will
                        always get <M>15</M>. And on the right <M>15</M> too. This time we are doomed to always get a{' '}
                        <B>true</B> equality:
                    </P>

                    <BlockMath>{math`
                        0\cdot t + 15 = 15 \\ 0 + 15 = 15 \\ 15 = 15
                    `}</BlockMath>

                    <P>
                        Since any number can be substituted for <M>t</M> and a true equality will always be obtained,
                        then the root of this equation is any number! This equation has <B>infinitely many solutions</B>
                        !
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <P>
            So far, we have been guessing solutions to equations. But guessing won't always work. Try guessing the roots
            of this beauty:
        </P>

        <BlockMath>{math`
            \frac{x+743 \ 639}{28} - 18x = 2025x
        `}</BlockMath>

        <P>
            Not so simple anymore, right? To solve such and even more complex equations, we need a way to somehow
            simplify them, reduce them to obvious equalities...
        </P>

        <H1>Same Action Rule</H1>

        <P>
            We have decided what equalities and equations are. But just inventing abstract objects so that later not to
            do anything with them is absolutely useless. Usually different objects are invented to perform some actions
            on them later.
        </P>

        <P>
            For example, let's take a true equality <M>6 + 3 = 9</M>.<Br />
            Let's depict it as scales:
        </P>

        <Image src={scalesBalance} width="450px" invert="dark" />

        <P>
            Let's perform some action with the left side of this equality. For example, add the number <M>2</M> to it.
            In the case of scales, this is equivalent to adding a weight of <M>2</M> to the left pan of the scales. The
            balance will be disturbed, and the scales will tilt to the left. The true equality <M>6 + 3 = 9</M> will
            turn into a false equality <M>6 + 3 + 2 = 9</M> or <M>11 = 9</M>.
        </P>

        <Image src={scalesBalanceActions} width="900px" invert="dark" />

        <P>
            The equality became false because we performed the action only on one side -- the left one. If we perform{' '}
            <B>exactly the same</B> action with the right side of the equality, add <M>2</M>, then we will get a third
            equality, <M> 6 + 3 + 2 = 9 + 2 </M> or <M>11 = 11</M>, and it is already true.
        </P>

        <P>
            It turns out that it doesn't matter what we do with one part of a true equality. If we do the same thing
            with the other part, we will get a true equality again! Congratulations, we just discovered one of the most
            important and fundamental rules of mathematics!
        </P>

        <Statement
            $={uniques.sameActionRule}
            title="Same Action Rule"
            snippet={{
                quick: true,
                search: true,
                description: `
                    If the same action is performed on both sides of a true equality, the resulting equality will also be true.
                `,
            }}
        >
            <StatementMain>
                <P>
                    If <B>the same</B> action is performed on <B>both</B> sides of a true equality (add, subtract,
                    multiply, divide, or any other), the resulting new equality will also be true.
                </P>

                <BlockMath>{math`
                    \begin{array}{}
                        1 + 1 = 2 \ \text{\small (true)} \\[5px]
                        {\footnotesize \brand{+6}} \ | \ 1 + 1 = 2 \ | \ {\footnotesize \brand{+6}} \\
                        6 + 1 + 1 = 2 + 6 \\[5px]
                        8 = 8 \ \text{\small (true)}
                    \end{array}
                `}</BlockMath>

                <P>
                    There is also a very simple formulation.
                    <Br />
                    Remember it for the rest of your life:
                </P>

                <P center serif>
                    <B accent>WHAT WE DID ON ONE SIDE, WE DO ON THE OTHER!</B>
                </P>
            </StatementMain>
            <StatementSection title="Proof. With ducks and communists!">
                <P>There is such a joking "duck test":</P>

                <P center serif>
                    <I>
                        "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a
                        duck."
                    </I>
                </P>

                <P>
                    The point of this joke is that we don't need to know the exact definition of an object. Instead, we
                    can describe it by a set of qualities and properties. If another object has exactly the same set of
                    qualities and properties, then these two objects are identical, because{' '}
                    <B>they cannot be distinguished</B> from each other!
                </P>

                <P>
                    But it turned out that this is no joke. Previously, using this test, it was quite{' '}
                    <Ref to={uniques.communistTest}>realistic to find out</Ref> if a person is a communist.
                </P>

                <Details $={uniques.communistTest} title="Are you a communist?!">
                    <P>
                        The phrase "duck test" was <Ref to="https://en.wikipedia.org/wiki/Duck_test">first uttered</Ref>{' '}
                        by Richard Patterson, the US ambassador to Guatemala, in 1950. In his opinion, hidden communists
                        should be calculated precisely by indirect signs, and not by direct statements:
                    </P>

                    <P center serif>
                        <I>
                            "You often cannot prove judicially that a certain person is a communist. For such cases, I
                            recommend a practical method — the duck test"
                        </I>
                    </P>

                    <P>
                        In this speech, he hinted at Guatemalan President Jacobo Arbenz Guzman, who was later overthrown
                        in a coup involving the CIA.
                    </P>
                </Details>

                <P>
                    And mathematicians went even further and literally made the test the main principle (or axiom) of
                    their science. Suppose we have two objects. If these two objects <B>behave identically</B> under any
                    actions with them, this means that these are <B>identical</B> or <B>equal</B> objects.
                </P>

                <P>
                    Such a comparison by "reaction" is indeed a very logical way to determine the equality of objects.
                    If in no way, by no action, can a different reaction be obtained from two objects, then these
                    objects can indeed be considered identical.
                </P>

                <P>Using this principle, we can prove the same action rule.</P>

                <P>
                    So we have a true equality. This means that identical objects lie on the sides of the <M>=</M> sign.
                    We perform the same action on both of these objects, and they <B>"reacted" identically</B> to the
                    action -- turned into another pair of <B>also identical</B> objects. Which means the new equality is
                    also true!
                </P>

                <P>{QED}</P>
            </StatementSection>
        </Statement>

        <Problems $={uniques.sameActionRuleExamples} title="True Preservation Examples" level="example">
            <P>Try the same action rule for basic arithmetic operations:</P>

            <SubProblem label="Addition">
                <ProblemDescription>
                    <P>
                        What new equality will be obtained if, according to the same action rule, you add the number{' '}
                        <M>2</M> to the equality below?
                    </P>
                    <BlockMath>{math`2 \cdot 3 - 2 = 4`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Will result in equality" answer={/6\s*=\s*6/} />
                <ProblemAnswer>
                    <M>6 = 6</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The original equality is true because there are different notations of the number <M>4</M> to
                        the left and right of the <M>=</M> sign. According to the same action rule, we add the number{' '}
                        <M>2</M> to both sides:
                    </P>

                    <BlockMath>{math`
                        \brand{+ \ 2} \ | \ 2 \cdot 3 - 2 = 4 \ | \brand{+2} \\ \cancel{2} + 2 \cdot 3 - \cancel{2} = 4 + 2
                    `}</BlockMath>

                    <P>
                        On the left side of the equality, <M>-2</M> and <M>+2</M> cancel each other out and sum up to{' '}
                        <M>0</M>:
                    </P>

                    <BlockMath>{math`
                        2 \cdot 3 + 0 = 4 + 2 \\ 2 \cdot 3 = 4 + 2 \\ 6 = 6
                    `}</BlockMath>

                    <P>
                        The equality remained true because we performed the same action on both sides of the equality.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem label="Subtraction">
                <ProblemDescription>
                    <P>
                        What new equality will be obtained if, according to the same action rule, you subtract the
                        number <M>7</M> from the equality below?
                    </P>
                    <BlockMath>{math`15 = 8 + 7`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Will result in equality" answer={/8\s*=\s*8/} />
                <ProblemAnswer>
                    <M>8 = 8</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The original equality is true because there are different notations of the number <M>15</M> to
                        the left and right of the <M>=</M> sign. According to the same action rule, we subtract the
                        number <M>7</M> from both sides:
                    </P>

                    <BlockMath>{math`
                        \brand{- \ 7} \ | \ 15 = 8 + 7 \ | \brand{-7} \\ -7 + 15 = 8 + \cancel{7} - \cancel{7}
                    `}</BlockMath>

                    <P>
                        On the right side of the equality, <M>+7</M> and <M>-7</M> cancel each other out and sum up to{' '}
                        <M>0</M>:
                    </P>

                    <BlockMath>{math`
                        - 7 + 15 = 8 + 0 \\ 15 - 7 = 8 \\ 8 = 8
                    `}</BlockMath>

                    <P>
                        The equality remained true because we performed the same action on both sides of the equality.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem label="Multiplication">
                <ProblemDescription>
                    <P>
                        What new equality will be obtained if, according to the same action rule, you multiply the
                        equality below by the number <M>5</M>?
                    </P>
                    <BlockMath>{math`\frac{10}{5} = 2`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Will result in equality" answer={/10\s*=\s*10/} />
                <ProblemAnswer>
                    <M>10 = 10</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The original equality is true because there are different notations of the number <M>2</M> to
                        the left and right of the <M>=</M> sign. According to the same action rule, we multiply both
                        sides of the equality by the number <M>5</M>:
                    </P>

                    <BlockMath>{math`
                        \brand{\cdot \ 5} \ | \ \frac{10}{5} = 2 \ | \brand{\cdot 5} \\ \frac{10}{\cancel{5}} \cdot \cancel{5} = 2 \cdot 5
                    `}</BlockMath>

                    <P>
                        On the left side of the equality, <M>5</M> in the denominator and our added factor <M>5</M>{' '}
                        cancel out and give <M>1</M>:
                    </P>

                    <BlockMath>{math`
                        10 \cdot 1 = 2 \cdot 5 \\ 10 = 10
                    `}</BlockMath>

                    <P>
                        The equality remained true because we performed the same action on both sides of the equality.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem label="Division">
                <ProblemDescription>
                    <P>
                        What new equality will be obtained if, according to the same action rule, you divide the
                        equality below by the number <M>7</M>?
                    </P>
                    <BlockMath>{math`21 = 7 \cdot 3`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Will result in equality" answer={/3\s*=\s*3/} />
                <ProblemAnswer>
                    <M>3 = 3</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The original equality is true because there are different notations of the number <M>21</M> to
                        the left and right of the <M>=</M> sign. According to the same action rule, we divide both sides
                        of the equality by the number <M>7</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div \ 7} \ | \ 21 = 7 \cdot 3 \ | \brand{\div 7} \\ \frac{21}{7} = \frac{\cancel{7} \cdot 3}{\cancel{7}}
                    `}</BlockMath>
                    <P>
                        On the right side of the equality, the numbers <M>7</M> in the numerator and denominator cancel
                        out and give <M>1</M>:
                    </P>

                    <BlockMath>{math`
                        3 = 1 \cdot 3 \\ 3 = 3
                    `}</BlockMath>

                    <P>
                        The equality remained true because we performed the same action on both sides of the equality.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <P>
            So why do we need this rule? What's the point of these useless examples? The point is that it is this rule
            that allows us to transform any equality. For example, to reduce complex equalities to elementary ones{' '}
            <B>without changing their type</B>! Started with a true one? Transform it a hundred times, in the end it
            will still be a true equality!
        </P>

        <P>It turns out that with the help of this rule, one can easily and simply solve equations!</P>

        <H1 snippet={{ seo: true, title: 'Solving Elementary Equations' }}>Elementary Equations</H1>

        <P>
            The overwhelming majority of all equations in mathematics (and in other sciences) are solved using the{' '}
            <Ref to={uniques.sameActionRule}>same action rule</Ref>. This is the most fundamental, basic, and incredibly
            powerful tool in its simplicity.
        </P>

        <P>Let's test it in action! Let's try to solve some simple equation, for example:</P>

        <BlockMath>{math`x + 3 = 10`}</BlockMath>

        <P>
            Recall that <Dep to={uniques.equationSolution}>"solving an equation"</Dep> means finding numbers that turn
            it into a true equality.{' '}
            <B>
                We will assume "in advance" or "on credit" that the equation has solutions, and therefore we are working
                with a true equality.
            </B>{' '}
            And since we are working with a true equality, we can apply the same action rule, obtaining from it new true
            equalities. Let's subtract the number <M>3</M> from both sides of the equation. According to the rule, from
            a true (by our assumption) equality we get a new true equality:
        </P>

        <BlockMath>{math`x + 3 - 3 = 10 - 3 \\ x = 7`}</BlockMath>

        <P>
            From the true equality <M>x + 3 = 10</M>, we obtained the true equality <M>x = 7</M>. Since the equality{' '}
            <M>x = 7</M> is true, it means that <M>x</M> and <M>7</M> are <B>one and the same</B>, that is, the unknown
            number <M>x</M> is the number <M>7</M>. And so we found the solution to the equation! We can even perform a
            check and substitute the number <M>7</M> instead of <M>x</M> in the original equation <M>x + 3 = 10</M>:
        </P>

        <BlockMath>{math`7 + 3 = 10 \\ 10 = 10`}</BlockMath>

        <P>
            For clarity, let's represent the solution of this equation in the form of actions with scales. Unlike other
            examples, here on the left pan of the scales we have a weight with an unknown weight <M>x</M>. We remove a
            weight of <M>3</M> from the left pan, and on the right we "tear off" a piece of the same weight from a
            weight of <M>10</M>. On the obtained new scales, we are essentially weighing a weight with an unknown weight{' '}
            <M>x</M>. And it "weighs" exactly <M>7</M>:
        </P>

        <Image src={equationScalesIdea} width="800px" invert="dark">
            <Caption>
                Visualization of solving the equation <M>x + 3 = 10</M>
            </Caption>
        </Image>

        <Important title="Simplifying to the Obvious">
            Starting to solve an equation, we assume it is a <B accent>true</B> equality "in absentia". This allows
            applying the same action rule time after time and obtaining simpler <B accent>true</B> equalities until it
            becomes obvious what the unknown is equal to.
        </Important>

        <P>
            The main question in solving equations is how many and what actions need to be performed to simplify the
            equation to an obvious equality. Now we will deal with this question using the example of the most
            elementary arithmetic operations: addition, subtraction, multiplication, and division.
        </P>

        <H2>Addition and Subtraction</H2>

        <P>
            With addition and subtraction, everything is quite simple. The main task is to add or subtract a number so
            that <M>0</M> is obtained. This way you can get rid of unnecessary and interfering pieces of equalities.
            Let's look at examples. Be sure to carefully study the solution of each, there are tricky nuances:
        </P>

        <Problems title="Equations with Addition and Subtraction" level="easy">
            <P>
                Solve the equations using the <Dep to={uniques.sameActionRule}>same action rule</Dep>:
            </P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`100 + x = 2025`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={1925} />
                <ProblemHint>
                    Addition with the number <M>100</M> prevents the variable <M>x</M> from remaining alone. How to get
                    rid of it?
                </ProblemHint>
                <ProblemAnswer>
                    <M>1925</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We want <M>x</M> to remain alone. Now the number <M>100</M> is interfering with it. To get rid
                        of it, according to the
                        <Dep to={uniques.sameActionRule}>same action rule</Dep>, subtract the number <M>100</M> from
                        both sides of the equation. Then on the left <M>100</M> and <M>-100</M> will destroy each other,
                        and only <M>x</M> will remain:
                    </P>

                    <BlockMath>{math`
                        100 + x = 2025 \\
                        \brand{-100} \ | \ 100 + x = 2025 \ | \brand{-100} \\
                        -\cancel{100} + \cancel{100} + x = 2025 - 100 \\
                        \boxed{x = 1925}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-8 = -8 + t`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={0} />
                <ProblemHint>
                    Addition with the number <M>-8</M> prevents the variable <M>t</M> from remaining alone. How to get
                    rid of it?
                </ProblemHint>
                <ProblemAnswer>
                    <M>0</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We want <M>t</M> to remain alone. Now the number <M>-8</M> is interfering with it. To get rid of
                        it, according to the
                        <Dep to={uniques.sameActionRule}>same action rule</Dep>, add the number <M>8</M> to both sides
                        of the equation. Then on the right <M>-8</M> and <M>+8</M> will destroy each other, and only{' '}
                        <M>t</M> will remain:
                    </P>

                    <BlockMath>{math`
                        -8 = -8 + t \\
                        \brand{+8} \ | \ -8 = -8 + t \ | \brand{+8} \\
                        -\cancel{8} + \cancel{8} = -\cancel{8} + t + \cancel{8} \\
                        \boxed{0 = t}
                    `}</BlockMath>

                    <P>
                        Note that <Ref to={uniques.sideInvariance}>there is no difference</Ref> on which side, left or
                        right, the variable remains. Many have an unconscious desire to make it so that the variable is
                        on the left. Make it so that it is <B>convenient to simplify the equality</B>, and do not try to
                        intentionally leave the variable in a certain part of the equality to the detriment of
                        simplicity!
                    </P>

                    <Details $={uniques.sideInvariance} title='Swapping "scales"'>
                        <P>
                            "Scales" can always simply be swapped around, and then the left bowl becomes the right one,
                            and the right one -- the left one. Therefore, there is no difference where the variable is
                            located. The main thing is that it is alone and there is nothing superfluous on the bowl
                            with it.
                        </P>

                        <P>
                            You can understand the swapping of equalities in more detail in the{' '}
                            <Ref to={twister}>Twister</Ref> problem.
                        </P>
                    </Details>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`5 + y = 2y`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={5} />
                <ProblemHint>
                    The variable <M>y</M> is present on both sides of the equation. What action to apply to both sides
                    of the equality to destroy <M>y</M>, say, on the left side of the equation?
                </ProblemHint>
                <ProblemAnswer>
                    <M>5</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The situation here is tricky. Our unknown <M>y</M> is on two "scale pans" at once. We need it to
                        remain only on one. In this case, it is good if <M>y</M> remains only on the right scale pan,
                        because no additional numbers are added or subtracted there.
                    </P>

                    <P>
                        According to the <Dep to={uniques.sameActionRule}>same action rule</Dep>, subtract <M>y</M> from
                        both sides of the equation. Then on the left side <M>y</M> and <M>-y</M> will destroy each
                        other, and only <M>5</M> will remain there:
                    </P>

                    <BlockMath>{math`
                        5 + y = 2y \\
                        \brand{-y} \ | \ 5 + y = 2y \ | \brand{-y} \\
                        5 + \cancel{y} - \cancel{y} = 2y - y \\
                        \boxed{5 = y}
                    `}</BlockMath>

                    <P>As you can see, you can "destroy" not only numbers, but also variables!</P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`z + 20 = z`}</BlockMath>
                </ProblemDescription>
                <ProblemHint>
                    What action to apply to both sides of the equality to destroy <M>z</M>, say, on the right side of
                    the equation?
                </ProblemHint>
                <ProblemAnswer>The equation has no solutions.</ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Again, our unknown <M>z</M> is on two "scale pans" at once. We need it to remain only on one.
                        According to the
                        <Dep to={uniques.sameActionRule}>same action rule</Dep>, subtract <M>z</M> from both sides of
                        the equation:
                    </P>

                    <BlockMath>{math`
                        z + 20 = z \\
                        \brand{-z} \ | \ z + 20 = z \ | \brand{-z} \\
                        - \cancel{z} + \cancel{z} + 20 = \cancel{z} - \cancel{z} \\
                        20 = 0
                    `}</BlockMath>

                    <P>
                        We got a false equality. We started from the fact that the equality is <B>true</B> (that is, it
                        has at least some solutions), applied the same action rule, but as a result, instead of true, we
                        got a <B>false</B> equality.
                    </P>

                    <P>
                        Contradiction, because the same action rule cannot "produce" a false equality! It means our
                        initial assumption about truth and existence of solutions was erroneous and in fact this has{' '}
                        <B>equation has no solutions!</B>
                    </P>

                    <P>
                        In general, this is visible without solving. There is no such number that, when added to{' '}
                        <M>20</M>, would give itself, because when added to <M>20</M>, a number will be obtained that is{' '}
                        <M>20</M> greater than the original.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <H2>Multiplication and Division</H2>

        <P>
            In addition and subtraction, we simplified equalities by "destroying" interfering pieces by reducing them to{' '}
            <M>0</M>. With multiplication and division, there is a similar simplification tool. Instead of "destroying"
            through zero, for these operations <B>reduction</B> (cancellation) is used:
        </P>

        <Problems title="Equations with Multiplication and Division" level="easy">
            <P>
                Solve the equations using the <Dep to={uniques.sameActionRule}>same action rule</Dep>:
            </P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`20x = 500`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={25} />
                <ProblemHint>
                    Multiplication by the number <M>20</M> prevents the variable <M>x</M> from remaining alone. How to
                    get rid of it?
                </ProblemHint>
                <ProblemAnswer>
                    <M>25</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We want <M>x</M> to remain alone. Now the number <M>20</M> is interfering with it. To get rid of
                        it, according to the
                        <Dep to={uniques.sameActionRule}>same action rule</Dep>, divide both sides of the equation by
                        the number <M>20</M>. Then on the left <M>20</M> in the numerator and <M>20</M> in the
                        denominator can be cancelled (<M>20 : 20 = 1</M>), and only <M>x</M> will remain there:
                    </P>

                    <BlockMath>{math`
                        20x = 500 \\
                        \brand{:20} \ | \ 20x = 500 \ | \brand{:20} \\
                        \frac{\cancel{20}x}{\cancel{20}} = \frac{500}{20} \\
                        \boxed{x = 25}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-5 = \frac{y}{3}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-15} />
                <ProblemHint>
                    Division by the number <M>3</M> prevents the variable <M>y</M> from remaining alone. How to get rid
                    of it?
                </ProblemHint>
                <ProblemAnswer>
                    <M>-15</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We want <M>y</M> to remain alone. Now the number <M>3</M> is interfering with it. To get rid of
                        it, according to the
                        <Dep to={uniques.sameActionRule}>same action rule</Dep>, multiply both sides of the equation by
                        the number <M>3</M>. Then on the right <M>3</M> in the numerator and <M>3</M> in the denominator
                        can be cancelled (<M>3 : 3 = 1</M>
                        ), and only <M>y</M> will remain there:
                    </P>

                    <BlockMath>{math`
                        -5 = \frac{y}{3} \\
                        \brand{\cdot 3} \ | \ -5 = \frac{y}{3} \ | \brand{\cdot 3} \\
                        3 \cdot (-5) = \frac{y}{\cancel{3}} \cdot \cancel{3} \\
                        \boxed{-15 = y}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <P>
            By the way, those who are just learning to solve equations often have a desire to drastically simplify the
            equation by multiplying both sides by <M>0</M>.
        </P>

        <BlockMath>{math`
            \brand{\cdot \ 0} \ | \ 2x = 10 \ | \brand{\cdot 0} \\ 0 \cdot 2x = 10 \cdot 0 \\ 0 = 0
        `}</BlockMath>

        <P>
            There is nothing wrong with this, and this action is not a mistake. Although we received a true equality, we
            lost absolutely all information about it, including information about the unknown variable! From{' '}
            <M>0 = 0</M> there is no way to get any more information about <M>x</M>. Therefore, such an action is
            absolutely useless.
        </P>

        <H2>Chains of Actions</H2>

        <P>
            All previous equations are elementary, and they can well be solved by trivial guessing. To solve them, we
            used only one action with both sides of the equality. But no one forbids performing several actions one
            after another or even a whole chain of actions on the equation!
        </P>

        <P>
            This is the whole power of the same action rule, with which you can solve even the most complex and
            confusing equations! It's time to demonstrate this power with examples:
        </P>

        <Problems $={uniques.chainExamples} title="Chains of Actions" level="easy">
            <P>
                Solve the equations using the <Dep to={uniques.sameActionRule}>same action rule</Dep>:
            </P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`4x - 4 = 5 + x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={3} />
                <ProblemHint>
                    Here you first need to perform some action so that the variable <M>x</M> remains only in some one
                    part of the equation. And then you will need to get rid of the interfering numbers. Use the same
                    action rule several times in a row!
                </ProblemHint>
                <ProblemAnswer>
                    <M>3</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Now the variable <M>x</M> is in both parts of the equality at once. We need to make it so that
                        it remains only in one, it doesn't matter which. Let it be the left part. To do this, subtract
                        the number <M>x</M> from both sides of the equation according to the same action rule. Then in
                        the right part <M>x</M> and <M>-x</M> will destroy each other, and only <M>5</M> will remain
                        there:
                    </P>

                    <BlockMath>{math`
                        4x - 4 = 5 + x \\
                        \brand{-x} \ | \ 4x - 4 = 5 + x \ | \brand{-x} \\
                        4x - 4 - x = 5 + \cancel{x} - \cancel{x} \\
                        3x - 4 = 5
                    `}</BlockMath>

                    <P>
                        But our work is not finished yet! Now in the left part our <M>x</M> is hindered by
                        multiplication by <M>3</M> and subtraction of <M>4</M>. To get rid of <M>-4</M>, according to
                        the same action rule add the number <M>4</M> to both sides of the equation. Then in the left
                        part <M>-4</M> and <M>+4</M> will destroy each other, and only <M>3x</M> will remain there:
                    </P>

                    <BlockMath>{math`
                        3x - 4 = 5 \\
                        \brand{+4} \ | \ 3x - 4 = 5 \ | \brand{+4} \\
                        3x - \cancel{4} + \cancel{4} = 5 + 4 \\
                        3x = 9
                    `}</BlockMath>

                    <P>
                        Now in the left part our <M>x</M> is hindered only by multiplication by <M>3</M>. To get rid of
                        it, according to the same action rule divide both sides of the equation by the number <M>3</M>.
                        Then on the left <M>3</M> and <M>3</M> can be cancelled (<M>3 : 3 = 1</M>), and only <M>x</M>{' '}
                        will remain there:
                    </P>

                    <BlockMath>{math`
                        3x = 9 \\
                        \brand{:3} \ | \ 3x = 9 \ | \brand{:3} \\
                        \frac{\cancel{3}x}{\cancel{3}} = \frac{9}{3} \\
                        \boxed{x = 3}
                    `}</BlockMath>

                    <P> So, to solve this equation we needed three consecutive actions:</P>

                    <List type="ol">
                        <Li>
                            Subtracting <M>x</M>
                        </Li>
                        <Li>
                            Adding <M>4</M>
                        </Li>
                        <Li>
                            Dividing by <M>3</M>
                        </Li>
                    </List>

                    <P>
                        Each time we did everything according to the same action rule, so each time we obtained a new{' '}
                        <B>true</B> equality. After three simplifications, we arrived at the true equality <M>x = 3</M>.
                        That is the unknown number <M>x</M> is the number <M>3</M>. <M>3</M> is the solution of the
                        equation <M>4x - 4 = 5 + x</M>.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{x + 10}{8} = -\frac{1}{8}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-11} />
                <ProblemHint>
                    First get rid of division by <M>8</M>. Then "free" the variable <M>x</M> from addition with{' '}
                    <M>10</M>.
                </ProblemHint>
                <ProblemAnswer>
                    <M>-11</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We have a fraction with a denominator of <M>8</M> on both sides of the equality. To get rid of
                        it, according to the same action rule, multiply both sides by the number <M>8</M>. Then on both
                        sides of the equality it is possible to cancel by <M>8</M> (<M>8 : 8 = 1</M>):
                    </P>

                    <BlockMath>{math`
                        \frac{x + 10}{8} = -\frac{1}{8} \\
                        \brand{\cdot 8} \ | \frac{x + 10}{8} = -\frac{1}{8} \ | \brand{\cdot 8} \\
                        \frac{\cancel{8}(x + 10)}{\cancel{8}} = -\frac{1}{\cancel{8}} \cdot \cancel{8} \\
                        x + 10 = -1
                    `}</BlockMath>

                    <P>
                        Now in the left part our <M>x</M> is hindered by addition with the number <M>10</M>. To get rid
                        of it, according to the same action rule subtract the number <M>10</M> from both sides of the
                        equation. Then in the left part <M>+10</M> and <M>-10</M> will destroy each other, and only{' '}
                        <M>x</M> will remain there:
                    </P>

                    <BlockMath>{math`
                        x + 10 = -1 \\
                        \brand{-10} \ | \ x + 10 = -1 \ | \brand{-10} \\
                        x + \cancel{10} - \cancel{10} = -1 - 10 \\
                        \boxed{x = -11}
                    `}</BlockMath>

                    <P>So, to solve this equation we needed two consecutive actions:</P>

                    <List type="ol">
                        <Li>
                            Multiplying by <M>8</M>
                        </Li>
                        <Li>
                            Subtracting <M>10</M>
                        </Li>
                    </List>

                    <P>
                        Both times we did everything according to the same action rule, so each time we obtained a new{' '}
                        <B>true</B> equality. After two simplifications, we arrived at the true equality <M>x = -11</M>.
                        That is the unknown number <M>x</M> is the number <M>-11</M>. <M>-11</M> is the solution of our
                        original equation.
                    </P>

                    <Hr />

                    <P>
                        Actually, we could have not done all this and noticed that both on the left and on the right
                        there are fractions with denominator <M>8</M>. On the right in the numerator is <M>-1</M> (the
                        minus was moved to the numerator), which means that on the left it is enough just to pick such a
                        number that, when added to <M>10</M>, gives <M>-1</M>. Obviously, this is the number <M>-11</M>,
                        because <M>-11 + 10 = -1</M>.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <H2>Many Ways -- One Result</H2>

        <P>
            Almost always equations can be solved in several ways. Some can be solved quickly, but using unusual actions
            (exponentiation, taking roots, etc.). And some more cumbersomely, but using elementary arithmetic
            operations.
        </P>

        <P>Yes, even within the framework of elementary actions there are many different options:</P>

        <Problems $={uniques.chainAlternate} title="One Equation -- Different Solutions" level="easy">
            <P>
                Solve both equations from the <Ref to={uniques.chainExamples}>problem above</Ref> in other ways:
            </P>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        This time try to first subtract <M>4x</M> from both sides of the equation.
                    </P>
                    <BlockMath>{math`4x - 4 = 5 + x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={3} />
                <ProblemAnswer>
                    <M>3</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The first time we left <M>x</M> in the left part of the equality. Now let's try to leave it in
                        the right part. To do this, according to the{' '}
                        <Dep to={uniques.sameActionRule}>same action rule</Dep>, subtract <M>4x</M> from both sides of
                        the equation. Then in the left part <M>4x</M> and <M>-4x</M> will destroy each other, and only{' '}
                        <M>-4</M> will remain there:
                    </P>

                    <BlockMath>{math`
                        4x - 4 = 5 + x \\
                        \brand{-4x} \ | \ 4x - 4 = 5 + x \ | \brand{-4x} \\
                        -\cancel{4x} + \cancel{4x} - 4 = 5 + x - 4x \\
                        -4 = 5 - 3x
                    `}</BlockMath>

                    <P>
                        Now in the right part our <M>x</M> is hindered by the number <M>5</M>. To get rid of it,
                        according to the same action rule subtract the number <M>5</M> from both sides of the equation.
                        Then in the right part <M>5</M> and <M>-5</M> will destroy each other, and only <M>-3x</M> will
                        remain there:
                    </P>

                    <BlockMath>{math`
                        -4 = 5 - 3x \\
                        \brand{-5} \ | \ -4 = 5 - 3x \ | \brand{-5} \\
                        -5 - 4 = -\cancel{5} - 3x + \cancel{5} \\
                        -9 = -3x
                    `}</BlockMath>

                    <P>
                        Now in the right part our <M>x</M> is hindered by multiplication by <M>-3</M>. To get rid of it,
                        according to the same action rule divide both sides of the equation by the number <M>-3</M>.
                        Then in the right part <M>-3</M> and <M>-3</M> can be cancelled (<M>-3 : -3 = 1</M>), and only{' '}
                        <M>x</M> will remain there:
                    </P>

                    <BlockMath>{math`
                        -9 = -3x \\
                        \brand{:(-3)} \ | \ -9 = -3x \ | \brand{:(-3)} \\
                        \frac{-9}{-3} = \frac{\cancel{-3}x}{\cancel{-3}} \\
                        \boxed{3 = x}
                    `}</BlockMath>

                    <P>
                        Despite the fact that from the very beginning we went a different way of solving, we still
                        arrived at the same solution of the equation, the number <M>3</M>.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        This time try to first get rid entirely of the fraction <M>{math`\frac{1}{7}`}</M> on the right.
                    </P>

                    <BlockMath>{math`\frac{x + 10}{8} = -\frac{1}{8}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-11} />
                <ProblemAnswer>
                    <M>-11</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The first time we got rid of fractions in both parts of the equality by multiplying both parts
                        by <M>8</M>. Now let's get rid only of the fraction in the right part. To do this, according to
                        the <Dep to={uniques.sameActionRule}>same action rule</Dep>, add to both sides of the equation
                        the fraction <M>{math`\frac{1}{8}`}</M>. Then in the right part <M>{math`-\frac{1}{8}`}</M> and{' '}
                        <M>{math`\frac{1}{8}`}</M> will destroy each other, and only <M>0</M> will remain there:
                    </P>

                    <BlockMath>{math`
                        \frac{x + 10}{8} = -\frac{1}{8} \\
                        \brand{+\frac{1}{8}} \ | \ \frac{x + 10}{8} = -\frac{1}{8} \ | \brand{+\frac{1}{8}} \\
                        \frac{1}{8} + \frac{x + 10}{8} = -\cancel{\frac{1}{8}} + \cancel{\frac{1}{8}} \\
                        \frac{1}{8} + \frac{x + 10}{8} = 0 \\
                        \frac{x + 10 + 1}{8} = 0 \\
                        \frac{x + 11}{8} = 0
                    `}</BlockMath>

                    <P>
                        Now in the left part of the equality we have a fraction with a denominator of <M>8</M>. To get
                        rid of it, according to the same action rule multiply both parts by the number <M>8</M>. Then in
                        the left part of the equality it is possible to cancel by <M>8</M> (<M>8 : 8 = 1</M>):
                    </P>

                    <BlockMath>{math`
                        \frac{x + 11}{8} = 0 \\
                        \brand{\cdot 8} \ | \ \frac{x + 11}{8} = 0 \ | \brand{\cdot 8} \\
                        \frac{\cancel{8}(x + 11)}{\cancel{8}} = 0 \cdot 8 \\
                        x + 11 = 0
                    `}</BlockMath>

                    <P>
                        Now in the left part our <M>x</M> is hindered by addition with the number <M>11</M>. To get rid
                        of it, according to the same action rule subtract the number <M>11</M> from both sides of the
                        equation. Then in the left part <M>+11</M> and <M>-11</M> will destroy each other, and only{' '}
                        <M>x</M> will remain there:
                    </P>

                    <BlockMath>{math`
                        x + 11 = 0 \\
                        \brand{-11} \ | \ x + 11 = 0 \ | \brand{-11} \\
                        x + \cancel{11} - \cancel{11} = 0 - 11 \\
                        \boxed{x = -11}
                    `}</BlockMath>

                    <P>
                        Despite the fact that from the very beginning we went a different way of solving, we still
                        arrived at the same solution of the equation: <M>-11</M>!
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <P>
            There is no "right" or "wrong" way to solve equations. It is only important to always adhere to the same
            action rule and not forget that the action happens with the entire equality, and not just with one of its
            parts. And the skill to immediately recognize a short path will come with time and experience in solving a
            large number of equations.
        </P>

        <H2>Action is Always "Global"</H2>

        <P>
            When you decide to multiply, divide, add, subtract or do something else with a part of the equality, this
            action must be performed on the <B>entire part as a whole</B>, and not just on its individual elements. If
            you multiply or divide, then do it with the <B>entire</B> part, placing it in brackets. You cannot
            multiply/divide only by one fraction or only by one term!
        </P>

        <P>
            Beginners regularly forget about this extremely important aspect of the same action rule when they want to
            quickly get rid of an inconvenient fraction or a complex expression. Let's analyze a typical mistake:
        </P>

        <Problem title='"Globality" Error' level="easy">
            <ProblemDescription>
                <P>
                    Look at the incorrect solution of the equation and think about where the mistake was made. Check
                    yourself by looking at the correct solution and finding the root of this equation.
                </P>

                <BlockMath>{math`\frac{x}{3} + 4 = 5`}</BlockMath>
            </ProblemDescription>
            <ProblemHint>Something is wrong with multiplication...</ProblemHint>
            <ProblemSolution>
                <ProblemSection title="Incorrect Solution">
                    <P>
                        According to the <Dep to={uniques.sameActionRule}>same action rule</Dep>, multiply both sides of
                        the equation by <M>3</M>:
                    </P>

                    <BlockMath>{math`
                        \frac{x}{3} + 4 = 5 \\
                        \brand{\cdot 3} \ | \ \frac{x}{3} + 4 = 5 \ | \brand{\cdot 3} \\
                        \frac{\cancel{3} \cdot x}{\cancel{3}} + 4 = 5 \cdot 3
                    `}</BlockMath>

                    <P>
                        Great, we got rid of the fraction! It remains to get rid of the number <M>4</M>. Subtract it
                        from both sides of the equation:
                    </P>

                    <BlockMath>{math`
                        x + 4 = 15 \\
                        \brand{-4} \ | \ x + 4 = 15 \ | \brand{-4} \\
                        x + \cancel{4} - \cancel{4} = 15 - 4 \\
                        \boxed{x = 11}
                    `}</BlockMath>
                </ProblemSection>
                <ProblemSection title="Correct Solution">
                    <P>
                        Beginners might want to first get rid of <M>3</M> in the denominator. To do this, they
                        "multiply" both sides by <M>3</M> and get something like this:
                    </P>

                    <BlockMath>{math`
                        \frac{x}{3} + 4 = 5 \\
                        \red{\cdot 3} \ | \ \frac{x}{3} + 4 = 5 \ | \red{\cdot 3} \\
                        \frac{\cancel{\red{3}} \red{\cdot} x}{\cancel{3}} + 4 = 5 \red{\cdot 3}
                    `}</BlockMath>

                    <P>
                        They did indeed get rid of the fraction, but they forgot about the fact that <M>4</M> is also
                        part of the equality. And an error occurs! So that this does not happen, when multiplying,
                        dividing and performing other complex actions <B>always</B> use brackets:
                    </P>

                    <BlockMath>{math`
                        \brand{\cdot 3} \ | \ \frac{x}{3} + 4 = 5 \ | \brand{\cdot 3} \\
                        3 \cdot \brand{\Big(} \frac{x}{3} + 4 \brand{\Big)} = \brand{(}5\brand{)} \cdot 3 \\
                        \frac{\cancel{\brand{3}} \cdot x}{\cancel{3}} + 4 \cdot \brand{3} = 5 \cdot \brand{3} \\
                        x + 12 = 15 \\
                        \brand{-12} \ | \ x + 12 = 15 \ | \brand{-12} \\
                        x + \cancel{12} - \cancel{12} = 15 - 12 \\
                        \boxed{x = 3}
                    `}</BlockMath>
                </ProblemSection>
            </ProblemSolution>
        </Problem>

        <P>
            To avoid such mistakes, always remember that the action on the equation applies to its entire left and right
            part, and not to any separate elements.
        </P>

        <Important $={uniques.alwaysGlobal} title='Action is Always "Global"'>
            <P>
                When transforming equalities, always apply the action <B accent>to the entire side</B> of the equality
                as a whole as a single unit, and <B accent>never</B> to its individual parts!
            </P>

            <BlockMath>{math`
                \red{\cdot \ 3} \ | \ 2x + 5 = 8 + x \ | \red{\cdot 3} \\
                3 \cdot \red{(} 2x + 5 \red{)} = \red{(}8 + x \red{)} \cdot 3 \\
                \red{3} \cdot 2x + \red{3} \cdot 5 = 8 \cdot \red{3} + x \cdot \red{3} \\
            `}</BlockMath>
        </Important>

        <H1>Common Mistakes</H1>

        <P>
            We have covered all the key aspects related to solving elementary equations. Now be sure to pay attention to
            a number of misconceptions and mistakes that very often arise among beginners. Perhaps you yourself, without
            noticing it, also make some of the mistakes below.
        </P>

        <List
            type="ul"
            $={uniques.commonMistakes}
            snippet={{
                quick: true,
                search: true,
                title: 'Mistakes when solving equations',
                seo: 'Common mistakes when solving equations',
                description: `
                    A list of common mistakes that beginners make when solving equations.
                `,
            }}
        >
            <Li>
                <P>
                    <B>"Equation" is when "equals 0"</B>
                </P>
                <P>
                    A common misconception that arises because many practice equations in textbooks and problem books
                    are written in the form <M>{math`\text{something there} = 0`}</M>. As you have already seen for
                    yourself from the examples above, to the left and right of the equal sign there can be anything:
                    numbers, variables, fractions and even complex expressions.
                </P>
            </Li>

            <Li>
                <P>
                    <B>
                        "To solve an equation" means to find <M>x</M>
                    </B>
                </P>
                <P>
                    Complete nonsense. Unfortunately, such an illiterate answer you will hear in 90% of cases from
                    schoolchildren and even students. To start with, the variable is not always denoted by the letter{' '}
                    <M>x</M>. A variable can be denoted by any letters and symbols, for example <M>y</M>, <M>z</M>,{' '}
                    <M>t</M>, <M>\alpha</M>, <M>\beta</M> etc.
                </P>
                <P>
                    But generally, as soon as you hear such an answer, immediately poke your finger at <M>x</M> and
                    confidently declare -- "Find <M>x</M>? Well, here it is! That's it? Is the equation solved?"
                </P>
                <Image src={foundIt} width="250px" />
                <P>
                    After you finish laughing, don't forget to tell what it actually means{' '}
                    <Ref to={uniques.equationSolution}>"to solve an equation"</Ref>.
                </P>
            </Li>

            <Li>
                <P>
                    <B>Solving equations "in a line"</B>
                </P>
                <P>
                    Usually mathematical expressions can be transformed (perform cancellations, open brackets, collect
                    like terms) in a line via a chain of equalities. For example, simplifying the expression{' '}
                    <M>{math`\frac{6}{3} + 2 \cdot 4`}</M>, we can write:
                </P>
                <BlockMath>{math`
                    \frac{6}{3} + 2(4 + 1) = 2 + 2 \cdot 4 + 2 \cdot 1 = 2 + 8 + 2 = 12
                `}</BlockMath>
                <P>
                    Very often beginners try to apply exactly the same approach when solving equations. It looks
                    different every time, but always incredibly creatively, for example:
                </P>
                <BlockMath>{math`
                    3 + x = 5 = 5 - 3 = 2 = x
                `}</BlockMath>
                <P>
                    This is a natural mistake, but it must be nipped in the bud. Doing so is fundamentally wrong! Each
                    new action on both sides, each "internal" transformation, everything must be on a separate line one
                    under another:
                </P>
                <BlockMath>{math`
                    3 + x = 5 \\
                    \brand{-3} \ | \ 3 + x = 5 \ | \brand{-3} \\
                    - \cancel{3} + \cancel{3} + x = 5 - 3 \\
                    x = 2
                `}</BlockMath>
            </Li>

            <Li>
                <P>
                    <B>Confusion with equivalent transformations</B>
                </P>
                <P>
                    Regularly after studying the <Dep to={uniques.sameActionRule}>rule</Dep> of the same action on
                    equations and equalities students start confusing it with ordinary expression transformations.
                    Consider this example:
                </P>
                <BlockMath>{math`
                    \frac{8}{4}x = 7
                `}</BlockMath>
                <P>
                    In the left part the fraction can be safely cancelled by <M>4</M> and get <M>2x = 7</M>. But
                    students <B>are afraid</B> to do this, because if "if I cancel the fraction on the left, then
                    according to the rule of same action I have to cancel on the right too". And since on the right
                    nothing cancels with anything, it means you can't do that.
                </P>
                <P>
                    Here you just need to understand that cancelling a fraction is essentially just replacing one
                    notation, <M>{math`\frac{8}{4}`}</M>, with another, <M>2</M>. Both these notations denote the same
                    number, and therefore they can be freely replaced with each other. Such actions are also called{' '}
                    <B>equivalent transformations</B> -- the form changes, the value does not. In analogy with
                    mechanical scales this can be compared to removing a weight of <M>3</M> kilograms and instead of it
                    putting a bucket of water weighing <M>3</M> kilograms -- it looks different, the essence is the
                    same.
                </P>
                <P>
                    Never confuse <B>equivalent transformations</B> (cancelling fractions, opening brackets, collecting
                    like terms, etc.), which do not change the essence in any way, with the <B>same action rule</B>,
                    which completely changes the equation! With equivalent transformations{' '}
                    <B>no actions are required</B> for "compensation" -- there is simply nothing to compensate!
                </P>
            </Li>
        </List>

        <H1>The Mystery of "Flying" Numbers</H1>

        <P>
            To our great regret, the vast majority of schoolchildren and students are not familiar with the concept of
            equality as "scales" and the intuitively following from it <Ref to={uniques.sameActionRule}>rule</Ref> of
            the same action. Therefore, they solve equations according to a whole set of rote-learned rules: numbers
            with plus and minus fly across the equal sign with the opposite sign; fractions on different sides of the
            equality are aligned by the method of "cross multiplication" and other mystical stories straight from the
            pages of the magazine "Mysteries of the 20th Century".
        </P>

        <Image src={flyingNumbers} width="300px" />

        <P>
            Naturally, a request to explain the essence of the actions performed almost always causes only surprised
            blinking of eyes... "well, that's just the rule" -- that's the only answer they can give. Remember once and
            for all:
        </P>

        <P center serif>
            <B>NUMBERS ARE NOT MIGRATORY BIRDS! THEY CANNOT FLY!</B>
        </P>

        <P>
            Compare two approaches when solving the equation <M>x - 5 = 8</M>:
        </P>

        <List type="ol">
            <Li>
                We dance with a tambourine, jump over a fire three times and move <M>-5</M> to the right with the
                opposite sign. We get <M>x = 8 + 5</M>. The answer is <M>13</M>. And why and how it happened, don't even
                think...
            </Li>
            <Li>
                The number <M>-5</M> prevents <M>x</M> from being alone. We need to get rid of it. To do this, add{' '}
                <M>5</M> to the left part of the equality. <M>-5</M> and <M>5</M> sum up to <M>0</M>, and <M>x</M>{' '}
                remains alone:{' '}
                <M>
                    x - \cancel{5} + \cancel{5} = 8
                </M>
                . By adding <M>5</M> on the left, we disturbed the balance. Having done something with one part of the
                equality, the same action must be performed with the other, then it will{' '}
                <Dep to={uniques.sameActionRule}>preserve</Dep> its truth. Therefore, add <M>5</M> on the right too:{' '}
                <M>x = 8 + 5</M>. The answer is <M>13</M>.
            </Li>
        </List>

        <P>
            The first option is shorter. And that is its only plus. But if the ritual is forgotten, it is impossible to
            restore it, because there is no understanding of why certain actions are performed. Rote-learned rituals are
            also impossible to adapt to other situations, because the logic that gave birth to these rituals is not
            clear.
        </P>

        <P>
            The second option uses a universal and intuitively understandable rule. Each step is logical and justified.
            Once you understand -- and you remember the essence/idea forever. It is not necessary to explain it so in
            detail every time in words.
        </P>

        <P>
            <B>Never</B> use rituals in mathematics. They are flawed and do not develop you in any way. There is nothing
            worse than mindlessly memorizing "ready-made algorithms" instead of fully understanding the actions
            performed.
        </P>

        <H1
            snippet={{
                quick: true,
                description: `
                    A set of examples requiring the ability to solve equations to work with.
                `,
            }}
        >
            Why Solve Equations?
        </H1>

        <P $={uniques.whySolveEquations}>
            Equalities and equations are literally everywhere! Countless real-life situations can be reduced to
            equations, that is, literally translated into the language of mathematics. Therefore, transforming
            equalities and solving equations is a basic and key skill not only in mathematics, but also in any exact
            science. Confident mastery of this skill is like a reliable and universal workbench for working with
            thoughts and ideas.
        </P>

        <H2
            snippet={{
                quick: true,
                search: ['magic triangle'],
                title: 'Triangle of Formulas',
                seo: 'Magic triangle of formulas',
                description: `
                    A mnemonic technique for memorizing simple formulas.
                `,
            }}
        >
            The Idiot's Triangle
        </H2>

        <P>
            The most glaring, illustrative and funny example of the inability to work with equalities and equations,
            when memorization is put above understanding -- the so-called "magic triangles of formulas" for "simple"
            memorization of formulas in physics and even mathematics!
        </P>

        <Image src={magicTrianglesEpidemic} width="600px">
            <Caption>Epidemic of magic triangles</Caption>
        </Image>

        <P>
            Such triangles work very simply -- you cover the letter you want to find with your finger, and from the
            remaining letters you get a ready-made formula. If the letters are on the same level, they are multiplied,
            if on different ones -- divided:
        </P>

        <Image src={magicTriangleUsage} width="700px" />

        <P>
            And what is funny about this? On the contrary, it is quite witty! It is indeed invented wittily, and looks
            beautiful, but <B>there is exactly zero sense</B>. Possessing the most elementary skills of working with
            equalities, no magic triangles are needed at all!
        </P>

        <P>
            It is enough to understand and remember at least one version of the formula. In the case of speed, it is
            easiest to understand that speed is distance "broken down" by time segments, that is, distance divided by
            time:
        </P>

        <BlockMath>{math`V = \frac{S}{t}`}</BlockMath>

        <P>
            That's all you need to know. And if the problem asks to find the distance? It means that in the equality
            above we need <M>S</M> to remain alone. By the <Dep to={uniques.sameActionRule}>rule</Dep> of the same
            action multiply both sides of the equality by <M>t</M>. Then in the right part <M>t</M> and <M>t</M> will
            cancel (<M>t : t = 1</M>), and only <M>S</M> will remain there:
        </P>

        <BlockMath>{math`
            V = \frac{S}{t} >>
            \brand{\cdot \ t} \ | \ V = \frac{S}{t} \ | \brand{\cdot t} >>
            V \cdot t = \frac{S}{\cancel{t}} \cdot \cancel{t} >>
            \boxed{V \cdot t = S}
        `}</BlockMath>

        <P>
            There you go, in 10 seconds from the speed formula we obtained the distance formula. Time is found through
            speed in a <Ref to={uniques._v2t}>similar way</Ref>. Without any magic triangles and other nonsense!
        </P>

        <Details $={uniques._v2t} title="Time through speed">
            <P>
                First, as for the distance formula, multiply both sides of the equality by <M>t</M>.
            </P>

            <BlockMath>{math`
                V = \frac{S}{t} >>
                \brand{\cdot \ t} \ | \ V = \frac{S}{t} \ | \brand{\cdot t} >>
                V \cdot t = \frac{S}{\cancel{t}} \cdot \cancel{t} >>
                V \cdot t = S
            `}</BlockMath>

            <P>
                Now we need to leave <M>t</M> alone on the left. To do this, according to the same action rule divide
                both sides of the equation by <M>V</M>. Then in the left part <M>V</M> and <M>V</M> will cancel (
                <M>V : V = 1</M>), and only <M>t</M> will remain there:
            </P>

            <BlockMath>{math`
                V \cdot t = S >>
                \brand{:V} \ | \ V \cdot t = S \ | \brand{:V} >>
                \frac{\cancel{V} \cdot t}{\cancel{V}} = \frac{S}{V} >>
                \boxed{t = \frac{S}{V}}
            `}</BlockMath>
        </Details>

        <P>
            Just like that, knowing only one basic formula, you don't need to memorize anything else, because you can
            always obtain all other formulas you need by elementary actions on equalities. This applies not only to
            speed, but also to all other formulas in physics and mathematics. Learn to understand the essence, not to
            memorize beautiful pictures!
        </P>

        <Reference to={magicTrianglesProblem}>
            The magic triangle will meet you again in the practice section. Moreover, it got offended and called its
            more complex brothers...
        </Reference>

        <H2
            snippet={{
                seo: 'Where are equations used in life?',
                quick: true,
                description: `
                    A selection of problems and situations from real life that can be solved if translated into equations.
                `,
            }}
        >
            Equations in Life
        </H2>

        <P>
            One of the equations' superpowers is that they allow us to translate questions arising in real life onto
            "mathematical rails".
        </P>

        <P>
            We take a daily situation, identify numerical values in it, denote what we are looking for with variables,
            and set up equations. And once we manage to write down the problem in the form of an equation, we can use
            the rules and methods described above to solve it. Here is a clear demonstration:
        </P>

        <Problems $={uniques.realLifeApplications} title="Applying equations in life" level="easy" applied>
            <P>No matter what sphere of human activity you take, you can find equations everywhere!</P>

            <SubProblem label="Finances">
                <ProblemDescription>
                    <Image src={savingMoney} width="400px" />
                    <P>
                        Alina wants to buy a new phone, which currently costs <M>10,000</M> rubles. Every day she saves{' '}
                        <M>100</M> rubles. However, every day the price of the phone increases by <M>20</M> rubles! How
                        many days does she need to save money to accumulate the necessary amount?
                    </P>
                </ProblemDescription>
                <ProblemCheck answer={125} />
                <ProblemHint>
                    Imagine that you already know the exact number of days needed to save money. Donate this number of
                    days with the letter <M>t</M>. How do you get the amount of accumulated money from this <M>t</M>?
                </ProblemHint>
                <ProblemAnswer>
                    <M>125</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        In the problem there is an unknown quantity -- the very number of days during which Alina will
                        save money so that she has enough for the phone. Let's imagine that we already know it and
                        denote it with some letter, for example <M>t</M>. We can work with this letter exactly as with
                        any numbers!
                    </P>

                    <P>
                        Since <M>t</M> is exactly the number of days she saved, <M>{math`t \cdot 100`}</M> is the amount
                        of money she saved during these days. Since with this money she can definitely buy the phone,
                        this amount of money is equal to the initial sum of the phone plus the inflation accumulated
                        over the same <M>t</M> days:
                    </P>

                    <BlockMath>{math`t \cdot 100 = 10000 + t \cdot 20`}</BlockMath>

                    <P>
                        Look, we compressed the text condition of the problem, a whole paragraph in size, into an
                        elementary equation!
                    </P>

                    <P>
                        Now let's solve this equation. We have <M>t</M> on both sides of the equation. Therefore, by the{' '}
                        <Dep to={uniques.sameActionRule}>rule</Dep> of the same action, let's subtract <M>t \cdot 20</M>{' '}
                        from both parts of the equation. On the right, <M>20</M> "t's" will cancel out, and on the left{' '}
                        <M>100t - 20t</M> will leave <M>80t</M>:
                    </P>

                    <BlockMath>{math`
                        t \cdot 100 = 10000 + t \cdot 20 \\
                        \brand{- t \cdot 20} \ | \ t \cdot 100 = 10000 + t \cdot 20 \ | \brand{- t \cdot 20} \\
                        t \cdot 100 - t \cdot 20 = 10000 + \cancel{t \cdot 20} - \cancel{t \cdot 20} \\
                        t \cdot 80 = 10000
                    `}</BlockMath>

                    <P>
                        Now <M>t</M> is prevented from staying alone only by multiplication by <M>80</M>. To get rid of
                        it, divide both parts of the equation by <M>80</M>:
                    </P>

                    <BlockMath>{math`
                        t \cdot 80 = 10000 \\
                        \brand{:80} \ | \ t \cdot 80 = 10000 \ | \brand{:80} \\
                        \frac{\cancel{80} \cdot t}{\cancel{80}} = \frac{10000}{80} \\
                        \boxed{t = 125}
                    `}</BlockMath>

                    <P>
                        It turns out that Alina will have to save money for <M>125</M> days or slightly more than{' '}
                        <M>4</M> months!
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem label="Physics">
                <ProblemDescription>
                    <Image src={cyclists} width="400px" />
                    <P>
                        Two cyclists started simultaneously towards each other from two cities, the distance between
                        which is <M>80</M> km, and met after <M>2</M> hours. The speed of the second cyclist is <M>2</M>{' '}
                        km/h higher than the speed of the first. What is the speed of each cyclist?
                    </P>
                </ProblemDescription>
                <ProblemCheck label="Cyclists' speed" hint="Comma separated!" set={[19, 21]} />
                <ProblemHint>
                    Denote the speed of the first cyclist with the letter <M>x</M>. Since the speed of the second is{' '}
                    <M>2</M> km/h higher, his speed can be written in terms of the first one's speed as <M>x + 2</M>.
                    Then set up an equation based on the total distance of <M>80</M> km covered by them.
                </ProblemHint>
                <ProblemAnswer>
                    The speed of the first cyclist is <M>19</M> km/h, the second is <M>21</M> km/h.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        It would seem that there are two unknown quantities in the problem -- the speed of the first
                        cyclist and the speed of the second. But in fact, the speed of the second is expressed through
                        the speed of the first. If we denote the speed of the first cyclist by <M>x</M>, then the speed
                        of the second is <M>2</M> km/h higher, that is <M>x + 2</M>.
                    </P>

                    <P>
                        Distance equals speed multiplied by time. The first one covered the distance{' '}
                        <M>{math`x \cdot 2`}</M> in <M>2</M> hours with speed <M>x</M>. The second one covered the
                        distance <M>{math`(x + 2) \cdot 2`}</M> in the same <M>2</M> hours with speed <M>x+2</M>. And in
                        total they covered <M>80</M> km. Therefore, we can write the equation:
                    </P>

                    <BlockMath>{math`
                        \underbrace{x\cdot 2}_{\text{Dist. of 1st cyclist}} + \underbrace{(x+2)\cdot 2}_{\text{Dist. of 2nd cyclist}} = 80
                    `}</BlockMath>

                    <P>
                        According to the <Dep to={uniques.sameActionRule}>rule</Dep>, let's divide both parts of the
                        equation by $2$. At the same time, do not forget that on the left, division happens{' '}
                        <Dep to={uniques.alwaysGlobal}>over the entire</Dep> part!
                    </P>

                    <BlockMath>{math`
                        x\cdot 2 + (x+2)\cdot 2 = 80 \\
                        \brand{:2} \ | \ x\cdot 2 + (x+2)\cdot 2 = 80 \ | \brand{:2} \\
                        \frac{x\cdot 2 + (x+2)\cdot 2}{2} = \frac{80}{2} \\
                        \frac{x\cdot \cancel{2}}{\cancel{2}} + \frac{(x+2)\cdot \cancel{2}}{\cancel{2}} = \frac{80}{2} \\
                        x + x+2 = 40 \\
                        2x + 2 = 40
                    `}</BlockMath>

                    <P>
                        Now in the left part of the equation, addition with the number <M>2</M> and multiplication by{' '}
                        <M>2</M> hinder us. Again, divide both parts of the equation by <M>2</M>. Then in the left part
                        in both terms <M>2</M> and <M>2</M> will cancel out (<M>2 : 2 = 1</M>), and only <M>x + 1</M>{' '}
                        will remain there:
                    </P>

                    <BlockMath>{math`
                        2x + 2 = 40 \\
                        \brand{:2} \ | \ 2x + 2 = 40 \ | \brand{:2} \\
                        \frac{2x + 2}{2} = \frac{40}{2} \\
                        \frac{\cancel{2}x}{\cancel{2}} + \frac{\cancel{2}}{\cancel{2}} = \frac{40}{2} \\
                        x + 1 = 20
                    `}</BlockMath>

                    <P>
                        Now our unknown quantity <M>x</M> is hindered by addition with the number <M>1</M>. To get rid
                        of it, by the rule of the same action, subtract the number <M>1</M> from both parts of the
                        equation. Then on the left <M>+1</M> and <M>-1</M> will destroy each other, and only <M>x</M>{' '}
                        will remain there:
                    </P>

                    <BlockMath>{math`
                        x + 1 = 20 \\
                        \brand{-1} \ | \ x + 1 = 20 \ | \brand{-1} \\
                        x + \cancel{1} - \cancel{1} = 20 - 1 \\
                        \boxed{x = 19}
                    `}</BlockMath>

                    <P>
                        So, the speed of the first cyclist is <M>19</M> km/h. The speed of the second cyclist is{' '}
                        <M>2</M> km/h higher, that is <M>21</M> km/h.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem label="Planning">
                <ProblemDescription>
                    <Image src={carFactory} width="400px" />
                    <P>
                        The factory had to complete the car production order in <M>20</M> days. By producing <M>3</M>{' '}
                        cars daily over the plan, the factory had already produced <M>6</M> cars more than provided for
                        in the order two days before the deadline. How many cars was the factory supposed to produce
                        according to the order?
                    </P>
                </ProblemDescription>
                <ProblemCheck answer={480} />
                <ProblemHint>
                    Denote the standard speed of car manufacturing per day as <M>v</M>.
                </ProblemHint>
                <ProblemHint>
                    According to the order, in <M>20</M> days the factory had to manufacture <M>20v</M> cars.
                </ProblemHint>
                <ProblemHint>
                    But in fact, in <M>18</M> days it manufactured <M>18(v + 3)</M> cars, which is <M>6</M> cars more
                    than provided for in the order. Combine these two quantities in a single equation.
                </ProblemHint>
                <ProblemAnswer>
                    According to the order, the factory was supposed to produce <M>480</M> cars.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>First, let's extract useful data from the condition, removing all unnecessary "husks".</P>

                    <P>
                        Denote the standard speed of car manufacturing per day as <M>v</M>. Working at this speed, the
                        factory will complete the order in <M>20</M> days, i.e., it will produce <M>20v</M> cars.
                        However, it worked not at this speed, but at <M>3</M> cars per day more, i.e., with speed{' '}
                        <M>v + 3</M> and for <M>18</M> days produced <M>18(v + 3)</M> cars.
                    </P>

                    <P>
                        Included in <M>18(v + 3)</M> cars are all cars from the order (<M>20v</M> pieces) and plus
                        another <M>6</M> cars. So we got the equation:
                    </P>

                    <BlockMath>{math`
                        \underbrace{18(v + 3)}_{\scriptsize\text{Cars in 18 days}} = \underbrace{20v}_{\scriptsize\text{Cars upon order}} + 6
                    `}</BlockMath>

                    <P>Open the brackets on the left side:</P>

                    <BlockMath>{math`
                        18v + 54 = 20v + 6
                    `}</BlockMath>

                    <P>
                        We see that the unknown <M>v</M> is in both parts of the equation. Let's make it stay only in
                        one part, for example, the right one. To do this, by the{' '}
                        <Dep to={uniques.sameActionRule}>rule</Dep> of the same action, subtract <M>18v</M> from both
                        parts of the equation:
                    </P>

                    <BlockMath>{math`
                        18v + 54 = 20v + 6 \\
                        \brand{-18v} \ | \ 18v + 54 = 20v + 6 \ | \brand{-18v} \\
                        \cancel{18v} - \cancel{18v} + 54 = 20v + 6 - 18v \\
                        54 = 2v + 6
                    `}</BlockMath>

                    <P>
                        Now multiplication by <M>2</M> and addition with <M>6</M> prevent <M>v</M> from staying alone.
                        Let's get rid of the six first by subtracting it from both parts of the equation:
                    </P>

                    <BlockMath>{math`
                        54 = 2v + 6 \\
                        \brand{-6} \ | \ 54 = 2v + 6 \ | \brand{-6} \\
                        -6 + 54 = 2v + \cancel{6} - \cancel{6} \\
                        48 = 2v
                    `}</BlockMath>

                    <P>
                        Now let's get rid of multiplication by <M>2</M> by dividing both parts of the equation by{' '}
                        <M>2</M>:
                    </P>

                    <BlockMath>{math`
                        48 = 2v \\
                        \brand{:2} \ | \ 48 = 2v \ | \brand{:2} \\
                        \frac{48}{2} = \frac{\cancel{2}v}{\cancel{2}} \\
                        24 = v
                    `}</BlockMath>

                    <P>
                        We found the standard speed of car manufacturing per day -- <M>24</M>. According to the order,
                        it had to work at this speed for <M>20</M> days, which means the total production should have
                        been:
                    </P>

                    <BlockMath>{math`
                        20v = 20 \cdot 24 = 480
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <P>
            In fact, examples of applying equations in life can be cited endlessly. Above are shown only the most
            elementary, but still useful situations. That is why it is so important to be able to solve equations!
        </P>

        <H2>Actions can be anything</H2>

        <P>
            We considered only the most elementary actions on equalities and equations: addition, subtraction,
            multiplication, and division. But in mathematics there is a huge variety of other actions:
        </P>

        <List type="ul">
            <Li>Exponentiation</Li>
            <Li>Root extraction</Li>
            <Li>Taking logarithm</Li>
            <Li>Taking absolute value</Li>
            <Li>and so on...</Li>
        </List>

        <P>
            And for all of them, naturally, the <Dep to={uniques.sameActionRule}>rule</Dep> of the same action works!
        </P>

        <BlockMath>{math`
            \brand{(\default{x+2})^2} = \brand{(\default{8})^2} \\
            \brand{\log_{2}{\default{(x+2)}}} = \brand{\log_{2}{\default{8}}} >>
            \brand{\sqrt[3]{\default{x+2}}} = \brand{\sqrt[3]{\default{8}}} \\
            \brand{|\default{x + 2}|} = \brand{|\default{8}|}
        `}</BlockMath>

        <P>
            Not only numbers with letters can participate in equalities, but also entire functions. Then they can be,
            for example, differentiated or their limits found:
        </P>

        <BlockMath>{math`
            f(x) = g(x) \Rightarrow \brand{f'}(x) = \brand{g'}(x) \\
            f(x) = g(x) \Rightarrow \brand{\lim_{x \to a}} f(x) = \brand{\lim_{x \to a}} g(x)
        `}</BlockMath>

        <P>
            The objects and actions themselves become more and more abstract. In higher mathematics you will encounter
            matrices, non-geometric vectors, operators, functionals, and so on... Convenient analogies with scales will
            lose all meaning, but the rule of the same action will still work perfectly! This is one of the most
            universal principles of mathematics, which operates at all its levels.
        </P>
    </>
));
