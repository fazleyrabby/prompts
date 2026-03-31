---
title: "Theme Switcher Toggle"
description: "Animated dark/light mode toggle with system detection."
category: "utility"
tags: ["theme", "toggle", "dark-mode", "animation"]
model: "GPT 5.3 Ultra"
---

## Prompt

Create a theme switcher component:
- Toggle button with sun/moon icon animation
- Smooth icon morph transition (rotate + scale)
- Respects `prefers-color-scheme` as default
- Persists choice in localStorage
- Applies `.dark` class to `<html>` element
- Transition on body background and text color (300ms)

## Notes

- Use `matchMedia` to detect system preference.
- Store preference as 'light', 'dark', or 'system'.
