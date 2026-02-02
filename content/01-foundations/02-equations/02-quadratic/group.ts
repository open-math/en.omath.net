export default defineGroup({
  title: 'Quadratic Equations',
  description: `
    A comprehensive overview of quadratic equations, including quadratic trinomials, completing the square,
    the discriminant, Vieta’s formulas, factoring, real-life applications, and even methods for solving them mentally.
  `,
  dependencies: [
    {
      dependency: $CONTENT.foundations.equations.elementary,
      reason:
        "Before solving quadratic equations, you must be able to solve elementary ones. There is no other way. Don't even try.",
    },
  ],
});
