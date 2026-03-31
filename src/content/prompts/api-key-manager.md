---
title: "API Key Management Panel"
description: "Dashboard panel for creating and revoking API keys."
category: "api"
tags: ["api", "keys", "dashboard", "security"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Architect and Elite Backend Engineer specializing in secure developer tooling and API infrastructure interfaces.

# Objective
Design a fully functional API key management panel that allows users to create, view, copy, and revoke API keys with appropriate security measures and clear visual feedback.

# Instructions
1. Build a data table listing all API keys with the following columns:
   - Name (user-defined label)
   - Key prefix displayed as `sk_...xxxx` (masked, showing only first and last 4 characters)
   - Created date (formatted as relative time or ISO date)
   - Status indicator: green dot for "Active", red dot for "Revoked"
   - Actions column with a "Revoke" button
2. Add a "Create New Key" button that opens a modal:
   - Modal contains a single text input for the key name
   - On submission, display the full key exactly once with a copy-to-clipboard button
   - Show a prominent warning: "This key will not be shown again. Copy it now."
   - Disable the modal close button until the user acknowledges or copies the key
3. Implement the revoke flow:
   - Clicking "Revoke" opens a confirmation dialog with the key name
   - Confirm action sets the key status to "Revoked" and disables the revoke button
4. Style the panel for a dark dashboard theme with clear visual hierarchy

# Constraints
- Never display the full API key after initial creation — this is a hard security requirement
- Use monospace font (`font-family: monospace`) for all key displays
- Use semantic HTML and proper ARIA attributes for accessibility
- Do not rely on external libraries — vanilla HTML/CSS/JS only
- Status dots must be colorblind-friendly (include text labels alongside color indicators)

# Output Format
- Single HTML file with embedded CSS and JavaScript
- Clean, well-structured code with comments explaining security-relevant decisions
- Table should be responsive: horizontal scroll on small screens

## Notes

- Never show full API keys after creation — this is a critical security pattern.
- Use monospace font for key display to ensure character-level readability.
- Consider adding a "Last Used" column for production-ready versions.
