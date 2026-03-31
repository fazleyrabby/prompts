---
title: "Keyboard Shortcuts Panel"
description: "Floating panel showing available keyboard shortcuts."
category: "utility"
tags: ["keyboard", "shortcuts", "panel", "help"]
model: "Claude 4.6 Opus"
---

## Prompt

Act as a 10x SWE and Performance Expert.

Build a keyboard shortcuts help panel:
- Triggered by pressing `?` key
- Floating centered modal with sections
- Each shortcut: key combo (styled kbd elements) + description
- Grouped by feature: Navigation, Actions, Editor
- Close with Escape or clicking outside
- Monospace font for key labels

## Notes

- Style `<kbd>` elements with raised 3D effect border.
- Keep descriptions under 5 words each.
