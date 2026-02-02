export default defineBook({
  title: 'Math Foundations',
  description: `
    Core math foundations: essential topics, formulas, and concepts that form the basis of mathematics.
    Ideal for beginners with no prior knowledge.
    Clear, simple explanations throughout.
  `,
  externals: [
    {
      type: 'web',
      title: 'LibreTexts Mathematics',
      info: 'An open and free online collection of mathematics educational materials.',
      link: 'https://math.libretexts.org/',
      reason: 'A large amount of materials and many typical practice problems.',
    },
  ],
});
