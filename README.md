<p align="center" style="text-align: center;">
    <img src="https://raw.githubusercontent.com/open-math/shared/refs/heads/main/assets/repository-banner.png" />
</p>

<h1 align="center">Open Math</h1>

<p align="center">
    <strong>A modern mathematics textbook — clear, interesting, detailed.</strong><br>
    Content repository for textbook in english.
</p>

<p align="center">
🌐 <a href="https://en.omath.net">Site</a>
✍🏻 <a href="./CONTRIBUTION.md">Contribute</a>
💎 <a href="https://boosty.to/omath.en">Sponsor</a>
</p>

<p align="center">▨</p>

## Local installation

If you want to make serious contributions to project like rewriting whole sections or even creating new topics, it is best for you to setup the project on your computer.
To do so:

1. Install [Node.js](https://nodejs.org/en/download)
2. Install [Bun](https://bun.sh/)
3. Prepare a folder on your PC and copy this repository in it.<br>
   While inside the target folder, this can be done via terminal command:

    ```bash
    git clone https://github.com/open-math/en.omath.net.git ./
    ```

4. Install dependencies:

    ```bash
    bun install
    ```

5. Build the project:

    ```bash
    bun run build
    ```

You are ready to make any contributions now!
All textbook content lies in `content` folder.
To see your changes live in action, `launch` the project:

```bash
bun launch
```

After that you can see the local project site on adress: http://localhost:3000

When you fill you are ready, just create a pull request with your changes.

## Technologies used

All "Open Math" content is written using [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) syntax, which is just a syntax sugar for writing content in XML-like markup. All JSX content is handled via [`@jsprose/core`](https://github.com/jsprose/core) package. It translates all tags to plain data objects, collects toc/search/unique elements and etc.

The [Erudit](https://github.com/erudit-js/erudit) CMS handles everything else: watching content changes, building frontend, providing default prose tags and many many more...
