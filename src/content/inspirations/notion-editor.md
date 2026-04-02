---
title: "Notion Block Editor"
description: "Production Notion block editor: 64px gutters, 28px block min-h, slash /cmdk fuzzy insert, drag grip popover menu, SelectionAPI toolbar — exact clean/dark toggle, ProseMirror-perf vanilla."
category: "editor"
tags: ["notion", "editor", "blocks", "rich-text", "cmdk", "a11y"]
url: "https://notion.so"
preview: "https://i.ibb.co/cXgzQ57k/Clean-Shot-2026-04-02-at-13-56-25.webp"
generatedWith: "Claude"
draft: false
---

## Prompt

# Role
You are a Staff Editor Engineer specializing in vanilla block editors, browser Selection/Range APIs, floating UI positioning, and reading-optimized typography systems.

# Objective
Build a pixel-perfect Notion-style block editor with contenteditable blocks, a slash command menu with fuzzy filtering, drag handles with block action menus, and a floating inline formatting toolbar — clean, minimal, and dark-mode ready.

# Design Tokens
```
/* Light mode (default) */
--notion-bg:           #ffffff
--notion-bg-hover:     #f7f7f5
--notion-bg-active:    #efefef
--notion-bg-code:      #f7f6f3
--notion-border:       rgba(55, 53, 47, 0.09)
--notion-fg:           #37352f
--notion-fg-muted:     #787774
--notion-fg-placeholder: #c7c5c1
--notion-accent:       #2eaadc
--notion-font-body:    -apple-system, "Segoe UI", "Inter", sans-serif
--notion-font-mono:    "SFMono-Regular", "Consolas", "Liberation Mono", monospace
--notion-font-serif:   "Lyon-Text", "Georgia", "Cambria", serif

/* Dark mode (prefers-color-scheme: dark) */
--notion-bg:           #191919
--notion-bg-hover:     #252525
--notion-bg-active:    #2f2f2f
--notion-bg-code:      #2f2f2f
--notion-border:       rgba(255, 255, 255, 0.09)
--notion-fg:           #e6e3dd
--notion-fg-muted:     #9b9a97
--notion-fg-placeholder: #5a5a5a
```

# Instructions

1. **Editor Container**
   - Centered: `max-width: 708px`, `margin: 0 auto`, `padding: 96px 64px`
   - Left gutter zone: `64px` reserved for drag handles and block controls
   - Typography: `--notion-font-body`, `font-size: 16px`, `line-height: 1.75`, `-webkit-font-smoothing: antialiased`
   - Smooth scroll behavior, no visible scrollbar in WebKit (thin scrollbar in Firefox)

2. **Block System**
   - Each block: `<div contenteditable="true" data-block-type="..." data-block-id="...">` with `min-height: 28px`, `padding: 3px 0`
   - **Supported block types** with their rendering:
     - **Paragraph**: default, `font-size: 16px`
     - **Heading 1**: `font-size: 30px`, `font-weight: 700`, `margin-top: 32px`
     - **Heading 2**: `font-size: 24px`, `font-weight: 600`, `margin-top: 22px`
     - **Heading 3**: `font-size: 20px`, `font-weight: 600`, `margin-top: 16px`
     - **Bullet List**: `padding-left: 24px`, bullet as `::before` content `"•"` in `--notion-fg-muted`, `margin-right: 8px`
     - **Numbered List**: `padding-left: 24px`, auto-incrementing counter via CSS `counter-increment`
     - **To-do**: checkbox (`18px` square, `border-radius: 3px`, `--notion-border` border) + text, checked: strikethrough + `--notion-fg-muted`
     - **Quote**: `border-left: 3px solid --notion-fg`, `padding-left: 16px`, `font-size: 16px`
     - **Code**: `--notion-bg-code` background, `--notion-font-mono`, `font-size: 14px`, `padding: 16px 20px`, `border-radius: 4px`
     - **Callout**: icon (emoji) + text in `--notion-bg-hover` background, `border-radius: 4px`, `padding: 16px`
     - **Divider**: `<hr>` with `1px solid --notion-border`, `margin: 8px 0`
   - Empty block placeholder: `"Type '/' for commands..."` in `--notion-fg-placeholder`, shown via CSS `::before` on `:empty` blocks
   - Block focus: no visible outline, but `4px` left accent border on `--notion-accent` when editing

3. **Drag Handle & Block Menu**
   - Handle: `⋮⋮` grip icon (6 dots in 2x3 grid), positioned in the left gutter (`left: -52px` relative to block)
   - Visibility: `opacity: 0` by default, `opacity: 1` on block hover, `transition: opacity 100ms`
   - Handle hover: `--notion-bg-hover` circle background, `cursor: grab`
   - **Click opens block action menu** (floating popover, `--notion-bg` background, `--notion-border` border, `border-radius: 6px`, `box-shadow: 0 4px 12px rgba(0,0,0,0.15)`, `min-width: 240px`):
     - Actions: Delete, Duplicate, Copy link, Turn into... (submenu with block types), Move to... (placeholder)
     - Each row: icon (20px) + label, hover `--notion-bg-hover`
     - Keyboard: arrow keys navigate, Enter selects, Esc closes
   - Entrance animation: `opacity: 0 → 1`, `scale: 0.98 → 1`, `200ms ease-out`

4. **Slash Command Menu**
   - Trigger: typing `/` at the start of an empty block (or on a new line)
   - Floating dropdown positioned below cursor using `Selection.getRangeAt(0).getBoundingClientRect()`
   - Menu: `--notion-bg` background, `border-radius: 8px`, `box-shadow: 0 8px 24px rgba(0,0,0,0.2)`, `max-height: 320px`, scrollable
   - **Grouped sections** with `--notion-fg-muted` headers (`font-size: 12px`, `text-transform: uppercase`, `letter-spacing: 0.03em`):
     - **Basic Blocks**: Text, Heading 1/2/3, Bulleted List, Numbered List, To-do, Quote, Divider
     - **Media**: Code, Callout, Image (placeholder)
   - Each row: icon (24px, colored) + label (bold) + description (`--notion-fg-muted`, `font-size: 12px`)
   - Row height: `44px`, active row: `--notion-bg-hover` background
   - **Fuzzy filtering**: as user types after `/`, filter items by matching against label (highlight matching characters with `<mark>` in `--notion-accent` color)
   - Keyboard: `ArrowUp`/`ArrowDown` navigate, `Enter` inserts block type, `Esc` closes and removes `/` text

5. **Inline Formatting Toolbar**
   - Trigger: appears when text is selected within a block, positioned above selection via `Selection.getRangeAt(0).getBoundingClientRect()`
   - Position: `position: fixed`, centered above selection rect, `8px` gap above text, clamped to viewport edges
   - Style: `--notion-bg` (dark in light mode: `#37352f`, light in dark mode: `#e6e3dd`), `border-radius: 6px`, `box-shadow: 0 2px 8px rgba(0,0,0,0.3)`, `padding: 4px`
   - **Buttons**: Bold (B), Italic (I), Underline (U), Strikethrough (S), Code (monospace icon), Link (chain icon)
     - Each: `32px` square, `border-radius: 4px`, icon in contrasting color
     - Active state (format applied): `--notion-accent` background tint, `aria-pressed="true"`
     - Hover: lighter background
     - Separator `|` line between formatting group and link button
   - Entrance: `opacity: 0 → 1`, `translateY(4px) → 0`, `150ms ease-out`
   - Dismiss: on click outside, `Esc`, or selection collapse
   - Update position on scroll/resize via `requestAnimationFrame` loop (cancel on dismiss)

# Interaction States
- **Block hover**: drag handle fades in, very subtle `--notion-bg-hover` background on the full block row
- **Block focused**: left accent border, placeholder text disappears
- **Drag handle hover**: circular background highlight, cursor changes to grab
- **Menu open**: focus trapped inside, backdrop transparent (click outside closes)
- **Text selected**: inverted selection color (`--notion-accent` background with white text)
- **Empty editor**: single empty paragraph block with centered placeholder "Start writing, or press '/' for commands"

# Accessibility
- Each block: `role="textbox"`, `aria-multiline="true"`, `aria-label` describing block type (e.g., "Heading 1 block")
- Slash menu: `role="listbox"`, items as `role="option"`, `aria-activedescendant` on active item
- Formatting toolbar: `role="toolbar"`, `aria-label="Text formatting"`, buttons with `aria-pressed` state
- Block menu: `role="menu"` with `role="menuitem"` children
- Keyboard shortcuts: `Cmd+B` bold, `Cmd+I` italic, `Cmd+U` underline, `Cmd+E` inline code, `Cmd+Shift+S` strikethrough
- `Tab` moves focus between blocks, `Shift+Tab` moves backwards
- `Enter` creates new paragraph block below, `Backspace` on empty block deletes it and focuses previous
- `prefers-reduced-motion: reduce` — disable toolbar/menu entrance animations, use instant show/hide

# Performance
- Blocks are plain DOM nodes (no virtual DOM or framework overhead)
- Toolbar/menu positioning synced via `requestAnimationFrame`, not scroll event listeners
- Fuzzy filter runs synchronously on keystroke (no debounce needed for <50 items)
- `contain: layout` on individual blocks to isolate repaints
- No external dependencies — vanilla HTML, CSS, JavaScript

# Sample Content — MUST BE HARDCODED IN THE HTML
All content below must be rendered as visible, editable contenteditable blocks when the file is opened. Do NOT render an empty editor. Every block must exist as actual HTML content on page load, with formatting applied inline (not via markdown).

Render the following blocks in order, each as its own contenteditable div:

**Block 1 — Heading 1:**
```
Project Kickoff Notes
```

**Block 2 — Paragraph** (with inline formatting):
```
Welcome to the kickoff doc for the Dashboard Redesign project. This initiative was
greenlit on Monday and targets a Q3 launch. The primary goal is to improve time-to-insight
for our analytics users.
```
Apply formatting: "Dashboard Redesign" in **bold**, "Q3 launch" in **bold**, "time-to-insight" in *italic*, and "analytics users" in *italic*.

**Block 3 — Heading 2:**
```
Action Items
```

**Block 4–7 — To-do blocks** (render checkboxes with text):
```
☑ Set up the new Next.js 15 project repository with Turborepo
☑ Finalize the design tokens with the design team
☐ Build the real-time WebSocket data layer for live charts
☐ Write E2E tests for the onboarding flow using Playwright
```
First two checked (strikethrough + muted), last two unchecked.

**Block 8 — Heading 2:**
```
Technical Decisions
```

**Block 9–11 — Bullet list blocks:**
```
• Use Server Components by default, Client Components only for interactive widgets
• Adopt Drizzle ORM over Prisma for better edge runtime compatibility
• Deploy on Vercel with ISR for marketing pages and SSR for dashboard routes
```

**Block 12 — Quote block:**
```
"The best interface is one that gets out of the way and lets the data speak."
— Alex, Head of Product
```

**Block 13 — Code block** (with language label "TypeScript"):
```typescript
import { db } from "@/lib/database";
import { analyticsEvents } from "@/schema";
import { desc, eq, sql } from "drizzle-orm";

export async function getRecentEvents(userId: string) {
  return db
    .select()
    .from(analyticsEvents)
    .where(eq(analyticsEvents.userId, userId))
    .orderBy(desc(analyticsEvents.createdAt))
    .limit(50);
}
```

**Block 14 — Callout block** (with 💡 emoji icon):
```
Remember to check the Figma file for the latest component specs before
starting implementation. The design team updates it every Tuesday.
```

**Block 15 — Divider:**
A horizontal rule / separator line.

**Block 16 — Paragraph:**
```
Next sync is scheduled for Thursday at 2pm. Bring your questions about the
data model — we need to finalize the schema before sprint planning on Friday.
```

# Output Format
- Single HTML file with embedded `<style>` and `<script>`
- **CRITICAL**: All sample content above must be rendered as hardcoded contenteditable blocks visible on page load. The editor must look like a real document with varied block types when opened — no empty editor, no placeholder-only state.
- Supports both light and dark mode via `prefers-color-scheme` media query
- Realistic, self-contained — should look like an actual Notion page when opened in a browser
- Code organized in clearly commented sections: tokens, typography, blocks, drag handles, slash menu, formatting toolbar, keyboard handlers, sample data
