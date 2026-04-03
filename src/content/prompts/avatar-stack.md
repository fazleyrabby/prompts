---
title: "Avatar Stack"
description: "Overlapping avatar group with overflow counter and tooltip."
category: "card"
tags: ["avatar", "stack", "group", "users"]
model: "Claude 4.6 Sonnet"
---

## Prompt

# Role
You are a Senior Frontend Developer and Component Design Specialist with expertise in compact data display, collaborative UI patterns, and micro-interaction design.

# Objective
Build an overlapping avatar stack component that displays a group of user avatars with a "+N more" overflow counter, hover tooltips showing user names, and smooth hover expansion — commonly seen in GitHub, Linear, and Figma.

# Instructions
1. Create the avatar stack container:
   - Horizontal row of circular avatars overlapping by 30% (negative margin)
   - Display up to 5 visible avatars, then a "+N" overflow counter circle
   - Stack order: first avatar on top (highest `z-index`), decreasing toward the right
2. Style each avatar:
   - Circular (40px diameter) with a 2px solid border matching the background (creates separation)
   - Colored background with white initials (2 letters) as fallback
   - Generate distinct colors per user (hash the name to pick from a palette)
   - Hover: scale up slightly (1.15×) and raise z-index above all others
3. Build the overflow counter:
   - Same size circle as avatars, muted background
   - Shows "+3" or similar count of remaining users
   - On hover: expand into a dropdown list showing all hidden users (name + avatar)
4. Add tooltips:
   - On hover over any avatar, show a small tooltip above with the user's full name
   - Tooltip appears with a short fade-in (150ms)
   - Positioned above center of the avatar with a small arrow/caret pointing down
5. Implement hover expansion:
   - On hover over the entire stack, avatars spread apart slightly (reduce overlap)
   - Smooth transition (200ms ease)

# Constraints
- Pure CSS for layout, overlap, and hover expansion — JavaScript only for tooltip positioning
- Avatars must use `<img>` with `alt` text, falling back to initials via CSS
- Border color must match the parent background for the "cut-out" overlap effect
- Include at least 8 users in the data (5 visible + "+3" overflow)
- Accessible: `aria-label` on the stack describing the group (e.g., "8 team members")
- Dark mode only
- Responsive: avatar size scales down on small screens

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include sample user data with names and generated initial colors
- Well-commented code with sections: avatar markup, overlap CSS, tooltips, overflow dropdown

## Notes

- Negative margin creates the overlap — use `margin-left: -12px` on all but the first avatar.
- The 2px border matching the background color creates the visual separation between overlapping circles.
- Hash-based color assignment ensures the same user always gets the same avatar color.
