---
title: "Minimal Footer"
description: "A simple footprint footer with social links."
category: "layout"
tags: ["footer","minimal","links"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior UI/UX Architect specializing in clean layout design and accessible web components.

# Objective
Build a minimal, elegant website footer with social media links, navigation links, and copyright information — styled for dark mode and suitable for portfolios, landing pages, or SaaS sites.

# Instructions
1. Create a footer with three distinct sections arranged horizontally:
   - Left: brand name or logo placeholder with a short tagline
   - Center: navigation links (Home, About, Blog, Contact) as an inline list
   - Right: social media icon links (GitHub, Twitter/X, LinkedIn, Email)
2. Add a bottom bar spanning full width:
   - Copyright text: "© 2025 [Brand]. All rights reserved."
   - Optional: Privacy Policy and Terms of Service links
3. Social media links:
   - Use inline SVG icons or Unicode symbols as placeholders
   - Hover effect: color transition to brand accent color
   - Open in new tab with `target="_blank"` and `rel="noopener noreferrer"`
4. Style with Tailwind CSS in dark mode:
   - Muted text colors for secondary content
   - Subtle top border separating footer from page content
   - Consistent padding and spacing

# Constraints
- Use semantic `<footer>`, `<nav>`, and `<ul>` elements
- Tailwind CSS only — no custom CSS
- Add `aria-label` on the footer nav and social links sections
- Responsive: stack sections vertically on mobile, horizontal on desktop
- Keep the footer compact — no more than 120px height on desktop

# Output Format
- Single HTML snippet using Tailwind CSS classes
- Well-structured, accessible markup with brief comments
- Use placeholder content that is realistic and ready to customize

## Notes

- Perfect for quick integration into any Astro, Next.js, or static site project.
- Keep the footer minimal — avoid clutter with excessive links or sections.
- Social icons should have hover transitions for a polished feel.
