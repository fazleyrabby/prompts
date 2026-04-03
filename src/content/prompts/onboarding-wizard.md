---
title: "Onboarding Wizard"
description: "Multi-step onboarding flow with progress indicator and illustrations."
category: "form"
tags: ["onboarding", "wizard", "steps", "setup"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer and Product Design Engineer specializing in user onboarding flows, progressive disclosure, and first-run experience design.

# Objective
Build a multi-step onboarding wizard with a visual progress indicator, step-specific content panels, navigation controls, and smooth transitions — designed to guide new users through initial setup.

# Instructions
1. Create the wizard container:
   - Centered card on a dark background (max-width: 640px)
   - Subtle shadow and rounded corners for a floating card feel
   - Fixed height with content area that transitions between steps
2. Build the progress indicator (top of the card):
   - Horizontal step bar with numbered circles connected by lines
   - States for each step: completed (filled accent), active (outlined accent with pulse), upcoming (muted)
   - Step labels beneath each circle (e.g., "Profile", "Workspace", "Integrations", "Done")
   - 4 total steps
3. Design each step's content:
   - **Step 1 — Profile**: name input, role dropdown, avatar upload placeholder
   - **Step 2 — Workspace**: workspace name input, team size radio buttons (Solo, Small Team, Organization)
   - **Step 3 — Integrations**: checklist of integration options with toggle switches (GitHub, Slack, Jira, Figma)
   - **Step 4 — Done**: success illustration (CSS checkmark animation), welcome message, "Go to Dashboard" CTA
4. Add navigation controls (bottom of the card):
   - "Back" button (hidden on Step 1)
   - "Continue" button (becomes "Finish" on last step)
   - Step counter text: "Step 2 of 4"
5. Implement transitions:
   - Slide-left animation when advancing, slide-right when going back
   - Progress bar fills smoothly between steps

# Constraints
- Vanilla JavaScript for step navigation and state management
- CSS transitions for slide animations — no animation libraries
- Form inputs must be properly labeled with `<label>` elements
- Keyboard-accessible: Tab through form fields, Enter to advance
- Maintain form state when navigating back to previous steps
- Dark mode only with consistent input styling
- Responsive: full-width card on mobile with stacked layout

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include realistic placeholder content (SaaS or developer tool theme)
- Well-commented code with sections: progress bar, step content, navigation logic, transitions

## Notes

- Preserve form data when navigating back — users lose trust when their input disappears.
- The progress indicator should clearly show completed, active, and upcoming states.
- Step 4 "Done" state with a CSS checkmark animation provides a satisfying completion moment.
