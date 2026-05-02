---
title: "Modal Dialog"
description: "An accessible modal with focus trap and backdrop click-to-close."
category: "overlay"
tags: ["modal","dialog","accessibility"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer specializing in accessible modal patterns, focus management, and overlay interactions.

# Objective
Build an accessible modal dialog component with focus trapping, backdrop click-to-close, escape key dismissal, and smooth entrance/exit animations — styled for dark mode.

# Instructions
1. Create the modal structure:
   - Modal container with `role="dialog"` and `aria-modal="true"`
   - `aria-labelledby` pointing to the modal title
   - Optional `aria-describedby` for descriptive text
2. Build the modal content:
   - Header with title and close button (×)
   - Body with scrollable content area
   - Optional footer with action buttons (Cancel / Confirm)
3. Implement overlay (backdrop):
   - Semi-transparent dark backdrop covering the viewport
   - Click on backdrop closes the modal
   - Body scroll is locked when modal is open
4. Add focus management:
   - Focus moves to the modal when opened (usually the close button or first focusable element)
   - Focus is trapped within the modal while open
   - Focus returns to the trigger element when closed
5. Handle escape key:
   - Pressing Escape closes the modal
6. Implement animations:
   - Entrance: backdrop fades in, modal scales up with fade (200ms)
   - Exit: reverse animation (150ms)

# Constraints
- Proper ARIA: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-hidden` on body content
- Focus trap using `Tab` key cycling through focusable elements
- Body scroll lock when modal is open
- Tailwind CSS only — no custom CSS
- Include a demo trigger button to open the modal

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include focusable elements inside modal (input, buttons)
- Well-commented code with clear sections for structure, styles, and logic

## Notes

- Focus trapping is essential — users should not be able to tab outside the modal while it's open.
- Body scroll lock prevents the background from scrolling while the modal is visible.
- The `aria-modal="true"` attribute tells assistive technology to ignore the background content.