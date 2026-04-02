import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Quadratic formulas and problems',
  navTitle: 'General formulas',
  description: `
    All the formulas, concepts, and methods for solving quadratic equations, with the logic behind their derivation.
    A set of mixed problems that reduce to quadratic trinomials or quadratic equations.
  `,
  flags: {
    secondary: true,
  },
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
