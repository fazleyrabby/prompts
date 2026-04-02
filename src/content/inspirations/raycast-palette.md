---
title: "Raycast Command Palette"
description: "Raycast 2.0 palette: glassmorphism overlay, fuse fuzzy cat groups (Commands/Files/Extensions), 52px rows kbd hints, virtual list 60fps, Cmd+K→action bar — #1a1d23 blur(20px)."
category: "navigation"
tags: ["raycast", "command-palette", "search", "keyboard", "fuzzy", "glass"]
url: "https://raycast.com"
preview: "https://i.ibb.co/k2yn3DH3/Clean-Shot-2026-04-02-at-14-09-39.webp"
generatedWith: "Google AI Studio"
draft: false
---

## Prompt

# Role
You are a Staff Frontend Engineer specializing in command palette UX, fuzzy search algorithms, glassmorphism interfaces, keyboard-driven navigation, and macOS-native-feeling web components.

# Objective
Build a pixel-perfect Raycast-style command palette with glassmorphism modal, instant fuzzy search with categorized results, keyboard-first navigation, and an action footer bar — polished, fast, and fully keyboard-driven.

# Design Tokens
```
--ray-bg-overlay:      rgba(0, 0, 0, 0.5)
--ray-bg-palette:      rgba(26, 29, 35, 0.92)
--ray-bg-surface:      #232730
--ray-bg-hover:        rgba(99, 102, 241, 0.1)
--ray-bg-active:       rgba(99, 102, 241, 0.15)
--ray-bg-kbd:          #2a2d37
--ray-border:          rgba(255, 255, 255, 0.08)
--ray-border-focus:    rgba(99, 102, 241, 0.3)
--ray-accent:          #6366f1
--ray-accent-glow:     rgba(99, 102, 241, 0.25)
--ray-fg-default:      #f1f5f9
--ray-fg-muted:        #94a3b8
--ray-fg-subtle:       #64748b
--ray-fg-highlight:    #c7d2fe
--ray-font-sans:       -apple-system, "SF Pro Text", "Inter", sans-serif
--ray-font-mono:       ui-monospace, "SF Mono", monospace
--ray-blur:            blur(20px)
--ray-radius-modal:    16px
--ray-radius-row:      8px
--ray-shadow:          0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)
```

# Instructions

1. **Trigger & Backdrop**
   - Open with `Cmd+K` (Mac) / `Ctrl+K` (Windows/Linux) — prevent default browser behavior
   - Backdrop: `--ray-bg-overlay` with `backdrop-filter: blur(4px)`, covers full viewport
   - Click on backdrop closes palette
   - Entrance animation: backdrop fades in `opacity: 0 → 1` over `150ms`, palette scales `transform: scale(0.96) → scale(1)` + `opacity: 0 → 1` over `200ms` with `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like ease-out)
   - Exit animation: reverse at `150ms` with `ease-in`

2. **Palette Container**
   - Centered: `max-width: 640px`, `width: 90vw`, `max-height: min(480px, 80vh)`
   - Background: `--ray-bg-palette` with `backdrop-filter: --ray-blur` (glassmorphism)
   - `border-radius: --ray-radius-modal`, `box-shadow: --ray-shadow`
   - `border: 1px solid --ray-border`
   - Layout: vertical flex — search input → results list → footer

3. **Search Input**
   - Container: `padding: 16px`, `border-bottom: 1px solid --ray-border`
   - Left: magnifying glass SVG icon (`20px`, `--ray-fg-muted`)
   - Input: `font-size: 17px`, `--ray-fg-default`, transparent background, no border/outline, `font-family: --ray-font-sans`, `font-weight: 400`
   - Placeholder: `"Search commands, files, and more..."` in `--ray-fg-subtle`
   - Right: clear button (`X` circle icon) — appears when input has text, `opacity: 0 → 1` transition, hover `--ray-fg-default`
   - Auto-focused on open, `autofocus` attribute

4. **Results List**
   - Scrollable container: `flex: 1`, `overflow-y: auto`, `padding: 8px`
   - Custom scrollbar: `4px` wide, `--ray-bg-surface` track, `--ray-fg-subtle` thumb, `border-radius: 2px`
   - **Category headers**: `font-size: 12px`, `font-weight: 600`, `text-transform: uppercase`, `letter-spacing: 0.04em`, `--ray-fg-subtle`, `padding: 8px 12px 4px`, `border-bottom: 1px solid --ray-border` (except first group)
   - **Result rows** (`52px` height, `border-radius: --ray-radius-row`, `padding: 0 12px`):
     - Left: category-colored icon (`32px` container, `24px` icon, `border-radius: 8px` with subtle tinted background matching icon color)
     - Center: primary label (`--ray-fg-default`, `font-weight: 500`, `font-size: 14px`, truncate) + description on same line right-aligned (`--ray-fg-muted`, `font-size: 13px`, truncate)
     - Right: keyboard shortcut as `<kbd>` badges — `--ray-bg-kbd` background, `border: 1px solid --ray-border`, `border-radius: 4px`, `padding: 2px 6px`, `font-family: --ray-font-mono`, `font-size: 11px`, `--ray-fg-muted`
     - Multiple key combos separated with gap (e.g., `⌘` `K` as two badges)
   - **Active row**: `--ray-bg-hover` background, `ring: 2px solid --ray-border-focus` (inset), label becomes `--ray-fg-highlight`
   - **Fuzzy match highlighting**: matching characters wrapped in `<mark>` — `background: transparent`, `color: --ray-fg-highlight`, `font-weight: 600`
   - Smooth scroll: active item always in view via `scrollIntoView({ block: 'nearest' })`

5. **Footer Actions Bar**
   - `border-top: 1px solid --ray-border`, `padding: 8px 16px`, `height: 44px`
   - Left side: breadcrumb showing current context (e.g., "Raycast" or selected category)
   - Right side: action hints as label + kbd pairs, separated by `12px` gap:
     - `Enter` → "Open" (or contextual action name)
     - `Tab` → "Actions"
     - `⌘ C` → "Copy"
     - `Esc` → "Close"
   - Labels: `font-size: 12px`, `--ray-fg-subtle`; kbd badges same style as result row shortcuts

6. **Fuzzy Search Algorithm**
   - Implement lightweight fuzzy matching (no external library):
     - Split query into characters, match sequentially against item label
     - Score by: consecutive matches (bonus), match at word start (bonus), shorter items ranked higher
     - Threshold: hide results below `0.3` score
   - Filter preserves category grouping — empty categories are hidden
   - No results state: centered message "No results for '...'" in `--ray-fg-muted`, with suggestion "Try a different search term"
   - Search is instant — runs synchronously on every keystroke (no debounce for static data)

# Keyboard Navigation
- `ArrowDown` / `ArrowUp`: move highlight through results (wraps around at top/bottom)
- `Enter`: execute the primary action for highlighted result
- `Tab`: open actions submenu for highlighted result (show 3-4 contextual actions in a small popover above the footer)
- `Cmd+C` / `Ctrl+C`: copy highlighted result value
- `Escape`: close palette (if actions submenu is open, close that first)
- `Backspace` on empty input: if in a sub-context, go back to root; otherwise close palette
- Type-ahead: any keystroke while palette is open goes to search input (no need to click)

# Interaction States
- **Hover on row**: `--ray-bg-hover` background (mouse and keyboard highlight are independent — mouse hover previews, keyboard controls the actual active item)
- **Row pressed**: `--ray-bg-active` background, slight `scale(0.99)` for `100ms`
- **Input focused**: subtle `--ray-accent-glow` box-shadow on the search area
- **Empty state** (no query): show "Recent" category with last 5 items, then "Suggestions" with 5 popular commands
- **Loading state** (if extending to async): pulsing shimmer rows matching row height, 3 rows

# Accessibility
- Palette: `role="dialog"`, `aria-modal="true"`, `aria-label="Command palette"`
- Search input: `role="combobox"`, `aria-expanded="true"`, `aria-controls` pointing to results list, `aria-activedescendant` tracking active row
- Results list: `role="listbox"`, each row `role="option"` with `aria-selected`
- Category headers: `role="presentation"` (not selectable)
- Focus trap: Tab/Shift+Tab cycle within palette (input → results → footer), never escapes to page behind
- `prefers-reduced-motion: reduce` — entrance/exit animations become instant opacity toggle, no scale transform, no row press animation

# Performance
- Fuzzy search runs synchronously in `requestAnimationFrame` callback to avoid input lag
- Results list renders only visible items + 5 buffer (virtual scrolling for 60fps if list exceeds 50 items)
- Icons as inline SVGs (no network requests)
- Single `keydown` listener on the dialog element, delegated (not per-row)
- `contain: layout paint` on the results scroll container
- Zero external dependencies

# Sample Data — MUST BE HARDCODED IN THE HTML
All data below must be rendered as visible result rows inside the palette when the file is opened. The palette must be open by default on page load (no need to press Cmd+K) so the content is immediately visible. Every row, icon, shortcut badge, and category header must exist as actual HTML.

**The palette should open automatically on page load**, centered on a dark backdrop, with the search input empty and all items visible in their default grouping.

**Result items** — render ALL of these as visible rows grouped by category:

```
── Recent ──────────────────────────────────────────────────────────
🕐  Open Settings              Manage app preferences          ⌘ ,
📄  New Document               Create a blank document         ⌘ N
🌙  Toggle Dark Mode           Switch appearance theme         ⌘ ⇧ D
🧹  Clear Cache                Free up storage space
📋  View Logs                  Open application log viewer

── Commands ─────────────────────────────────────────────────────────
📋  Clipboard History          Browse copied items             ⌘ ⇧ V
📸  Screenshot Area            Capture screen region           ⌘ ⇧ 4
🔒  Lock Screen                Secure your session             ⌘ ⇧ Q
🗑️  Empty Trash                Permanently delete trash
⚙️  System Preferences         Open macOS settings
🎨  Color Picker               Pick color from screen          ⌘ ⇧ C

── Applications ─────────────────────────────────────────────────────
💻  VS Code                    Code editor                     (blue icon)
🎨  Figma                      Design tool                     (purple icon)
💬  Slack                      Team messaging                  (green icon)
🌐  Arc Browser                Web browser                     (pink icon)
⬛  Terminal                   Command line                    (gray icon)

── Extensions ───────────────────────────────────────────────────────
🐙  GitHub Pull Requests       View and manage PRs
📐  Linear Issues              Track engineering tasks
📝  Notion Search              Find pages and docs
🌍  Translate                  Translate selected text          ⌘ ⇧ T
```

Each row must show: colored category icon (left), bold label, muted description (right of label), and keyboard shortcut `<kbd>` badges (far right, where applicable).

**First row ("Open Settings") should be highlighted as active** with accent background.

**Footer**: show "Open" + `↵` badge, "Actions" + `⇥` badge, "Copy" + `⌘ C` badge, "Close" + `Esc` badge.

**Backdrop**: the page behind the palette should show a faint dark background with a subtle blurred mock desktop (just a dark gradient is fine — the palette is the focus).

# Output Format
- Single HTML file with embedded `<style>` and `<script>`
- **CRITICAL**: The palette must be open and fully populated on page load — all 20 result rows visible with icons, labels, descriptions, and shortcut badges. Do NOT start with a closed/hidden palette that requires Cmd+K to open. The Cmd+K shortcut should still work to close and reopen it, but initial state must be open.
- Realistic, self-contained — should look like the actual Raycast palette when opened in a browser
- Code organized in clearly commented sections: tokens, modal/backdrop, search input, results list, fuzzy algorithm, keyboard handlers, footer, animations, data
