import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
    title: 'What is a Quadratic Equation?',
    navTitle: 'What is it?',
    description: `
        Learn what a quadratic equation and a quadratic trinomial are, how they are related, and how to determine whether an equation is quadratic.
    `,
    contributions: [
        {
            contributor: $CONTRIBUTOR.gwynerva,
            description: authorContribution,
        },
    ],
});
