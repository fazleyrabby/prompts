---
title: "Cookie Consent Banner"
description: "GDPR-compliant cookie consent banner with preference controls."
category: "feedback"
tags: ["cookie", "consent", "gdpr", "banner", "privacy"]
model: "Claude 4.6 Sonnet"
---

## Prompt

# Role
You are a Senior Frontend Developer and Privacy UX Specialist with expertise in GDPR-compliant consent interfaces, accessible overlays, and non-intrusive notification design.

# Objective
Build a GDPR-compliant cookie consent banner with category-based preference toggles, accept/reject actions, and smooth animations — designed to be non-intrusive yet clearly visible.

# Instructions
1. Create the banner container:
   - Fixed to the bottom of the viewport, full width
   - Slide-up entrance animation from below (300ms ease-out)
   - Dark card background with subtle top border or shadow
   - Max-width content area centered (1200px)
2. Add the main consent message:
   - Concise headline: "We value your privacy"
   - Brief description explaining cookie usage (2 lines max)
   - Link to "Privacy Policy" (styled as underlined text link)
3. Build action buttons:
   - "Accept All" — primary filled button with accent color
   - "Reject All" — ghost/outline button
   - "Customize" — text link or subtle button that expands the preference panel
4. Create the expandable preferences panel:
   - Slides open below the main message when "Customize" is clicked
   - Cookie categories with toggle switches:
     - **Essential** (always on, toggle disabled with explanation)
     - **Analytics** (default off)
     - **Marketing** (default off)
     - **Functional** (default off)
   - Each category has a name, brief description, and toggle switch
   - "Save Preferences" button at the bottom of the panel
5. Persistence:
   - Save consent choice to `localStorage`
   - Do not show the banner again if consent was previously given
   - Provide a way to re-open preferences (small floating button or footer link)

# Constraints
- Vanilla JavaScript — no external libraries
- Toggle switches built with CSS-only (`<input type="checkbox">` + `<label>`)
- Essential cookies toggle must be visually disabled and checked
- Must be keyboard-accessible: Tab through all controls, Enter/Space to toggle
- `aria-live="polite"` on the banner for screen reader announcement
- Responsive: stack buttons vertically on mobile
- Banner must not block page scrolling

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include a sample page behind the banner to demonstrate non-blocking behavior
- Well-commented code with clear sections: banner markup, toggle logic, localStorage handling

## Notes

- Essential cookies must always be on with the toggle visually disabled — this is a GDPR requirement.
- Save to `localStorage` and check on page load to avoid showing the banner repeatedly.
- The banner should never block scrolling or interaction with the underlying page.
