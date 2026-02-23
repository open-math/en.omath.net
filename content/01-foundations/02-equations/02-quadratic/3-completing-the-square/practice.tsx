import { mathRegexp } from '@open-math/shared/utils';
import { RootsCheck } from '#project/utils/roots';

import completeTheSquare from './scripts/complete-the-square';

const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;

const compactFormLabel = 'Compact form';

export default defineProse()(() => (
  <>
    <Problems title="Perfect square" level="easy">
      <P>Write as a perfect square:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + 2xy + y^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(x + y)^2', '(y + x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(x + y)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`x^2 + 2\cdot \underset{a}{x}\cdot \underset{b}{y} + y^2`}</BlockMath>
          <P>Factor as a square of a sum:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <P>
            <M>x</M> plays the role of <M>a</M>, and <M>y</M> plays the role of <M>b</M>. Then:
          </P>
          <BlockMath>{math`x^2 + 2xy + y^2 = (x+y)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`a^2 + 2a + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(a + 1)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(a + 1)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Rewrite the expression as:</P>
          <BlockMath>{math`a^2 + 2\cdot a\cdot \underset{b}{1} + 1^2`}</BlockMath>
          <P>And apply the square of a sum formula:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`a^2 + 2a + 1 = (a+1)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`n^2 + m^2 + 2mn`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(n + m)^2', '(m + n)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(n + m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`n^2 + 2\cdot \underset{a}{n}\cdot \underset{b}{m} + m^2`}</BlockMath>
          <P>Factor as a square of a sum:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`n^2 + m^2 + 2mn = (n+m)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`-2xy + x^2 + y^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(x - y)^2', '(y - x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(x - y)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`x^2 - 2\cdot \underset{a}{x}\cdot \underset{b}{y} + y^2`}</BlockMath>
          <P>Factor as a square of a difference:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`-2xy + x^2 + y^2 = (x-y)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`81 - 18t + t^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(9 - t)^2', '(t - 9)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(9 - t)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`9^2 - 2\cdot \underset{a}{9}\cdot \underset{b}{t} + t^2`}</BlockMath>
          <P>Factor as a square of a difference:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`81 - 18t + t^2 = (9-t)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`z^2 - 12z + 36`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(z - 6)^2', '(6 - z)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(z - 6)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`z^2 - 2\cdot \underset{a}{z}\cdot \underset{b}{6} + 6^2`}</BlockMath>
          <P>Factor as a square of a difference:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`z^2 - 12z + 36 = (z-6)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`49 + 14x + x^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(7 + x)^2', '(x + 7)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(7 + x)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`7^2 + 2\cdot \underset{a}{7}\cdot \underset{b}{x} + x^2`}</BlockMath>
          <P>Factor as a square of a sum:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`49 + 14x + x^2 = (7+x)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4i^2 - 4i + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(2i - 1)^2', '(1 - 2i)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(2i - 1)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(2i)^2 - 2\cdot \underset{a}{2i}\cdot \underset{b}{1} + 1^2`}</BlockMath>
          <P>Factor as a square of a difference:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`4i^2 - 4i + 1 = (2i-1)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`1 + 10x + 25x^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(1 + 5x)^2', '(5x + 1)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(1 + 5x)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`1^2 + 2\cdot \underset{a}{1}\cdot \underset{b}{5x} + (5x)^2`}</BlockMath>
          <P>Factor as a square of a sum:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`1 + 10x + 25x^2 = (1 + 5x)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`9x^2 - 6x + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(3x - 1)^2', '(1 - 3x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(3x - 1)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(3x)^2 - 2\cdot \underset{a}{3x}\cdot \underset{b}{1} + 1^2`}</BlockMath>
          <P>Factor as a square of a difference:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`9x^2 - 6x + 1 = (3x - 1)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`9 - 12x + 4x^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(3 - 2x)^2', '(2x - 3)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(3 - 2x)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`3^2 - 2\cdot \underset{a}{3}\cdot \underset{b}{2x} + (2x)^2`}</BlockMath>
          <P>Factor as a square of a difference:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`9 - 12x + 4x^2 = (3 - 2x)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`9x^2 + 30x + 25`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(3x + 5)^2', '(5 + 3x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(3x + 5)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(3x)^2 + 2\cdot \underset{a}{3x}\cdot \underset{b}{5} + 5^2`}</BlockMath>
          <P>Factor as a square of a sum:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`9x^2 + 30x + 25 = (3x + 5)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`9t^2 - 30tm + 25m^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(3t - 5m)^2', '(5m - 3t)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(3t - 5m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(3t)^2 - 2\cdot \underset{a}{3t}\cdot \underset{b}{5m} + (5m)^2`}</BlockMath>
          <P>Factor as a square of a difference:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`9t^2 - 30tm + 25m^2 = (3t - 5m)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`49 + 36y^2 + 84y`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(7 + 6y)^2', '(6y + 7)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(7 + 6y)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Rearrange the terms:</P>
          <BlockMath>{math`49 + 84y + 36y^2`}</BlockMath>
          <BlockMath>{math`7^2 + 2\cdot \underset{a}{7}\cdot \underset{b}{6y} + (6y)^2`}</BlockMath>
          <P>Factor as a square of a sum:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`49 + 36y^2 + 84y = (7 + 6y)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4 + 49x^2 - 28x`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(7x - 2)^2', '(2 - 7x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(7x - 2)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Rearrange the terms:</P>
          <BlockMath>{math`49x^2 - 28x + 4`}</BlockMath>
          <BlockMath>{math`(7x)^2 - 2\cdot \underset{a}{7x}\cdot \underset{b}{2} + 2^2`}</BlockMath>
          <P>Factor as a square of a difference:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`4 + 49x^2 - 28x = (7x - 2)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4n^2 + 36nm + 81m^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(2n + 9m)^2', '(9m + 2n)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(2n + 9m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(2n)^2 + 2\cdot \underset{a}{2n}\cdot \underset{b}{9m} + (9m)^2`}</BlockMath>
          <P>Factor as a square of a sum:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`4n^2 + 36nm + 81m^2 = (2n + 9m)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Complete square with a remainder" level="easy">
      <P>Complete the square:</P>

      <SubProblem label="Example">
        <ProblemDescription>
          <BlockMath>{math`
              1)\enspace m^2 - 24m >>
              2)\enspace x^2 - 11x >>
              3)\enspace t^2 + 5t - 6 >>
              4)\enspace 9x^2 - 5x + 7
          `}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Expression 1" answer={mathRegexp('(m - 12)^2 - 144')} />
        <ProblemCheck label="Expression 2" answer={mathRegexp('(x - 11/2)^2 - 121/4')} />
        <ProblemCheck label="Expression 3" answer={mathRegexp('(t + 5/2)^2 - 49/4')} />
        <ProblemCheck label="Expression 4" answer={mathRegexp('(3x - 5/6)^2 + 227/36')} />
        <ProblemHint>
          <P>Factor the existing expression as either a square of a sum or a square of a difference:</P>
          <BlockMath>{math`a^2 \pm 2ab + b^2 = (a\pm b)^2`}</BlockMath>
          <P>If you are missing some data, add it and immediately subtract it to keep the expression unchanged.</P>
          <BlockMath>{math`5 >>{big} \yellow{2} \cdot 5 \cdot \yellow{\frac{1}{2}} >>{big} 5 + \yellow{7} - \yellow{7}`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`
              1)\enspace (m - 12)^2 - 144 >>
              2)\enspace \left(x - \frac{11}{2}\right)^2 - \frac{121}{4} >>
              3)\enspace \left(t + \frac{5}{2}\right)^2 - \frac{49}{4} >>
              4)\enspace \left(3x - \frac{5}{6}\right)^2 + \frac{227}{36}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Expression 1">
            <P>
              The number <M>24</M> is even, so we can factor out a <M>2</M>. Therefore:
            </P>
            <BlockMath>{math`m^2 - 24m = m^2 - 2\cdot m\cdot 12`}</BlockMath>
            <P>
              To complete the square of the difference, we need <M>12^2</M>. Let's add and subtract it:
            </P>
            <BlockMath>{math`m^2 - 2\cdot m\cdot 12 + \yellow{12^2} - \yellow{12^2}`}</BlockMath>
            <BlockMath>{math`(m - 12)^2 - 144`}</BlockMath>
          </ProblemSection>

          <ProblemSection title="Expression 2">
            <P>
              We cannot factor out a <M>2</M> from <M>11</M>, so let's introduce it with compensation:
            </P>
            <BlockMath>{math`
              x^2 - \yellow{2}\cdot x\cdot 11\cdot \yellow{\frac{1}{2}} \\
              x^2 - 2\cdot x\cdot \frac{11}{2}
            `}</BlockMath>
            <P>
              For a complete square, we are missing <M>{math`\left(\frac{11}{2}\right)^2`}</M>. Let's add and subtract
              it:
            </P>
            <BlockMath>{math`
              x^2 - 2\cdot x\cdot \frac{11}{2} + \yellow{\left(\frac{11}{2}\right)^2} - \yellow{\left(\frac{11}{2}\right)^2}
            `}</BlockMath>
            <BlockMath>{math`\left(x - \frac{11}{2}\right)^2 - \frac{121}{4}`}</BlockMath>
          </ProblemSection>

          <ProblemSection title="Expression 3">
            <P>
              The number <M>5</M> is odd, we can't factor out a <M>2</M>, so let's introduce it:
            </P>
            <BlockMath>{math`
              t^2 + \yellow{2}\cdot t\cdot \frac{5}{2} - 6 \\
              t^2 + 2\cdot t\cdot \frac{5}{2} - 6
            `}</BlockMath>
            <P>
              For the square of the sum, we are missing <M>{math`\left(\frac{5}{2}\right)^2`}</M>. Let's add and
              subtract it:
            </P>
            <BlockMath>{math`
              t^2 + 2\cdot t\cdot \frac{5}{2} + \yellow{\left(\frac{5}{2}\right)^2} - \yellow{\left(\frac{5}{2}\right)^2} - 6
            `}</BlockMath>
            <BlockMath>{math`
              \left(t + \frac{5}{2}\right)^2 - \frac{25}{4} - 6
              = \left(t + \frac{5}{2}\right)^2 - \frac{49}{4}
            `}</BlockMath>
          </ProblemSection>

          <ProblemSection title="Expression 4">
            <P>First, represent the expression as:</P>
            <BlockMath>{math`(3x)^2 - 5x + 7`}</BlockMath>
            <P>
              In the term with <M>x</M>, we need to include both a <M>2</M> and a <M>3</M>. Let's introduce them with
              compensation:
            </P>
            <BlockMath>{math`
              (3x)^2 - \yellow{2}\cdot \yellow{3}x\cdot 5\cdot \yellow{\frac{1}{2}}\cdot \yellow{\frac{1}{3}} + 7 \\
              (3x)^2 - 2\cdot 3x\cdot \frac{5}{6} + 7
            `}</BlockMath>
            <P>
              For the square of the difference, we are missing <M>{math`\left(\frac{5}{6}\right)^2`}</M>. Let's add and
              subtract it:
            </P>
            <BlockMath>{math`
              (3x)^2 - 2\cdot 3x\cdot \frac{5}{6} + \yellow{\left(\frac{5}{6}\right)^2} - \yellow{\left(\frac{5}{6}\right)^2} + 7
            `}</BlockMath>
            <BlockMath>{math`
              \left(3x - \frac{5}{6}\right)^2 - \frac{25}{36} + 7
              = \left(3x - \frac{5}{6}\right)^2 + \frac{227}{36}
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Practice" script={completeTheSquare()} />
    </Problems>

    <Problems title="Quadratic equations via completing the square" level="easy">
      <P>Solve the equation by completing the square:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`u^2 + 2u = 3`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, -3]} />
        <ProblemAnswer>
          <P>
            Answer: <M>1</M> and <M>-3</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>3</M> from both sides:
          </P>
          <BlockMath>{math`u^2 + 2u - 3 = 0`}</BlockMath>
          <P>Complete the square:</P>
          <BlockMath>{math`(u + 1)^2 - 4 = 0`}</BlockMath>
          <P>
            Add <M>4</M> to both sides:
          </P>
          <BlockMath>{math`(u + 1)^2 = 4`}</BlockMath>
          <P>We get two sub-equations:</P>
          <BlockMath>{math`u_1 + 1 = 2 \quad \text{or} \quad u_2 + 1 = -2`}</BlockMath>
          <BlockMath>{math`\boxed{u_1 = 1} \quad \boxed{u_2 = -3}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`z^2 + 12z = -11`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-1, -11]} />
        <ProblemAnswer>
          <P>
            Answer: <M>-1</M> and <M>-11</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, add <M>11</M> to both sides:
          </P>
          <BlockMath>{math`z^2 + 12z + 11 = 0`}</BlockMath>
          <P>Complete the square:</P>
          <BlockMath>{math`(z + 6)^2 - 25 = 0`}</BlockMath>
          <BlockMath>{math`(z + 6)^2 = 25`}</BlockMath>
          <BlockMath>{math`z_1 + 6 = 5 \quad \text{or} \quad z_2 + 6 = -5`}</BlockMath>
          <BlockMath>{math`\boxed{z_1 = -1} \quad \boxed{z_2 = -11}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 - 21 = 20x`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[21, -1]} />
        <ProblemAnswer>
          <P>
            Answer: <M>21</M> and <M>-1</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>20x</M> from both sides:
          </P>
          <BlockMath>{math`x^2 - 20x - 21 = 0`}</BlockMath>
          <BlockMath>{math`(x - 10)^2 - 121 = 0`}</BlockMath>
          <BlockMath>{math`(x - 10)^2 = 121`}</BlockMath>
          <BlockMath>{math`x_1 - 10 = 11 \quad \text{or} \quad x_2 - 10 = -11`}</BlockMath>
          <BlockMath>{math`\boxed{x_1 = 21} \quad \boxed{x_2 = -1}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`-2y = 8 - y^2`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[4, -2]} />
        <ProblemAnswer>
          <P>
            Answer: <M>4</M> and <M>-2</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, add <M>2y</M> to both sides:
          </P>
          <BlockMath>{math`0 = -y^2 + 2y + 8`}</BlockMath>
          <P>
            Multiply both sides by <M>-1</M>:
          </P>
          <BlockMath>{math`0 = y^2 - 2y - 8`}</BlockMath>
          <BlockMath>{math`0 = (y - 1)^2 - 9`}</BlockMath>
          <BlockMath>{math`(y - 1)^2 = 9`}</BlockMath>
          <BlockMath>{math`y_1 - 1 = 3 \quad \text{or} \quad y_2 - 1 = -3`}</BlockMath>
          <BlockMath>{math`\boxed{y_1 = 4} \quad \boxed{y_2 = -2}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4m = -44 - m^2`}</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>
          <P>The equation has no solutions.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>4m</M> from both sides:
          </P>
          <BlockMath>{math`0 = -m^2 - 4m - 44`}</BlockMath>
          <P>
            Multiply both sides by <M>-1</M>:
          </P>
          <BlockMath>{math`0 = m^2 + 4m + 44`}</BlockMath>
          <BlockMath>{math`0 = (m + 2)^2 + 40`}</BlockMath>
          <P>
            The right side is the sum of a square and a positive number, it is always positive. We cannot make it equal
            to <M>0</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`a^2 + 5 = 10a`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['5+sqrt(20)', '5-sqrt(20)']} />
        <ProblemAnswer>
          <P>
            Answer: <M>5 + \sqrt{20}</M> and <M>5 - \sqrt{20}</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>10a</M> from both sides:
          </P>
          <BlockMath>{math`a^2 - 10a + 5 = 0`}</BlockMath>
          <BlockMath>{math`(a - 5)^2 - 20 = 0`}</BlockMath>
          <BlockMath>{math`(a - 5)^2 = 20`}</BlockMath>
          <BlockMath>{math`a_1 - 5 = \sqrt{20} \quad \text{or} \quad a_2 - 5 = -\sqrt{20}`}</BlockMath>
          <BlockMath>{math`\boxed{a_1 = 5 + \sqrt{20}} \quad \boxed{a_2 = 5 - \sqrt{20}}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`u^2 - 14u + 12 = -1`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[13, 1]} />
        <ProblemAnswer>
          <P>
            Answer: <M>13</M> and <M>1</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, add <M>1</M> to both sides:
          </P>
          <BlockMath>{math`u^2 - 14u + 13 = 0`}</BlockMath>
          <BlockMath>{math`(u - 7)^2 - 36 = 0`}</BlockMath>
          <BlockMath>{math`(u - 7)^2 = 36`}</BlockMath>
          <BlockMath>{math`u_1 - 7 = 6 \quad \text{or} \quad u_2 - 7 = -6`}</BlockMath>
          <BlockMath>{math`\boxed{u_1 = 13} \quad \boxed{u_2 = 1}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x+6)(x-2) = 9`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[3, -7]} />
        <ProblemAnswer>
          <P>
            Answer: <M>3</M> and <M>-7</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Expand the parentheses:</P>
          <BlockMath>{math`x^2 + 4x - 12 = 9`}</BlockMath>
          <P>
            By the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>9</M>:
          </P>
          <BlockMath>{math`x^2 + 4x - 21 = 0`}</BlockMath>
          <BlockMath>{math`(x + 2)^2 - 25 = 0`}</BlockMath>
          <BlockMath>{math`(x + 2)^2 = 25`}</BlockMath>
          <BlockMath>{math`x_1 + 2 = 5 \quad \text{or} \quad x_2 + 2 = -5`}</BlockMath>
          <BlockMath>{math`\boxed{x_1 = 3} \quad \boxed{x_2 = -7}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x-2)(x-6) = 5`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[7, 1]} />
        <ProblemAnswer>
          <P>
            Answer: <M>7</M> and <M>1</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Let's expand the parentheses:</P>
          <BlockMath>{math`x^2 - 8x + 12 = 5`}</BlockMath>
          <P>
            Using the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>5</M>:
          </P>
          <BlockMath>{math`x^2 - 8x + 7 = 0`}</BlockMath>
          <BlockMath>{math`(x - 4)^2 - 9 = 0`}</BlockMath>
          <BlockMath>{math`(x - 4)^2 = 9`}</BlockMath>
          <BlockMath>{math`x_1 - 4 = 3 \quad \text{or} \quad x_2 - 4 = -3`}</BlockMath>
          <BlockMath>{math`\boxed{x_1 = 7} \quad \boxed{x_2 = 1}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3m^2 + 30m - 27 = 6`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, -11]} />
        <ProblemAnswer>
          <P>
            Answer: <M>1</M> and <M>-11</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Using the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>6</M>:
          </P>
          <BlockMath>{math`3m^2 + 30m - 33 = 0`}</BlockMath>
          <P>
            Divide both sides by <M>3</M>:
          </P>
          <BlockMath>{math`m^2 + 10m - 11 = 0`}</BlockMath>
          <BlockMath>{math`(m + 5)^2 - 36 = 0`}</BlockMath>
          <BlockMath>{math`(m + 5)^2 = 36`}</BlockMath>
          <BlockMath>{math`m_1 + 5 = 6 \quad \text{or} \quad m_2 + 5 = -6`}</BlockMath>
          <BlockMath>{math`\boxed{m_1 = 1} \quad \boxed{m_2 = -11}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4x^2 - 3x = -10`}</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>
          <P>The equation has no solutions.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Using the <Dep on={sameActionRule}>same action rule</Dep>, add <M>10</M> to both sides:
          </P>
          <BlockMath>{math`4x^2 - 3x + 10 = 0`}</BlockMath>
          <BlockMath>{math`\left(2x - \frac{3}{4}\right)^2 = -\frac{151}{16}`}</BlockMath>
          <P>The right side is negative, but a square cannot be negative. There are no solutions.</P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Real-life Quadratic Equations" level="easy">
      <P>
        After such a long journey, it's finally time to deal with{' '}
        <Ref to={$CONTENT.foundations.equations.quadratic.whatIsIt.article.$problematicEquations}>
          real-life situations
        </Ref>{' '}
        where quadratic equations arise. Solve each of these problems.
      </P>
      <SubProblem label="The Naughty Garden">
        <ProblemDescription>
          <P>In the naughty garden problem, we arrived at the equation:</P>
          <BlockMath>x(x+5) = 36</BlockMath>
        </ProblemDescription>
        <RootsCheck has root={[6]} />
        <ProblemAnswer>
          The length of the shorter side of the garden is <M>6</M>, and the longer one is <M>11</M>. We used only the
          positive root, since the length of a side cannot be negative.
        </ProblemAnswer>
        <ProblemSolution>
          <P>Let's expand the parentheses:</P>
          <BlockMath>{math`x^2 + 5x = 36`}</BlockMath>
          <P>
            Using the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>36</M> from both sides:
          </P>
          <BlockMath>{math`x^2 + 5x - 36 = 0`}</BlockMath>
          <P>
            Let's complete the square. We are missing a factor of <M>2</M>, so let's introduce it with compensation:
          </P>
          <BlockMath>{math`
            x^2 + \yellow{2}\cdot x\cdot \yellow{\frac{1}{2}} \cdot 5 - 36 \\
            x^2 + 2\cdot x\cdot \frac{5}{2} + \yellow{\left(\frac{5}{2}\right)^2} - \yellow{\left(\frac{5}{2}\right)^2} - 36 \\
            \left(x + \frac{5}{2}\right)^2 - \frac{25}{4} - 36 \\
            \left(x + \frac{5}{2}\right)^2 - \frac{169}{4} = 0
          `}</BlockMath>
          <P>Isolate our complete square by getting rid of the fraction outside:</P>
          <BlockMath>{math`\left(x + \frac{5}{2}\right)^2 = \frac{169}{4}`}</BlockMath>
          <P>
            For convenience, denote the value inside the parentheses as <M>t</M>:
          </P>
          <BlockMath>{math`t^2 = \frac{169}{4}`}</BlockMath>
          <P>
            What fraction needs to be squared to get <M>169</M> in the numerator and <M>4</M> in the denominator? It's a
            fraction with numerator <M>13</M> and denominator <M>2</M>!
          </P>
          <BlockMath>{math`t = \frac{13}{2} \quad \text{or} \quad t = -\frac{13}{2}`}</BlockMath>
          <P>
            Returning to <M>x</M>, we get:
          </P>
          <BlockMath>{math`
            x + \frac{5}{2} = \frac{13}{2} \quad \text{or} \quad x + \frac{5}{2} = -\frac{13}{2} \\
            \boxed{x = 6} \quad \text{or} \quad \boxed{x = -9}
          `}</BlockMath>
          <P>
            Mathematically both roots are correct, but in the context of our physical problem about the real world, the
            side of the garden cannot be negative. Therefore, its side can only be equal to <M>6</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem label="The Impatient Cyclist">
        <ProblemDescription>
          <P>In this problem, we arrived at the equation:</P>
          <BlockMath>-v^2 - 2v + 120 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has root={[10]} />
        <ProblemAnswer>
          Answer: <M>10</M> km/h. The cyclist's speed cannot be negative, so we use only the positive root.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            First, multiply both sides of the equation by <M>-1</M> to remove the minus before <M>v^2</M>:
          </P>
          <BlockMath>v^2 + 2v - 120 = 0</BlockMath>
          <P>
            Here we can complete the square almost instantly. There is already a <M>2</M> in the middle term, so we just
            need a<M>1</M> as <M>b^2</M>. Add it and immediately subtract it:
          </P>
          <BlockMath>v^2 + 2v + 1 - 1 - 120 \\ (v + 1)^2 - 121 = 0 \\ (v + 1)^2 = 121</BlockMath>
          <P>
            Some number on the left was squared to get <M>121</M>. It's either <M>11</M> or <M>-11</M>.
          </P>
          <BlockMath>{math`
            v + 1 = 11 \quad \text{or} \quad v + 1 = -11 \\
            v = 10 \quad \text{or} \quad v = -12
          `}</BlockMath>
          <P>
            The cyclist's speed cannot be negative, so we use only the positive root. This means initially the cyclist
            was traveling at a speed of <M>10</M> km/h.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Picture Frame">
        <ProblemDescription>
          <P>In this problem, we arrived at the equation:</P>
          <BlockMath>4w^2 + 36w + 80 = 168</BlockMath>
        </ProblemDescription>
        <RootsCheck has root={[2]} />
        <ProblemAnswer>
          Answer: the frame width is <M>2</M> inches. The negative root doesn't fit since the width cannot be negative.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Using the <Dep on={sameActionRule}>same action rule</Dep>, subtract <M>168</M> from both sides:
          </P>
          <BlockMath>{math`4w^2 + 36w - 88 = 0`}</BlockMath>
          <P>
            Divide both sides by <M>4</M>:
          </P>
          <BlockMath>{math`w^2 + 9w - 22 = 0`}</BlockMath>
          <P>
            Let's complete the square. The center coefficient <M>9</M> is odd, so we add with compensation:
          </P>
          <BlockMath>{math`
            w^2 + \yellow{2} \cdot w \cdot \yellow{\frac{1}{2}} \cdot 9 - 22 \\
            w^2 + 2 \cdot w \cdot \frac{9}{2} + \yellow{\left(\frac{9}{2}\right)^2} - \yellow{\left(\frac{9}{2}\right)^2} - 22 \\
            \left(w + \frac{9}{2}\right)^2 - \frac{81}{4} - 22 \\
            \left(w + \frac{9}{2}\right)^2 - \frac{169}{4} = 0
          `}</BlockMath>
          <P>Isolate the complete square:</P>
          <BlockMath>{math`\left(w + \frac{9}{2}\right)^2 = \frac{169}{4}`}</BlockMath>
          <P>
            The fraction on the right can be obtained by squaring the fraction <M>{math`\frac{13}{2}`}</M> or{' '}
            <M>{math`\frac{-13}{2}`}</M>.
          </P>
          <BlockMath>{math`
            w + \frac{9}{2} = \frac{13}{2} \quad \text{or} \quad w + \frac{9}{2} = -\frac{13}{2} \\
            \boxed{w = 2} \quad \text{or} \quad \boxed{w = -11}
          `}</BlockMath>
          <P>
            The frame width cannot be negative, so the answer is: <M>w = 2</M> inches.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Problematic Perfect Square" level="medium">
      <P>Complete the square:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`7w^2 - 11w`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(\sqrt{7}w - \frac{11}{2\sqrt{7}}\right)^2 - \frac{121}{28}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`
            7w^2 - 11w \\
            (\sqrt{7}w)^2 - \yellow{2} \cdot \yellow{\sqrt{7}}w \cdot 11 \cdot \yellow{\frac{1}{2\sqrt{7}}} \\
            \underbrace{(\sqrt{7}w)^2 - 2 \cdot \sqrt{7}w \cdot \frac{11}{2\sqrt{7}} + \yellow{\left(\frac{11}{2\sqrt{7}}\right)^2}}_{a^2 - 2ab + b^2} - \yellow{\left(\frac{11}{2\sqrt{7}}\right)^2} \\
            \left(\sqrt{7}w - \frac{11}{2\sqrt{7}}\right)^2 - \frac{121}{28}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`2c^2 + c - 6`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(\sqrt{2}c + \frac{1}{2\sqrt{2}}\right)^2 - \frac{49}{48}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`
            2c^2 + c - 6 \\
            (\sqrt{2}c)^2 + \yellow{2} \cdot \yellow{\sqrt{2}}c \cdot \yellow{\frac{1}{2\sqrt{2}}} - 6 \\
            \underbrace{(\sqrt{2}c)^2 + 2 \cdot \sqrt{2}c \cdot \frac{1}{2\sqrt{2}} + \yellow{\left(\frac{1}{2\sqrt{2}}\right)^2}}_{a^2 + 2ab + b^2} - \yellow{\left(\frac{1}{2\sqrt{2}}\right)^2} - 6 \\
            \left(\sqrt{2}c + \frac{1}{2\sqrt{2}}\right)^2 - \frac{1}{8} - 6 \\
            \left(\sqrt{2}c + \frac{1}{2\sqrt{2}}\right)^2 - \frac{49}{48}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3t^2 - 5t + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(\sqrt{3}t - \frac{5}{2\sqrt{3}}\right)^2 + \frac{37}{12}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`
            3t^2 - 5t + 1 \\
            (\sqrt{3}t)^2 - \yellow{2} \cdot \yellow{\sqrt{3}}t \cdot 5 \cdot \yellow{\frac{1}{2\sqrt{3}}} + 1 \\
            \underbrace{(\sqrt{3}t)^2 - 2 \cdot \sqrt{3}t \cdot \frac{5}{2\sqrt{3}} + \yellow{\left(\frac{5}{2\sqrt{3}}\right)^2}}_{a^2 - 2ab + b^2} - \yellow{\left(\frac{5}{2\sqrt{3}}\right)^2} - 1 \\
            \left(\sqrt{3}t - \frac{5}{2\sqrt{3}}\right)^2 - \frac{25}{12} - 1 \\
            \left(\sqrt{3}t - \frac{5}{2\sqrt{3}}\right)^2 - \frac{37}{12}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Minimum and Maximum" level="medium" method>
      <SubProblem>
        <ProblemDescription>
          <P>
            Find the minimum of the expression and the <M>x</M> value at which it is achieved:
          </P>
          <BlockMath>{math`4x^2 + 28x + 69`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          Complete the square and study what needs to be done with this square to obtain the minimum.
        </ProblemHint>
        <ProblemAnswer>
          <P>
            The minimum is <M>20</M> at <M>{math`x = -\frac{7}{2}`}</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Let's complete the square:</P>
          <BlockMath>{math`(2x + 7)^2 + 20`}</BlockMath>
          <P>
            The square is non-negative, so the minimum is achieved when <M>(2x+7)^2 = 0</M>.
          </P>
          <BlockMath>{math`2x + 7 = 0 \Rightarrow \boxed{x = -\frac{7}{2}}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Find the maximum of the expression and the <M>y</M> value at which it is achieved:
          </P>
          <BlockMath>{math`-49y^2 + 28y + 7`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          <P>Factor out the minus sign. Then proceed as in the first item.</P>
        </ProblemHint>
        <ProblemAnswer>
          <P>
            The maximum is <M>11</M> at <M>{math`y = \frac{2}{7}`}</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Let's factor out the minus sign:</P>
          <BlockMath>{math`-1 \cdot (49y^2 - 28y - 7)`}</BlockMath>
          <P>Let's complete the square:</P>
          <BlockMath>{math`-1 \cdot \left[(7y - 2)^2 - 11\right]`}</BlockMath>
          <P>Return the minus into the parentheses:</P>
          <BlockMath>{math`11 - (7y - 2)^2`}</BlockMath>
          <P>To get the maximum, we need to minimize the square. The minimum of a square is zero:</P>
          <BlockMath>{math`(7y - 2)^2 = 0 \Rightarrow 7y - 2 = 0 \Rightarrow \boxed{y = \frac{2}{7}}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Completing the square formula" level="hard">
      <SubProblem label="Formula">
        <ProblemDescription>
          <P>Derive the general formula for completing the square for any quadratic trinomial:</P>
          <BlockMath>{math`Ax^2 + Bx + C,\enspace A \neq 0`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          <P>
            Ignore <M>C</M> for a moment and complete the square for <M>Ax^2 + Bx</M>.
          </P>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`
            Ax^2 + Bx + C = \left(\sqrt{A}x + \frac{B}{2\sqrt{A}}\right)^2 - \frac{B^2 - 4AC}{4A},\enspace A > 0
          `}</BlockMath>
          <P>
            If <M>A&lt;0</M>, you can factor out <M>-1</M> and apply the formula to the positive coefficient.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`
            Ax^2 + Bx + C \\
            (\sqrt{A}x)^2 + \yellow{2} \cdot \yellow{\sqrt{A}}x \cdot B \cdot \yellow{\frac{1}{2\sqrt{A}}} + C \\
            \underbrace{(\sqrt{A}x)^2 + 2\cdot \sqrt{A}x \cdot \frac{B}{2\sqrt{A}} + \yellow{\left(\frac{B}{2\sqrt{A}}\right)^2}}_{a^2 \pm 2ab + b^2} - \yellow{\left(\frac{B}{2\sqrt{A}}\right)^2} + C \\
            \left(\sqrt{A}x + \frac{B}{2\sqrt{A}}\right)^2 - \frac{B^2}{4A} + C \\
            \left(\sqrt{A}x + \frac{B}{2\sqrt{A}}\right)^2 - \frac{B^2 - 4AC}{4A}
          `}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          <P>
            It might seem that the resulting general formula is complicated and useless. When completing the square or
            solving quadratic equations is done by a <B>human</B>, it is indeed unnecessary. It is always easier to
            analyze a specific trinomial than to keep this monstrosity in your head.
          </P>
          <P>
            However, if you need to write a computer program to generate problems on completing the square or solving
            quadratic equations, it would be very difficult to "teach" the computer all the nuances of this process. But
            with the general formula, the task becomes trivial -- if the coefficients are known (and they are), you can
            instantly complete the square!
          </P>
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Using the general formula, complete the square:</P>
          <BlockMath>{math`z^2 - 10z + 11`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(z - 5\right)^2 - 14`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Coefficients: <M>A=1</M>, <M>B=-10</M>, <M>C=11</M>.
          </P>
          <BlockMath>{math`
            \left(z + \frac{-10}{2}\right)^2 - \frac{(-10)^2 - 4\cdot 1\cdot 11}{4\cdot 1}
            = \left(z - 5\right)^2 - \frac{100 - 44}{4}
            = \left(z - 5\right)^2 - 14
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Using the general formula, complete the square:</P>
          <BlockMath>{math`7t^2 - 11t + 2`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(\sqrt{7}t - \frac{11}{2\sqrt{7}}\right)^2 - \frac{65}{28}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Coefficients: <M>A=7</M>, <M>B=-11</M>, <M>C=2</M>.
          </P>
          <BlockMath>{math`
            \left(\sqrt{7}t + \frac{-11}{2\sqrt{7}}\right)^2 - \frac{(-11)^2 - 4\cdot 7\cdot 2}{4\cdot 7}
            = \left(\sqrt{7}t - \frac{11}{2\sqrt{7}}\right)^2 - \frac{121 - 56}{28}
            = \left(\sqrt{7}t - \frac{11}{2\sqrt{7}}\right)^2 - \frac{65}{28}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Using the general formula, complete the square:</P>
          <BlockMath>{math`-3g^2 - 4g + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\frac{7}{3} - \left(\sqrt{3}g + \frac{2}{\sqrt{3}}\right)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Factor out the minus sign:</P>
          <BlockMath>{math`-(3g^2 + 4g - 1)`}</BlockMath>
          <P>
            Inside: <M>A=3</M>, <M>B=4</M>, <M>C=-1</M>.
          </P>
          <BlockMath>{math`
            \left(\sqrt{3}g + \frac{4}{2\sqrt{3}}\right)^2 - \frac{4^2 - 4\cdot 3\cdot (-1)}{4\cdot 3}
            = \left(\sqrt{3}g + \frac{2}{\sqrt{3}}\right)^2 - \frac{16 + 12}{12}
            = \left(\sqrt{3}g + \frac{2}{\sqrt{3}}\right)^2 - \frac{7}{3}
          `}</BlockMath>
          <P>Return the minus:</P>
          <BlockMath>{math`\frac{7}{3} - \left(\sqrt{3}g + \frac{2}{\sqrt{3}}\right)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Not so straightforward" level="hard">
      <ProblemDescription>
        <P>When completing the square, we implicitly take roots. But taking a root can lead to different results:</P>
        <BlockMath>{math`
          4x^2 + 2\cdot 2x \cdot 3 + 9 \\
          \left(\sqrt{4x^2}\right)^2 + 2\cdot \sqrt{4x^2} \cdot \sqrt{9} + \left(\sqrt{9}\right)^2 \\
          (\pm 2x)^2 + 2\cdot 2x \cdot 3 + (\pm 3)^2
        `}</BlockMath>
        <P>
          Where do all these signs go, and why can we complete the square normally? Prove that we can ignore the
          ambiguity of taking roots and complete the square without messing with signs.
        </P>
      </ProblemDescription>
      <ProblemSolution>
        <P>
          When we expand an expression, this process is <B>unambiguous</B> and cannot lead to different results. There
          is always one answer:
        </P>

        <Diagram>{math`
          flowchart LR
            packed["**Factored form**<br>$$ (2x + 3)^2 $$"] -->|Unambiguously| unpacked["**Expanded form**<br>$$ 4x^2 + 2\cdot 2x \cdot 3 + 9 $$"]
        `}</Diagram>

        <P>
          But "completing the square" is the reverse process. The factored form is unknown to us in advance, and during
          the search, "versions" with different sign options indeed appear (because these signs are neutralized by
          squaring):
        </P>

        <Diagram>{math`
          flowchart TD
            unpacked["**Expanded form**<br>$$ 4x^2 + 2\cdot 2x \cdot 3 + 9 $$"] -->|Variant $++$| variant1["$$ (2x)^2 + 2\cdot 2x \cdot 3 + (3)^2 $$"]
            variant1 --> packed["**Factored form**<br>$$ (2x + 3)^2 $$"]
            unpacked -->|Variant $-+$| variant2["$$ (-2x)^2 + 2\cdot 2x \cdot 3 + 3^2 $$"]
            unpacked -->|Variant $+-$| variant3["$$ (2x)^2 + 2\cdot 2x \cdot 3 + (-3)^2 $$"]
            unpacked -->|Variant $--$| variant4["$$ (-2x)^2 + \underbrace{2\cdot 2x \cdot 3}_{\small 2\cdot (-2x) \cdot (-3)} + (-3)^2 $$"] --> packed2["**Factored form**<br>$$ (-2x - 3)^2 $$"]
            packed2 --> packed
        `}</Diagram>

        <P>
          As we can see, there are actually <B>two</B> "factored" forms leading us to the same "expanded" expression.
          However, they are essentially the same thing:
        </P>

        <BlockMath>{math`
          (-2x - 3)^2 = \left[(-1)\cdot(2x+3)\right]^2 = (-1)^2(2x+3)^2 = (2x+3)^2 \\
          (-2x-3)^2 = (2x+3)^2
        `}</BlockMath>

        <P>
          So, two out of four variants always lead to the same "factored" form. The remaining two variants are{' '}
          <B>also correct</B> mathematically, they reduce to the "expanded" expression, but they are not suitable for
          further simplification because they do not satisfy the square of a sum or difference formula!
        </P>

        <P>
          This can be compared to detective work. We start at the end point, when the crime has{' '}
          <B>already been committed</B> and we have the "expanded" expression. While unraveling the crime, we get
          versions (those four variants).
        </P>

        <P>
          For example, the criminal could have entered through the door (versions <M>++</M> or <M>--</M>) or climbed
          through the window (versions <M>-+</M> or <M>+-</M>). All four versions lead to the committed crime. But two
          are false, lead us to a dead end, we find no evidence outside the window, and we lose the criminal, the
          "factored" form. And two allow us to get to the truth and investigate the case.
        </P>

        <P>
          But can we just turn a blind eye to all this ambiguity with signs and leave only the variant with pluses? Yes,
          we can. As we have already shown, the variant with a minus leads us to the same form as the variant with a
          plus. And the remaining two variants will always contradict the middle term <M>2\cdot 2x \cdot 3</M> and it
          won't be possible to factor them using perfect square formulas.
        </P>
      </ProblemSolution>
    </Problem>
  </>
));
