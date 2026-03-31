---
title: "Elegant Login Modal"
description: "A slick, centered login modal with social auth."
category: "authentication"
tags: ["modal","auth","ui"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Security Architect and Full-Stack Engineer specializing in authentication interfaces, secure form design, and polished user experience.

# Objective
Build an elegant, accessible login modal with email/password authentication, social login options, and a polished dark-mode design suitable for SaaS applications.

# Instructions
1. Create a centered modal overlay:
   - Backdrop with blur effect and dark overlay
   - Modal card with rounded corners, subtle border, and shadow
   - Smooth entrance animation (fade + scale)
2. Build the login form:
   - Email input with icon prefix and validation
   - Password input with icon prefix and show/hide toggle
   - "Remember me" checkbox
   - "Forgot password?" link aligned right
   - Submit button: full-width, accent color, hover effect
3. Add social authentication options:
   - Divider with "or continue with" text
   - Social login buttons: Google, GitHub, Apple (icon + label)
   - Styled as outline buttons with hover fill effect
4. Include a sign-up prompt:
   - "Don't have an account? Sign up" text below the form
   - "Sign up" as an accent-colored link
5. Implement interaction details:
   - Close button (×) in top-right corner
   - Close on Escape key or backdrop click
   - Focus trap within the modal
   - Auto-focus on email input when modal opens

# Constraints
- Use Tailwind CSS for all styling — no custom CSS
- Semantic HTML with proper `<form>`, `<label>`, and ARIA attributes
- Do not include actual authentication logic — UI only
- Must be fully keyboard-navigable (Tab, Escape, Enter)
- Modal max-width: 420px, centered on all screen sizes
- Dark mode only

# Output Format
- Single HTML file using Tailwind CSS CDN
- Include a trigger button to open the modal for demonstration
- Well-structured, accessible markup with inline comments
- Use placeholder content ready for real integration

## Notes

- Perfect for quick integration into any Astro, Next.js, or SaaS project.
- Use `<dialog>` element or ARIA `role="dialog"` for proper screen reader support.
- Social login buttons should use recognizable brand colors on hover.
