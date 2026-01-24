export default defineBook({
    title: 'Math Foundations',
    description: `
        All the foundational and most useful topics, formulas, and concepts on which all of mathematics is built.
        The perfect starting point if you are a complete beginner in mathematics.
        No prior knowledge required!
        Everything is explained in a simple and understandable language.
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
