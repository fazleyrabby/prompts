---
title: "Breadcrumb Navigation"
description: "A responsive breadcrumb trail with hover states and structured hierarchy."
category: "navigation"
tags: ["breadcrumb","navigation","seo"]
model: "Claude 4.6 Sonnet"
---

## Prompt

# Role
You are a Senior Frontend Developer specializing in accessible navigation patterns and semantic markup for SEO.

# Objective
Build a responsive breadcrumb navigation component with proper hierarchy indication, hover states, and structured markup — optimized for accessibility and SEO.

# Instructions
1. Create the breadcrumb container:
   - Use semantic `<nav>` element with `aria-label="Breadcrumb"`
   - Structured list using `<ol>` with `<li>` items
   - Separator between items: chevron (›) or forward slash
2. Implement each breadcrumb item:
   - First item: "Home" with house icon, links to homepage
   - Middle items: category/page names linking to their pages
   - Last item: current page (non-linked, bold, muted color)
3. Add visual hierarchy:
   - Subtle background or pill shape for the container
   - Hover effect: underline or color change on links
   - Current page has distinct styling (bold, different color)
4. Ensure proper nesting:
   - Support 3–5 levels of depth
   - Truncate long names with ellipsis if needed
5. Style with Tailwind CSS in dark mode:
   - Muted text colors, accent color on hover
   - Small, readable font size
   - Consistent spacing between items

# Constraints
- Semantic HTML with proper list structure — never use `<div>` chains for breadcrumbs
- Add schema.org structured data (JSON-LD) for SEO
- Keyboard navigable: Tab through links, Enter to activate
- Responsive: horizontally scroll on small screens if needed
- Tailwind CSS only — no custom CSS

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include JSON-LD schema markup
- Well-structured markup with comments

## Notes

- Breadcrumbs improve both UX and SEO — search engines use them for rich snippets.
- The semantic `<ol>` structure helps screen readers announce the item count and position.
- JSON-LD structured data helps search engines understand the page hierarchy.