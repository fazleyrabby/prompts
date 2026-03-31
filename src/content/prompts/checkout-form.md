---
title: "Stripe Checkout Form"
description: "A minimalist secure payment form."
category: "ecommerce"
tags: ["checkout","form","payment"]
model: "GPT 5.3 Ultra"
---

## Prompt

# Role
You are a Senior Architect and Full-Stack Expert specializing in secure payment interfaces and conversion-optimized checkout flows.

# Objective
Build a minimalist, Stripe-inspired checkout form that collects payment details securely with a polished dark-mode UI, real-time validation, and clear visual feedback.

# Instructions
1. Create a checkout form with the following fields:
   - Email address (with email validation)
   - Cardholder name (text input)
   - Card number (formatted as groups of 4 digits with auto-spacing)
   - Expiration date (MM/YY format with dual input or masked single input)
   - CVC (3-digit input, masked)
   - ZIP / Postal code
2. Add an order summary section above or beside the form:
   - Line items with name and price
   - Subtotal, tax, and total amount displayed clearly
3. Include a prominent "Pay $XX.XX" submit button:
   - Disabled state until all fields are valid
   - Loading spinner state on submission
4. Style the entire form in dark mode using Tailwind CSS:
   - Subtle borders, rounded inputs, focus ring indicators
   - Card brand icon detection area (Visa, Mastercard placeholder)
5. Implement client-side validation:
   - Real-time error messages below each field
   - Success checkmarks on valid fields

# Constraints
- Use semantic HTML with proper ARIA labels and roles
- Tailwind CSS only for styling — no custom CSS unless absolutely necessary
- Do not include actual payment processing logic — this is a UI-only component
- Ensure full keyboard navigation support
- Mobile-responsive: single-column layout on small screens

# Output Format
- Single HTML file using Tailwind CSS CDN
- Well-structured, accessible markup with inline comments
- Form should be visually centered on the page with max-width of 480px

## Notes

- Perfect for quick integration into any Astro, Next.js, or static project.
- Use `inputmode="numeric"` on card fields for mobile number keyboards.
- Consider adding subtle transition animations on focus and validation states.
