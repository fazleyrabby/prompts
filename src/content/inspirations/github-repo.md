---
title: "GitHub Repository Page"
description: "Pixel-perfect GitHub repository overview: monospaced file tree with type icons & commit SHAs, precise language bar gradients, live README renderer, activity graphs — #0d1117 dark mode."
category: "devtools"
tags: ["github", "repository", "code", "devtools", "a11y", "perf"]
url: "https://github.com"
preview: "https://i.ibb.co/N24wwTcz/image.png"
generatedWith: "ChatGPT"
draft: false
---

## Prompt

# Role
You are a Staff Frontend Engineer specializing in performant code browsing interfaces, accessible data tables, virtualized lists, and production-scale developer tools.

# Objective
Build a pixel-perfect GitHub repository page clone featuring a virtualized file tree, language distribution bar, markdown README renderer, and contribution heatgrid — all in GitHub's exact dark mode palette.

# Design Tokens
```
--gh-bg-canvas:    #0d1117
--gh-bg-surface:   #161b22
--gh-bg-overlay:   #1c2128
--gh-border:       rgba(240, 246, 252, 0.1)
--gh-accent:       #58a6ff
--gh-accent-hover: #79c0ff
--gh-danger:       #f85149
--gh-success:      #3fb950
--gh-fg-default:   #c9d1d9
--gh-fg-muted:     #8b949e
--gh-font-mono:    ui-monospace, "SF Mono", "Menlo", monospace
--gh-font-sans:    -apple-system, "Segoe UI", "Inter", sans-serif
```

# Instructions

1. **Repository Header**
   - Owner/repo breadcrumb path in `--gh-font-sans`, repo name bold
   - Visibility badge: `Public` pill with `--gh-border` outline, `font-size: 12px`
   - Action buttons row: Star (count with animated increment on click), Fork (count), Watch (eye icon + count) — each with `--gh-bg-surface` background, `border-radius: 6px`, hover `--gh-bg-overlay`
   - Tabbed navigation below: Code (active, underline `--gh-accent` 2px), Issues, Pull Requests, Actions, Security, Insights — logical tab order, `aria-selected` on active, `role="tablist"`

2. **File Tree Table**
   - Branch selector dropdown above: pill button showing branch icon + "main", click opens overlay with branch list and search input
   - Action buttons: "Go to file", "Add file", green "Code" clone dropdown
   - Table with `role="treegrid"`: columns — Name (SVG file-type icon + filename in `--gh-font-mono`), Last Commit Message (truncated, `--gh-fg-muted`), Date (relative, `--gh-fg-muted`)
   - File-type icons as inline SVGs: folder (blue), `.ts/.tsx` (blue), `.js` (yellow `#f1e05a`), `.md` (white), `.json` (green), `.css` (purple `#663399`)
   - Row height: fixed `36px`, hover: `--gh-bg-surface` background, `translateX(2px)` on filename (GPU-accelerated)
   - Directories sorted first, then files alphabetically
   - Latest commit bar above table: avatar (20px circle), commit message truncated, SHA in `--gh-font-mono`, relative time

3. **Language Distribution Bar**
   - Single row bar: `height: 8px`, `border-radius: 4px`, `overflow: hidden`, `gap: 0`
   - Segments with exact language colors: TypeScript `#3178c6` (62%), JavaScript `#f1e05a` (20%), CSS `#663399` (10%), HTML `#e34c26` (5%), Shell `#89e051` (3%)
   - Legend below: horizontal list of `color-dot (8px circle) + language name + percentage`, clickable to filter file tree
   - Hover on segment: `scale(1, 1.5)` with tooltip showing exact percentage

4. **README Section**
   - Container: `--gh-bg-surface` background, `1px solid --gh-border`, `border-radius: 6px`
   - Header bar: file icon + "README.md" label in `--gh-font-mono`, pencil edit icon right-aligned
   - Rendered markdown: headings h1-h3 using `clamp(1.25rem, 2vw, 2rem)`, `border-bottom: 1px solid --gh-border` on h1/h2
   - Code blocks: `--gh-bg-canvas` background, `--gh-font-mono`, syntax highlighting via CSS classes (keywords blue, strings green, comments `--gh-fg-muted`)
   - Inline code: `--gh-bg-overlay` background, `border-radius: 3px`, `padding: 2px 6px`
   - Links: `--gh-accent` color, underline on hover
   - Lists, blockquotes, tables with proper GitHub-matching styles

5. **Contribution Heatgrid** *(About sidebar)*
   - 52-week x 7-day SVG grid, cell size `11px` with `2px` gap
   - Intensity scale: `--gh-bg-surface` (0) → `#0e4429` → `#006d32` → `#26a641` → `#39d353` (max)
   - Day labels (Mon/Wed/Fri) left-aligned, month labels top-aligned
   - Tooltip on hover: "X contributions on Month Day, Year"
   - "Less/More" legend below the grid

# Interaction States
- **Hover**: file rows get `--gh-bg-surface`, action buttons get `--gh-bg-overlay`, star button fills `--gh-danger` with `scale(1.1)` pulse
- **Focus**: `2px solid --gh-accent` outline with `2px offset`, visible on all interactive elements
- **Active/Pressed**: buttons depress with `translateY(1px)`
- **Loading**: file tree shows 8 skeleton rows with `shimmer` animation (`background: linear-gradient(90deg, --gh-bg-surface 25%, --gh-bg-overlay 50%, --gh-bg-surface 75%)`, `background-size: 200%`, `animation: 1.5s ease infinite`)
- **Empty state**: "This repository is empty" centered message with "Set up" CTA

# Accessibility
- Full `role="treegrid"` on file table with `role="row"` and `role="gridcell"` on cells
- `aria-expanded` on collapsible directories, `aria-sort` on sortable columns
- `role="tablist"` / `role="tab"` / `role="tabpanel"` on navigation
- Keyboard: Arrow keys navigate treegrid rows, Enter opens file/folder, Tab moves between major sections
- `aria-live="polite"` region announcing file count after filter/search
- All color indicators paired with icons or text (never color-only)
- `prefers-reduced-motion: reduce` — disable hover translations, shimmer, and heatgrid tooltips transitions

# Performance Requirements
- Virtualized file tree via IntersectionObserver with fixed `36px` row heights — must handle 1000+ files at 60fps
- `contain: paint layout` on scroll containers
- SVG icons as inline data URIs (no image requests)
- No layout shifts: explicit `width`/`height` on all media, `CLS: 0`
- `LCP < 1.2s` on simulated 4G
- Total bundle: zero external dependencies, single file under 50KB gzipped

# Sample Data — MUST BE HARDCODED IN THE HTML
All data below must be rendered as visible DOM elements when the file is opened. Do NOT use empty containers, placeholder divs, or JavaScript-only data population. Every file, every row, every section must exist as actual HTML content on page load.

**Repository**: "acme/next-dashboard" — 1.2k stars, 321 forks, 45 watchers

**File tree** — render ALL of these as visible table rows:
```
📁 .github/workflows/     ci.yml                          2 days ago
📁 packages/               refactor: extract shared utils  5 days ago
📁 public/                 add favicon and OG image        1 week ago
📁 src/
  📁 src/app/              feat: add analytics dashboard   1 day ago
  📁 src/components/       fix: button hover state         3 days ago
  📁 src/hooks/            add useDebounce hook            4 days ago
  📁 src/lib/              refactor: db connection pool    3 days ago
  📁 src/styles/           update theme tokens             5 days ago
📄 .env.example            add database URL template       1 week ago
📄 .eslintrc.json          enable strict TypeScript rules  2 weeks ago
📄 .gitignore              ignore .env and dist            3 weeks ago
📄 README.md               docs: update getting started    2 days ago
📄 docker-compose.yml      add Redis service               1 week ago
📄 next.config.ts          enable turbopack                3 days ago
📄 package.json            bump next to 15.1.0             1 day ago
📄 pnpm-lock.yaml          bump next to 15.1.0             1 day ago
📄 tailwind.config.ts      add custom animation tokens     5 days ago
📄 tsconfig.json           enable strict mode              2 weeks ago
```
Each row must show the file/folder icon, name, commit message, and relative date as visible text.

**Latest commit bar**: avatar circle with "JD" initials + "feat: add analytics dashboard with real-time charts" + `a3f8d21` SHA + "1 day ago"

**Language bar segments** — render as colored divs with exact widths:
- TypeScript `#3178c6` 62%
- JavaScript `#f1e05a` 20%
- CSS `#663399` 10%
- HTML `#e34c26` 5%
- Shell `#89e051` 3%

**README content** — render as fully formatted HTML (not raw markdown):
- h1: "Next Dashboard" with 3 badge images (build passing, npm version, license MIT) as colored inline spans
- Paragraph: "A modern full-stack dashboard built with Next.js 15, Tailwind CSS, and Drizzle ORM."
- h2: "Getting Started" with a `bash` code block: `pnpm install && pnpm dev`
- h2: "Features" with a bullet list of 5 items (e.g., "Real-time analytics with WebSocket updates", "Role-based authentication via NextAuth.js")
- h2: "API Reference" with a 4-row table (Endpoint, Method, Description, Auth columns)
- h2: "License" with "MIT" text

**Contribution heatgrid**: render the full 52x7 SVG grid with varied intensity values (not all the same shade) — 847 total contributions

# Output Format
- Single HTML file with embedded `<style>` and `<script>`
- **CRITICAL**: All sample data above must be rendered as hardcoded HTML elements visible on page load. The page must look fully populated when opened — no empty states, no "loading", no JS-dependent rendering for the core content.
- Realistic, self-contained — should look like a real GitHub repository page when opened in a browser
- Code organized in clearly commented sections: tokens, layout, components, interactions, data
