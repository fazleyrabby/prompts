---
title: "Custom Video Player"
description: "Styled HTML5 video player with custom controls."
category: "media"
tags: ["video", "player", "controls", "media"]
model: "Gemini 3.1 Pro"
---

## Prompt

# Role
You are a Senior Media/Graphics Engineer specializing in custom media players, HTML5 Video API, and interactive media controls.

# Objective
Design a custom HTML5 video player with styled controls including play/pause, seek bar, volume, time display, and fullscreen — with auto-hiding controls and a polished dark-mode design.

# Instructions
1. Build the video container:
   - Rounded container with subtle border and overflow hidden
   - Video element filling the container width
   - Hide native browser controls (override with custom UI)
2. Create the custom control bar at the bottom:
   - **Play/Pause button**: icon toggles between play (▶) and pause (⏸) SVG icons
   - **Progress bar**: clickable and draggable seek bar showing playback position
     - Filled portion in accent color, buffered portion in muted color
     - Hover preview: show time tooltip on hover position
   - **Time display**: current time / total duration in `MM:SS` format
   - **Volume control**: volume icon + horizontal slider
     - Click icon to toggle mute (icon changes to muted state)
     - Slider adjusts volume level (0–100%)
   - **Fullscreen button**: expand icon to toggle fullscreen mode
3. Implement auto-hide behavior:
   - Controls visible on hover or during interaction
   - Auto-hide after 3 seconds of mouse inactivity
   - Show controls on any mouse movement or tap
   - Cursor also hides with controls
4. Add interaction polish:
   - Space bar toggles play/pause
   - Left/Right arrows seek forward/backward 10 seconds
   - Up/Down arrows adjust volume
   - Click on video area toggles play/pause
   - Double-click toggles fullscreen

# Constraints
- Use the HTML5 Video API for all control interactions
- Hide native controls with CSS: `::-webkit-media-controls { display: none }`
- Vanilla HTML, CSS, and JavaScript only — no libraries
- All icons as inline SVG for consistent styling
- Dark mode design: dark control bar with semi-transparent background
- Accessible: keyboard controls, `aria-label` on all buttons, `role="slider"` on progress bar

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Use a placeholder video source (or public domain sample URL)
- Well-commented code with clear sections for markup, styles, controls logic

## Notes

- Use the HTML5 Video API (`play()`, `pause()`, `currentTime`, `duration`) for all controls.
- Hide native controls with `::-webkit-media-controls { display: none }`.
- Auto-hide timing (3s) should reset on any mouse movement for a smooth experience.
