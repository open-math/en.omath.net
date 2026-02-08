import { authorContribution } from '#project/utils/contributions';

import concept from './assets/concept.svg';
import linkAnywhere from './assets/link-anywhere.mp4';
import rightNotebook from './assets/right-notebook.webp';
import variantsToDonate from './assets/variants-to-donate.webp';

export const page = definePage({
  title: 'About "Open Math"',
  description: `
    Answers to frequently asked questions: what is this site? who is it for?
    Recommendations for effectively using the site features to learn math.
    If you just arrived at this site, start here.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});

export const content = defineProse({
  uniques: {
    goal: Important,
    noCheating: P,
    howToLearn: H1,
    _principles: List,
    _morePracticeAdvices: Details,
  },
})(({ uniques }) => (
  <>
    <H1>What is this site?</H1>

    <P>
      Everyone has internet access today. It contains a huge amount of scattered resources on math with fragmentary
      data. In some places, the theory is presented well; in others, there are only problems, and so on... And we are
      creating a single resource with the best materials for learning mathematics, without the need to look for theory
      or problems elsewhere.
    </P>

    <Image src={concept} width="800px" />

    <Important
      $={uniques.goal}
      title='Goal of "Open Math"'
      snippet={{
        quick: 'Project goal',
        seo: 'Goal of "Open Math"',
        description: `
          To become the ideal and unified resource for self-study of mathematics.
          So that anyone can understand the theory (in Articles), remember key points (in Summaries), and comprehensively practice applying the knowledge to problems (in Practicums).
        `,
      }}
    >
      <P>
        To become the ideal and unified resource for <B accent>self-study</B> of mathematics. So that{' '}
        <B accent>anyone</B> can understand the theory (in Articles), remember key points (in Summaries), and
        comprehensively practice applying the knowledge to problems (in Practicums).
      </P>
    </Important>

    <P>Key project principles:</P>

    <List type="ul" $={uniques._principles}>
      <Li>
        <P>
          <B>This is not an ad.</B>
        </P>
        <P>
          Many tutors, online schools, and universities create "web textbooks" specifically with free materials. The
          goal is to appear in search engines for math-related queries and advertise their services/courses/training.
          "Open Math" is <B>NOT</B> and will never <B>BE</B> such a project.
        </P>
      </Li>
      <Li>
        <P>
          <B>All content is free. Forever.</B>
        </P>
        <P>
          No "trial periods", paid subscriptions, or other bullshit. All project materials are always available to
          anyone. We <B accent>smash obstacles</B> to access knowledge, not create new ones.
        </P>
      </Li>
      <Li>
        <P>
          <B>Everyone can contribute.</B>
        </P>
        <P>
          Authors are everyone who has written or proposed decent content. If you have something to add: an interesting
          problem, a real-life example, a clearer explanation — don't keep it to yourself,{' '}
          <Ref to="/contributors/">make</Ref> "Open Math" even better!
        </P>
      </Li>
    </List>

    <H1>Who is this site for?</H1>

    <P center serif>
      <B>For everyone who wants to understand math, see its beauty and utility for real life.</B>
    </P>

    <P>
      What about age? It starts from the ability to self-learn (approx. <M>13</M> years old) and has no upper limit. The
      material is presented in a simple format, without abstruse formulations. It will be interesting for both teenagers
      and adults. In extremely rare cases, you might encounter swear words, but only where it is really needed.
    </P>

    <P
      $={uniques.noCheating}
      snippet={{
        quick: true,
        seo: '"Open Math" is not a cheat sheet!',
        title: 'This is not a cheat sheet!',
        description: `
          The goal of "Open Math" is to teach you to understand the material yourself,
          derive formulas, and solve problems, not to give ready-made answers!
        `,
      }}
    >
      For those who love to cheat — <B>"Open Math" is not a solutions manual!</B> You can quickly peek at formulas in
      Summaries, verify answers to problems in Practicums. But you won't find any "homework answers pdf" or "math
      answers for grade 7". Our goal is to teach you to understand the material yourself, derive formulas, and solve
      problems, not to give ready-made answers!
    </P>

    <H1>The role of "Math Foundations"</H1>

    <P>
      Starting point for everyone who doesn't know jack about math. It is for those who don't know how to work with
      fractions or solve equations (or why they are needed at all), who get stumped by roots and powers, for whom the
      concept of an "irrational number" sounds like something from a sci-fi movie, and so on. If any of this (or all at
      once) applies to you, go here:
    </P>

    <Reference to={$CONTENT.foundations}>
      Everything most basic, simple, and necessary. Absolutely all other "Open Math" materials are written with the
      expectation that you have firmly grasped these foundations.
    </Reference>

    <Important title="NO links to foundations!">
      In most materials on this site, <B accent>you won't find links</B> to definitions, theorems, and formulas from the
      "Math Foundations" textbook. <B accent>This is not a mistake!</B> This is considered the knowledge base that every
      reader should know, understand, and be able to use "by default". So we don't have to clutter the text with endless
      links to elementary stuff.
    </Important>

    <H1
      snippet={{
        quick: 'Links anywhere',
        description: `
          You can link not only to the page entirely, but to any element inside it!
        `,
      }}
    >
      Links to materials
    </H1>

    <P>
      Did you know you can get a direct link to <B>any element</B> of any page? Just hover your cursor (or tap) to the
      left of the element you want to link to, and select "Copy link"!
    </P>

    <Video src={linkAnywhere} autoplay width="450px" />

    <P>
      This works even with nested blocks (theorem proofs, problem solutions, etc.)! Very convenient when you need to
      link to a specific place in the material.
    </P>

    <H1
      $={uniques.howToLearn}
      snippet={{
        quick: 'How to learn?',
        description: `
          Theory (Understand) → Summary (Memorize) → Practice (Consolidate).
          Solve all problems.
        `,
      }}
    >
      How to learn math?
    </H1>

    <P>
      Check the table of contents for what you want to study, and get to it! If you know nothing, then go to{' '}
      <Ref to={$CONTENT.foundations}>Math Foundations</Ref>. Almost all "Open Math" study materials consist of{' '}
      <B>Topics</B>. Each topic is divided into three parts:
    </P>

    <Diagram>
      {`
        flowchart TD
          topic[Topic] -->|1. Read and understand| article[**Article**]
          topic -->|2. Memorize essentials| summary[**Summary**]
          topic -->|3. Practice skills| practice[**Practice**]
          class article,summary,practice fill
      `}
      <Caption>"Open Math" topics structure</Caption>
    </Diagram>

    <List type="ol">
      <Li>
        <B>Article.</B> A detailed and interesting narrative. Its goal is to convey the material to you in every way
        possible: through examples, different formulations, jokes, and so on. At this stage, you just immerse yourself
        and delve into the material. You don't need to learn anything by heart!
      </Li>
      <Li>
        <B>Summary.</B> A brief excerpt of the most important points from the article: definitions, theorems, formulas,
        etc. This is what must firmly remain in your head after studying the material, what needs to be memorized!
      </Li>
      <Li>
        <B>Practice.</B> Various problems that will teach you to correctly apply theory in practice. Try to solve
        everything, even "sub-problems" (they get trickier the further you go)! If you couldn't solve a problem and
        looked at the solution — definitely solve it again immediately and then again the next day! There are more tips,{' '}
        <Ref to={uniques._morePracticeAdvices}>but not all fit</Ref>...
      </Li>
    </List>

    <Details $={uniques._morePracticeAdvices} title="More practice tips">
      <List type="ul">
        <Li>
          So you (think you have) solved the problem. Follow the chain of buttons under the problem, from left to right:
          "Check" → "Hint" → "Answer" → "Solution". Do not rush to open, for example, "Answer" immediately. First, try
          to pass the "Check" a couple of times, use "Hints"!
        </Li>
        <Li>
          Even if you solved the problem correctly yourself, study its "Solution" regardless. It is important not only
          to get the correct answer, but also to understand the <B>right train of thought</B> that leads to it!
        </Li>
        <Li>
          Be sure to read "Notes" to problems! They contain important conclusions, generalizations, or interesting
          facts.
        </Li>
        <Li>
          If you cannot repeat the solution of a problem without peeking into the solution — you have not mastered the
          material. <B>Repeat until you solve it yourself!</B>
        </Li>
        <Li>
          <P>Problem difficulty levels / Material knowledge levels:</P>
          <P>
            <B>"Elementary"</B> = most elementary ideas about the material: plug a number into a formula.
            <Br />
            <B>"Intermediate"</B> = normal level of understanding and ability to operate with the material: transform
            formulas, combine them, solve problems in several steps.
            <Br />
            <B>"Advanced"</B> level (not for everyone) = ability to apply material creatively and non-standardly +
            olympiad problems.
          </P>
        </Li>
      </List>
    </Details>

    <P>
      Don't even try to learn whole big topics in one day! It's counterproductive. It is better to spend a day on
      theory, summary, and "Elementary" level problems. And then another day/two on "Intermediate" level (you can even
      swing at "Advanced", it's cool there). At the same time, start every day by repeating key points from the summary.
    </P>

    <P>
      Get a notebook for solving problems to write everything out by hand, solve, correct, and mark what's important!
      Just not some lame, flimsy notebook with <M>25</M> pages, but a Notebook with a capital N — with <M>80</M> pages!
    </P>

    <Image src={rightNotebook} width="800px">
      <Caption>You will have a lot of notes!</Caption>
    </Image>

    <H1
      snippet={{
        quick: 'Support the project!',
        description: `Help us become even better! Suggest content or make a donation.`,
      }}
    >
      How to support the project?
    </H1>

    <P>
      <Ref to={uniques._principles}>As already mentioned</Ref>, the project is not promotional, and all content is
      completely free. Writing quality and interesting material requires a lot of time. Unfortunately, scientists
      haven't figured out how to feed people with just "cool content" yet (wouldn't that be great?), so this project
      relies on the financial support of readers like you.
    </P>

    <Image src={variantsToDonate} width="800px" />

    <P>
      If you would like to, you can <Ref to={'/sponsors/'}>support the project financially</Ref>. When setting up
      regular payments, your details (photo/avatar, icon, name, wishes) will be displayed on the sponsors page, as well
      as at the top of every page of the site materials!
    </P>

    <P>
      <B>Help make the best math content! 🤝</B>
    </P>

    <H1 snippet={{ quick: 'How to contact?' }}>Who is in charge here?</H1>

    <P>
      "The Boss" is Peter Radko. I developed the engine of this site (and many of its previous iterations), and also
      wrote most of the materials. The project took more than seven years to reach its current form. For any questions,
      you can contact me via Telegram <Ref to="https://t.me/gwynerva">@gwynerva</Ref> or by email{' '}
      <Ref to="mailto:the.gwynerva@gmail.com">the.gwynerva@gmail.com</Ref>
    </P>

    <P>
      For content questions, besides me, you can contact any "editor" whom you can find in the list of{' '}
      <Ref to="/contributors/">project authors</Ref>.
    </P>

    <H1>How does it work?</H1>

    <P>
      The project runs on the universal educational site engine{' '}
      <Ref to="https://github.com/erudit-js/erudit">Erudit</Ref>. With its help, you can create "Open Physics", "Open
      Chemistry", and any other modern educational projects. There is full support for cross-references with automatic
      dependency formation, beautiful blocks, diagrams, mathematical formulas, and other cool stuff. The project is open
      source. Anyone can use it for their own purposes!
    </P>

    <P>
      The operating principle is very simple. All files are written in TypeScript TSX (a superset of JavaScript), then
      the Erudit engine processes, analyzes, and turns them into ready-made web pages.{' '}
      <Ref to="https://github.com/open-math/en.omath.net/blob/main/content/00-faq/page.tsx">This is how</Ref> the source
      code of this very page you are reading now looks. Everything is beautifully formatted and broken down by tags!
    </P>
  </>
));
