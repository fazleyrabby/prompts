---
title: "Transactional Email Template"
description: "Responsive HTML email for order confirmations."
category: "email"
tags: ["email", "template", "responsive", "html"]
model: "GPT 5.3 Ultra"
---

## Prompt

Build a transactional email template for order confirmations:
- Table-based layout for email client compatibility
- Header with logo placeholder
- Order summary table with item, quantity, price
- Total row with bold styling
- Footer with social links and unsubscribe
- Inline CSS only (no external stylesheets)
- Max width: 600px, centered

## Notes

- Test in Litmus or Email on Acid for cross-client rendering.
- Avoid CSS grid/flexbox; use tables for Outlook compatibility.
