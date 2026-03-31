---
title: "Complex Data Table"
description: "Data table with sortable headers and pagination."
category: "dashboard"
tags: ["table","data","admin"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Frontend Developer and UI/UX Expert specializing in data-dense interfaces and enterprise dashboard components.

# Objective
Build a feature-rich data table component with sortable columns, pagination, row selection, and a dark-mode admin aesthetic suitable for dashboards and back-office tools.

# Instructions
1. Create an HTML table with the following columns:
   - Checkbox (for row selection)
   - Name (sortable, text)
   - Email (sortable, text)
   - Role (filterable badge: Admin, Editor, Viewer)
   - Status (Active/Inactive with colored dot indicator)
   - Date Joined (sortable, formatted date)
   - Actions (edit/delete icon buttons)
2. Implement sorting functionality:
   - Click column header to sort ascending; click again for descending
   - Visual indicator: arrow icon showing current sort direction
3. Add pagination controls below the table:
   - Previous/Next buttons
   - Page number indicators (1, 2, 3...)
   - "Showing X–Y of Z results" text
4. Include a top toolbar with:
   - Search input to filter rows by name or email
   - Bulk action dropdown (appears when rows are selected)
   - "Select All" checkbox in header
5. Style in dark mode using Tailwind CSS:
   - Alternating row backgrounds with subtle contrast
   - Hover highlight on rows
   - Sticky header on scroll

# Constraints
- Use semantic `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` elements
- Add proper ARIA attributes: `aria-sort` on sortable headers, `role="checkbox"` on selection
- Tailwind CSS only — no custom CSS unless required for table-specific behavior
- Responsive: horizontal scroll wrapper on small screens with sticky first column
- Use sample/mock data (8–12 rows) to demonstrate functionality

# Output Format
- Single HTML file using Tailwind CSS CDN
- Embedded JavaScript for sort, search, and pagination logic
- Well-commented code with clear sections for markup, styles, and scripts

## Notes

- Use `position: sticky` for the table header to keep it visible on scroll.
- Apply `tabular-nums` on numeric columns for proper alignment.
- Perfect for integration into Astro, Next.js, or any admin panel project.
