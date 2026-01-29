import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
    title: 'Elementary Equations',
    description: `
        Learn how to solve and transform elementary equations step by step.
        Simple and visual, with clear examples and without memorizing a bunch of obscure rules.
        This is a key foundational skill in mathematics and the exact sciences.
    `,
    contributions: [
        {
            contributor: $CONTRIBUTOR.gwynerva,
            description: authorContribution,
        },
    ],
});
