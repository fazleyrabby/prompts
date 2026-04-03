---
title: "Weather Widget Card"
description: "Glassmorphic weather card with conditions and forecast."
category: "card"
tags: ["weather", "widget", "glass", "forecast"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Frontend Developer and Visual Design Engineer specializing in data-rich widget design, glassmorphism, and compact information display.

# Objective
Build a glassmorphic weather widget card displaying current conditions, temperature, a 5-day forecast strip, and atmospheric details — styled with depth, translucency, and polished typography.

# Instructions
1. Create the main weather card:
   - Glassmorphism effect: semi-transparent background with `backdrop-filter: blur(20px)`
   - Rounded corners (20px), subtle white border at low opacity
   - Background: gradient overlay simulating sky conditions (dark blue for night theme)
   - Max-width: 400px, centered on the page
2. Build the current conditions section (top half):
   - Location name and date (e.g., "San Francisco · Tue, Mar 28")
   - Large temperature display: `72°` in bold, oversized font (4rem+)
   - Weather condition icon (CSS-only: sun, cloud, rain using shapes and gradients)
   - Condition text: "Partly Cloudy"
   - High/Low temperatures: "H: 76° L: 58°"
3. Add the 5-day forecast strip (middle):
   - Horizontal row of 5 day cards
   - Each card shows: day abbreviation (Mon, Tue...), small weather icon, high/low temps
   - Active day (today) highlighted with accent background
   - Scrollable on overflow for narrow screens
4. Build the atmospheric details grid (bottom):
   - 2×2 grid of detail cards:
     - Wind: speed + direction (e.g., "12 mph NW")
     - Humidity: percentage with a small bar indicator
     - UV Index: number with severity label (Low/Moderate/High)
     - Visibility: distance in miles
   - Each detail has a label, value, and subtle icon
5. Animations:
   - Gentle floating animation on the weather condition icon
   - Numbers fade in on load (staggered, 100ms delay each)

# Constraints
- CSS-only weather icons — no icon fonts, SVGs, or images
- Glassmorphism: must use `backdrop-filter: blur()` with fallback for unsupported browsers
- Use `font-variant-numeric: tabular-nums` for all temperature values
- Semantic HTML with proper use of `<article>`, `<section>`, `<dl>` for details
- Dark theme only — night sky aesthetic
- Responsive: card stretches to full-width on mobile

# Output Format
- Single HTML file with embedded `<style>` block
- Include realistic weather data for a sample location
- Well-commented CSS with sections: glassmorphism, weather icons, forecast strip, details grid
- Use CSS custom properties for theming

## Notes

- Use `backdrop-filter: blur(20px)` with a `@supports` fallback for browsers without support.
- CSS weather icons using `border-radius`, `box-shadow`, and gradients — no external assets.
- `tabular-nums` on temperatures ensures digits align properly across the forecast strip.
