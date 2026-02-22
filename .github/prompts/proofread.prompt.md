---
agent: agent
model: Gemini 3 Pro (Preview) (copilot)
description: 'Proofreading'
---

You need to proofread the document.
Keep the simple and direct writing style, even strong swearlike phrasing is allowed.
The document context is math textbook so keep needed technical terms and phrasing.
Don't break JSX layout.

Restrictions:

- Do not touch double dashes (they are handled by engine)!
- Do not touch quotes (they are handled by engine)!
- Do not touch math formulas!
- Do not remove large chunks of text!
- Do not remove swear words!
- Do not add emdashes!

Your task is to fix following:

- Replace awkward and "non-native" phrases with more natural ones
- Spelling errors
- Grammar errors
- Punctuation errors (but without replacing dashes, hyphens and quotes)
