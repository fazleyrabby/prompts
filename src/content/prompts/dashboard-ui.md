---
title: "Developer Dashboard Header"
description: "Dense top navigation for dev tools"
category: "navigation"
tags: ["header", "dense", "breadcrumbs"]
model: "Gemini 3.1 Pro"
---

## Prompt

Build a compact top navigation bar for a developer-focused tool with:
- Monospace breadcrumbs separated by subtle slashes
- A search input with a keyboard shortcut hint (`⌘K`)
- An avatar and dropdown trigger on the far right
- Bottom border of `1px solid rgba(255,255,255,0.08)`
- Avoid empty space: keep the height exactly 48px

## Notes

- Great for Vercel/Linear style dashboards.
- Best if you implement the breadcrumbs as an unstyled list inline-flex.
