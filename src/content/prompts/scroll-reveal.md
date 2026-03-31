---
title: "Scroll Reveal Animations"
description: "Intersection Observer-based fade-in animations."
category: "animation"
tags: ["scroll", "animation", "intersection-observer", "fade"]
model: "GPT 5.3 Ultra"
---

## Prompt

Build a scroll-reveal animation system using Intersection Observer:
- Elements fade in and slide up when entering viewport
- Staggered delays for grid children
- Configurable threshold and root margin
- CSS classes: `.reveal`, `.revealed`
- Vanilla JS, no dependencies

## Notes

- Set threshold to 0.15 for early trigger.
- Add `will-change: transform` for GPU-accelerated animations.
