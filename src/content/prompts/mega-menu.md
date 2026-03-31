---
title: "Mega Menu Navigation"
description: "Full-width dropdown menu with categorized links."
category: "navigation"
tags: ["menu", "navigation", "dropdown", "mega"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer specializing in accessible UI components, navigation patterns, and complex interactive menus.

# Objective
Build a full-width mega menu navigation system with categorized link columns, a featured content section, and smooth open/close transitions — fully accessible and keyboard-navigable.

# Instructions
1. Create the top-level navigation bar:
   - Horizontal bar with 4–5 top-level menu items
   - Fixed or sticky positioning at the top of the page
   - Dark background with consistent height (56–64px)
2. Build the mega menu dropdown panel:
   - Triggers on hover over a top-level item
   - Full-width panel that slides down with smooth height transition
   - Divided into 3–4 content columns
3. Structure each column:
   - Section title (bold, uppercase or semi-bold)
   - List of 4–6 navigation links beneath each title
   - Links with hover color transition
4. Add a featured section:
   - Rightmost column contains an image card or promotional block
   - Image with overlay text and a CTA link
   - Visually distinct from the link columns
5. Implement interaction behavior:
   - Hover to open with a 150ms delay before closing (prevents accidental close)
   - Use `pointer-events` management to prevent flicker when moving between nav item and dropdown
   - Click outside the menu to close
   - Escape key to close
   - Smooth height/opacity transition on open and close

# Constraints
- Semantic HTML: `<nav>`, `<ul>`, `<li>`, `<a>` elements
- Full keyboard navigation: Tab through items, Enter to open, arrow keys within dropdown
- Add ARIA attributes: `aria-expanded`, `aria-haspopup`, `role="menu"`
- No external dependencies — vanilla HTML, CSS, and JavaScript
- Must work without JavaScript for basic link navigation (progressive enhancement)
- Dark mode design

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include realistic placeholder navigation content (SaaS product categories)
- Well-commented code with clear separation of structure, style, and behavior

## Notes

- Use `pointer-events` management to prevent flicker on the hover gap between nav item and dropdown.
- Add a 150ms close delay to prevent accidental menu dismissal during mouse movement.
- Test keyboard navigation thoroughly: Tab, Enter, Escape, and arrow keys.
