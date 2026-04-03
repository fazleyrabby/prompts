---
title: "Notification Center"
description: "Bell icon dropdown with grouped notifications and actions."
category: "dashboard"
tags: ["notifications", "dropdown", "bell", "alerts"]
model: "Claude 4.6 Sonnet"
---

## Prompt

# Role
You are a Senior Frontend Developer and Product UX Engineer specializing in notification systems, dropdown interfaces, and information prioritization.

# Objective
Build a notification center triggered by a bell icon, featuring a dropdown panel with grouped notifications, read/unread states, action buttons, and a notification badge counter — styled for a dark-mode dashboard.

# Instructions
1. Create the bell icon trigger:
   - Bell icon (CSS-only or inline SVG) positioned in a top navigation bar
   - Unread count badge: small red circle with white number, positioned top-right of the bell
   - Badge pulses briefly when a new notification arrives (CSS animation)
   - Click toggles the dropdown open/closed
2. Build the dropdown panel:
   - Positioned below the bell icon, right-aligned
   - Width: 380px, max-height: 480px with scroll
   - Header row: "Notifications" title + "Mark all as read" text button
   - Smooth scale + fade entrance from top-right (transform-origin: top right)
3. Structure the notification list:
   - Group by time: "Today", "Yesterday", "Earlier" with section headers
   - Each notification item includes:
     - Avatar circle (user initials or colored placeholder)
     - Title text (bold for unread, normal weight for read)
     - Description (1–2 lines, truncated with ellipsis)
     - Relative timestamp (e.g., "5 min ago")
     - Unread indicator: small accent dot on the left edge
   - Notification types with distinct accent colors:
     - Mention: blue
     - Assignment: purple
     - Alert: red
     - Update: green
4. Add interaction features:
   - Click a notification to mark as read (dot disappears, font weight changes)
   - "Mark all as read" clears all unread indicators and resets the badge
   - Hover state: subtle background highlight
   - Empty state: illustration or text when no notifications exist
5. Footer: "View all notifications" link at the bottom

# Constraints
- Vanilla JavaScript — no frameworks
- Close dropdown on outside click or Escape key
- Badge count updates in real time when notifications are marked as read
- Semantic HTML with `role="menu"` and `aria-expanded` on the trigger
- Include at least 8 sample notifications across 3 time groups
- Dark mode only
- Responsive: dropdown goes full-width on mobile (bottom sheet style)

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include a minimal nav bar to house the bell icon
- Well-commented code with sections: trigger, dropdown, notification items, interaction logic

## Notes

- Close on outside click and Escape — standard dropdown UX that users expect.
- Badge count must stay in sync when individual items or "Mark all" are clicked.
- Use `transform-origin: top right` for the dropdown animation to feel anchored to the bell.
