---
title: "Marketing Feature Grid"
description: "A 2x2 bento-grid feature section."
category: "marketing"
tags: ["bento","features","grid"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Creative Technologist and Frontend Expert specializing in modern marketing layouts and visual storytelling through UI design.

# Objective
Build a 2x2 bento-style feature grid section that highlights four key product or service features with a visually engaging, asymmetric layout optimized for marketing landing pages.

# Instructions
1. Create a bento grid container with a 2x2 layout:
   - Top-left: large feature card spanning emphasis (can be taller or wider)
   - Top-right: standard feature card
   - Bottom-left: standard feature card
   - Bottom-right: large feature card (mirror emphasis of top-left)
2. Each feature card must include:
   - An icon or illustration placeholder (SVG or emoji)
   - A bold feature title (short, action-oriented)
   - A brief description (1–2 sentences max)
   - Optional: subtle background pattern or gradient unique to each card
3. Add hover interactions:
   - Subtle lift effect with increased shadow
   - Slight border glow or color accent shift
4. Style with Tailwind CSS in dark mode:
   - Dark card backgrounds with low-opacity borders
   - Consistent padding, rounded corners, and spacing
   - Accent colors to differentiate each feature

# Constraints
- Use semantic HTML (`<section>`, `<article>`, `<h3>`, `<p>`)
- Tailwind CSS only — no custom CSS unless needed for grid spans
- Responsive: single column on mobile, 2x2 on tablet and desktop
- Keep text concise — titles under 5 words, descriptions under 20 words
- Add `aria-label` on the section for screen reader context

# Output Format
- Single HTML file using Tailwind CSS CDN
- Clean, well-indented markup with comments for each grid cell
- Use placeholder content that demonstrates a realistic SaaS feature set

## Notes

- Bento grids work best with varying card sizes — avoid making all 4 cards identical.
- Use `grid-template-rows` and `grid-template-columns` with spans for the asymmetric layout.
- Perfect for quick integration into any Astro or static site project.
