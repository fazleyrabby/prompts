<div align="center">

# ⚡ Prompt Library

**A blazing-fast, developer-first prompt collection built for daily use.**

[Live Site](https://prompts.fazleyrabbi.xyz) · [Changelog](https://prompts.fazleyrabbi.xyz/changelog) · [Add a Prompt](#-adding-prompts)

![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222?logo=github)
![Prompts](https://img.shields.io/badge/33+-Prompts-6366F1)

</div>

---

## Overview

Prompt Library is a curated, searchable collection of **33+ production-ready prompts** for UI components, layouts, and developer tools. Built with Astro for zero-JS static output, it loads instantly and is designed to be a daily-use tool — not a portfolio piece.

### Why This Exists

Copy-pasting prompts from scattered notes and bookmarks is slow. This library puts every prompt in one place with instant search, category filtering, and one-click copy.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Sidebar Navigation** | Categories with counts, tag cloud, and favorites filter |
| **Instant Search** | Client-side search across titles, tags, and AI models |
| **Favorites** | Heart prompts for quick access — persisted in localStorage |
| **Pagination** | 8 items per page, auto-adjusts to search/filter results |
| **Detail Pages** | Syntax-highlighted prompts with breadcrumbs and related prompts |
| **Copy to Clipboard** | One-click copy with premium toast notifications |
| **Changelog** | Timeline-based release history at `/changelog` |
| **Mobile Responsive** | Collapsible sidebar with overlay on small screens |

---

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) — Static Site Generation, zero JS by default
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) — Utility-first, dark mode only
- **Content:** Astro Content Collections with Zod schema validation
- **Syntax Highlighting:** [Shiki](https://shiki.matsu.io/) via Astro built-in
- **Deployment:** GitHub Pages with automated CI/CD
- **Domain:** Custom subdomain via Cloudflare DNS

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/fazleyrabby/prompts.git
cd prompts

# Install
pnpm install

# Dev server
pnpm dev

# Build
pnpm build
```

> Requires Node.js 18+ and pnpm (or npm/yarn).

---

## 📝 Adding Prompts

Create a `.md` file in `src/content/prompts/`:

```markdown
---
title: "Your Prompt Title"
description: "A short, one-line description."
category: "dashboard"
tags: ["ui", "table", "data"]
model: "Claude 4.6 Opus"
---

## Prompt

Your actual prompt instructions go here.
Use bullet points for structured prompts:
- Requirement one
- Requirement two
- Technical constraint

## Notes

- Optional tips or usage context.
- Best practices for this prompt.
```

### Available Categories

`animation` · `api` · `authentication` · `card` · `dashboard` · `ecommerce` · `email` · `feedback` · `form` · `hero` · `landing-page` · `layout` · `marketing` · `media` · `modal` · `navigation` · `utility`

---

## 📁 Project Structure

```
src/
├── components/          # PromptCard, CopyButton, Tag, Toast
├── content/
│   ├── prompts/         # 33+ markdown prompt files
│   └── config.ts        # Zod schema validation
├── layouts/
│   └── BaseLayout.astro # Global shell with theme & toast
├── pages/
│   ├── index.astro      # Home — sidebar, grid, search, pagination
│   ├── changelog.astro  # Release timeline
│   └── prompt/
│       └── [slug].astro # Detail page with related prompts
└── styles/
    └── global.css       # Tailwind directives
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0B0F14` | Page background |
| `--surface` | `#111827` | Card backgrounds |
| `--border` | `rgba(255,255,255,0.08)` | Dividers and card borders |
| `--accent-start` | `#6366F1` | Primary accent (indigo) |
| `--accent-end` | `#8B5CF6` | Gradient end (violet) |
| `--text-primary` | `#E5E7EB` | Headings and body text |
| `--text-secondary` | `#9CA3AF` | Muted labels and descriptions |

---

## 📋 Roadmap

- [x] Core MVP — card grid, detail pages, copy button, dark UI
- [x] Client-side search across titles, tags, and models
- [x] Category and tag-based filtering
- [x] Pagination (8 per page)
- [x] Sidebar layout with sticky navigation
- [x] Breadcrumbs and related prompts on detail pages
- [x] Favorites with localStorage persistence
- [x] Toast notification system
- [x] Changelog page
- [x] 33+ curated prompts across 17 categories
- [ ] Keyboard shortcuts (`/` to search, `Esc` to clear)
- [ ] Share prompt as link
- [ ] Dark/Light mode toggle
- [ ] Prompt usage analytics (localStorage)
- [ ] RSS feed for new prompts
- [ ] Contribution guide

---

## 📄 License

MIT — use it, fork it, build on it.

---

<div align="center">
  <sub>Built by <a href="https://fazleyrabbi.xyz">Fazley Rabbi</a></sub>
</div>
