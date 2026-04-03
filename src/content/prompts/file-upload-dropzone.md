---
title: "File Upload Dropzone"
description: "Drag-and-drop file upload area with preview and validation."
category: "form"
tags: ["upload", "drag-drop", "file", "form"]
model: "Claude 4.6 Sonnet"
---

## Prompt

# Role
You are a Senior Frontend Developer and UX Engineer specializing in file handling interfaces, drag-and-drop interactions, and form component design.

# Objective
Build a drag-and-drop file upload dropzone with visual feedback states, file previews, validation, and a file list — styled for dark mode with smooth micro-interactions.

# Instructions
1. Create the dropzone area:
   - Large dashed-border rectangle as the drop target
   - Upload icon (cloud + arrow SVG) centered with instructional text
   - Text: "Drag & drop files here" with a secondary "or click to browse" link
   - Hidden `<input type="file" multiple>` triggered by clicking the dropzone
2. Implement drag-and-drop visual states:
   - **Default**: dashed border in muted color
   - **Drag over**: border color changes to accent, background lightens, icon scales up slightly
   - **Uploading**: pulsing animation on the border
   - **Error**: red border with error message
   - Smooth transitions between all states (200ms ease)
3. Build the file preview list (below the dropzone):
   - Each file shows: file type icon, file name (truncated), file size (human-readable), and a remove button (×)
   - Image files show a thumbnail preview (use `FileReader` + `URL.createObjectURL`)
   - Progress bar per file (simulated with CSS animation)
4. Add validation:
   - Max file size: 10MB per file — show inline error for oversized files
   - Accepted types: images and PDFs only (`.jpg`, `.png`, `.gif`, `.pdf`)
   - Max 5 files at once — reject additional files with a warning
5. Style in dark mode:
   - Dark card background with subtle border
   - Accent color for active/success states, red for errors
   - Consistent spacing and rounded corners

# Constraints
- Vanilla JavaScript — no external libraries
- Use `dragenter`, `dragover`, `dragleave`, `drop` events with proper `preventDefault()`
- Semantic HTML with `aria-label` on the dropzone
- File size display in human-readable format (KB, MB)
- Must work without JavaScript for the basic `<input type="file">` fallback
- Responsive: full-width on mobile, max-width 600px on desktop

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include realistic placeholder states and sample file entries
- Well-commented code with clear separation: dropzone UI, drag events, file handling, validation

## Notes

- Always call `preventDefault()` on `dragover` and `drop` — without it, the browser opens the file.
- Use `URL.createObjectURL()` for image thumbnails — it's faster than `FileReader` for preview.
- Show human-readable file sizes (e.g., "2.4 MB" instead of "2457600 bytes").
