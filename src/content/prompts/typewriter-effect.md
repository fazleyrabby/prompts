---
title: "Typewriter Text Effect"
description: "Auto-typing text animation with blinking cursor."
category: "animation"
tags: ["typewriter", "animation", "text", "cursor"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are an Elite Creative Technologist and Animation Expert specializing in text effects, CSS animation, and performant JavaScript-driven visual interactions.

# Objective
Create a typewriter text effect component that types out strings character by character, supports multiple strings with delete-and-retype cycling, and features a blinking CSS cursor — configurable and performant.

# Instructions
1. Build the typewriter display element:
   - Container element with monospace or display font
   - Text content area that grows as characters are typed
   - Blinking cursor at the end using pure CSS (`@keyframes blink`)
   - Cursor as a `::after` pseudo-element or `<span>` (thin vertical bar)
2. Implement the typing logic in JavaScript:
   - Type out a string character by character
   - Default typing speed: 80ms per character (configurable)
   - Delete speed: 40ms per character (faster than typing for natural feel)
   - After completing a string, pause for 1.5 seconds
   - Then delete the string character by character
   - Move to the next string in the array and repeat
   - Loop infinitely through the string array
3. Support configuration:
   - Array of strings to cycle through
   - Typing speed (ms per character)
   - Delete speed (ms per character)
   - Pause duration between strings
4. Create the blinking cursor:
   - Pure CSS animation: `opacity: 1 → 0` every 600ms
   - Cursor visible during pauses, steady (not blinking) during typing
5. Use `requestAnimationFrame` for timing:
   - More performant than `setInterval` or `setTimeout`
   - Track elapsed time for frame-accurate character reveals

# Constraints
- Vanilla JavaScript only — no libraries or frameworks
- Pure CSS for the cursor animation — no JavaScript-driven cursor
- Use `requestAnimationFrame` instead of `setInterval` for smoother performance
- Must work with any font and container width
- Keep the JavaScript under 60 lines for easy reuse
- Include `aria-label` with the full text on the container for accessibility

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include a demo with 3–4 sample strings (developer/SaaS theme)
- Well-commented code with a clear configuration section at the top

## Notes

- Use `requestAnimationFrame` for smoother, more performant animation than `setInterval`.
- Add a 1.5s pause between strings to give readers time to process the completed text.
- The cursor should stop blinking during active typing for a realistic effect.
