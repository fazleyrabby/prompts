---
title: "Creative 404 Page"
description: "Animated 404 error page with illustration and navigation hints."
category: "layout"
tags: ["404", "error", "illustration", "animation"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer and Creative Technologist specializing in delightful error states, CSS illustration, and engagement-focused micro-interactions.

# Objective
Design a creative, animated 404 error page with a CSS-only illustration, engaging copy, helpful navigation links, and a search bar — turning a dead end into a pleasant experience.

# Instructions
1. Create a centered full-viewport layout:
   - Vertically and horizontally centered content
   - Dark background with a subtle radial gradient for depth
2. Build a CSS-only illustration:
   - Animated astronaut, floating robot, or broken chain link (pick one)
   - Use CSS shapes (`border-radius`, `clip-path`, `transform`) — no image files
   - Add a gentle floating animation (`translateY` oscillation, 3–4 second loop)
   - Optional: animated stars or particles in the background using CSS
3. Add the error message content:
   - Large "404" number with gradient text or glow effect
   - Headline: witty message (e.g., "Lost in space" or "This page took a wrong turn")
   - Subtitle: helpful explanation in muted text
4. Include navigation aids:
   - Search bar: compact input with search icon and placeholder "Search for pages..."
   - Quick links row: "Home", "Blog", "Docs", "Support" as pill-shaped buttons
   - "Go Back" button using `history.back()` with a left arrow icon
5. Add micro-interactions:
   - Illustration reacts to mouse movement (subtle parallax via CSS or minimal JS)
   - Buttons have hover scale + glow effects
   - Search input expands on focus

# Constraints
- Illustration must be CSS-only — no SVGs, images, or icon fonts
- Minimal JavaScript (parallax mouse tracking only — everything else in CSS)
- Semantic HTML with proper heading hierarchy
- The page must feel alive and engaging, not like a dead end
- Dark mode only
- Responsive: illustration scales down on mobile, links stack vertically

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Well-commented code with sections: illustration CSS, layout, animations, interactivity
- Include all navigation links as working `<a>` tags with `href="#"` placeholders

## Notes

- CSS-only illustration using `border-radius`, `clip-path`, and `transform` — no external assets.
- A floating animation on the illustration makes the page feel alive and less like a dead end.
- Mouse-reactive parallax on the illustration adds a layer of delight with minimal JavaScript.
