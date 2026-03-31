---
title: "Kanban Task Board"
description: "Drag-ready column-based task management layout."
category: "dashboard"
tags: ["kanban", "tasks", "board", "columns"]
model: "Claude 4.6 Opus"
---

## Prompt

Design a Kanban task board layout:
- 3 columns: To Do, In Progress, Done
- Task cards with title, assignee avatar, priority label
- Priority colors: high (red), medium (yellow), low (green)
- Column header with task count
- Add task button at top of each column
- Scrollable columns for overflow

## Notes

- Use `overflow-y: auto` on columns with a max-height.
- Cards should have subtle hover shadow for drag affordance.
