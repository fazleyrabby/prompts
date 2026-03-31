---
title: "Stripe-style Animated Hero"
description: "Modern SaaS hero with gradients and motion"
category: "hero"
tags: ["stripe", "animation", "gradient"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer and Animation Expert specializing in premium SaaS landing pages, motion design, and high-fidelity UI implementation.

# Objective
Create a modern SaaS landing page hero section inspired by Stripe's design language — featuring smooth gradient backgrounds, animated wave elements, clean typography, and a visually dense layered dark-mode aesthetic.

# Instructions
1. Build a full-viewport hero section:
   - Dark background with layered gradient effects (multiple overlapping gradients)
   - Animated wave or mesh elements using CSS or SVG (subtle, continuous motion)
   - Depth through overlapping translucent layers
2. Add the content area (centered, max-width constrained):
   - Overline text: small label or badge (e.g., "Now Available" or "v2.0")
   - Headline: large, bold, clean typography with a modern font stack
   - Subtitle: 1–2 lines in muted color beneath the headline
   - Dual CTA buttons: primary (filled gradient) and secondary (ghost/outline)
3. Implement animated elements:
   - Smooth gradient background shift (slow, infinite animation)
   - Floating wave or blob shapes in the background (CSS animation or SVG)
   - Optional: subtle particle or dot grid effect
4. Typography requirements:
   - Modern font stack: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
   - Large headline: `clamp(2.5rem, 5vw, 4.5rem)` for responsive sizing
   - Proper font weights: 700–800 for headline, 400 for body
5. Ensure visual density:
   - Multiple overlapping layers create depth (not flat or sparse)
   - Accent glow effects behind CTAs or headline
   - Subtle noise texture overlay (optional) for richness

# Constraints
- Tailwind CSS for layout and typography; custom CSS for animations
- Dark mode only — no light mode variant
- Animations must be smooth and GPU-accelerated (`will-change`, `transform`)
- Performance: no heavy libraries — CSS animations and SVG only
- Responsive: works on all screen sizes with fluid typography
- Keep animations subtle — they should enhance, not distract

# Output Format
- Single HTML file with Tailwind CSS CDN and embedded `<style>` for animations
- Include realistic SaaS placeholder content (fintech or developer platform theme)
- Well-commented code separating layout, animations, and content sections

## Notes

- Optimized for Claude — structured to produce best results with AI code generation.
- Use a modern typography stack with `Inter` or system fonts for the Stripe aesthetic.
- Animated waves/blobs should be subtle and slow — the content remains the focus.
