---
title: "Product Changelog Feed"
description: "Categorized product update feed with version badges."
category: "marketing"
tags: ["changelog", "updates", "releases", "feed"]
model: "Claude 4.6 Sonnet"
---

## Prompt

# Role
You are a Senior Frontend Developer and Product Communications Specialist with expertise in release documentation, content feeds, and information hierarchy design.

# Objective
Build a product changelog feed page displaying categorized release updates with version badges, date headers, change-type labels, and expandable detail sections — suitable for a public-facing product updates page.

# Instructions
1. Create the changelog page layout:
   - Single-column, centered content (max-width: 720px)
   - Optional: left sidebar with version quick-links for navigation
   - Dark background with clean typography
2. Build each release entry:
   - Version badge at the top: pill-shaped label (e.g., "v2.4.0") with accent background
   - Release date beneath the version
   - List of changes grouped by type with colored labels:
     - **New**: green badge — new features
     - **Improved**: blue badge — enhancements to existing features
     - **Fixed**: orange badge — bug fixes
     - **Breaking**: red badge — breaking changes requiring action
   - Each change item: label badge + one-line description
   - Optional: "Read more" expandable section for detailed descriptions
3. Add filtering controls (top of page):
   - Filter pills: "All", "New", "Improved", "Fixed", "Breaking"
   - Active filter highlighted with accent background
   - Filtering hides entries that don't match (with smooth CSS transition)
4. Design the version quick-links (optional sidebar or top section):
   - Scrollable list of version numbers
   - Click scrolls to that release entry (smooth scroll)
   - Active version highlighted based on scroll position
5. Style and polish:
   - Version entries separated by subtle horizontal rules or spacing
   - Change-type badges in consistent pill style with category colors
   - Clean serif or sans-serif reading font for descriptions

# Constraints
- Vanilla JavaScript for filtering and scroll behavior
- Semantic HTML: `<article>` for each release, `<time>` for dates
- Filter transitions using CSS — hide/show with opacity + height animation
- Include at least 4 release entries with 3–5 changes each
- Dark mode only
- Responsive: sidebar hidden on mobile, full-width content
- No external dependencies

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include realistic changelog data (developer tool or SaaS product theme)
- Well-commented code with sections: layout, release entries, filtering logic, scroll navigation

## Notes

- Change-type badges (New, Fixed, Improved, Breaking) make scanning fast — users find what matters to them.
- The "Breaking" label in red immediately draws attention to changes that require user action.
- Smooth-scroll to version anchors provides quick navigation in long changelogs.
