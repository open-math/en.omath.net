import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Completing the Square',
  description: `
    The technique of "packing" an expanded expression into a compact squared binomial.
    This method allows you to solve any quadratic equation!
    Let's learn how to do it with detailed examples and visualizations.
  `,
  dependencies: [
    {
      dependency: $CONTENT.foundations.polynomials.specialProducts,
      reason: `
        Completing the square means "packing" a quadratic trinomial into either the square of a sum or a difference.
        To understand this process, you need to know how to use these formulas!
      `,
    },
  ],
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
