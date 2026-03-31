---
title: "Gradient Hero Section"
description: "A bold hero section with animated gradient background."
category: "landing-page"
tags: ["hero", "gradient", "landing", "cta"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Engineer and Conversion Specialist with expertise in high-impact landing page design and CSS animation.

# Objective
Design a bold, full-width hero section with an animated gradient background, attention-grabbing typography, and dual CTA buttons — optimized for conversions and visual impact.

# Instructions
1. Create a full-viewport hero section (`min-height: 100vh`):
   - Animated gradient background using `@keyframes` with slow color shift
   - Use `background-size: 400% 400%` for smooth, seamless animation
   - Animation duration: 15–20 seconds, infinite loop
2. Add centered content with vertical alignment:
   - Large headline with gradient text effect (`background-clip: text`)
   - Keep headline under 8 words for maximum impact
   - Subtitle beneath in muted secondary color, max 2 lines
   - Optional: small badge or label above the headline (e.g., "New Release" or "v2.0")
3. Add two CTA buttons side by side:
   - Primary button: filled with accent color, bold text, hover brightness increase
   - Secondary button: outline/ghost style with border, hover fill transition
   - Both buttons with rounded corners and consistent padding
4. Responsive behavior:
   - Desktop: content centered with max-width constraint
   - Mobile: stack buttons vertically, reduce headline font size
   - Maintain comfortable padding on all screen sizes

# Constraints
- Dark mode first design — no light mode variant needed
- Pure CSS animations — no JavaScript for the gradient effect
- Use semantic HTML: `<section>`, `<h1>`, `<p>`, `<a>` or `<button>`
- Headline must use `background-clip: text` with `-webkit-background-clip: text` for gradient text
- Ensure text remains readable over the animated gradient at all animation frames
- No external dependencies

# Output Format
- Single HTML file with embedded `<style>` block
- Include realistic placeholder content (SaaS or product launch theme)
- Well-commented CSS with named `@keyframes` animation
- Responsive breakpoints at 640px and 1024px

## Notes

- Use `background-size: 400%` with `@keyframes` for smooth gradient animation.
- Keep headline under 8 words for maximum impact and readability.
- Test gradient text readability against the animated background at all frames.
