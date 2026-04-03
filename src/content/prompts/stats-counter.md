---
title: "Animated Stats Counter"
description: "Scroll-triggered counting animation for key metrics."
category: "landing-page"
tags: ["stats", "counter", "animation", "scroll"]
model: "Claude 4.6 Opus"
---

## Prompt

# Role
You are a Senior Frontend Developer and Motion Design Engineer specializing in scroll-triggered animations, number transitions, and high-impact landing page sections.

# Objective
Build a scroll-triggered animated stats counter section that counts up key metrics when scrolled into view, with smooth easing, suffix support, and a polished layout — designed for landing pages and marketing sites.

# Instructions
1. Create the stats section layout:
   - Full-width section with dark background and subtle top/bottom borders
   - 4 stat items in a horizontal row, evenly spaced
   - Centered content with max-width constraint (1200px)
   - Generous vertical padding for visual breathing room
2. Design each stat item:
   - Large number display (3rem+) in bold, accent-colored text
   - Support for suffixes and prefixes: "10K+", "$2.5M", "99.9%", "150+"
   - Descriptive label beneath the number in muted, smaller text (e.g., "Active Users", "Revenue", "Uptime", "Countries")
   - Optional: small icon above the number related to the metric
3. Implement the counting animation:
   - Numbers start at 0 and count up to the target value
   - Trigger: animation starts when the section enters the viewport (Intersection Observer)
   - Easing: use ease-out curve so counting decelerates toward the end
   - Duration: 2 seconds per counter
   - Stagger: each counter starts 150ms after the previous one
   - Animate only once — do not re-trigger on subsequent scrolls
4. Handle number formatting:
   - Integers: no decimal places (e.g., "10,000")
   - Decimals: respect the target's decimal places (e.g., "99.9")
   - Thousands separator: add commas for readability
   - Preserve prefix/suffix throughout the animation
5. Add subtle background polish:
   - Faint grid pattern or dot matrix behind the stats
   - Subtle gradient overlay for depth
   - Optional: counter numbers have a faint glow on completion

# Constraints
- Use `IntersectionObserver` to trigger animations — no scroll event listeners
- `requestAnimationFrame` for smooth counting — no `setInterval`
- Ease-out timing using a cubic bezier or manual easing function
- `font-variant-numeric: tabular-nums` on all numbers to prevent layout shift during counting
- Semantic HTML with `<section>` and descriptive `aria-label`
- Dark mode only
- Responsive: 2×2 grid on tablet, single column on mobile

# Output Format
- Single HTML file with embedded `<style>` and `<script>` blocks
- Include 4 realistic stat examples with varied formats (integer, decimal, with prefix/suffix)
- Well-commented code with sections: layout, Intersection Observer, counting logic, easing function

## Notes

- `IntersectionObserver` is the performant way to trigger scroll animations — never use scroll event listeners.
- `requestAnimationFrame` with an ease-out curve produces smooth, natural-feeling number transitions.
- `tabular-nums` prevents layout jitter as digits change during the counting animation.
