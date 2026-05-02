---
title: "Testimonial Card"
description: "A single testimonial card with quote, avatar, and rating stars."
category: "showcase"
tags: ["testimonial","card","review"]
model: "Claude 4.6 Sonnet"
---

## Prompt

# Role
You are a Creative Frontend Developer specializing in testimonial displays, social proof components, and typography-driven design.

# Objective
Build a polished testimonial card component with quote text, customer info, avatar, and star rating — suitable for landing pages and product showcases.

# Instructions
1. Create the card container:
   - Elevated card with subtle shadow and rounded corners
   - Clean, modern aesthetic with generous padding
   - Optional: accent border or gradient background
2. Add quote content:
   - Large, readable quote text (italicized)
   - Opening quotation mark decoration (large, accent-colored)
   - Support for 2–4 lines of text
3. Include customer info:
   - Avatar image (circular, 48–64px)
   - Customer name (bold)
   - Job title or company (muted, smaller text)
   - Optional: small social icon (Twitter, LinkedIn)
4. Add star rating:
   - 5-star display using filled/empty star icons
   - Gold or accent color for filled stars
   - Support displaying 3–5 stars
5. Style with Tailwind CSS in dark mode:
   - Card background slightly lighter than page
   - Subtle border or shadow for depth
   - Consistent typography scale

# Constraints
- Semantic HTML with proper `<blockquote>` and `<figure>` elements
- Add `loading="lazy"` on avatar image
- Tailwind CSS only — no custom CSS
- Use placeholder image via `pravatar.cc` or similar
- Responsive: card adapts to container width

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include a 5-star rating and realistic testimonial content
- Well-structured markup with clear sections

## Notes

- Testimonial cards build trust — make the quote prominent and the customer info clear.
- Use `<blockquote>` for the quote and `<figure>` for the customer info to maintain semantic meaning.
- Perfect for product pages, SaaS landing pages, and client showcase sections.
