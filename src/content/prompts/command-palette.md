---
title: "Command Palette"
description: "VS Code / Linear-style ⌘K command palette with fuzzy search."
category: "utility"
tags: ["command-palette", "search", "keyboard", "modal"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Engineer and Keyboard-First UX Specialist with deep expertise in command-palette interfaces, fuzzy search algorithms, and developer-focused productivity tools.

# Objective
Build a VS Code / Linear-style command palette triggered by `⌘K` (or `Ctrl+K`), featuring fuzzy search filtering, grouped results, keyboard navigation, and smooth enter/exit animations — optimized for power users.

# Instructions
1. Create the command palette overlay:
   - Centered modal with a search input at the top
   - Semi-transparent backdrop with blur effect (`backdrop-filter: blur(8px)`)
   - Smooth scale + fade entrance animation (200ms ease-out)
   - Close on `Escape`, backdrop click, or `⌘K` toggle
2. Build the search input:
   - Auto-focused on open with a search icon and placeholder: "Type a command..."
   - Real-time filtering as the user types
   - Clear button (×) when input has text
3. Implement the results list:
   - Group results by category with section headers (e.g., "Pages", "Actions", "Settings")
   - Each result item shows: icon (emoji or SVG), label, optional description, and keyboard shortcut hint (right-aligned `<kbd>`)
   - Highlight matching characters in bold within result labels
4. Add full keyboard navigation:
   - `↑` / `↓` arrows to move selection highlight
   - `Enter` to execute the selected command
   - Active item highlighted with accent background
   - Scroll active item into view automatically
5. Style in dark mode:
   - Dark modal background (`#1a1a2e` or similar) with subtle border
   - Muted section headers, bright result labels
   - `<kbd>` shortcut badges styled as pill-shaped tags
   - Max-height with scrollable results area

# Constraints
- Vanilla JavaScript — no frameworks or libraries
- Fuzzy matching: filter results where input characters appear in order (not necessarily contiguous)
- Must be keyboard-accessible end to end — no mouse required
- Limit visible results to 8 items before scrolling
- Trap focus inside the palette while open
- Include at least 12 sample commands across 3 categories
- Semantic HTML with `role="dialog"` and `aria-modal="true"`

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include realistic sample commands (developer tool or productivity app theme)
- Well-commented code with clear separation: markup, styles, search logic, keyboard handling

## Notes

- Use `⌘K` / `Ctrl+K` as the global trigger — detect platform for correct modifier key.
- Fuzzy matching should highlight matched characters in bold for visual feedback.
- Trap focus inside the modal and return focus to the trigger element on close.
