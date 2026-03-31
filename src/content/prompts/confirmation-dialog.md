---
title: "Confirmation Dialog"
description: "Accessible modal for destructive action confirmation."
category: "modal"
tags: ["modal", "dialog", "confirmation", "accessible"]
model: "Gemini 3.1 Pro"
---

## Prompt

Create a confirmation dialog component:
- Centered overlay with backdrop blur
- Icon at top: warning triangle for destructive actions
- Title, description text, and action context
- Two buttons: Cancel (secondary) and Confirm (danger red)
- Focus trap: Tab cycles within modal
- Escape key closes the dialog
- Smooth fade-in and scale animation

## Notes

- Use the native `<dialog>` element for accessibility.
- Trap focus within modal using `inert` on background content.
