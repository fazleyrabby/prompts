---
title: "Theme Switcher Toggle"
description: "Animated dark/light mode toggle with system detection."
category: "utility"
tags: ["theme", "toggle", "dark-mode", "animation"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Software Engineer and Performance Expert specializing in theme systems, CSS transitions, and client-side state management.

# Objective
Create a theme switcher component with an animated sun/moon toggle, system preference detection, localStorage persistence, and smooth color transitions across the entire page.

# Instructions
1. Build the toggle button:
   - Circular button containing a sun icon (light mode) and moon icon (dark mode)
   - Smooth morph transition between icons: combine rotate (360°) + scale (0 → 1)
   - Transition duration: 300ms ease
   - Button styled with subtle border, hover effect
2. Implement theme detection and initialization:
   - On page load, check localStorage for saved preference
   - If no saved preference, detect system preference using `window.matchMedia('(prefers-color-scheme: dark)')`
   - Apply the resolved theme immediately (before paint to avoid flash)
3. Handle theme switching:
   - Toggle adds/removes `.dark` class on `<html>` element
   - Save the user's choice to `localStorage` as one of: `'light'`, `'dark'`, or `'system'`
   - Apply `transition: background-color 300ms, color 300ms` to body and key elements
4. Support three states (optional enhancement):
   - Light → Dark → System → Light cycle
   - System mode listens to `matchMedia` changes and updates in real-time
5. Add the toggle to a sample page:
   - Position in the top-right corner (fixed or absolute)
   - Include sample content sections to demonstrate theme changes

# Constraints
- Vanilla HTML, CSS, and JavaScript — no frameworks
- Apply theme class to `<html>` before DOM renders to prevent flash of wrong theme (script in `<head>`)
- Use `matchMedia` for system preference detection — not user-agent parsing
- Store preference as `'light'`, `'dark'`, or `'system'` string in localStorage
- Icon transition must be smooth — no abrupt swaps
- Respect `prefers-reduced-motion`: skip animation if reduced motion is preferred

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include a sample page with header, text, and cards to demonstrate theme switching
- Well-commented code with the theme initialization script in `<head>` and interactive logic before `</body>`

## Notes

- Use `matchMedia('(prefers-color-scheme: dark)')` to detect system preference.
- Store preference as 'light', 'dark', or 'system' for three-state support.
- Place the theme initialization script in `<head>` to prevent flash of incorrect theme.
