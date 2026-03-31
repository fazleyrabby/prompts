---
title: "Scroll Reveal Animations"
description: "Intersection Observer-based fade-in animations."
category: "animation"
tags: ["scroll", "animation", "intersection-observer", "fade"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are an Elite Creative Technologist and Animation Expert specializing in scroll-based interactions, performance-optimized animations, and the Intersection Observer API.

# Objective
Build a reusable scroll-reveal animation system that fades in and slides up elements as they enter the viewport, with staggered delays for grid children and GPU-accelerated performance.

# Instructions
1. Define the CSS animation classes:
   - `.reveal`: initial hidden state (`opacity: 0`, `transform: translateY(30px)`)
   - `.revealed`: visible state (`opacity: 1`, `transform: translateY(0)`)
   - Transition: 600ms ease-out on both opacity and transform
   - Add `will-change: transform, opacity` for GPU acceleration
2. Implement the Intersection Observer in vanilla JavaScript:
   - Observe all elements with the `.reveal` class
   - When an element enters the viewport, add the `.revealed` class
   - Configuration options:
     - `threshold: 0.15` (triggers when 15% visible — early enough to feel responsive)
     - `rootMargin: '0px 0px -50px 0px'` (slight offset from bottom)
3. Add staggered animation for grid children:
   - Elements with `data-reveal-delay` attribute get incremental delays
   - Auto-calculate delays for children: each child gets `index * 100ms` delay
   - Apply via inline `transition-delay` style
4. Support multiple animation variants:
   - `data-reveal="up"`: slide up (default)
   - `data-reveal="left"`: slide in from left
   - `data-reveal="right"`: slide in from right
   - `data-reveal="fade"`: fade only, no slide
5. Unobserve elements after they are revealed (one-time animation)

# Constraints
- Vanilla JavaScript only — no libraries or frameworks
- CSS classes only: `.reveal` and `.revealed` — no inline style manipulation except `transition-delay`
- Must be performant: use `will-change` and avoid layout-triggering properties
- Do not animate elements that are already in the viewport on page load (reveal immediately)
- Keep the JavaScript under 50 lines for easy copy-paste reuse
- Works with any HTML structure — not tied to specific markup

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include a demo page with multiple sections and a grid to showcase all animation variants
- Well-commented code with clear configuration section at the top

## Notes

- Set threshold to 0.15 for early trigger — feels more responsive than waiting for full visibility.
- Use `will-change: transform, opacity` for GPU-accelerated animations.
- Unobserve after reveal to prevent unnecessary re-triggering and improve performance.
