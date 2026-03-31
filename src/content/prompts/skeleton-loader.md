---
title: "Skeleton Loading Screen"
description: "Animated placeholder UI for content loading states."
category: "animation"
tags: ["skeleton", "loading", "animation", "placeholder"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are an Elite Creative Technologist and Animation Expert specializing in loading states, perceived performance optimization, and CSS animation techniques.

# Objective
Create a skeleton loading screen component that mimics content layout with animated shimmer placeholders — pure CSS, dark mode compatible, and ready to use as a loading state before data arrives.

# Instructions
1. Build a skeleton card layout that mimics a typical content card:
   - Avatar placeholder: 48px circle in top-left
   - Title placeholder: wider rectangle beside the avatar
   - Subtitle placeholder: narrower rectangle below the title
   - Body text placeholders: 3 lines of varying widths (100%, 90%, 75%)
   - Action area: 2 small rectangle buttons at the bottom
2. Create the shimmer animation:
   - Use `@keyframes` with a linear gradient moving left to right
   - Gradient: transparent → light highlight → transparent
   - Background size larger than element (200% width) with `translateX` animation
   - Animation duration: 1.5–2 seconds, infinite loop, ease-in-out
3. Apply consistent styling:
   - Dark mode: use subtle gray tones (`#1a1a2e`, `#2a2a3e`) for placeholders
   - Rounded corners on all placeholder blocks
   - Consistent spacing matching a real card layout
4. Create multiple skeleton variants:
   - Single card skeleton
   - Grid of 3 skeleton cards (demonstrates loading a list)
5. Ensure no JavaScript is needed — pure CSS animation

# Constraints
- Pure CSS only — no JavaScript required
- Use `@keyframes` for the shimmer effect, not transitions
- Dark mode compatible with subtle, non-distracting gray tones
- Animation speed between 1.5s–2s for a natural, non-anxious feel
- Skeleton shapes must match common UI patterns (avatar, text lines, buttons)
- Add `aria-hidden="true"` and `role="presentation"` on skeleton elements

# Output Format
- Single HTML file with embedded `<style>` block
- Include both single card and grid variants
- Well-commented CSS with named keyframes and clear variable definitions
- Clean, minimal markup

## Notes

- Works great as a loading state before API data arrives.
- Keep shimmer speed between 1.5s–2s for a natural, comfortable feel.
- The shimmer highlight color should be subtle — too bright feels distracting in dark mode.
