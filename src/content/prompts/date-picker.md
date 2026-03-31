---
title: "Custom Date Picker"
description: "Lightweight calendar dropdown for date selection."
category: "form"
tags: ["date", "picker", "calendar", "input"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Frontend Engineer specializing in UX, form components, and input validation patterns.

# Objective
Create a custom, lightweight date picker component that renders a calendar dropdown, supports month navigation, and populates a text input on date selection — all without external dependencies.

# Instructions
1. Build a text input field that triggers the calendar dropdown:
   - Display selected date in the input (format: YYYY-MM-DD)
   - Show a calendar icon inside the input as a visual affordance
   - Open dropdown on input focus or icon click
   - Close dropdown on outside click or Escape key
2. Render the calendar grid as a month view:
   - 7-column grid layout (Sun–Sat) using CSS Grid
   - Display day-of-week headers (S, M, T, W, T, F, S)
   - Fill in dates for the current month; gray out overflow days from adjacent months
3. Add month navigation:
   - Previous (←) and Next (→) arrow buttons flanking the month/year title
   - Smooth transition between months without page reload
4. Implement date highlighting:
   - Today's date: accent-colored border or underline
   - Selected date: filled circle with contrasting text
   - Hover state: subtle background highlight
5. On date click:
   - Populate the text input with the selected date
   - Close the dropdown
   - Dispatch a `change` event on the input

# Constraints
- Vanilla HTML, CSS, and JavaScript only — no libraries or frameworks
- Use CSS Grid with `grid-template-columns: repeat(7, 1fr)` for the calendar layout
- Must be keyboard-accessible: arrow keys to navigate days, Enter to select
- Dark mode compatible with subtle borders and muted colors
- Do not use the native `<input type="date">` — this is a custom replacement

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Calendar component wrapped in a reusable container
- Include sample usage demonstrating the component in context

## Notes

- Use CSS Grid for the 7-column calendar layout — it's the cleanest approach.
- Handle month boundary transitions (e.g., January ← → December across years).
- Consider adding `aria-label` on each day cell for screen reader support.
