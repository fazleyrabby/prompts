---
title: "Feature Showcase Section"
description: "Icon-based feature grid with hover lift effect."
category: "landing-page"
tags: ["features", "icons", "grid", "hover"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Frontend Engineer and Conversion Specialist with expertise in landing page design and visual hierarchy optimization.

# Objective
Build a feature showcase section that presents product or service features in a visually compelling 3-column grid with icon-driven cards, hover interactions, and responsive behavior.

# Instructions
1. Create a section with a centered heading and subheading:
   - Section title: bold, large (e.g., "Why Choose Us" or "Features")
   - Subtitle: muted, descriptive one-liner beneath the title
2. Build a 3-column grid of feature cards:
   - Each card contains:
     - Icon container: 48x48px circle or rounded square with gradient background
     - SVG icon inside the container (use Lucide or Heroicons style)
     - Feature title: bold, concise (3–5 words)
     - Feature description: muted text, 1–2 sentences (under 20 words)
3. Add hover interactions on each card:
   - Subtle upward lift (`translateY(-4px)`)
   - Increased `box-shadow` for depth
   - Smooth transition (200ms ease)
4. Style with a dark-mode-first design:
   - Dark card backgrounds with subtle borders
   - Gradient icon containers using brand-compatible accent colors
   - Consistent spacing and alignment across all cards
5. Ensure responsive layout:
   - 1 column on mobile (<640px)
   - 2 columns on tablet (640px–1024px)
   - 3 columns on desktop (>1024px)

# Constraints
- Use semantic HTML (`<section>`, `<article>`, `<h3>`, `<p>`)
- CSS Grid or Flexbox for layout — no JavaScript required
- Use inline SVG icons or placeholder icon containers — do not rely on external icon CDNs
- Keep all descriptions under 20 words for scannability
- 6 feature cards total (2 rows of 3) for visual balance

# Output Format
- Single HTML file with embedded `<style>` block
- Include 6 placeholder features with realistic SaaS content
- Well-indented code with comments for each section

## Notes

- Use Lucide or Heroicons for consistent, clean SVG icons.
- Keep descriptions under 20 words per feature for maximum scannability.
- Gradient icon backgrounds add visual interest without overwhelming the card content.
