---
title: "REST API Documentation Page"
description: "Interactive API docs layout with endpoint cards."
category: "api"
tags: ["api", "documentation", "rest", "endpoints"]
model: "Gemini 3.1 Pro"
thumbnail: "https://i.ibb.co/YFkZKBwP/Clean-Shot-2026-04-01-at-11-31-00-2x.webp"
---

## Prompt

# Role
You are a Senior Architect and Elite Backend Engineer specializing in API design, developer documentation, and technical reference interfaces.

# Objective
Create a REST API documentation page layout with a sidebar navigation, endpoint detail views, method badges, code examples, and parameter tables — styled with a dark VS Code-inspired theme.

# Instructions
1. Build a two-panel layout:
   - Left sidebar (240px width): scrollable endpoint list grouped by resource
   - Main content area: endpoint detail view
2. Structure the sidebar:
   - Group endpoints by resource (e.g., "Users", "Projects", "Tasks")
   - Each item shows HTTP method badge + endpoint path
   - Active item highlighted with accent background
   - Collapsible resource groups
3. Build the endpoint detail view:
   - Endpoint header: method badge + full path (e.g., `GET /api/v1/users/:id`)
   - Brief description of what the endpoint does
   - Method badges with distinct colors:
     - GET: green
     - POST: blue
     - PUT/PATCH: orange
     - DELETE: red
4. Add a parameters table:
   - Columns: Name, Type, Required (yes/no badge), Description
   - Alternating row backgrounds for readability
   - Monospace font for parameter names and types
5. Include code blocks for request/response examples:
   - Dark code theme matching VS Code (One Dark or similar)
   - Syntax-highlighted JSON
   - Tabbed interface: "Request" and "Response" tabs
   - Copy button on each code block
6. Style the entire page in a dark theme:
   - Dark sidebar, slightly lighter content area
   - Monospace font for all code and endpoint paths
   - Consistent spacing and typography

# Constraints
- Semantic HTML with proper heading hierarchy and ARIA landmarks
- No external dependencies — vanilla HTML, CSS, and JavaScript
- Method badges in monospace font for consistent alignment
- Keep endpoint paths left-aligned for scanability
- Sidebar should be sticky/scrollable independently from the main content
- Include 3–4 sample endpoints across 2 resources

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include realistic API endpoint examples (user management or project API theme)
- Well-commented code with clear section markers
- Responsive: sidebar collapses to hamburger menu on mobile

## Notes

- Method badges should use monospace font for consistent visual alignment.
- Keep endpoint paths left-aligned for easy scanning.
- The dark code theme should closely match VS Code's One Dark for familiarity.
