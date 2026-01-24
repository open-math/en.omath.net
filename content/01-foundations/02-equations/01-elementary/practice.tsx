import { QED } from '#project/utils/qed';

// #region Media
//

import firstPrintedEquation from './assets/first-printed-equation.png';
import axe from './assets/practice/axe.svg';
import axeAnswers2014 from './assets/practice/axe-answers-2014.png';
import axeAnswers2025 from './assets/practice/axe-answers-2025.jpg';
import magicTriangle1 from './assets/practice/magic-triangle-1.svg';
import magicTriangle2 from './assets/practice/magic-triangle-2.svg';
import magicTriangle3 from './assets/practice/magic-triangle-3.svg';
import rootClasses from './assets/practice/root-classes.svg';

//
// #endregion

// #region Problem Scripts
//

import zeroFactors from './scripts/zero-factors';
import generalFormula from './scripts/general-formula';

//
// #endregion

// #region Deps
//

const equationSolution = $CONTENT.foundations.equations.elementary.article.$equationSolution;
const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const alwaysGlobal = $CONTENT.foundations.equations.elementary.article.$alwaysGlobal;
const firstEquation = $CONTENT.foundations.equations.elementary.article.$firstEquation;
const equalityFalseTrue = $CONTENT.foundations.equations.elementary.article.$equalityFalseTrue;

//
// #endregion

// #region Todos
//

/**
 * At least 10 equations each
 * Invent at least 10 (preferably more) equations in each category (easy, medium, hard).
 */

/**
 * Variable isolation problems (like in standardized exams)
 */

/**
 * Equations with no solutions and infinite number of solutions
 * They can be placed in medium and hard levels.
 * Desirably 5-10 of each type.
 */

/**
 * Merzlyak 6th grade
 * He has some decent word problems and brain teasers.
 */

//
// #endregion

export default defineProse({
    uniques: {
        linearRoot: Problems,
        twister: Problem,
        zeroFactors: Problems,
        fractionsFlip: Problems,
        sameActionRuleFalse: Problem,
        linearRootClasses: Problem,
        magicTriangles: Problems,
    },
})(({ uniques }) => (
    <>
        <Important title="This is basics!">
            The skill of transforming equalities and solving equations is fundamental in all mathematics and exact
            sciences. Try to solve as many problems as possible. Regardless of whether you managed to solve the problem
            or not, always open the solution and check the correctness of your reasoning.
        </Important>

        <Important title="Don't rush!">
            If you have no experience in solving equations, do not rush to do as much as possible at once. Break the
            solution of the problems of this practice into several days. A day for "basics" level problems, a day for
            "normal", a day for "advanced". At the beginning of a new day, re-solve those problems that you had
            difficulties with the previous time.
        </Important>

        <Problems title="Simple equations" level="easy">
            <P>Solve the equation:</P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x + 100 = 1`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-99} />
                <ProblemAnswer>
                    <M>-99</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        To get <M>x</M> alone, we need to get rid of adding <M>100</M>. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we subtract <M>100</M> from both sides of
                        the equation. Then <M>+100</M> and <M>-100</M> in the left side will cancel each other out (the
                        sum is <M>0</M>), and only <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{- 100} \ | \ x + 100 = 1 \ | \ \brand{- 100} \\
                        -\cancel{100} + x + \cancel{100} = 1 - 100 \\
                        \boxed{x = -99}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`76 = 3 + x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={73} />
                <ProblemAnswer>
                    <M>73</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        To get <M>x</M> alone, we need to get rid of adding <M>3</M>. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we subtract <M>3</M> from both sides of the
                        equation. Then <M>+3</M> and <M>-3</M> in the right side will cancel each other out (the sum is{' '}
                        <M>0</M>), and only <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{- 3} \ | \ 76 = 3 + x \ | \ \brand{- 3} \\
                        76 - 3 = \cancel{3} + x + \cancel{3} \\
                        \boxed{73 = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-x = -666`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={666} />
                <ProblemAnswer>
                    <M>666</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        To get <M>x</M> alone, we need to get rid of multiplication by <M>-1</M>. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we multiply both sides of the equation by{' '}
                        <M>-1</M>. Then in the left side multiplication of <M>-1</M> by <M>-1</M> will simply give{' '}
                        <M>1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -x = -666 \ | \ \brand{\cdot (-1)} \\
                        (-1)\cdot(-1) \cdot x = (-1)\cdot(-1)\cdot 666 \\
                        \boxed{x = 666}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`40 = 10 - x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-30} />
                <ProblemAnswer>
                    <M>-30</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Now addition of <M>10</M> prevents <M>x</M> from being alone. To get rid of it, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we subtract <M>10</M> from both sides of the
                        equation. Then <M>+10</M> and <M>-10</M> in the right side will cancel each other out (the sum
                        is <M>0</M>), and only <M>-x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{- 10} \ | \ 40 = 10 - x \ | \ \brand{- 10} \\
                        40 - 10 = \cancel{10} - x - \cancel{10} \\
                        30 = -x
                    `}</BlockMath>
                    <P>
                        Now <M>x</M> is negative, but we want it to be positive. To get rid of multiplication by{' '}
                        <M>-1</M>, by the rule of same action, we multiply both sides of the equation by <M>-1</M>. Then
                        in the right side multiplication of <M>-1</M> by <M>-1</M> will simply give <M>1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ 30 = -x \ | \ \brand{\cdot (-1)} \\
                        (-1)\cdot 30 = (-1)\cdot(-1)\cdot x \\
                        \boxed{-30 = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`8x = 80`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={10} />
                <ProblemAnswer>
                    <M>10</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        To get <M>x</M> alone, we need to get rid of multiplication by <M>8</M>. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we divide both sides of the equation by{' '}
                        <M>8</M>. Then in the left side we can cancel <M>8</M> and <M>8</M> (<M>8 : 8 = 1</M>), and only
                        <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 8} \ | \ 8x = 80 \ | \ \brand{\div 8} \\
                        \frac{\cancel{8}x}{\cancel{8}} = \frac{80}{8} \\
                        \boxed{x = 10}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`100 = \frac{x}{20}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={2000} />
                <ProblemAnswer>
                    <M>2000</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        To get <M>x</M> alone, we need to get rid of division by <M>20</M>. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we multiply both sides of the equation by{' '}
                        <M>20</M>. Then in the right side we can cancel <M>20</M> and <M>20</M> (<M>20 : 20 = 1</M>),
                        and only <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 20} \ | \ 100 = \frac{x}{20} \ | \ \brand{\cdot 20} \\
                        100\cdot 20 = \frac{x\cdot \cancel{20}}{\cancel{20}} \\
                        \boxed{2000 = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x+3 = -9x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['-0.3', '-3/10']} />
                <ProblemAnswer>
                    <M>{math`-\frac{3}{10}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <ProblemSection title="Solution 1">
                        <P>
                            Let's group <M>x</M> in one side of the equation, for example, in the right one. To do this,
                            by the <Dep to={sameActionRule}>rule</Dep> of same action, we subtract <M>x</M> from both
                            sides of the equation. Then <M>+x</M> and <M>-x</M> in the left side will cancel each other
                            out (the sum is <M>0</M>), and only <M>3</M> will remain there:
                        </P>
                        <BlockMath>{math`
                            \brand{- x} \ | \ x + 3 = -9x \ | \ \brand{- x} \\
                            - \cancel{x} + \cancel{x} + 3 = -9x - x \\
                            3 = -10x
                        `}</BlockMath>
                        <P>
                            Now multiplication by <M>-10</M> prevents <M>x</M> from being alone in the right side. To
                            get rid of it, by the rule of same action, we divide both sides of the equation by{' '}
                            <M>-10</M>. Then in the right side we can perform cancellation:
                        </P>
                        <BlockMath>{math`
                            \brand{\div -10} \ | \ 3 = -10x \ | \ \brand{\div -10} \\
                            \frac{3}{-10} = \frac{\cancel{-10}x}{\cancel{-10}} \\
                            \boxed{-\frac{3}{10} = x}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Solution 2">
                        <P>
                            Now let's group <M>x</M> in the left side of the equation. To do this, by the{' '}
                            <Dep to={sameActionRule}>rule</Dep> of same action, we add <M>9x</M> to both sides of the
                            equation. Then <M>-9x</M> and <M>+9x</M> in the right side will cancel each other out (the
                            sum is
                            <M>0</M>):
                        </P>
                        <BlockMath>{math`
                            \brand{+ 9x} \ | \ x + 3 = -9x \ | \ \brand{+ 9x} \\
                            9x + x + 3 = -\cancel{9x} + \cancel{9x} \\
                            10x + 3 = 0
                        `}</BlockMath>
                        <P>
                            Now multiplication by <M>10</M> and addition of <M>3</M> prevent <M>x</M> from being alone.
                            First, get rid of adding <M>3</M>. To do this, by the rule of same action, we subtract{' '}
                            <M>3</M>
                            from both sides of the equation. Then in the left side <M>+3</M> and <M>-3</M> will cancel
                            each other out (the sum is <M>0</M>), and only <M>10x</M> will remain there:
                        </P>
                        <BlockMath>{math`
                            \brand{- 3} \ | \ 10x + 3 = 0 \ | \ \brand{- 3} \\
                            -\cancel{3} + 10x + \cancel{3} = 0 - 3 \\
                            10x = -3
                        `}</BlockMath>
                        <P>
                            Divide both sides of the equation by <M>10</M>. Then in the left side we can cancel{' '}
                            <M>10</M> and <M>10</M> (<M>10 : 10 = 1</M>), and only <M>x</M> will remain there:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 10} \ | \ 10x = -3 \ | \ \brand{\div 10} \\
                            \frac{\cancel{10}x}{\cancel{10}} = \frac{-3}{10} \\
                            \boxed{x = -\frac{3}{10}}
                        `}</BlockMath>
                    </ProblemSection>
                </ProblemSolution>
                <ProblemNote>
                    A demonstrative example that some ways of solving are shorter than others. In this case, grouping{' '}
                    <M>x</M> in the right side of the equation turned out to be a shorter path to the solution.
                </ProblemNote>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{2}{7}x = 6\frac{2}{7}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={22} />
                <ProblemHint>
                    Convert the mixed fraction to improper fraction in the right side of the equation.
                </ProblemHint>
                <ProblemAnswer>
                    <M>22</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        There is a mixed fraction in the right side. It is inconvenient to work with them, so first we
                        convert it to an improper fraction.
                    </P>
                    <BlockMath>{math`\frac{2}{7}x = \frac{44}{7}`}</BlockMath>
                    <P>
                        To get <M>x</M> alone, we need to get rid of multiplication by <M>2</M> and division by <M>7</M>
                        . First, let's get rid of division by <M>7</M>. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we multiply both sides of the equation by{' '}
                        <M>7</M>. Then in the right side <M>7</M> and <M>7</M> will cancel (and in the left side too),
                        and only
                        <M>2x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 7} \ | \ \frac{2}{7}x = \frac{44}{7} \ | \ \brand{\cdot 7} \\
                        \cancel{7} \cdot \frac{2}{\cancel{7}}x = \frac{44}{\cancel{7}} \cdot \cancel{7} \\
                        2x = 44
                    `}</BlockMath>
                    <P>
                        Now only multiplication by <M>2</M> prevents <M>x</M> from being alone. To get rid of it, by the
                        rule of same action, we divide both sides of the equation by <M>2</M>. Then in the left side{' '}
                        <M>2</M> and <M>2</M> will cancel, and only <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 2x = 44 \ | \ \brand{\div 2} \\
                        \frac{\cancel{2}x}{\cancel{2}} = \frac{44}{2} \\
                        \boxed{x = 22}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`2 + 3x = -7x - 5`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['-0.7', '-7/10']} />
                <ProblemAnswer>
                    <M>{math`-\frac{7}{10}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <ProblemSection title="Solution 1">
                        <P>
                            Let's group <M>x</M> in one side of the equation, for example, in the right one. To do this,
                            by the <Dep to={sameActionRule}>rule</Dep> of same action, we subtract <M>3x</M> from both
                            sides of the equation. Then in the left side <M>+3x</M> and <M>-3x</M> will cancel each
                            other out (the sum is
                            <M>0</M>), and only <M>2</M> will remain there:
                        </P>
                        <BlockMath>{math`
                            \brand{- 3x} \ | \ 2 + 3x = -7x - 5 \ | \ \brand{- 3x} \\
                            - \cancel{3x} + 2 + \cancel{3x} = -7x - 5 - 3x \\
                            2 = -10x - 5
                        `}</BlockMath>
                        <P>
                            Now multiplication by <M>-10</M> and addition of <M>-5</M> prevent <M>x</M> from being alone
                            in the right side. First, let's get rid of adding <M>-5</M>. To do this, by the rule of same
                            action, we add <M>5</M> to both sides of the equation. Then in the right side <M>+5</M> and{' '}
                            <M>-5</M> will cancel each other out (the sum is <M>0</M>):
                        </P>
                        <BlockMath>{math`
                            \brand{+ 5} \ | \ 2 = -10x - 5 \ | \ \brand{+ 5} \\
                            2 + 5 = -10x - \cancel{5} + \cancel{5} \\
                            7 = -10x
                        `}</BlockMath>
                        <P>
                            Now multiplication by <M>-10</M> prevents <M>x</M> from being alone in the right side. To
                            get rid of it, by the rule of same action, we divide both sides of the equation by{' '}
                            <M>-10</M>. Then in the right side we can perform cancellation:
                        </P>
                        <BlockMath>{math`
                            \brand{\div -10} \ | \ 7 = -10x \ | \ \brand{\div -10} \\
                            \frac{7}{-10} = \frac{\cancel{-10}x}{\cancel{-10}} \\
                            \boxed{-\frac{7}{10} = x}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Solution 2">
                        <P>
                            Now let's group <M>x</M> in the left side of the equation. To do this, by the{' '}
                            <Dep to={sameActionRule}>rule</Dep> of same action, we add <M>7x</M> so that in the right
                            side <M>-7x</M> and <M>+7x</M> cancel each other out (the sum is <M>0</M>):
                        </P>
                        <BlockMath>{math`
                            \brand{+ 7x} \ | \ 2 + 3x = -7x - 5 \ | \ \brand{+ 7x} \\
                            7x + 2 + 3x = -\cancel{7x} - 5 + \cancel{7x} \\
                            2 + 10x = -5
                        `}</BlockMath>
                        <P>
                            Now multiplication by <M>10</M> and addition of <M>2</M> prevent <M>x</M> from being alone
                            in the left side. First, get rid of adding <M>2</M>. To do this, by the rule of same action,
                            we subtract <M>2</M> from both sides of the equation.
                        </P>
                        <BlockMath>{math`
                            \brand{- 2} \ | \ 2 + 10x = -5 \ | \ \brand{- 2} \\
                            -\cancel{2} + \cancel{2} + 10x = -5 - 2 \\
                            10x = -7
                        `}</BlockMath>
                        <P>
                            Finally, divide both sides of the equation by <M>10</M>. Then in the left side we can cancel{' '}
                            <M>10</M> and <M>10</M> (<M>10 : 10 = 1</M>), and only <M>x</M> will remain there:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 10} \ | \ 10x = -7 \ | \ \brand{\div 10} \\
                            \frac{\cancel{10}x}{\cancel{10}} = \frac{-7}{10} \\
                            \boxed{x = -\frac{7}{10}}
                        `}</BlockMath>
                    </ProblemSection>
                </ProblemSolution>
                <ProblemNote>
                    <P>
                        In this problem, it does not matter in which side of the equation to group <M>x</M>. The
                        solutions turned out to be identical in the number of transformations.
                    </P>
                </ProblemNote>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`10(x+2) = -7`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['-2.7', '-27/10']} />
                <ProblemAnswer>
                    <M>{math`-\frac{27}{10}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>First, expand the brackets:</P>
                    <BlockMath>{math`10x + 20 = -7`}</BlockMath>
                    <P>
                        Multiplication by <M>10</M> and addition of <M>20</M> prevent <M>x</M> from being alone. First,
                        let's get rid of adding <M>20</M>. To do this, by the <Dep to={sameActionRule}>rule</Dep> of
                        same action, we subtract <M>20</M> from both sides of the equation. Then in the left side{' '}
                        <M>+20</M> and <M>-20</M> will cancel each other out (the sum is <M>0</M>), and only <M>10x</M>{' '}
                        will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{- 20} \ | \ 10x + 20 = -7 \ | \ \brand{- 20} \\
                        - \cancel{20} + 10x + \cancel{20} = -7 - 20 \\
                        10x = -27
                    `}</BlockMath>
                    <P>
                        Now multiplication by <M>10</M> prevents <M>x</M> from being alone. To get rid of it, by the
                        rule of same action, we divide both sides of the equation by <M>10</M>. Then in the left side we
                        can cancel <M>10</M> and <M>10</M> (<M>10 : 10 = 1</M>), and only <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 10} \ | \ 10x = -27 \ | \ \brand{\div 10} \\
                        \frac{\cancel{10}x}{\cancel{10}} = \frac{-27}{10} \\
                        \boxed{x = -\frac{27}{10}}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`8 -5(2x-3) = 13 - 6x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['2.5', '5/2']} />
                <ProblemAnswer>
                    <M>{math`\frac{5}{2}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>First, expand the brackets and combine like terms in the left side of the equation:</P>
                    <BlockMath>{math`
                        8 - 10x + 15 = 13 - 6x \\
                        -10x + 23 = 13 - 6x
                    `}</BlockMath>
                    <P>
                        Let's choose in which side of the equation to group <M>x</M>. Let it be the right side. This
                        means we need to ensure no <M>x</M> remains in the left side. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we add <M>10x</M> to both sides of the
                        equation. Then in the left side <M>-10x</M> and <M>+10x</M> will cancel each other out (the sum
                        is <M>0</M>), and only the number <M>23</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 10x} \ | \ -10x + 23 = 13 - 6x \ | \ \brand{+ 10x} \\
                        +\cancel{10x} - \cancel{10x} + 23 = 13 - 6x + \cancel{10x} \\
                        23 = 13 + 4x
                    `}</BlockMath>
                    <P>
                        Now multiplication by <M>4</M> and addition of <M>13</M> prevent <M>x</M> from being alone.
                        First, let's get rid of adding <M>13</M>. To do this, we subtract <M>13</M> from both sides of
                        the equation.
                    </P>
                    <BlockMath>{math`
                        \brand{- 13} \ | \ 23 = 13 + 4x \ | \ \brand{- 13} \\
                        -13 + 23 = \cancel{13} + 4x - \cancel{13} \\
                        10 = 4x
                    `}</BlockMath>
                    <P>
                        Now multiplication by <M>4</M> prevents <M>x</M> from being alone. To get rid of it, by the rule
                        of same action, we divide both sides of the equation by <M>4</M>. Then in the right side we can
                        cancel <M>4</M> and <M>4</M> (<M>4 : 4 = 1</M>), and only <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 4} \ | \ 10 = 4x \ | \ \brand{\div 4} \\
                        \frac{10}{4} = \frac{\cancel{4}x}{\cancel{4}} \\
                        \boxed{\frac{5}{2} = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problem title="First printed equation" level="easy">
            <ProblemDescription>
                <P>
                    You have the honor of solving the <Dep to={firstEquation}>first</Dep> printed equation in history!
                </P>

                <Image src={firstPrintedEquation} width="400px" invert="dark" />

                <P>In modern notation:</P>

                <BlockMath>{math`14x + 15 = 71`}</BlockMath>
            </ProblemDescription>
            <ProblemCheck answer={4} />
            <ProblemAnswer>
                <M>4</M>
            </ProblemAnswer>
            <ProblemSolution>
                <P>
                    The first printed equation in history, despite the loud title, is solved in the same way as all
                    other equations. In the left side, the unknown <M>x</M> is not alone because of multiplication by{' '}
                    <M>14</M> and addition of <M>15</M>. First, let's get rid of adding <M>15</M>. To do this, by the{' '}
                    <Dep to={sameActionRule}>rule</Dep> of same action, we subtract <M>15</M> from both sides of the
                    equation. Then in the left side <M>+15</M> and <M>-15</M> will cancel each other out (the sum is{' '}
                    <M>0</M>), and only <M>14x</M> remains there.
                </P>
                <BlockMath>{math`
                    14x + 15 = 71 \\
                    \brand{- 15} \ | \ 14x + 15 = 71 \ | \ \brand{- 15} \\
                    14x + \cancel{15} - \cancel{15} = 71 - 15 \\
                    14x = 56
                `}</BlockMath>
                <P>
                    Now divide both sides by <M>14</M>. Then in the left side we can cancel <M>14</M> and <M>14</M> (
                    <M>14 : 14 = 1</M>), and only <M>x</M> will remain there:
                </P>
                <BlockMath>{math`
                    \brand{\div \ 14} \ | \ 14x = 56 \ | \ \brand{\div 14} \\
                    \frac{\cancel{14}x}{\cancel{14}} = \frac{56}{14} \\
                    \boxed{x = 4}
                `}</BlockMath>
                <P>
                    So, <M>4</M> is the only solution to the first printed equation in history!
                </P>
            </ProblemSolution>
        </Problem>

        <Problem title="War axe" level="easy" pretty>
            <ProblemDescription>
                <P>
                    An axe weighs a kilogram and a half of an axe.
                    <Br />
                    How much does the axe weigh?
                </P>
            </ProblemDescription>
            <ProblemCheck answer={2} />
            <ProblemAnswer>
                The axe weighs <M>2</M> kilograms.
            </ProblemAnswer>
            <ProblemSolution>
                <ProblemSection title="Solution using scales">
                    <P>
                        Imagine a mechanical scale in balance. On the left lies a whole axe, and on the right is half an
                        axe and a weight of <M>1</M> kilogram.
                    </P>
                    <Image src={axe} width="600px" invert="dark" />
                    <P>
                        It turns out that the <M>1</M> kilogram weight replaces the other half of the axe which is
                        missing from the scale. This means this weight weighs as much as this half of the axe. That is,
                        both the weight and the half-axe have the same mass -- <M>1</M> kilogram. And since <M>1</M>{' '}
                        kilogram is the mass of half the axe, the mass of the whole axe is twice as much -- <M>2</M>{' '}
                        kilograms.
                    </P>
                </ProblemSection>
                <ProblemSection title="Solution using an equation">
                    <P>
                        Let's denote the mass of the axe as <M>x</M> kilograms. Then the condition can be written as an
                        equation:
                    </P>
                    <BlockMath>{math`x = 1 + \frac{x}{2}`}</BlockMath>
                    <P>
                        By the <Dep to={sameActionRule}>rule of same action</Dep> subtract <M>{math`\frac{x}{2}`}</M>{' '}
                        from both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- \frac{x}{2}} \ | \ x = 1 + \frac{x}{2} \ | \ \brand{- \frac{x}{2}} \\
                        x - \frac{x}{2} = 1 + \cancel{\frac{x}{2}} - \cancel{\frac{x}{2}} \\
                        \frac{x}{2} = 1
                    `}</BlockMath>
                    <P>
                        Now multiply both parts of the equation by <M>2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 2} \ | \ \frac{x}{2} = 1 \ | \ \brand{\cdot 2} \\
                        \cancel{2}\cdot\frac{x}{\cancel{2}} = 1\cdot 2 \\
                        x = 2
                    `}</BlockMath>
                    <P>
                        The axe weighs <M>2</M> kilograms.
                    </P>
                </ProblemSection>
            </ProblemSolution>
            <ProblemNote>
                <P>
                    This is a classic riddle that occurs in various forms. Many may have heard its variation with a
                    brick that weighs a kilogram and half a brick. The trick of this problem is that trying to solve it
                    in your head almost always leads to funny mistakes or even stupor. Answers vary from <M>1</M>{' '}
                    kilogram to infinite mass. The answer <M>1.5</M> kilograms also appears very often, well, because
                    the axe is <M>1</M> and its half is <M>0.5</M>, so <M>1 + 0.5 = 1.5</M>. And for some, the task even
                    causes outbursts of anger, because "an axe cannot weigh as much as it weighs"! See for yourself:
                </P>

                <Gallery>
                    <Image src={axeAnswers2014} width="700px">
                        <Caption>In 2014</Caption>
                    </Image>
                    <Image src={axeAnswers2025} width="700px">
                        <Caption>In 2025</Caption>
                    </Image>
                </Gallery>
            </ProblemNote>
        </Problem>

        <Problem title="He multiplied by zero..." level="easy">
            <ProblemDescription>
                <P>
                    Matvey is solving the equation <M>x + 3 = 5</M>. He was too lazy to think, so he decided to pull a
                    fast one. He said that the solution to the equation is the number <M>10</M>.
                </P>
                <P>
                    To justify his solution, he substituted <M>10</M> instead of <M>x</M> into the equation, and then
                    multiplied both sides of the equation by <M>0</M>:
                </P>
                <BlockMath>{math`
                    10 + 3 = 5 \\
                    \brand{\cdot 0} \ | \ 10 + 3 = 5 \ | \ \brand{\cdot 0} \\
                    (10 + 3) \cdot 0 = 5 \cdot 0 \\
                    0 = 0
                `}</BlockMath>
                <P>
                    Since the result is a true equality, then <M>10</M> is the solution to the equation <M>x + 3 = 5</M>
                    . Today you are thinking for Matvey. Is he right? If not, specifically explain what is wrong with
                    his solution.
                </P>
            </ProblemDescription>
            <ProblemHint>Prove by definition that his solution is not a solution.</ProblemHint>
            <ProblemHint>Remember why we transform equations in the first place.</ProblemHint>
            <ProblemSolution>
                <P>
                    First, the number <M>10</M> that Matvey named is not a solution to the equation <M>x + 3 = 5</M>{' '}
                    purely by definition. Because <Dep to={equationSolution}>by definition</Dep>, a solution or root of
                    an equation is a number that, when substituted for the unknown in the equation, turns it into a true
                    equality. Substitute <M>10</M> instead of <M>x</M> and get a false equality:
                </P>
                <BlockMath>{math`
                    10 + 3 = 5 \\
                    13 = 5
                `}</BlockMath>
                <P>
                    Second, when solving an equation, our goal is not to get a true equality through transformations. We
                    assume from the start that the equality is true and begin to simplify it with transformations until
                    it becomes clear what the unknown is equal to. Therefore, multiplying by <M>0</M> is absolutely
                    useless, because it leads to the loss of <M>x</M> from the equation, which means we can no longer
                    find out what it equals.
                </P>
            </ProblemSolution>
        </Problem>

        <Problem title="Some number" level="easy">
            <ProblemDescription>
                <P>
                    Some number was multiplied by <M>2</M>, then <M>10</M> was added and <M>100</M> was obtained. What
                    was that number?
                </P>
            </ProblemDescription>
            <ProblemCheck answer={45} />
            <ProblemHint>
                Denote this number as <M>x</M> and mathematically write all actions performed on it in the form of an
                equation.
            </ProblemHint>
            <ProblemAnswer>
                <M>45</M>
            </ProblemAnswer>
            <ProblemSolution>
                <P>
                    Let's denote this some unknown number as <M>x</M>. It was multiplied by <M>2</M>, so we get{' '}
                    <M>2x</M>. Then <M>10</M> was added, so we already have <M>2x + 10</M>. And all this equals{' '}
                    <M>100</M>. We get the equation:
                </P>
                <BlockMath>{math`2x + 10 = 100`}</BlockMath>
                <P>
                    To get <M>x</M> alone, we need to get rid of multiplication by <M>2</M> and addition of <M>10</M>.
                    First, let's get rid of adding <M>10</M>. To do this, by the <Dep to={sameActionRule}>rule</Dep> of
                    same action, we subtract <M>10</M> from both sides of the equation.
                </P>
                <BlockMath>{math`
                    \brand{- 10} \ | \ 2x + 10 = 100 \ | \ \brand{- 10} \\
                    -\cancel{10} + 2x + \cancel{10} = 100 - 10 \\
                    2x = 90
                `}</BlockMath>
                <P>
                    Now divide both sides of the equation by <M>2</M>. Then in the left side we can cancel <M>2</M> and{' '}
                    <M>2</M> (<M>2 : 2 = 1</M>), and only <M>x</M> will remain there:
                </P>
                <BlockMath>{math`
                    \brand{\div 2} \ | \ 2x = 90 \ | \ \brand{\div 2} \\
                    \frac{\cancel{2}x}{\cancel{2}} = \frac{90}{2} \\
                    \boxed{x = 45}
                `}</BlockMath>
                <P>
                    So, the initial number is equal to <M>45</M>.
                </P>
            </ProblemSolution>
        </Problem>

        <Problem title="Price with a trick" level="easy" pretty>
            <ProblemDescription>
                <P>
                    A baseball bat and a ball together cost <M>110</M> rubles. The bat costs <M>100</M> rubles more than
                    the ball. How much does the ball cost?
                </P>
                <P>
                    First try to solve the problem quickly in your head. Then solve it using an equation and compare the
                    results.
                </P>
            </ProblemDescription>
            <ProblemCheck answer={5} />
            <ProblemHint>
                Denote the cost of the ball as <M>x</M> rubles.
            </ProblemHint>
            <ProblemAnswer>
                The ball costs <M>5</M> rubles, the bat <M>105</M> rubles.
            </ProblemAnswer>
            <ProblemSolution>
                <P>
                    If you try to solve the problem in your head, intuitively you just want to subtract <M>100</M> from
                    the total cost of <M>110</M> and get that the ball costs <M>10</M> rubles. But now let's think. If
                    the ball cost <M>10</M> rubles, then the bat would cost <M>10 + 100 = 110</M> rubles, which means
                    together they would cost <M>10 + 110 = 120</M> rubles, which is more than <M>110</M> rubles!
                </P>
                <P>
                    We are asked to find the cost of the ball. Let's denote it as <M>x</M> rubles. Then the cost of the
                    bat will be
                    <M>x + 100</M> rubles. And together they cost <M>110</M> rubles. Let's make an equation:
                </P>
                <BlockMath>{math`x + (x + 100) = 110`}</BlockMath>
                <P>Combine like terms in the left side of the equation:</P>
                <BlockMath>{math`2x + 100 = 110`}</BlockMath>
                <P>
                    To get <M>x</M> alone, we need to get rid of multiplication by <M>2</M> and addition of <M>100</M>.
                    First, let's get rid of adding <M>100</M>. To do this, by the <Dep to={sameActionRule}>rule</Dep> of
                    same action, we subtract <M>100</M> from both sides of the equation.
                </P>
                <BlockMath>{math`
                    \brand{- 100} \ | \ 2x + 100 = 110 \ | \ \brand{- 100} \\
                    -\cancel{100} + 2x + \cancel{100} = 110 - 100 \\
                    2x = 10
                `}</BlockMath>
                <P>
                    Now divide both sides of the equation by <M>2</M>. Then in the left side we can cancel <M>2</M> and{' '}
                    <M>2</M> (<M>2 : 2 = 1</M>), and only <M>x</M> will remain there:
                </P>
                <BlockMath>{math`
                    \brand{\div 2} \ | \ 2x = 10 \ | \ \brand{\div 2} \\
                    \frac{\cancel{2}x}{\cancel{2}} = \frac{10}{2} \\
                    \boxed{x = 5}
                `}</BlockMath>
                <P>
                    So, the ball costs <M>5</M> rubles, and the bat <M>5 + 100 = 105</M> rubles!
                </P>
            </ProblemSolution>
            <ProblemNote>
                <P>
                    This trick problem demonstrates well two types of thinking: "fast/intuitive", which consumes less
                    energy, and "slow/logical". When you try to solve this problem quickly in your head, the "fast" type
                    of thinking takes over, which subtracts <M>100</M> from the total sum of <M>110</M>
                    and gets that the ball costs <M>10</M> rubles. It does not check the result, but simply outputs it.
                </P>
            </ProblemNote>
        </Problem>

        <Problem title="Concrete mixer mixing concrete" level="easy" applied>
            <ProblemDescription>
                <P>
                    You are going to build your own house! For this you need a lot of concrete. Concrete is formed by
                    mixing cement and sand in a ratio of <M>1:3</M>, that is, for one kilogram of cement you need three
                    kilograms of sand. How much cement and sand do you need if you want to mix <M>100</M> kg of
                    concrete?
                </P>
            </ProblemDescription>
            <ProblemCheck answer={25} label="Cement" />
            <ProblemCheck answer={75} label="Sand" />
            <ProblemHint>
                Denote the mass of cement as <M>x</M>. Then the mass of sand will be <M>3x</M>.
            </ProblemHint>
            <ProblemHint>
                Alternatively denote the mass of sand as <M>x</M>. Then the mass of cement will be{' '}
                <M>{math`\frac{x}{3}`}</M>.
            </ProblemHint>
            <ProblemAnswer>
                <M>25</M> kilograms of cement and <M>75</M> kilograms of sand.
            </ProblemAnswer>
            <ProblemSolution>
                <ProblemSection title="Cement for unknown">
                    <P>
                        There is no particular difference what exactly we denote as unknown, cement or sand. Let the
                        mass of cement be the unknown, let's denote it as <M>x</M> kilograms. Then the mass of sand for
                        mixing concrete must be three times greater than the mass of cement, that is <M>3x</M>{' '}
                        kilograms. The total must be <M>100</M> kg of concrete:
                    </P>
                    <BlockMath>{math`x + 3x = 100`}</BlockMath>
                    <P>Combine like terms in the left side of the equation:</P>
                    <BlockMath>{math`4x = 100`}</BlockMath>
                    <P>
                        To get <M>x</M> alone, we need to get rid of multiplication by <M>4</M>. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we divide both sides of the equation by{' '}
                        <M>4</M>. Then in the left side <M>4</M> and <M>4</M> will cancel, and only <M>x</M> will remain
                        there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 4} \ | \ 4x = 100 \ | \ \brand{\div 4} \\
                        \frac{\cancel{4}x}{\cancel{4}} = \frac{100}{4} \\
                        \boxed{x = 25}
                    `}</BlockMath>
                    <P>
                        So, for mixing <M>100</M> kilograms of concrete, <M>25</M> kilograms of cement and{' '}
                        <M>3 \cdot 25 = 75</M> kilograms of sand will be required.
                    </P>
                </ProblemSection>
                <ProblemSection title="Sand for unknown">
                    <P>
                        Now let's denote the mass of sand as the unknown, that is <M>x</M> kilograms. Then the mass of
                        cement for mixing concrete must be three times less than the mass of sand, that is{' '}
                        <M>{math`\frac{x}{3}`}</M> kilograms. The total must be <M>100</M> kg of concrete:
                    </P>
                    <BlockMath>{math`\frac{x}{3} + x = 100`}</BlockMath>
                    <P>
                        On the left we have a fraction with a denominator of <M>3</M>. It is inconvenient to work with
                        it. To get rid of this denominator, by the <Dep to={sameActionRule}>rule</Dep> of same action,
                        we multiply both sides of the equation by <M>3</M>. Do not forget that any action is{' '}
                        <Dep to={alwaysGlobal}>global</Dep>, so we enclose the left side of the equation in parentheses:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 3} \ | \ \frac{x}{3} + x = 100 \ | \ \brand{\cdot 3} \\
                        3 \cdot \left( \frac{x}{3} + x \right) = 100 \cdot 3 \\
                        \frac{\cancel{3}x}{\cancel{3}} + 3x = 300 \\
                        x + 3x = 300 \\
                        4x = 300
                    `}</BlockMath>
                    <P>
                        To get <M>x</M> alone, we need to get rid of multiplication by <M>4</M>. To do this divide both
                        sides of the equation by <M>4</M>. Then in the left side <M>4</M> and <M>4</M> will cancel, and
                        only <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 4} \ | \ 4x = 300 \ | \ \brand{\div 4} \\
                        \frac{\cancel{4}x}{\cancel{4}} = \frac{300}{4} \\
                        \boxed{x = 75}
                    `}</BlockMath>
                    <P>
                        So, for mixing <M>100</M> kilograms of concrete, <M>75</M> kilograms of sand and{' '}
                        <M>{math`\frac{75}{3} = 25`}</M> kilograms of cement will be required.
                    </P>
                </ProblemSection>
            </ProblemSolution>
            <ProblemNote>
                Note that it does not matter what exactly we denote as the unknown. In any case, we will come to the
                correct answer. The difference is only in the number of transformations and the convenience of solving
                equations.
            </ProblemNote>
        </Problem>

        <Problems $={uniques.magicTriangles} title="Idiot's Triangle" level="easy">
            <SubProblem>
                <ProblemDescription>
                    <P>Magic triangle of electric power:</P>
                    <Image src={magicTriangle1} width="280px" />
                    <P>Original equality:</P>
                    <BlockMath>{math`P = I^2 R`}</BlockMath>
                    <P>
                        Derive equalities for <M>I^2</M> and <M>R</M>.
                    </P>
                </ProblemDescription>
                <ProblemAnswer>
                    <BlockMath>{math`I^2 = \frac{P}{R} >>{big} R = \frac{P}{I^2}`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        First, let's find <M>I^2</M>. Currently, in the right side, multiplication by <M>R</M> prevents
                        it. To get rid of it, by the <Dep to={sameActionRule}>rule</Dep> of same action, we divide both
                        sides of the equation by <M>R</M>. Then in the right side <M>R</M> and <M>R</M> will cancel, and
                        quite only <M>I^2</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div R} \ | \ P = I^2 R \ | \ \brand{\div R} \\
                        \frac{P}{R} = \frac{I^2 \cancel{R}}{\cancel{R}} \\
                        \boxed{\frac{P}{R} = I^2}
                    `}</BlockMath>
                    <P>
                        Similarly, we can find <M>R</M>. To do this, both sides must be divided by <M>I^2</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div I^2} \ | \ P = I^2 R \ | \ \brand{\div I^2} \\
                        \frac{P}{I^2} = \frac{\cancel{I^2} R}{\cancel{I^2}} \\
                        \boxed{\frac{P}{I^2} = R}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Magic triangle of potential energy:</P>
                    <Image src={magicTriangle2} width="280px" />
                    <P>Original equality:</P>
                    <BlockMath>{math`m = \frac{E_p}{gh}`}</BlockMath>
                    <P>
                        Derive equalities for <M>E_p</M>, <M>g</M> and <M>h</M>.
                    </P>
                </ProblemDescription>
                <ProblemAnswer>
                    <BlockMath>{math`E_p = mgh >>{big} g = \frac{E_p}{mh} >>{big} h = \frac{E_p}{mg}`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Let's derive the equality for <M>E_p</M>. Currently, in the right side, division by <M>gh</M>{' '}
                        prevents it. To get rid of it, by the <Dep to={sameActionRule}>rule</Dep> of same action, we
                        multiply both sides of the equation by <M>gh</M>. Then in the right side <M>gh</M> and <M>gh</M>{' '}
                        will cancel, and only <M>E_p</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot gh} \ | \ m = \frac{E_p}{gh} \ | \ \brand{\cdot gh} \\
                        m \cdot gh = \frac{E_p}{\cancel{gh}} \cdot \cancel{gh} \\
                        \boxed{mgh = E_p}
                    `}</BlockMath>

                    <Hr />

                    <P>
                        Now let's derive the equality for <M>g</M>. First, let's take it out of the denominator. To do
                        this, by the rule of same action, we multiply both sides of the equation by <M>g</M>. Then in
                        the right side <M>g</M> and <M>g</M> will cancel, and only <M>h</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot g} \ | \ m = \frac{E_p}{gh} \ | \ \brand{\cdot g} \\
                        mg = \frac{E_p}{\cancel{g}h} \cdot \cancel{g} \\
                        mg = \frac{E_p}{h}
                    `}</BlockMath>
                    <P>
                        Now multiplication by <M>m</M> prevents <M>g</M> from being alone in the left side. To get rid
                        of it, by the rule of same action, we divide both sides of the equation by <M>m</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div m} \ | \ mg = \frac{E_p}{h} \ | \ \brand{\div m} \\
                        \frac{\cancel{m}g}{\cancel{m}} = \frac{\frac{E_p}{h}}{m} \\
                        \boxed{g = \frac{E_p}{mh}}
                    `}</BlockMath>

                    <Hr />

                    <P>
                        The equality for <M>h</M> is derived in exactly the same way as for <M>g</M>.
                    </P>
                    <BlockMath>{math`\boxed{h = \frac{E_p}{mg}}`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Magic triangle of kinetic energy:</P>
                    <Image src={magicTriangle3} width="280px" />
                    <P>Original equality:</P>
                    <BlockMath>{math`2 = \frac{mv^2}{E_k}`}</BlockMath>
                    <P>
                        Derive equalities for <M>E_k</M>, <M>v^2</M>, <M>m</M> and <M>{math`\frac{1}{2}`}</M>.
                    </P>
                </ProblemDescription>
                <ProblemAnswer>
                    <BlockMath>{math`E_k = \frac{mv^2}{2} >>{big} v^2 = \frac{2E_k}{m} >>{big} m = \frac{2E_k}{v^2} >>{big} \frac{1}{2} = \frac{E_k}{mv^2}`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Let's derive the equality for <M>E_k</M>. First, let's pull it out of the denominator. To do
                        this, by the <Dep to={sameActionRule}>rule</Dep> of same action, we multiply both sides of the
                        equation by <M>E_k</M>. Then in the right side <M>E_k</M> and <M>E_k</M> will cancel, and only{' '}
                        <M>mv^2</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot E_k} \ | \ 2 = \frac{mv^2}{E_k} \ | \ \brand{\cdot E_k} \\
                        2E_k = \frac{mv^2}{\cancel{E_k}} \cdot \cancel{E_k} \\
                        2E_k = mv^2
                    `}</BlockMath>
                    <P>
                        Now multiplication by <M>2</M> prevents <M>E_k</M> from being alone in the left side. To get rid
                        of it, by the rule of same action, we divide both sides of the equation by <M>2</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 2E_k = mv^2 \ | \ \brand{\div 2} \\
                        \frac{\cancel{2}E_k}{\cancel{2}} = \frac{mv^2}{2} \\
                        \boxed{E_k = \frac{mv^2}{2}}
                    `}</BlockMath>

                    <Hr />

                    <P>
                        Now let's derive the equality for <M>v^2</M>. Currently, in the right side, multiplication by{' '}
                        <M>m</M> and division by <M>E_k</M> prevent it. First, let's get rid of division by <M>E_k</M>.
                        To do this, by the rule of same action, we multiply both sides of the equation by <M>E_k</M>.
                        Then in the right side <M>E_k</M> and <M>E_k</M> will cancel, and only <M>mv^2</M> will remain
                        there:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot E_k} \ | \ 2 = \frac{mv^2}{E_k} \ | \ \brand{\cdot E_k} \\
                        2E_k = \frac{mv^2}{\cancel{E_k} } \cdot \cancel{E_k} \\
                        2E_k = mv^2
                    `}</BlockMath>
                    <P>
                        Now multiplication by <M>m</M> prevents <M>v^2</M> from being alone in the right side. To get
                        rid of it, by the rule of same action, we divide both sides of the equation by <M>m</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div m} \ | \ 2E_k = mv^2 \ | \ \brand{\div m} \\
                        \frac{2E_k}{m} = \frac{\cancel{m}v^2}{\cancel{m}} \\
                        \boxed{\frac{2E_k}{m} = v^2}
                    `}</BlockMath>

                    <Hr />

                    <P>
                        The equality for <M>m</M> is derived in exactly the same way as for <M>v^2</M>.
                    </P>
                    <BlockMath>{math`\boxed{m = \frac{2E_k}{v^2}}`}</BlockMath>

                    <Hr />

                    <P>
                        Let's derive the equality for <M>{math`\frac{1}{2}`}</M>. Currently, the number <M>2</M> is in
                        the numerator. We need to "move" it to the denominator. To do this, by the rule of same action,
                        we divide both sides of the equation by <M>2</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 2 = \frac{mv^2}{E_k} \ | \ \brand{\div 2} \\
                        \frac{\cancel{2}}{\cancel{2}} = \frac{\frac{mv^2}{E_k}}{2} \\
                        1 = \frac{mv^2}{2E_k}
                    `}</BlockMath>
                    <P>
                        Now multiplication by <M>E_k</M> and <M>mv^2</M> in the numerator prevent the number <M>2</M>{' '}
                        from being alone in the denominator. First, let's get rid of <M>E_k</M>. To do this, by the rule
                        of same action, we multiply both sides of the equation by <M>E_k</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot E_k} \ | \ 1 = \frac{mv^2}{2E_k} \ | \ \brand{\cdot E_k} \\
                        E_k = \frac{mv^2}{2\cancel{E_k}} \cdot \cancel{E_k} \\
                        E_k = \frac{mv^2}{2}
                    `}</BlockMath>
                    <P>
                        Now let's get rid of <M>mv^2</M> in the numerator. To do this, by the rule of same action, we
                        divide both sides of the equation by <M>mv^2</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div mv^2} \ | \ E_k = \frac{mv^2}{2} \ | \ \brand{\div mv^2} \\
                        \frac{E_k}{mv^2} = \frac{\cancel{mv^2}}{2\cancel{mv^2}} \\
                        \boxed{\frac{E_k}{mv^2} = \frac{1}{2}}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problems title="Growing up" level="easy">
            <SubProblem>
                <ProblemDescription>
                    <P>
                        Vanya is <M>2</M> times older than Liza. If you add their ages together, you get the number{' '}
                        <M>24</M>. How old are Vanya and Liza?
                    </P>
                </ProblemDescription>
                <ProblemCheck label="Liza's age" answer={8} />
                <ProblemCheck label="Vanya's age" answer={16} />
                <ProblemAnswer>
                    Liza is <M>8</M> years old, and Vanya is <M>16</M> years old.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We have at least some information about Vanya's age. It relates to Liza's age. But about Liza's
                        age nothing is known, so let's denote it as the unknown <M>x</M>. Then, if Liza's age is{' '}
                        <M>x</M>, then Vanya's age will be twice as much, that is <M>2x</M>. And the sum of Vanya's age{' '}
                        <M>2x</M> and Liza's age <M>x</M> is equal to <M>24</M> years. We get the equation:
                    </P>
                    <BlockMath>{math`2x + x = 24`}</BlockMath>
                    <P>Combine like terms in the left side of the equation:</P>
                    <BlockMath>{math`3x = 24`}</BlockMath>
                    <P>
                        To get <M>x</M> alone, we need to get rid of multiplication by <M>3</M>. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we divide both sides of the equation by{' '}
                        <M>3</M>. Then in the left side we can cancel <M>3</M> and <M>3</M> (<M>3 : 3 = 1</M>), and only{' '}
                        <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 3} \ | \ 3x = 24 \ | \ \brand{\div 3} \\
                        \frac{\cancel{3}x}{\cancel{3}} = \frac{24}{3} \\
                        \boxed{x = 8}
                    `}</BlockMath>
                    <P>
                        We denoted Liza's age as <M>x</M>, so she is <M>8</M> years old. And Vanya is <M>2</M> times
                        older, that is <M>2 \cdot 8 = 16</M> years old.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Peter is <M>6</M> years older than Maria, and in <M>2</M> years the total age of Peter and Maria
                        will be <M>40</M> years. How old are Peter and Maria now?
                    </P>
                </ProblemDescription>
                <ProblemCheck label="Maria's age" answer={15} />
                <ProblemCheck label="Peter's age" answer={21} />
                <ProblemAnswer>
                    Maria is <M>15</M> years old, and Peter is <M>21</M> years old.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We have at least some information about Peter's age. It relates to Maria's age. But about
                        Maria's age nothing is known, so let's denote it as the unknown <M>x</M>. Then, if Maria's age
                        is <M>x</M>, then Peter's age will be <M>6</M> years more, that is <M>x + 6</M>. In two years,
                        when Maria will be <M>x + 2</M> years old, and Peter will be <M>x + 6 + 2</M> years old, their
                        total age wil be equal to <M>40</M> years. We get the equation:
                    </P>
                    <BlockMath>{math`\underbrace{(x + 2)}_{\text{Maria}} + \underbrace{(x + 6 + 2)}_{\text{Peter}} = 40`}</BlockMath>
                    <P>Combine like terms in the left side of the equation:</P>
                    <BlockMath>{math`
                        x + 2 + x + 6 + 2 = 40 \\
                        2x + 10 = 40
                    `}</BlockMath>
                    <P>
                        To get <M>x</M> alone, we need to get rid of multiplication by <M>2</M> and addition of{' '}
                        <M>10</M>. First, let's get rid of adding <M>10</M>. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, we subtract <M>10</M> from both sides of the
                        equation.
                    </P>
                    <BlockMath>{math`
                        \brand{- 10} \ | \ 2x + 10 = 40 \ | \ \brand{- 10} \\
                        -\cancel{10} + 2x + \cancel{10} = 40 - 10 \\
                        2x = 30
                    `}</BlockMath>
                    <P>
                        Now divide both sides of the equation by <M>2</M>. Then in the left side we can cancel <M>2</M>{' '}
                        and <M>2</M> (<M>2 : 2 = 1</M>), and only <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 2x = 30 \ | \ \brand{\div 2} \\
                        \frac{\cancel{2}x}{\cancel{2}} = \frac{30}{2} \\
                        \boxed{x = 15}
                    `}</BlockMath>
                    <P>
                        We denoted Maria's age as <M>x</M>, so she is <M>15</M> years old. And Peter is now{' '}
                        <M>15 + 6 = 21</M> years old.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problem title="Fathers and sons" level="easy" pretty>
            <ProblemDescription>
                <P>
                    When I was <M>14</M>, my father was three times older than me. He is now twice as old as me. How old
                    am I?
                </P>
            </ProblemDescription>
            <ProblemCheck answer={28} />
            <ProblemHint>
                Calculate the age difference between you and your father using the data from the past.
            </ProblemHint>
            <ProblemHint>Use this difference to construct an equation connecting your ages now.</ProblemHint>
            <ProblemAnswer>
                <M>28</M>
            </ProblemAnswer>
            <ProblemSolution>
                <ProblemSection title="Solution 1">
                    <P>
                        When I was <M>14</M>, my father was three times older than me. That is, he was <M>42</M> years
                        old then. So, my father is <M>42 - 14 = 28</M> years older than me. I am <M>x</M> years old now,
                        and father is twice as old, that is, <M>2x</M> years old. If we add our age difference of{' '}
                        <M>28</M> years to my <M>x</M> years, we get his age of <M>2x</M> years:
                    </P>
                    <BlockMath>{math`x + 28 = 2x`}</BlockMath>
                    <P>
                        By the <Dep to={sameActionRule}>rule</Dep> of same action, subtract <M>x</M> from both sides of
                        the equation. Then in the left side <M>x</M> and <M>-x</M> will cancel each other out (the sum
                        is
                        <M>0</M>), and only <M>28</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ x + 28 = 2x \ | \ \brand{- x} \\
                        -\cancel{x} + \cancel{x} + 28 = 2x - x \\
                        \boxed{28 = x}
                    `}</BlockMath>
                    <P>
                        So, I am <M>28</M> years old now.
                    </P>
                </ProblemSection>
                <ProblemSection title="Solution 2">
                    <P>
                        When I was <M>14</M>, my father was three times older than me. That is, he was <M>42</M> years
                        old then. I am <M>x</M> years old now, and father is twice as old, that is, <M>2x</M> years old.
                        Since then I have grown by
                        <M>x - 14</M> years. Father has grown by <M>2x - 42</M> years differently since then. But we
                        live on the same planet and none of us flew into deep space. Therefore, time passes equally for
                        both of us. So, both I and he aged by the same number of years! It turns out my difference of{' '}
                        <M>x-14</M> years is the same difference as his difference of <M>2x - 42</M> years:
                    </P>
                    <BlockMath>{math`x - 14 = 2x - 42`}</BlockMath>
                    <P>
                        And then you just need to solve a simple equation. First, let's group <M>x</M> in the right side
                        of the equation. To do this, let's get rid of <M>x</M> in the left side. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, subtract <M>x</M> from both sides of the
                        equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ x - 14 = 2x - 42 \ | \ \brand{- x} \\
                        -\cancel{x} + \cancel{x} - 14 = 2x - 42 - x \\
                        -14 = x - 42
                    `}</BlockMath>
                    <P>
                        Now add <M>42</M> to both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 42} \ | \ -14 = x - 42 \ | \ \brand{+ 42} \\
                        -14 + 42 = x - \cancel{42} + \cancel{42} \\
                        \boxed{28 = x}
                    `}</BlockMath>
                    <P>
                        So, I am <M>28</M> years old now.
                    </P>
                </ProblemSection>
            </ProblemSolution>
        </Problem>

        <Problems title="Medium equations" level="medium">
            <P>Solve the equation:</P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x^2 - 121 = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck set={[11, -11]} hint="Comma separated" />
                <ProblemHint>This equation has two solutions.</ProblemHint>
                <ProblemAnswer>
                    The equation has two roots: <M>11</M> and <M>-11</M>.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Subtraction of <M>121</M> prevents <M>x^2</M> from being alone. To get rid of it, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, add <M>121</M> to both sides of the
                        equation. Then in the left side <M>-121</M> and <M>+121</M> will cancel each other out (the sum
                        is
                        <M>0</M>), and only <M>x^2</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 121} \ | \ x^2 - 121 = 0 \ | \ \brand{+ 121} \\
                        \cancel{121} + x^2 - \cancel{121} = 0 + 121 \\
                        x^2 = 121
                    `}</BlockMath>
                    <P>
                        Let's think what number squared gives <M>121</M>. There are two such numbers: <M>11</M> and{' '}
                        <M>-11</M>. Therefore, the equation has two solutions:
                    </P>
                    <BlockMath>{math`\boxed{x = 11} >>{big} \boxed{x = -11}`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-x - 4 + 5(x+3) = 5(-1 -x) - 2`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-2} />
                <ProblemHint>Before solving the equation, expand the brackets and combine like terms.</ProblemHint>
                <ProblemAnswer>
                    <M>-2</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>Let's expand the brackets and combine like terms in both sides of the equation:</P>
                    <BlockMath>{math`
                        -x - 4 + 5x + 15 = -5 -5x - 2 \\
                        4x + 11 = -5x -7
                    `}</BlockMath>
                    <P>
                        Let's group <M>x</M> in the left side of the equation. To do this, we need to get rid of{' '}
                        <M>-5x</M> in the right side. To do this, by the <Dep to={sameActionRule}>rule</Dep> of same
                        action, add <M>5x</M> to both sides of the equation.
                    </P>
                    <BlockMath>{math`
                        \brand{+ 5x} \ | \ 4x + 11 = -5x -7 \ | \ \brand{+ 5x} \\
                        5x + 4x + 11 = -\cancel{5x} -7 + \cancel{5x} \\
                        9x + 11 = -7
                    `}</BlockMath>
                    <P>
                        Now multiplication by <M>9</M> and addition of <M>11</M> prevent <M>x</M> from being alone.
                        First, let's get rid of adding <M>11</M>. To do this, subtract <M>11</M> from both sides of the
                        equation.
                    </P>
                    <BlockMath>{math`
                        \brand{- 11} \ | \ 9x + 11 = -7 \ | \ \brand{- 11} \\
                        - \cancel{11} + 9x + \cancel{11} = -7 - 11 \\
                        9x = -18
                    `}</BlockMath>
                    <P>
                        Now multiplication by <M>9</M> prevents <M>x</M> from being alone. To get rid of it, by the rule
                        of same action, divide both sides of the equation by <M>9</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 9} \ | \ 9x = -18 \ | \ \brand{\div 9} \\
                        \frac{\cancel{9}x}{\cancel{9}} = \frac{-18}{9} \\
                        \boxed{x = -2}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x - \frac{x}{11} = \frac{50}{11}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={5} />
                <ProblemHint>
                    Think about how to get rid of <M>11</M> in the denominators with one action.
                </ProblemHint>
                <ProblemAnswer>
                    <M>5</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <ProblemSection title="Solution 1">
                        <P>
                            In the equation we have two fractions with the same denominator <M>11</M>. Let's get rid of
                            these fractions, by the <Dep to={sameActionRule}>rule</Dep> of same action by multiplying
                            both sides of the equation by <M>11</M>. Never ever should we forget about the{' '}
                            <Dep to={alwaysGlobal}>globality</Dep> of this action, and we enclose the left side in
                            parentheses:
                        </P>
                        <BlockMath>{math`
                            \brand{\cdot \ 11} \ | \ x - \frac{x}{11} = \frac{50}{11} \ | \ \brand{\cdot 11} \\
                            11 \cdot \left( x - \frac{x}{11} \right) = \frac{50}{\cancel{11}} \cdot \cancel{11} \\
                            11x - \frac{\cancel{11}x}{\cancel{11}} = 50 \\
                            11x - x = 50 \\
                            10x = 50
                        `}</BlockMath>
                        <P>
                            Now only multiplication by <M>10</M> prevents <M>x</M> from being alone in the left side. To
                            get rid of it, divide both sides of the equation by <M>10</M>. Then in the left side we can
                            cancel:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 10} \ | \ 10x = 50 \ | \ \brand{\div 10} \\
                            \frac{\cancel{10}x}{\cancel{10}} = \frac{50}{10} \\
                            \boxed{x = 5}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Solution 2">
                        <P>
                            In the left side, bring the fraction to a common denominator <M>11</M>.
                        </P>
                        <BlockMath>{math`
                            \frac{11x}{11} - \frac{x}{11} = \frac{50}{11} \\
                            \frac{11x - x}{11} = \frac{50}{11} \\
                            \frac{10x}{11} = \frac{50}{11}
                        `}</BlockMath>
                        <P>
                            Now multiplication by <M>10</M> and division by <M>11</M> prevent <M>x</M> from being alone.
                            First, let's get rid of division by <M>11</M>. To do this, by the{' '}
                            <Dep to={sameActionRule}>rule</Dep> of same action, multiply both sides of the equation by{' '}
                            <M>11</M>. Then in the left side <M>11</M> and <M>11</M> will cancel, and only <M>10x</M>{' '}
                            will remain there:
                        </P>
                        <BlockMath>{math`
                            \brand{\cdot 11} \ | \ \frac{10x}{11} = \frac{50}{11} \ | \ \brand{\cdot 11} \\
                            \cancel{11} \cdot \frac{10x}{\cancel{11}} = \frac{50}{\cancel{11}} \cdot \cancel{11} \\
                            10x = 50
                        `}</BlockMath>
                        <P>
                            Divide both sides of the equation by <M>10</M>. Then in the left side we can cancel and only{' '}
                            <M>x</M> will remain there:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 10} \ | \ 10x = 50 \ | \ \brand{\div 10} \\
                            \frac{\cancel{10}x}{\cancel{10}} = \frac{50}{10} \\
                            \boxed{x = 5}
                        `}</BlockMath>
                    </ProblemSection>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{6}{x^2 - 19} = 1`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Roots of the equation" hint="Comma separated" set={[5, -5]} />
                <ProblemHint>
                    Think about how to get rid of <M>x^2 - 19</M> in the denominator with one action. What to multiply
                    both sides of the equation by?
                </ProblemHint>
                <ProblemAnswer>
                    <M>5</M> and <M>-5</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Let's get <M>x^2</M> out of the denominator. To do this, by the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of same action, multiply both sides of the equation by{' '}
                        <M>x^2 - 19</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x^2 - 19)} \ | \ \frac{6}{x^2 - 19} = 1 \ | \ \brand{\cdot (x^2 - 19)} \\
                        \cancel{(x^2-19)}\cdot\frac{6}{\cancel{x^2-19}} = 1 \cdot (x^2 - 19) \\
                        6 = x^2 - 19
                    `}</BlockMath>
                    <P>
                        Now subtraction of <M>19</M> prevents <M>x^2</M> from being alone in the right side. To get rid
                        of it, add <M>19</M> to both sides of the equation. Then in the right side <M>-19</M> and{' '}
                        <M>+19</M> will cancel each other out (the sum is <M>0</M>), and only <M>x^2</M> will remain
                        there:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 19} \ | \ 6 = x^2 - 19 \ | \ \brand{+ 19} \\
                        6 + 19 = x^2 - \cancel{19} + \cancel{19} \\
                        25 = x^2
                    `}</BlockMath>
                    <P>
                        Let's think what number squared gives <M>25</M>. There are two such numbers: <M>5</M> and{' '}
                        <M>-5</M>. These two numbers are the solutions of the equation.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{9x+6}{7} + 3 = \frac{7x}{6}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-32.4} />
                <ProblemHint>
                    Think about how to get rid of <M>7</M> and <M>6</M> in the denominators with one action.
                </ProblemHint>
                <ProblemAnswer>
                    <M>-32.4</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <ProblemSection title="Solution 1">
                        <P>
                            We need to get rid of the fractions. They have numbers <M>7</M> and <M>6</M> in their
                            denominators. Let's get rid of these denominators, by the{' '}
                            <Dep to={sameActionRule}>rule</Dep> of same action by multiplying both sides of the equation
                            by both <M>7</M> and <M>6</M>. Naturally do not forget to enclose the left side in brackets,
                            because the <Dep to={alwaysGlobal}>action is global</Dep>:
                        </P>
                        <BlockMath>{math`
                            \brand{\cdot 7\cdot 6} \ | \ \frac{9x+6}{7} + 3 = \frac{7x}{6} \ | \ \brand{\cdot 7\cdot 6} \\
                            7\cdot 6 \cdot \left( \frac{9x+6}{7} + 3 \right) = \frac{7x}{\cancel{6}} \cdot 7\cdot \cancel{6} \\
                            \frac{\cancel{7}\cdot 6 \cdot(9x + 6)}{\cancel{7}} + 3 \cdot 7\cdot 6 = 49 x \\
                            54x + 36 + 126 = 49x \\
                            54x + 162 = 49x
                        `}</BlockMath>
                        <P>
                            Let's group <M>x</M> in the right side of the equation. To do this, we need to get rid of{' '}
                            <M>54x</M> in the left side. To do this, subtract <M>54x</M> from both sides of the
                            equation.
                        </P>
                        <BlockMath>{math`
                            \brand{- 54x} \ | \ 54x + 162 = 49x \ | \ \brand{- 54x} \\
                            -\cancel{54x} + \cancel{54x} + 162 = 49x - 54x \\
                            162 = -5x
                        `}</BlockMath>
                        <P>
                            Now only multiplication by <M>-5</M> prevents <M>x</M> from being alone. To get rid of it,
                            divide both sides of the equation by <M>-5</M>.
                        </P>
                        <BlockMath>{math`
                            \brand{\div -5} \ | \ 162 = -5x \ | \ \brand{\div -5} \\
                            \frac{162}{-5} = \frac{\cancel{-5}x}{\cancel{-5}} \\
                            -\frac{162}{5} = x \\
                            \boxed{-32.4 = x}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Solution 2">
                        <P>
                            Bring all fractions to a common denominator <M>42</M>. Multiply the left one by <M>6</M>,
                            the central one by <M>6</M> and by <M>7</M>, and the right one by <M>7</M>:
                        </P>
                        <BlockMath>{math`
                            \frac{6(9x+6)}{42} + \frac{3\cdot 6\cdot 7}{42} = \frac{7x \cdot 7}{42} \\
                            \frac{54x + 36}{42} + \frac{126}{42} = \frac{49x}{42} \\
                            \frac{54x + 36 + 126}{42} = \frac{49x}{42} \\
                            \frac{54x + 162}{42} = \frac{49x}{42}
                        `}</BlockMath>
                        <P>
                            Let's group <M>x</M> in the left side of the equation. To do this, we need to get rid of the
                            fraction on the right. To do this, by the <Dep to={sameActionRule}>rule</Dep> of same
                            action, subtract the fraction <M>{math`\frac{49x}{42}`}</M>
                            from both sides of the equation:
                        </P>
                        <BlockMath>{math`
                            \brand{- \frac{49x}{42}} \ | \ \frac{54x + 162}{42} = \frac{49x}{42} \ | \ \brand{- \frac{49x}{42}} \\
                            -\frac{49x}{42} + \frac{54x + 162}{42} = \cancel{\frac{49x}{42}} - \cancel{\frac{49x}{42}} \\
                            \frac{54x + 162 - 49x}{42} = 0 \\
                            \frac{5x + 162}{42} = 0
                        `}</BlockMath>
                        <P>
                            To make <M>x</M> stay alone, we need to get rid of multiplication by <M>5</M>, addition of{' '}
                            <M>162</M> and division by <M>42</M>. First, let's get rid of division by <M>42</M>. To do
                            this, multiply both sides of the equation by <M>42</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\cdot 42} \ | \ \frac{5x + 162}{42} = 0 \ | \ \brand{\cdot 42} \\
                            \cancel{42}\cdot \frac{5x + 162}{\cancel{42}} = 0\cdot 42 \\
                            5x + 162 = 0
                        `}</BlockMath>
                        <P>
                            Now let's get rid of adding <M>162</M>. To do this, subtract <M>162</M> from both sides of
                            the equation:
                        </P>
                        <BlockMath>{math`
                            \brand{- 162} \ | \ 5x + 162 = 0 \ | \ \brand{- 162} \\
                            -\cancel{162} + 5x + \cancel{162} = 0 - 162 \\
                            5x = -162
                        `}</BlockMath>
                        <P>
                            Finally, let's get rid of multiplication by <M>5</M>. To do this, divide both sides of the
                            equation by <M>5</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 5} \ | \ 5x = -162 \ | \ \brand{\div 5} \\
                            \frac{\cancel{5}x}{\cancel{5}} = \frac{-162}{5} \\
                            x = -\frac{162}{5} \\
                            \boxed{x = -32.4}
                        `}</BlockMath>
                    </ProblemSection>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{12}{x+5} = -\frac{12}{5}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-10} />
                <ProblemHint>The fractions have equal numerators. They can be eliminated in one action.</ProblemHint>
                <ProblemAnswer>
                    <M>-10</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Notice that in the numerators of both fractions there is the same number <M>12</M>. We can
                        greatly simplify the equation if, by the <Dep to={sameActionRule}>rule</Dep> of same action, we
                        divide both sides of the equation by <M>12</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 12} \ | \ \frac{12}{x+5} = -\frac{12}{5} \ | \ \brand{\div 12} \\
                        \frac{\frac{12}{x+5}}{12} = -\frac{\frac{12}{5}}{12} \\
                        \frac{\cancel{12}}{(x+5)\cdot\cancel{12}} = -\frac{\cancel{12}}{5\cdot\cancel{12}} \\
                        \frac{1}{x+5} = -\frac{1}{5}
                    `}</BlockMath>
                    <P>
                        Now let's pull <M>x+5</M> out of the denominator. To do this, multiply both sides of the
                        equation by <M>x+5</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x+5)} \ | \ \frac{1}{x+5} = -\frac{1}{5} \ | \ \brand{\cdot (x+5)} \\
                        \cancel{(x+5)} \cdot \frac{1}{\cancel{x+5}} = -\frac{1}{5} \cdot (x+5) \\
                        1 = -\frac{x+5}{5}
                    `}</BlockMath>
                    <P>
                        Addition of <M>5</M>, division by <M>5</M> and multiplication by <M>-1</M> prevent <M>x</M> from
                        being alone in the right side. First, let's get rid of multiplication by <M>-1</M>. To do this,
                        multiply both sides of the equation by <M>-1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot -1} \ | \ 1 = -\frac{x+5}{5} \ | \ \brand{\cdot -1} \\
                        -1 = \underbrace{(-1)\cdot(-1)}_{1}\cdot\frac{x+5}{5} \\
                        -1 = \frac{x+5}{5}
                    `}</BlockMath>
                    <P>
                        Now let's get rid of division by <M>5</M>. To do this, multiply both sides of the equation by{' '}
                        <M>5</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 5} \ | \ -1 = \frac{x+5}{5} \ | \ \brand{\cdot 5} \\
                        5\cdot -1 = \frac{x+5}{\cancel{5}} \cdot \cancel{5} \\
                        -5 = x+5
                    `}</BlockMath>
                    <P>
                        Finally, let's get rid of adding <M>5</M>. To do this, subtract <M>5</M> from both sides of the
                        equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 5} \ | \ -5 = x+5 \ | \ \brand{- 5} \\
                        -\cancel{5} - 5 = x + \cancel{5} - \cancel{5} \\
                        \boxed{-10 = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problems
            $={uniques.linearRoot}
            title="Linear equations formula"
            level="medium"
            snippet={{
                quick: true,
                search: true,
                description: `
                Formula by which you can very quickly find the root of any equation of the form Ax + B = 0.
            `,
            }}
        >
            <SubProblem label="Formula">
                <ProblemDescription>
                    <P>Derive a general formula for solving any linear equation of the form:</P>
                    <BlockMath>{math`Ax + B = 0, \enspace A \neq 0`}</BlockMath>
                </ProblemDescription>
                <ProblemHint>
                    Using the <Dep to={sameActionRule}>rule of same action</Dep>, isolate <M>x</M> on one side of the
                    equation, and all other data on the other.
                </ProblemHint>
                <ProblemAnswer>
                    <BlockMath>{math`x = -\frac{B}{A}`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        By the <Dep to={sameActionRule}>rule of same action</Dep>, subtract <M>B</M> from both sides of
                        the equation. Then in the left side <M>B</M> and <M>-B</M> will cancel each other out (the sum
                        is
                        <M>0</M>), and only <M>Ax</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{- B} \ | \ Ax + B = 0 \ | \ \brand{- B} \\
                        Ax + \cancel{B} - \cancel{B} = 0 - B \\
                        Ax = -B
                    `}</BlockMath>
                    <P>
                        Now, for <M>x</M> to remain alone, we need to divide both sides of the equation by <M>A</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div A} \ | \ Ax = -B \ | \ \brand{\div A} \\
                        \frac{\cancel{A}x}{\cancel{A}} = \frac{-B}{A} \\
                        x = -\frac{B}{A}
                    `}</BlockMath>
                    <P>
                        It turns out that if we manage to bring the equation to the form <M>Ax + B = 0</M>, then its
                        root can always be found by the formula:
                    </P>
                    <BlockMath>{math`\boxed{x = -\frac{B}{A}}`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem label="Condition">
                <ProblemDescription>
                    <P>
                        Why in the derivation of the formula was it stated that <M>A \neq 0</M>?
                        <Br />
                        What will happen to the equation if <M>A = 0</M>?
                        <Br />
                        What roots will it have?
                    </P>
                </ProblemDescription>
                <ProblemHint>
                    Just substitute <M>0</M> instead of <M>A</M> and examine the result.
                </ProblemHint>
                <ProblemAnswer>
                    If <M>A = 0</M>, then either any number is a root of such an equation (if <M>B = 0</M>), or this
                    equation has no roots at all (if <M>B \neq 0</M>).
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Why guess? Let's just take and substitute <M>A = 0</M> into the formula:
                    </P>
                    <BlockMath>{math`0 \cdot x + B = 0 \\ 0 + B = 0 \\ B = 0`}</BlockMath>
                    <P>
                        We get an interesting situation. The variable <M>x</M> completely "leaves" the equation and we
                        get simply the equality <M>B = 0</M>. And here there are two options:
                    </P>
                    <List type="ol">
                        <Li>
                            <P>
                                If <M>B</M> is indeed equal to <M>0</M>, then we get a true equality <M>0 = 0</M>{' '}
                                regardless of what we substitute instead of <M>x</M>. That is, the equation{' '}
                                <M>0\cdot x + 0 = 0</M> has infinitely many solutions.
                            </P>
                            <BlockMath>{math`0 \cdot 3 + 0 = 0 \rarr 0 \overset{\checkmark}{=} 0 >>{big} 0 \cdot -999 + 0 = 0 \rarr 0 \overset{\checkmark}{=} 0 >>{big} 0 \cdot \pi + 0 = 0 \rarr 0 \overset{\checkmark}{=} 0`}</BlockMath>
                        </Li>
                        <Li>
                            <P>
                                But if <M>B</M> is not equal to <M>0</M>, then there will always be a false equality{' '}
                                <M>B = 0</M>, whatever we substitute instead of <M>x</M>. That is, the equation{' '}
                                <M>0\cdot x + B = 0</M> has no solutions at all.
                            </P>
                            <BlockMath>{math`0 \cdot 3 + 5 = 0 \rarr 5 \overset{\times}{=} 0 >>{big} 0 \cdot -999 + 7 = 0 \rarr 7 \overset{\times}{=} 0 >>{big} 0 \cdot \pi + 1 = 0 \rarr 1 \overset{\times}{=} 0`}</BlockMath>
                        </Li>
                    </List>
                </ProblemSolution>
            </SubProblem>

            <SubProblem label="Practice" script={generalFormula()} />
        </Problems>

        <Problem $={uniques.twister} title="Twist and turn, to confuse I want" level="medium" pretty method>
            <ProblemDescription>
                <P>Imagine that you have the following equality:</P>
                <BlockMath>{math`ax^2 + bx + c = y^3 - t`}</BlockMath>
                <P>Now let's take and simply swap the left and right sides of the equality:</P>
                <BlockMath>{math`y^3 - t = ax^2 + bx + c`}</BlockMath>
                <List type="ol">
                    <Li>Strictly prove that any equality can be reversed and it will remain true.</Li>
                    <Li>
                        Strictly prove that any equality can be reversed using the <Dep to={sameActionRule}>rule</Dep>{' '}
                        of same action.
                    </Li>
                </List>
            </ProblemDescription>
            <ProblemHint>
                For strict proof use the <Dep to={equalityFalseTrue}>definition</Dep> of true equality.
            </ProblemHint>
            <ProblemHint>
                When "swapping places" manually using the <Dep to={sameActionRule}>rule</Dep> of same action, in the
                end, you will just need to multiply both sides of the equation by <M>-1</M>.
            </ProblemHint>
            <ProblemSolution>
                <ProblemSection title="Everyday meaning">
                    <P>
                        In the article we constantly used the analogy with mechanical scales. Equality is scales. But
                        the scales can always be simply <B>turned around</B>, and then the left bowl will become right,
                        and the right one -- left! Nothing else changes. Just as the equality was true, it remains so
                        after the scales are turned!
                    </P>
                </ProblemSection>
                <ProblemSection title="Rigorous proof">
                    <P>
                        According to the <Dep to={equalityFalseTrue}>definition</Dep> of true equality, to the left and
                        to the right of the equals sign stand expressions that denote the same object. If we swap the
                        left and right sides of the equality, we will still have expressions standing to the left and to
                        the right of the equals sign which denote the same object. Nothing has changed. The new and old
                        equalities are <B>absolutely</B> identical.
                    </P>
                    <P>{QED}</P>
                </ProblemSection>
                <ProblemSection title="Manual reversal">
                    <P>
                        You know, sometimes you just don't want to think... It would be nice to just hide the scary
                        expression behind some letter and forget about it. Well, this is exactly the case when you need
                        to do so. We denote any left expression by the letter <M>A</M>, and any right one -- by the
                        letter <M>B</M>. Then we get the following equality:
                    </P>
                    <BlockMath>{math`A = B`}</BlockMath>
                    <P>
                        Using the <Dep to={sameActionRule}>rule</Dep> of same action, subtract <M>A</M> from both sides
                        of the equality.
                    </P>
                    <BlockMath>{math`
                        \brand{- A} \ | \ A = B \ | \ \brand{- A} \\
                        \cancel{A} - \cancel{A} = B - A \\
                        0 = B - A
                    `}</BlockMath>
                    <P>
                        Now subtract <M>B</M> from both sides of the equality:
                    </P>
                    <BlockMath>{math`
                        \brand{- B} \ | \ 0 = B - A \ | \ \brand{- B} \\
                        -B = \cancel{B} - A - \cancel{B} \\
                        -B = -A
                    `}</BlockMath>
                    <P>
                        Finally, multiply both sides of the equality by <M>-1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot -1} \ | \ -B = -A \ | \ \brand{\cdot -1} \\
                        -(-B) = -(-A) \\
                        B = A
                    `}</BlockMath>
                    <P>
                        Voila, we manually achieved the same effect as if we had turned the scales! Moreover, this can
                        be done with any equality! So, any equality can be reversed! That's the power of abstractions!
                    </P>
                    <P>{QED}</P>
                </ProblemSection>
            </ProblemSolution>
        </Problem>

        <Problems title="Big Journey" level="medium">
            <SubProblem>
                <ProblemDescription>
                    <P>
                        Alina went on a <M>3</M> day hike. The length of the entire route was <M>111</M> kilometers. On
                        the second day she covered <M>5</M> kilometers more than on the first. And on the third day she
                        covered <M>10</M> kilometers less than on the second. How many kilometers did Alina cover every
                        day?
                    </P>
                </ProblemDescription>
                <ProblemCheck label="First day" answer={37} />
                <ProblemCheck label="Second day" answer={42} />
                <ProblemCheck label="Third day" answer={32} />
                <ProblemHint>
                    Denote by <M>x</M> the number of kilometers that Alina covered on the first day.
                </ProblemHint>
                <ProblemHint>
                    Then on the second day she covered <M>x + 5</M> kilometers.
                </ProblemHint>
                <ProblemHint>
                    For the third day, subtract <M>10</M> kilometers from the second day.
                </ProblemHint>
                <ProblemAnswer>
                    Alina covered <M>37</M> kilometers on the first day, <M>42</M> kilometers on the second day, and{' '}
                    <M>32</M>
                    kilometers on the third day.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We have at least some data about how much Alina covered on the second and third days. Absolutely
                        nothing is known only about the first day. Therefore, let's denote by <M>x</M> the number of
                        kilometers, that Alina covered on the first day. On the second day she covered <M>5</M>{' '}
                        kilometers more, that is
                        <M>x + 5</M> kilometers. And on the third day she covered <M>10</M> kilometers less than on the
                        second, that is, from the kilometers of the second day (<M>x + 5</M>) subtract <M>10</M>{' '}
                        kilometers: <M>(x + 5) - 10</M> kilometers. It turns out that on the third day Alina covered{' '}
                        <M>x - 5</M> kilometers.
                    </P>
                    <P>
                        In total, she covered the entire route in three days, that is <M>111</M> kilometers. So we can
                        make an equation:
                    </P>
                    <BlockMath>{math`\underbrace{x}_{\small D1} + \underbrace{(x+5)}_{\small D2} + \underbrace{(x-5)}_{\small D3} = 111`}</BlockMath>
                    <P>Combine like terms in the left side:</P>
                    <BlockMath>{math`
                        x + x + \cancel{5} + x - \cancel{5} = 111 \\
                        3x = 111
                    `}</BlockMath>
                    <P>
                        To get <M>x</M> by itself, divide both sides of the equation by <M>3</M>. Then in the left side
                        we can cancel <M>3</M> and <M>3</M> (<M>3 : 3 = 1</M>), and only <M>x</M> will remain there:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 3} \ | \ 3x = 111 \ | \ \brand{\div 3} \\
                        \frac{\cancel{3}x}{\cancel{3}} = \frac{111}{3} \\
                        \boxed{x = 37}
                    `}</BlockMath>
                    <P>
                        We denoted by <M>x</M> the number of kilometers that Alina covered on the first day. So on the
                        second day she covered <M>37 + 5 = 42</M> kilometers, and on the third day <M>37 - 5 = 32</M>{' '}
                        kilometers.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Pavel went to conquer a mountain route <M>42</M> kilometers long. On the first day he covered
                        half as much as on the second and third days combined. And on the relatively easy third day he
                        covered <M>6</M> kilometers more than on the second. How many kilometers did Pavel cover every
                        day?
                    </P>
                </ProblemDescription>
                <ProblemCheck label="First day" answer={14} />
                <ProblemCheck label="Second day" answer={11} />
                <ProblemCheck label="Third day" answer={17} />
                <ProblemHint>
                    Denote by <M>x</M> the number of kilometers that Pavel covered on the second day.
                </ProblemHint>
                <ProblemHint>
                    Then on the third day he covered <M>x + 6</M> kilometers.
                </ProblemHint>
                <ProblemHint>
                    <P>And on the first day he covered half as much as on the second and third days combined:</P>
                    <BlockMath>{math`\frac{x + (x + 6)}{2} = \frac{2x + 6}{2}`}</BlockMath>
                </ProblemHint>
                <ProblemAnswer>
                    Pavel covered <M>14</M> kilometers on the first day, <M>11</M> kilometers on the second day, and{' '}
                    <M>17</M>
                    kilometers on the third day.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We have absolutely no data about the second day. Therefore, let's denote by <M>x</M> the number
                        of kilometers that Pavel covered on the second day. On the third day he covered <M>6</M>{' '}
                        kilometers more than on the second, that is <M>x + 6</M> kilometers.
                    </P>
                    <P>
                        But with the first day everything is more interesting. He covered half as much as on the second
                        and third days combined. Therefore, first add <M>x</M> and <M>x + 6</M> (this will be the number
                        of kilometers, that Pavel covered on the second and third days combined), and then divide by{' '}
                        <M>2</M>:
                    </P>
                    <BlockMath>{math`\frac{x + x + 6}{2} = \frac{2x + 6}{2}`}</BlockMath>
                    <P>
                        In total, he covered the entire route in three days, that is <M>42</M> kilometers. So we can
                        make an equation:
                    </P>
                    <BlockMath>{math`\underbrace{\frac{2x + 6}{2}}_{\small D1} + \underbrace{x}_{\small D2} + \underbrace{(x+6)}_{\small D3} = 42`}</BlockMath>
                    <P>
                        Let's get rid of the denominator <M>2</M> of the fraction in the left side of the equation. To
                        do this, by the <Dep to={sameActionRule}>rule</Dep> of same action multiply both sides of the
                        equation by <M>2</M>. And don't forget to enclose the left side in parentheses, as this is a{' '}
                        <Dep to={alwaysGlobal}>global action</Dep>!
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 2} \ | \ \frac{2x + 6}{2} + x + (x+6) = 42 \ | \ \brand{\cdot 2} \\
                        2\left(\frac{2x + 6}{2} + x + x+6 \right) = 42 \cdot 2 \\
                        2x + 6 + 2x + 2x + 12 = 84 \\
                        6x + 18 = 84
                    `}</BlockMath>
                    <P>
                        To get <M>x</M> alone, we need to get rid of multiplication by <M>6</M> and addition of{' '}
                        <M>18</M>. First, let's get rid of adding <M>18</M>. To do this, subtract <M>18</M> from both
                        sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 18} \ | \ 6x + 18 = 84 \ | \ \brand{- 18} \\
                        -\cancel{18} + 6x + \cancel{18} = 84 - 18 \\
                        6x = 66
                    `}</BlockMath>
                    <P>
                        Now only multiplication by <M>6</M> prevents <M>x</M> from being alone. Divide both sides of the
                        equation by <M>6</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 6} \ | \ 6x = 66 \ | \ \brand{\div 6} \\
                        \frac{\cancel{6}x}{\cancel{6}} = \frac{66}{6} \\
                        \boxed{x = 11}
                    `}</BlockMath>
                    <P>
                        We denoted by <M>x</M> the number of kilometers Pavel covered on the second day. So on the third
                        day he covered <M>x + 6 = 11 + 6 = 17</M> kilometers. And on the first day he covered half as
                        much as on the second and third days combined, that is <M>(11 + 17) : 2 = 14</M> kilometers.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problems $={uniques.zeroFactors} title="Zero Factors" level="medium" method>
            <SubProblem label="Sample">
                <ProblemDescription>
                    <P>
                        As a result of transformations, equations are often reduced to a product of factors on one side
                        and zero on the other. Such equations are solved very simply, and now you will learn how to do
                        it. Let's start with an elementary example:
                    </P>
                    <BlockMath>{math`(x + 3)(x - 2) = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Equation roots" hint="Comma separated" set={[2, -3]} />
                <ProblemHint>
                    If we can make at least one of the factors equal to zero, then the whole product will become zero.
                </ProblemHint>
                <ProblemHint>"Zeroing out" each factor will lead to a new root of the original equation.</ProblemHint>
                <ProblemAnswer>
                    <M>-3</M> and <M>2</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        On the left we have two factors: <M>(x + 3)</M> and <M>(x - 2)</M>. The point is that if we can
                        make at least one of these brackets equal to zero, then the whole product will be equal to zero.
                        For example, if we somehow managed to make the left bracket equal to zero, this is what happens:
                    </P>

                    <BlockMath>{math`
                        \underbrace{(x + 3)}_{0} \cdot (x - 2) = 0 \\
                        0 \cdot (x - 2) = 0 \\
                        0 = 0
                    `}</BlockMath>

                    <P>
                        We automatically got a true equality! Moreover, it absolutely doesn't matter what ends up in the
                        bracket on the right. This "something" will be multiplied by <M>0</M> and will still result in{' '}
                        <M>0</M>. The same will happen if we make the right bracket equal to zero:
                    </P>

                    <BlockMath>{math`
                        (x + 3) \cdot \underbrace{(x - 2)}_{0} = 0 \\
                        (x + 3) \cdot 0 = 0 \\
                        0 = 0
                    `}</BlockMath>

                    <P>
                        It turns out that our equation splits into two sub-equations, the goal of each of which is to
                        make its factor equal to zero:
                    </P>

                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                            (x + 3) = 0 & (x - 2) = 0 \\
                            x + 3 = 0 & x - 2 = 0 \\
                            \boxed{x = -3} & \boxed{x = 2}
                        \end{array}
                    `}</BlockMath>

                    <P>
                        We got two solutions to the equation: <M>-3</M> and <M>2</M>. Substituting either of them into
                        the equation, one of the factors will become zero and multiply the rest by zero, making the
                        equality true! When substituting <M>-3</M>, the bracket <M>(x + 3)</M> becomes zero, and when
                        substituting <M>2</M> -- the bracket <M>(x - 2)</M>.
                    </P>
                </ProblemSolution>
                <ProblemNote>
                    When you see equations entirely consisting of such brackets, you can avoid doing all these
                    separations into sub-equations and immediately "see" the needed roots. These are the numbers after
                    the unknown, taken with the opposite sign. In our case, after <M>x</M> there are <M>+3</M> and{' '}
                    <M>-2</M>, so the roots will be <M>-3</M> and <M>2</M>.
                </ProblemNote>
            </SubProblem>

            <SubProblem script={zeroFactors()} />

            <SubProblem>
                <ProblemDescription>
                    <P>Solve the equation:</P>
                    <BlockMath>{math`x(x + 7)(x - 11) = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Equation roots" hint="Comma separated" set={[0, -7, 11]} />
                <ProblemHint>
                    Here there are three factors, so there are three sub-equations, and thus three solutions to the
                    original equation.
                </ProblemHint>
                <ProblemAnswer>
                    <M>0</M>, <M>-7</M> and <M>11</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Here there are three factors, so there are three sub-equations, and thus three solutions to the
                        original equation. Moreover, the first sub-equation is already "automatically solved" for us,
                        since $x$ stands alone in it:
                    </P>
                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Sub-equation 1} & \text{\small Sub-equation 2} & \text{\small Sub-equation 3} \\
                            \boxed{x = 0} & x + 7 = 0 & x - 11 = 0 \\
                            & \boxed{x = -7} & \boxed{x = 11}
                        \end{array}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Solve the equation:</P>
                    <BlockMath>{math`10(x+3)(2x-8)(8x+1) = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Equation roots" hint="Comma separated" set={[-3, 4, [-0.125, '-1/8']]} />
                <ProblemHint>
                    Get rid of <M>10</M>, then solve the sub-equations for each factor.
                </ProblemHint>
                <ProblemHint>
                    The first sub-equation is solved trivially. The rest need to be solved as full-fledged equations.
                </ProblemHint>
                <ProblemSolution>
                    <P>
                        So that <M>10</M> does not hinder us in solving the equation, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, we will divide both sides of the
                        equation by <M>10</M>.
                    </P>
                    <BlockMath>{math`
                        \brand{\div 10} \ | \ 10(x+3)(2x-8)(8x+1) = 0 \ | \ \brand{\div 10} \\
                        \frac{\cancel{10}(x+3)(2x-8)(8x+1)}{\cancel{10}} = \frac{0}{10} \\
                        (x+3)(2x-8)(8x+1) = 0
                    `}</BlockMath>
                    <P>
                        Now on the left side we have three factors with <M>x</M>, which means three sub-equations. The
                        first sub-equation is solved trivially and gives the root <M>-3</M>, while the second and third
                        need to be solved.
                    </P>
                    <ProblemSection title="Second sub-equation">
                        <BlockMath>{math`2x - 8 = 0`}</BlockMath>
                        <P>
                            To isolate <M>x</M>, we first get rid of subtraction of <M>8</M>; to do this using the rule
                            of the same action, we add <M>8</M> to both sides of the equation:
                        </P>
                        <BlockMath>{math`
                            \brand{+ 8} \ | \ 2x - 8 = 0 \ | \ \brand{+ 8} \\
                            \cancel{8} + 2x - \cancel{8} = 0 + 8 \\
                            2x = 8
                        `}</BlockMath>
                        <P>
                            Now we divide both sides of the equation by <M>2</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 2} \ | \ 2x = 8 \ | \ \brand{\div 2} \\
                            \frac{\cancel{2}x}{\cancel{2}} = \frac{8}{2} \\
                            \boxed{x = 4}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Third sub-equation">
                        <BlockMath>{math`8x + 1 = 0`}</BlockMath>
                        <P>
                            To isolate <M>x</M>, we need to get rid of multiplication by <M>8</M> and addition of{' '}
                            <M>1</M>. First, let's get rid of addition of <M>1</M>. To do this, using the rule of the
                            same action, we subtract <M>1</M> from both sides of the equation:
                        </P>
                        <BlockMath>{math`
                            \brand{- 1} \ | \ 8x + 1 = 0 \ | \ \brand{- 1} \\
                            -\cancel{1} + 8x + \cancel{1} = 0 - 1 \\
                            8x = -1
                        `}</BlockMath>
                        <P>
                            Now we divide both sides of the equation by <M>8</M>:
                        </P>
                        <BlockMath>{math`
                            \brand{\div 8} \ | \ 8x = -1 \ | \ \brand{\div 8} \\
                            \frac{\cancel{8}x}{\cancel{8}} = \frac{-1}{8} \\
                            \boxed{x = -\frac{1}{8}}
                        `}</BlockMath>
                    </ProblemSection>
                    <ProblemSection title="Summary">
                        <P>
                            The original equation has three solutions: <M>-3</M>, <M>4</M> and{' '}
                            <M>{math`-\frac{1}{8}`}</M>, because substituting any of these three numbers instead of{' '}
                            <M>x</M> in the original equation will lead to the corresponding factor turning into zero,
                            which will then multiply by all other factors and result in zero for the entire left side of
                            the equation, making the equality true.
                        </P>
                    </ProblemSection>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Solve the equation:</P>
                    <BlockMath>{math`0 = (x^2 - 4)(x + 1)`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Equation roots" hint="Comma separated" set={[-2, 2, -1]} />
                <ProblemHint>Two factors on the right side lead to two sub-equations.</ProblemHint>
                <ProblemHint>The first sub-equation has two roots.</ProblemHint>
                <ProblemAnswer>
                    <M>-2</M>, <M>2</M> and <M>-1</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        On the right side of the equation we have two factors, each of which yields a root for the
                        original equation. The root from the second factor is obtained elementarily, it is equal to{' '}
                        <M>-1</M>. But to get the root from the first factor, we need to solve the equation:
                    </P>
                    <BlockMath>{math`x^2 - 4 = 0`}</BlockMath>
                    <P>
                        To isolate <M>x^2</M>, we need to get rid of subtraction of <M>4</M>. To do this, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, we add <M>4</M> to both sides of the
                        equation:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 4} \ | \ x^2 - 4 = 0 \ | \ \brand{+ 4} \\
                        \cancel{4} + x^2 - \cancel{4} = 0 + 4 \\
                        x^2 = 4
                    `}</BlockMath>
                    <P>
                        What number squared gives <M>4</M>? There are two such numbers: <M>2</M> and <M>-2</M>.
                    </P>
                    <P>
                        It turns out that the original equation has three roots: <M>-1</M>, <M>2</M> and <M>-2</M>.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Solve the equation:</P>
                    <BlockMath>{math`\frac{\left(x + \frac{1}{2}\right)x}{17} = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Equation roots" hint="Comma separated" set={[0, [-0.5, '-1/2']]} />
                <ProblemHint>
                    First, get rid of the denominator <M>17</M>. Then solve the sub-equations for each factor.
                </ProblemHint>
                <ProblemAnswer>
                    <M>0</M> and <M>{math`-\frac{1}{2}`}</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        To get rid of the fraction denominator, using the <Dep to={sameActionRule}>rule</Dep> of the
                        same action, we multiply both sides of the equation by <M>17</M>. Then on the left side{' '}
                        <M>17</M> and <M>17</M> will cancel out:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 17} \ | \ \frac{\left(x + \frac{1}{2}\right)x}{17} = 0 \ | \ \brand{\cdot 17} \\
                        \cancel{17}\cdot\frac{\left(x + \frac{1}{2}\right)x}{\cancel{17}} = 0\cdot 17 \\
                        \left(x + \frac{1}{2}\right)x = 0
                    `}</BlockMath>
                    <P>
                        We have two factors, each of which gives a root for the original equation. The root from the
                        second factor is obtained elementarily, it is equal to <M>0</M>. And to get the root from the
                        first factor, it is enough to solve a trivial equation:
                    </P>
                    <BlockMath>{math`
                        x + \frac{1}{2} = 0 \\
                        \brand{- \frac{1}{2}} \ | \ x + \frac{1}{2} = 0 \ | \ \brand{- \frac{1}{2}} \\
                        -\cancel{\frac{1}{2}} + x + \cancel{\frac{1}{2}} = 0 - \frac{1}{2} \\
                        \boxed{x = -\frac{1}{2}}
                    `}</BlockMath>
                    <P>
                        So, the original equation has two roots: <M>0</M> and <M>{math`-\frac{1}{2}`}</M>.
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Solve the equation:</P>
                    <BlockMath>{math`(x+11)(x-1) + 12 = 12`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Equation roots" hint="Comma separated" set={[-11, 1]} />
                <ProblemHint>
                    Think about how you can get rid of <M>12</M> on both sides of the equation in one action.
                </ProblemHint>
                <ProblemAnswer>
                    <M>-11</M> and <M>1</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We have the same number <M>12</M> on both the left and right sides of the "equals" sign. We can
                        greatly simplify the equation if, using the <Dep to={sameActionRule}>rule</Dep> of the same
                        action, we subtract <M>12</M> from both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 12} \ | \ (x+11)(x-1) + 12 = 12 \ | \ \brand{- 12} \\
                        -\cancel{12} + (x+11)(x-1) + \cancel{12} = \cancel{12} - \cancel{12} \\
                        (x+11)(x-1) = 0
                    `}</BlockMath>
                    <P>Then everything is as usual. We solve two sub-equations and get two roots:</P>
                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                            x + 11 = 0 & x - 1 = 0 \\
                            \boxed{x = -11} & \boxed{x = 1}
                        \end{array}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Solve the equation:</P>
                    <BlockMath>{math`7x^2 = 42x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck label="Equation roots" hint="Comma separated" set={[0, 6]} />
                <ProblemHint>Simplify the equation.</ProblemHint>
                <ProblemHint>Group the x's on one side, for example, on the left.</ProblemHint>
                <ProblemHint>Factor out the common factor.</ProblemHint>
                <ProblemAnswer>
                    <M>0</M> and <M>6</M>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        To start, let's simplify the equation by dividing both sides by <M>7</M> using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 7} \ | \ 7x^2 = 42x \ | \ \brand{\div 7} \\
                        \frac{\cancel{7}x^2}{\cancel{7}} = \frac{42x}{7} \\
                        x^2 = 6x
                    `}</BlockMath>
                    <P>
                        Let's group the x's on the left side of the equation. To do this, we need to get rid of{' '}
                        <M>6x</M> on the right side. Using the rule of the same action, we subtract <M>6x</M> from both
                        sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 6x} \ | \ x^2 = 6x \ | \ \brand{- 6x} \\
                        x^2 - 6x = \cancel{6x} - \cancel{6x} \\
                        x^2 - 6x = 0
                    `}</BlockMath>
                    <P>
                        On the left side, both terms have a common factor <M>x</M>. It can be factored out:
                    </P>
                    <BlockMath>{math`x(x-6) = 0`}</BlockMath>
                    <P>
                        We have a product of two factors that is equal to zero. This means the left side of the equation
                        can be split into two sub-equations:
                    </P>
                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                            \boxed{x = 0} & x - 6 = 0 \\
                            & \boxed{x = 6}
                        \end{array}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problems $={uniques.fractionsFlip} title="Flipping Fractions" level="medium" method>
            <SubProblem label="Sample">
                <ProblemDescription>
                    <P>
                        Speaking of non-standard actions on equalities, students often like to use the so-called
                        "fraction flipping". This action consists of swapping the numerator and denominator of fractions
                        on the left and right sides of the "equals" sign. For example:
                    </P>
                    <BlockMath>{math`\frac{3}{x+2} = \frac{2}{4} \quad \Rightarrow \quad \frac{x+2}{3} = \frac{4}{2}`}</BlockMath>
                    <P>
                        Solve this equation to the end and verify by substitution that the obtained root is indeed
                        correct.
                    </P>
                </ProblemDescription>
                <ProblemCheck answer={4} />
                <ProblemSolution>
                    <BlockMath>{math`\frac{x+2}{3} = \frac{4}{2}`}</BlockMath>
                    <P>
                        Now the variable <M>x</M> is hindered by addition with <M>2</M> and division by <M>3</M>. First,
                        let's get rid of the division by <M>3</M>. To do this, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, we multiply both sides of the equation
                        by <M>3</M>. Then on the left side <M>3</M> and <M>3</M> will cancel out, leaving only{' '}
                        <M>x + 2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot \ 3} \ | \ \frac{x+2}{3} = \frac{4}{2} \ | \ \brand{\cdot 3} \\
                        \cancel{3} \cdot \frac{x+2}{\cancel{3}} = 3 \cdot \frac{4}{2} \\
                        x + 2 = 6
                    `}</BlockMath>
                    <P>
                        Now the variable <M>x</M> is hindered only by addition with <M>2</M>. To get rid of it, we
                        subtract
                        <M>2</M> from both sides of the equation. Then on the left side <M>+2</M> and <M>-2</M> will
                        mutually destroy each other (resulting in <M>0</M>), leaving only <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{- 2} \ | \ x + 2 = 6 \ | \ \brand{- 2} \\
                        x + \cancel{2} - \cancel{2} = 6 - 2 \\
                        \boxed{x = 4}
                    `}</BlockMath>
                    <P>
                        Let's check if the number <M>4</M> is indeed the solution to the original equation even before
                        "flipping the fractions":
                    </P>
                    <BlockMath>{math`
                        \frac{3}{4+2} = \frac{2}{4} \\
                        \frac{3}{6} = \frac{2}{4} \\
                        \frac{1}{2} = \frac{1}{2}
                    `}</BlockMath>
                    <P>
                        We got a true equality, which means <M>4</M> is indeed the solution to the equation! The
                        "fraction flipping" method worked!
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Solve the equation in two ways, first by elementary actions, and then using "fraction flipping":
                    </P>
                    <BlockMath>{math`\frac{1}{x+1} = \frac{2}{3}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['0.5', '1/2']} />
                <ProblemSolution>
                    <P>
                        <B>Solution by elementary actions:</B>
                    </P>
                    <P>
                        It is inconvenient for us when <M>x</M> is at the bottom. Therefore, it must be pulled out from
                        there. To do this, using the <Dep to={sameActionRule}>rule</Dep> of the same action, we multiply
                        both sides of the equation by <M>x + 1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x + 1)} \ | \ \frac{1}{x+1} = \frac{2}{3} \ | \ \brand{\cdot (x + 1)} \\
                        \cancel{(x + 1)} \cdot \frac{1}{\cancel{x+1}} = \frac{2}{3} \cdot (x + 1) \\
                        1 = \frac{2(x + 1)}{3}
                    `}</BlockMath>
                    <P>
                        Now we start "unloading" the right side. First, multiply both sides of the equation by <M>3</M>,
                        which will allow us to get rid of the denominator:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 3} \ | \ 1 = \frac{2(x + 1)}{3} \ | \ \brand{\cdot 3} \\
                        3 \cdot 1 = \frac{2(x + 1)}{\cancel{3}} \cdot \cancel{3} \\
                        3 = 2(x + 1)
                    `}</BlockMath>
                    <P>
                        Now let's get rid of multiplication by <M>2</M>. To do this, divide both sides of the equation
                        by <M>2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 2} \ | \ 3 = 2(x + 1) \ | \ \brand{\div 2} \\
                        \frac{3}{2} = \frac{\cancel{2}(x + 1)}{\cancel{2}} \\
                        \frac{3}{2} = x + 1
                    `}</BlockMath>
                    <P>
                        Finally, so that <M>x</M> remains alone, we need to get rid of addition with <M>1</M>. To do
                        this, we subtract <M>1</M> from both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 1} \ | \ \frac{3}{2} = x + 1 \ | \ \brand{- 1} \\
                        \frac{3}{2} - 1 = x + \cancel{1} - \cancel{1} \\
                        \frac{3}{2} - \frac{2}{2} = x \\
                        \boxed{\frac{1}{2} = x}
                    `}</BlockMath>
                    <P>So, using elementary actions, we arrived at the answer in 4 steps.</P>
                    <P>
                        <B>Solution by fraction flipping:</B>
                    </P>
                    <P>Flip the fractions on both sides of the "equals" sign:</P>
                    <BlockMath>{math`\frac{x+1}{1} = \frac{3}{2} \\ x+1 = \frac{3}{2}`}</BlockMath>
                    <P>
                        So that <M>x</M> remains alone, we need to get rid of addition with <M>1</M>. To do this, using
                        the <Dep to={sameActionRule}>rule</Dep> of the same action, we subtract <M>1</M> from both sides
                        of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 1} \ | \ x + 1 = \frac{3}{2} \ | \ \brand{- 1} \\
                        x + \cancel{1} - \cancel{1} = \frac{3}{2} - 1 \\
                        x = \frac{3}{2} - \frac{2}{2} \\
                        \boxed{x = \frac{1}{2}}
                    `}</BlockMath>
                    <P>It took only two steps to solve using "fraction flipping"!</P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Solve the equation in two ways, first by elementary actions, and then using "fraction flipping":
                    </P>
                    <BlockMath>{math`-\frac{3}{10-x} = \frac{4}{-8}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={4} />
                <ProblemSolution>
                    <P>
                        <B>Solution by elementary actions:</B>
                    </P>
                    <P>
                        Multiply both sides of the equation by <M>-1</M> to get rid of the minuses in both sides:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -\frac{3}{10-x} = \frac{4}{-8} \ | \ \brand{\cdot (-1)} \\
                        (-1) \cdot (-1) \cdot \frac{3}{10-x} = (-1) \cdot (-1) \cdot \frac{4}{8} \\
                        \frac{3}{10-x} = \frac{4}{8}
                    `}</BlockMath>
                    <P>
                        On the right side, we simply reduce the fraction by <M>4</M>:
                    </P>
                    <BlockMath>{math`\frac{3}{10 - x} = \frac{1}{2}`}</BlockMath>
                    <P>
                        Let's immediately take this two out of the denominator, by multiplying both sides of the
                        equation by
                        <M>2</M> using the <Dep to={sameActionRule}>rule</Dep> of the same action:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 2} \ | \ \frac{3}{10 - x} = \frac{1}{2} \ | \ \brand{\cdot 2} \\
                        2 \cdot \frac{3}{10 - x} = \frac{1}{\cancel{2}}\cdot\cancel{2} \\
                        \frac{6}{10 - x} = 1
                    `}</BlockMath>
                    <P>
                        Now let's pull <M>x</M> out of the denominator by multiplying both sides of the equation by{' '}
                        <M>10 - x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (10 - x)} \ | \ \frac{6}{10 - x} = 1 \ | \ \brand{\cdot (10 - x)} \\
                        \cancel{(10-x)} \cdot \frac{6}{\cancel{10-x}} = 1 \cdot (10 - x) \\
                        6 = 10 - x
                    `}</BlockMath>
                    <P>
                        So that <M>x</M> remains alone, we need to get rid of <M>10</M>. To do this, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, we subtract <M>10</M> from both sides of
                        the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 10} \ | \ 6 = 10 - x \ | \ \brand{- 10} \\
                        -10 + 6= \cancel{10} - x - \cancel{10} \\
                        -4 = -x
                    `}</BlockMath>
                    <P>
                        Once again multiply both sides of the equation by <M>-1</M> to get rid of minuses:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -4 = -x \ | \ \brand{\cdot (-1)} \\
                        (-1) \cdot (-1) \cdot 4 = (-1) \cdot (-1) \cdot x \\
                        \boxed{4 = x}
                    `}</BlockMath>
                    <P>
                        <B>Solution by flipping:</B>
                    </P>
                    <P>
                        We see that <M>x</M> is at the bottom. This is inconvenient. Therefore, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, we apply "fraction flipping" to both
                        sides of the equation:
                    </P>
                    <BlockMath>{math`-\frac{10-x}{3} = \frac{-8}{4}`}</BlockMath>
                    <P>
                        The variable <M>x</M> is hindered by <M>10</M> and division by <M>3</M>. First, let's get rid of
                        division by <M>3</M>. To do this, using the rule of the same action, we multiply both sides of
                        the equation by <M>3</M>. Then on the left side <M>3</M> and <M>3</M> will cancel out, leaving
                        only <M>10 - x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot \ 3} \ | \ -\frac{10-x}{3} = \frac{-8}{4} \ | \ \brand{\cdot 3} \\
                        \cancel{3} \cdot (-1) \cdot \frac{10-x}{\cancel{3}} = 3 \cdot \frac{-8}{4} \\
                        -(10 - x) = -6 \\
                        -10 + x = -6
                    `}</BlockMath>
                    <P>
                        Now variable <M>x</M> is hindered only by addition with <M>-10</M>. To get rid of it, we add{' '}
                        <M>10</M> to both sides of the equation. Then on the left side <M>-10</M> and <M>+10</M> will
                        mutually destroy each other (resulting in <M>0</M>), leaving only <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 10} \ | \ -10 + x = -6 \ | \ \brand{+ 10} \\
                        \cancel{10} + (-\cancel{10}) + x = -6 + 10 \\
                        \boxed{x = 4}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>
                        Solve the equation in two ways, first by elementary actions, and then using "fraction flipping":
                    </P>
                    <BlockMath>{math`\frac{1}{x-1} = \frac{2}{x + 2}`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={4} />
                <ProblemSolution>
                    <P>
                        <B>Solution by elementary actions:</B>
                    </P>
                    <P>
                        First, let's pull <M>x</M> up from the denominator of the left fraction. To do this, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, we multiply both sides of the equation
                        by <M>x - 1</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x - 1)} \ | \ \frac{1}{x-1} = \frac{2}{x + 2} \ | \ \brand{\cdot (x - 1)} \\
                        \cancel{(x - 1)} \cdot \frac{1}{\cancel{x-1}} = \frac{2}{x + 2} \cdot (x - 1) \\
                        1 = \frac{2(x - 1)}{x + 2}
                    `}</BlockMath>
                    <P>
                        Now let's pull <M>x</M> up from the denominator of the right fraction. To do this, multiply both
                        sides of the equation by <M>x + 2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x + 2)} \ | \ 1 = \frac{2(x - 1)}{x + 2} \ | \ \brand{\cdot (x + 2)} \\
                        (x + 2) \cdot 1 = \frac{2(x - 1)}{\cancel{x + 2}} \cdot \cancel{x + 2} \\
                        x + 2 = 2(x - 1)
                    `}</BlockMath>
                    <P>Expand the brackets on the right:</P>
                    <BlockMath>{math`x+2 = 2x - 2`}</BlockMath>
                    <P>
                        Now let's group <M>x</M> in the right part of the equation. To do this, we get rid of <M>x</M>{' '}
                        in the left part. Using the rule of the same action, we subtract <M>x</M> from both sides of the
                        equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ x + 2 = 2x - 2 \ | \ \brand{- x} \\
                        -\cancel{x} + \cancel{x} + 2 = 2x - 2 - x \\
                        2 = x - 2
                    `}</BlockMath>
                    <P>
                        Finally, so that <M>x</M> remains alone, we need to get rid of <M>-2</M>. To do this, add{' '}
                        <M>2</M> to both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 2} \ | \ 2 = x - 2 \ | \ \brand{+ 2} \\
                        \cancel{2} + 2 = x - \cancel{2} + \cancel{2} \\
                        \boxed{4 = x}
                    `}</BlockMath>

                    <P>
                        <B>Solution by fraction flipping:</B>
                    </P>
                    <P>
                        Using the <Dep to={sameActionRule}>rule</Dep> of the same action, we apply "fraction flipping"
                        to both sides of the equation:
                    </P>
                    <BlockMath>{math`x - 1 = \frac{x+2}{2}`}</BlockMath>
                    <P>
                        Get rid of <M>2</M> in the denominator by multiplying both sides of the equation by <M>2</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 2} \ | \ x - 1 = \frac{x+2}{2} \ | \ \brand{\cdot 2} \\
                        2(x - 1) = \frac{x + 2}{\cancel{2}} \cdot \cancel{2} \\
                        2x - 2 = x + 2
                    `}</BlockMath>
                    <P>
                        Group <M>x</M> in the left part of the equation. To do this, we get rid of <M>x</M> in the right
                        part. To do this, subtract <M>x</M> from both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ 2x - 2 = x + 2 \ | \ \brand{- x} \\
                        -x + 2x - 2 = \cancel{x} + 2 - \cancel{x} \\
                        x - 2 = 2
                    `}</BlockMath>
                    <P>
                        Finally, so that <M>x</M> remains alone, we need to get rid of <M>-2</M>. To do this, add{' '}
                        <M>2</M> to both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 2} \ | \ x - 2 = 2 \ | \ \brand{+ 2} \\
                        x - \cancel{2} + \cancel{2} = 2 + 2 \\
                        \boxed{x = 4}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <P>Solve the equation using "fraction flipping":</P>
                    <BlockMath>{math`\frac{1}{x-15} = \frac{4}{4x+9}`}</BlockMath>
                </ProblemDescription>
                <ProblemAnswer>This equation has no solutions.</ProblemAnswer>
                <ProblemSolution>
                    <P>
                        On both sides of the equation there are fractions and <M>x</M> is at the bottom. This is
                        inconvenient. Therefore, using the <Dep to={sameActionRule}>rule</Dep> of the same action, we
                        apply "fraction flipping" to both sides of the equation:
                    </P>
                    <BlockMath>{math`\frac{x-15}{1} = \frac{4x+9}{4}`}</BlockMath>
                    <P>
                        On the right we have a fraction with denominator <M>4</M>. To get rid of division by <M>4</M>,
                        multiply both sides of the equation by <M>4</M>. Then on the right side <M>4</M> and <M>4</M>{' '}
                        will cancel out, leaving only <M>4x + 9</M>. Don't forget about the{' '}
                        <Dep to={alwaysGlobal}>globality</Dep> of the action and enclose the left side in brackets:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot \ 4} \ | \ \frac{x-15}{1} = \frac{4x+9}{4} \ | \ \brand{\cdot 4} \\
                        4 \cdot \frac{x-15}{1} = \frac{4x+9}{\cancel{4}} \cdot \cancel{4} \\
                        4(x - 15) = 4x + 9 \\
                        4x - 60 = 4x + 9
                    `}</BlockMath>
                    <P>
                        Let's group <M>x</M> in some part of the equation, for example, on the left. Then we need to get
                        rid of <M>4x</M> on the right. To do this, subtract <M>4x</M> from both sides of the equation.
                    </P>
                    <BlockMath>{math`
                        \brand{- 4x} \ | \ 4x - 60 = 4x + 9 \ | \ \brand{- 4x} \\
                        -\cancel{4x} + \cancel{4x} - 60 = \cancel{4x} + 9 - \cancel{4x} \\
                        -60 = 9
                    `}</BlockMath>
                    <P>
                        It so happened that the variable disappeared completely from the equation. Only the false
                        equality <M>-60 = 9</M> remains, in which, as it turned out, <M>x</M> does not affect anything.
                        Whatever number we substitute for <M>x</M>, after performing all the above actions, we will
                        inevitably arrive at a false equality. No number will be a root of this equation. This equation
                        has no solutions.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problem title="Mystery of Flipping Fractions" level="medium">
            <ProblemDescription>
                <P>
                    To solve the equation, Tanya decided to use the{' '}
                    <Dep to={uniques.fractionsFlip}>fraction flipping</Dep> technique:
                </P>
                <BlockMath>{math`\frac{1}{x} + \frac{1}{3} = \frac{2}{8} \quad \Rightarrow \quad x + 3 = \frac{8}{2}`}</BlockMath>
                <P>
                    Did she do the right thing? If not, explain in detail what went wrong and solve the equation
                    correctly.
                </P>
            </ProblemDescription>
            <ProblemHint>"Fraction flipping" indeed works, but was used incorrectly in this example.</ProblemHint>
            <ProblemHint>
                The <Dep to={alwaysGlobal}>principle</Dep> of "globality" of action was violated.
            </ProblemHint>
            <ProblemHint>
                Instead of flipping the entire left side <B>as a single whole</B>, two fractions inside this part were
                flipped, which is <B>not the same thing</B>!
            </ProblemHint>
            <ProblemSolution>
                <P>
                    <B>Error detection:</B>
                </P>
                <P>Let's finish solving the equation using the "fraction flipping" action:</P>
                <BlockMath>{math`\frac{1}{x} + \frac{1}{3} = \frac{2}{8} \quad \Rightarrow \quad x + 3 = \frac{8}{2}`}</BlockMath>
                <P>
                    On the left side, the variable <M>x</M> is hindered by addition with <M>3</M>. To get rid of it, we
                    subtract <M>3</M> from both sides of the equation. Then on the left side <M>+3</M> and <M>-3</M>{' '}
                    will mutually destroy each other (resulting in <M>0</M>), leaving only <M>x</M>:
                </P>
                <BlockMath>{math`
                    x + 3 = \frac{8}{2} \\
                    \brand{- 3} \ | \ x + 3 = \frac{8}{2} \ | \ \brand{- 3} \\
                    x + \cancel{3} - \cancel{3} = \frac{8}{2} - 3 \\
                    x = 4 - 3 \\
                    \boxed{x = 1}
                `}</BlockMath>
                <P>
                    So, if we solve the equation with "fraction flipping", the root will be the number <M>1</M>.
                    However, if we substitute <M>1</M> into the original equation, we get a false equality!
                </P>
                <BlockMath>{math`
                    \frac{1}{1} + \frac{1}{3} = \frac{2}{8} \\
                    1 + \frac{1}{3} = \frac{2}{8} \\
                `}</BlockMath>
                <P>
                    On the left side we have a number greater than <M>1</M>, and on the right a proper fraction, that
                    is, a number less than <M>1</M>.
                </P>

                <P>
                    <B>Correct fraction flipping:</B>
                </P>
                <P>
                    When we perform an action on a part of an equality, we must apply it to the entire part as a{' '}
                    <Dep to={alwaysGlobal}>single whole</Dep>! On the right side, the action is applied correctly and
                    the fraction{' '}
                    <M>
                        \frac{2}
                        {8}
                    </M>{' '}
                    turns into{' '}
                    <M>
                        \frac{8}
                        {2}
                    </M>
                    . But on the left, the correct application of the rule would look like this:
                </P>
                <BlockMath>{math`\frac{1}{\frac{1}{3} + \frac{1}{x}} = \frac{8}{2}`}</BlockMath>
                <P>
                    That is, the <B>entire left side</B> is flipped as one big fraction, not its constituent fractions!
                    Let's complete the solution. On the bottom left, we bring the fractions to a common denominator and
                    perform division of fractions:
                </P>
                <BlockMath>{math`
                    \frac{1}{\frac{1}{3} + \frac{1}{x}} = \frac{8}{2} \\
                    \frac{1}{\frac{x + 3}{3x}} = \frac{8}{2} \\
                    \frac{3x}{x + 3} = \frac{8}{2}
                `}</BlockMath>
                <P>
                    It is inconvenient when <M>x + 3</M> is in the denominator. To "pull" it out from there, multiply
                    both sides of the equation by <M>x + 3</M>. Then in the left side <M>x + 3</M> and <M>x + 3</M> will
                    cancel out, leaving only <M>3x</M>:
                </P>
                <BlockMath>{math`
                    \brand{\cdot (x + 3)} \ | \ \frac{3x}{x + 3} = \frac{8}{2} \ | \ \brand{\cdot (x + 3)} \\
                    \frac{3x\cdot\cancel{(x+3)}}{\cancel{x+3}} = \frac{8}{2} \cdot (x + 3) \\
                    3x = 4(x + 3) \\
                    3x = 4x + 12
                `}</BlockMath>
                <P>
                    Let's group <M>x</M> on the left side. To do this, subtract <M>4x</M> from both sides of the
                    equation. Then on the right side <M>4x</M> and <M>-4x</M> will mutually destroy each other
                    (resulting in <M>0</M>), and there will remain only <M>12</M>:
                </P>
                <BlockMath>{math`
                    \brand{- 4x} \ | \ 3x = 4x + 12 \ | \ \brand{- 4x} \\
                    3x - \cancel{4x} = \cancel{4x} + 12 - \cancel{4x} \\
                    -x = 12
                `}</BlockMath>
                <P>
                    Multiply both sides by <M>-1</M> and get the answer:
                </P>
                <BlockMath>{math`
                    \brand{\cdot \ (-1)} \ | \ -x = 12 \ | \ \brand{\cdot (-1)} \\
                    (-1) \cdot (-1) \cdot 4 = (-1) \cdot (-1) \cdot x \\
                    \boxed{x = -12}
                `}</BlockMath>
            </ProblemSolution>
        </Problem>

        <Problem title="Complete Opposite" level="medium">
            <ProblemDescription>
                <P>
                    For what value of <M>p</M> will the expressions <M>3p-1</M> and <M>5(p + 5)</M> be opposite numbers?
                    Find these opposite numbers.
                </P>
            </ProblemDescription>
            <ProblemCheck answers={['-3', '-10', '10']} />
            <ProblemHint>
                Opposite numbers are numbers that differ only in sign. So one can be obtained from the other simply by
                multiplying it by <M>-1</M>.
            </ProblemHint>
            <ProblemHint>Make a true equality from these two expressions.</ProblemHint>
            <ProblemAnswer>
                At <M>p = -3</M> the expressions <M>3p-1</M> and <M>5(p + 5)</M> will be opposite numbers <M>-10</M> and{' '}
                <M>10</M> respectively.
            </ProblemAnswer>
            <ProblemSolution>
                <P>
                    Opposite numbers are numbers that differ only in sign. So one can be obtained from the other simply
                    by multiplying it by <M>-1</M>. For example, if we multiply the number <M>3p-1</M> by <M>-1</M>, we
                    should get the number <M>5(p + 5)</M>. From this, we can form a true equality:
                </P>
                <BlockMath>{math`
                    (-1) \cdot (3p - 1) = 5(p + 5) \\
                    -3p + 1 = 5(p + 5) \\
                `}</BlockMath>
                <P>
                    Now all that remains is to solve the equation! First, expand the brackets on the right side of the
                    equation:
                </P>
                <BlockMath>{math`-3p + 1 = 5p + 25`}</BlockMath>
                <P>
                    Let's group <M>p</M> on the right side of the equation. To do this, we need to get rid of <M>-3p</M>
                    on the left side. To do this, using the <Dep to={sameActionRule}>rule</Dep> of the same action, we
                    add <M>3p</M> to both sides of the equation:
                </P>
                <BlockMath>{math`
                    \brand{+ 3p} \ | \ -3p + 1 = 5p + 25 \ | \ \brand{+ 3p} \\
                    \cancel{3p} -\cancel{3p} + 1 = 5p + 25 + 3p \\
                    1 = 8p + 25
                `}</BlockMath>
                <P>
                    So that <M>p</M> remains alone, we need to get rid of multiplication by <M>8</M> and addition with{' '}
                    <M>25</M>. First, let's get rid of addition with <M>25</M>. To do this, subtract <M>25</M> from both
                    sides of the equation:
                </P>
                <BlockMath>{math`
                    \brand{- 25} \ | \ 1 = 8p + 25 \ | \ \brand{- 25} \\
                    -25 + 1 = 8p + \cancel{25} - \cancel{25} \\
                    -24 = 8p
                `}</BlockMath>
                <P>
                    Now let's get rid of multiplication by <M>8</M>. To do this, divide both sides of the equation by{' '}
                    <M>8</M>:
                </P>
                <BlockMath>{math`
                    \brand{\div 8} \ | \ -24 = 8p \ | \ \brand{\div 8} \\
                    \frac{-24}{8} = \frac{\cancel{8}p}{\cancel{8}} \\
                    \boxed{-3 = p}
                `}</BlockMath>
                <P>
                    Let's perform a check. Substitute <M>-3</M> instead of <M>p</M> into expressions from the condition:
                </P>
                <BlockMath>{math`
                    3p-1 = 3 \cdot (-3) - 1 = -9 - 1 = \boxed{-10} \\
                    5(p+5) = 5 \cdot (-3 + 5) = 5 \cdot 2 = \boxed{10}
                `}</BlockMath>
                <P>
                    We indeed got opposite numbers <M>-10</M> and <M>10</M>!
                </P>
            </ProblemSolution>
        </Problem>

        <Problem title="You'll Never Guess!" level="hard">
            <ProblemDescription>
                <P>
                    Solve the equation in the article that was used as an example of an equation that cannot be solved
                    by guessing:
                </P>
                <BlockMath>{math`\frac{x + 743 \ 639}{28} - 18x = 2025x`}</BlockMath>
            </ProblemDescription>
            <ProblemCheck answer={13} />
            <ProblemSolution>
                <P>
                    First, let's get rid of the fraction. To do this, using the <Dep to={sameActionRule}>rule</Dep> of
                    the same action, multiply both sides of the equation by <M>28</M>. Under no circumstances should we
                    forget about the <Dep to={alwaysGlobal}>globality</Dep> of this action, and we enclose the left side
                    in parentheses:
                </P>
                <BlockMath>{math`
                    \brand{\cdot \ 28} \ | \ \frac{x + 743 \ 639}{28} - 18x = 2025x \ | \ \brand{\cdot 28} \\
                    28 \cdot \left( \frac{x + 743 \ 639}{28} - 18x \right) = (2025x) \cdot 28 \\
                    \cancel{28} \cdot \frac{x + 743 \ 639}{\cancel{28}} - 18x \cdot 28 = 2025x \cdot 28 \\
                    x + 743 \ 639 - 504x = 56 \ 700x \\
                    743 \ 639 - 503 x = 56 \ 700x
                `}</BlockMath>
                <P>
                    Let's group <M>x</M> on the right side. To do this, add <M>503x</M> to both sides of the equation.
                    Then on the left side, <M>-503x</M> and <M>+503x</M> will cancel each other out (the sum results in{' '}
                    <M>0</M>), and no "xes" will remain there:
                </P>
                <BlockMath>{math`
                    \brand{+ 503x} \ | \ 743 \ 639 - 503 x = 56 \ 700x \ | \ \brand{+ 503x} \\
                    743 \ 639 - \cancel{503x} + \cancel{503x} = 56 \ 700x + 503x \\
                    743 \ 639 = 57 \ 203x
                `}</BlockMath>
                <P>
                    Now only multiplication by <M>57 \ 203</M> interferes with the unknown. To get rid of it and leave{' '}
                    <M>x</M> alone, divide both sides of the equation by <M>57 \ 203</M>. Then on the right side, we can
                    perform reduction:
                </P>
                <BlockMath>{math`
                    \brand{\div \ 57 \ 203} \ | \ 743 \ 639 = 57 \ 203x \ | \ \brand{\div 57 \ 203} \\
                    \frac{743 \ 639}{57 \ 203} = \frac{\cancel{57 \ 203}x}{\cancel{57 \ 203}} \\
                    \boxed{13 = x}
                `}</BlockMath>
            </ProblemSolution>
        </Problem>

        <Problems title="Think 7 times, act once" level="hard" method>
            <P>
                Among the suggested actions, choose the one that allows solving the equation in fewer steps. Explain in
                detail why the chosen action is better compared to the other.
            </P>
            <P>
                If you don't know which action to choose, solve the equation twice using both actions, and then it will
                become clear which action was more effective.
            </P>

            <SubProblem label="Trick 1">
                <ProblemDescription>
                    <BlockMath>{math`3x + 2 = x`}</BlockMath>
                    <P>Actions:</P>
                    <List type="ol">
                        <Li>
                            Group <M>x</M> on the left side of the equation.
                        </Li>
                        <Li>
                            Group <M>x</M> on the right side of the equation.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>
                    There is an "extra" number on the left side that will have to be gotten rid of.
                </ProblemHint>
                <ProblemAnswer>
                    It is more profitable to group <M>x</M> on the right side of the equation. After that, the equation
                    will be solved in one action. If <M>x</M> is grouped on the left, then two actions will have to be
                    taken.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        It is more profitable to group <M>x</M> on the right side of the equation, by subtracting{' '}
                        <M>3x</M>
                        from both sides of the equation using the <Dep to={sameActionRule}>rule</Dep> of the same
                        action:
                    </P>
                    <BlockMath>{math`
                        \brand{- 3x} \ | \ 3x + 2 = x \ | \ \brand{- 3x} \\
                        -\cancel{3x} + \cancel{3x} + 2 = x - 3x \\
                        2 = -2x
                    `}</BlockMath>
                    <P>
                        In this situation, to solve the equation, it remains only to divide both parts by <M>-2</M> and
                        get the answer:
                    </P>
                    <BlockMath>{math`
                        \brand{\div (-2)} \ | \ 2 = -2x \ | \ \brand{\div (-2)} \\
                        \frac{2}{-2} = \frac{\cancel{-2}x}{\cancel{-2}} \\
                        \boxed{-1 = x}
                    `}</BlockMath>
                    <P>
                        If we decided to group <M>x</M> on the left side of the equation by subtracting <M>x</M> from
                        both sides, we would arrive at the following situation:
                    </P>
                    <BlockMath>{math`
                        \brand{- x} \ | \ 3x + 2 = x \ | \ \brand{- x} \\
                        -x + 3x + 2 = \cancel{x} - \cancel{x} \\
                        2x + 2 = 0
                    `}</BlockMath>
                    <P>
                        Now we have everything piled up on the left. To clear it up, we will have to get rid of addition
                        with <M>2</M>, and then multiplication by <M>2</M>. That is, do two actions instead of one if we
                        had grouped <M>x</M> on the right side!
                    </P>
                </ProblemSolution>
                <ProblemNote>
                    Important conclusion -- when solving equations, we try to group <M>x</M> where there are fewer
                    "extra" numbers!
                </ProblemNote>
            </SubProblem>

            <SubProblem label="Trick 2">
                <ProblemDescription>
                    <BlockMath>{math`7x - 2 = 5x + 10`}</BlockMath>
                    <P>Actions:</P>
                    <List type="ol">
                        <Li>
                            Group <M>x</M> on the left side of the equation.
                        </Li>
                        <Li>
                            Group <M>x</M> on the right side of the equation.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>
                    Getting a negative coefficient before <M>x</M> is undesirable.
                </ProblemHint>
                <ProblemAnswer>
                    It is more profitable to group <M>x</M> on the left side of the equation, because then the
                    coefficient at <M>x</M> will turn out to be positive. If <M>x</M> is grouped on the right, then
                    later an extra action will have to be done to get rid of the minus before <M>x</M>.
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        It is more profitable to group <M>x</M> on the left side of the equation, by subtracting{' '}
                        <M>5x</M>
                        from both sides of the equation using the <Dep to={sameActionRule}>rule</Dep> of the same
                        action:
                    </P>
                    <BlockMath>{math`
                        \brand{- 5x} \ | \ 7x - 2 = 5x + 10 \ | \ \brand{- 5x} \\
                        -5x + 7x - 2 = \cancel{5x} + 10 - \cancel{5x} \\
                        2x - 2 = 10
                    `}</BlockMath>
                    <P>
                        Yes, here we have <M>2x</M> connected by subtraction of <M>2</M>, but the coefficient at{' '}
                        <M>x</M> is positive.
                    </P>
                    <P>
                        If we had chosen to group <M>x</M> on the right side of the equation by subtracting <M>7x</M>
                        from both sides of the equation, we would have arrived at the following situation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 7x} \ | \ 7x - 2 = 5x + 10 \ | \ \brand{- 7x} \\
                        -\cancel{7x} + \cancel{7x} - 2 = 5x + 10 - 7x \\
                        -2 = -2x + 10
                    `}</BlockMath>
                    <P>
                        Here <M>-2x</M> is also connected with an extra number, with <M>10</M>, but in addition, the
                        coefficient at <M>x</M> is negative. Because of this, in the end we will have to multiply both
                        sides of the equation by <M>-1</M> to get rid of the minus before <M>x</M>.
                    </P>
                </ProblemSolution>
                <ProblemNote>
                    Important conclusion -- if the solution can be greatly simplified, a negative coefficient at{' '}
                    <M>x</M>
                    can be tolerated. But if no strong simplification can be achieved, it is better to avoid negative
                    coefficients and group so that the coefficient at <M>x</M> is positive.
                </ProblemNote>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x = 8x - 3`}</BlockMath>
                    <P>Actions:</P>
                    <List type="ol">
                        <Li>
                            Group <M>x</M> on the left side of the equation.
                        </Li>
                        <Li>
                            Group <M>x</M> on the right side of the equation.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>Use trick 1.</ProblemHint>
                <ProblemAnswer>
                    It is more profitable to group <M>x</M> on the left side. Then subtraction of <M>3</M> will not
                    interfere with us.
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`11 + 9x = 20x`}</BlockMath>
                    <P>Actions:</P>
                    <List type="ol">
                        <Li>
                            Group <M>x</M> on the left side of the equation.
                        </Li>
                        <Li>
                            Group <M>x</M> on the right side of the equation.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>Use trick 1.</ProblemHint>
                <ProblemAnswer>
                    It is more profitable to group <M>x</M> on the right side. Then addition with <M>11</M> will not
                    interfere with us.
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`3x + 2 = 5x - 10`}</BlockMath>
                    <P>Actions:</P>
                    <List type="ol">
                        <Li>
                            Group <M>x</M> on the left side of the equation.
                        </Li>
                        <Li>
                            Group <M>x</M> on the right side of the equation.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>Use trick 2.</ProblemHint>
                <ProblemAnswer>
                    It is more profitable to group <M>x</M> on the right side. This way we get a positive coefficient at{' '}
                    <M>x</M>.
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`76x + 10 = 46x - 12`}</BlockMath>
                    <P>Actions:</P>
                    <List type="ol">
                        <Li>
                            Group <M>x</M> on the left side of the equation.
                        </Li>
                        <Li>
                            Group <M>x</M> on the right side of the equation.
                        </Li>
                    </List>
                </ProblemDescription>
                <ProblemHint>Use trick 2.</ProblemHint>
                <ProblemAnswer>
                    It is more profitable to group <M>x</M> on the left side. This way we get a positive coefficient at{' '}
                    <M>x</M>.
                </ProblemAnswer>
            </SubProblem>
        </Problems>

        <Problems title="Advanced Equations" level="hard">
            <P>Solve the equation:</P>
            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-4x^2 + 2x + 6 = -2x^2 + 3x -(-3 + 2x^2)`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={3} />
                <ProblemHint>Expand the brackets and combine like terms on the right side of the equation.</ProblemHint>
                <ProblemSolution>
                    <P>On the right side, expand the brackets and combine like terms:</P>
                    <BlockMath>{math`
                        -4x^2 + 2x + 6 = -2x^2 + 3x + 3 - 2x^2 \\
                        -4x^2 + 2x + 6 = -4x^2 + 3x + 3
                    `}</BlockMath>
                    <P>
                        We notice identical terms <M>-4x^2</M> on the left and right. We can get rid of them, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, by adding <M>4x^2</M> to both sides of
                        the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 4x^2} \ | \ -4x^2 + 2x + 6 = -4x^2 + 3x + 3 \ | \ \brand{+ 4x^2} \\
                        \cancel{4x^2} - \cancel{4x^2} + 2x + 6 = -\cancel{4x^2} + 3x + 3 + \cancel{4x^2} \\
                        2x + 6 = 3x + 3
                    `}</BlockMath>
                    <P>
                        Let's group <M>x</M> on the left side. To do this, we need to get rid of <M>3x</M> on the right
                        side. To do this, subtract <M>3x</M> from both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 3x} \ | \ 2x + 6 = 3x + 3 \ | \ \brand{- 3x} \\
                        - 3x + 2x + 6 = \cancel{3x} + 3 - \cancel{3x} \\
                        -x + 6 = 3
                    `}</BlockMath>
                    <P>
                        Now <M>x</M> prevents remaining alone multiplication by <M>-1</M> and addition with <M>6</M>.
                        First, let's get rid of addition with <M>6</M>. To do this, subtract <M>6</M> from both sides of
                        the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 6} \ | \ -x + 6 = 3 \ | \ \brand{- 6} \\
                        -\cancel{6} + \cancel{6} - x = 3 - 6 \\
                        -x = -3
                    `}</BlockMath>
                    <P>
                        Now multiply both sides of the equation by <M>-1</M> to get rid of the minus before <M>x</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -x = -3 \ | \ \brand{\cdot (-1)} \\
                        (-1) \cdot (-1)x = (-1) \cdot (-3) \\
                        \boxed{x = 3}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-\frac{5}{7}x^2 + 35 = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck set={[7, -7]} />
                <ProblemHint>
                    Isolate (leave alone) <M>x^2</M>.
                </ProblemHint>
                <ProblemSolution>
                    <P>
                        We will gradually isolate <M>x^2</M>. To begin with, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, subtract <M>35</M> from both sides of
                        the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 35} \ | \ -\frac{5}{7}x^2 + 35 = 0 \ | \ \brand{- 35} \\
                        - \cancel{35} - \frac{5}{7}x^2 + \cancel{35} = 0 - 35 \\
                        -\frac{5}{7}x^2 = -35
                    `}</BlockMath>
                    <P>
                        Now multiply both sides of the equation by <M>-1</M> to get rid of minuses in both parts:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (-1)} \ | \ -\frac{5}{7}x^2 = -35 \ | \ \brand{\cdot (-1)} \\
                        (-1) \cdot (-1) \cdot \frac{5}{7}x^2 = (-1) \cdot (-1) \cdot 35 \\
                        \frac{5}{7}x^2 = 35
                    `}</BlockMath>
                    <P>
                        To get rid of the numerator <M>5</M> of the fraction on the left side, divide both sides of the
                        equation by <M>5</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 5} \ | \ \frac{5}{7}x^2 = 35 \ | \ \brand{\div 5} \\
                        \frac{\cancel{5}}{\cancel{5}\cdot7}x^2 = \frac{35}{5} \\
                        \frac{x^2}{7} = 7
                    `}</BlockMath>
                    <P>
                        Now let's get rid of division by <M>7</M>. To do this, multiply both sides of the equation by{' '}
                        <M>7</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 7} \ | \ \frac{x^2}{7} = 7 \ | \ \brand{\cdot 7} \\
                        \cancel{7} \cdot \frac{x^2}{\cancel{7}} = 7 \cdot 7 \\
                        x^2 = 49
                    `}</BlockMath>
                    <P>
                        Recall which number squared gives <M>49</M>. This number is <M>7</M>. But <M>-7</M> also squared
                        gives <M>49</M>. Therefore, the equation has two solutions: <M>7</M> and <M>-7</M>!
                    </P>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`(x+11)^2 = (x-9)^2`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answer={-1} />
                <ProblemHint>Expand the brackets and combine like terms on both sides of the equation.</ProblemHint>
                <ProblemHint>
                    On the left, use the formula for the square of the sum, and on the right -- the formula for the
                    square of the difference.
                </ProblemHint>
                <ProblemSolution>
                    <P>On the left, use the formula for the square of the sum and combine like terms:</P>
                    <BlockMath>{math`
                        (x + 11)^2 = (x - 9)^2 \\
                        x^2 + 2\cdot x \cdot11 + 11^2 = (x - 9)^2 \\
                        x^2 + 22x + 121 = (x - 9)^2
                    `}</BlockMath>
                    <P>On the right, use the formula for the square of the difference and combine like terms:</P>
                    <BlockMath>{math`
                        x^2 + 22x + 121 = x^2 - 2\cdot x \cdot9 + 9^2 \\
                        x^2 + 22x + 121 = x^2 - 18x + 81
                    `}</BlockMath>
                    <P>
                        We notice identical terms <M>x^2</M> on the left and right. We can get rid of them, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, by subtracting <M>x^2</M> from both
                        sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- x^2} \ | \ x^2 + 22x + 121 = x^2 - 18x + 81 \ | \ \brand{- x^2} \\
                        -\cancel{x^2} + \cancel{x^2} + 22x + 121 = \cancel{x^2} - 18x + 81 -\cancel{x^2} \\
                        22x + 121 = -18x + 81
                    `}</BlockMath>
                    <P>
                        Let's group <M>x</M> on the left side. To do this, we need to get rid of <M>-18x</M> on the
                        right side. To do this, add <M>18x</M> to both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 18x} \ | \ 22x + 121 = -18x + 81 \ | \ \brand{+ 18x} \\
                        22x + 18x + 121 = -\cancel{18x} + 81 + \cancel{18x} \\
                        40x + 121 = 81
                    `}</BlockMath>
                    <P>
                        So that <M>x</M> stays alone, we need to get rid of multiplication by <M>40</M> and addition
                        with <M>121</M>. First, let's get rid of addition with <M>121</M>. To do this, subtract{' '}
                        <M>121</M> from both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 121} \ | \ 40x + 121 = 81 \ | \ \brand{- 121} \\
                        -\cancel{121} + \cancel{121} + 40x = 81 - 121 \\
                        40x = -40
                    `}</BlockMath>
                    <P>
                        Finally, let's get rid of multiplication by <M>40</M>. To do this, divide both sides of the
                        equation by <M>40</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 40} \ | \ 40x = -40 \ | \ \brand{\div 40} \\
                        \frac{\cancel{40}}{\cancel{40}}x = \frac{-40}{40} \\
                        \boxed{x = -1}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{7}{3x + 8} - \frac{2}{4x - 1} = 0`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['23/22']} />
                <ProblemHint>
                    In one action, make it so that the fractions are on both sides of the equation. Then use{' '}
                    <Dep to={uniques.fractionsFlip}>fraction flipping</Dep>.
                </ProblemHint>
                <ProblemSolution>
                    <P>
                        Let's make it so that the fractions are on both sides of the equation. To do this, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, add fractional{' '}
                        <M>{math`\frac{2}{4x - 1}`}</M> to both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{+ \frac{2}{4x - 1}} \ | \ \frac{7}{3x + 8} - \frac{2}{4x - 1} = 0 \ | \ \brand{+ \frac{2}{4x - 1}} \\
                        \cancel{\frac{2}{4x - 1}} + \frac{7}{3x + 8} - \cancel{\frac{2}{4x - 1}} = 0 + \frac{2}{4x - 1} \\
                        \frac{7}{3x + 8} = \frac{2}{4x - 1}
                    `}</BlockMath>
                    <P>
                        All x's stick out in the denominators. Disorder, and it is inconvenient to solve like this. We
                        use <Dep to={uniques.fractionsFlip}>fraction flipping</Dep>:
                    </P>
                    <BlockMath>{math`\frac{3x + 8}{7} = \frac{4x - 1}{2}`}</BlockMath>
                    <P>
                        Getting rid of denominators by multiplying both sides of the equation by <M>7</M> and <M>2</M>.
                        And don't forget about the <Dep to={alwaysGlobal}>globality</Dep> of this action -- enclose both
                        sides of the equation in parentheses!
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot 7 \cdot 2} \ | \ \frac{3x + 8}{7} = \frac{4x - 1}{2} \ | \ \brand{\cdot 7 \cdot 2} \\
                        \frac{\cancel{7}\cdot 2\cdot (3x + 8)}{\cancel{7}} = \frac{ 7\cdot\cancel{2}\cdot (4x - 1)}{\cancel{2}} \\
                        2(3x + 8) = 7(4x - 1)
                    `}</BlockMath>
                    <P>Expanding brackets:</P>
                    <BlockMath>{math`6x + 16 = 28x - 7`}</BlockMath>
                    <P>
                        Grouping <M>x</M> on the right side. To do this, subtract <M>6x</M> from both sides of the
                        equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 6x} \ | \ 6x + 16 = 28x - 7 \ | \ \brand{- 6x} \\
                        -\cancel{6x} + \cancel{6x} + 16 = 28x - 7 - 6x \\
                        16 = 22x - 7
                    `}</BlockMath>
                    <P>
                        Adding <M>7</M> to both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 7} \ | \ 16 = 22x - 7 \ | \ \brand{+ 7} \\
                        7 + 16 = 22x - \cancel{7} + \cancel{7} \\
                        23 = 22x
                    `}</BlockMath>
                    <P>
                        Dividing both sides of the equation by <M>22</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 22} \ | \ 23 = 22x \ | \ \brand{\div 22} \\
                        \frac{23}{22} = \frac{\cancel{22}x}{\cancel{22}} \\
                        \boxed{\frac{23}{22} = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`(2x-5)^2 = 4x^2`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck answers={['5/4', '1.25']} />
                <ProblemHint>Expand brackets on the left using the square of difference formula.</ProblemHint>
                <ProblemSolution>
                    <P>Expanding brackets on the left using the square of difference formula:</P>
                    <BlockMath>{math`
                        (2x - 5)^2 = 4x^2 \\
                        (2x)^2 - 2\cdot(2x)\cdot5 + 5^2 = 4x^2 \\
                        4x^2 - 20x + 25 = 4x^2
                    `}</BlockMath>
                    <P>
                        We notice identical terms <M>4x^2</M> on the left and right. We can get rid of them, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, subtracting <M>4x^2</M> from both sides
                        of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- 4x^2} \ | \ 4x^2 - 20x + 25 = 4x^2 \ | \ \brand{- 4x^2} \\
                        -\cancel{4x^2} + \cancel{4x^2} - 20x + 25 = \cancel{4x^2} - \cancel{4x^2} \\
                        -20x + 25 = 0
                    `}</BlockMath>
                    <P>
                        Add <M>20x</M> to both sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{+ 20x} \ | \ -20x + 25 = 0 \ | \ \brand{+ 20x} \\
                        -\cancel{20x} + \cancel{20x} + 25 = 0 + 20x \\
                        25 = 20x
                    `}</BlockMath>
                    <P>
                        Finally, divide both sides of the equation by <M>20</M> to leave <M>x</M> alone on the right:
                    </P>
                    <BlockMath>{math`
                        \brand{\div 20} \ | \ 25 = 20x \ | \ \brand{\div 20} \\
                        \frac{25}{20} = \frac{\cancel{20}x}{\cancel{20}} \\
                        \boxed{\frac{5}{4} = x}
                    `}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{x^2}{x-3} = 4x`}</BlockMath>
                </ProblemDescription>
                <ProblemCheck set={[0, 4]} />
                <ProblemHint>
                    Group all <M>x</M> in one part of the equation and factor out common factors.
                </ProblemHint>
                <ProblemHint>
                    Use the technique from the task <Dep to={uniques.zeroFactors}>Zero Factors</Dep>.
                </ProblemHint>
                <ProblemSolution>
                    <P>
                        Let's pull <M>x-3</M> out of the denominator. To do this, using the{' '}
                        <Dep to={sameActionRule}>rule</Dep> of the same action, multiply both sides of the equation by{' '}
                        <M>x-3</M>:
                    </P>
                    <BlockMath>{math`
                        \brand{\cdot (x-3)} \ | \ \frac{x^2}{x-3} = 4x \ | \ \brand{\cdot (x-3)} \\
                        \cancel{(x-3)}\cdot\frac{x^2}{\cancel{x-3}} = 4x\cdot(x-3) \\
                        x^2 = 4x^2 - 12x
                    `}</BlockMath>
                    <P>
                        Let's group all x's on the right side of the equation. To do this, subtract <M>x^2</M> from both
                        sides of the equation:
                    </P>
                    <BlockMath>{math`
                        \brand{- x^2} \ | \ x^2 = 4x^2 - 12x \ | \ \brand{- x^2} \\
                        -\cancel{x^2} + \cancel{x^2} = 4x^2 - 12x - x^2 \\
                        0 = 3x^2 - 12x
                    `}</BlockMath>
                    <P>
                        Factor out <M>3x</M>:
                    </P>
                    <BlockMath>{math`0 = 3x(x - 4)`}</BlockMath>
                    <P>
                        We got a product of factors that equals zero, just like in the task{' '}
                        <Dep to={uniques.zeroFactors}>Zero Factors</Dep>. This means this equation splits into two
                        sub-equations:
                    </P>
                    <BlockMath>{math`
                        \def\arraystretch{1.5}
                        \begin{array}{cc}
                            \text{\small Sub-equation 1} & \text{\small Sub-equation 2} \\
                            \boxed{x = 0} & x - 4 = 0 \\
                            & \boxed{x = 4}
                        \end{array}
                    `}</BlockMath>
                    <P>
                        The equation has two solutions: <M>0</M> and <M>4</M>.
                    </P>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problem title="Fractional Commotion" level="hard">
            <ProblemDescription>
                <P>Solve the equation:</P>
                <BlockMath>{math`\frac{3z + 9}{6} + \frac{8z - 2}{4} = \frac{5 + 4z}{3}`}</BlockMath>
            </ProblemDescription>
            <ProblemCheck answers={['4/7']} />
            <ProblemHint>
                The least common denominator of these fractions is <M>12</M>. Multiplying both parts by <M>12</M> will
                cancel all denominators.
            </ProblemHint>
            <ProblemSolution>
                <P>
                    Working with fractions is inconvenient. We need to think about what to multiply both sides of the
                    equation by to get rid of fractions at once. The least common denominator of these fractions is{' '}
                    <M>12</M>. Multiplying both sides of the equation by <M>12</M> using the{' '}
                    <Dep to={sameActionRule}>rule</Dep> of the same action, all fractions will be canceled. The main
                    thing is to remember about the <Dep to={alwaysGlobal}>globality</Dep> of this action -- we enclose
                    the left side in parentheses!
                </P>
                <BlockMath>{math`
                    \brand{\cdot 12} \ | \ \frac{3z + 9}{6} + \frac{8z - 2}{4} = \frac{5 + 4z}{3} \ | \ \brand{\cdot 12} \\
                    12\cdot\left(\frac{3z + 9}{6} + \frac{8z - 2}{4}\right) = 12\cdot\frac{5 + 4z}{3} \\
                    12\cdot\frac{3z + 9}{6} + 12\cdot\frac{8z - 2}{4} = 12\cdot\frac{5 + 4z}{3} \\
                    2(3z + 9) + 3(8z - 2) = 4(5 + 4z)
                `}</BlockMath>
                <P> Expanding brackets and combining like terms:</P>
                <BlockMath>{math`
                    6z + 18 + 24z - 6 = 20 + 16z \\
                    30z + 12 = 20 + 16z
                `}</BlockMath>
                <P>
                    Let's group <M>z</M> on the left side. To do this, we need to get rid of <M>16z</M> on the right
                    side. To do this, subtract <M>16z</M> from both sides of the equation:
                </P>
                <BlockMath>{math`
                    \brand{- 16z} \ | \ 30z + 12 = 20 + 16z \ | \ \brand{- 16z} \\
                    -16z + 30z + 12 = 20 + \cancel{16z} - \cancel{16z} \\
                    14z + 12 = 20
                `}</BlockMath>
                <P>
                    So that <M>z</M> remains alone, we need to get rid of multiplication by <M>14</M> and addition with{' '}
                    <M>12</M>. First, let's get rid of addition with <M>12</M>. To do this, subtract <M>12</M> from both
                    sides of the equation:
                </P>
                <BlockMath>{math`
                    \brand{- 12} \ | \ 14z + 12 = 20 \ | \ \brand{- 12} \\
                    -\cancel{12} + 14z + \cancel{12} = 20 - 12 \\
                    14z = 8
                `}</BlockMath>
                <P>
                    Finally, let's get rid of multiplication by <M>14</M>. To do this, divide both sides of the equation
                    by <M>14</M>:
                </P>
                <BlockMath>{math`
                    \brand{\div 14} \ | \ 14z = 8 \ | \ \brand{\div 14} \\
                    \frac{\cancel{14}z}{\cancel{14}} = \frac{8}{14} \\
                    \boxed{z = \frac{4}{7}}
                `}</BlockMath>
            </ProblemSolution>
        </Problem>

        <Problem $={uniques.sameActionRuleFalse} title="Preservation of Equality Falsity" level="hard">
            <ProblemDescription>
                <P>
                    The <Dep to={sameActionRule}>rule</Dep> of the same action is about true equalities. But does it
                    work for false equalities? Is it true that if the same action is performed on both sides of any
                    false equality, the result will necessarily be a false equality?
                </P>
            </ProblemDescription>
            <ProblemHint>
                It is enough to give an example of an action that will make a true equality out of a false one.
            </ProblemHint>
            <ProblemHint>
                Think if there are actions that can "destroy" the object on which they are performed.
            </ProblemHint>
            <ProblemSolution>
                <P>
                    At first glance, the rule of the same action also works for false equalities. Take, for example, the
                    false equality <M>1 + 8 = 13</M> and add <M>4</M> to both sides.
                </P>
                <BlockMath>{math`
                    \brand{+ \ 4} \ | \ 1 + 8 = 13 \ | \ \brand{+ 4} \\
                    4 + 1 + 8 = 4 + 13 \\
                    13 = 17
                `}</BlockMath>
                <P>
                    We started with a false equality, ended with a false equality. It seems as if this rule cannot be
                    broken by an elementary action.
                </P>
                <ProblemSection title="Multiplication by 0">
                    <P>
                        We need some action that can "destroy" information when applied. One such action is
                        multiplication by <M>0</M>.
                    </P>
                    <BlockMath>{math`
                    \brand{\cdot \ 0} \ | \ 1 + 8 = 13 \ | \ \brand{\cdot 0} \\
                    0 \cdot (1 + 8) = 0 \cdot 13 \\
                    0 = 0
                `}</BlockMath>
                    <P>We started with a false equality, and ended with a true equality.</P>
                </ProblemSection>
                <ProblemSection title="Taking the Modulus">
                    There is another interesting way to make a true equality out of a false one -- take the modulus of
                    both parts. Consider the false equality <M>2 = -2</M>. If we take the modulus of both parts, we get
                    the true equality <M>|2| = |-2|</M>, because the modulus "discards" the sign of the number, and{' '}
                    <M>2</M> and <M>-2</M> without a sign mean the same object.
                </ProblemSection>
                <ProblemSection title="Conclusion">
                    We gave examples when the rule of the same action does not work. It cannot be used for false
                    equalities. You cannot be sure that an action taken on both sides of a false equality will yield a
                    new false equality!
                </ProblemSection>
            </ProblemSolution>
        </Problem>

        <Problem $={uniques.linearRootClasses} title="Linear Root Classes" level="hard" pretty>
            <ProblemDescription>
                <P>
                    The three equations below have the form <M>Ax + B = 0</M> (they are called <I>linear</I>) and differ
                    from each other only by a single factor by which all coefficients were multiplied. They all have one
                    identical root{' '}
                    <M>
                        -\frac{3}
                        {2}
                    </M>
                    :
                </P>
                <BlockMath>{math`\underset{\text{Original}}{2x + 3 = 0} >>{big} \underset{\text{Multiplied by } 2}{4x + 6 = 0} >>{big} \underset{\text{Multiplied by } 3}{6x + 9 = 0}`}</BlockMath>
                <P>
                    Dividing both sides of the second equation by <M>2</M>, and the third by <M>3</M>, we will again get
                    the original first equation. Multiplying both sides of the second equation by{' '}
                    <M>
                        \frac{3}
                        {2}
                    </M>
                    , we will get the third equation. In short, all three equations can be reduced to each other by
                    multiplying by some number.
                </P>
                <P>
                    Are there two equations with <B>identical roots</B> that cannot be reduced to each other by
                    multiplying by some number? If they exist, give an example of such equations. If they do not exist,
                    strictly prove it.
                </P>
            </ProblemDescription>
            <ProblemHint>
                You need to get a contradiction to prove that such equations do not exist. Assume the opposite by
                presenting two equations irreducible to each other with identical roots.
            </ProblemHint>
            <ProblemAnswer>
                All linear equations with identical roots differ from each other only by a common factor.
            </ProblemAnswer>
            <ProblemSolution>
                <ProblemSection title="Elegant Way">
                    <P>
                        We will prove by contradiction. Assume that there <B>exist</B> two linear equations irreducible
                        to each other with the same root:
                    </P>
                    <BlockMath>{math`A_1x + B_1 = 0 >>{big} A_2x + B_2 = 0`}</BlockMath>
                    <P>
                        Let's factor out <M>A_1</M> in the first equation and <M>A_2</M> in the second:
                    </P>
                    <BlockMath>{math`A_1\left(x + \frac{B_1}{A_1}\right) = 0 >>{big} A_2\left(x + \frac{B_2}{A_2}\right) = 0`}</BlockMath>
                    <P>
                        Let's pull a little trick with a minus so that inside the parentheses there is a general formula
                        for solving a linear equation:
                    </P>
                    <BlockMath>{math`A_1\left( x - \left[-\frac{B_1}{A_1}\right] \right) = 0 >>{big} A_2\left( x - \left[ - \frac{B_2}{A_2} \right] \right) = 0`}</BlockMath>
                    <P>
                        We know that both equations have the same root <M>x'</M>:
                    </P>
                    <BlockMath>{math`A_1(x - x') = 0 >>{big} A_2(x - x') = 0`}</BlockMath>
                    <P>
                        We see that these records differ from each other only by coefficients <M>A_1</M> and <M>A_2</M>.
                        But the coefficient <M>A_2</M> can <B>always</B> be obtained from <M>A_1</M> by multiplying by
                        some number <M>k</M>.
                    </P>
                    <BlockMath>{math`A_2 = k \cdot A_1`}</BlockMath>
                    <P>
                        Therefore, it is enough to multiply both sides of the left equation by this very <M>k</M> using
                        the <Dep to={sameActionRule}>rule of the same action</Dep> and we will get the right equation:
                    </P>
                    <BlockMath>{math`
                    A_1(x - x') = 0
                    \\
                    \overbrace{\yellow{k} \cdot A_1}^{A_2}(x - x') = 0 \cdot \yellow{k}
                    \\
                    A_2(x - x') = 0
                `}</BlockMath>
                    <P>
                        But this essentially means that both equations initially declared as "irreducible" are actually{' '}
                        <B>reducible</B> to each other! We got a contradiction: the equations are simultaneously
                        irreducible and reducible to each other! Since we came to a contradiction, our initial
                        assumption about the existence of two linear equations irreducible to each other with identical
                        roots is incorrect. Consequently, there <B>do not exist</B> two linear equations irreducible to
                        each other with identical roots.
                    </P>
                    <P>All linear equations with identical roots differ from each other only by a common factor!</P>
                    <P>{QED}</P>
                </ProblemSection>
                <ProblemSection title="Direct Way">
                    <P>
                        We will prove by contradiction. Assume that there <B>exist</B> two linear equations irreducible
                        to each other with the same root:
                    </P>
                    <BlockMath>{math`A_1x + B_1 = 0 >>{big} A_2x + B_2 = 0`}</BlockMath>
                    <P>
                        Since these two equations are irreducible to each other, the coefficients <M>A_2</M> and{' '}
                        <M>B_2</M>
                        cannot be obtained from <M>A_1</M> and <M>B_1</M> by multiplying by the same number, otherwise
                        this common factor could simply be factored out. The multipliers must be different, for example{' '}
                        <M>n</M> to obtain <M>A_2</M> and <M>m</M> to obtain <M>B_2</M>:
                    </P>
                    <BlockMath>{math`A_1x + B_1 = 0 >>{big} \underbrace{nA_1}_{A_2}x + \underbrace{mB_1}_{B_2} = 0`}</BlockMath>
                    <P>
                        Using the <Dep to={sameActionRule}>rule of the same action</Dep> we find the solutions of both
                        equations:
                    </P>
                    <BlockMath>{math`x = -\frac{B_1}{A_1} >>{big} x = -\frac{mB_1}{nA_1}`}</BlockMath>
                    <P>
                        From our assumption we know that the root of both equations is the same, that is, these negative
                        fractions are the same number:
                    </P>
                    <BlockMath>{math`-\frac{B_1}{A_1} = -\frac{mB_1}{nA_1}`}</BlockMath>
                    <P>
                        Multiply both sides by <M>-1</M>:
                    </P>
                    <BlockMath>{math`\frac{B_1}{A_1} = \frac{mB_1}{nA_1}`}</BlockMath>
                    <P>
                        Multiply both sides by <M>A_1</M> to perform reduction in both parts:
                    </P>
                    <BlockMath>{math`\cancel{A_1}\cdot\frac{B_1}{\cancel{A_1}} = \frac{mB_1}{n\cancel{A_1}} \cdot \cancel{A_1}`}</BlockMath>
                    <BlockMath>{math`B_1 = \frac{m}{n}B_1`}</BlockMath>
                    <P>
                        This equality must be true. Since it is true, then <M>n = m</M> so that these numbers cancel
                        each other out and we get simply <M>B_1 = B_1</M>.
                    </P>
                    <P>
                        Stop! But <M>n</M> and <M>m</M> must be <B>different</B> numbers, because according to our
                        assumption our linear equations are irreducible to each other!
                    </P>
                    <P>
                        We got a contradiction: we need mutually opposite things to be fulfilled simultaneously, so that
                        both <M>n = m</M> and <M>n \neq m</M>! Since we came to a contradiction, our initial assumption
                        about the existence of two linear equations irreducible to each other with identical roots is
                        incorrect. Consequently, there <B>do not exist</B> two linear equations irreducible to each
                        other with identical roots.
                    </P>
                    <P>All linear equations with identical roots differ from each other only by a common factor!</P>
                    <P>{QED}</P>
                </ProblemSection>
            </ProblemSolution>
            <ProblemNote>
                <P>A beautiful and interesting mathematical fact follows from this problem.</P>
                <P>
                    Any pair of roots <M>x_1</M> and <M>x_2</M> forms a <B>whole class</B> of linear equations, all of
                    which differ from each other only by multiplying both sides by the same number. If you know any one
                    equation from this class, you can get any other equation from this class by multiplying it by any
                    number. And all these equations will have the same roots.
                </P>
                <P>
                    Moreover, there are <B>no</B> linear equations with the same roots but not belonging to this class.
                    This class contains absolutely all possible linear equations with given roots!
                </P>
                <P>
                    It turns out that the entire set of all linear equations is divided into classes, "bags". Each such
                    class, a "bag" with equations, has its own "tag" on which is written the root that all equations
                    from this bag have. All equations in the bag differ only by multiplying both parts by the same
                    number!
                </P>
                <Image src={rootClasses} width="600px" invert="dark">
                    <Caption>
                        All linear equations are stuffed into "bags" with identical roots
                        <CaptionSecondary>Equations in one bag differ only by a common factor</CaptionSecondary>
                    </Caption>
                </Image>
                <P>
                    This situation is similar to the fact that any fraction, for example{' '}
                    <M>
                        \frac{1}
                        {2}
                    </M>
                    , forms a <B>whole class of fractions denoting the same thing</B>, which differ from each other only
                    by multiplying the numerator and denominator by the same number:
                </P>
                <BlockMath>{math`\frac{1}{2} = \frac{2}{4} = \frac{3}{6} = \cdots`}</BlockMath>
            </ProblemNote>
        </Problem>

        <H1>Logic of Solving Equations</H1>

        <P>
            Up to this point, we have solved equations quite loosely. We found solutions and sort of implicitly implied
            that there were no other solutions. We treated equations with no solutions and with an infinite number of
            solutions just as loosely.
        </P>
        <P>
            It is absolutely normal and intuitively understandable to solve this way. But if you really want to dig a
            little deeper and logically strictly and clearly justify the solution of equations, then solve the following
            problems. Or at least read their solutions.
        </P>

        <Problem title="No Solutions" level="hard" pretty>
            <ProblemDescription>
                <P>
                    When, as a result of transformations, we arrive at a false equality without a variable at all, we
                    say that "the equation has no solutions". But if we arrived at a false equality, on what basis do we
                    consider that the original equation has no solutions? After all, its truth is not clear, and for
                    false equalities the rule of the same action{' '}
                    <Dep to={uniques.sameActionRuleFalse}>does not work</Dep>!
                </P>
                <P>
                    For example, the equation <M>x+3 = x-2</M> as a result of subtracting <M>x</M> from both sides of
                    the equation was reduced to the false equality <M>3 = -2</M>. Logically explain why the thesis "we
                    got the false equality <M>3 = -2</M>" implies that "the equation <M>x+3 = x-2</M> has no solutions".
                </P>
            </ProblemDescription>
            <ProblemHint>The logic is built on proof by contradiction.</ProblemHint>
            <ProblemSolution>
                <P>
                    In the section "Solving Equations" in the article, we said that initially we{' '}
                    <B>make an assumption that the equation has solutions, and therefore is a true equality</B>. And
                    only after this assumption do we have the right to transform the equation using the{' '}
                    <Dep to={sameActionRule}>rule</Dep> of the same action. It guarantees that we will definitely get a{' '}
                    <B>true</B> equality after each step of transformations.
                </P>
                <P>If as a result of transformations we arrived at a false equality, then this can mean two things:</P>
                <List type="ol">
                    <Li>We made a mistake in the chain of transformations.</Li>
                    <Li>
                        Our initial assumption that the equation has a solution was incorrect, and in fact it has no
                        solutions.
                    </Li>
                </List>
                <P>
                    Since we did not make mistakes in the chain of transformations, we can confidently assert that the
                    equation has no solutions. A beautiful example of applying "proof by contradiction".
                </P>
                <P>{QED}</P>
            </ProblemSolution>
        </Problem>

        <Problem title="Finite Number of Solutions" level="hard">
            <ProblemDescription>
                <P>
                    By definition, "to solve an equation is to find its roots and prove that there are no others". When
                    we, for example, by subtracting <M>5</M> from both sides of the equation <M>x + 5 = 10</M> arrive at
                    an equality like <M>x=5</M>, we say that we solved the equation and found its only solution <M>5</M>
                    . Is it considered that we <B>proved</B> by these transformations that the equation has only one
                    solution? What if there are some other roots?
                </P>
                <P>
                    Is solving an equation by means of transformations according to the rule of the same action a proof
                    that the equation has no other roots?
                </P>
            </ProblemDescription>
            <ProblemHint>Prove by contradiction.</ProblemHint>
            <ProblemSolution>
                <P>
                    Let's prove by contradiction. <B>Assume</B> that some equation has some root <M>x'</M>{' '}
                    <B>different</B> from all those already found, which we did not take into account and did not obtain
                    by applying the <Dep to={sameActionRule}>rule</Dep> of the same action. Replace <M>x</M> in the
                    equation with our <M>x'</M>. Since <M>x'</M> is a root of the equation, then when substituting it we
                    will get a true equality. And since it is true, we can repeat the same chain of transformations that
                    we carried out when solving the equation. And we will again come to the fact that <M>x'</M> will
                    become equal to one of the already found roots (for the example from the condition it is{' '}
                    <M>x' = 5</M>).
                </P>
                <P>
                    We came to a contradiction, because <M>x'</M> must be another root that we have not yet found. And
                    it turned out to be already found. This means that our initial assumption that the equation has some
                    other unfound roots is incorrect.
                </P>
                <P>
                    It turns out that when solving an equation using the <Dep to={sameActionRule}>rule</Dep> of the same
                    action, we simultaneously find the roots of the equation and prove that there are no other roots.
                </P>
                <P>{QED}</P>
            </ProblemSolution>
        </Problem>

        <Problem title="Infinitely Many Solutions" level="hard">
            <ProblemDescription>
                <P>
                    When, as a result of transformations, we arrive at a true equality generally without a variable, can
                    we say that it has "infinitely many solutions"? That "any number will be its root"?
                </P>
                <P>
                    For example, the equation <M>x+3 = x+3</M> as a result of subtracting <M>x</M> from both sides of
                    the equation was reduced to the true equality <M>3 = 3</M>. Can we say that from the thesis "we got
                    the true equality <M>3 = 3</M>" it follows that "the equation <M>x+3 = x+3</M> has infinitely many
                    solutions"?
                </P>
            </ProblemDescription>
            <ProblemHint>
                You cannot rely on the rule of the same action, because you can always simply multiply both parts by{' '}
                <M>0</M> and get a true equality.
            </ProblemHint>
            <ProblemSolution>
                <P>
                    No, you can't say that. When we showed that the rule of the same action{' '}
                    <Dep to={uniques.sameActionRuleFalse}>does not work</Dep> for false equalities, we gave
                    multiplication of both parts by <M>0</M> as an example. By the same logic, we can immediately reduce
                    any equation to a true equality by multiplying both parts by <M>0</M>.
                </P>
                <P>
                    For example, take the equation <M>x = 5</M>. If we multiply both sides by <M>0</M>, we get the true
                    equality <M>0 = 0</M>. But this does not mean that the equation <M>x = 5</M> has infinitely many
                    solutions. In fact, it has only one solution -- the number <M>5</M>.
                </P>
                <P>
                    Therefore, when we get a true equality without a variable, it does not mean that the equation has
                    infinitely many solutions. In each separate case, it is necessary to prove separately that the
                    equation has infinitely many solutions.
                </P>
                <P>
                    For example, in the equation <M>x + 3 = x + 3</M> we can substitute absolutely any number instead of{' '}
                    <M>x</M>. In the left and right parts, we simply add <M>3</M> to this number. According to the{' '}
                    <Dep to={sameActionRule}>rule</Dep> of the same action, after adding <M>3</M> we get a new true
                    equality. And this by definition means that <M>x</M> is a solution to the equation.
                </P>
                <P>{QED}</P>
            </ProblemSolution>
        </Problem>
    </>
));
