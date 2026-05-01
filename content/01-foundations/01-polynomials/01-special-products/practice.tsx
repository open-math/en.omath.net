import article from './article';

import simpleDifference from './scripts/simple-difference';
import simpleDiffOfSquares from './scripts/simple-diff-of-squares';
import simpleProduct from './scripts/simple-product';

// #region Links
//
//

const squareSum = article.uniques.squareSum;
const squareDiff = article.uniques.squareDiff;
const diffOfSquares = article.uniques.diffOfSquares;
const cubeSum = article.uniques.cubeSum;
const squareSumFactorExamples = article.uniques.squareSumFactorExamples;
const squareDiffExamples = article.uniques.squareDiffExamples;
const diffOfSquaresExamples = article.uniques.diffOfSquaresExamples;
const cubeSumDiffExamples = article.uniques.cubeSumDiffExamples;

//
//
// #endregion

const expand = <P>Expand:</P>;
const factorSumDiff = <P>Write as the square of a sum or a difference:</P>;
const factorDiffSquares = <P>Write as the product of two binomials:</P>;
const factorCube = <P>Write as the cube of a sum or a difference:</P>;

const expandSub = (input: string, answer: string, check: string, hint?: JSX.Element) => (
  <SubProblem>
    <ProblemDescription>
      {expand}
      <BlockMath>{input}</BlockMath>
    </ProblemDescription>
    <MathExpressionCheck answer={check} />
    {hint}
    <ProblemAnswer>
      <BlockMath>{answer}</BlockMath>
    </ProblemAnswer>
  </SubProblem>
);

const factorSumDiffSub = (input: string, answer: string, check: string, hint?: JSX.Element) => (
  <SubProblem>
    <ProblemDescription>
      {factorSumDiff}
      <BlockMath>{input}</BlockMath>
    </ProblemDescription>
    <MathExpressionCheck answer={check} />
    {hint}
    <ProblemAnswer>
      <BlockMath>{answer}</BlockMath>
    </ProblemAnswer>
  </SubProblem>
);

const factorDiffSquaresSub = (input: string, answer: string, check: string, hint?: JSX.Element) => (
  <SubProblem>
    <ProblemDescription>
      {factorDiffSquares}
      <BlockMath>{input}</BlockMath>
    </ProblemDescription>
    <MathExpressionCheck answer={check} />
    {hint}
    <ProblemAnswer>
      <BlockMath>{answer}</BlockMath>
    </ProblemAnswer>
  </SubProblem>
);

const factorCubeSub = (input: string, answer: string, check: string, hint?: JSX.Element) => (
  <SubProblem>
    <ProblemDescription>
      {factorCube}
      <BlockMath>{input}</BlockMath>
    </ProblemDescription>
    <MathExpressionCheck answer={check} />
    {hint}
    <ProblemAnswer>
      <BlockMath>{answer}</BlockMath>
    </ProblemAnswer>
  </SubProblem>
);

export default defineProse({
  uniques: {
    cubeSumDiffFactorization: Problem,
    simpleProduct: Problem,
  },
})(({ uniques }) => (
  <>
    <Problems
      title="Practice: Square of a Sum and Square of a Difference"
      level="easy"
      snippet={{
        seo: true,
        title: 'Problems on the square of a sum and the square of a difference',
        description: `
          A large set of problems for practicing the Special Products formulas for the square of a sum and the square of a difference.
          Two types of problems: expand and rewrite as the square of a sum or a difference.
        `,
      }}
    >
      {factorSumDiffSub(
        'x^2 + 2xy + y^2',
        '(x + y)^2',
        '(x + y)^2',
        <ProblemHint>
          Study the examples of <Dep on={squareSumFactorExamples}>rewriting as the square of a sum</Dep> and the{' '}
          <Dep on={squareDiffExamples}>square of a difference</Dep>.
        </ProblemHint>,
      )}
      {expandSub('(x - 2)^2', 'x^2 - 4x + 4', 'x^2 - 4x + 4')}
      {factorSumDiffSub('a^2 + 2a + 1', '(a + 1)^2', '(a + 1)^2')}
      {expandSub('(a + 11)^2', 'a^2 + 22a + 121', 'a^2 + 22a + 121')}
      {factorSumDiffSub('n^2 + m^2 + 2mn', '(n + m)^2', '(n + m)^2')}
      {expandSub(math`\left(\frac{1}{5} - m\right)^2`, math`\frac{1}{25} - \frac{2m}{5} + m^2`, '1/25 - 2m/5 + m^2')}
      {factorSumDiffSub('x^2 - 2xy + y^2', '(x - y)^2', '(x - y)^2')}
      {expandSub(math`\left(x + \frac{2}{3}\right)^2`, math`x^2 + \frac{4}{3}x + \frac{4}{9}`, 'x^2 + 4x/3 + 4/9')}
      {factorSumDiffSub('81 - 18a + a^2', '(9 - a)^2', '(9 - a)^2')}
      {expandSub('(2x - 3)^2', '4x^2 - 12x + 9', '4x^2 - 12x + 9')}
      {factorSumDiffSub('a^2 - 12a + 36', '(a - 6)^2', '(a - 6)^2')}
      {expandSub('(3a + 5)^2', '9a^2 + 30a + 25', '9a^2 + 30a + 25')}
      {factorSumDiffSub('4b^2 - 4b + 1', '(2b - 1)^2', '(2b - 1)^2')}
      {expandSub('(-8 - 5b)^2', '64 + 80b + 25b^2', '64 + 80b + 25b^2')}
      {factorSumDiffSub('1 + 10x + 25x^2', '(1 + 5x)^2', '(1 + 5x)^2')}
      {expandSub('(3x - 10y)^2', '9x^2 - 60xy + 100y^2', '9x^2 - 60xy + 100y^2')}
      {factorSumDiffSub('100a^2 + 20a + 1', '(10a + 1)^2', '(10a + 1)^2')}
      {expandSub('(11b - 2d)^2', '121b^2 - 44bd + 4d^2', '121b^2 - 44bd + 4d^2')}
      {factorSumDiffSub('1 - 18y + 81y^2', '(1 - 9y)^2', '(1 - 9y)^2')}
      {expandSub('(6m + 5n)^2', '36m^2 + 60mn + 25n^2', '36m^2 + 60mn + 25n^2')}
      {factorSumDiffSub('9 - 12x + 4x^2', '(3 - 2x)^2', '(3 - 2x)^2')}
      {expandSub(
        math`\left(b + \frac{5}{12}c\right)^2`,
        math`b^2 + \frac{5}{6}bc + \frac{25}{144}c^2`,
        'b^2 + 5bc/6 + 25c^2/144',
      )}
      {factorSumDiffSub('9x^2 + 30x + 25', '(3x + 5)^2', '(3x + 5)^2')}
      {expandSub('(4x - 9y)^2', '16x^2 - 72xy + 81y^2', '16x^2 - 72xy + 81y^2')}
      {factorSumDiffSub('9a^2 - 30am + 25m^2', '(3a - 5m)^2', '(3a - 5m)^2')}
      {expandSub('(5y + 2z)^2', '25y^2 + 20yz + 4z^2', '25y^2 + 20yz + 4z^2')}
      {factorSumDiffSub('16m^2 + 24mn + 9n^2', '(4m + 3n)^2', '(4m + 3n)^2')}
      {expandSub(math`\left(-7y + \frac{1}{7}x\right)^2`, math`49y^2 - 2xy + \frac{x^2}{49}`, '49y^2 - 2xy + x^2/49')}
      {factorSumDiffSub('49 + 36x^2 + 84x', '(7 + 6x)^2', '(7 + 6x)^2')}
      {factorSumDiffSub('4 + 49x^2 - 28x', '(2 - 7x)^2', '(2 - 7x)^2')}
      {factorSumDiffSub('4x^2 + 36xy + 81y^2', '(2x + 9y)^2', '(2x + 9y)^2')}
    </Problems>

    <Problems
      title="Practice: Difference of Squares"
      level="easy"
      snippet={{
        seo: true,
        title: 'Problems on the difference of squares',
        description: `
          A large set of problems for practicing the difference of squares formula.
          Two types of problems: expand and rewrite as a difference of squares.
        `,
      }}
    >
      {factorDiffSquaresSub(
        '1 - a^2',
        '(1 + a)(1 - a)',
        '(1 + a)(1 - a)',
        <ProblemHint>
          Study the examples of using the <Dep on={diffOfSquaresExamples}>difference of squares</Dep> formula.
        </ProblemHint>,
      )}
      {expandSub('(8 - a)(8 + a)', '64 - a^2', '64 - a^2')}
      {factorDiffSquaresSub('16 - x^2', '(4 + x)(4 - x)', '(4 + x)(4 - x)')}
      {expandSub('(b - 5)(b + 5)', 'b^2 - 25', 'b^2 - 25')}
      {factorDiffSquaresSub('-y^2 + 81', '(9 + y)(9 - y)', '(9 + y)(9 - y)')}
      {expandSub('(7 + b)(7 - b)', '49 - b^2', '49 - b^2')}
      {factorDiffSquaresSub(
        math`\frac{1}{9} - b^2`,
        math`\left(\frac{1}{3} + b\right)\left(\frac{1}{3} - b\right)`,
        '(1/3 + b)(1/3 - b)',
      )}
      {expandSub('(y + 2)(2 - y)', '4 - y^2', '4 - y^2')}
      {factorDiffSquaresSub(
        math`y^2 - \frac{25}{36}`,
        math`\left(y + \frac{5}{6}\right)\left(y - \frac{5}{6}\right)`,
        '(y + 5/6)(y - 5/6)',
      )}
      {expandSub('(a - 4)(4 + a)', 'a^2 - 16', 'a^2 - 16')}
      {factorDiffSquaresSub('0.81 - x^2', '(0.9 + x)(0.9 - x)', '(0.9 + x)(0.9 - x)')}
      {expandSub('(1 + c)(-1 + c)', 'c^2 - 1', 'c^2 - 1')}
      {factorDiffSquaresSub('16a^2 - 1', '(4a + 1)(4a - 1)', '(4a + 1)(4a - 1)')}
      {expandSub('(6 - a)(-a - 6)', 'a^2 - 36', 'a^2 - 36')}
      {factorDiffSquaresSub('100 - 9y^2', '(10 + 3y)(10 - 3y)', '(10 + 3y)(10 - 3y)')}
      {expandSub('(-b + 1)(b + 1)', '1 - b^2', '1 - b^2')}
      {factorDiffSquaresSub('36a^2 - 25b^2', '(6a + 5b)(6a - 5b)', '(6a + 5b)(6a - 5b)')}
      {expandSub('(-x - 5)(x - 5)', '25 - x^2', '25 - x^2')}
      {factorDiffSquaresSub('-9p^2 + 0.16q^2', '(0.4q + 3p)(0.4q - 3p)', '(0.4q + 3p)(0.4q - 3p)')}
      {expandSub('(1 - 4x)(1 + 4x)', '1 - 16x^2', '1 - 16x^2')}
      {factorDiffSquaresSub(
        math`\frac{64}{9}n^2 - 4m^2`,
        math`\left(\frac{8}{3}n + 2m\right)\left(\frac{8}{3}n - 2m\right)`,
        '(8n/3 + 2m)(8n/3 - 2m)',
      )}
      {expandSub('(5b - 7)(5b + 7)', '25b^2 - 49', '25b^2 - 49')}
      {factorDiffSquaresSub('0.04x^2 - 0.64y^2', '(0.2x + 0.8y)(0.2x - 0.8y)', '(0.2x + 0.8y)(0.2x - 0.8y)')}
      {expandSub('(8x + 9)(9 - 8x)', '81 - 64x^2', '81 - 64x^2')}
      {factorDiffSquaresSub('9m^2n^2 - 1', '(3mn + 1)(3mn - 1)', '(3mn + 1)(3mn - 1)')}
      {expandSub('(4y + 5b)(4y - 5b)', '16y^2 - 25b^2', '16y^2 - 25b^2')}
      {factorDiffSquaresSub('81 - 16p^2q^2', '(9 + 4pq)(9 - 4pq)', '(9 + 4pq)(9 - 4pq)')}
      {expandSub('(0.5m + 7x)(7x - 0.5m)', '49x^2 - 0.25m^2', '49x^2 - 0.25m^2')}
      {factorDiffSquaresSub('0.01a^2b^2 - 100m^2', '(0.1ab + 10m)(0.1ab - 10m)', '(0.1ab + 10m)(0.1ab - 10m)')}
      {expandSub(
        math`\left(\frac{9}{7}y - 0.2z\right)\left(\frac{9}{7}y + 0.2z\right)`,
        math`\frac{81}{49}y^2 - 0.04z^2`,
        '81y^2/49 - 0.04z^2',
      )}
      {factorDiffSquaresSub('121a^2b^4 - 49c^2', '(11ab^2 + 7c)(11ab^2 - 7c)', '(11ab^2 + 7c)(11ab^2 - 7c)')}
      {expandSub(
        math`\left(0.8ab - \frac{1}{3}c\right)\left(0.8ab + \frac{1}{3}c\right)`,
        math`0.64a^2b^2 - \frac{c^2}{9}`,
        '0.64a^2b^2 - c^2/9',
      )}
      {factorDiffSquaresSub(
        math`-\frac{9}{64}t^2 + 36k^4l^6`,
        math`\left(6k^2l^3 + \frac{3}{8}t\right)\left(6k^2l^3 - \frac{3}{8}t\right)`,
        '(6k^2l^3 + 3t/8)(6k^2l^3 - 3t/8)',
      )}
      {expandSub('(-0.4mn + 1.1xy)(0.4mn + 1.1xy)', '1.21x^2y^2 - 0.16m^2n^2', '1.21x^2y^2 - 0.16m^2n^2')}
      {expandSub(
        math`\left(-\frac{1}{5}pq - \frac{2}{9}q\right)\left(\frac{1}{5}pq - \frac{2}{9}q\right)`,
        math`\frac{4q^2}{81} - \frac{p^2q^2}{25}`,
        '4q^2/81 - p^2q^2/25',
      )}
    </Problems>

    <Problems
      title="Practice: Cube of a Sum and Cube of a Difference"
      level="easy"
      snippet={{
        seo: true,
        title: 'Problems on the cube of a sum and the cube of a difference',
        description: `
          A large set of problems for practicing the Special Products formulas for the cube of a sum and the cube of a difference.
          Two types of problems: expand and rewrite as the cube of a sum or a difference.
        `,
      }}
    >
      {expandSub(
        '(m + n)^3',
        'm^3 + 3m^2n + 3mn^2 + n^3',
        'm^3 + 3m^2n + 3mn^2 + n^3',
        <ProblemHint>
          Study the examples of using the formulas for the{' '}
          <Dep on={cubeSumDiffExamples}>cube of a sum and cube of a difference</Dep>.
        </ProblemHint>,
      )}
      {expandSub('(c - d)^3', 'c^3 - 3c^2d + 3cd^2 - d^3', 'c^3 - 3c^2d + 3cd^2 - d^3')}
      {factorCubeSub('a^3 + 3a^2b + 3ab^2 + b^3', '(a + b)^3', '(a + b)^3')}
      {expandSub('(2 + b)^3', '8 + 12b + 6b^2 + b^3', '8 + 12b + 6b^2 + b^3')}
      {expandSub('(3 - a)^3', '27 - 27a + 9a^2 - a^3', '27 - 27a + 9a^2 - a^3')}
      {factorCubeSub('x^3 - 3x^2y + 3xy^2 - y^3', '(x - y)^3', '(x - y)^3')}
      {expandSub('(x - 2)^3', 'x^3 - 6x^2 + 12x - 8', 'x^3 - 6x^2 + 12x - 8')}
      {expandSub('(a + 2b)^3', 'a^3 + 6a^2b + 12ab^2 + 8b^3', 'a^3 + 6a^2b + 12ab^2 + 8b^3')}
      {factorCubeSub('125m^3 + 75m^2 + 15m + 1', '(5m + 1)^3', '(5m + 1)^3')}
      {expandSub('(c - 3d)^3', 'c^3 - 9c^2d + 27cd^2 - 27d^3', 'c^3 - 9c^2d + 27cd^2 - 27d^3')}
      {expandSub(
        math`\left(4m + \frac{1}{3}k\right)^3`,
        math`64m^3 + 16m^2k + \frac{4mk^2}{3} + \frac{k^3}{27}`,
        '64m^3 + 16m^2k + 4mk^2/3 + k^3/27',
      )}
      {factorCubeSub('64 - 96a + 48a^2 - 8a^3', '(4 - 2a)^3', '(4 - 2a)^3')}
      {expandSub(
        math`\left(\frac{2}{3}a - 3b\right)^3`,
        math`\frac{8a^3}{27} - 4a^2b + 18ab^2 - 27b^3`,
        '8a^3/27 - 4a^2b + 18ab^2 - 27b^3',
      )}
      {expandSub('(a^2 + x^2)^3', 'a^6 + 3a^4x^2 + 3a^2x^4 + x^6', 'a^6 + 3a^4x^2 + 3a^2x^4 + x^6')}
      {factorCubeSub('m^3 - 12m^2 + 48m - 64', '(m - 4)^3', '(m - 4)^3')}
      {expandSub('(2a^2 - 3b^2)^3', '8a^6 - 36a^4b^2 + 54a^2b^4 - 27b^6', '8a^6 - 36a^4b^2 + 54a^2b^4 - 27b^6')}
      {expandSub('(2x^3 - 3y^2)^3', '8x^9 - 36x^6y^2 + 54x^3y^4 - 27y^6', '8x^9 - 36x^6y^2 + 54x^3y^4 - 27y^6')}
      {factorCubeSub('a^3 + 18a^2 + 108a + 216', '(a + 6)^3', '(a + 6)^3')}
      {expandSub(
        math`(10a^4 - 6b^2)^3`,
        math`1000a^{12} - 1800a^8b^2 + 1080a^4b^4 - 216b^6`,
        '1000a^12 - 1800a^8b^2 + 1080a^4b^4 - 216b^6',
      )}
      {expandSub(
        math`\left(\frac{1}{2}a - \frac{1}{3}b\right)^3`,
        math`\frac{a^3}{8} - \frac{a^2b}{4} + \frac{ab^2}{6} - \frac{b^3}{27}`,
        'a^3/8 - a^2b/4 + ab^2/6 - b^3/27',
      )}
      {factorCubeSub(
        math`\frac{a^3}{8} + \frac{3a^2}{2} + 6a + 8`,
        math`\left(\frac{a}{2} + 2\right)^3`,
        '(a/2 + 2)^3',
      )}
      {expandSub(
        '(0.5m + 0.1n)^3',
        '0.125m^3 + 0.075m^2n + 0.015mn^2 + 0.001n^3',
        '0.125m^3 + 0.075m^2n + 0.015mn^2 + 0.001n^3',
      )}
      {factorCubeSub(math`\frac{x^3}{27} - \frac{x^2}{3} + x - 1`, math`\left(\frac{x}{3} - 1\right)^3`, '(x/3 - 1)^3')}
      {expandSub('(2x - 3xy)^3', '8x^3 - 36x^3y + 54x^3y^2 - 27x^3y^3', '8x^3 - 36x^3y + 54x^3y^2 - 27x^3y^3')}
      {factorCubeSub(
        math`\frac{p^3}{8} + \frac{9p^2q}{8} + \frac{27pq^2}{8} + \frac{27q^3}{8}`,
        math`\left(\frac{p}{2} + \frac{3q}{2}\right)^3`,
        '(p/2 + 3q/2)^3',
      )}
      {expandSub(
        math`\left(2a + \frac{1}{2}ab\right)^3`,
        math`8a^3 + 6a^3b + \frac{3a^3b^2}{2} + \frac{a^3b^3}{8}`,
        '8a^3 + 6a^3b + 3a^3b^2/2 + a^3b^3/8',
      )}
      {factorCubeSub(
        math`8x^3 + 6x^2y + \frac{3xy^2}{2} + \frac{y^3}{8}`,
        math`\left(2x + \frac{y}{2}\right)^3`,
        '(2x + y/2)^3',
      )}
      {expandSub(
        math`\left(0.1n^4 - \frac{1}{2}n^3\right)^3`,
        math`0.001n^{12} - 0.015n^{11} + 0.075n^{10} - 0.125n^9`,
        '0.001n^12 - 0.015n^11 + 0.075n^10 - 0.125n^9',
      )}
      {factorCubeSub(
        math`\frac{27a^3}{8} - \frac{9a^2b}{2} + 2ab^2 - \frac{8b^3}{27}`,
        math`\left(\frac{3a}{2} - \frac{2b}{3}\right)^3`,
        '(3a/2 - 2b/3)^3',
      )}
      {expandSub(
        math`(0.2x^2 - 0.3x^3)^3`,
        math`0.008x^6 - 0.036x^7 + 0.054x^8 - 0.027x^9`,
        '0.008x^6 - 0.036x^7 + 0.054x^8 - 0.027x^9',
      )}
      {factorCubeSub(
        math`\frac{a^3}{64} - \frac{3a^2b}{32} + \frac{3ab^2}{16} - \frac{b^3}{8}`,
        math`\left(\frac{a}{4} - \frac{b}{2}\right)^3`,
        '(a/4 - b/2)^3',
      )}
      {factorCubeSub(math`27 - 9a + a^2 - \frac{a^3}{27}`, math`\left(3 - \frac{a}{3}\right)^3`, '(3 - a/3)^3')}
      {factorCubeSub(
        math`\frac{x^3}{8} + \frac{x^2y}{4} + \frac{xy^2}{6} + \frac{y^3}{27}`,
        math`\left(\frac{x}{2} + \frac{y}{3}\right)^3`,
        '(x/2 + y/3)^3',
      )}
    </Problems>
    <Problems title="Too Many Question Marks" level="easy">
      <P>Fill in the correct entries in place of the question marks.</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (3x^2 + \text{?})^2 = \text{?} + \text{?} + 16y^4
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9x^(4) + 24x^(2)y^(2) + 16y^(4)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (3x^2 + 4y^2)^2 = 9x^4 + 24x^2y^2 + 16y^4
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The far-right term <M>{math`16y^4`}</M> is the last term in the expansion of the{' '}
            <Dep on={squareSum}>square of a sum</Dep>, so it equals <M>{math`b^2`}</M>. Write it as a square:
          </P>
          <BlockMath>{math`
            16y^4 = (4y^2)^2
          `}</BlockMath>
          <P>
            So the very first question mark must be <M>{math`4y^2`}</M>. Substitute it in, and at that point we can
            already expand by the square of a sum formula:
          </P>
          <BlockMath>{math`
            (3x^2 + 4y^2)^2 = (3x^2)^2 + 2 \cdot (3x^2) \cdot (4y^2) + (4y^2)^2 = 9x^4 + 24x^2y^2 + 16y^4
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} - 5b^3)^2 = 49a^6 - \text{?} + \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="49a^(6) - 70a^(3)b^(3) + 25b^(6)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (7a^3 - 5b^3)^2 = 49a^6 - 70a^3b^3 + 25b^6
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Now the far-left term is revealed. In the formula for the{' '}
            <Dep on={squareSum}>square of a sum and a difference</Dep>, it equals <M>{math`a^2`}</M>. Write it as a
            square:
          </P>
          <BlockMath>{math`
            49a^6 = (7a^3)^2
          `}</BlockMath>
          <P>
            So the far-left question mark must be <M>{math`7a^3`}</M>. Substitute it in, then do the standard expansion
            with the square of a difference formula:
          </P>
          <BlockMath>{math`
            (7a^3 - 5b^3)^2 = (7a^3)^2 - 2 \cdot (7a^3) \cdot (5b^3) + (5b^3)^2 = 49a^6 - 70a^3b^3 + 25b^6
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (4a^3 + \text{?})^2 = \text{?} + 40a^3b^4 + \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="16a^(6) + 40a^(3)b^(4) + 25b^(8)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (4a^3 + 5b^4)^2 = 16a^6 + 40a^3b^4 + 25b^8
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In this problem, we know the middle term, not the outer ones. In the formula for the{' '}
            <Dep on={squareSum}>square of a sum</Dep>, the middle term is <M>{math`2ab`}</M>, so the job now is to
            rewrite <M>40a^3b^4</M> in the form <M>2ab</M> to see what <M>b</M> must be:
          </P>
          <BlockMath>{math`
            40a^3b^4 = 2 \cdot 20a^3b^4 = 2 \cdot \underset{a}{(4a^3)} \cdot \underset{b}{(5b^4)}
          `}</BlockMath>
          <P>
            So in the square of a sum formula, the role of <M>b</M> is played by <M>{math`5b^4`}</M>. Now we can write
            the expansion from the formula:
          </P>
          <BlockMath>{math`
            (4a^3 + 5b^4)^2 = (4a^3)^2 + 2 \cdot (4a^3) \cdot (5b^4) + (5b^4)^2 = 16a^6 + 40a^3b^4 + 25b^8
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} - 12a)(\text{?} + \text{?}) = 9b^2 - \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9b^(2) - 144a^(2)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (3b - 12a)(3b + 12a) = 9b^2 - 144a^2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The right-hand side is a <Dep on={diffOfSquares}>difference of squares</Dep>. By the difference of squares
            formula, the right-hand side equals <M>{math`a^2 - b^2`}</M>, so <M>{math`9b^2`}</M> is <M>{math`a^2`}</M>.
            Write it as a square:
          </P>
          <BlockMath>{math`
            9b^2 = (3b)^2
          `}</BlockMath>
          <P>
            So the first unknown factor is <M>{math`3b`}</M>, and the second bracket is the matching one:{' '}
            <M>{math`(3b + 12a)`}</M>. The last question mark is <M>{math`b^2 = (12a)^2 = 144a^2`}</M>:
          </P>
          <BlockMath>{math`
            (3b - 12a)(3b + 12a) = (3b)^2 - (12a)^2 = 9b^2 - 144a^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} - 5c)(\text{?} + 5c) = 16d^2 - \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="16d^(2) - 25c^(2)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (4d - 5c)(4d + 5c) = 16d^2 - 25c^2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The second factor is already partly revealed: <M>{math`(\text{?} + 5c)`}</M>, so in the{' '}
            <Dep on={diffOfSquares}>difference of squares</Dep> formula, the role of <M>b</M> is played by{' '}
            <M>{math`5c`}</M>. Then the left part of the right-hand side is <M>{math`a^2 = 16d^2`}</M>:
          </P>
          <BlockMath>{math`
            16d^2 = (4d)^2
          `}</BlockMath>
          <P>
            Both question marks in the brackets are <M>{math`4d`}</M>, and the last question mark is{' '}
            <M>{math`(5c)^2 = 25c^2`}</M>:
          </P>
          <BlockMath>{math`
            (4d - 5c)(4d + 5c) = (4d)^2 - (5c)^2 = 16d^2 - 25c^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (0{,}7p + \text{?})(\text{?} - 0{,}7p) = \frac{1}{9}m^8 - 0{,}49p^2
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="m^(8)/9 - 0.49p^(2)" />
        <ProblemAnswer>
          <BlockMath>{math`
            \left(0{,}7p + \frac{1}{3}m^4\right)\left(\frac{1}{3}m^4 - 0{,}7p\right) = \frac{1}{9}m^8 - 0{,}49p^2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            This is the <Dep on={diffOfSquares}>difference of squares</Dep> formula, but the brackets are swapped:{' '}
            <M>{math`(b + a)(a - b) = a^2 - b^2`}</M>. The role of <M>b</M> is played by <M>{math`0{,}7p`}</M>, so we
            need to find <M>a</M> from the right-hand side:
          </P>
          <BlockMath>{math`
            \frac{1}{9}m^8 = \left(\frac{1}{3}m^4\right)^2
          `}</BlockMath>
          <P>
            Check it: <M>{math`(0{,}7p)^2 = 0{,}49p^2`}</M> matches the right-hand side. So{' '}
            <M>{math`a = \frac{1}{3}m^4`}</M>:
          </P>
          <BlockMath>{math`
            \left(0{,}7p + \frac{1}{3}m^4\right)\left(\frac{1}{3}m^4 - 0{,}7p\right) = \left(\frac{1}{3}m^4\right)^2 - (0{,}7p)^2 = \frac{1}{9}m^8 - 0{,}49p^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (3m^2 + \text{?})(\text{?} - \text{?}) = 9m^4 - n^6
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9m^(4) - n^(6)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (3m^2 + n^3)(3m^2 - n^3) = 9m^4 - n^6
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            On the right-hand side of the <Dep on={diffOfSquares}>difference of squares</Dep> formula, both terms are
            hidden. We only know <M>{math`a`}</M> from the first bracket: <M>{math`3m^2`}</M>. Find <M>{math`a^2`}</M>:
          </P>
          <BlockMath>{math`
            9m^4 = (3m^2)^2
          `}</BlockMath>
          <P>
            That leaves <M>{math`n^6 = (n^3)^2`}</M>, so <M>{math`b = n^3`}</M>. Substitute:
          </P>
          <BlockMath>{math`
            (3m^2 + n^3)(3m^2 - n^3) = (3m^2)^2 - (n^3)^2 = 9m^4 - n^6
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (5a^4 + \text{?})^3 = \text{?} + \text{?} + \text{?} + 8b^{12}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="125a^(12) + 150a^(8)b^(4) + 60a^(4)b^(8) + 8b^(12)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (5a^4 + 2b^4)^3 = 125a^{12} + 150a^8b^4 + 60a^4b^8 + 8b^{12}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The far-right term <M>{math`8b^{12}`}</M> is the last term in the expansion of the{' '}
            <Dep on={cubeSum}>cube of a sum</Dep>, so it equals <M>{math`b^3`}</M>. Write it as a cube:
          </P>
          <BlockMath>{math`
            8b^{12} = (2b^4)^3
          `}</BlockMath>
          <P>
            So the very first question mark must be <M>{math`2b^4`}</M>. Substitute it in, and at that point we can
            already expand by the cube of a sum formula:
          </P>
          <BlockMath>{math`
            (5a^4 + 2b^4)^3 = (5a^4)^3 + 3 \cdot (5a^4)^2 \cdot (2b^4) + 3 \cdot (5a^4) \cdot (2b^4)^2 + (2b^4)^3 = 125a^{12} + 150a^8b^4 + 60a^4b^8 + 8b^{12}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} - 2x)^3 = z^6 - \text{?} + \text{?} - \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="z^(6) - 6xz^(4) + 12x^(2)z^(2) - 8x^(3)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (z^2 - 2x)^3 = z^6 - 6xz^4 + 12x^2z^2 - 8x^3
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Now the far-left term is revealed. In the formula for the{' '}
            <Dep on={cubeSum}>cube of a sum and a difference</Dep>, it equals <M>{math`a^3`}</M>. Write it as a cube:
          </P>
          <BlockMath>{math`
            z^6 = (z^2)^3
          `}</BlockMath>
          <P>
            So the far-left question mark must be <M>{math`z^2`}</M>. Substitute it in, then do the standard expansion
            with the cube of a difference formula:
          </P>
          <BlockMath>{math`
            (z^2 - 2x)^3 = (z^2)^3 - 3 \cdot (z^2)^2 \cdot (2x) + 3 \cdot (z^2) \cdot (2x)^2 - (2x)^3 = z^6 - 6xz^4 + 12x^2z^2 - 8x^3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} + 4)^3 = \text{?} + \text{?} + 240a^5 + \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="125a^(15) + 300a^(10) + 240a^(5) + 64" />
        <ProblemAnswer>
          <BlockMath>{math`
            (5a^5 + 4)^3 = 125a^{15} + 300a^{10} + 240a^5 + 64
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In this problem, we know the third term of the expansion, not the outer ones. In the formula for the{' '}
            <Dep on={cubeSum}>cube of a sum</Dep>, the third term equals <M>{math`3ab^2`}</M>, and the second term in
            the brackets is already known: <M>{math`b = 4`}</M>. So the job now is to rewrite <M>240a^5</M> in the form{' '}
            <M>{math`3ab^2`}</M> to see what <M>a</M> must be:
          </P>
          <BlockMath>{math`
            240a^5 = 3 \cdot 80a^5 = 3 \cdot \underset{a}{(5a^5)} \cdot \underset{b^2}{4^2}
          `}</BlockMath>
          <P>
            So in the cube of a sum formula, the role of <M>a</M> is played by <M>{math`5a^5`}</M>. Now we can write the
            expansion from the formula:
          </P>
          <BlockMath>{math`
            (5a^5 + 4)^3 = (5a^5)^3 + 3 \cdot (5a^5)^2 \cdot 4 + 3 \cdot (5a^5) \cdot 4^2 + 4^3 = 125a^{15} + 300a^{10} + 240a^5 + 64
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Simple Difference of Squares" level="medium" script={simpleDiffOfSquares()} />

    <Problem title="From One to the Other" level="easy">
      <ProblemDescription>
        <P>Suppose you only know the formulas for the square and cube of a sum:</P>
        <BlockMath>{math`
          (a+b)^2 = a^2 + 2ab + b^2 \\
          (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
        `}</BlockMath>
        <P>
          Use them to derive the formulas for the square and cube of a difference <M>(a-b)^2</M> and <M>(a-b)^3</M>.
        </P>
      </ProblemDescription>
      <ProblemHint>
        Rewrite <M>(a-b)^2</M> and <M>(a-b)^3</M> using a plus sign.
      </ProblemHint>
      <ProblemSolution>
        <P>
          Write the square and cube of a difference using a plus sign, where the minus means negation, not subtraction:
        </P>
        <BlockMath>{math`
          (a-b)^2 = (a + (-b))^2 >>{big}
          (a-b)^3 = (a + (-b))^3
        `}</BlockMath>
        <P>Now apply the known formulas for the square and cube of a sum to these plus-form expressions:</P>
        <BlockMath>{math`
          (a + (-b))^2 = a^2 + 2a(-b) + (-b)^2 = \boxed{a^2 - 2ab + b^2} \\
          (a + (-b))^3 = a^3 + 3a^2(-b) + 3a(-b)^2 + (-b)^3 = \boxed{a^3 - 3a^2b + 3ab^2 - b^3}
        `}</BlockMath>
        <QED />
      </ProblemSolution>
    </Problem>

    <Problems title="Awkward Minus Signs" level="easy" method>
      <SubProblem label="One Minus Sign">
        <ProblemDescription>
          <P>
            Check whether the formula for the <Dep on={squareDiff}>square of a difference</Dep> still works when the
            negative term comes first rather than second:
          </P>
          <BlockMath>{math`
            (-a+b)^2 = \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Does the square of a difference still work?" yes />
        <ProblemSolution>
          <P>
            Treat <M>-a</M> as a single object. Then this expression can be expanded using the{' '}
            <Dep on={squareSum}>square of a sum</Dep> formula:
          </P>
          <BlockMath>{math`
            ((-a) + b)^2 = (-a)^2 + 2 \cdot (-a) \cdot b + b^2 = \boxed{a^2 - 2ab + b^2}
          `}</BlockMath>
          <P>
            We got the expanded form of the square of a difference. So the square-of-a-difference formula can still be
            used safely if we ignore the minus sign inside <M>-a</M>: the outer terms stay positive, and the middle term
            is still <M>-2ab</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Two Minus Signs">
        <ProblemDescription>
          <P>
            Check whether the formula for the <Dep on={squareSum}>square of a sum</Dep> still works when both terms are
            negative:
          </P>
          <BlockMath>{math`
            (-a - b)^2 = \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Does the square of a sum still work?" yes />
        <ProblemSolution>
          <P>
            Treat <M>-a</M> and <M>-b</M> as single objects. Then this expression can be expanded using the{' '}
            <Dep on={squareSum}>square of a sum</Dep> formula:
          </P>
          <BlockMath>{math`
            ((-a) + (-b))^2 = (-a)^2 + 2 \cdot (-a) \cdot (-b) + (-b)^2 = \boxed{a^2 + 2ab + b^2}
          `}</BlockMath>
          <P>
            We got the expanded form of the square of a sum. So the square-of-a-sum formula still works if you simply
            ignore the minus signs attached to <M>-a</M> and <M>-b</M>.
          </P>
          <P>You can also reach the same result by factoring out a minus sign first:</P>
          <BlockMath>{math`
            (-a - b)^2 = (-(a + b))^2 = (-1)^2(a + b)^2 = a^2 + 2ab + b^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Prove This, Prove That..." level="easy">
      <SubProblem>
        <ProblemDescription>
          Prove that the difference of the squares of two consecutive natural numbers equals the sum of those numbers.
        </ProblemDescription>
        <ProblemHint>
          Denote the two consecutive natural numbers by <M>n</M> and <M>n+1</M>.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Let the two consecutive numbers be <M>n</M> and <M>n+1</M>. Find their{' '}
            <Dep on={diffOfSquares}>difference of squares</Dep>:
          </P>
          <BlockMath>{math`
            (n+1)^2 - n^2 = (\cancel{n} + 1 - \cancel{n})(n + 1 + n) = 1 \cdot ((n+1) + n) = (n+1) + n
          `}</BlockMath>
          <P>It really does turn into the sum of those numbers.</P>
          <QED />
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          Prove that the difference of the squares of two consecutive even numbers is divisible by <M>4</M>.
        </ProblemDescription>
        <ProblemHint>
          Any even number can be written as <M>2n</M>.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Let the two consecutive even numbers be <M>2n</M> and <M>2n + 2</M>. We add <M>2</M> because adding <M>1</M>{' '}
            would give an odd number. Now find their <Dep on={diffOfSquares}>difference of squares</Dep>:
          </P>
          <BlockMath>{math`
            (2n + 2)^2 - (2n)^2 = (\cancel{2n} + 2 - \cancel{2n})(2n + 2 + 2n) = 2 \cdot (4n + 2) = 4 \cdot (2n + 1)
          `}</BlockMath>
          <P>
            So the difference of squares can be written as a product with one factor equal to <M>4</M>. That means it is
            divisible by <M>4</M>.
          </P>
          <QED />
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          Prove that the difference between the sum of the squares of two consecutive integers and twice their product
          does not depend on which integers you choose.
        </ProblemDescription>
        <ProblemSolution>
          <P>
            Let the two consecutive integers be <M>n</M> and <M>n+1</M>. The sum of their squares is{' '}
            <M>n^2 + (n+1)^2</M>, and twice their product is <M>2n(n+1)</M>. Write the difference:
          </P>
          <BlockMath>{math`
            n^2 + (n+1)^2 - 2n(n+1)
          `}</BlockMath>
          <P>
            If we reorder the terms, we can spot an expanded <Dep on={squareDiff}>square of a difference</Dep> and pack
            it:
          </P>
          <BlockMath>{math`
            n^2 - 2n(n+1) + (n+1)^2 = (n - (n+1))^2 = (-1)^2 = 1
          `}</BlockMath>
          <P>
            So the difference between the sum of the squares and twice the product is always equal to <M>1</M>, no
            matter which consecutive integers you choose.
          </P>
          <QED />
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem $={uniques.simpleProduct} title="Simple Product" level="medium" script={simpleProduct()} />

    <Problem title="Simple Difference with a Product" level="medium" script={simpleDifference()} />

    <Problem title="Radical Mayhem" level="medium">
      <ProblemDescription>
        <P>Find the value of the expression:</P>
        <BlockMath>{math`
          (\sqrt5 + \sqrt6 + \sqrt7)(\sqrt5 + \sqrt6 - \sqrt7)(\sqrt5 - \sqrt6 + \sqrt7)(-\sqrt5 + \sqrt6 + \sqrt7)
        `}</BlockMath>
      </ProblemDescription>
      <MathValueCheck answer={104} />
      <ProblemHint>
        Apply the <Dep on={diffOfSquares}>difference of squares</Dep> formula first to the first two brackets, then to
        the last two. In each case, simplify all the way.
      </ProblemHint>
      <ProblemAnswer>
        <M>104</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          The first two brackets clearly form a <Dep on={diffOfSquares}>difference of squares</Dep>. Apply the formula,
          then expand with the <Dep on={squareSum}>square of a sum</Dep> formula:
        </P>
        <BlockMath>{math`
          ((\sqrt5 + \sqrt6) + \sqrt7)((\sqrt5 + \sqrt6) - \sqrt7) = \\
          (\sqrt5 + \sqrt6)^2 - (\sqrt7)^2 = \\
          (5 + 2 \cdot \sqrt{30} + 6) - 7 = \\
          4 + 2 \cdot \sqrt{30}
        `}</BlockMath>
        <P>
          The two remaining brackets also form a difference of squares if we cleverly factor out a minus sign and
          reorder the terms. Apply the formula and expand everything we can:
        </P>
        <BlockMath>{math`
          (\sqrt5 - \sqrt6 + \sqrt7)(-\sqrt5 + \sqrt6 + \sqrt7) = \\
          (\sqrt7 + (\sqrt5 - \sqrt6))(\sqrt7 - (\sqrt5 - \sqrt6)) = \\
          (\sqrt7)^2 - (\sqrt5 - \sqrt6)^2 = \\
          7 - (5 - 2 \cdot \sqrt{30} + 6) = \\
          -4 + 2 \cdot \sqrt{30}
        `}</BlockMath>
        <P>Now multiply the two results:</P>
        <BlockMath>{math`
          (4 + 2 \cdot \sqrt{30})(-4 + 2 \cdot \sqrt{30}) = \\
          (2 \cdot \sqrt{30} + 4)(2 \cdot \sqrt{30} - 4) = \\
          (2 \cdot \sqrt{30})^2 - 4^2 = \\
          4 \cdot 30 - 16 = \\
          104
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problems title="Time to Simplify" level="medium">
      <P>Simplify the expression:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{4x^2 + 12x + 9}{4x^2 - 9}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(2x+3)/(2x-3)" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{2x + 3}{2x - 3}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Pack the numerator -- it is a <Dep on={squareSum}>square of a sum</Dep>:
          </P>
          <BlockMath>{math`
            4x^2 + 12x + 9 = (2x)^2 + 2 \cdot (2x) \cdot 3 + 3^2 = (2x + 3)^2
          `}</BlockMath>
          <P>
            The denominator is a <Dep on={diffOfSquares}>difference of squares</Dep>:
          </P>
          <BlockMath>{math`
            4x^2 - 9 = (2x)^2 - 3^2 = (2x + 3)(2x - 3)
          `}</BlockMath>
          <P>
            Substitute and cancel the common factor <M>(2x+3)</M>:
          </P>
          <BlockMath>{math`
            \frac{(2x + 3)^2}{(2x + 3)(2x - 3)} = \frac{\cancel{(2x + 3)}(2x + 3)}{\cancel{(2x + 3)}(2x - 3)} = \frac{2x + 3}{2x - 3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x^2 + y^2)^2 - (x^2 - y^2)^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="4*x^2*y^2" />
        <ProblemAnswer>
          <BlockMath>{math`4x^2y^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Notice that this is a <Dep on={diffOfSquares}>difference of squares</Dep>, where the role of <M>a</M> is
            played by the expression <M>x^2 + y^2</M>, and the role of <M>b</M> is played by <M>x^2 - y^2</M>. Pack it:
          </P>
          <BlockMath>{math`
            (x^2 + y^2)^2 - (x^2 - y^2)^2 = \bigl((x^2+y^2) + (x^2-y^2)\bigr)\bigl((x^2+y^2) - (x^2-y^2)\bigr)
          `}</BlockMath>
          <P>Expand each of the two brackets:</P>
          <BlockMath>{math`
            (x^2 + \cancel{y^2} + x^2 - \cancel{y^2})(\cancel{x^2} + y^2 - \cancel{x^2} + y^2) = 2x^2 \cdot 2y^2 = 4x^2y^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{a^2 - b^2}{a^2 + 2ab + b^2}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(a-b)/(a+b)" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{a - b}{a + b}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The numerator is a <Dep on={diffOfSquares}>difference of squares</Dep>, and the denominator is a{' '}
            <Dep on={squareSum}>square of a sum</Dep>. Pack both:
          </P>
          <BlockMath>{math`
            \frac{a^2 - b^2}{a^2 + 2ab + b^2} = \frac{(a - b)(a + b)}{(a + b)^2}
          `}</BlockMath>
          <P>
            Cancel the common factor <M>(a+b)</M>:
          </P>
          <BlockMath>{math`
            \frac{(a - b)\cancel{(a + b)}}{\cancel{(a + b)}(a + b)} = \frac{a - b}{a + b}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x - \dfrac{9}{x}}{1 - \dfrac{3}{x}}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="x+3" />
        <ProblemAnswer>
          <BlockMath>{math`x + 3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Multiply the numerator and denominator by <M>x</M> to get rid of the fractions inside the fraction:
          </P>
          <BlockMath>{math`
            \frac{\left(x - \dfrac{9}{x}\right) \cdot x}{\left(1 - \dfrac{3}{x}\right) \cdot x} = \frac{x^2 - 9}{x - 3}
          `}</BlockMath>
          <P>
            The numerator becomes a <Dep on={diffOfSquares}>difference of squares</Dep> -- pack it and cancel:
          </P>
          <BlockMath>{math`
            \frac{x^2 - 9}{x - 3} = \frac{(x + 3)\cancel{(x - 3)}}{\cancel{x - 3}} = x + 3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{a^2 + 2ab + b^2 - 9}{a + b + 3}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="a+b-3" />
        <ProblemAnswer>
          <BlockMath>{math`a + b - 3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            In the numerator, the first three terms combine into a <Dep on={squareSum}>square of a sum</Dep>:
          </P>
          <BlockMath>{math`
            a^2 + 2ab + b^2 - 9 = (a + b)^2 - 9
          `}</BlockMath>
          <P>
            Now the numerator is a <Dep on={diffOfSquares}>difference of squares</Dep>. Pack it:
          </P>
          <BlockMath>{math`
            (a + b)^2 - 9 = (a + b)^2 - 3^2 = (a + b + 3)(a + b - 3)
          `}</BlockMath>
          <P>
            Cancel the common factor <M>(a + b + 3)</M>:
          </P>
          <BlockMath>{math`
            \frac{(a + b + 3)(a + b - 3)}{a + b + 3} = a + b - 3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(a^2 - b^2)^2 + 4a^2b^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(a^2+b^2)^2" />
        <ProblemAnswer>
          <BlockMath>{math`(a^2 + b^2)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Expand <M>(a^2 - b^2)^2</M> using the <Dep on={squareDiff}>square of a difference</Dep> formula:
          </P>
          <BlockMath>{math`
            (a^2 - b^2)^2 = a^4 - 2a^2b^2 + b^4
          `}</BlockMath>
          <P>Substitute and combine like terms:</P>
          <BlockMath>{math`
            a^4 - 2a^2b^2 + b^4 + 4a^2b^2 = a^4 + 2a^2b^2 + b^4
          `}</BlockMath>
          <P>
            The result is a <Dep on={squareSum}>square of a sum</Dep>, where the role of <M>a</M> is played by{' '}
            <M>a^2</M>, and the role of <M>b</M> is played by <M>b^2</M>. Pack it:
          </P>
          <BlockMath>{math`
            a^4 + 2a^2b^2 + b^4 = (a^2)^2 + 2 \cdot a^2 \cdot b^2 + (b^2)^2 = (a^2 + b^2)^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{\dfrac{a+b}{a-b} + \dfrac{a-b}{a+b}}{\dfrac{(a+b)^2 + (a-b)^2}{a^2 - b^2}}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="1" />
        <ProblemAnswer>
          <BlockMath>{math`1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Start with the numerator. Bring the fractions to the common denominator <M>(a-b)(a+b)</M>:
          </P>
          <BlockMath>{math`
            \frac{a+b}{a-b} + \frac{a-b}{a+b} = \frac{(a+b)^2 + (a-b)^2}{(a-b)(a+b)}
          `}</BlockMath>
          <P>
            Expand the squares in the numerator -- apply the <Dep on={squareSum}>square of a sum</Dep> and the{' '}
            <Dep on={squareDiff}>square of a difference</Dep>:
          </P>
          <BlockMath>{math`
            (a+b)^2 + (a-b)^2 = (a^2 + 2ab + b^2) + (a^2 - 2ab + b^2) = 2a^2 + 2b^2
          `}</BlockMath>
          <P>
            The denominator <M>(a-b)(a+b)</M> is a <Dep on={diffOfSquares}>difference of squares</Dep>. Pack it:
          </P>
          <BlockMath>{math`
            \frac{a+b}{a-b} + \frac{a-b}{a+b} = \frac{2a^2 + 2b^2}{a^2 - b^2}
          `}</BlockMath>
          <P>Now divide the original fraction. Dividing by a fraction means multiplying by its reciprocal:</P>
          <BlockMath>{math`
            \frac{\dfrac{2a^2 + 2b^2}{a^2 - b^2}}{\dfrac{(a+b)^2 + (a-b)^2}{a^2 - b^2}} = \frac{2a^2 + 2b^2}{a^2 - b^2} \cdot \frac{a^2 - b^2}{(a+b)^2 + (a-b)^2}
          `}</BlockMath>
          <P>Expand the denominator of the second fraction -- we already did that above:</P>
          <BlockMath>{math`
            \frac{\cancel{2a^2 + 2b^2}}{\cancel{a^2 - b^2}} \cdot \frac{\cancel{a^2 - b^2}}{\cancel{2a^2 + 2b^2}} = 1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Power of Ten" level="medium">
      <ProblemDescription>
        <P>
          What number must be substituted for <M>x</M> to make the equality true?
        </P>
        <BlockMath>{math`
          10^x = \left( 10^{624} + 25 \right)^2 - \left( 10^{624} - 25 \right)^2
        `}</BlockMath>
      </ProblemDescription>
      <MathValueCheck answer={626} />
      <ProblemHint>
        Do not touch the left-hand side at all. Instead, simplify the right-hand side until it also becomes <M>10</M> to
        some power.
      </ProblemHint>
      <ProblemAnswer>
        <M>626</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let us simplify the right-hand side. Right away, apply the formula for the{' '}
          <Dep on={diffOfSquares}>difference of squares</Dep>:
        </P>
        <BlockMath>{math`
          \left( 10^{624} + 25 \right)^2 - \left( 10^{624} - 25 \right)^2 = \\
          \left( 10^{624} + \cancel{25} + 10^{624} - \cancel{25} \right)\left( \cancel{10^{624}} + 25 - \cancel{10^{624}} + 25 \right) = \\
          2 \cdot 10^{624} \cdot 50 = 10^{624} \cdot 100 = 10^{624} \cdot 10^2 = 10^{626}
        `}</BlockMath>
        <P>The equality becomes:</P>
        <BlockMath>{math`
          10^x = 10^{626}
        `}</BlockMath>
        <P>
          For the equality to hold, the exponent on the left must match the one on the right, so <M>x = 626</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Fraction Snake" level="medium" pretty>
      <ProblemDescription>
        <P>Simplify the expression:</P>
        <BlockMath>{math`
          \left( 1 - \frac{1}{2^2} \right) \left( 1 - \frac{1}{3^2} \right) \left( 1 - \frac{1}{4^2} \right) \cdots \left( 1 - \frac{1}{n^2} \right)
        `}</BlockMath>
        <P>
          What does it equal when <M>n = 100</M>?
        </P>
      </ProblemDescription>
      <MathExpressionCheck label="Simplified expression" answer="(n+1)/2n" />
      <MathValueCheck label="Value when n=100" answer="101/200" />
      <ProblemHint>In each bracket, bring the terms to a common denominator.</ProblemHint>
      <ProblemHint>Notice that the numerators become a difference of squares.</ProblemHint>
      <ProblemHint>
        Apply the <Dep on={diffOfSquares}>difference of squares</Dep> formula, then play around with rearranging factors
        and canceling.
      </ProblemHint>
      <ProblemAnswer>
        <P>This whole chain of multiplications equals:</P>
        <BlockMath>{math`\frac{n+1}{2n}`}</BlockMath>
        <P>
          When <M>n=100</M>, you get:
        </P>
        <BlockMath>{math`\frac{101}{200}`}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Simplifying the expression">
          <P>Bring the fractions in each bracket to a common denominator:</P>
          <BlockMath>{math`
            \left( \frac{2^2 - 1}{2^2} \right) \left( \frac{3^2 - 1}{3^2} \right) \left( \frac{4^2 - 1}{4^2} \right) \cdots \left( \frac{n^2 - 1}{n^2} \right)
          `}</BlockMath>
          <P>
            The numerators become a <Dep on={diffOfSquares}>difference of squares</Dep>, which we rewrite as a product:
          </P>
          <BlockMath>{math`
            \left( \frac{(2-1)(2+1)}{2^2} \right) \left( \frac{(3-1)(3+1)}{3^2} \right) \left( \frac{(4-1)(4+1)}{4^2} \right) \cdots \left( \frac{(n-1)(n+1)}{n^2} \right)
          `}</BlockMath>
          <P>This gives us one giant fraction:</P>
          <BlockMath>{math`
            \frac{1 \cdot 3 \cdot 2 \cdot 4 \cdot 3 \cdot 5 \cdots (n-1)(n+1)}{2^2 \cdot 3^2 \cdot 4^2 \cdots n^2}
          `}</BlockMath>
          <P>
            Rearrange the factors in the numerator, and write the squares in the denominator as products of equal
            factors. After that, carry out large-scale cancellation, which gets rid of almost all the factors:
          </P>
          <BlockMath>{math`
            \frac{(\cancel{1 \cdot 2 \cdot 3 \cdots (n-1)})(\cancel{3 \cdot 4 \cdot 5 \cdots n} \cdot (n+1))}{(2 \cdot \cancel{3 \cdots (n-1)} \cdot n) \cdot (\cancel{2 \cdot 3 \cdots n})} =
            \frac{n+1}{2n}
          `}</BlockMath>
        </ProblemSection>
        <ProblemSection title="Value when n=100">
          <P>
            Substitute <M>n=100</M> into the simplified expression:
          </P>
          <BlockMath>{math`
            \frac{n+1}{2n} = \frac{100+1}{2 \cdot 100} = \frac{101}{200}
          `}</BlockMath>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="Difference of Exponents" level="medium">
      <ProblemDescription>
        <BlockMath>{math`
          2^x - 2^y = 1 >>{big}
          4^x - 4^y = \frac{5}{3} >>{big}
          x - y = \text{?}
        `}</BlockMath>
      </ProblemDescription>
      <MathValueCheck answer={2} />
      <ProblemHint>
        In the second equality, play around with the powers and use the formula for the{' '}
        <Dep on={diffOfSquares}>difference of squares</Dep>.
      </ProblemHint>
      <ProblemHint>
        <P>Use the following property of exponents:</P>
        <BlockMath>{math`
          \frac{a^{n}}{a^{m}} = a^{n-m}
        `}</BlockMath>
      </ProblemHint>
      <ProblemAnswer>
        <M>2</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>In the second equality, rewrite the fours as squared twos and play around with the exponents:</P>
        <BlockMath>{math`
          \frac{5}{3} = 4^x - 4^y = (2^2)^x - (2^2)^y = 2^{2x} - 2^{2y} = (2^x)^2 - (2^y)^2
        `}</BlockMath>
        <P>
          We get a <Dep on={diffOfSquares}>difference of squares</Dep>:
        </P>
        <BlockMath>{math`
          \frac{5}{3} = (2^x)^2 - (2^y)^2 = (2^x + 2^y)\underbrace{(2^x - 2^y)}_{\small 1} \\
          2^x + 2^y = \frac{5}{3} \\
        `}</BlockMath>
        <P>Now consider two sums. Here is the first:</P>
        <BlockMath>{math`
          (2^x + \cancel{2^y}) + (2^x - \cancel{2^y}) = \frac{5}{3} + 1 \\
          2 \cdot 2^x = \frac{8}{3} \\
          2^x = \frac{4}{3}
        `}</BlockMath>
        <P>And here is the second:</P>
        <BlockMath>{math`
          (2^x + \cancel{2^y}) - (2^x - \cancel{2^y}) = \frac{5}{3} - 1 \\
          2 \cdot 2^y = \frac{2}{3} \\
          2^y = \frac{1}{3}
        `}</BlockMath>
        <P>Division of powers with the same base can be written through the difference of their exponents:</P>
        <BlockMath>{math`
          \frac{2^x}{2^y} = 2^{x-y} = \frac{\frac{4}{3}}{\frac{1}{3}} = 4 = 2^2 \\
          2^{x-y} = 2^2 \\
        `}</BlockMath>
        <P>
          For the equality to hold, the difference <M>x-y</M> must equal <M>2</M>:
        </P>
        <BlockMath>{math`
          x - y = 2
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem title="The Mystery of 693" level="medium" pretty>
      <ProblemDescription>
        The difference of squares of two two-digit numbers written with the same digits equals <M>693</M>. Find those
        numbers.
      </ProblemDescription>
      <MathValueCheck label="Two numbers written with the same digits" answers={[43, 34]} />
      <ProblemHint>
        <P>
          A two-digit number written with digits <M>n</M> and <M>m</M> looks like this: <M>10 \cdot n + m</M>. Examples:
        </P>
        <BlockMath>{math`
          59 = 10 \cdot 5 + 9 >>{big}
          13 = 10 \cdot 1 + 3 >>{big}
          92 = 10 \cdot 9 + 2 >>{big}
        `}</BlockMath>
      </ProblemHint>
      <ProblemAnswer>
        <M>43</M> and <M>34</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let the two unknown digits making up both two-digit numbers be <M>n</M> and <M>m</M>. Then the two numbers can
          be written as <M>10n + m</M> and <M>10m + n</M>. Write their{' '}
          <Dep on={diffOfSquares}>difference of squares</Dep>, which by the condition equals <M>693</M>:
        </P>
        <BlockMath>{math`
          (10n + m)^2 - (10m + n)^2 = 693 \\
          (10n + m + 10m + n)(10n + m - 10m - n) = 693 \\
          (11n + 11m)(9n - 9m) = 693 \\
          99(n + m)(n - m) = 693
        `}</BlockMath>
        <P>
          On the left, we get a product of factors, one of which is <M>99</M>. Get rid of it so we can work with simpler
          numbers.
        </P>
        <BlockMath>{math`
          (n + m)(n - m) = \frac{693}{99} = 7 \\
          (n + m)(n - m) = 7
        `}</BlockMath>
        <P>
          So we have this situation: two natural numbers <M>n+m</M> and <M>n-m</M> multiply to give <M>7</M>. What can
          those numbers be? Only <M>7</M> and <M>1</M>, otherwise there is no way to get seven.
        </P>
        <BlockMath>{math`
          n + m = 7 \\
          n - m = 1
        `}</BlockMath>
        <P>
          Recall that <M>n</M> and <M>m</M> are digits, so they must lie in the range from <M>1</M> to <M>9</M>. Simple
          trial shows that <M>n=4</M> and <M>m=3</M> is the only option that fits these conditions.
        </P>
        <P>
          So the two required two-digit numbers are <M>43</M> and <M>34</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problems title="Sum and Difference of Cubes" level="medium" method>
      <P>
        Unlike squares, where there is a special difference-of-squares formula, cubes have two separate formulas: the
        sum of cubes and the difference of cubes.
      </P>
      <BlockMath>{math`
        a^3 \pm b^3 = (a \pm b)(a^2 \mp ab \pm b^2)
      `}</BlockMath>
      {expandSub('(a + 1)(a^2 - a + 1)', 'a^3 + 1', 'a^3+1')}
      {factorDiffSquaresSub('a^3 + 8', '(a + 2)(a^2 - 2a + 4)', '(a+2)(a^2-2a+4)')}
      {expandSub('(x - 2)(x^2 + 2x + 4)', 'x^3 - 8', 'x^3-8')}
      {factorDiffSquaresSub('x^3 - 27', '(x - 3)(x^2 + 3x + 9)', '(x-3)(x^2+3x+9)')}
      {expandSub('(2a + 3)(4a^2 - 6a + 9)', '8a^3 + 27', '8a^3+27')}
      {factorDiffSquaresSub('1 + y^3', '(1 + y)(1 - y + y^2)', '(1+y)(1-y+y^2)')}
      {expandSub('(3 - b)(9 + 3b + b^2)', '27 - b^3', '27-b^3')}
      {factorDiffSquaresSub('m^3 - 27', '(m - 3)(m^2 + 3m + 9)', '(m-3)(m^2+3m+9)')}
      {expandSub('(1 + m^2)(1 - m^2 + m^4)', '1 + m^6', 'm^(6)+1')}
      {factorDiffSquaresSub('p^3 - 1', '(p - 1)(p^2 + p + 1)', '(p-1)(p^2+p+1)')}
      {expandSub('(3a - 4)(9a^2 + 12a + 16)', '27a^3 - 64', '27a^3-64')}
      {factorDiffSquaresSub('1 - 8x^3', '(1 - 2x)(1 + 2x + 4x^2)', '(1-2x)(4x^2+2x+1)')}
      {expandSub('(3x - 4)(9x^2 + 12x + 16)', '27x^3 - 64', '27x^3-64')}
      {factorDiffSquaresSub('27 - 8a^3', '(3 - 2a)(9 + 6a + 4a^2)', '(3-2a)(4a^2+6a+9)')}
      {expandSub(
        math`\left(a + \frac{1}{2}\right)\left(a^2 - \frac{1}{2}a + \frac{1}{4}\right)`,
        math`a^3 + \frac{1}{8}`,
        'a^3+1/8',
      )}
      {factorDiffSquaresSub('8y^3 + x^3', '(2y + x)(4y^2 - 2xy + x^2)', '(2y+x)(4y^2-2xy+x^2)')}
      {expandSub(
        math`\left(\frac{1}{2}x - \frac{1}{3}y\right)\left(\frac{1}{4}x^2 + \frac{1}{6}xy + \frac{1}{9}y^2\right)`,
        math`\frac{x^3}{8} - \frac{y^3}{27}`,
        'x^3/8-y^3/27',
      )}
      {factorDiffSquaresSub('x^6 - y^9', '(x^2 - y^3)(x^4 + x^2 y^3 + y^6)', '(x^2-y^3)(x^4+x^2*y^3+y^6)')}
      {expandSub(
        math`\left(\frac{1}{2}a - 2b\right)\left(\frac{1}{4}a^2 + ab + 4b^2\right)`,
        math`\frac{a^3}{8} - 8b^3`,
        'a^3/8-8b^3',
      )}
      {factorDiffSquaresSub('27a^3 - 8y^3', '(3a - 2y)(9a^2 + 6ay + 4y^2)', '(3a-2y)(9a^2+6ay+4y^2)')}
      {expandSub('(16 + 4x + x^2)(x - 4)', 'x^3 - 64', 'x^3-64')}
      {factorDiffSquaresSub(
        math`1000x^{12}y^3 + 0{,}001a^9b^{15}`,
        math`(10x^4y + 0{,}1a^3b^5)(100x^8y^2 - x^4ya^3b^5 + 0{,}01a^6b^{10})`,
        '(10x^4*y+0.1a^3*b^5)(100x^8*y^2-x^4*y*a^3*b^5+0.01a^6*b^10)',
      )}
      {expandSub('(49 + b^2 - 7b)(b + 7)', 'b^3 + 343', 'b^3+343')}
    </Problems>

    <Problem title="Any Odd is a Difference of Squares" level="hard" pretty>
      <ProblemDescription>
        Prove that any odd number can be written as a <Dep on={diffOfSquares}>difference of squares</Dep> of two
        numbers. Find the numbers whose difference of squares equals <M>7</M>, <M>111</M>, and <M>507</M>.
      </ProblemDescription>
      <MathValueCheck label="Numbers whose difference of squares equals 7" answers={[4, 3]} />
      <MathValueCheck label="Numbers whose difference of squares equals 111" answers={[56, 55]} />
      <MathValueCheck label="Numbers whose difference of squares equals 507" answers={[254, 253]} />
      <ProblemHint>
        Any odd number can be written as <M>2k + 1</M>.
      </ProblemHint>
      <ProblemHint>
        Transform the expression <M>2k + 1</M> so that it turns into the two brackets from the difference-of-squares
        formula.
      </ProblemHint>
      <ProblemHint>
        In both brackets, the trick is based on either adding or subtracting <M>k</M>.
      </ProblemHint>
      <ProblemHint>
        The minus bracket can be obtained from <M>1</M>, so there must be some clever difference there that equals one.
      </ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`
          7 = 4^2 - 3^2 >>{big}
          111 = 56^2 - 55^2 >>{big}
          507 = 254^2 - 253^2
        `}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Any odd number, that is, a number not divisible by <M>2</M>, can be written as <M>2k + 1</M>. Now we need to
          cleverly transform this expression into the two brackets from the difference-of-squares formula: one bracket
          with a plus, and the other with a minus. For the plus bracket, split <M>2k</M> into two terms:
        </P>
        <BlockMath>{math`
          2k + 1 = \left[ (k+1) + k \right] = \ldots
        `}</BlockMath>
        <P>
          But where do we get the second bracket from? We already used everything we had. From the explicit data, yes,
          but any number can be multiplied by <M>1</M> without changing it:
        </P>
        <BlockMath>{math`
          \ldots = \left[ (k+1) + k \right] \cdot \brand{1} = \ldots
        `}</BlockMath>
        <P>
          Now that one must be written as a bracket that simplifies to one. To do that, repeat the left bracket, but
          subtract <M>k</M> this time:
        </P>
        <BlockMath>{math`
          \ldots = \left[ (k+1) + k \right] \cdot \underbrace{\left[ (k+1) - k \right]}_{\small 1}
        `}</BlockMath>
        <P>
          We got two identical brackets that differ only by the sign between the terms. Apply the difference-of-squares
          formula:
        </P>
        <BlockMath>{math`
          2k + 1 = \left[ (k+1) + k \right] \cdot \left[ (k+1) - k \right] = (k+1)^2 - k^2 \\
          2k + 1 = (k+1)^2 - k^2
        `}</BlockMath>
        <QED />
        <Hr />
        <P>
          Now let us write the difference of squares for the numbers <M>7</M>, <M>111</M>, and <M>507</M>. To do that,
          write all these numbers as <M>2k + 1</M>, because we need to find <M>k</M> for each number. Subtract one from
          each number and divide by <M>2</M>:
        </P>
        <BlockMath>{math`
          7 = 2 \cdot 3 + 1 \Rightarrow 3 >>{big}
          111 = 2 \cdot 55 + 1 \Rightarrow 55 >>{big}
          507 = 2 \cdot 253 + 1 \Rightarrow 253
        `}</BlockMath>
        <P>
          Use the values of <M>k</M> we found to write the difference of squares:
        </P>
        <BlockMath>{math`
          7 = \boxed{4^2 - 3^2} >>{big}
          111 = \boxed{56^2 - 55^2} >>{big}
          507 = \boxed{254^2 - 253^2}
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem $={uniques.cubeSumDiffFactorization} title="Factoring the Cube of a Sum and a Difference" level="hard">
      <ProblemDescription>
        <P>
          Starting from the expanded forms of the cube of a sum and a difference, recover their bracketed cube forms:
        </P>
        <BlockMath>{math`
          a^3 + 3a^2b + 3ab^2 + b^3 \overset{\text{?}}{\implies} (a+b)^3 \\
          a^3 - 3a^2b + 3ab^2 - b^3 \overset{\text{?}}{\implies} (a-b)^3
        `}</BlockMath>
      </ProblemDescription>
      <ProblemHint>
        To solve this, you will need to factor common terms out of parts of the expression, split the results into
        smaller pieces, expand brackets again, and then factor common terms again.
      </ProblemHint>
      <ProblemHint>
        <P>
          Factor out <M>a^2</M> from the first two terms, and <M>b^2</M> from the last two.
        </P>
        <BlockMath>{math`
          a^3 + 3a^2b + 3ab^2 + b^3 = a^2(a+3b) + b^2(3a+b) \\
          a^3 - 3a^2b + 3ab^2 - b^3 = a^2(a-3b) + b^2(3a-b)
        `}</BlockMath>
      </ProblemHint>
      <ProblemHint>
        <P>
          Split brackets of the form <M>a \pm 3b</M> so that <M>a \pm b</M> appears explicitly inside each of them:
        </P>
        <BlockMath>{math`
          a^2(a+3b) + b^2(3a+b) = a^2((a+b) + 2b) + b^2((a+b) + 2a) \\
          a^2(a-3b) + b^2(3a-b) = a^2((a-b) - 2b) + b^2((a-b) - 2a)
        `}</BlockMath>
        <P>
          After that, expand the brackets and factor out the common factor <M>(a \pm b)</M>.
        </P>
      </ProblemHint>
      <ProblemSolution>
        <P>
          We will carry out the derivation for the cube-of-a-sum formula. The derivation for the cube of a difference is
          exactly the same. First factor out <M>a^2</M> from the first two terms, and <M>b^2</M> from the last two.
        </P>
        <BlockMath>{math`
          a^2(a+3b) + b^2(3a+b)
        `}</BlockMath>
        <P>
          Inside the brackets, form another pair of brackets of the form <M>(a+b)</M>:
        </P>
        <BlockMath>{math`
          a^2((a+b) + 2b) + b^2((a+b) + 2a)
        `}</BlockMath>
        <P>Expand both outer brackets:</P>
        <BlockMath>{math`
          a^2(a+b) + 2a^2b + b^2(a+b) + 2ab^2
        `}</BlockMath>
        <P>
          Factor out the common factor <M>(a+b)</M> from the first and third terms, and the common factor <M>2ab</M>{' '}
          from the second and fourth terms:
        </P>
        <BlockMath>{math`
          (a+b)(a^2 + b^2) + 2ab(a+b)
        `}</BlockMath>
        <P>
          Factor out the common factor <M>(a+b)</M> one more time:
        </P>
        <BlockMath>{math`
          (a+b)(a^2 + 2ab + b^2)
        `}</BlockMath>
        <P>Inside the second brackets, we got the expanded square-of-a-sum formula. Replace it with the packed form:</P>
        <BlockMath>{math`
          (a+b)(a+b)^2 = (a+b)^3
        `}</BlockMath>
        <QED />
      </ProblemSolution>
    </Problem>

    <Problem title="Tricky Radicals" level="hard">
      <ProblemDescription>
        <P>It is known that</P>
        <BlockMath>{math`
          x = \frac{4}{(\sqrt{5} + 1)(\sqrt[4]{5} + 1)(\sqrt[8]{5} + 1)(\sqrt[16]{5} + 1)}
        `}</BlockMath>
        <P>
          What is the value of <M>{math`(1+x)^{48}`}</M>?
        </P>
      </ProblemDescription>
      <MathValueCheck answer={125} />
      <ProblemHint>
        Multiply the numerator and denominator by the same brackets that appear in the denominator, but with minus
        signs.
      </ProblemHint>
      <ProblemHint>
        In the denominator, apply the <Dep on={diffOfSquares}>difference of squares</Dep> formula separately to each
        pair of brackets.
      </ProblemHint>
      <ProblemAnswer>
        <M>125</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Multiply the numerator and denominator by the same brackets that appear in the denominator, but with minus
          signs. Since we multiply by identical expressions, the value of the fraction does not change:
        </P>
        <BlockMath freeze>{math`
          \frac{4 \yellow{(\sqrt{5} - 1) (\sqrt[4]{5} - 1) (\sqrt[8]{5} - 1) (\sqrt[16]{5} - 1) }}{(\sqrt{5} + 1)\yellow{(\sqrt{5} - 1)}(\sqrt[4]{5} + 1)\yellow{(\sqrt[4]{5} - 1)}(\sqrt[8]{5} + 1)\yellow{(\sqrt[8]{5} - 1)}(\sqrt[16]{5} + 1)\yellow{(\sqrt[16]{5} - 1)}}
        `}</BlockMath>
        <P>
          In the denominator, apply the <Dep on={diffOfSquares}>difference of squares</Dep> formula to each pair of
          brackets, then carry out massive cancellation:
        </P>
        <BlockMath>{math`
          \frac{\cancel{4} \cancel{(\sqrt{5} - 1)} \cancel{(\sqrt[4]{5} - 1)} \cancel{(\sqrt[8]{5} - 1)} (\sqrt[16]{5} - 1)}{\cancel{(5 - 1)} \cancel{(\sqrt{5} - 1)}\cancel{(\sqrt[4]{5} - 1)}\cancel{(\sqrt[8]{5} - 1)}} = \\
          \sqrt[16]{5} - 1
        `}</BlockMath>
        <P>
          We have just simplified the expression equal to <M>x</M>. Now substitute it into the final expression:
        </P>
        <BlockMath>{math`
          (1+x)^{48} = (\cancel{1} + \sqrt[16]{5} - \cancel{1})^{48} = (\sqrt[16]{5})^{48} = 5^{\frac{48}{16}} = 5^3 = 125
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem title="Extra-Long Numbers" level="hard">
      <ProblemDescription>
        <P>It is known that</P>
        <BlockMath>{math`
          438271606^2 = 192082000625819236
        `}</BlockMath>
        <P>
          Without squaring by hand, find the sum of the digits of <M>561728395^2</M>.
        </P>
      </ProblemDescription>
      <MathValueCheck answer={91} />
      <ProblemHint>First, find the sum of the given numbers themselves by hand, without squaring them.</ProblemHint>
      <ProblemHint>
        Using the <Dep on={diffOfSquares}>difference of squares</Dep> formula, find the square of the required number
        using the data you already know.
      </ProblemHint>
      <ProblemAnswer>
        <M>91</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>Let us look at the sum and difference of the original numbers, without squaring:</P>
        <BlockMath>438271606 + 561728395 = 1000000001 \\ 561728395 - 438271606 = 123456789</BlockMath>
        <P>Multiplying these two numbers is actually very easy:</P>
        <BlockMath>{math`
          (10000000000 + 1) \cdot 123456789 = 123456789 \cdot 1000000000 + 123456789 = 123456789000000000 + 123456789 = 123456789123456789
        `}</BlockMath>
        <P>
          By the <Dep on={diffOfSquares}>difference of squares</Dep>, we get the following situation:
        </P>
        <BlockMath>{math`
          123456789123456789 = 561728395^2 - 438271606^2
        `}</BlockMath>
        <P>
          Now it is easy to find <M>561728395^2</M> itself:
        </P>
        <BlockMath>{math`
          561728395^2 = 123456789123456789 + 438271606^2 = 123456789123456789 + 192082000625819236 = 315538789749275025
        `}</BlockMath>
        <P>All that remains is to find the sum of the digits of the resulting number:</P>
        <BlockMath>{math`
          3 + 1 + 5 + 5 + 3 + 8 + 7 + 8 + 9 + 7 + 4 + 9 + 2 + 7 + 5 + 0 + 2 + 5 = \boxed{91}
        `}</BlockMath>
      </ProblemSolution>
    </Problem>
  </>
));
