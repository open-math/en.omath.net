export default defineGroup({
    title: 'Quadratic Equations',
    description: `
        A comprehensive overview of quadratic equations: quadratic trinomials, completing the square, discriminant,
        Vieta's formulas, factoring, real-life applications, and even methods for solving them quickly in your head!
    `,
    dependencies: [
        {
            dependency: $CONTENT.foundations.equations.elementary,
            reason: "Before solving quadratic equations, you must be able to solve elementary ones. There is no other way. Don't even try.",
        },
    ],
});
