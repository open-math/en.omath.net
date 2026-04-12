import article from './article';

export default defineProse()(() => (
  <>
    <Include toc="Ways to solve incomplete equations mentally">{article.uniques.methodsIncomplete}</Include>
    <Hr />
    <Include toc="Ways to solve quadratic equations mentally">{article.uniques.methodsAll}</Include>
    <Include toc>{article.uniques.methodsAllPractice}</Include>
  </>
));
