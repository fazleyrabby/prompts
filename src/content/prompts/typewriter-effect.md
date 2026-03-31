---
title: "Typewriter Text Effect"
description: "Auto-typing text animation with blinking cursor."
category: "animation"
tags: ["typewriter", "animation", "text", "cursor"]
model: "Gemini 3.1 Pro"
---

## Prompt

Act as an Elite Creative Technologist and Animation Expert.

Create a typewriter text effect component:
- Types out a string character by character
- Blinking cursor at the end using CSS
- Configurable typing speed (default: 80ms per character)
- Supports multiple strings with delete-and-retype loop
- Pure CSS cursor, JS for typing logic

## Notes

- Use `requestAnimationFrame` for smoother performance than `setInterval`.
- Add a 1.5s pause between strings for readability.
