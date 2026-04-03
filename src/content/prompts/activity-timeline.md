---
title: "Activity Timeline"
description: "Vertical timeline feed for activity logs and changelogs."
category: "dashboard"
tags: ["timeline", "activity", "feed", "changelog"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Frontend Developer and Information Architecture Specialist with expertise in temporal data display, feed design, and activity logging interfaces.

# Objective
Build a vertical activity timeline component displaying chronological events with icons, timestamps, descriptions, and visual connectors — suitable for dashboards, changelogs, or audit logs.

# Instructions
1. Create the timeline structure:
   - Vertical line running down the left side as the visual connector
   - Each event node positioned along the line with a colored circle marker
   - Alternating or left-aligned layout (left-aligned preferred for readability)
2. Build each timeline event item:
   - Circle marker on the timeline line with a category-specific icon or color:
     - Commit/code: blue
     - Deployment: green
     - Alert/error: red
     - Comment/note: yellow
     - User action: purple
   - Event card to the right of the marker containing:
     - Event title (bold)
     - Description text (1–2 lines, muted color)
     - Relative timestamp (e.g., "2 hours ago", "Yesterday at 3:45 PM")
     - Optional: user avatar + name inline
3. Add date separators:
   - Group events by day with a date header (e.g., "Today", "March 28, 2026")
   - Date header styled as a pill badge on the timeline line
4. Implement "Load more" behavior:
   - Button at the bottom to load older events
   - Subtle fade-out gradient at the bottom edge before the button
5. Style in dark mode:
   - Dark background, slightly lighter event cards
   - Timeline line in low-opacity white
   - Consistent spacing between events (24px gap)

# Constraints
- Semantic HTML using `<ol>` for the event list and `<time>` for timestamps
- CSS-only timeline connector — no SVG or canvas
- Timeline line using `::before` pseudo-element on the list container
- Circle markers using `::before` on each list item
- No JavaScript required for the layout — static HTML/CSS component
- Include at least 8 sample events across 3 date groups
- Responsive: timeline shifts to full-width cards on mobile (line hidden)

# Output Format
- Single HTML file with embedded `<style>` block
- Include realistic sample data (developer project or SaaS audit log theme)
- Well-commented CSS explaining the timeline connector technique
- Use CSS custom properties for colors and spacing

## Notes

- Use `::before` pseudo-elements for both the vertical line and circle markers — keeps HTML clean.
- Group events by date with visible separators for easier scanning.
- Relative timestamps ("2h ago") are more scannable than absolute ones in activity feeds.
