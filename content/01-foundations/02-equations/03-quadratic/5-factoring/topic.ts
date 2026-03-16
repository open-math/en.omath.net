import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Factoring quadratics',
  description: `
    Rewriting quadratic trinomials and quadratic equations as a product of factors instead of a sum of terms.
    Lets you solve equations quickly, simplify messy expressions, and spot the roots immediately.
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
      reason: `
        Completing the square is required to factor a quadratic trinomial in the general case, so you absolutely need to know how to use this method.
      `,
    },
    {
      dependency: $CONTENT.foundations.equations.quadratic.quadraticFormula,
      reason: `
        Factoring a quadratic trinomial uses the discriminant and the general root formula for quadratic equations. You need all of that, no excuses.
      `,
    },
  ],
});
