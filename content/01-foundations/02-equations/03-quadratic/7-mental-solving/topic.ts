import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Mental Solving of Quadratic Equations',
  navTitle: 'Mental solving',
  description: `
    A detailed breakdown of every way to solve quadratic equations mentally.
    Includes infinitely generated practice problems for each method separately and for all methods mixed together.
  `,
  flags: {
    secondary: true,
    advanced: true,
  },
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
