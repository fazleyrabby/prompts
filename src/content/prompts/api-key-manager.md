---
title: "API Key Management Panel"
description: "Dashboard panel for creating and revoking API keys."
category: "api"
tags: ["api", "keys", "dashboard", "security"]
model: "Claude 4.6 Opus"
---

## Prompt

Act as a Senior Architect and Elite Backend Engineer.

Design an API key management panel:
- Table listing keys: name, prefix (sk_...xxxx), created date, status
- Create new key modal with name input
- Newly created key shown once with copy button and warning
- Revoke button with confirmation dialog
- Status indicators: active (green dot), revoked (red dot)

## Notes

- Never show full API keys after creation for security.
- Use monospace font for key display.
