---
title: "Keyboard Shortcuts Panel"
description: "Floating panel showing available keyboard shortcuts."
category: "utility"
tags: ["keyboard", "shortcuts", "panel", "help"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Software Engineer and Performance Expert specializing in developer tooling interfaces and keyboard-driven UX patterns.

# Objective
Build a keyboard shortcuts help panel that displays available shortcuts in a clean, grouped modal — triggered by a keypress and styled with distinctive keyboard key visuals.

# Instructions
1. Implement the trigger mechanism:
   - Listen for the `?` key press (Shift + /) to open the panel
   - Toggle behavior: pressing `?` again closes the panel
2. Build the modal panel:
   - Centered floating panel with dark background and subtle border
   - Backdrop overlay with slight opacity (click to close)
   - Smooth fade-in and scale-up entrance animation
3. Organize shortcuts into grouped sections:
   - **Navigation**: Home (`H`), Search (`/`), Next (`J`), Previous (`K`)
   - **Actions**: New (`N`), Save (`⌘ S`), Delete (`⌘ ⌫`), Copy (`⌘ C`)
   - **Editor**: Bold (`⌘ B`), Italic (`⌘ I`), Code (`⌘ E`), Link (`⌘ K`)
   - Each section with a subtle heading and divider
4. Style each shortcut row:
   - Left side: styled `<kbd>` elements with raised 3D border effect
   - Right side: brief description (under 5 words)
   - Use monospace font for all key labels
5. Close behavior:
   - Escape key closes the panel
   - Clicking outside the panel closes it
   - Transition out with fade effect

# Constraints
- Vanilla HTML, CSS, and JavaScript only — no dependencies
- Style `<kbd>` elements with a raised 3D effect: `border-bottom: 2px solid`, `box-shadow`, and `border-radius: 4px`
- Use monospace font (`font-family: monospace`) for key labels
- Keep descriptions under 5 words for scannability
- Panel should not exceed 500px width
- Must be keyboard-accessible: focus management within the panel

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include at least 12 shortcut entries across 3 groups
- Clean, well-indented code with comments for each section

## Notes

- Style `<kbd>` elements with a raised 3D effect border for realistic key appearance.
- Keep descriptions under 5 words for maximum scannability.
- Consider adding a search/filter input at the top for panels with many shortcuts.
