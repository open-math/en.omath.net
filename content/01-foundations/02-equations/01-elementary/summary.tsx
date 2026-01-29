import article from './article';

export default defineProse()(() => (
    <>
        <H1>Equality</H1>

        <Include toc>{article.uniques.equality}</Include>

        <Include toc>{article.uniques.equalityFalseTrue}</Include>

        <H1>Equation</H1>

        <Include toc>{article.uniques.equation}</Include>

        <Include toc>{article.uniques.equationSolution}</Include>

        <Include toc>{article.uniques.equationGuessing}</Include>

        <H1>Same action rule</H1>

        <Include toc>{article.uniques.sameActionRule}</Include>

        <Include toc>{article.uniques.sameActionRuleExamples}</Include>

        <H1>Solving equations</H1>

        <P>
            Solving almost all equations comes down to sequentially <B>simplifying</B> the original equation by applying
            the same action
            <Dep to={article.uniques.sameActionRule}>rule</Dep> repeatedly. Simplification continues until it becomes
            clear what number the unknown represents. Usually, simplifications reduce the equation to the trivial form{' '}
            <M>{math`x = \ldots`}</M>
        </P>

        <List type="ul">
            <Li>
                <P>
                    <B>Addition</B> is neutralized by <B>subtraction</B> and vice versa, to get <M>0</M>:
                </P>
                <BlockMath>{math`
                    \brand{- \ 5} \ | \ x + \red{5} = 12 \ | \ \brand{- \ 5} \\
                    -\cancel{5} + x + \cancel{5} = 12 - 5 \\
                    x = 7
                    >>{big}
                    \brand{+ \ 3} \ | \ x - \red{3} = 4 \ | \ \brand{+ \ 3} \\
                    +\cancel{3} + x - \cancel{3} = 4 + 3 \\
                    x = 7
                `}</BlockMath>
            </Li>
            <Li>
                <P>
                    <B>Multiplication</B> is neutralized by <B>division</B> and vice versa, to get <M>1</M>:
                </P>
                <BlockMath>{math`
                    \brand{\div \ 4} \ | \ \red{4}x = 20 \ | \ \brand{\div \ 4} \\
                    \frac{\cancel{4}x}{\cancel{4}} = \frac{20}{4} \\
                    x = 5
                    >>{big}
                    \brand{\cdot \ 6} \ | \ \frac{x}{\red{6}} = 3 \ | \ \brand{\cdot \ 6} \\
                    \cancel{6} \cdot \frac{x}{\cancel{6}}  = 3 \cdot 6 \\
                    x = 18
                `}</BlockMath>
            </Li>
        </List>

        <P>
            Multiply and divide both sides carefully! Remember that these actions apply to the entire left and right
            sides, not just where it is convenient! Remember that:
        </P>

        <Include toc>{article.uniques.alwaysGlobal}</Include>

        <Include toc>{article.uniques.chainExamples}</Include>

        <Include toc>{article.uniques.chainAlternate}</Include>

        <H1>Why solve equations?</H1>

        <Include>{article.uniques.whySolveEquations}</Include>

        <Include toc>{article.uniques.realLifeApplications}</Include>

        <H1>Common mistakes</H1>

        <Include toc>{article.uniques.commonMistakes}</Include>
    </>
));
