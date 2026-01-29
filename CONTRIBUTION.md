# Improving the Material

You’re welcome to propose any edits or improvements to the material, including:

- Fixing typos
- Pointing out interesting resources that could enrich the content
- Additional explanations of existing material
- New, clear, and engaging examples and explanations
- New problems or solutions to existing ones
- Even entirely new articles!

If your suggestions lead to adding new content **(except for typo reports!)**, we can add your information (name, photo, a short bio, and links) to the authors page—if you’d like us to.

You can propose changes in two ways:

1. Edit the material directly on GitHub and create a Pull Request
2. Contact me via Telegram ([@gwynerva](https://t.me/gwynerva)) or by email ([the.gwynerva@gmail.com](mailto:the.gwynerva@gmail.com))

# How to Use Cross-References

You should **not** create cross-references within the textbook materials if the referenced element is located in the same section (under the same H1, H2, or H3 heading).

If a unique element is located in a different section, you may reference it in the new section **no more than once per “visibility area.”**
For example, you can include one link in a paragraph of that section, and one additional link in each collapsible block section such as hints, solutions, etc.

In problems, it is generally recommended that if a link does not appear directly in the problem statement, it should be duplicated as needed—once in each section where it is required (hints, solution, answer, notes).

# Using “External Links”

The “external links” section should include **only** resources that can genuinely provide additional useful information for a reader who has already studied the material on the site.

Example: suppose we have a group of materials called “Equations” in the textbook “Math Foundations”.

**Good candidates for external resources:**

- Collections of word problems that reduce to equations
- Books entirely devoted to specific types of equations (e.g., Diophantine, cubic, etc.)
- A solid and well-written school textbook for the relevant grade, with a large variety of equation problems

The material from the external resource does not have to be used directly in “Open Math.”
You can simply link to genuinely useful resources, even without borrowing anything from them into the articles themselves.

**Bad candidates for external resources:**

- A link to a social media post from which an interesting problem was taken.
  _There is no useful information there beyond the already copied problem._
- A link to a biographical website from which an image was taken for an article.
  _Again, the rest of the site’s content is unrelated to the article._

Once again — if an external resource does not contain anything that truly complements the existing material, **do not add it!**

In cases where a link **must be added by law** (for example, when required by the copyright holder), it can be placed directly inside the article text using the `<Ref />` tag:

```md
In the image below, you can see the first sketches of Saturn and its moons, which at the time were believed to form its “ring”.
These are scans from Huygens’ book _Systema Saturnium_, taken from the <Ref to="https://www.lindahall.org/about/news/scientist-of-the-day/christiaan-huygens-2/">Linda Hall Library</Ref> website.
```

Yes, it’s not particularly “nice” not to link to every source that inspired an idea or from which material was used in some form. However, this approach avoids spending a lot of time searching for the true original source (instead of reposts), checking that links are still working, and similar "reference-handling" hell.
