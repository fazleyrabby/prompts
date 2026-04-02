---
title: "Linear App Dashboard"
description: "Pixel-perfect Linear dashboard: 48px header, 240→64px sidebar collapse, monospace breadcrumbs/IDs, priority dots, status chips — #0f1117 dark, keyboard-first (Cmd+K palette)."
category: "dashboard"
tags: ["linear", "dashboard", "minimal", "navigation", "keyboard", "perf"]
url: "https://linear.app"
preview: "https://i.ibb.co/0jrvwHrt/Clean-Shot-2026-04-02-at-13-59-33.webp"
generatedWith: "Google AI Studio"
draft: false
---

## Prompt

# Role
You are a Staff Frontend Engineer specializing in keyboard-first UIs, resizable panel layouts, information-dense data tables, and zero-lag 60fps interactions.

# Objective
Build a pixel-perfect Linear app dashboard clone with a collapsible sidebar, compact navigation header, virtualized issue list, and full keyboard navigation — all in Linear's ultra-minimal dark aesthetic.

# Design Tokens
```
--linear-bg-canvas:     #0f1117
--linear-bg-surface:    #1a1d23
--linear-bg-overlay:    #232730
--linear-bg-hover:      #262b35
--linear-border:        rgb(71 85 105 / 0.12)
--linear-border-hover:  rgb(99 102 241 / 0.2)
--linear-accent:        #6366f1
--linear-accent-hover:  #818cf8
--linear-fg-default:    #f8fafc
--linear-fg-muted:      #94a3b8
--linear-fg-subtle:     #64748b
--linear-font-mono:     ui-monospace, "SF Mono", "Menlo", monospace
--linear-font-sans:     "Inter var", -apple-system, "Segoe UI", sans-serif
```
Font features: `font-feature-settings: 'rlig' 1, 'calt' 1; letter-spacing: -0.01em` on monospace elements.

# Instructions

1. **Collapsible Sidebar** (expanded: `240px`, collapsed: `64px`)
   - Smooth width transition: `transition: width 200ms ease`
   - Expanded: SVG icon (20px) + label per item; collapsed: icon-only with tooltip on hover
   - Sections with subtle `--linear-fg-subtle` uppercase headers (`font-size: 11px`, `letter-spacing: 0.05em`):
     - **Navigation**: Inbox (with unread count badge), My Issues, Views
     - **Workspace**: Projects (expandable with sub-items), Teams
     - **Favorites**: user-pinned items with drag handle
     - **Footer**: Settings, Invite, Collapse toggle (chevron icon)
   - Active item: `--linear-accent` left border (3px), `--linear-bg-hover` background
   - Unread badge: `--linear-accent` background, white text, `min-width: 18px`, `border-radius: 9px`
   - Collapse toggle: bottom-pinned button, rotates chevron 180deg on collapse

2. **Top Navigation Bar** (exactly `48px` height, `position: sticky`, `top: 0`, `z-index: 50`)
   - `backdrop-filter: blur(8px)`, `background: --linear-bg-canvas / 0.8`
   - Left: breadcrumbs in `--linear-font-mono` — "Team / Project / View" with `/` separators in `--linear-fg-subtle`, each segment clickable, last segment bold, overflow `text-overflow: ellipsis`
   - Center: search input — `Cmd+K` badge (styled `<kbd>` with `--linear-bg-surface` background, `border-radius: 4px`, `font-size: 11px`), expands on focus
   - Right: notification bell (with dot indicator), user avatar (`32px` circle, `ring: 1px --linear-border`), dropdown trigger
   - Bottom border: `1px solid --linear-border`

3. **Issue List** (main content area)
   - **Toolbar row**: view toggle (List/Board icons), filter pills (Status, Priority, Assignee — each as `--linear-bg-surface` pill with dropdown), sort dropdown, "New Issue" button (`--linear-accent` background)
   - **Group headers**: collapsible, showing status icon + label + issue count, `font-weight: 600`
   - **Issue rows** (fixed `44px` height for virtualization):
     - Priority icon (colored dot — Urgent: `#f43f5e`, High: `#f97316`, Medium: `#eab308`, Low: `#6366f1`, None: `--linear-fg-subtle`)
     - ID in `--linear-font-mono` (`--linear-fg-subtle`, `font-size: 12px`): "PROJ-142"
     - Title: `--linear-fg-default`, truncated, `font-size: 14px`
     - Status chip: icon + label in colored pill (Backlog: gray, Todo: white outline, In Progress: `--linear-accent` fill, Done: green `#22c55e`, Cancelled: `--linear-fg-subtle` strikethrough)
     - Assignee avatar (`24px` circle) or unassigned placeholder (dashed circle)
     - Due date (if set): `--linear-fg-muted`, red if overdue
   - Row hover: `--linear-bg-hover` background, shows inline action icons (right-aligned): assign, set priority, archive
   - Rows grouped by status, each group collapsible

4. **Keyboard Navigation**
   - `Cmd+K` / `Ctrl+K`: opens command palette overlay (search field + recent actions list, `--linear-bg-overlay` background, `border-radius: 12px`, centered modal with `backdrop-filter: blur(12px)`)
   - `j` / `k`: move focus down/up through issues (vim-style), active row gets `--linear-border-hover` left border
   - `Enter`: open focused issue detail (slide-in panel from right, `width: 50%`)
   - `x`: select/deselect issue (checkbox), `Shift+click` for range select
   - `/`: focus filter input
   - `Esc`: close any open panel/modal, deselect all
   - Roving tabindex on issue list: `tabindex="-1"` on all rows, `tabindex="0"` on focused row, `aria-activedescendant` updates

# Interaction States
- **Hover**: rows get `--linear-bg-hover`, sidebar items get `--linear-bg-hover`, action icons fade in (`opacity: 0 → 1`)
- **Focus**: `2px solid --linear-accent` outline, `2px offset` — visible on all focusable elements
- **Selected**: checkbox filled with `--linear-accent`, row gets `--linear-accent / 0.05` background tint
- **Loading**: issue rows show skeleton with shimmer animation (same pattern as real rows but with `--linear-bg-surface` blocks)
- **Empty state**: centered illustration placeholder + "No issues match your filters" + "Clear filters" link

# Accessibility
- Sidebar: `<nav aria-label="Workspace navigation">`, `role="tree"` for collapsible sections
- Issue list: `role="grid"`, `aria-rowcount` for total issues, `aria-colcount` for columns
- Status/priority conveyed via `aria-label` (not just color)
- All keyboard shortcuts shown in `<kbd>` elements with `aria-keyshortcuts` on their targets
- `prefers-reduced-motion: reduce` — disable sidebar width transition, row hover translations, skeleton shimmer

# Performance
- Virtual scrolling on issue list: IntersectionObserver with fixed `44px` rows, render only visible + 5 row buffer
- Sidebar resize via ResizeObserver syncing CSS custom property
- CSS `contain: paint layout` on scrollable containers
- CSS Grid for main layout (sidebar + content), no `flex-grow` hacks
- `requestAnimationFrame` for scroll-linked updates, no polling timers
- Zero external dependencies, single HTML file

# Sample Data — MUST BE HARDCODED IN THE HTML
All data below must be rendered as visible DOM elements when the file is opened. Do NOT use empty containers or JS-only data population. Every sidebar item, every issue row, every badge must exist as actual HTML content on page load.

**Workspace**: "Acme Engineering" — **Project**: "Web Platform"

**Sidebar items** — render all of these as visible navigation items:
- Inbox (3 unread badge)
- My Issues
- Views
- **Projects**: Web Platform (active), Mobile App, Design System, Infrastructure
- **Teams**: Engineering, Design, Product
- **Favorites**: "Sprint 24 Board", "My Pull Requests"
- Settings, Invite Members

**Team members** (used for assignees — render as colored initials circles):
- **JD** (blue `#3b82f6`) — Jane Doe
- **AK** (purple `#8b5cf6`) — Alex Kim
- **MR** (green `#22c55e`) — Maria Rodriguez
- **TS** (orange `#f97316`) — Tom Singh

**Issue list** — render ALL of these as visible table rows, grouped by status:

```
Status Group: In Progress (8)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Urgent  WEB-142  Fix authentication redirect loop on OAuth callback    [In Progress]  JD   Due: Apr 3
🟠 High    WEB-138  Migrate database connection pooling to PlanetScale    [In Progress]  AK
🟠 High    WEB-145  Add rate limiting to public API endpoints             [In Progress]  MR
🟡 Medium  WEB-131  Implement dark mode toggle in settings page           [In Progress]  TS
🟡 Medium  WEB-139  Add WebSocket support for real-time notifications     [In Progress]  JD
🟡 Medium  WEB-144  Refactor shared component library to use CSS modules  [In Progress]  AK
🟣 Low     WEB-128  Update onboarding flow copy and illustrations         [In Progress]  MR
🟣 Low     WEB-136  Add keyboard shortcuts help modal                     [In Progress]  TS

Status Group: Todo (5)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟠 High    WEB-146  Set up error monitoring with Sentry integration       [Todo]  —
🟡 Medium  WEB-147  Create API documentation with OpenAPI spec            [Todo]  JD
🟡 Medium  WEB-148  Add E2E tests for checkout flow                       [Todo]  —
🟣 Low     WEB-149  Optimize image loading with blur placeholders         [Todo]  AK
⚪ None    WEB-150  Research AI-powered search for help center            [Todo]  —

Status Group: Backlog (3)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟡 Medium  WEB-151  Add multi-language support (i18n)                     [Backlog]  —
🟣 Low     WEB-152  Create component storybook documentation              [Backlog]  —
⚪ None    WEB-153  Evaluate migration from REST to tRPC                  [Backlog]  —

Status Group: Done (7)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Urgent  WEB-130  Patch XSS vulnerability in markdown renderer          [Done]  JD
🟠 High    WEB-127  Upgrade Next.js from 14 to 15                         [Done]  AK
🟠 High    WEB-133  Add Stripe subscription billing integration           [Done]  MR
🟡 Medium  WEB-125  Implement infinite scroll on activity feed            [Done]  TS
🟡 Medium  WEB-129  Set up CI/CD pipeline with GitHub Actions             [Done]  JD
🟣 Low     WEB-124  Add loading skeletons to dashboard cards              [Done]  AK
🟣 Low     WEB-126  Fix timezone display in user profile                  [Done]  MR

Status Group: Cancelled (2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟡 Medium  WEB-134  Build custom analytics dashboard (replaced by Mixpanel)  [Cancelled]  —
⚪ None    WEB-135  Add RSS feed for blog (deprioritized)                    [Cancelled]  —
```

**Toolbar state**: "List" view active, no filters applied, sorted by Priority (descending)

**Breadcrumbs**: "Acme Engineering / Web Platform / All Issues"

# Output Format
- Single HTML file with embedded `<style>` and `<script>`
- **CRITICAL**: All sample data above must be rendered as hardcoded HTML elements visible on page load. The page must look fully populated when opened — no empty states, no "loading", no JS-dependent rendering for the core content. Every issue row, sidebar item, and badge must be visible immediately.
- Realistic, self-contained — should look like the actual Linear app when opened in a browser
- Code organized in clearly commented sections: tokens, layout, sidebar, header, issue list, keyboard handlers, data
