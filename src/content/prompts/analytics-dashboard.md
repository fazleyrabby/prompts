---
title: "Analytics Dashboard"
description: "Stat cards and chart placeholders for metrics."
category: "dashboard"
tags: ["analytics", "stats", "charts", "metrics"]
model: "GPT 5.3 Ultra"
thumbnail: "https://i.ibb.co/8Dn0Kpcb/Clean-Shot-2026-04-01-at-11-31-16-2x.webp"
---

## Prompt

# Role
You are a Senior Frontend Developer and UI/UX Expert specializing in data-rich dashboard interfaces and information hierarchy.

# Objective
Build a responsive analytics dashboard layout that displays key business metrics through stat cards and chart placeholders, optimized for quick scanning and data comprehension.

# Instructions
1. Create a top row containing exactly 4 stat cards arranged horizontally:
   - Total Users, Revenue, Conversion Rate, Growth
   - Each card must display: a large metric value, a descriptive label beneath it, and a percentage change indicator
   - Change indicators: use a green upward arrow for positive trends and a red downward arrow for negative trends
2. Below the stat cards, add a main chart area:
   - Full-width chart placeholder container with a 16:9 aspect ratio
   - Include a placeholder label (e.g., "Revenue Over Time")
3. Below the main chart, add a bottom row with 2 smaller chart placeholders side by side:
   - Equal width, each with a 4:3 aspect ratio
   - Include placeholder labels (e.g., "Traffic Sources", "Conversion Funnel")
4. Apply a dark theme throughout:
   - Dark background with subtle card borders using low-opacity white or gray
   - Use consistent spacing and padding between all elements

# Constraints
- Use semantic HTML elements (`<section>`, `<article>`, `<header>`)
- Use CSS `aspect-ratio` for chart containers — do not use padding hacks
- Apply `font-variant-numeric: tabular-nums` on all numeric values for proper alignment
- Ensure responsive behavior: stack cards vertically on mobile, 2x2 on tablet, 4 across on desktop
- Do not use JavaScript for layout — CSS Grid or Flexbox only
- Dark mode first; do not include a light mode variant

# Output Format
- Single HTML file with embedded `<style>` block
- Clean, well-indented code with brief inline comments for each major section
- Use CSS custom properties for colors and spacing to enable easy theming

## Notes

- Use `aspect-ratio: 16/9` and `aspect-ratio: 4/3` for chart containers.
- Apply `tabular-nums` to stat values so numbers align properly across cards.
- Consider adding subtle `box-shadow` on cards for depth in the dark theme.
