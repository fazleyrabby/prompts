---
title: "Success Toast"
description: "Animated success toast notification."
category: "feedback"
tags: ["toast","alert","animation"]
model: "Claude 4.6 Sonnet"
---

## Prompt

# Role
You are a Senior UX Engineer specializing in feedback systems, micro-interactions, and notification component design.

# Objective
Build an animated success toast notification component with entrance/exit animations, auto-dismiss behavior, and proper accessibility — styled for dark mode.

# Instructions
1. Create the toast notification element:
   - Positioned in the top-right corner of the viewport (fixed)
   - Contains: success icon (checkmark in green circle), message text, and close button (×)
   - Rounded corners, subtle shadow, dark background with green accent
2. Implement entrance animation:
   - Slide in from the right with fade-in (`translateX(100%) → translateX(0)`)
   - Duration: 300ms ease-out
3. Implement exit animation:
   - Slide out to the right with fade-out
   - Duration: 200ms ease-in
   - Triggered by close button click or auto-dismiss timer
4. Add auto-dismiss behavior:
   - Toast automatically disappears after 4 seconds
   - Optional: progress bar at the bottom showing remaining time
   - Pause auto-dismiss on hover (resume on mouse leave)
5. Support stacking:
   - Multiple toasts stack vertically with consistent gap
   - New toasts appear at the top, pushing others down
6. Style with Tailwind CSS in dark mode:
   - Dark background (`bg-gray-800` or similar)
   - Green accent for success variant
   - White text with muted close button

# Constraints
- Semantic HTML with `role="alert"` and `aria-live="polite"` for screen readers
- Tailwind CSS only — no custom CSS
- Vanilla JavaScript for timing and animation triggers
- No external dependencies
- Toast container max-width: 360px
- Include a demo button to trigger the toast

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include a trigger button for demonstration
- Well-commented code with clear separation of toast markup, styles, and behavior

## Notes

- Use `role="alert"` and `aria-live="polite"` so screen readers announce the toast.
- Auto-dismiss with hover pause is an important UX detail — don't skip it.
- Perfect for quick integration into any Astro, Next.js, or SaaS project.
