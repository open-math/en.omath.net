import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
    title: 'Elementary Equations',
    description: `
        We will learn how to solve elementary equations and transform equalities.
        Simple, visual, with examples and without memorizing a bunch of strange rules.
        This is a key and necessary skill in mathematics and all other exact sciences.
    `,
    contributions: [
        {
            contributor: $CONTRIBUTOR.gwynerva,
            description: authorContribution,
        },
    ],
});
