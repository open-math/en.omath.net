import article from './article';

// #region Links
//

const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;

//
// #endregion

export default defineProse()(() => (
    <>
        <Diagram>{math`
            flowchart LR
                mathExpressions["
                    **Expressions**
                    $$ x^2 \\ 18\sqrt{z} \\ (y - 1)y \\ m/n \\[2px] 8 - t^2 + 2t \\ k+3k^2 $$
                "]
                -->|Reducible to<br>$Ax^2 + Bx + C$<br>without changing roots| quadraticTrinomial["
                    **Quadratic Trinomials**
                    $$ x^2 + 0x + 0 \\ y^2 - y + 0 \\[1px] -t^2 + 2t + 8 \\ 3k^2 + k + 0 $$
                "]
                -->|Is an equlity| quadraticEquation["
                    **Quadratic Equations**
                    $$ x^2 = 0 \\ (y-1)y = 0 \\[2px] 8 + 2t = t^2 \\ 3k^2 = -k $$
                "]
        `}</Diagram>
        <Hr />
        <P>
            The <Dep to={sameActionRule}>Same Action Rule</Dep> is, of course, a very powerful tool that allows one to
            easily handle simple equations by reducing them to the trivial form <M>x = A</M> or <M>A = x</M>. However,
            there are often equations that cannot be simplified to such form:
        </P>
        <Include toc>{article.uniques.problematicEquations}</Include>
        <P>
            Before attempting to solve such equations, mathematicians decided to first learn how to define them and
            identify common features. To do this, they first introduced the concept of a quadratic trinomial:
        </P>
        <Include toc>{article.uniques.quadraticTrinomial}</Include>
        <P>
            If an equation can be reduced without changing roots to a form where on one side there is a quadratic
            trinomial, and on the other — zero, then such an equation is called "quadratic".
        </P>
        <Include toc>{article.uniques.quadraticEquation}</Include>
        <Include toc>{article.uniques.powerNotOrder}</Include>
        <Include toc>{article.uniques.quadraticOrNot}</Include>
    </>
));
