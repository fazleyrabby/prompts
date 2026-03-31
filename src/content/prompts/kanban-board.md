---
title: "Kanban Task Board"
description: "Drag-ready column-based task management layout."
category: "dashboard"
tags: ["kanban", "tasks", "board", "columns"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer and UI/UX Expert specializing in productivity tools, drag-and-drop interfaces, and task management layouts.

# Objective
Design a Kanban task board layout with three status columns, task cards showing assignee and priority information, and interactive features like adding tasks and scrollable overflow.

# Instructions
1. Create a horizontal board layout with 3 columns:
   - "To Do" — tasks not yet started
   - "In Progress" — tasks currently being worked on
   - "Done" — completed tasks
2. Each column must include:
   - Column header with the status name and a task count badge (e.g., "To Do (5)")
   - "+ Add Task" button at the top of the column
   - Scrollable task card area with `overflow-y: auto` and a defined `max-height`
3. Each task card must display:
   - Task title (bold, truncated with ellipsis if too long)
   - Assignee avatar (small circle with initials or placeholder image)
   - Priority label as a colored badge:
     - High: red background
     - Medium: yellow/amber background
     - Low: green background
   - Optional: due date in muted text
4. Add visual affordances for interactivity:
   - Subtle hover shadow on cards to suggest draggability
   - Cursor: `grab` on hover, `grabbing` on active
   - Smooth transition on hover effects
5. Style in dark mode:
   - Dark column backgrounds, slightly lighter card backgrounds
   - Subtle column borders for separation
   - Consistent spacing and padding throughout

# Constraints
- Use CSS Flexbox for the horizontal column layout
- Use `overflow-y: auto` with `max-height: calc(100vh - 200px)` on card containers
- Semantic HTML with proper heading hierarchy
- No drag-and-drop JavaScript required — this is a layout/UI prompt only
- Include 3–4 sample task cards per column with varied priorities
- Responsive: horizontal scroll on the board container for mobile

# Output Format
- Single HTML file with embedded `<style>` block
- Include realistic sample task data (project management theme)
- Well-commented code with clear section markers
- Use CSS custom properties for colors to enable easy theming

## Notes

- Use `overflow-y: auto` on columns with a defined max-height for scrollable cards.
- Cards should have subtle hover shadow (`box-shadow`) for drag affordance.
- Consider using `cursor: grab` on cards to communicate draggability.
