---
title: "Stripe Landing Hero"
description: "Modern SaaS hero section with animated gradients, clean typography, and layered dark-mode design."
category: "landing"
tags: ["stripe", "gradient", "saas", "hero"]
url: "https://stripe.com"
draft: true
---

# Role
You are a Staff Frontend Engineer specializing in premium SaaS landing pages, WebGL rendering, fragment shaders, GPU-accelerated visual systems, and high-fidelity dark-mode interfaces.

# Objective
Build a pixel-perfect Stripe-inspired hero section with a true mesh gradient background powered by WebGL (or shader-like canvas math), combined with clean typography, layered UI, and polished CTA interactions — visually rich, physically plausible, and performant.

# Design Tokens
--stripe-bg-deep: #0a2540
--stripe-bg-surface: #0c2d4a
--stripe-gradient-1: #635bff
--stripe-gradient-2: #0073e6
--stripe-gradient-3: #00d4aa
--stripe-gradient-4: #7c3aed
--stripe-gradient-5: #f43f5e
--stripe-fg-default: #f6f9fc
--stripe-fg-muted: #adbdcc
--stripe-fg-subtle: #6b7c93
--stripe-cta-primary: linear-gradient(135deg, #635bff, #0073e6)
--stripe-cta-hover: linear-gradient(135deg, #7c73ff, #1a8cff)
--stripe-cta-ghost: rgba(255,255,255,0.1)
--stripe-font-display: "Sohne",-apple-system,"Inter",sans-serif
--stripe-font-body: -apple-system,"Inter","Segoe UI",sans-serif
--stripe-radius: 8px

# Instructions

1. Full-Viewport Hero Container (MESH GRADIENT SYSTEM)
- min-height: 100vh, position: relative, overflow: hidden
- Background base: --stripe-bg-deep
- Replace ALL CSS gradients with a WebGL (or shader-like canvas) mesh gradient system
- Canvas/WebGL must be fixed full-screen (`position: fixed; inset: 0; z-index: 0`)
- Hero content layered above (`z-index: 10`)

### Mesh Gradient Rendering Model (CRITICAL)
- Compute color per pixel using multiple moving gradient control points
- Each pixel color = weighted blend of multiple sources using smooth falloff

Formula:
color = vec3(0)
weightSum = 0
for each point:
  d = distance(uv, point.pos)
  influence = exp(-d * d * falloff)
  color += point.color * influence
  weightSum += influence
color /= weightSum

- MUST use smooth Gaussian falloff (no hard radial edges)
- MUST produce continuous field (no visible circles/blobs)

### Gradient Control Points
- Use 3–5 moving points
- Colors:
  #635bff, #0073e6, #00d4aa, #7c3aed (+ subtle #f43f5e)
- Each point:
  - normalized position (0–1)
  - continuous velocity
- Points must move at all times (no static state)

### Motion System (HIGH FIDELITY)
- Do NOT use simple sine loops
- Use:
  - Perlin/Simplex noise OR curl noise for direction
  OR
  - velocity + damping + boundary reflection + slow angular drift
- Motion must be:
  - smooth
  - non-repeating within ~15–20s
  - organic (no jitter)

### Field Distortion Layer (DEPTH)
- Apply UV distortion before sampling:
  uv += noise(uv * frequency + time * speed) * strength
- Subtle only — adds fluid/plasma feel
- Must not break blending continuity

### Visual Requirements
- No visible gradient origins
- No banding
- No flicker
- Colors must blend like light, not paint
- Center area must feel alive and evolving

### Performance
- 60fps target
- All heavy math inside shader (not JS loops)
- requestAnimationFrame only
- devicePixelRatio scaling
- pointer-events: none on canvas

### Accessibility
- prefers-reduced-motion → freeze animation
- fallback static gradient if WebGL fails

---

2. Floating Background Elements (SUBTLE ONLY)
- OPTIONAL (keep minimal to not overpower mesh)
- Very low opacity SVG shapes (0.04–0.08)
- Slow transform drift (translate/rotate)
- No heavy CSS gradient usage

---

3. Navigation Bar
- position: fixed, top: 0, width: 100%, z-index: 50
- backdrop-filter: blur(12px)
- background: rgba(10,37,64,0.7)
- height: 64px, padding: 0 32px
- Left: "Nexus" logo (bold)
- Center: Products, Developers, Company, Pricing
- Right: Sign in + "Start now →" CTA pill

---

4. Hero Content
- Centered container, max-width: 1080px, padding-top: 160px
- Overline badge:
  "NEW   Announcing Nexus Developer Platform v2.0 →"
- Headline (gradient text):
  "Financial infrastructure for the internet"
- Subtitle:
  "Millions of companies of all sizes use Nexus to accept payments, grow their revenue, and accelerate new business opportunities."
- CTA row:
  - Primary: Start now →
  - Secondary: Contact sales
- Trust line:
  Shopify Amazon Google Notion Figma (low opacity)

---

5. Interaction States
- Nav hover: color transition
- CTA hover:
  - translateY(-1px)
  - glow using gradient color
- Secondary hover: subtle opacity increase

---

6. Animation Constraints
- NO CSS gradient animations
- ONLY GPU transforms + shader animation
- Keep under 5 GPU-promoted layers
- Avoid background-position animation

---

7. Accessibility
- Semantic HTML (header, nav, main, h1)
- Focus rings visible
- Buttons ≥ 44px height
- Decorative elements aria-hidden

---

8. Responsive
- Tablet: collapse nav
- Mobile:
  - stacked CTAs
  - reduced padding
  - optional simplified mesh resolution

---

9. Output Format
- Single HTML file
- Embedded WebGL shader OR canvas system
- Fully rendered hero on load (no placeholders)
- Clean separation:
  - rendering system
  - UI layout
  - animation logic

---

# Success Criteria (Stripe-Level)
- Looks like a continuous light field, NOT layered gradients
- No visible blobs or circles
- Motion feels fluid and alive
- No obvious repetition
- Comparable to Stripe hero background quality

If it looks like CSS gradients → FAIL
If it looks like fluid light simulation → PASS