---
title: "Progress Stepper"
description: "Horizontal multi-step progress indicator with states."
category: "feedback"
tags: ["progress", "stepper", "steps", "indicator"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Frontend Developer and Design Systems Engineer specializing in progress indicators, state visualization, and reusable UI components.

# Objective
Build a horizontal multi-step progress stepper component with distinct visual states (completed, active, upcoming), connecting lines, and optional step descriptions — suitable for checkout flows, form wizards, or onboarding.

# Instructions
1. Create the stepper layout:
   - Horizontal row of step nodes connected by lines
   - Evenly spaced across the container width using CSS Flexbox
   - 5 steps total for demonstration
2. Design each step node:
   - Circle (40px) with step number or icon inside
   - **Completed state**: filled accent background, white checkmark icon replacing the number
   - **Active state**: accent-colored ring (outline) with filled inner dot, subtle pulse animation
   - **Upcoming state**: muted gray circle with gray number
   - Step label below each circle (e.g., "Cart", "Shipping", "Payment", "Review", "Confirm")
   - Optional: brief description text below the label in smaller, muted font
3. Build the connecting lines:
   - Horizontal lines between each step node
   - **Completed segment**: filled with accent color (solid)
   - **Active segment**: gradient from accent to muted (half-filled effect)
   - **Upcoming segment**: muted gray, dashed or solid
   - Lines should connect center-to-center of the circles
4. Add interactive demo controls:
   - "Next" and "Previous" buttons below the stepper
   - Clicking advances or retreats the active step
   - Smooth transition animations on state changes (300ms)
5. Style in dark mode:
   - Dark background, accent color for progress
   - White text on completed circles, muted text on upcoming
   - Clean, minimal aesthetic

# Constraints
- CSS Flexbox for layout — lines using `::before`/`::after` or `<hr>` elements between nodes
- Transitions on all state changes (color, scale, opacity)
- Semantic HTML: use `<ol>` with `<li>` for steps, `aria-current="step"` on active
- Must work at any number of steps (3–7) without layout breaking
- Responsive: on mobile, show only active step with prev/next navigation
- No external dependencies

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include realistic step labels (e-commerce checkout theme)
- Well-commented code with sections: stepper markup, state styles, connecting lines, demo controls
- Use CSS custom properties for accent color and sizing

## Notes

- Use `aria-current="step"` on the active step for screen reader clarity.
- Connecting lines between nodes are best done with `::after` pseudo-elements on each `<li>`.
- The gradient fill on the active connecting line gives a clear "in progress" visual signal.
