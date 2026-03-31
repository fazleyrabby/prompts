---
title: "Command Palette"
description: "A ⌘K search bar with recent searches."
category: "navigation"
tags: ["search","cmdk","palette"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer specializing in accessible UI, search interfaces, and keyboard-driven interaction patterns.

# Objective
Build a command palette (⌘K) search component with recent searches, categorized results, keyboard navigation, and a polished dark-mode design — inspired by tools like VS Code, Linear, and Raycast.

# Instructions
1. Create the command palette trigger:
   - Open with `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) keyboard shortcut
   - Centered modal overlay with backdrop blur
   - Smooth entrance animation (fade + scale)
2. Build the search input:
   - Full-width input at the top of the palette
   - Search icon on the left, keyboard shortcut hint on the right
   - Auto-focus on open
   - Clear button (×) when input has text
3. Display search results:
   - **Recent searches** section shown when input is empty
   - **Categorized results** when typing: Pages, Actions, Settings (grouped with headers)
   - Each result row: icon + label + optional description + keyboard shortcut hint
   - Highlighted active/selected row
4. Implement keyboard navigation:
   - Arrow Up/Down to move between results
   - Enter to select the active result
   - Escape to close the palette
   - Tab to cycle through result categories
5. Close behavior:
   - Escape key
   - Click on backdrop
   - After selecting a result
6. Style with Tailwind CSS in dark mode:
   - Dark modal background, subtle border
   - Muted section headers, bright result text
   - Accent highlight on active row

# Constraints
- Use Tailwind CSS for all styling
- Semantic HTML with `role="dialog"`, `role="listbox"`, `aria-activedescendant`
- No external dependencies for search logic — filter from a static list
- Palette max-width: 640px, max-height: 400px with scrollable results
- Must be fully keyboard-navigable — mouse is optional
- Include at least 10 sample searchable items across 3 categories

# Output Format
- Single HTML file using Tailwind CSS CDN
- Embedded JavaScript for keyboard handling and filtering
- Well-commented code with clear sections for markup, styles, and behavior

## Notes

- Perfect for quick integration into any Astro, Next.js, or developer-focused project.
- The ⌘K pattern is now a standard UX convention in developer tools — users expect it.
- Keyboard navigation is critical — this component should be fully usable without a mouse.
