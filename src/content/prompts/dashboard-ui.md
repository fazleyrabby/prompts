---
title: "Developer Dashboard Header"
description: "Dense top navigation for dev tools"
category: "navigation"
tags: ["header", "dense", "breadcrumbs"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Frontend Developer specializing in accessible UI, developer-focused tooling, and information-dense navigation design.

# Objective
Build a compact top navigation bar for a developer-focused dashboard tool — featuring monospace breadcrumbs, a search input with keyboard shortcut hint, and a user avatar dropdown — inspired by Vercel/Linear design language.

# Instructions
1. Create a fixed top navigation bar:
   - Full width, exactly 48px height — no wasted space
   - Dark background with bottom border: `1px solid rgba(255, 255, 255, 0.08)`
   - Three sections: left (breadcrumbs), center (search), right (user)
2. Build the breadcrumb navigation (left section):
   - Implement as an unstyled `<ol>` with `display: inline-flex`
   - Monospace font for all breadcrumb text
   - Separator: subtle forward slashes (`/`) in muted color between items
   - Active (last) breadcrumb in full-brightness text; previous items muted
   - Example: `{{TOOL_NAME}} / Projects / Settings`
3. Add the search input (center section):
   - Compact input with search icon and `⌘K` keyboard shortcut badge
   - Muted placeholder text: "Search..."
   - Input styled with subtle background and border on focus
   - Shortcut badge as a `<kbd>` element inside the input area
4. Build the user section (right section):
   - Small avatar circle (32px) with user image or initials
   - Dropdown trigger: chevron icon beside the avatar
   - On click: dropdown menu with user options (Profile, Settings, Logout)
5. Use `{{FRAMEWORK}}` and `{{CSS_TOOL}}` as specified by the user:
   - Template variables allow customization for any stack

# Constraints
- Height must be exactly 48px — do not exceed
- Monospace font for breadcrumbs and technical labels
- Breadcrumbs as semantic `<ol>` with `inline-flex` — not concatenated strings
- Must be keyboard-accessible: Tab through interactive elements
- Dark mode only, Vercel/Linear aesthetic
- Responsive: hide breadcrumb text on mobile, show only icons

# Output Format
- Single HTML file with embedded styles
- Use `{{FRAMEWORK}}`, `{{CSS_TOOL}}`, and `{{TOOL_NAME}}` template variables for customization
- Well-commented code with clear structural sections

## Notes

- Great for Vercel/Linear-style developer dashboards.
- Implement breadcrumbs as an unstyled `<ol>` with `inline-flex` for semantic correctness.
- The `⌘K` search hint is now a standard pattern in developer tools — users expect it.
