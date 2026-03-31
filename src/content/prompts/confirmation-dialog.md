---
title: "Confirmation Dialog"
description: "Accessible modal for destructive action confirmation."
category: "modal"
tags: ["modal", "dialog", "confirmation", "accessible"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Frontend Developer specializing in accessible UI components and interaction design patterns.

# Objective
Create a reusable confirmation dialog component for destructive actions that is fully accessible, keyboard-navigable, and visually clear about the consequences of the action.

# Instructions
1. Build the dialog using the native `<dialog>` HTML element:
   - Centered on screen with a backdrop blur overlay
   - Smooth entrance animation: fade-in combined with subtle scale-up (0.95 → 1.0)
2. Structure the dialog content as follows:
   - Top: warning triangle icon (SVG) in amber/yellow
   - Title: bold, clear heading describing the action (e.g., "Delete this project?")
   - Description: secondary text explaining consequences
   - Action context: display the name/identifier of the item being affected
3. Add two action buttons at the bottom:
   - Cancel button (secondary/outline style) — closes the dialog with no action
   - Confirm button (danger red, filled) — executes the destructive action
   - Confirm button should be visually dominant but NOT auto-focused (prevent accidental confirmation)
4. Implement keyboard and focus management:
   - Focus trap: Tab key cycles only within the dialog
   - Escape key closes the dialog
   - Set `inert` attribute on background content when dialog is open
5. Add exit animation: fade-out with scale-down on close

# Constraints
- Use the native `<dialog>` element — do not build a custom modal from `<div>`
- No external dependencies — vanilla HTML, CSS, and JavaScript only
- Must pass WCAG 2.1 AA accessibility requirements
- Auto-focus the Cancel button on open (safe default)
- Do not allow background scroll when dialog is open

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include a demo trigger button to open the dialog
- Clean, commented code with clear separation of structure, style, and behavior

## Notes

- Use the native `<dialog>` element with `.showModal()` for built-in backdrop and accessibility.
- Apply `inert` on the `<main>` content behind the dialog to trap focus correctly.
- Keep animations under 200ms for a snappy, responsive feel.
