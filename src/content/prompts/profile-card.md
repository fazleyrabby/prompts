---
title: "User Profile Card"
description: "Profile card with avatar, stats, and follow button."
category: "card"
tags: ["profile","social","user"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer and CSS Specialist with expertise in social UI components and card-based layouts.

# Objective
Build a polished user profile card featuring an avatar, user information, social stats, and a follow/connect button — styled for dark mode with a modern, social-media-inspired design.

# Instructions
1. Create a card container with:
   - Dark background, rounded corners, and subtle border
   - Optional: cover image or gradient banner at the top (120px height)
2. Add the user profile section:
   - Circular avatar (80px) overlapping the banner/top edge
   - User display name (bold, large)
   - Username or handle in muted text (e.g., "@username")
   - Short bio/description (1–2 lines, muted)
3. Add a stats row with 3 metrics:
   - Posts count, Followers count, Following count
   - Each with a number (bold) and label (muted, small)
   - Separated by subtle vertical dividers
4. Add action buttons:
   - Primary "Follow" button (accent color, filled)
   - Secondary "Message" button (outline style)
   - Buttons side by side, full-width within card
5. Style with Tailwind CSS in dark mode:
   - Avatar with white ring border for contrast
   - Hover effects on buttons
   - Consistent padding and spacing

# Constraints
- Semantic HTML with proper heading hierarchy
- Tailwind CSS only — no custom CSS
- Add `aria-label` on action buttons
- Card max-width: 350px, centered
- Responsive: card should look good at any width down to 280px
- Use placeholder data that feels realistic (not "John Doe")

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include realistic placeholder profile data
- Well-structured markup with brief comments

## Notes

- The avatar overlapping the banner creates visual depth and a polished social-media feel.
- Use `tabular-nums` on stat numbers for proper alignment.
- Perfect for quick integration into any Astro, Next.js, or social platform project.
