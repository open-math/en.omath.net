import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Quadratic formula',
  description: `
    A clear derivation of the quadratic formula with a detailed explanation of every step.
    Learn what the discriminant is, where it comes from, and how it tells you how many roots a quadratic equation has.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
  dependencies: [
    {
      dependency: $CONTENT.foundations.equations.quadratic.completingTheSquare,
      reason: 'The quadratic formula is derived by completing the square, so you really need to know how that works!',
    },
  ],
});
