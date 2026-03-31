---
title: "Newsletter Signup Form"
description: "Inline email capture with validation and success state."
category: "email"
tags: ["newsletter", "form", "email", "validation"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Email Developer and HTML Specialist with expertise in conversion-optimized signup forms and accessible interactive components.

# Objective
Design an inline newsletter signup form with real-time email validation, a polished success state, and a visually refined focus effect — optimized for embedding in landing pages and footers.

# Instructions
1. Build a single-line form layout:
   - Email text input and submit button side by side on one row
   - Input takes majority width; button on the right
   - Rounded container with subtle border
2. Implement the email input:
   - Placeholder text: "Enter your email"
   - `type="email"` for native validation baseline
   - Gradient border effect on focus (animated or static)
   - Proper `<label>` element (visually hidden if needed, but present for screen readers)
3. Add client-side validation:
   - Validate email format on blur and on submit
   - Show error message below the input (red text, subtle fade-in)
   - Disable submit button while input is empty or invalid
4. Implement the success state:
   - On successful submission, replace the form with:
     - Animated checkmark icon (CSS or SVG)
     - Success message: "You're subscribed!"
   - Smooth transition between form and success state (300ms ease-out)
5. Style with dark mode aesthetics:
   - Dark input background, light placeholder text
   - Accent-colored submit button with hover brightness
   - Gradient border visible on focus state

# Constraints
- Semantic HTML with proper `<form>`, `<label>`, `<input>`, and ARIA attributes
- Full keyboard navigation: Tab to input, Enter to submit
- `aria-live="polite"` on the error/success message container for screen readers
- No external dependencies — vanilla HTML, CSS, and JavaScript
- Form should not actually submit — simulate with JavaScript state change
- Max-width: 500px, centered

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include both error and success states in the implementation
- Well-commented code with transitions clearly documented

## Notes

- Use HTML5 `type="email"` for native validation as a baseline enhancement.
- Transition between form and success states with 300ms ease-out for a smooth feel.
- The gradient border on focus is a subtle but impactful polish detail.
