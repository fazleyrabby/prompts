---
title: "Code Snippet Block"
description: "Syntax-highlighted code block with copy button and line numbers."
category: "utility"
tags: ["code", "snippet", "syntax", "copy"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer and Developer Experience Specialist with deep expertise in code presentation, syntax highlighting, and documentation UI components.

# Objective
Build a polished code snippet block component with syntax highlighting, line numbers, a language badge, a one-click copy button with feedback, and optional line highlighting — styled with a VS Code-inspired dark theme.

# Instructions
1. Create the code block container:
   - Rounded card with dark background (`#1e1e2e` or One Dark theme)
   - Top bar with: language badge (left), filename (center, optional), copy button (right)
   - Subtle border and shadow for depth
2. Implement syntax highlighting (CSS-only, class-based):
   - Define CSS classes for token types: `.keyword`, `.string`, `.comment`, `.function`, `.number`, `.operator`, `.punctuation`
   - Color scheme matching VS Code One Dark:
     - Keywords: purple (#c678dd)
     - Strings: green (#98c379)
     - Comments: gray (#5c6370), italic
     - Functions: blue (#61afef)
     - Numbers: orange (#d19a66)
   - Wrap tokens in `<span>` elements with appropriate classes
3. Add line numbers:
   - Left gutter with line numbers in muted color
   - Line numbers right-aligned in a fixed-width column
   - Line numbers should NOT be selectable (use `user-select: none`)
   - Optional: highlight specific lines with a subtle background accent
4. Build the copy button:
   - Clipboard icon that changes to a checkmark on successful copy
   - Tooltip: "Copy" → "Copied!" with a brief display (2 seconds)
   - Use `navigator.clipboard.writeText()` — copy only the code, not line numbers
5. Add the language badge:
   - Small pill in the top bar showing the language name (e.g., "JavaScript", "Python")
   - Color-coded by language

# Constraints
- No syntax highlighting libraries — use pre-tokenized HTML with CSS classes
- Copy must exclude line numbers — store raw code separately or strip on copy
- `<pre><code>` semantic markup with `language-*` class
- Line numbers via CSS `counter-increment` or a separate `<span>` column
- Dark mode only
- Include 3 demo snippets: JavaScript, Python, and HTML
- Responsive: horizontal scroll on overflow, no wrapping of code lines

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include 3 realistic code samples with pre-applied syntax classes
- Well-commented code with sections: theme colors, token styles, line numbers, copy logic

## Notes

- Use `user-select: none` on line numbers so they don't get copied with the code.
- `navigator.clipboard.writeText()` is the modern API — include a fallback note for HTTP contexts.
- The copy button should only copy raw code text, never the line numbers or decorations.
