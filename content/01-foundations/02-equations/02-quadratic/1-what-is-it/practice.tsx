// #region Problem Scripts
//

import quadraticConstructor from './scripts/quadratic-constructor';

//
// #endregion

// #region Links
//

const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const alwaysGlobal = $CONTENT.foundations.equations.elementary.article.$alwaysGlobal;
const quadraticTrinomial = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticTrinomial;
const quadraticEquation = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticEquation;

//
// #endregion

const coeffChecks = (a?: any, b?: any, c?: any) => (
    <>
        <ProblemCheck label="A" answers={Array.isArray(a) ? a : [a]} />
        <ProblemCheck label="B" answers={Array.isArray(b) ? b : [b]} />
        <ProblemCheck label="C" answers={Array.isArray(c) ? c : [c]} />
    </>
);

export default defineProse()(() => (
    <>
        <Problems title="Playing with quadratic trinomials" level="easy">
            <P>
                Reduce the expression to the form of a <Dep to={quadraticTrinomial}>quadratic trinomial</Dep>, if
                possible. Determine the values of its coefficients <M>A</M>, <M>B</M> and <M>C</M>.
            </P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x^2 + 5x + 6`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(1, 5, 6)}
                <ProblemAnswer>
                    <P>The expression already has the form of a quadratic trinomial.</P>
                    <BlockMath>{math`A = 1 >> B = 5 >> C = 6`}</BlockMath>
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`2y^2 - y + 2`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(2, -1, 2)}
                <ProblemAnswer>
                    <P>The expression already has the form of a quadratic trinomial.</P>
                    <BlockMath>{math`A = 2 >> B = -1 >> C = 2`}</BlockMath>
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`j^2 + 36`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(1, 0, 36)}
                <ProblemAnswer>
                    <P>Quadratic trinomial:</P>
                    <BlockMath>{math`j^2 + 0 \cdot j + 36`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = 1 >> B = 0 >> C = 36`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        The expression almost has the form of a quadratic trinomial, but it is missing the term with
                        coefficient <M>B</M>, which is equal to <M>0</M>:
                    </P>
                    <BlockMath>{math`j^2 + 0 \cdot j + 36`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = 1 >> B = 0 >> C = 36`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`99z - 5`}</BlockMath>
                </ProblemDescription>
                <ProblemAnswer>The expression cannot be reduced to the form of a quadratic trinomial.</ProblemAnswer>
                <ProblemSolution>
                    <P>
                        To bring it to such a form, we would need to set coefficient <M>A</M> to <M>0</M>, which
                        contradicts the <Dep to={quadraticTrinomial}>definition</Dep> of a quadratic trinomial:
                    </P>
                    <BlockMath>{math`\underbrace{0\cdot z^2}_{\text{Impossible!}} + 99z - 5`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`i^2`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(1, 0, 0)}
                <ProblemAnswer>
                    <P>Quadratic trinomial:</P>
                    <BlockMath>{math`i^2 + 0 \cdot i + 0`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = 1 >> B = 0 >> C = 0`}</BlockMath>
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`-\left(3t^2 + 999 - t\right)`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(-3, 1, -999)}
                <ProblemAnswer>
                    <P>Quadratic trinomial:</P>
                    <BlockMath>{math`-3t^2 + t - 999`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = -3 >> B = 1 >> C = -999`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>Expand the brackets:</P>
                    <BlockMath>{math`-3t^2 - 999 + t`}</BlockMath>
                    <P>Rearrange the terms:</P>
                    <BlockMath>{math`-3t^2 + t - 999`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = -3 >> B = 1 >> C = -999`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`x\left(\frac{1}{2}x + 3x - 11\right)`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(['7/2', '1/2+3', '3+1/2'], -11, 0)}
                <ProblemAnswer>
                    <P>Quadratic trinomial:</P>
                    <BlockMath>{math`\left(\frac{1}{2} + 3\right)x^2 - 11x + 0`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = \frac{1}{2} + 3 >> B = -11 >> C = 0`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>Expand the brackets:</P>
                    <BlockMath>{math`\frac{1}{2}x^2 + 3x^2 - 11x`}</BlockMath>
                    <P>Combine like terms:</P>
                    <BlockMath>{math`\left(\frac{1}{2} + 3\right)x^2 - 11x`}</BlockMath>
                    <P>
                        Add the missing term with coefficient <M>C = 0</M>:
                    </P>
                    <BlockMath>{math`\left(\frac{1}{2} + 3\right)x^2 - 11x + 0`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = \frac{1}{2} + 3 >> B = -11 >> C = 0`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`(3y - 1)^2 - 9y^2`}</BlockMath>
                </ProblemDescription>
                {coeffChecks()}
                <ProblemAnswer>The expression cannot be reduced to the form of a quadratic trinomial.</ProblemAnswer>
                <ProblemSolution>
                    <P>Expand the brackets (or use the square of difference formula):</P>
                    <BlockMath>{math`\cancel{9y^2} - 6y + 1 - \cancel{9y^2} \\ -6y + 1`}</BlockMath>
                    <P>
                        The expression cannot be reduced to the form of a quadratic trinomial. To bring it to such a
                        form,
                    </P>
                    <P>
                        we would need to set coefficient <M>A</M> to <M>0</M>, which contradicts the{' '}
                        <Dep to={quadraticTrinomial}>definition</Dep> of a quadratic trinomial:
                    </P>
                    <BlockMath>{math`\underbrace{0\cdot y^2}_{\text{Impossible!}} - 6y + 1`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`(4t - 5)t - t\left(\frac{1}{3}t + 2\right) + 1`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(['11/3'], -7, 1)}
                <ProblemAnswer>
                    <P>Quadratic trinomial:</P>
                    <BlockMath>{math`\frac{11}{3}t^2 - 7t + 1`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = \frac{11}{3} >> B = -7 >> C = 1`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>Expand the brackets:</P>
                    <BlockMath>{math`4t^2 - 5t - \frac{1}{3}t^2 - 2t + 1`}</BlockMath>
                    <P>Combine like terms:</P>
                    <BlockMath>{math`
                        \left(4 - \frac{1}{3}\right)t^2 - 5t - 2t + 1 \\
                        \left(\frac{12}{3} - \frac{1}{3}\right)t^2 - 7t + 1 \\
                        \frac{11}{3}t^2 - 7t + 1
                    `}</BlockMath>
                    <P>Determine the coefficients:</P>
                    <BlockMath>{math`A = \frac{11}{3} >> B = -7 >> C = 1`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{5k^2 + 2 - 9k}{3}`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(['5/3'], -3, ['2/3'])}
                <ProblemAnswer>
                    <P>Quadratic trinomial:</P>
                    <BlockMath>{math`\frac{5}{3}k^2 - 3k + \frac{2}{3}`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = \frac{5}{3} >> B = -3 >> C = \frac{2}{3}`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>Split the large fraction into three smaller ones:</P>
                    <BlockMath>{math`\frac{5k^2}{3} + \frac{2}{3} - \frac{9k}{3}`}</BlockMath>
                    <P>Rearrange the terms and simplify:</P>
                    <BlockMath>{math`\frac{5k^2}{3} - \frac{9k}{3} + \frac{2}{3} \\ \frac{5}{3}k^2 - 3k + \frac{2}{3}`}</BlockMath>
                    <P>Determine the coefficients:</P>
                    <BlockMath>{math`A = \frac{5}{3} >> B = -3 >> C = \frac{2}{3}`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`(t-3)(5+t)`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(1, 2, -15)}
                <ProblemAnswer>
                    <P>Quadratic trinomial:</P>
                    <BlockMath>{math`t^2 + 2t - 15`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = 1 >> B = 2 >> C = -15`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>Expand the brackets and combine like terms:</P>
                    <BlockMath>{math`
                        5t + t^2 - 15 - 3t \\
                        t^2 + (5 - 3)t - 15 \\
                        t^2 + 2t - 15
                    `}</BlockMath>
                    <P>Determine the coefficients:</P>
                    <BlockMath>{math`A = 1 >> B = 2 >> C = -15`}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problems title="Quadratic or not?" level="easy">
            <P>
                Determine if the given equation is <Dep to={quadraticEquation}>quadratic</Dep>. If so, bring it to the{' '}
                <B>general form</B> of a quadratic equation. Determine the values of its coefficients <M>A</M>, <M>B</M>{' '}
                and <M>C</M>.
            </P>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`11x^2 + 2x - 3 = 0`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(11, 2, -3)}
                <ProblemAnswer>
                    <P>The equation already has the general form. Coefficients:</P>
                    <BlockMath>{math`A = 11 >> B = 2 >> C = -3`}</BlockMath>
                </ProblemAnswer>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`y = y^2 + 10`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(1, -1, 10)}
                <ProblemAnswer>
                    <P>General form of the quadratic equation:</P>
                    <BlockMath>{math`y^2 - y + 10 = 0`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = 1 >> B = -1 >> C = 10`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Using the <Dep to={sameActionRule}>same action rule</Dep>, subtract <M>y</M> from both sides:
                    </P>
                    <BlockMath>{math`0 = y^2 - y + 10`}</BlockMath>
                    <P>Determine the coefficients:</P>
                    <BlockMath>{math`A = 1 >> B = -1 >> C = 10`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`3z^2 + 1 = \frac{6}{2}z^2 - 999z`}</BlockMath>
                </ProblemDescription>
                {coeffChecks()}
                <ProblemAnswer>The equation is not quadratic.</ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Using the <Dep to={sameActionRule}>same action rule</Dep>, subtract{' '}
                        <M>{math`\frac{6}{2}z^2`}</M> from both sides:
                    </P>
                    <BlockMath>{math`3z^2 - \frac{6}{2}z^2 + 1 = -999z`}</BlockMath>
                    <P>Combine like terms:</P>
                    <BlockMath>{math`
                        \left(3 - \frac{6}{2}\right)z^2 + 1 = -999z \\
                        \left(3 - 3\right)z^2 + 1 = -999z \\
                        0 + 1 = -999z \\
                        1 = -999z
                    `}</BlockMath>
                    <P>
                        This equation is not quadratic because it lacks a term with <M>z^2</M>. And we cannot add it
                        with a zero coefficient because it contradicts the <Dep to={quadraticTrinomial}>definition</Dep>{' '}
                        of a quadratic trinomial:
                    </P>
                    <BlockMath>{math`\underbrace{0\cdot z^2}_{\text{Impossible!}} + 1 = -999z`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{1}{t} = t`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(1, 0, -1)}
                <ProblemAnswer>
                    <P>General form of the quadratic equation:</P>
                    <BlockMath>{math`t^2 + 0 \cdot t - 1 = 0`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = 1 >> B = 0 >> C = -1`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        Using the <Dep to={sameActionRule}>same action rule</Dep>, "pull" <M>t</M> out of the
                        denominator by multiplying both sides by <M>t</M>:
                    </P>
                    <BlockMath>{math`1 = t^2`}</BlockMath>
                    <P>
                        Subtract <M>1</M> from both sides:
                    </P>
                    <BlockMath>{math`0 = t^2 - 1`}</BlockMath>
                    <P>Bring to the general form of a quadratic equation:</P>
                    <BlockMath>{math`0 = t^2 + 0 \cdot t - 1`}</BlockMath>
                    <P>Determine the coefficients:</P>
                    <BlockMath>{math`A = 1 >> B = 0 >> C = -1`}</BlockMath>
                </ProblemSolution>
            </SubProblem>

            <SubProblem>
                <ProblemDescription>
                    <BlockMath>{math`\frac{11}{x^2} + x + 2 = \frac{x^3 - 10}{x^2}`}</BlockMath>
                </ProblemDescription>
                {coeffChecks(2, 0, 21)}
                <ProblemAnswer>
                    <P>General form of the quadratic equation:</P>
                    <BlockMath>{math`2x^2 + 0 \cdot x + 21 = 0`}</BlockMath>
                    <P>Coefficients:</P>
                    <BlockMath>{math`A = 2 >> B = 0 >> C = 21`}</BlockMath>
                </ProblemAnswer>
                <ProblemSolution>
                    <P>
                        We see a fraction with <M>x^2</M> in the denominator on both sides. We can get rid of the
                        fractions in one step by multiplying both sides by <M>x^2</M>, using the{' '}
                        <Dep to={sameActionRule}>same action rule</Dep>, not forgetting the{' '}
                        <Dep to={alwaysGlobal}>global nature</Dep> of this action:
                    </P>
                    <BlockMath>{math`x^2\left(\frac{11}{x^2} + x + 2\right) = x^2\left(\frac{x^3 - 10}{x^2}\right)`}</BlockMath>
                    <P>Expand the brackets and cancel out:</P>
                    <BlockMath>{math`11 + x^3 + 2x^2 = x^3 - 10`}</BlockMath>
                    <P>
                        Subtract <M>x^3</M> from both sides:
                    </P>
                    <BlockMath>{math`11 + 2x^2 = -10`}</BlockMath>
                    <P>
                        Add <M>10</M> to both sides:
                    </P>
                    <BlockMath>{math`21 + 2x^2 = 0`}</BlockMath>
                    <P>Bring to the general form of a quadratic equation:</P>
                    <BlockMath>{math`2x^2 + 0 \cdot x + 21 = 0`}</BlockMath>
                    <P>Determine the coefficients:</P>
                    <BlockMath>{math`A = 2 >> B = 0 >> C = 21`}</BlockMath>
                </ProblemSolution>
            </SubProblem>
        </Problems>

        <Problem title="Quadratic Constructor" level="easy" script={quadraticConstructor()} />
    </>
));
