import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: "Vieta's Formulas",
  description: `
    Two simple and very useful formulas that connect the roots of a quadratic trinomial with its coefficients.
    They let you check roots quickly, build equations, and study special kinds of quadratic equations.
  `,
  flags: {
    secondary: true,
  },
  dependencies: [
    {
      dependency: $CONTENT.foundations.equations.quadratic.factoring,
      reason: `
        Writing a quadratic trinomial as a product of factors leads straight to Vieta's formulas, so you absolutely need to know how factoring works.
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
