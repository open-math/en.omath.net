import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'What is a Quadratic Equation?',
  navTitle: 'What is it?',
  description: `
    Learn how quadratic equations arise from real-life situations,
    what quadratic equations and quadratic trinomials are,
    how they are related, and how to determine whether an equation is quadratic.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
