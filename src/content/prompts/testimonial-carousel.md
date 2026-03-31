---
title: "Testimonial Carousel"
description: "Auto-scrolling customer testimonial slider."
category: "landing-page"
tags: ["testimonial", "carousel", "social-proof", "slider"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Frontend Engineer and Conversion Specialist with expertise in social proof components, CSS scroll mechanics, and lightweight interactive UI.

# Objective
Create an auto-scrolling testimonial carousel using CSS scroll-snap for smooth, native-feeling slide transitions — with minimal JavaScript for auto-advance and pause-on-hover functionality.

# Instructions
1. Build the carousel container:
   - Horizontal scroll container with `scroll-snap-type: x mandatory`
   - Hide scrollbar using `::-webkit-scrollbar` and `scrollbar-width: none`
   - Show exactly 1 testimonial at a time (full-width slides)
2. Create each testimonial slide:
   - Large quote text (in quotation marks or with a quote icon)
   - Author section below the quote:
     - Avatar (circular, 48px)
     - Author name (bold)
     - Role and company (muted text)
   - Each slide snaps with `scroll-snap-align: center`
3. Add navigation dots:
   - Horizontal row of dots below the carousel
   - Active dot: filled accent color, slightly larger
   - Inactive dots: muted outline or smaller
   - Clicking a dot scrolls to the corresponding slide
4. Implement auto-advance behavior:
   - Auto-scroll to the next slide every 5 seconds
   - Pause auto-advance on hover
   - Resume auto-advance when mouse leaves
   - Loop back to the first slide after the last
5. Style in dark mode:
   - Dark background for the carousel section
   - Quote text in light color, author details in muted tones
   - Subtle card or section background to frame each testimonial

# Constraints
- CSS-first approach: use `scroll-snap` for sliding — not JavaScript-based transforms
- Minimal JavaScript: only for auto-advance timer and dot click handlers
- No external dependencies or frameworks
- Show exactly 1 testimonial at a time for maximum focus
- Include 4–5 testimonial slides with realistic placeholder content
- Accessible: `aria-label` on the carousel, `role="tablist"` on dots

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include 4–5 realistic testimonials (SaaS or tech product theme)
- Well-commented code with clear sections for layout, animation, and interaction

## Notes

- Use `scroll-snap-type: x mandatory` for native-feeling snap behavior.
- Limit to 1 visible testimonial at a time for maximum impact and focus.
- The auto-advance timer should reset when a user manually navigates (click or scroll).
