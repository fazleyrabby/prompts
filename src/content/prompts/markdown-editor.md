---
title: "Split-Pane Markdown Editor"
description: "Live markdown editor with side-by-side preview."
category: "utility"
tags: ["markdown", "editor", "preview", "split-pane"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer and Developer Tools Specialist with deep expertise in text editors, real-time rendering, and split-pane interfaces.

# Objective
Build a split-pane Markdown editor with a live preview panel, toolbar with formatting buttons, and a dark code-editor aesthetic — similar to StackEdit or Dillinger.

# Instructions
1. Create the split-pane layout:
   - Two equal-width panels side by side (50/50 split)
   - Left panel: Markdown editor (textarea or contenteditable)
   - Right panel: rendered HTML preview
   - Divider bar between panels (optional: draggable to resize)
2. Build the editor panel (left):
   - Full-height `<textarea>` with monospace font (`JetBrains Mono`, `Fira Code`, or system monospace)
   - Line numbers gutter on the left side (CSS-generated or JS-managed)
   - Tab key inserts spaces (2 or 4), not focus change
   - Dark background matching VS Code's One Dark theme
3. Build the preview panel (right):
   - Rendered HTML from the Markdown input, updated in real-time (on `input` event)
   - Styled prose: proper heading sizes, code blocks with dark background, blockquotes with left border, styled links, lists, and tables
   - Scrollable independently from the editor
4. Add a toolbar above the editor:
   - Formatting buttons: Bold, Italic, Heading (H1/H2/H3 dropdown), Link, Code, Blockquote, Unordered List, Ordered List
   - Each button inserts the corresponding Markdown syntax around the selected text or at cursor
   - Separator dividers between button groups
5. Implement Markdown parsing:
   - Support: headings, bold, italic, links, images, code (inline + blocks), blockquotes, lists (ordered + unordered), horizontal rules, tables
   - Use regex-based parsing — no external library

# Constraints
- Vanilla JavaScript — no Markdown libraries (build a basic parser with regex)
- The parser does not need to cover edge cases — focus on common Markdown syntax
- Editor and preview must scroll independently
- Toolbar buttons must work with text selection (wrap selected text in syntax)
- Dark mode only — VS Code-inspired theme
- Responsive: stack panels vertically on mobile (editor on top, preview below)
- No external dependencies

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include sample Markdown content pre-filled in the editor
- Well-commented code with sections: layout, editor, parser, toolbar actions, preview rendering

## Notes

- Regex-based Markdown parsing is sufficient for common syntax — don't over-engineer edge cases.
- Trap the Tab key in the textarea to insert spaces instead of changing focus.
- Real-time preview on `input` event keeps the feedback loop instant.
