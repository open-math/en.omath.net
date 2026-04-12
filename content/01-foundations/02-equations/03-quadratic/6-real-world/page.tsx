import { authorContribution } from '#project/utils/contributions';

// #region Assets
//
//

import boxSketch from './assets/box-sketch.svg';
import riverRide from './assets/river-ride.svg';
import steelFrame from './assets/steel-frame.svg';
import pisaExperiment from './assets/pisa-experiment.svg';
import hammerFeather from './assets/hammer-feather.mp4';
import circuit from './assets/circuit.svg';

//
//
// #endregion

// #region Links
//
//

const discriminant = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$discriminant;
const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;
const evenQuadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.practice.$evenB;
const manualFactoring = $CONTENT.foundations.equations.quadratic.factoring.article.$manualFactoring;

//
//
// #endregion

export const page = definePage({
  title: 'Quadratic Equations in Real Life',
  navTitle: 'Real Life',
  description: `
    Examples of quadratic equations showing up in all sorts of places:
    everyday life, physics, work problems, solutions, mixtures, alloys, and of course mathematics itself.
    All problems come with detailed solutions and answers.
  `,
  flags: {
    secondary: true,
  },
  externals: [
    {
      type: 'web',
      title: '101 uses of a quadratic equation, part II',
      info: 'Plus Magazine',
      link: 'https://plus.maths.org/101-uses-quadratic-equation-part-ii',
      reason: 'A useful collection of extra real-world quadratic-equation examples and applications.',
    },
  ],
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});

export const content = defineProse({
  uniques: {
    _whyNotReal: Details,
  },
})(({ uniques }) => (
  <>
    <P>
      All uses, applications, and benefits of quadratic equations in "real life" can be roughly split into two types:
    </P>

    <List ordered>
      <Li>
        <B>Puzzles</B> -- you take a real situation and real data, then deliberately cook up the conditions and
        questions so the answer comes from solving a quadratic equation. In other words, if you were naturally solving
        that real problem, you would not end up at a quadratic equation. That will probably annoy you, but <B>most</B>{' '}
        so-called real-life quadratic problems are exactly this kind of specially rigged puzzle stuffed into a
        "real-world" wrapper.
      </Li>
      <Li>
        <B>Real problems</B> -- no caveats, no cheating. These are genuine situations that are directly described by
        quadratic equations. You actually can arrive at those equations naturally while solving a real task. There are
        far fewer examples like that, but they do exist, and we will look at them here too, so relax.
      </Li>
    </List>

    <P>
      So why the hell do we even need these "puzzles" if they have no practical use? They do have a use, just mostly for
      you personally -- they are solid, varied training for your ability to turn text and sneaky conditions into
      formulas. And overall, even these puzzles show that quadratic equations are not some detached nonsense floating
      away from reality. They do show up in real situations, just usually only if the conditions are chosen cunningly.
    </P>

    <H1
      snippet={{
        key: true,
        seo: 'Household problems with quadratic equations',
        description: `
          Examples of everyday household problems that lead to quadratic equations, with detailed solutions and answers.
        `,
      }}
    >
      Household Problems
    </H1>

    <P>
      Quadratic equations hide in daily life damn near everywhere: cardboard boxes, walkways, shopping trips, and so
      on... Yeah, most of these problems are still "puzzles". But there are also some nice exceptions -- situations from
      actual life that naturally reduce to quadratic equations.
    </P>

    <Problem title="What's in the Box?!" level="easy">
      <ProblemDescription>
        <P>
          A sheet of cardboard measuring <M>40</M> cm by <M>30</M> cm is used to make a box whose base area must be{' '}
          <M>936</M> square centimeters. To do that, identical square pieces are cut from each corner. Find the side
          length of each cut-out square.
        </P>
        <Image src={boxSketch} width="650px" />
      </ProblemDescription>
      <MathValueCheck label="Side length of cut square" answer={2} />
      <ProblemHint>
        Write expressions for the box base sides by subtracting the side length of the cut square twice from each side
        of the original cardboard.
      </ProblemHint>
      <ProblemAnswer>
        The side length of each cut-out square is <M>2</M> cm.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let the side of the cut square be <M>x</M>. The longer side of the box base comes from the longer cardboard
          side after subtracting <M>x</M> twice:
        </P>
        <BlockMath>{math`40 - x - x = 40 - 2x`}</BlockMath>
        <P>
          Same story for the shorter side: it becomes <M>30 - 2x</M>. Multiply those sides and you get the base area,
          which the problem already gave us.
        </P>
        <BlockMath>{math`
          (40 - 2x)(30 - 2x) = 936 \\
          (20 - x)(30 - 2x) = 468 \\
          (20 - x)(15 - x) = 234 \\
          300 - 35x + x^2 = 234 \\
          x^2 - 35x + 66 = 0
        `}</BlockMath>
        <P>
          We got a quadratic equation with simple coefficients. You can{' '}
          <Dep on={manualFactoring}>factor it by hand</Dep>. We need two negative numbers whose sum is <M>-35</M> and
          whose product is <M>66</M>. Those numbers are <M>-33</M> and <M>-2</M>.
        </P>
        <BlockMath>{math`
          (x - 33)(x - 2) = 0
        `}</BlockMath>
        <P>
          That gives two possible side lengths for the cut squares: <M>33</M> cm or <M>2</M> cm. Obviously <M>33</M> cm
          is absurdly large because it is bigger than the smaller side of the whole sheet, so the correct answer is{' '}
          <M>2</M> cm.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Standard Frames" level="easy">
      <ProblemDescription>
        <P>
          After doomscrolling the news and catching the trend, you decide to launch a new business making sturdy steel
          frames. To reduce the weight and price, you decide the frame cross-section area should be <M>120</M> square
          centimeters. The inner dimensions of the frame are <M>4</M> cm in height and <M>6</M> cm in width. How thick
          should the frame be?
        </P>
        <Image src={steelFrame} width="500px" />
      </ProblemDescription>
      <MathValueCheck label="Frame thickness" answer={3} />
      <ProblemHint>
        You can find the frame area using the area formula for a rectangle, but you have to add the unknown thickness
        twice to each side because the frame exists on both sides.
      </ProblemHint>
      <ProblemAnswer>
        The frame thickness should be <M>3</M> centimeters.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          We find the frame area using the rectangle area formula, but we account for the frame thickness. Let the frame
          thickness be <M>x</M> centimeters. Then the full height becomes <M>4 + 2x</M> centimeters, and the full width
          becomes <M>6 + 2x</M> centimeters. So the frame area is:
        </P>
        <BlockMath>{math`
          S = (4 + 2x)(6 + 2x)
        `}</BlockMath>
        <P>
          Since the frame area must be <M>120</M> square centimeters, we write the equation:
        </P>
        <BlockMath>{math`
          120 = (4 + 2x)(6 + 2x)
        `}</BlockMath>
        <P>Expand the right-hand side and combine like terms:</P>
        <BlockMath>{math`
          120 = 24 + 8x + 12x + 4x^2 \\
          120 = 24 + 20x + 4x^2
        `}</BlockMath>
        <P>
          Subtract <M>120</M> from both sides:
        </P>
        <BlockMath>{math`
          120 - 120 = 24 + 20x + 4x^2 - 120 \\
          0 = 4x^2 + 20x - 96
        `}</BlockMath>
        <P>
          Divide both sides by <M>4</M> to simplify the coefficients:
        </P>
        <BlockMath>{math`
          0 = x^2 + 5x - 24
        `}</BlockMath>
        <P>
          We got a quadratic equation with simple coefficients. You can{' '}
          <Dep on={manualFactoring}>factor it by hand</Dep>. We need two numbers whose sum is <M>5</M> and whose product
          is <M>-24</M>. Those numbers are <M>8</M> and <M>-3</M>.
        </P>
        <BlockMath>{math`
          (x + 8)(x - 3) = 0
        `}</BlockMath>
        <P>
          So the frame thickness must be <M>3</M> centimeters. The second root, <M>-8</M>, is still a solution of the
          equation in pure math terms, but it does not work here because thickness cannot physically be negative.
        </P>
        <P>
          This is a great example of how the real world puts restrictions on a problem while mathematics knows nothing
          about those restrictions. Once we translate a real-life situation into equations, we get "clean" mathematics,
          and it honestly gives every possible solution. But not all of them mean anything physically. That is why after
          solving an equation, you always need to check the answers against reality. Negative frame thickness is just
          not a thing in the physical world.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="A View to Remember" level="easy">
      <ProblemDescription>
        <P>
          A city square plans to install a large rectangular airplane model measuring <M>8</M> by <M>12</M> meters.
          Around it, workers need to lay a walkway of paving stones with the same width everywhere so lots of people can
          admire the thing at once. The total area of the installation together with the walkway must be twice the area
          of the model itself. Find the width of the walkway.
        </P>
      </ProblemDescription>
      <MathValueCheck label="Walkway width" answer={2} />
      <ProblemHint>
        If the walkway width is <M>x</M>, then each side of the installation increases by <M>2x</M>, since the walkway
        appears on both sides of the sculpture.
      </ProblemHint>
      <ProblemAnswer>
        The walkway width is <M>2</M> meters.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let the walkway width be <M>x</M>. The walkway surrounds the sculpture from all sides, so each side grows by{' '}
          <M>x</M> on both ends. That means the total dimensions become <M>(8 + 2x)</M> by <M>(12 + 2x)</M>.
        </P>
        <P>
          The area of the sculpture itself is <M>8 \cdot 12 = 96</M> square meters. The problem says the final area must
          be twice that, so <M>2 \cdot 96 = 192</M> square meters. Write the equation:
        </P>
        <BlockMath>{math`
          (8 + 2x)(12 + 2x) = 192
        `}</BlockMath>
        <P>Expand and simplify:</P>
        <BlockMath>{math`
          96 + 16x + 24x + 4x^2 = 192 \\
          4x^2 + 40x + 96 = 192 \\
          4x^2 + 40x - 96 = 0
        `}</BlockMath>
        <P>
          Divide both sides by <M>4</M>:
        </P>
        <BlockMath>{math`
          x^2 + 10x - 24 = 0
        `}</BlockMath>
        <P>
          We got a quadratic equation with simple coefficients. You can{' '}
          <Dep on={manualFactoring}>factor it by hand</Dep>. Coefficient <M>C</M> is negative, so one number must be
          positive and the other negative. The numbers <M>12</M> and <M>-2</M> work because they add up to <M>10</M> and
          multiply to <M>-24</M>. So:
        </P>
        <BlockMath>{math`
          (x + 12)(x - 2) = 0
        `}</BlockMath>
        <P>
          That gives two options: <M>x = -12</M> or <M>x = 2</M>. Negative width is nonsense, so the walkway width
          around the sculpture is <M>2</M> meters.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Buying Cookies" level="medium">
      <ProblemDescription>
        Two classes were each given <M>840</M> rubles to buy cookies. One class bought one more package because their
        cookies were <M>20</M> rubles cheaper. How many cookie packages did each class buy?
      </ProblemDescription>
      <MathValueCheck label="Number of cookie packages" answers={[6, 7]} />
      <ProblemHint>
        Set up an equation using the fact that the first class bought <M>N_1</M> packages, and the second bought one
        more, that is, <M>N_2 = N_1 + 1</M>.
      </ProblemHint>
      <ProblemAnswer>
        The first class bought <M>6</M> cookie packages, and the second class bought <M>7</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          The easiest thing to grab onto here is the number of cookie packages. Let the first class buy <M>N_1</M>{' '}
          packages. The second class buys <M>N_2</M> packages. We know the second class bought one more package than the
          first, so:
        </P>
        <BlockMath>N_2 = N_1 + 1</BlockMath>
        <P>
          The number of cookie packages equals the amount of money divided by the price of one package. Let <M>P</M> be
          the package price for the first class. Then the cheaper packages bought by the second class cost <M>P - 20</M>
          .
        </P>
        <BlockMath>{math`
          \frac{840}{P - 20} = \frac{840}{P} + 1
        `}</BlockMath>
        <P>
          We got an equation with one variable. Let's solve it. First multiply both sides by <M>P(P - 20)</M>:
        </P>
        <BlockMath>840P = 840(P - 20) + P(P - 20)</BlockMath>
        <P>Simplify:</P>
        <BlockMath>{math`
          \cancel{840P} = \cancel{840P} - 20 \cdot 840 + P^2 - 20P \\
          0 = - 20 \cdot 840 + P^2 - 20P \\
          0 = P^2 - 20P - 20 \cdot 840
        `}</BlockMath>
        <P>
          Once again coefficient <M>B</M> is even, so we can use the{' '}
          <Dep on={evenQuadraticFormula}>simplified quadratic formula</Dep>:
        </P>
        <BlockMath>{math`
          P = -(-10) \pm \sqrt{(-10)^2 - (-20\cdot 840)} = 10 \pm \sqrt{100 + 2 \cdot 84 \cdot 100} = 10 \pm \sqrt{100(1 + 168)} = 10 \pm \sqrt{100}\sqrt{169} = 10 \pm 130
        `}</BlockMath>
        <P>
          The possible prices are <M>P = 140</M> or <M>P = -120</M>. Negative price is bullshit, so <M>P = 140</M>. That
          is the more expensive package. Now find how many packages the first class bought:
        </P>
        <BlockMath>{math`
          N_1 = \frac{840}{140} = 6
        `}</BlockMath>
        <P>
          The second class bought one more package, so <M>N_2 = 7</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Age Problems..." level="hard">
      <ProblemDescription>
        Six years ago, Paul's age was equal to twice the square of Anna's age. In four years, Anna's age will be one
        fourth of Paul's age. How old are Paul and Anna now?
      </ProblemDescription>
      <MathValueCheck label="Paul and Anna's ages" answers={[56, 11]} />
      <ProblemHint>
        When you set up equations about the past or the future, remember that both ages differ from the current ages by
        however many years you move backward or forward.
      </ProblemHint>
      <ProblemHint>
        This is a real-world problem, so in both situations the ages of Paul and Anna must be positive numbers.
      </ProblemHint>
      <ProblemAnswer>
        Paul is now <M>56</M> years old, and Anna is <M>11</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let Paul's age be <M>p</M> and Anna's age be <M>a</M>. Translate the first sentence into an equation, keeping
          in mind that six years must be subtracted from both ages:
        </P>
        <BlockMath>p-6 = 2(a-6)^2</BlockMath>
        <P>Now write the equation for the second sentence:</P>
        <BlockMath>{math`
          a + 4 = \frac{1}{4}(p + 4) \\
          4a + 16 = p + 4
        `}</BlockMath>
        <P>
          Actually, let's reshape that equation a bit so the right side becomes <M>p - 6</M>, which we can substitute
          into the first one. Subtract <M>10</M> from both sides:
        </P>
        <BlockMath>{math`
          4a + 16 - 10 = p + 4 - 10 \\
          4a + 6 = p - 6
        `}</BlockMath>
        <P>
          In the first equation, replace <M>p - 6</M> with <M>4a + 6</M>:
        </P>
        <BlockMath>{math`
          4a + 6 = 2(a - 6)^2 \\
          4a + 6 = 2(a^2 - 12a + 36) \\
          4a + 6 = 2a^2 - 24a + 72 \\
          0 = 2a^2 - 28a + 66 \\
        `}</BlockMath>
        <P>
          We got a quadratic equation. Divide both sides by <M>2</M> to simplify it:
        </P>
        <BlockMath>{math`
          0 = a^2 - 14a + 33
        `}</BlockMath>
        <P>
          Coefficient <M>A</M> is <M>1</M>, and the other numbers are simple. So try manual factoring. Since <M>B</M> is
          negative and <M>C</M> is positive, both numbers should be negative. Those numbers are <M>-11</M> and <M>-3</M>{' '}
          because their sum is <M>-14</M> and their product is <M>33</M>.
        </P>
        <BlockMath>(a - 11)(a - 3) = 0</BlockMath>
        <P>
          So Anna could be <M>11</M> years old or <M>3</M> years old. She cannot be <M>3</M>, because then six years ago
          she would not even exist and the whole problem would be idiotic. So the only option left is that Anna is now{' '}
          <M>11</M>. Plug that into any convenient equation above, for example <M>4a + 6 = p - 6</M>, and find Paul's
          age:
        </P>
        <BlockMath>{math`
          4 \cdot 11 + 6 = p - 6 \\
          44 + 6 = p - 6 \\
          50 = p - 6 \\
          p = 56
        `}</BlockMath>
        <P>
          So Paul is <M>56</M> years old and Anna is <M>11</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="The Perfectionist's Garden" level="hard">
      <ProblemDescription>
        In a city park there is a large rectangular flower bed measuring <M>10</M> meters by <M>15</M> meters. The park
        owner, being a perfectionist, wants to plant <M>36</M> flowers on this bed so that the equal spacing between the
        flowers along the longer side is <M>1</M> meter greater than along the shorter side. Find the spacing between
        the flowers along each side.
      </ProblemDescription>
      <MathValueCheck label="Spacing between flowers" answers={[2, 3]} />
      <ProblemHint>
        To find the spacing between flowers, divide the side length by the number of flowers <B>minus one!</B> The
        number of gaps between flowers on a side is always one less than the number of flowers planted along that side.
      </ProblemHint>
      <ProblemAnswer>
        The spacing along the longer side is <M>3</M> meters, and along the shorter side it is <M>2</M> meters.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let <M>x</M> be the number of flowers along the longer side and <M>y</M> the number along the shorter side.
          The product of these numbers must equal the total number of flowers, so <M>xy = 36</M>.
        </P>
        <P>Now calculate the spacing along each side:</P>
        <BlockMath>{math`
          \frac{15}{x-1} >>{big} \frac{10}{y-1}
        `}</BlockMath>
        <P>
          We subtract one because the number of gaps between flowers on a side is always one less than the number of
          flowers along that side. Two flowers have just one gap between them, for example.
        </P>
        <P>
          The problem says the larger spacing, the one with <M>x</M>, is <M>1</M> meter greater than the smaller one. So
          write:
        </P>
        <BlockMath>{math`
          \frac{15}{x-1} = \frac{10}{y-1} + 1
        `}</BlockMath>
        <P>
          From <M>xy = 36</M>, express <M>y</M> through <M>x</M>: <M>{math`y = \frac{36}{x}`}</M>. Substitute that into
          the equation:
        </P>
        <BlockMath>{math`
          \frac{15}{x-1} = \frac{10}{\frac{36}{x}-1} + 1 \\
          \frac{15}{x-1} = \frac{10}{\frac{36-x}{x}} + 1 \\
          \frac{15}{x-1} = \frac{10x}{36-x} + 1
        `}</BlockMath>
        <P>
          Multiply both sides by <M>(x-1)(36-x)</M> to kill the fractions:
        </P>
        <BlockMath>{math`
          15(36-x) = 10x(x-1) + (x-1)(36-x)
        `}</BlockMath>
        <P>Expand and simplify:</P>
        <BlockMath>{math`
          540 - 15x = 10x^2 - 10x + 36x - x^2 - 36 + x \\
          540 - 15x = 9x^2 + 27x - 36 \\
          0 = 9x^2 + 42x - 576
        `}</BlockMath>
        <P>
          Divide both sides by <M>3</M>:
        </P>
        <BlockMath>{math`
          3x^2 + 14x - 192 = 0
        `}</BlockMath>
        <P>
          Coefficient <M>B = 14</M> is even, so use the{' '}
          <Dep on={evenQuadraticFormula}>simplified quadratic formula</Dep>:
        </P>
        <BlockMath>{math`
          x = \frac{-7 \pm \sqrt{7^2 - 3 \cdot (-192)}}{3} = \frac{-7 \pm \sqrt{49 + 576}}{3} = \frac{-7 \pm \sqrt{625}}{3} = \frac{-7 \pm 25}{3}
        `}</BlockMath>
        <P>
          This gives <M>x = 6</M> and <M>{math`x = -\frac{32}{3}`}</M>. A negative number of flowers makes no sense, so{' '}
          <M>x = 6</M>. Then:
        </P>
        <BlockMath>{math`
          y = \frac{36}{x} = \frac{36}{6} = 6
        `}</BlockMath>
        <P>
          So there are <M>6</M> flowers along each side. But the spacing differs. Let's compute it:
        </P>
        <BlockMath>{math`
          \frac{15}{6-1} = \frac{15}{5} = 3 >>{big} \frac{10}{6-1} = \frac{10}{5} = 2
        `}</BlockMath>
        <P>
          The spacing along the longer side is <M>3</M> meters, and along the shorter side it is <M>2</M> meters. The
          difference really is <M>1</M> meter.
        </P>
      </ProblemSolution>
    </Problem>

    <H1
      snippet={{
        key: true,
        seo: 'Where are quadratic equations used in physics?',
        description: `
          Examples of physics problems that reduce to quadratic equations, with detailed solutions and answers.
        `,
      }}
    >
      Physics
    </H1>

    <P>
      A lot of people hate physics, and that is a shame. Physics gives you one of the biggest piles of examples of
      situations and problems that reduce to quadratic equations. And you get both kinds here: genuinely real problems
      and the usual cleverly staged "puzzles".
    </P>

    <H2>Motion with Acceleration</H2>

    <P>
      When forces act on objects, their speed changes: a soccer ball kicked by a foot, a snowball thrown by hand, a bow
      string launching an arrow, or Earth's gravity speeding up a hammer falling downward. This change in speed can be
      measured. "The speed at which speed changes" sounds weird, but that quantity is called <B>acceleration</B> and is
      denoted by the letter <M>a</M>.
    </P>

    <P>
      The good news is that simple types of accelerated motion are described directly by quadratic equations. No tricky
      setup is needed at all. The classic example is free fall under Earth's gravity. Our planet gives any object an
      extra acceleration of <M>g = 10</M> meters per second for every second it stays in the air. If an object is
      dropped from height <M>h_0</M> with initial speed <M>v_0</M>, then its height <M>h</M> at time <M>t</M> is given
      by:
    </P>

    <BlockMath>{math`
      h(t) = h_0 + v_0 t - \frac{g}{2}t^2
    `}</BlockMath>

    <P>
      The sign in front of <M>v_0</M> depends on the direction of the initial velocity. If the object starts downward,
      you use a minus. If it starts upward, you use a plus.
    </P>

    <Problem title="Throwing Balls from the Leaning Tower of Pisa" level="easy">
      <ProblemDescription>
        <P>
          Sneaky Galileo climbed the Leaning Tower of Pisa, <M>60</M> meters high, to chuck some balls off it. He does
          not just drop them -- he throws them at <M>5</M> m/s. He throws the first ball downward and the second upward.
          After how many seconds does each one hit the ground?
        </P>
        <Image src={pisaExperiment} width="300px" />
      </ProblemDescription>
      <MathValueCheck label="Time for first ball to fall" answer={3} />
      <MathValueCheck label="Time for second ball to fall" answer={4} />
      <ProblemHint>
        When the ball hits the ground, its final height <M>h</M> is zero. Plug that zero and the known values into the
        height formula.
      </ProblemHint>
      <ProblemAnswer>
        The first ball hits the ground after <M>3</M> seconds, and the second after <M>4</M> seconds.
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Thrown downward">
          <P>The ball is thrown downward, so the initial velocity helps the fall and the height formula becomes:</P>
          <BlockMath>{math`
            h(t) = 60 - 5t - \frac{10}{2}t^2 = 60 - 5t - 5t^2
          `}</BlockMath>
          <P>Set the height equal to zero, since that is the moment it hits the ground:</P>
          <BlockMath>{math`
            60 - 5t - 5t^2 = 0
          `}</BlockMath>
          <P>
            Divide both sides by <M>-5</M> so the coefficient of <M>t^2</M> becomes positive:
          </P>
          <BlockMath>{math`
            t^2 + t - 12 = 0
          `}</BlockMath>
          <P>
            We got a quadratic equation. Find its <Dep on={discriminant}>discriminant</Dep>:
          </P>
          <BlockMath>{math`
            D = 1^2 - 4 \cdot 1 \cdot (-12) = 1 + 48 = 49
          `}</BlockMath>
          <P>
            Now find the roots using the <Dep on={quadraticFormula}>general quadratic formula</Dep>:
          </P>
          <BlockMath>{math`
            t = \frac{-1 \pm \sqrt{49}}{2 \cdot 1} = \frac{-1 \pm 7}{2}
          `}</BlockMath>
          <P>
            The two roots are <M>t = -4</M> and <M>t = 3</M>. Negative time makes no physical sense here, so the ball
            hits the ground after <M>3</M> seconds.
          </P>
        </ProblemSection>
        <ProblemSection title="Thrown upward">
          <P>The ball is thrown upward, so the initial velocity points against the fall and the height formula is:</P>
          <BlockMath>{math`
            h(t) = 60 + 5t - \frac{10}{2}t^2 = 60 + 5t - 5t^2
          `}</BlockMath>
          <P>Set the height equal to zero:</P>
          <BlockMath>{math`
            60 + 5t - 5t^2 = 0
          `}</BlockMath>
          <P>
            Divide both sides by <M>-5</M>:
          </P>
          <BlockMath>{math`
            t^2 - t - 12 = 0
          `}</BlockMath>
          <P>
            We got another quadratic equation. This time solve it by{' '}
            <Dep on={manualFactoring}>factoring it by hand</Dep>. We need two numbers that add up to <M>-1</M> and
            multiply to <M>-12</M>. Those numbers are <M>3</M> and <M>-4</M>:
          </P>
          <BlockMath>{math`
            (t + 3)(t - 4) = 0
          `}</BlockMath>
          <P>
            The roots are <M>t = -3</M> and <M>t = 4</M>. Throw away the negative time. So the second ball hits the
            ground after <M>4</M> seconds. Notice that the upward-thrown ball spends one extra second in the air: first
            it has to climb a bit, and only then it starts falling.
          </P>
        </ProblemSection>
      </ProblemSolution>
      <ProblemNote>
        <P>
          Somewhere back in the <M>16</M>th century, Galileo Galilei supposedly dropped balls of different masses from
          the Leaning Tower of Pisa to prove they all fall in the same amount of time -- against Aristotle's teaching
          that heavier bodies fall faster than lighter ones.
        </P>
        <P>
          Most historians think that experiment never actually happened, and Galileo himself never described it. It was
          most likely a <B>thought experiment</B>: if a heavy object falls faster than a light one, then what happens if
          you tie them together with a rope? On one hand, the light object should slow the heavy one down. On the other,
          together they weigh even more than the heavy object alone, so they should fall even faster. Contradiction.
          From that, Galileo concluded that all bodies fall in the same amount of time.
        </P>
        <P>
          A real experiment was done by astronaut David Scott, except not from the Leaning Tower of Pisa but right on
          the Moon. During the Apollo 15 mission in <M>1971</M>, he dropped a hammer and a feather at the same time.
          They hit the lunar surface together, neatly showing that without air resistance, all bodies fall in the same
          amount of time regardless of mass.
        </P>
        <Video src={hammerFeather} autoplay width="350px" />
      </ProblemNote>
    </Problem>

    <H2>Electricity</H2>

    <P>
      Quadratic equations have also crawled into electric circuits. Circuit elements can be connected in series or in
      parallel, which lets you flexibly control voltage, current, and resistance. For parallel connections, the total
      resistance <M>R_t</M> is calculated from the individual resistances <M>R_1</M>, <M>R_2</M>, and so on by the
      lovely ugly formula:
    </P>

    <BlockMath>{math`
      \frac{1}{R_t} = \frac{1}{R_1} + \frac{1}{R_2} + \dots
    `}</BlockMath>

    <Problem title="Fixing a Heater" level="easy">
      <ProblemDescription>
        <P>
          A repairman gets an electric heater made of two heating elements connected in parallel. Everything is sealed
          in epoxy, so measuring the resistance of each element separately is impossible, but the customer says one
          element has resistance <M>3</M> ohms greater than the other. The repairman measures the total resistance of
          the circuit and gets <M>2</M> ohms. Find the resistance of each heating element.
        </P>
        <Image src={circuit} width="500px" invert="dark" />
      </ProblemDescription>
      <MathValueCheck label="Element resistances" answers={[3, 6]} />
      <ProblemHint>
        Write the larger resistance through the smaller one. Then substitute that into the parallel-resistance formula
        together with the known total resistance.
      </ProblemHint>
      <ProblemAnswer>
        The first element has resistance <M>3</M> ohms, and the second has resistance <M>6</M> ohms.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          The customer says one element's resistance, call it the second one, is <M>3</M> ohms greater than the other's.
          Write that as:
        </P>
        <BlockMath>{math`
          R_2 = R_1 + 3
        `}</BlockMath>
        <P>
          The total resistance is <M>2</M> ohms. Use the formula for parallel connection to write the equation for the
          total resistance:
        </P>
        <BlockMath>{math`
          \frac{1}{2} = \frac{1}{R_1} + \frac{1}{R_2}
        `}</BlockMath>
        <P>
          Substitute the expression for <M>R_2</M> through <M>R_1</M>:
        </P>
        <BlockMath>{math`
          \frac{1}{2} = \frac{1}{R_1} + \frac{1}{R_1 + 3} \\
          R_1(R_1 + 3) = 2(R_1 + 3) + 2R_1 \\
          R_1^2 + 3R_1 = 2R_1 + 6 + 2R_1 \\
          R_1^2 + 3R_1 = 4R_1 + 6 \\
          R_1^2 - R_1 - 6 = 0
        `}</BlockMath>
        <P>
          We got a quadratic equation. It can be <Dep on={manualFactoring}>factored by hand</Dep>. We need two numbers
          whose sum is <M>-1</M> and whose product is <M>-6</M>. Those numbers are <M>2</M> and <M>-3</M>.
        </P>
        <BlockMath>{math`
          (R_1 - 3)(R_1 + 2) = 0
        `}</BlockMath>
        <P>
          So <M>R_1 = 3</M> ohms or <M>R_1 = -2</M> ohms. Negative resistance has no physical meaning, so take{' '}
          <M>R_1 = 3</M> ohms. Then from the original relation:
        </P>
        <BlockMath>{math`
          R_2 = R_1 + 3 = 3 + 3 = 6
        `}</BlockMath>
        <P>
          The first heater element has resistance <M>3</M> ohms, and the second has resistance <M>6</M> ohms.
        </P>
      </ProblemSolution>
    </Problem>

    <H2>Uniform Motion</H2>

    <P>
      You can invent a stupid amount of puzzle problems from motion at constant speed. Even people who hate physics know
      the simple formula <M>S = V \cdot t</M>, which links distance, speed, and time. It is pretty intuitive that if you
      sprint to the store for chocolate at <M>V = 2</M> meters per second, then in <M>t = 10</M> seconds you will cover{' '}
      <M>S = V \cdot t = 2 \cdot 10 = 20</M> meters.
    </P>

    <P>
      From that basic distance formula, you can derive formulas for speed and time by simple transformations. That gives
      the famous school trio:
    </P>

    <BlockMath>{math`
      S = V \cdot t >>{big}
      V = \frac{S}{t} >>{big}
      t = \frac{S}{V}
    `}</BlockMath>

    <Problem title="Ferry Excursion" level="medium">
      <ProblemDescription>
        <P>
          You go on a ferry excursion. The whole thing lasts <M>3</M> hours, during which the ferry travels <M>8</M>{' '}
          kilometers upstream and then returns back. The river current speed is <M>2</M> km/h. What is the ferry's
          speed, and how long did it spend going upstream?
        </P>
        <Image src={riverRide} width="600px" invert="dark" />
      </ProblemDescription>
      <MathValueCheck label="Ferry speed" answer={6} />
      <MathValueCheck label="Time upstream" answer={2} />
      <ProblemHint>
        Write formulas for the time spent going upstream and downstream. Add them and set the sum equal to the total
        time of the trip.
      </ProblemHint>
      <ProblemAnswer>
        The ferry speed is <M>6</M> km/h, and the time spent moving upstream is <M>2</M> hours.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let the ferry's speed be <M>V</M>. Against the current it moves at <M>V - 2</M> km/h because the current slows
          it down. It covers <M>8</M> kilometers that way. The upstream travel time is:
        </P>
        <BlockMath>{math`
          t_{\rarr} = \frac{8}{V - 2}
        `}</BlockMath>
        <P>
          On the way back, the current helps, so the speed is <M>V + 2</M> km/h. The downstream time is:
        </P>
        <BlockMath>{math`
          t_{\larr} = \frac{8}{V + 2}
        `}</BlockMath>
        <P>
          The entire excursion lasts <M>3</M> hours, so the upstream and downstream times add up to <M>3</M>:
        </P>
        <BlockMath>{math`
          t_{\rarr} + t_{\larr} = 3
        `}</BlockMath>
        <P>Substitute the fractions:</P>
        <BlockMath>{math`
          \frac{8}{V - 2} + \frac{8}{V + 2} = 3 \\
          8(V + 2) + 8(V - 2) = 3(V - 2)(V + 2) \\
          8V + 16 + 8V - 16 = 3(V^2 - 4) \\
          16V = 3V^2 - 12 \\
          0 = 3V^2 - 16V - 12
        `}</BlockMath>
        <P>
          That gives a quadratic equation. Find its <Dep on={discriminant}>discriminant</Dep>:
        </P>
        <BlockMath>{math`
          D = (-16)^2 - 4 \cdot 3 \cdot (-12) = 256 + 144 = 400
        `}</BlockMath>
        <P>
          Now find the roots using the <Dep on={quadraticFormula}>general formula</Dep>:
        </P>
        <BlockMath>{math`
          V = \frac{16 \pm \sqrt{400}}{2 \cdot 3} = \frac{16 \pm 20}{6}
        `}</BlockMath>
        <P>
          The roots are <M>V = 6</M> km/h and <M>{math`V = -\frac{2}{3}`}</M> km/h. Both satisfy the equation, but a
          negative speed <Ref to={uniques._whyNotReal}>makes no sense</Ref> in this real situation, so the ferry's speed
          is <M>6</M> km/h.
        </P>
        <Details $={uniques._whyNotReal} title="Negative speed makes no sense">
          <P>
            When we translate a physical real-world problem into mathematical language, we lose the restrictions imposed
            by the real world itself. As a result, mathematics can spit out not only the meaningful answers but also
            extra options that make no sense in real life, like negative speeds, negative times, or negative distances.
          </P>
          <P>
            Those options must be thrown away because they cannot be reproduced in the real world. They only "exist" in
            mathematical abstractions.
          </P>
        </Details>
        <P>Now find the time the ferry spent moving upstream by plugging the speed into the time formula:</P>
        <BlockMath>{math`
          t_{\rarr} = \frac{8}{6 - 2} = \frac{8}{4} = 2
        `}</BlockMath>
        <P>
          So the ferry moved upstream for <M>2</M> hours.
        </P>
      </ProblemSolution>
    </Problem>

    <Problems title="Hunting for Speed" level="medium">
      <SubProblem>
        <ProblemDescription>
          A tourist paddled a kayak <M>15</M> kilometers upstream and <M>14</M> kilometers downstream, spending exactly
          as much time as it would take to paddle <M>30</M> kilometers in still water. Find the kayak's own speed if the
          current speed is <M>1</M> km/h.
        </ProblemDescription>
        <MathValueCheck label="Kayak's own speed" answer={6} />
        <ProblemHint>
          The key phrase here is <B>"the same amount of time"</B>. It lets you write an equation connecting two
          situations: "round trip time with the current" = "trip time in still water". Express time through distance and
          speed using <M>S = Vt</M>.
        </ProblemHint>
        <ProblemAnswer>
          The kayak's own speed is <M>6</M> km/h.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            The important thing is the phrase <B>"the same amount of time"</B>. We do not know the actual time, but we
            do know it is equal in both situations. That lets us equate the "upstream plus downstream trip with the
            current" to the "trip in still water":
          </P>
          <BlockMath>{math`
            \boxed{t_{\text{upstream}} + t_{\text{downstream}} = t_{\text{still}}}
          `}</BlockMath>
          <P>
            But the problem does not directly give any times. What it does give are distances and speeds. So we need to
            express time through those. Start from the standard formula:
          </P>
          <BlockMath>S = Vt</BlockMath>
          <P>
            Divide both sides by <M>V</M> to isolate time:
          </P>
          <BlockMath>{math`
            \frac{S}{V} = \frac{\cancel{V}t}{\cancel{V}} >>{big}
            \boxed{t = \frac{S}{V}}
          `}</BlockMath>
          <P>Substitute those time expressions into the equation:</P>
          <BlockMath>{math`
            \frac{S_{\text{upstream}}}{V_{\text{upstream}}} + \frac{S_{\text{downstream}}}{V_{\text{downstream}}} = \frac{S_{\text{still}}}{V_{\text{still}}}
          `}</BlockMath>
          <P>
            The distances are known. Upstream speed equals the kayak's own speed <M>V_б</M> minus the current speed{' '}
            <M>1</M>. Downstream speed equals <M>V_б + 1</M>.
          </P>
          <BlockMath>{math`
            \frac{15}{V_б - 1} + \frac{14}{V_б + 1} = \frac{30}{V_б}
          `}</BlockMath>
          <P>
            We got an equation with one unknown, which is exactly the kayak's own speed <M>V_б</M>. Simplify it:
          </P>
          <BlockMath>{math`
            15(V_б + 1)V_б + 14(V_б - 1)V_б = 30(V_б + 1)(V_б - 1) \\
            15(V_б^2 + V_б) + 14(V_б^2 - V_б) = 30(V_б^2 - 1) \\
            15V_б^2 + 15V_б + 14V_б^2 - 14V_б = 30V_б^2 - 30 \\
            29V_б^2 + V_б = 30V_б^2 - 30 \\
            0 = 30V_б^2 - 29V_б^2 - V_б - 30 \\
            0 = V_б^2 - V_б - 30
          `}</BlockMath>
          <P>
            Now find the <Dep on={discriminant}>discriminant</Dep>:
          </P>
          <BlockMath>{math`
            D = (-1)^2 - 4 \cdot 1 \cdot (-30) = 1 + 120 = 121
          `}</BlockMath>
          <P>
            And the roots with the <Dep on={quadraticFormula}>general quadratic formula</Dep>:
          </P>
          <BlockMath>{math`
            V_б = \frac{-(-1) \pm \sqrt{121}}{2 \cdot 1} = \frac{1 \pm 11}{2}
          `}</BlockMath>
          <P>
            The roots are <M>V_б = 6</M> and <M>V_б = -5</M>. Negative speed is physically meaningless, so the kayak's
            own speed is <M>6</M> km/h.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          A train needs to travel <M>200</M> kilometers at constant speed. If it went <M>10</M> km/h faster, the trip
          would take <M>1</M> hour less. Find the train's speed.
        </ProblemDescription>
        <MathValueCheck label="Train speed" answer={40} />
        <ProblemAnswer>
          The train's speed is <M>40</M> km/h.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            There are two situations. In the first, the train goes <M>200</M> kilometers at speed <M>V_1</M> and takes{' '}
            <M>t_1</M> hours. In the second, the distance is the same, but the speed is <M>V_2 = V_1 + 10</M>, and the
            travel time is one hour shorter, that is, <M>t_2 = t_1 - 1</M>.
          </P>
          <P>For variety, this time we build the main equation using speed instead of time:</P>
          <BlockMath>V_2 = V_1 + 10</BlockMath>
          <P>
            Express speed through distance and time. From <M>S = Vt</M>, divide both sides by <M>t</M>. That gives{' '}
            <M>{math`V = \frac{S}{t}`}</M>. Substitute that into the equation above:
          </P>
          <BlockMath>{math`
            \frac{S}{t_2} = \frac{S}{t_1} + 10 \\
            \frac{200}{t_1 - 1} = \frac{200}{t_1} + 10
          `}</BlockMath>
          <P>
            Multiply both sides by <M>t_1(t_1 - 1)</M> to remove fractions:
          </P>
          <BlockMath>{math`
            200t_1 = 200(t_1 - 1) + 10t_1(t_1 - 1) \\
            200t_1 = 200t_1 - 200 + 10t_1^2 - 10t_1 \\
            0 = 10t_1^2 - 10t_1 - 200 \\
            0 = t_1^2 - t_1 - 20
          `}</BlockMath>
          <P>
            You can <Dep on={manualFactoring}>factor this by hand</Dep>. We need one positive and one negative number
            whose sum is <M>-1</M> and product is <M>-20</M>. Those numbers are <M>4</M> and <M>-5</M>:
          </P>
          <BlockMath>(t_1 + 4)(t_1 - 5) = 0</BlockMath>
          <P>
            So the original trip time could be <M>-4</M> hours or <M>5</M> hours. Negative time is nonsense, so the trip
            lasted <M>5</M> hours. Then the speed is:
          </P>
          <BlockMath>{math`
            S = Vt >>{big}
            \frac{S}{t} = V >>{big}
            V = \frac{200}{5} = 40
          `}</BlockMath>
          <P>
            The train's speed is <M>40</M> km/h.
          </P>
        </ProblemSolution>
        <ProblemNote>
          As you can see, problems like this can be solved in different ways depending on what quantity you lean on. In
          this case it would obviously be more convenient to build the equation from <M>t_2 = t_1 - 1</M>, because then
          we would substitute expressions like <M>{math`\frac{S}{V}`}</M> and look for the speed directly. But it is not
          a disaster to build it through speed, find the time, and then get the speed from that.
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          A river ferry can reach <M>10</M> km/h in still water. Find the current speed if going <M>36</M> kilometers
          upstream takes <M>1.5</M> hours longer than coming back.
        </ProblemDescription>
        <MathValueCheck label="Current speed" answer={2} />
        <ProblemAnswer>
          The current speed is <M>2</M> km/h.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Let the upstream travel time be <M>{math`t_{\uarr}`}</M>, the downstream time be <M>{math`t_{\darr}`}</M>,
            and the current speed be <M>{math`V_\approx`}</M>. Again, we use the time relation given in the problem:
          </P>
          <BlockMath>{math`t_{\darr} = t_{\uarr} - \underbrace{1.5}_{\small\frac{3}{2}}`}</BlockMath>
          <P>
            Since the actual times are unknown, substitute expressions for time through distance and speed,
            <M>{math`\frac{S}{V}`}</M>:
          </P>
          <BlockMath>{math`
            \frac{36}{10 + V_\approx} = \frac{36}{10 - V_\approx} - \frac{3}{2} \\
            36(10 - V_\approx) = 36(10 + V_\approx) - \frac{3}{2}(10 + V_\approx)(10 - V_\approx) \\
            \cancel{360} - 36V_\approx = \cancel{360} + 36V_\approx - \frac{3}{2}(100 - V_\approx^2) \\
            -72V_\approx = - \frac{3}{2}(100 - V_\approx^2) \\
            -24V_\approx = -\frac{1}{2}(100 - V_\approx^2) \\
            48V_\approx = 100 - V_\approx^2 \\
            V_\approx^2 + 48V_\approx - 100 = 0
          `}</BlockMath>
          <P>
            Yet another simple quadratic equation that can be solved by{' '}
            <Dep on={manualFactoring}>factoring by hand</Dep>:
          </P>
          <BlockMath>{math`
            (V_\approx + 50)(V_\approx - 2) = 0
          `}</BlockMath>
          <P>
            A current speed of <M>-50</M> km/h is nonsense, so the actual current speed is <M>2</M> km/h.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Long Hike" level="medium">
      <ProblemDescription>
        A tourist went on a hike. The route is a decent one -- <M>40</M> kilometers long. If the tourist had walked{' '}
        <M>1</M> km/h faster, the whole route would have taken <M>2</M> hours less. How many hours did the tourist spend
        hiking?
      </ProblemDescription>
      <MathValueCheck label="Time on the route" answer={10} />
      <ProblemHint>
        Write the relation between the speeds as an equation. Then replace the speeds with expressions through distance
        and time.
      </ProblemHint>
      <ProblemAnswer>
        The tourist spent <M>10</M> hours hiking.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          There are two situations. In the first, the tourist walks <M>40</M> kilometers at speed <M>V_1</M> and spends{' '}
          <M>t_1</M> hours. In the second, the distance is the same, but the speed is <M>1</M> km/h greater and the time
          is <M>2</M> hours shorter, that is, <M>t_2 = t_1 - 2</M>.
        </P>
        <P>Write the speed relation:</P>
        <BlockMath>V_2 = V_1 + 1</BlockMath>
        <P>
          The problem does not give the speeds, so replace them with expressions through distance and time using{' '}
          <M>{math`V = \frac{S}{t}`}</M>. Substitute:
        </P>
        <BlockMath>{math`
          \frac{40}{t_2} = \frac{40}{t_1} + 1
        `}</BlockMath>
        <P>
          Replace <M>t_2</M> by its expression through <M>t_1</M>:
        </P>
        <BlockMath>{math`
          \frac{40}{t_1 - 2} = \frac{40}{t_1} + 1
        `}</BlockMath>
        <P>
          Now we have an equation with one unknown, and it is exactly the one we want: the hiking time <M>t_1</M>.
          Multiply both sides by <M>t_1(t_1 - 2)</M> to remove fractions:
        </P>
        <BlockMath>{math`
          40t_1 = 40(t_1 - 2) + t_1(t_1 - 2) \\
          40t_1 = 40t_1 - 80 + t_1^2 - 2t_1 \\
          0 = t_1^2 - 2t_1 - 80
        `}</BlockMath>
        <P>
          This quadratic has simple coefficients, so you can <Dep on={manualFactoring}>factor it by hand</Dep>. We need
          two numbers whose sum is <M>-2</M> and product is <M>-80</M>. Those are <M>8</M> and <M>-10</M>:
        </P>
        <BlockMath>{math`
          (t_1 + 8)(t_1 - 10) = 0
        `}</BlockMath>
        <P>
          So <M>t_1 = -8</M> or <M>t_1 = 10</M>. Negative time is nonsense, so the tourist spent <M>10</M> hours hiking.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Two Delivery Drones" level="medium" inter>
      <ProblemDescription>
        Two cargo delivery drones were launched simultaneously from the roof of a tower: the first flew due east, and
        the second flew due north. The northern drone flies <M>3</M> km/h faster than the eastern one. After <M>2</M>{' '}
        hours, the GPS trackers show the distance between the drones is <M>30</M> km. How far did each drone fly?
      </ProblemDescription>
      <MathValueCheck label="Distance flown by each drone" answers={[18, 24]} />
      <ProblemHint>
        The drones fly in perpendicular directions. The distance between them is the hypotenuse of a right triangle.
      </ProblemHint>
      <ProblemAnswer>
        The eastern drone flew <M>18</M> km, and the northern drone flew <M>24</M> km.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let the eastern drone's speed be <M>V</M>. Then the northern drone's speed is <M>V + 3</M>. In <M>2</M> hours,
          the eastern drone flies <M>2V</M> kilometers, and the northern drone flies <M>2(V + 3) = 2V + 6</M>{' '}
          kilometers.
        </P>
        <P>
          The drones fly at right angles -- one east, one north. So the distance between them is the hypotenuse of a
          right triangle with legs <M>2V</M> and <M>2V + 6</M>. By the Pythagorean theorem:
        </P>
        <BlockMath>{math`
          (2V)^2 + (2V + 6)^2 = 30^2
        `}</BlockMath>
        <P>Expand the squares:</P>
        <BlockMath>{math`
          4V^2 + 4V^2 + 24V + 36 = 900 \\
          8V^2 + 24V + 36 = 900 \\
          8V^2 + 24V - 864 = 0
        `}</BlockMath>
        <P>
          Divide both sides by <M>8</M>:
        </P>
        <BlockMath>{math`
          V^2 + 3V - 108 = 0
        `}</BlockMath>
        <P>
          You can <Dep on={manualFactoring}>factor this by hand</Dep>. We need two numbers whose sum is <M>3</M> and
          product is <M>-108</M>. Those are <M>12</M> and <M>-9</M>:
        </P>
        <BlockMath>{math`
          (V + 12)(V - 9) = 0
        `}</BlockMath>
        <P>
          So the speed is either <M>V = -12</M> or <M>V = 9</M>. Negative drone speed belongs in some parallel universe,
          not here, so the real speed is <M>9</M> km/h. Then the distances are:
        </P>
        <BlockMath>{math`
          d_{\text{east}} = 2 \cdot 9 = 18 >>{big}
          d_{\text{north}} = 2 \cdot 12 = 24
        `}</BlockMath>
        <P>
          The eastern drone flew <M>18</M> km, and the northern drone flew <M>24</M> km.
        </P>
      </ProblemSolution>
    </Problem>

    <H1
      snippet={{
        key: true,
        seo: 'Quadratic equations in work problems',
        description: `
          Examples of work problems solved with quadratic equations:
          plowing a field, painting a fence, filling a tank, and so on.
        `,
      }}
    >
      Work
    </H1>

    <P>
      The classical constant-speed formula <M>S = Vt</M> can be generalized to basically any problem where there is some
      kind of "work" in the everyday sense, done by someone or something at some rate over some time.
    </P>

    <P>
      Distance <M>S</M> gets replaced by some "amount of work" <M>A</M>, whatever units it may use: the area of a fence
      to paint, the volume of a tank to fill, the number of parts a factory has to make, and so on. Speed <M>V</M>{' '}
      becomes "productivity", "output", or just a work rate <M>P</M>: how many square meters get painted per hour, how
      many liters flow into a tank per minute, how many parts get made per day, and so on.
    </P>

    <P>
      The formulas are exactly the same, only the letters change. For example, if a worker makes <M>P = 8</M> parts per
      hour, then in <M>t = 10</M> hours they make <M>8 \cdot 10 = 80 = A</M> parts. That gives the main formula{' '}
      <M>A = Pt</M>, and from it you get the work-rate and work-time formulas, exactly like in constant-speed motion:
    </P>

    <BlockMath>{math`
      A = Pt >>{big} P = \frac{A}{t} >>{big} t = \frac{A}{P}
    `}</BlockMath>

    <Problem title="Painting a Fence" level="medium">
      <ProblemDescription>
        Working together, two workers can paint a fence in <M>6</M> hours. Working alone, the first worker could paint
        the fence <M>5</M> hours faster than the second worker could alone. How many hours would each worker need on
        their own?
      </ProblemDescription>
      <MathValueCheck label="Individual painting times" answers={[10, 15]} />
      <ProblemHint>
        <P>
          Start from the work formula <M>A = Pt</M> for the situation where both workers are painting together. Then
          replace the work rate with expressions through total work and time.
        </P>
      </ProblemHint>
      <ProblemAnswer>
        The first worker can paint the fence in <M>10</M> hours, and the second worker in <M>15</M> hours.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Write the work formula for the case where both workers act together, so their rates add. They can paint the
          fence in <M>6</M> hours:
        </P>
        <BlockMath>A = (P_1 + P_2) \cdot 6</BlockMath>
        <P>
          We are not given any rates, so replace them with expressions through <M>A</M> and time. From <M>A = Pt</M>, if
          you divide both sides by <M>t</M>, you get <M>{math`P = \frac{A}{t}`}</M>.
        </P>
        <BlockMath>{math`
          A = \left(\frac{A}{t_1} + \frac{A}{t_2}\right) \cdot 6
        `}</BlockMath>
        <P>
          Factor out <M>A</M> and divide both sides by it. That completely kills the total-work quantity, whatever you
          imagine it to be:
        </P>
        <BlockMath>{math`
          \cancel{A} = \cancel{A} \cdot \left(\frac{1}{t_1} + \frac{1}{t_2}\right) \cdot 6 \\
          1 = \left(\frac{1}{t_1} + \frac{1}{t_2}\right) \cdot 6 \\
          \frac{1}{6} = \frac{1}{t_1} + \frac{1}{t_2}
        `}</BlockMath>
        <P>
          Nice: now the equation contains only time, which is exactly what we need. We also know the first worker is{' '}
          <M>5</M> hours faster than the second, so <M>t_1 = t_2 - 5</M>. Substitute that into the equation:
        </P>
        <BlockMath>{math`
          \frac{1}{6} = \frac{1}{t_2 - 5} + \frac{1}{t_2}
        `}</BlockMath>
        <P>Now solve it:</P>
        <BlockMath>{math`
          \frac{(t_2 - 5)t_2}{6} = t_2 + t_2 - 5 \\
          \frac{t_2^2 - 5t_2}{6} = 2t_2 - 5 \\
          t_2^2 - 5t_2 = 12t_2 - 30 \\
          t_2^2 - 17t_2 + 30 = 0
        `}</BlockMath>
        <P>
          Yep, a quadratic equation. Surprise. Since <M>A = 1</M> and the other numbers are simple, you can{' '}
          <Dep on={manualFactoring}>factor it by hand</Dep>. The numbers <M>-15</M> and <M>-2</M> add to <M>-17</M> and
          multiply to <M>30</M>. So:
        </P>
        <BlockMath>{math`
          (t_2 - 15)(t_2 - 2) = 0
        `}</BlockMath>
        <P>
          That means the second worker would need either <M>15</M> hours or <M>2</M> hours. If the second needed{' '}
          <M>2</M> hours, then the first would need <M>t_1 = t_2 - 5 = -3</M> hours, which is nonsense. So the only
          valid option is <M>15</M> hours for the second worker and therefore <M>10</M> hours for the first.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Plowing a Field" level="medium">
      <ProblemDescription>
        One tractor brigade plowed <M>240</M> hectares, while another plowed <M>35%</M> more. Each day the first brigade
        plowed <M>3</M> hectares less than the second, but finished two days earlier. How many hectares per day did each
        brigade plow, given that both exceeded the planned daily quota of <M>20</M> hectares?
      </ProblemDescription>
      <MathValueCheck label="Brigade work rates" answers={[24, 27]} />
      <ProblemHint>
        Use the relation between the work times of the two brigades. Replace time with expressions through work amount
        and work rate.
      </ProblemHint>
      <ProblemAnswer>
        The first brigade plowed <M>24</M> hectares per day, and the second plowed <M>27</M> hectares per day.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Translate each sentence directly into math. First, the first brigade did <M>A_1 = 240</M> hectares of work.
          From that, find the second brigade's amount immediately:
        </P>
        <BlockMath>{math`
          A_2 = A_1 + \frac{35}{100} \cdot A_1 = 240 + \frac{35}{100} \cdot 240 = 324
        `}</BlockMath>
        <P>The second sentence gives the relation between daily rates and completion times. Translate that:</P>
        <BlockMath>{math`
          P_1 = P_2 - 3 >>{big} t_1 = t_2 - 2
        `}</BlockMath>
        <P>
          Either relation could be used as the main one, but since the task asks for the rates, start from the time
          relation and replace time by expressions through work amount and work rate:
        </P>
        <BlockMath>{math`
          \frac{A_1}{P_1} = \frac{A_2}{P_2} - 2
        `}</BlockMath>
        <P>
          Now substitute the expression for <M>P_1</M> through <M>P_2</M> from the first relation, and also the numeric
          work amounts:
        </P>
        <BlockMath>{math`
          \frac{240}{P_2 - 3} = \frac{324}{P_2} - 2 \\
          240P_2 = 324(P_2 - 3) - 2P_2(P_2 - 3) \\
          120P_2 = 162(P_2 - 3) - P_2(P_2 - 3) \\
          120P_2 = 162P_2 - 486 - P_2^2 + 3P_2 \\
          P_2^2 - 45P_2 + 486 = 0
        `}</BlockMath>
        <P>
          We got a quadratic equation. Find the <Dep on={discriminant}>discriminant</Dep>:
        </P>
        <BlockMath>{math`
          D = (-45)^2 - 4 \cdot 1 \cdot 486 = 2025 - 1944 = 81
        `}</BlockMath>
        <P>
          Then the roots using the <Dep on={quadraticFormula}>general formula</Dep>:
        </P>
        <BlockMath>{math`
          P_2 = \frac{-(-45) \pm \sqrt{81}}{2 \cdot 1} = \frac{45 \pm 9}{2}
        `}</BlockMath>
        <P>
          The roots are <M>P_2 = 27</M> and <M>P_2 = 18</M>. But both brigades are said to exceed the <M>20</M>-hectare
          quota, so the second brigade's rate cannot be below <M>20</M>. Therefore the only valid option is{' '}
          <M>P_2 = 27</M> hectares per day, which means <M>P_1 = 27 - 3 = 24</M> hectares per day.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="3 Taps -- 1 Tank" level="hard">
      <ProblemDescription>
        A liquid flows into a tank through three inlet taps. If all three taps are opened at once, the tank fills in{' '}
        <M>6</M> minutes. If only the second tap is used, the tank fills in <M>3/4</M> of the time needed by the first
        tap alone. The third tap alone fills the tank in <M>10</M> minutes longer than the second tap alone. How long
        does each tap take to fill the tank by itself?
      </ProblemDescription>
      <MathValueCheck label="Fill time of each tap" answers={['56/3', 14, 24]} />
      <ProblemHint>
        Start from the work formula for the full tank when all taps are open. In the sum of rates, replace each rate by
        an expression through total work and fill time.
      </ProblemHint>
      <ProblemAnswer>
        The first tap fills the tank in <M>{math`\frac{56}{3}`}</M> minutes, the second in <M>14</M> minutes, and the
        third in <M>24</M> minutes.
      </ProblemAnswer>
      <ProblemSolution>
        <P>Write the full-tank work formula for all three taps together:</P>
        <BlockMath>{math`
          A = (P_1 + P_2 + P_3) \cdot 6
        `}</BlockMath>
        <P>Now write the time relations:</P>
        <BlockMath>{math`
          t_2 = \frac{3}{4}t_1 >>{big} t_3 = t_2 + 10
        `}</BlockMath>
        <P>
          Substitute expressions through work and time for the rates in the first formula, because time is what we need:
        </P>
        <BlockMath>{math`
          A = \left(\frac{A}{t_1} + \frac{A}{t_2} + \frac{A}{t_3}\right) \cdot 6
        `}</BlockMath>
        <P>
          Factor out <M>A</M> on the right and divide both sides by it. That completely eliminates the total-work
          quantity:
        </P>
        <BlockMath>{math`
          1 = \left(\frac{1}{t_1} + \frac{1}{t_2} + \frac{1}{t_3}\right) \cdot 6
        `}</BlockMath>
        <P>
          Now express everything through a single time, for example <M>t_2</M>. From the first time relation we get:
        </P>
        <BlockMath>{math`
          t_2 = \frac{3}{4}t_1 \implies t_1 = \frac{4}{3}t_2
        `}</BlockMath>
        <P>
          Substitute this for <M>t_1</M> and also <M>t_3 = t_2 + 10</M>:
        </P>
        <BlockMath>{math`
          1 = \left(\frac{1}{\frac{4}{3}t_2} + \frac{1}{t_2} + \frac{1}{t_2 + 10}\right) \cdot 6 \\
          \frac{1}{6} = \frac{3}{4t_2} + \frac{1}{t_2} + \frac{1}{t_2 + 10} \\
          \frac{1}{6} = \frac{7}{4t_2} + \frac{1}{t_2 + 10}
        `}</BlockMath>
        <P>
          Multiply both sides by <M>12t_2(t_2 + 10)</M> to clear all denominators:
        </P>
        <BlockMath>{math`
          2t_2(t_2 + 10) = 21(t_2 + 10) + 12t_2 \\
          2t_2^2 + 20t_2 = 21t_2 + 210 + 12t_2 \\
          2t_2^2 - 13t_2 - 210 = 0
        `}</BlockMath>
        <P>
          We got a quadratic equation. Find its <Dep on={discriminant}>discriminant</Dep>:
        </P>
        <BlockMath>{math`
          D = (-13)^2 - 4 \cdot 2 \cdot (-210) = 169 + 1680 = 1849
        `}</BlockMath>
        <P>
          Then the roots using the <Dep on={quadraticFormula}>general formula</Dep>:
        </P>
        <BlockMath>{math`
          t_2 = \frac{-(-13) \pm \sqrt{1849}}{2 \cdot 2} = \frac{13 \pm 43}{4}
        `}</BlockMath>
        <P>
          The roots are <M>t_2 = 14</M> and <M>{math`t_2 = -7.5`}</M>. Time cannot be negative, so <M>t_2 = 14</M>{' '}
          minutes. Then:
        </P>
        <BlockMath>{math`
          t_1 = \frac{4}{3} \cdot 14 = \frac{56}{3} \text{ min} >>{big}
          t_3 = 14 + 10 = 24 \text{ min}
        `}</BlockMath>
        <P>
          So the first tap fills the tank in <M>{math`\frac{56}{3}`}</M> minutes, the second in <M>14</M> minutes, and
          the third in <M>24</M> minutes.
        </P>
      </ProblemSolution>
    </Problem>

    <H1
      snippet={{
        key: true,
        seo: 'Quadratic equations in problems about solutions, alloys, and gas mixtures',
        description: `
            Examples of problems about solutions, alloys, and gas mixtures solved with quadratic equations, with detailed solutions and answers.
        `,
      }}
    >
      Solutions, Alloys, Gas Mixtures
    </H1>

    <P>
      In chemistry, including everyday chemistry, in metallurgy, and even in plain old concrete mixing, you constantly
      run into situations where substances are combined. In English, <B>mixture</B> is the broad general word,
      <B>solution</B> is used when one substance is dissolved in another, and <B>alloy</B> is the standard word for a
      metallic mixture. So in this section we will look at a liquid solution, a metal alloy, and a gas mixture.
    </P>

    <P>
      For all these systems, it is crucial to understand <B>what fraction</B> of the total mass or volume is made up by
      the substance you care about. For example, what fraction of an acid-and-water solution is acid. That ratio is
      called the <B>concentration</B> of the substance, say <M>A</M>, and it is denoted by <M>c</M>.
    </P>

    <BlockMath>{math`
      c_A = \frac{m_A}{M} >>{big} c_A = \frac{V_A}{V}
    `}</BlockMath>

    <P>
      Concentration is usually written in percent, but in calculations you use decimals. For example, a hydrogen
      peroxide solution with concentration <M>3%</M> means <M>c = 0.03</M>.
    </P>

    <Problem title="Salt Solution" level="easy">
      <ProblemDescription>
        A solution containing <M>18</M> grams of salt has another <M>600</M> grams of water added to it, after which the
        concentration of the solution decreases by <M>4%</M>. Find the original salt concentration.
      </ProblemDescription>
      <MathValueCheck label="Original salt concentration" answer={[0.06, '6%']} />
      <ProblemHint>
        Write the concentration formula before and after adding the water. In the second formula, substitute the
        expression for the original concentration.
      </ProblemHint>
      <ProblemAnswer>
        The original salt concentration was <M>0.06</M>, or <M>6%</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let <M>M</M> be the mass of the original solution and <M>c</M> its concentration. Then mathematically:
        </P>
        <BlockMath>{math`
          c = \frac{18}{M}
        `}</BlockMath>
        <P>
          If we reduce the concentration <M>c</M> by <M>4%</M>, that is by <M>0.04</M>, we get the concentration of the
          diluted solution:
        </P>
        <BlockMath>{math`
          c - 0.04 = \frac{18}{M + 600}
        `}</BlockMath>
        <P>
          Substitute the fraction expression for <M>c</M>:
        </P>
        <BlockMath>{math`
          \frac{18}{M} - 0.04 = \frac{18}{M + 600} \\
          \frac{18}{M} - \frac{4}{100} = \frac{18}{M + 600} \\
          \frac{9}{M} - \frac{2}{100} = \frac{9}{M + 600} \\
          900(M+600) - 2M(M+600) = 900M \\
          450(M+600) - M(M+600) = 450M \\
          \cancel{450M} + 450 \cdot 600 - M^2 - 600M = \cancel{450M} \\
          450 \cdot 600 - M^2 - 600M = 0 \\
          M^2 + 600M - 450 \cdot 600 = 0
        `}</BlockMath>
        <P>
          We got a quadratic equation. Since coefficient <M>B</M> is even, solve it using the{' '}
          <Dep on={evenQuadraticFormula}>simplified quadratic formula</Dep>:
        </P>
        <BlockMath>{math`
          M = -300 \pm \sqrt{300^2 + 450 \cdot 600} = -300 \pm 600
        `}</BlockMath>
        <P>
          The roots are <M>M = 300</M> and <M>M = -900</M>. Negative mass is nonsense, so <M>M = 300</M> grams. Then the
          original concentration is:
        </P>
        <BlockMath>{math`
          c = \frac{18}{300} = \frac{6}{100} = 0.06
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem title="Metal Ingot" level="medium">
      <ProblemDescription>
        There are two copper alloys with another metal, and the relative copper content in one of them is <M>40%</M>{' '}
        lower than in the other. A piece of the first alloy containing <M>6</M> kg of copper is melted together with a
        piece of the second alloy containing <M>12</M> kg of copper. The resulting ingot contains <M>36%</M> copper.
        Find the copper percentage in the first alloy.
      </ProblemDescription>
      <MathValueCheck label="Copper percentage in first alloy" answer={[0.2, '20%']} />
      <ProblemHint>First find the total mass of the resulting ingot.</ProblemHint>
      <ProblemHint>
        The mass of the ingot is the sum of the masses of the two pieces, <M>m_1 + m_2 = M</M>. Replace <M>m_1</M> and{' '}
        <M>m_2</M> with expressions through the copper concentrations of the two alloys.
      </ProblemHint>
      <ProblemAnswer>
        The copper percentage in the first alloy is <M>20%</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Find the total mass <M>M</M> of the resulting ingot. You can get it from the concentration formula for the
          ingot:
        </P>
        <BlockMath>{math`
          0.36 = \frac{6 + 12}{M} \implies M = \frac{18}{0.36} = \frac{18 \cdot 100}{36} = 50
        `}</BlockMath>
        <P>Write the relation between the original concentrations:</P>
        <BlockMath>{math`c_1 = c_2 - 0.4`}</BlockMath>
        <P>
          That alone does not help much yet, because concentration is exactly what we are trying to find. So switch to a
          different route. The ingot came from two alloy pieces, so:
        </P>
        <BlockMath>m_1 + m_2 = 50</BlockMath>
        <P>But the mass of each piece is directly tied to the copper concentration in that piece:</P>
        <BlockMath>{math`
          c_1 = \frac{6}{m_1} \implies m_1 = \frac{6}{c_1} >>{big}
          c_2 = \frac{12}{m_2} \implies m_2 = \frac{12}{c_2}
        `}</BlockMath>
        <P>Substitute these fractions for the masses:</P>
        <BlockMath>{math`
          \frac{6}{c_1} + \frac{12}{c_2} = 50
        `}</BlockMath>
        <P>Now replace the first concentration by its expression through the second:</P>
        <BlockMath>{math`
          \frac{6}{c_2 - 0.4} + \frac{12}{c_2} = 50
        `}</BlockMath>
        <P>Great. Now it is a one-variable equation. Solve it:</P>
        <BlockMath>{math`
          \frac{6}{c_2 - \frac{4}{10}} + \frac{12}{c_2} = 50 \\
          \frac{3}{c_2 - \frac{4}{10}} + \frac{6}{c_2} = 25 \\
          3c_2 + 6\left(c_2 - \frac{4}{10}\right) = 25c_2\left(c_2 - \frac{4}{10}\right) \\
          3c_2 + 6c_2 - \frac{24}{10} = 25c_2^2 - 10c_2 \\
          0 = 25c_2^2 - 19c_2 + \frac{12}{5}
        `}</BlockMath>
        <P>
          Now find the <Dep on={discriminant}>discriminant</Dep>:
        </P>
        <BlockMath>{math`
          D = (-19)^2 - 4 \cdot 25 \cdot \frac{12}{5} = 361 - 240 = 121
        `}</BlockMath>
        <P>
          And the roots via the <Dep on={quadraticFormula}>general formula</Dep>:
        </P>
        <BlockMath>{math`
          c_2 = \frac{-(-19) \pm \sqrt{121}}{2 \cdot 25} = \frac{19 \pm 11}{50}
        `}</BlockMath>
        <P>
          The roots are <M>c_2 = 0.6</M> and <M>c_2 = 0.16</M>. If <M>c_2 = 0.16</M>, then <M>c_1 = -0.24</M>, which is
          impossible because concentration cannot be negative. So the only valid choice is <M>c_2 = 0.6</M>, and hence{' '}
          <M>c_1 = 0.2</M>. Therefore the copper percentage in the first alloy is <M>20%</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Gas Mixtures" level="hard">
      <ProblemDescription>
        A vessel with capacity <M>8</M> liters is filled with air containing <M>16%</M> oxygen. Some amount of air is
        let out and the same amount of nitrogen is pumped in. Then the same amount of the new mixture is let out again,
        and again replaced by the same amount of nitrogen. In the final mixture, the oxygen concentration is <M>9%</M>.
        How many liters are released each time?
      </ProblemDescription>
      <MathValueCheck label="Liters released each time" answer={2} />
      <ProblemHint>Find the expression for the oxygen concentration after the first stage.</ProblemHint>
      <ProblemHint>
        Use that first-stage expression to build the oxygen concentration after the second stage.
      </ProblemHint>
      <ProblemAnswer>
        Each time, <M>2</M> liters of mixture are released.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          At the first stage, <M>x</M> liters of air are released and replaced with nitrogen. The vessel still contains{' '}
          <M>8-x</M> liters of the old mixture, and therefore <M>(8-x) \cdot 0.16</M> liters of oxygen. No new oxygen
          was added. So the oxygen concentration after the first stage is:
        </P>
        <BlockMath>{math`
          \frac{(8-x) \cdot 0.16}{8} = (8-x) \cdot 0.02
        `}</BlockMath>
        <P>
          At the second stage, <M>x</M> liters are released again and replaced with nitrogen. The vessel now contains{' '}
          <M>8-x</M> liters of the first-stage mixture, whose oxygen concentration is <M>0.16 - 0.02x</M>. So the volume
          of oxygen at the second stage is <M>(8-x) \cdot (8-x) \cdot 0.02</M>. Divide by the total volume and set it to
          the required concentration <M>0.09</M>:
        </P>
        <BlockMath>{math`
          \frac{(8-x) \cdot (8-x) \cdot 0.02}{8} = 0.09 \\
          \frac{(8-x)^2 \cdot 0.02}{8} = 0.09 \\
        `}</BlockMath>
        <P>
          Multiply both sides by <M>100</M> to remove decimals:
        </P>
        <BlockMath>{math`
          \frac{(8-x)^2 \cdot 2}{8} = 9 \\
          (8-x)^2 = 36 \\
          8-x = \pm 6 \\
          8\mp 6 = x
        `}</BlockMath>
        <P>
          The roots are <M>x = 2</M> and <M>x = 14</M>. But the vessel holds only <M>8</M> liters, so releasing{' '}
          <M>14</M> liters is impossible. Therefore <M>x = 2</M>. So each time, <M>2</M> liters of mixture are released.
        </P>
      </ProblemSolution>
    </Problem>

    <H1
      snippet={{
        key: true,
        seo: 'Where are quadratic equations used in mathematics?',
        description: `
          Examples of algebra and geometry problems that reduce to quadratic equations, with detailed solutions and answers.
        `,
      }}
    >
      Mathematics
    </H1>

    <P>
      And of course, quadratic equations are used in mathematics itself. Plenty of fun questions in both algebra and
      geometry lead straight to them. Here are some examples from both areas.
    </P>

    <H2>Algebra</H2>

    <Problem title="Sum of Consecutive Numbers" level="easy">
      <ProblemDescription>
        <P>
          The sum <M>S</M> of the first <M>n</M> natural numbers (<M>1, 2, 3\ldots</M>) can be found using the formula:
        </P>
        <BlockMath>{math`S = \frac{1}{2}n(n+1)`}</BlockMath>
        <P>
          How many natural numbers from the start must be added so that the sum becomes <M>465</M>?
        </P>
      </ProblemDescription>
      <MathValueCheck label="Number of terms" answer={30} />
      <ProblemHint>
        Substitute <M>465</M> for <M>S</M> in the formula and find what <M>n</M> must be.
      </ProblemHint>
      <ProblemAnswer>
        You need to add the first <M>30</M> natural numbers for the sum to be <M>465</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Substitute <M>465</M> for <M>S</M> and solve for <M>n</M>:
        </P>
        <BlockMath>{math`
          465 = \frac{1}{2}n(n+1) \\
          930 = n(n+1) \\
          930 = n^2 + n \\
          0 = n^2 + n - 930
        `}</BlockMath>
        <P>
          This is a quadratic equation. Find its <Dep on={discriminant}>discriminant</Dep>:
        </P>
        <BlockMath>{math`
          D = 1^2 - 4 \cdot 1 \cdot (-930) = 1 + 3720 = 3721
        `}</BlockMath>
        <P>
          Then its roots using the <Dep on={quadraticFormula}>general formula</Dep>:
        </P>
        <BlockMath>{math`
          n = \frac{-1 \pm \sqrt{3721}}{2 \cdot 1} = \frac{-1 \pm 61}{2}
        `}</BlockMath>
        <P>
          The roots are <M>n = 30</M> and <M>n = -31</M>. Throw away <M>-31</M> because it is mathematically impossible
          to add the first negative thirty-one natural numbers. So the sum of the first <M>30</M> natural numbers is{' '}
          <M>465</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Sum and Product" level="easy">
      <ProblemDescription>
        There are two sneaky numbers whose sum is <M>22</M> and whose product is <M>120</M>. What are these numbers?
      </ProblemDescription>
      <MathValueCheck label="Two sneaky numbers" answers={[10, 12]} />
      <ProblemHint>
        Write two equations: one for the sum and one for the product. Express one number through the other using the sum
        equation and substitute into the product equation.
      </ProblemHint>
      <ProblemAnswer>
        Those two sneaky numbers are <M>10</M> and <M>12</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let those numbers be <M>n</M> and <M>m</M>. Then:
        </P>
        <BlockMath>{math`
          n + m = 22 >>{big} n\cdot m = 120
        `}</BlockMath>
        <P>
          Express <M>n</M> through <M>m</M> using the sum equation:
        </P>
        <BlockMath>n = 22 - m</BlockMath>
        <P>Substitute that into the product equation:</P>
        <BlockMath>{math`
          (22 - m)m = 120 \\
          22m - m^2 = 120 \\
          0 = m^2 - 22m + 120
        `}</BlockMath>
        <P>
          Since coefficient <M>A = 1</M> and the rest is simple, you can{' '}
          <Dep on={manualFactoring}>factor it by hand</Dep>. The numbers <M>-10</M> and <M>-12</M> add to <M>-22</M> and
          multiply to <M>120</M>. So:
        </P>
        <BlockMath>{math`
          (m - 10)(m - 12) = 0
        `}</BlockMath>
        <P>
          That gives <M>m = 10</M> or <M>m = 12</M>. Plug either into <M>n = 22 - m</M> and you get the pair <M>10</M>{' '}
          and <M>12</M> in either order.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Jumping Digits" level="medium">
      <ProblemDescription>
        There is a two-digit number whose digits multiply to <M>12</M>. If you add <M>36</M> to the number, the digits
        swap places. Find the number.
      </ProblemDescription>
      <MathValueCheck label="Two-digit number" answer={26} />
      <ProblemHint>
        <P>Examples of writing a two-digit number through its digits:</P>
        <BlockMath>{math`
            12 = 1\cdot 10 + 2 >>{big}
            84 = 8\cdot 10 + 4
        `}</BlockMath>
        <P>So the first digit gives the number of tens, and the second gives the number of ones.</P>
      </ProblemHint>
      <ProblemAnswer>
        <M>26</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let <M>a</M> be the number of tens and <M>b</M> the number of ones. These are the two digits of the number.
          For example, <M>12</M> is <M>1\cdot 10 + 2</M>, meaning <M>1</M> ten and <M>2</M> ones. Likewise, <M>84</M> is{' '}
          <M>8\cdot 10 + 4</M>. We know the product of the digits is <M>12</M>, so:
        </P>
        <BlockMath>ab = 12</BlockMath>
        <P>
          We also know that adding <M>36</M> swaps the digits. Write that relation:
        </P>
        <BlockMath>{math`
          10a + b + 36 = 10b + a \\
          9a + 36 = 9b \\
          a + 4 = b
        `}</BlockMath>
        <P>
          Substitute the expression for <M>b</M> into <M>ab = 12</M>:
        </P>
        <BlockMath>{math`
          a(a + 4) = 12 \\
          a^2 + 4a - 12 = 0
        `}</BlockMath>
        <P>
          Since coefficient <M>A = 1</M> and the other coefficients are simple, you can{' '}
          <Dep on={manualFactoring}>factor it by hand</Dep>. Coefficient <M>C</M> is negative, so one number must be
          positive and the other negative. The numbers <M>2</M> and <M>-6</M> work because they add to <M>4</M> and
          multiply to <M>-12</M>. Therefore:
        </P>
        <BlockMath>{math`
          (a + 6)(a - 2) = 0
        `}</BlockMath>
        <P>
          So <M>a = -6</M> or <M>a = 2</M>. The number of tens cannot be negative, so take <M>a = 2</M>. Then{' '}
          <M>b = a + 4 = 6</M>. The number is <M>26</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <H2>Geometry</H2>

    <Problem title="Rectangle Sides" level="easy">
      <ProblemDescription>
        The perimeter of a rectangle is <M>46</M>, and its diagonal is <M>17</M>. Find the sides of the rectangle.
      </ProblemDescription>
      <MathValueCheck label="Rectangle sides" answers={[8, 15]} />
      <ProblemHint>Use the Pythagorean theorem to connect the sides to the diagonal.</ProblemHint>
      <ProblemAnswer>
        The rectangle's sides are <M>8</M> and <M>15</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Translate the text into equations. Let the rectangle sides be <M>a</M> and <M>b</M>. Then the perimeter gives:
        </P>
        <BlockMath>{math`
          a + b + a + b = 46 \\
          2a + 2b = 46
        `}</BlockMath>
        <P>
          Divide both sides by <M>2</M> and get the simple relation:
        </P>
        <BlockMath>a + b = 23</BlockMath>
        <P>
          That is not enough yet. We also know the diagonal, which forms a right triangle with legs <M>a</M> and{' '}
          <M>b</M>. So by the Pythagorean theorem:
        </P>
        <BlockMath>{math`
          a^2 + b^2 = 17^2 \\
          a^2 + b^2 = 289
        `}</BlockMath>
        <P>
          Express <M>a</M> from <M>a + b = 23</M> as <M>a = 23 - b</M>, then substitute:
        </P>
        <BlockMath>{math`
          (23 - b)^2 + b^2 = 289 \\
          529 - 46b + b^2 + b^2 = 289 \\
          2b^2 - 46b + 240 = 0
        `}</BlockMath>
        <P>
          Divide by <M>2</M> to simplify:
        </P>
        <BlockMath>{math`
          b^2 - 23b + 120 = 0
        `}</BlockMath>
        <P>
          Find the <Dep on={discriminant}>discriminant</Dep> and solve the equation with the{' '}
          <Dep on={quadraticFormula}>general quadratic formula</Dep>:
        </P>
        <BlockMath>{math`
          D = (-23)^2 - 4 \cdot 1 \cdot 120 = 529 - 480 = 49 \\
          b = \frac{-(-23) \pm \sqrt{49}}{2 \cdot 1} = \frac{23 \pm 7}{2}
        `}</BlockMath>
        <P>
          The roots are <M>b = 15</M> and <M>b = 8</M>. Both look fine, but if <M>b = 15</M>, then <M>a = 8</M>, and if{' '}
          <M>b = 8</M>, then <M>a = 15</M>. Same pair of sides either way. So the rectangle sides are <M>15</M> and{' '}
          <M>8</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Triangle Sides" level="easy">
      <ProblemDescription>
        The hypotenuse of a right triangle is <M>5</M>. If the smaller leg is tripled and the larger leg is multiplied
        by ten, the hypotenuse of the enlarged triangle becomes <M>41</M>. Find the lengths of the original legs.
      </ProblemDescription>
      <MathValueCheck label="Triangle sides" answers={[3, 4]} />
      <ProblemHint>Use the Pythagorean theorem to connect the triangle sides and the hypotenuse.</ProblemHint>
      <ProblemAnswer>
        The legs are <M>3</M> and <M>4</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>The legs and hypotenuse of a right triangle are related by the Pythagorean theorem:</P>
        <BlockMath>a^2 + b^2 = c^2</BlockMath>
        <P>
          Let the original legs be <M>a</M> and <M>b</M>. Then for the original triangle:
        </P>
        <BlockMath>{math`a^2 + b^2 = 5^2 \\ a^2 + b^2 = 25`}</BlockMath>
        <P>Now write the Pythagorean theorem for the enlarged triangle:</P>
        <BlockMath>{math`(3a)^2 + (10b)^2 = 41^2 \\ 9a^2 + 100b^2 = 1681`}</BlockMath>
        <P>
          From the first equation, express <M>a^2</M> through <M>b^2</M>: <M>a^2 = 25 - b^2</M>. Substitute that into
          the second equation:
        </P>
        <BlockMath>{math`
          9(25 - b^2) + 100b^2 = 1681 \\
          225 - 9b^2 + 100b^2 = 1681 \\
          91b^2 = 1681 - 225 \\
          91b^2 = 1456 \\
          b^2 = 16 \\
          b = \pm 4
        `}</BlockMath>
        <P>
          A side length cannot be negative, so this leg must be <M>4</M>. Plug that back into the first equation to find{' '}
          <M>a</M>:
        </P>
        <BlockMath>{math`
          a^2 + 4^2 = 25 \\
          a^2 + 16 = 25 \\
          a^2 = 9 \\
          a = \pm 3
        `}</BlockMath>
        <P>
          Therefore the other leg is <M>3</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Area and Perimeter" level="easy">
      <ProblemDescription>
        The area of a rectangle is <M>50</M>, and its perimeter is <M>30</M>. Find the sides of the rectangle.
      </ProblemDescription>
      <MathValueCheck label="Rectangle sides" answers={[5, 10]} />
      <ProblemHint>
        Write the formulas for the rectangle's area and perimeter. Express one side from one formula and substitute it
        into the other.
      </ProblemHint>
      <ProblemAnswer>
        The rectangle's sides are <M>5</M> and <M>10</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Let the sides be <M>a</M> and <M>b</M>. Then the area and perimeter are:
        </P>
        <BlockMath>{math`
          a \cdot b = 50 >>{big}{bottom} a + b + a + b = 30 \\ 2(a+b) = 30
        `}</BlockMath>
        <P>
          From the first equation, express <M>a</M> through <M>b</M>: <M>{math`a = 50/b`}</M>. Substitute that into the
          perimeter equation:
        </P>
        <BlockMath>{math`
          2\left(\frac{50}{b} + b\right) = 30 \\
          \frac{100}{b} + 2b = 30 \\
          100 + 2b^2 = 30b \\
          2b^2 - 30b + 100 = 0 \\
          b^2 - 15b + 50 = 0
        `}</BlockMath>
        <P>
          That gives a quadratic equation for one side. Since <M>A = 1</M> and the other coefficients are simple, you
          can factor it by hand: <M>-10</M> and <M>-5</M> add to <M>-15</M> and multiply to <M>50</M>.
        </P>
        <BlockMath>{math`
          (b - 10)(b - 5) = 0
        `}</BlockMath>
        <P>
          The roots are <M>b = 10</M> and <M>b = 5</M>. Plug either into the area formula to find <M>a</M>:
        </P>
        <BlockMath>{math`
          a = \frac{50}{10} = 5 >>{big} a = \frac{50}{5} = 10
        `}</BlockMath>
        <P>
          Either way, the rectangle sides are <M>5</M> and <M>10</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Mysterious Squares" level="medium">
      <ProblemDescription>
        The sides of two squares are proportional to the numbers <M>5</M> and <M>4</M>. If each side is reduced by{' '}
        <M>2</M>, then the difference of the new square areas is <M>28</M>. Find the original side lengths.
      </ProblemDescription>
      <MathValueCheck label="Square sides" answers={[8, 10]} />
      <ProblemHint>
        <P>
          The phrase "the sides of two squares (<M>a</M> and <M>b</M>) are proportional to <M>5</M> and <M>4</M>" means:
        </P>
        <BlockMath>{math`
          \frac{a}{b} = \frac{5}{4}
        `}</BlockMath>
      </ProblemHint>
      <ProblemHint>
        <P>
          Build an equation from the difference of the reduced square areas, which equals <M>28</M>. One area is{' '}
          <M>(a - 2)^2</M>, the other is <M>(b - 2)^2</M>.
        </P>
      </ProblemHint>
      <ProblemAnswer>
        The square sides are <M>10</M> and <M>8</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          The statement that the square sides <M>a</M> and <M>b</M> are proportional to <M>5</M> and <M>4</M> means:
        </P>
        <BlockMath>{math`
          \frac{a}{b} = \frac{5}{4}
        `}</BlockMath>
        <P>
          Multiply both sides by <M>b</M>, and one side is expressed through the other immediately:
        </P>
        <BlockMath>{math`
          a = \frac{5}{4}b
        `}</BlockMath>
        <P>
          The problem also says the difference of the reduced square areas is <M>28</M>. The reduced area of the square
          with side <M>a</M> is <M>(a - 2)^2</M>, and for side <M>b</M> it is <M>(b - 2)^2</M>. So:
        </P>
        <BlockMath>{math`
          (a - 2)^2 - (b - 2)^2 = 28
        `}</BlockMath>
        <P>Use the difference of squares formula:</P>
        <BlockMath>{math`
          (a - 2 - (b - 2))(a - 2 + (b - 2)) = 28 \\
          (a - b)(a + b - 4) = 28
        `}</BlockMath>
        <P>
          Substitute <M>{math`\frac{5}{4}b`}</M> for <M>a</M> and simplify:
        </P>
        <BlockMath>{math`
          \left(\frac{5}{4}b - b\right)\left(\frac{5}{4}b + b - 4\right) = 28 \\
          \left(\frac{1}{4}b\right)\left(\frac{9}{4}b - 4\right) = 28 \\
          \frac{9}{16}b^2 - b = 28 \\
          9b^2 - 16b = 448 \\
          9b^2 - 16b - 448 = 0
        `}</BlockMath>
        <P>
          We got a quadratic equation. Since coefficient <M>B</M> is even, use the{' '}
          <Dep on={evenQuadraticFormula}>simplified quadratic formula</Dep>:
        </P>
        <BlockMath>{math`
           b = \frac{-(-8) \pm \sqrt{(-8)^2 - 9 \cdot (-448)}}{9} = \frac{8 \pm \sqrt{64 + 4032}}{9} = \frac{8 \pm \sqrt{4096}}{9} = \frac{8 \pm 64}{9}
        `}</BlockMath>
        <P>
          The roots are <M>b = 8</M> and <M>{math`b = -\frac{56}{9}`}</M>. Negative side length is nonsense, so the
          second square has side <M>8</M>. Then the other side is:
        </P>
        <BlockMath>{math`
          a = \frac{5}{4}b = \frac{5}{4} \cdot 8 = 10
        `}</BlockMath>
        <P>
          Therefore the squares have sides <M>10</M> and <M>8</M>.
        </P>
      </ProblemSolution>
      <ProblemNote>
        <P>
          A deliberately overcomplicated wording can create extra confusion here. It may look as if the two sides are
          separately proportional to <M>5</M> and <M>4</M> with different coefficients.
        </P>
        <BlockMath>{math`a = 5x >>{big} b = 4y >>{big} x \neq y`}</BlockMath>
        <P>
          But the statement should be read literally: you are supposed to form the ratio <M>a : b = 5 : 4</M>.
        </P>
      </ProblemNote>
    </Problem>
  </>
));
