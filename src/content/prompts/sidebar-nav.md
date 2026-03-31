---
title: "Collapsible Sidebar"
description: "A responsive sidebar navigation with icons."
category: "navigation"
tags: ["sidebar","menu","responsive"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Frontend Developer specializing in accessible UI, responsive navigation, and dashboard layout patterns.

# Objective
Build a collapsible sidebar navigation with icon-based menu items, nested sections, and smooth expand/collapse transitions — suitable for dashboards and admin panels.

# Instructions
1. Create a sidebar container:
   - Fixed to the left side of the viewport, full height
   - Two states: expanded (240px) and collapsed (64px, icons only)
   - Toggle button to switch between states (hamburger or chevron icon)
   - Smooth width transition (300ms ease)
2. Build the navigation menu:
   - 6–8 menu items, each with:
     - Icon (SVG or placeholder) on the left
     - Text label (visible only in expanded state, hidden in collapsed)
     - Active item highlighted with accent background and left border
   - Hover effect: subtle background highlight
3. Add nested/grouped sections:
   - Group items under section headers (e.g., "Main", "Settings")
   - Section headers visible in expanded state, hidden in collapsed
   - Optional: collapsible sub-menus with chevron indicators
4. Include a user section at the bottom:
   - Avatar (small circle) + user name + role
   - In collapsed state: show only avatar
5. Style with Tailwind CSS in dark mode:
   - Dark sidebar background, slightly different from main content area
   - Subtle border on the right edge
   - Consistent icon sizing and alignment

# Constraints
- Semantic HTML: `<nav>`, `<ul>`, `<li>`, `<a>` elements
- Tailwind CSS only — no custom CSS
- Add ARIA attributes: `aria-expanded`, `aria-label` on toggle button
- Keyboard-navigable: Tab through menu items, Enter to select
- Responsive: on mobile (<768px), sidebar becomes an overlay with backdrop
- Transitions must respect `prefers-reduced-motion` media query

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include a dummy main content area to demonstrate the layout
- Well-structured markup with comments for each section

## Notes

- Perfect for quick integration into any Astro, Next.js, or admin panel project.
- Use `transition: width 300ms ease` for smooth collapse animation.
- In collapsed state, show tooltips on hover for icon-only items.
