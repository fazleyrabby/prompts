---
title: "Feature Comparison Table"
description: "Side-by-side product or tool comparison with feature matrix."
category: "marketing"
tags: ["comparison", "table", "features", "versus"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Frontend Developer and Conversion Optimization Specialist with expertise in comparison interfaces, data tables, and decision-support UI design.

# Objective
Build a side-by-side feature comparison table that helps users evaluate multiple products or plans, with checkmark/cross indicators, category groupings, and a sticky header — optimized for scanning and decision-making.

# Instructions
1. Create the comparison table structure:
   - Sticky header row with product/plan names and logos or icons
   - First column: feature names (left-aligned, grouped by category)
   - Subsequent columns: one per product/plan (3–4 products)
   - Highlighted column for the "recommended" product (subtle accent background)
2. Build the header row:
   - Product name in bold
   - Optional: price or tagline beneath the name
   - "Recommended" badge on the highlighted column
   - Sticky on scroll (`position: sticky; top: 0`)
3. Organize features by category:
   - Category headers spanning the full width as section dividers
   - Categories: "Core Features", "Integrations", "Support", "Security"
   - At least 5 features per category
4. Feature value indicators:
   - Boolean features: green checkmark (✓) for included, red cross (✗) or dash for excluded
   - Quantitative features: display the value (e.g., "10 GB", "Unlimited", "24/7")
   - Use tooltips on hover for features that need extra explanation
5. Style in dark mode:
   - Alternating row backgrounds for readability (subtle shade difference)
   - Sticky header with solid background and bottom border
   - Feature names left-aligned, values center-aligned in each column
   - Responsive: on mobile, allow horizontal scroll with the feature name column frozen

# Constraints
- Semantic HTML `<table>` with `<thead>`, `<tbody>`, `<th>`, `<td>`
- Feature name column sticky on horizontal scroll (`position: sticky; left: 0`)
- No JavaScript required for the table layout — CSS only
- Include at least 20 feature rows across 4 categories
- Use `scope` attributes on header cells for accessibility
- Dark mode only
- Responsive: horizontal scroll with frozen first column on mobile

# Output Format
- Single HTML file with embedded `<style>` block
- Include realistic comparison data (project management tools or cloud hosting theme)
- Well-commented code with sections: table structure, sticky behavior, responsive handling
- Use CSS custom properties for the accent/highlight color

## Notes

- Freeze the feature name column with `position: sticky; left: 0` for horizontal scroll on mobile.
- Alternating row colors improve scanability in dense comparison tables.
- The "recommended" column highlight guides users toward the preferred choice without being pushy.
