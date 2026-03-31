---
title: "SaaS Pricing Table"
description: "Three-tier pricing table with a highlighted 'Pro' plan."
category: "marketing"
tags: ["pricing","saas","grid"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Creative Technologist and Frontend Expert specializing in conversion-optimized SaaS pricing layouts and visual hierarchy design.

# Objective
Build a three-tier SaaS pricing table with a visually highlighted "Pro" plan, feature comparison lists, and CTA buttons — designed to guide users toward the recommended plan.

# Instructions
1. Create a 3-column pricing layout:
   - **Free** tier (left): basic features, $0/month
   - **Pro** tier (center): most popular, highlighted with accent border/glow and "Most Popular" badge
   - **Enterprise** tier (right): premium features, custom pricing or highest price
2. Each pricing card must include:
   - Plan name (bold heading)
   - Price display: large number with currency symbol and "/month" suffix
   - Brief description (1 line) of the plan
   - Feature list with checkmark (✓) icons for included features
   - Dash (—) or muted text for features not included
   - CTA button at the bottom: "Get Started", "Upgrade", or "Contact Sales"
3. Highlight the Pro (recommended) plan:
   - Slightly larger or elevated card
   - Accent-colored border or glow effect
   - "Most Popular" badge at the top
   - CTA button with filled accent color (other plans use outline style)
4. Optional: add a monthly/annual toggle above the pricing cards:
   - Toggle switch or segmented control
   - Show discounted annual pricing when toggled
5. Style in dark mode with Tailwind CSS:
   - Dark card backgrounds with subtle borders
   - Consistent typography and spacing
   - Responsive: stack cards vertically on mobile

# Constraints
- Use semantic HTML with proper heading hierarchy
- Tailwind CSS only — no custom CSS
- Add `aria-label` on the pricing section and CTA buttons
- Feature lists must align across all three cards for easy comparison
- Include at least 6 features per plan
- Responsive: single column on mobile, 3 columns on desktop

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include realistic SaaS pricing content (project management or developer tool theme)
- Well-structured markup with comments marking each plan section

## Notes

- The highlighted "Pro" plan should be visually dominant to guide user attention.
- Align feature lists across cards so users can easily compare plans side by side.
- Perfect for quick integration into any Astro, Next.js, or marketing site project.
