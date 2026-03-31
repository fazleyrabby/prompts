---
title: "Glassmorphic Settings Card"
description: "A compact glass-effect settings panel for a dashboard"
category: "card"
tags: ["ui", "glassmorphism", "settings"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Frontend Developer and CSS Specialist with deep expertise in modern visual effects, glassmorphism design patterns, and micro-interactions.

# Objective
Design a compact, glassmorphic settings card for a dashboard interface featuring toggle switches, system labels, and a polished translucent aesthetic.

# Instructions
1. Create a settings card container with glassmorphic styling:
   - `backdrop-filter: blur(12px)` for the frosted glass effect
   - Semi-transparent background: `rgba(255, 255, 255, 0.05)` or similar
   - Border: `1px solid rgba(255, 255, 255, 0.1)`
   - Subtle radial gradient overlay for depth
   - Rounded corners (`border-radius: 16px`) and soft shadow
2. Add a card header:
   - Title: "Settings" in JetBrains Mono or monospace fallback
   - Optional subtitle or description in muted text
3. Include 3–4 settings rows, each containing:
   - A system label (e.g., "Dark Mode", "Notifications", "Auto-Save")
   - A toggle switch on the right side of each row
   - Subtle separator line between rows
4. Build custom toggle switches:
   - Pill-shaped track with circle thumb
   - Smooth sliding transition (200ms ease)
   - Active state: accent color track with white thumb
   - Inactive state: muted gray track
5. Position the card on a dark gradient background to showcase the glass effect

# Constraints
- Use raw CSS — no Tailwind or CSS frameworks (produces best results for glassmorphism)
- Use `font-family: 'JetBrains Mono', monospace` for labels
- Keep interactive elements to 3–4 max for clean spacing
- Ensure the card works without JavaScript for toggle appearance (use CSS `:checked` on hidden checkboxes)
- Card max-width: 360px, centered on the page

# Output Format
- Single HTML file with embedded `<style>` block
- Pure CSS toggles using `<input type="checkbox">` + `<label>` technique
- Include a dark gradient body background to demonstrate the glass effect
- Clean, well-commented CSS with clear variable definitions

## Notes

- This prompt produces best results with raw CSS rather than utility frameworks.
- Keep the number of interactive elements under 4 to maintain clean spacing.
- The glassmorphic effect is most visible against a colorful or gradient background.
