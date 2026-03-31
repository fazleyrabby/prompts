---
title: "Masonry Image Gallery"
description: "Pinterest-style responsive image grid with lightbox."
category: "media"
tags: ["gallery", "masonry", "images", "lightbox"]
model: "GPT 5.3 Ultra"
---

## Prompt

Create a masonry-style image gallery:
- CSS columns-based masonry layout (no JS needed)
- Images with rounded corners and subtle shadow
- Hover: slight zoom and overlay with image title
- Click opens lightbox with full-size image
- Lightbox: dark overlay, close button, prev/next arrows
- Responsive: 4 columns desktop, 2 tablet, 1 mobile

## Notes

- Use `columns: 4` with `break-inside: avoid` for masonry.
- Lazy load images with `loading="lazy"` attribute.
