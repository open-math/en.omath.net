import article from './article';

export default defineProse({
  uniques: {
    specialProductsTable: Table,
    squareSumDiffDetails: Details,
  },
})(({ uniques }) => (
  <>
    <Table
      $={uniques.specialProductsTable}
      snippet={{
        key: 'Special Products table',
        search: ['Special Products table', 'Special Products'],
        title: 'Table of Special Products',
        description: `
          A single table with all the Special Products formulas.
        `,
      }}
      toc="Special Products table"
    >
      <Tr>
        <Td center hspan={3}>
          <B>Special Products</B>
        </Td>
      </Tr>
      <Tr>
        <Td center hspan={3}>
          <I>Squares -- memorize these</I>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <B>Square of a sum and a difference</B>
        </Td>
        <Td center freeze>
          <M currentColor>(a \pm b)^2 = a^2 \pm 2ab + b^2</M>
        </Td>
        <Td>
          <Ref to={uniques.squareSumDiffDetails}>Examples</Ref>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <B>Difference of squares</B>
        </Td>
        <Td center freeze>
          <M currentColor>a^2 - b^2 = (a+b)(a-b)</M>
        </Td>
        <Td>
          <Ref to={article.uniques.diffOfSquaresExamples}>Examples</Ref>
        </Td>
      </Tr>
      <Tr>
        <Td center hspan={3}>
          <I>Cubes -- do not memorize, but learn to recognize</I>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <B>Cube of a sum and a difference</B>
        </Td>
        <Td center freeze>
          <M currentColor>(a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3</M>
        </Td>
        <Td>
          <Ref to={article.uniques.cubeSumDiffExamples}>Examples</Ref>
        </Td>
      </Tr>
    </Table>

    <Details $={uniques.squareSumDiffDetails} title="Examples of the square of a sum and the square of a difference">
      <Include>{article.uniques.squareSumExpandExamples}</Include>
      <Include>{article.uniques.squareSumFactorExamples}</Include>
      <Include>{article.uniques.squareDiffExamples}</Include>
    </Details>

    <Hr />

    <Include toc="What are Special Products?">{article.uniques.whatAreSpecialProducts}</Include>

    <Hr />

    <Include toc>{article.uniques.memorizationTips}</Include>
  </>
));
