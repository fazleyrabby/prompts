---
title: "Newsletter Signup Form"
description: "Inline email capture with validation and success state."
category: "email"
tags: ["newsletter", "form", "email", "validation"]
model: "Claude 4.6 Opus"
---

## Prompt

Design a newsletter signup form:
- Single-line layout: email input + submit button
- Client-side email validation with error message
- Success state: input replaced with checkmark and message
- Subtle gradient border on focus
- Accessible: proper labels, ARIA attributes, keyboard nav

## Notes

- Use HTML5 `type="email"` for native validation as a baseline.
- Transition between states with 300ms ease-out.
