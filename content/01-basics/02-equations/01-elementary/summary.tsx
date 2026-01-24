import article from './article';

export default defineProse()(() => (
    <>
        <H1>Равенство</H1>

        <Include toc>{article.uniques.equality}</Include>

        <Include toc>{article.uniques.equalityFalseTrue}</Include>

        <H1>Уравнение</H1>

        <Include toc>{article.uniques.equation}</Include>

        <Include toc>{article.uniques.equationSolution}</Include>

        <Include toc>{article.uniques.equationGuessing}</Include>

        <H1>Правило одинакового действия</H1>

        <Include toc>{article.uniques.sameActionRule}</Include>

        <Include toc>{article.uniques.sameActionRuleExamples}</Include>

        <H1>Решение уравнений</H1>

        <P>
            Решение почти всех уравнений сводится к последовательному <B>упрощению</B> исходного уравнения, раз за разом
            применяя <Dep to={article.uniques.sameActionRule}>правило</Dep> одинакового действия. Упрощения производятся
            до тех пор, пока не станет понятно, каким числом является неизвестная. Обычно упрощениями удается свести
            уравнение к тривильному виду <M>{math`x = \ldots`}</M>
        </P>

        <List type="ul">
            <Li>
                <P>
                    <B>Сложение</B> нейтрализуют <B>вычитанием</B> и наоборот, чтобы получился <M>0</M>:
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
                    <B>Умножение</B> нейтрализуют <B>делением</B> и наоборот, чтобы получилась <M>1</M>:
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
            Умножайте и делите обе части аккуратно! Помните, что эти действия применяются ко всей левой и ко всей правой
            частям, а не только там, где вам удобно! Помните о том, что:
        </P>

        <Include toc>{article.uniques.alwaysGlobal}</Include>

        <Include toc>{article.uniques.chainExamples}</Include>

        <Include toc>{article.uniques.chainAlternate}</Include>

        <H1>Зачем решать уравнения?</H1>

        <Include>{article.uniques.whySolveEquations}</Include>

        <Include toc>{article.uniques.realLifeApplications}</Include>

        <H1>Типовые ошибки</H1>

        <Include toc>{article.uniques.commonMistakes}</Include>
    </>
));
