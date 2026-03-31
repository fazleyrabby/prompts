# Prompt Library

> A minimal, blazing-fast prompt library for developers. Built to be used daily — not visited once.

A compact, dense, utility-first UI built with **Astro**, **Tailwind CSS**, and **Vanilla JS**, featuring a soft, developer-grade dark mode and precise micro-interactions.

## 🚀 Features

- **Dark Mode Only**: A layered dark UI system (not pure black) optimized for readability.
- **Speed & Performance**: Static output with a Lighthouse score target of 95+. Zero hydration in Phase 1 setup.
- **Fast Copy Interactions**: 120ms transitions with instant clipboard actions.
- **Markdown Driven**: Prompts are stored and managed using Astro Content Collections.
- **Micro-Interactions**: Subtle, CSS-first animations, hover lifts, and scale presses.

## ✨ Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content:** Astro Content Collections (Zod validated Markdown)
- **Interactions:** Vanilla JavaScript
- **Syntax Highlighting:** Shiki (Astro built-in)

## 📦 File Structure

```text
src/
├── components/       # UI Components (PromptCard, CopyButton, Tag)
├── content/
│   ├── prompts/      # Markdown prompt files here
│   └── config.ts     # Zod schema definitions
├── layouts/          # Global layout structure
├── pages/            # View routing (Home, prompt details)
└── styles/           # Global CSS variables and Tailwind imports
```

## 🛠️ Getting Started

### Prerequisites

You need Node.js and a package manager (like `pnpm`, `npm`, or `yarn`) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fazleyrabby/prompts.git
   cd prompts
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

4. Build for production:
   ```bash
   pnpm run build
   ```

## 📝 Adding Prompts

To add a new prompt, simply create a new `.md` file in `src/content/prompts/` using the following frontmatter schema:

```markdown
---
title: "Title of your prompt"
description: "A short description"
category: "category_name"
tags: ["tag1", "tag2"]
preview: "/previews/image.png" # Optional placeholder fallback will run if not present
model: "claude-3-opus"
---

## Prompt

Your actual prompt content goes here.

## Notes

Add any optional usage tips here (this section is rendered under the prompt block).
```

## 📜 Roadmap

- [x] **Phase 1**: Core MVP (Card grid, detail page, copy button, dark UI)
- [ ] **Phase 2**: Filtering (Category grouping, tag filtering via URL parameters)
- [ ] **Phase 3**: Client-side Search (using Fuse.js)
- [ ] **Phase 4**: Scaling (Pagination, RSS feed, etc.)

*Updated: Tue Mar 31 23:28:30 +06 2026*
