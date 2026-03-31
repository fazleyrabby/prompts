---
title: "Multi-Step Form Wizard"
description: "Progressive form with step indicator and validation."
category: "form"
tags: ["form", "wizard", "steps", "validation"]
model: "GPT 5.3 Ultra"
---

## Prompt

Build a multi-step form wizard:
- Step indicator bar at the top (numbered circles connected by lines)
- 3 steps: Personal Info, Preferences, Review & Submit
- Prev/Next navigation buttons
- Field validation before advancing to next step
- Review step shows all entered data
- Smooth slide transition between steps

## Notes

- Disable Next button until required fields are filled.
- Use `transform: translateX()` for slide transitions.
