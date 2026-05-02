---
title: "Animated Progress Bar"
description: "A smooth animated progress bar with percentage label and striped variant."
category: "feedback"
tags: ["progress","animation","loading"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Frontend Developer specializing in loading states, progress feedback, and CSS animations.

# Objective
Build an animated progress bar component with smooth fill animation, percentage label, and striped/indeterminate variants — designed for file uploads, loading states, and process tracking.

# Instructions
1. Create the progress bar container:
   - Wrapper element with rounded corners
   - Dark track background (unfilled portion)
   - Accessible with proper labeling
2. Build the progress bar fill:
   - Colored fill representing the percentage
   - Smooth transition when value changes
   - Support values from 0% to 100%
3. Add percentage label:
   - Display current percentage on or beside the bar
   - Update in sync with the fill animation
   - Option to show inside or outside the bar
4. Implement striped variant:
   - Diagonal stripes pattern on the fill
   - Optional: animated stripes that move (CSS animation)
5. Add indeterminate state:
   - Pulsing or sliding animation when progress is unknown
   - Different visual treatment to indicate unknown duration

# Constraints
- Use CSS transitions or animations — no JavaScript animation libraries
- `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` attributes
- `aria-label` describing what is being tracked
- Tailwind CSS only — no custom CSS
- Include demo with buttons to adjust progress

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include multiple variants: determinate, striped, indeterminate
- Well-commented code with clear sections for each variant

## Notes

- The `progressbar` role with proper ARIA attributes ensures screen readers announce progress changes.
- CSS-only animations are smoother and more performant than JavaScript alternatives.
- Perfect for file upload progress, form completion, or multi-step wizard tracking.