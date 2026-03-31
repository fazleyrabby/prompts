---
title: "Multi-Step Form Wizard"
description: "Progressive form with step indicator and validation."
category: "form"
tags: ["form", "wizard", "steps", "validation"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Frontend Engineer specializing in UX, form design, and client-side validation patterns.

# Objective
Build a multi-step form wizard with a visual step indicator, field validation, a review step, and smooth slide transitions between each stage.

# Instructions
1. Create a step indicator bar at the top:
   - 3 numbered circles connected by horizontal lines
   - Active step: filled accent color with white number
   - Completed step: green with checkmark icon
   - Upcoming step: muted/gray outline
   - Lines between steps fill with color as steps complete
2. Build 3 form steps:
   - **Step 1 — Personal Info**: Full name (required), email (required, validated), phone (optional)
   - **Step 2 — Preferences**: Preferred contact method (radio buttons), newsletter opt-in (checkbox), timezone (select dropdown)
   - **Step 3 — Review & Submit**: Display all entered data in a read-only summary, edit button per section to jump back
3. Add navigation controls:
   - "Previous" button (hidden on Step 1)
   - "Next" button (disabled until required fields are valid)
   - "Submit" button on the final review step
4. Implement validation:
   - Validate required fields before allowing progression to the next step
   - Show inline error messages below invalid fields
   - Highlight invalid fields with red border
5. Add slide transitions:
   - Use `transform: translateX()` with transition for horizontal sliding between steps
   - Current step slides out, next step slides in

# Constraints
- Vanilla HTML, CSS, and JavaScript only — no frameworks or libraries
- Client-side validation only (HTML5 + JavaScript)
- Disable the "Next" button until all required fields on the current step pass validation
- Form must be keyboard-navigable: Tab through fields, Enter to advance
- Dark mode compatible styling
- Single-page form — no actual page navigation

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Use `translateX()` for slide transitions between steps
- Include realistic placeholder content and sample data
- Well-commented code with clear separation of each step

## Notes

- Disable the "Next" button until all required fields are filled — this prevents incomplete submissions.
- Use `transform: translateX()` for slide transitions — smoother than opacity-only changes.
- The review step should clearly display all entered data with the ability to go back and edit.
