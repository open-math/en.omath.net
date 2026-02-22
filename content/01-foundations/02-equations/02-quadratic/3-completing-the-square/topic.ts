import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Completing the Square',
  description: `
    The technique of "packing" an expanded expression into a compact squared binomial.
    This method allows you to solve any quadratic equation!
    Let's learn how to do it with detailed examples and visualizations.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
