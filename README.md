<div align="center">

# Prompt Library

**A curated collection of ready-to-use AI prompts for developers and designers.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/fazleyrabby/prompts?style=flat)](https://github.com/fazleyrabby/prompts/stargazers)
[![CLI on npm](https://img.shields.io/npm/v/@fazleyrabbi/prompts?label=cli&color=cb3837)](https://www.npmjs.com/package/@fazleyrabbi/prompts)

[Browse Prompts](https://prompts.fazleyrabbi.xyz) · [CLI (NPM)](https://www.npmjs.com/package/@fazleyrabbi/prompts) · [Changelog](https://prompts.fazleyrabbi.xyz/changelog) · [Inspirations](https://prompts.fazleyrabbi.xyz/inspirations)

<img width="3144" height="1794" alt="Prompt Library Web" src="https://github.com/user-attachments/assets/1b4804b0-3130-42c4-8690-4ff1ae8c3d55" />

### CLI Preview

<img width="1962" height="1168" alt="Prompt Library CLI" src="https://github.com/user-attachments/assets/76a8d536-af78-41f1-a16f-4914715be64f" />

</div>

---

## What is this?

Prompt Library is a searchable collection of **48+ prompts** for building UI components, layouts, dashboards, and more with AI tools like Claude and ChatGPT.

Instead of digging through scattered notes or bookmarks every time you need a prompt, this puts everything in one place — organized by category, searchable, and ready to copy with a single click.

### Who is this for?

- **Developers** who use AI assistants daily and want a reliable prompt starting point
- **Designers** looking for structured prompts to generate UI components
- **Anyone** tired of rewriting the same instructions from scratch

---

## Features

- **Searchable library** — find prompts by title, tags, or AI model
- **Category & tag filtering** — narrow down to exactly what you need
- **One-click copy** — grab any prompt instantly
- **Favorites system** — bookmark your go-to prompts with localStorage persistence
- **Most Used section** — your frequently used prompts surface automatically
- **Dark mode** — easy on the eyes, always
- **CLI access** — browse and copy prompts right from your terminal
- **Keyboard shortcuts** — `⌘K` to search, `Esc` to clear, `←→` for pagination

---

## CLI

Use the prompt library directly from your terminal:

```bash
npx @fazleyrabbi/prompts
```

Browse, search, and copy prompts without leaving your terminal.

---

## Contributing

We welcome contributions! Adding a new prompt is straightforward:

1. **Fork** the repository and clone it locally
2. **Create a `.md` file** inside `src/content/prompts/` with this format:

```markdown
---
title: "Your Prompt Title"
description: "A short, one-line description."
category: "dashboard"
tags: ["ui", "table", "data"]
model: "Claude 4.6 Opus"
---

Your prompt content goes here.
```

3. **Open a Pull Request** — keep the title clear and describe what the prompt does

### Guidelines

- Prompts should be practical and tested — something you'd actually use
- Pick a category that fits: `animation` · `api` · `authentication` · `card` · `dashboard` · `ecommerce` · `email` · `feedback` · `form` · `hero` · `landing-page` · `layout` · `marketing` · `media` · `modal` · `navigation` · `utility`
- Bug fixes, UI improvements, and new feature ideas are also welcome — just open an issue first to discuss

---

## License

MIT — use it, fork it, build on it.

---

<div align="center">
  <sub>Built by <a href="https://fazleyrabbi.xyz">Fazley Rabbi</a></sub>
</div>
