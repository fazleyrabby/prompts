---
title: "Testimonial Carousel"
description: "Auto-scrolling customer testimonial slider."
category: "landing-page"
tags: ["testimonial", "carousel", "social-proof", "slider"]
model: "Gemini 3.1 Pro"
---

## Prompt

Act as a Senior Frontend Engineer and Conversion Specialist.

Create a testimonial carousel component:
- Horizontal slider with smooth CSS scroll-snap
- Each slide: quote text, author name, role, and avatar
- Auto-advance every 5 seconds with pause on hover
- Navigation dots at the bottom
- Minimal JavaScript, CSS-first approach

## Notes

- Use `scroll-snap-type: x mandatory` for native-feeling snapping.
- Limit visible testimonials to 1 at a time for focus.
