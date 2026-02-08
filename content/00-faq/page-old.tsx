import { authorContribution } from '#project/utils/contributions';

export const page = definePage({
  title: 'About "Open Math"',
  description: `
    Answers to frequently asked questions: what is this site? why is it needed? who is it for?
    Recommendations for effectively using the site's features to learn mathematics.
    If you've just arrived at this site, start here.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
  flags: {
    dev: true,
  },
});

/**
 * - Who is this site for (not for "I don't want to think, I need to copy the answer", but for "I want to figure it out and understand math")
 * - If you couldn't solve a problem and looked up the solution — make sure to redo the problem yourself, and then again the next day.
 * - Links to any block can be easily obtained and shared.
 * - Always try to solve even example problems from the article on your own first.
 * - Always try to prove theorems yourself before opening the "Proof" section.
 * - Always solve all the problem numbers; they don't exactly repeat each other, and the further you go, the trickier they get!
 */

export const content = defineProse()(() => (
  <>
    <H1>The Role of "Foundations"</H1>

    <P>
      A starting point for everyone who doesn't have a clue about math at all. Doesn't know how to work with fractions,
      doesn't know how to solve equations or why they are needed, gets stuck on roots and powers, or for whom the
      concept of "irrational number" sounds like something from a sci-fi movie, and so on. If any of this (or all of it)
      describes you, start here:
    </P>

    <Reference to={$CONTENT.foundations}>
      All the most basic, simple, and necessary stuff. Absolutely all other materials on "Open Math" are written with
      the expectation that you have firmly grasped these foundations.
    </Reference>

    <Important title="No links to foundations!">
      In most materials on this site <B accent>you won't find links</B> to definitions, theorems, and formulas from the
      "Math Foundations" book. <B accent>This is not a mistake!</B> These are considered basics that every reader must
      know, understand, and be able to use "by default". This way, we don't clutter the text with endless links to
      elementary stuff.
    </Important>
  </>
));
