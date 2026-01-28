import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
    title: 'What is Quadratic Equation?',
    navTitle: 'What is it?',
    description: `
        Let's figure out what a quadratic equation and a quadratic trinomial are.
        How these terms appeared, how they are similar, and how they differ.
        Learn to determine whether an equation is quadratic.
    `,
    contributions: [
        {
            contributor: $CONTRIBUTOR.gwynerva,
            description: authorContribution,
        },
    ],
});
