---
title: "Transactional Email Template"
description: "Responsive HTML email for order confirmations."
category: "email"
tags: ["email", "template", "responsive", "html"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Email Developer and HTML Specialist with deep expertise in cross-client email rendering and responsive email design.

# Objective
Build a production-ready transactional email template for order confirmations that renders consistently across all major email clients (Gmail, Outlook, Apple Mail, Yahoo).

# Instructions
1. Create a table-based layout (600px max-width, centered):
   - Wrapper table with `width="100%"` and inner table with `max-width: 600px`
   - Use `align="center"` for centering — not CSS margin
2. Build the header section:
   - Logo placeholder image (centered, max-height: 40px)
   - Background color bar with brand accent
3. Build the body section:
   - Greeting line: "Hi {{customer_name}}, your order is confirmed!"
   - Order number and date in a highlighted box
4. Create the order summary table:
   - Columns: Item Name, Quantity, Price
   - Each row with subtle bottom border for separation
   - Subtotal row
   - Shipping row
   - Total row with bold, larger font
5. Add a CTA button:
   - "View Order" button with bulletproof button technique (VML fallback for Outlook)
   - Centered with padding
6. Build the footer:
   - Company address (CAN-SPAM compliance)
   - Social media icon links (placeholder images)
   - Unsubscribe link (required)
   - Muted text color for footer content

# Constraints
- Inline CSS only — no `<style>` blocks (Outlook strips them from non-`<head>` positions)
- Table-based layout only — no CSS Grid, Flexbox, or `<div>` layouts
- All images must include `alt` text and explicit `width`/`height` attributes
- Use `role="presentation"` on layout tables for accessibility
- Dark mode support: include `color-scheme: light dark` meta tag and test with inverted colors
- Maximum image width: 600px; use web-safe fonts with fallbacks

# Output Format
- Single `.html` file with complete `<!DOCTYPE html>` structure
- All CSS inlined on elements
- Use placeholder values wrapped in `{{mustache}}` syntax for dynamic content
- Include HTML comments marking each section for easy editing

## Notes

- Test in Litmus or Email on Acid for cross-client rendering verification.
- Never use CSS Grid or Flexbox — tables are the only reliable layout method for Outlook.
- Use the bulletproof button technique for CTA buttons to ensure Outlook compatibility.
