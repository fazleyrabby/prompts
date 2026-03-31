---
title: "Mega Menu Navigation"
description: "Full-width dropdown menu with categorized links."
category: "navigation"
tags: ["menu", "navigation", "dropdown", "mega"]
model: "Claude 4.6 Opus"
---

## Prompt

Build a mega menu navigation:
- Top-level horizontal nav bar
- Hover triggers full-width dropdown panel
- Dropdown divided into 3-4 columns
- Each column: section title and list of links
- Featured section with image card on the right
- Smooth height transition on open/close
- Click outside or press Escape to close

## Notes

- Use `pointer-events` to prevent flicker on hover gap.
- Add a small delay (150ms) before closing to prevent accidental closes.
