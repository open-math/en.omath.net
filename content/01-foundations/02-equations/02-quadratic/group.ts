export default defineGroup({
    title: 'Quadratic equations',
    description: `
        A comprehensive study of quadratic equations: quadratic trinomials, completing the square, discriminant, Vieta's formulas, factoring, real-life applications, and even mental math solutions!
    `,
    dependencies: [
        {
            dependency: $CONTENT.foundations.equations.elementary,
            reason: "Before solving quadratic equations, you must be able to solve elementary ones. There is no other way. Don't even try.",
        },
    ],
});
