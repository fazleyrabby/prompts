---
title: "Masonry Image Gallery"
description: "Pinterest-style responsive image grid with lightbox."
category: "media"
tags: ["gallery", "masonry", "images", "lightbox"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Media/Graphics Engineer specializing in responsive image layouts, performance optimization, and interactive media components.

# Objective
Create a Pinterest-style masonry image gallery with a CSS-only layout, hover overlays, and a full-featured lightbox — all responsive and optimized for performance.

# Instructions
1. Build the masonry grid layout using CSS columns:
   - Use `columns: 4` with `break-inside: avoid` on image containers
   - Each image wrapped in a container with `border-radius` and subtle `box-shadow`
   - Consistent gap between images using `margin-bottom`
2. Add hover interactions on each image:
   - Slight zoom effect (`transform: scale(1.03)`) with smooth transition
   - Dark overlay fading in with the image title text
   - Title displayed at the bottom of the image over the overlay
3. Implement a lightbox on image click:
   - Full-screen dark overlay (`rgba(0, 0, 0, 0.9)`)
   - Centered full-size image with max dimensions respecting viewport
   - Close button (×) in the top-right corner
   - Previous/Next arrow buttons on left and right sides
   - Keyboard support: Escape to close, arrow keys to navigate
4. Responsive column breakpoints:
   - Desktop (>1024px): 4 columns
   - Tablet (640px–1024px): 2 columns
   - Mobile (<640px): 1 column
5. Performance optimizations:
   - Add `loading="lazy"` on all images
   - Use `alt` text on every image for accessibility

# Constraints
- CSS columns for masonry layout — no JavaScript layout libraries
- Vanilla JavaScript only for lightbox interaction
- No external dependencies or frameworks
- Images must include meaningful `alt` attributes
- Lightbox must trap focus and be keyboard-navigable
- Use placeholder images from a realistic dimension set (varying heights)

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include 8–12 placeholder images with varying aspect ratios
- Well-commented code with sections for layout, hover effects, and lightbox

## Notes

- Use `columns: 4` with `break-inside: avoid` for the masonry layout — simplest CSS-only approach.
- Always use `loading="lazy"` on images for performance.
- Test lightbox keyboard navigation (Escape, Left/Right arrows) for accessibility.
