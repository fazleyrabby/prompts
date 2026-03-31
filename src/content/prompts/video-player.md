---
title: "Custom Video Player"
description: "Styled HTML5 video player with custom controls."
category: "media"
tags: ["video", "player", "controls", "media"]
model: "Gemini 3.1 Pro"
---

## Prompt

Act as a Senior Media/Graphics Engineer.

Design a custom HTML5 video player:
- Custom play/pause button with icon toggle
- Progress bar with seek functionality
- Volume slider with mute toggle
- Time display: current / total
- Fullscreen button
- Controls auto-hide after 3s of inactivity
- Rounded container with subtle border

## Notes

- Use the HTML5 Video API for all controls.
- Hide native controls with `::-webkit-media-controls`.
