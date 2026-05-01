import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Special Products',
  description: `
    Square of a sum and a difference, difference of squares, and cube of a sum and a difference -- very useful formulas
    that let you quickly expand or factor expressions with powers.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
