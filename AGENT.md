# Prompt Library — Project Spec v2

> A minimal, blazing-fast prompt library for developers.
> Built to be used daily — not visited once.

---

## Role

You are a **Senior Frontend Engineer + UI/UX Architect + Interaction Designer + Performance Specialist**.

Build a **minimal, static prompt library website** using a phased approach, a developer-grade dark UI system, and precise micro-interactions.

This is a **developer tool**, not a portfolio.

---

## Core Philosophy

Optimize for: **Speed → Readability → Instant usability → Clean UI → Fast copy interactions**

Engineering mindset:
- Ship MVP first, add features later
- Keep everything simple and scalable
- Build reusable components
- Focus on polish, not complexity

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Astro (latest) |
| Styling | Tailwind CSS |
| Content | Astro Content Collections (Markdown) |
| JS | Vanilla JS (Alpine.js only if filtering requires it) |
| Output | Static (GitHub Pages / Netlify) |

**Do NOT:** use a backend, add heavy frameworks, or overengineer.

---

## Design System

### Design Direction

Inspired by Stripe, Linear, and Vercel — adapted into a **compact, dense, utility-first dark UI**.

> Soft, layered dark. NOT pure black. NOT harsh. NOT glassy.

### Avoid

- Pure black (`#000`)
- Heavy glow or bloom effects
- Glassmorphism / blur
- Brutalist UI
- Harsh contrast ratios

---

### Color Tokens

```css
/* Background */
--bg: #0B0F14;

/* Surfaces */
--surface: #111827;
--surface-hover: #161B22;

/* Borders */
--border: rgba(255, 255, 255, 0.08);
--border-hover: rgba(255, 255, 255, 0.14);

/* Text */
--text-primary: #E5E7EB;
--text-secondary: #9CA3AF;

/* Accent */
--accent-start: #6366F1;
--accent-end: #8B5CF6;
--accent: linear-gradient(135deg, var(--accent-start), var(--accent-end));
```

### Layering System

```
--bg (base canvas)
  └── --surface (card background)
        └── --border (1px subtle edge)
              └── --surface-hover (on hover)
```

### Typography

- Display / headings: `DM Sans` or `Plus Jakarta Sans` (not Inter, not Space Grotesk)
- Body / meta: `JetBrains Mono` or `IBM Plex Mono` for prompt content; same sans for UI labels
- Load via `<link rel="preconnect">` + Google Fonts — no font JS

---

## Component Specs

### 1. PromptCard (`PromptCard.astro`)

**Structure (top to bottom):**

```
┌─────────────────────────────┐
│  Preview Image (16:9)       │  ← placeholder if no image
├─────────────────────────────┤
│  Title                      │  ← --text-primary, medium weight
│  Description (1 line clamp) │  ← --text-secondary, small
│                             │
│  [tag] [tag] [tag]          │  ← pill tags
│                             │
│  Model badge    [Copy]      │  ← bottom row
└─────────────────────────────┘
```

**Visual rules:**
- Background: `--surface`
- Border: `1px solid var(--border)`
- Border radius: `10px`
- Shadow: `0 1px 3px rgba(0,0,0,0.3)`
- No heavy gradients inside cards

**Hover state:**
```css
transform: translateY(-2px);
box-shadow: 0 4px 16px rgba(0,0,0,0.45);
border-color: var(--border-hover);
transition: all 160ms ease-out;
```

**Preview image fallback:**
- If no image provided in frontmatter, render a styled placeholder using the card's `category` field as a label (e.g. a dark surface with centered category text in monospace). Do NOT use broken `<img>` tags.

---

### 2. CopyButton (`CopyButton.astro`)

**States:**
| State | Text | Style |
|---|---|---|
| Default | `Copy Prompt` | ghost button, `--border` |
| Active (click) | scale `0.97` | 120ms ease-out |
| Copied | `Copied ✓` | accent color fill |
| Reset (2s later) | `Copy Prompt` | reverts |

**Implementation:**
```js
async function copyPrompt(text, btn) {
  await navigator.clipboard.writeText(text);
  btn.textContent = 'Copied ✓';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.textContent = 'Copy Prompt';
    btn.classList.remove('copied');
  }, 2000);
}
```

---

### 3. Tag (`Tag.astro`)

- Pill style: `px-2 py-0.5`, `border-radius: 999px`
- Background: `rgba(99, 102, 241, 0.1)`
- Text: `--accent-start`, small/mono font
- Hover: background `rgba(99, 102, 241, 0.2)`, `cursor: pointer`
- Transition: `100ms ease`
- In Phase 2: clicking a tag filters the grid

---

### 4. BaseLayout (`BaseLayout.astro`)

- `<html lang="en">` with `class="dark"`
- Meta: title, description, OG tags (pulled from page props)
- Preconnect to Google Fonts
- Global CSS tokens injected here
- Page fade-in: `opacity 0 → 1`, `150ms ease`, CSS only

---

### 5. Detail Page (`prompt/[slug].astro`)

**Layout:**

```
← Back to Library                     [Copy Full Prompt]

Title
Description
Tags: [tag] [tag]     Model: claude-3-opus

────────────────────────────────────────

## Prompt

┌──────────────────────────────────────┐
│  (syntax-highlighted prompt block)   │
│  monospace, --surface, line numbers  │
└──────────────────────────────────────┘

## Notes

(rendered markdown)
```

**Rules:**
- Prompt block: `<pre><code>` with `--surface` background, subtle inner border, `overflow-x: auto`
- Syntax highlight: use `shiki` (Astro built-in) with `github-dark` or `vesper` theme
- Back button: top-left, `← Back`, ghost style, `--text-secondary`
- Copy button here copies the full raw prompt (same component, different size variant)
- Model badge: small pill, same style as tags but distinct color — e.g. `rgba(16, 185, 129, 0.12)` with green text

---

## Content Schema

### Frontmatter (strict)

```yaml
---
title: "Stripe-style Animated Hero"
description: "Modern SaaS hero with gradients and motion"
category: "hero"                        # used for grouping + placeholder label
tags: ["stripe", "animation", "gradient"]
preview: "/previews/stripe-hero.png"    # optional — omit if no image
model: "claude-3-opus"                  # displayed as a badge on card + detail
---
```

### Body structure

```markdown
## Prompt

[The actual prompt text — this is what gets copied]

## Notes

- Optional tips or model-specific guidance
- Works best with Tailwind
```

### Content Collection config (`src/content/config.ts`)

```ts
import { defineCollection, z } from 'astro:content';

const prompts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    preview: z.string().optional(),
    model: z.string(),
  }),
});

export const collections = { prompts };
```

---

## Project Structure

```
src/
  content/
    prompts/
      stripe-hero.md
      glass-card.md
      dashboard-ui.md

  components/
    PromptCard.astro
    CopyButton.astro
    Tag.astro

  layouts/
    BaseLayout.astro

  pages/
    index.astro          ← card grid
    prompt/[slug].astro  ← detail page

public/
  previews/
    stripe-hero.png      ← optional; fallback renders if missing
```

---

## Page Specs

### `index.astro` (Library Home)

- Header: site name left, optional tagline right
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, `gap-5`
- Cards: fetched via `getCollection('prompts')`
- No JS filtering in Phase 1 — static render only
- Footer: minimal, `--text-secondary`, copyright line

### `prompt/[slug].astro` (Detail)

- Generated via `getStaticPaths()` from collection
- Renders detail layout as defined in Component Specs above
- Prompt text extracted from the `## Prompt` section of the markdown body

---

## Micro-Interactions Summary

| Interaction | Behavior | Duration |
|---|---|---|
| Card hover | `translateY(-2px)` + shadow increase + border brighten | 160ms ease-out |
| Copy button click | scale `0.97 → 1` + text → "Copied ✓" | 120ms ease-out |
| Copy reset | reverts after 2s | — |
| Tag hover | background opacity increase | 100ms ease |
| Button active | subtle scale press | 80ms |
| Page load | fade-in `opacity 0 → 1` | 150ms ease |

All interactions: CSS where possible, no JS animation libraries.

---

## Preview Images — Strategy

Three options (pick one per prompt, or mix):

1. **Real screenshot** — generate from the UI it produces, save as `/public/previews/[slug].png`
2. **Static placeholder** — rendered in CSS using `category` label; no broken images
3. **Omit `preview` field** — component auto-renders the placeholder variant

**Phase 1 recommendation:** ship with placeholders, swap in real screenshots as you build prompts.

---

## Phased Development Plan

### 🟢 Phase 1 — MVP (Ship this)
- [ ] BaseLayout with design tokens
- [ ] PromptCard component (with image fallback)
- [ ] CopyButton with copied state
- [ ] Tag component
- [ ] Index page — static card grid
- [ ] Detail page — full prompt + copy button
- [ ] 3–5 seed prompt files
- [ ] Mobile-responsive layout
- [ ] Page fade-in

### 🟡 Phase 2 — Filtering
- [ ] Tag-based filtering (Alpine.js or vanilla JS)
- [ ] Category grouping (optional section headers)
- [ ] Active tag highlight state
- [ ] URL param persistence (`?tag=hero`)

### 🔵 Phase 3 — Search
- [ ] Client-side fuzzy search (Fuse.js — ~4kb)
- [ ] Search input in header
- [ ] Results highlight matching text

### 🟣 Phase 4 — Scale (only if needed)
- [ ] Pagination or infinite scroll
- [ ] Prompt submission form (Netlify Forms)
- [ ] RSS feed

---

## Performance Requirements

- Lighthouse score: **95+**
- Zero hydration on Phase 1 (fully static)
- Fonts: preconnect + `font-display: swap`
- Images: `width`/`height` on all `<img>`, lazy loading
- No unnecessary client-side JS
- Bundle size target: `< 10kb JS` for Phase 1

---

## UX Rules (Non-Negotiable)

```
Fast > Fancy
Clear > Creative
Subtle > Loud
```

- Every interaction must have feedback
- No loading states in Phase 1 (everything is static)
- Copy must work on first click — no double-tap required
- Mobile: cards stack to single column, copy button full-width

---

## Final Goal

A **clean, fast, dark-mode prompt library** that feels like a tool you reach for every day.

Not a showcase. Not a portfolio. A utility.