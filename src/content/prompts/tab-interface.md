---
title: "Tab Interface"
description: "An accessible tab panel with keyboard navigation and animated indicator."
category: "navigation"
tags: ["tabs","interface","animation"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Frontend Developer specializing in accessible interactive components and smooth micro-interactions.

# Objective
Build an accessible tab interface with animated active indicator, keyboard navigation, and proper ARIA attributes — suitable for content organization and settings panels.

# Instructions
1. Create the tab container:
   - Horizontal tab list using `<div role="tablist">`
   - Vertical arrangement option (tab list on left, content on right)
2. Build the tab buttons:
   - 4–5 tabs with descriptive labels
   - Each tab has `role="tab"`, `aria-selected`, `aria-controls`
   - Active tab visually distinct (bold, accent underline or background)
   - Hover state with subtle background change
3. Create the tab panels:
   - Each panel has `role="tabpanel"` and `aria-labelledby` pointing to its tab
   - Content areas with realistic text content
   - Hidden panels use `hidden` attribute; visible panel is displayed
4. Implement animated active indicator:
   - Sliding underline or background that moves to the active tab
   - Smooth transition (200–300ms ease)
   - Indicator width matches tab text width
5. Add keyboard navigation:
   - Arrow keys (←/→) to switch tabs
   - Home/End to jump to first/last tab
   - Enter/Space to activate focused tab

# Constraints
- Proper ARIA pattern: `tablist`, `tab`, `tabpanel` roles
- `tabindex` management: active tab has `tabindex="0"`, others have `tabindex="-1"`
- Focus visible styles for keyboard users
- Tailwind CSS only — no custom CSS
- Smooth animated indicator with CSS transitions

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include 4 tabs with distinct content
- Well-commented code with clear section separation

## Notes

- The animated indicator is a nice touch but must not replace proper ARIA — focus on accessibility first.
- `tabindex="-1"` on inactive tabs allows programmatic focus without being in the tab order.
- Perfect for settings pages, documentation, and dashboard content organization.