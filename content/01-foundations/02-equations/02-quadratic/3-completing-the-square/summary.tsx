import article from './article';

import completingTheSquare from './assets/completing-the-square.excalidraw.svg';

export default defineProse()(() => (
  <>
    <Image
      src={completingTheSquare}
      invert="dark"
      snippet={{
        key: true,
        seo: 'Completing the square visualization',
        title: 'Process visualization',
        description: `
          How a large square is literally assembled or "completed" from smaller shapes.
        `,
      }}
      toc={true}
    >
      <Caption>
        Visualizing the process of completing the square
        <CaptionSecondary>
          Special case: <M>{math`x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2`}</M>
        </CaptionSecondary>
      </Caption>
    </Image>
    <Hr />
    <Include toc>{article.uniques.whatIsIt}</Include>
    <P>Why complete the square?</P>
    <List ordered toc="Why do it?">
      <Li>It allows solving any quadratic equation.</Li>
      <Li>
        <P>
          To simplify expressions. Before completing the square, the unknown appears twice in the expression -- to the
          second and first power.
        </P>
        <BlockMath>{math`9\underset{\text{One}}{\red{x^2}} + 6\underset{\text{Two}}{\red{x}} + 1`}</BlockMath>
        <P>
          After completing the square, the unknown appears only once. This can be useful not only for solving equations
          but also for other tasks.
        </P>
        <BlockMath>{math`(3\underset{\text{One}}{\brand{x}} + 1)^2`}</BlockMath>
      </Li>
    </List>
    <P>
      Sometimes you can complete the square in one go. This works when the expression matches the{' '}
      <M>a^2 \pm 2ab + b^2</M> pattern from special products:
    </P>
    <Include toc>{article.uniques.completeSimple}</Include>
    <P>
      But often the expression is incomplete. Then you have to add the missing parts yourself, but don't forget to{' '}
      <Ref to={article.uniques._compensate}>compensate</Ref>:
    </P>
    <Include toc>{article.uniques.completeHard}</Include>
    <P>Completing the square allows solving any quadratic equation:</P>
    <Include toc>{article.uniques.solvingQuadratics}</Include>
  </>
));
