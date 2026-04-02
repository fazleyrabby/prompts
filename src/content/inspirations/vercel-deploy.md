---
title: "Vercel Deployment UI"
description: "Clean deployment status interface with real-time build logs, domain management, and environment indicators."
category: "dashboard"
tags: ["vercel", "deployment", "devtools", "status"]
url: "https://vercel.com"
preview: "https://i.ibb.co/7JHX0sZ6/Clean-Shot-2026-04-02-at-14-56-08.webp"
generatedWith: "Google AI Studio"
draft: false
---

## Prompt

# Role
You are a Staff Frontend Engineer specializing in DevOps interfaces, real-time status displays, build pipeline UIs, and developer-focused dashboard design with extreme typographic precision.

# Objective
Build a pixel-perfect Vercel-style deployment detail page showing deployment status, build timeline, real-time log output, domain management, and environment indicators — in Vercel's signature stark black-and-white aesthetic.

# Design Tokens
```
--v-bg-000:         #000000
--v-bg-100:         #0a0a0a
--v-bg-200:         #111111
--v-bg-300:         #1a1a1a
--v-bg-hover:       #1f1f1f
--v-border:         #2e2e2e
--v-border-light:   #3a3a3a
--v-fg-default:     #ededed
--v-fg-muted:       #888888
--v-fg-subtle:      #666666
--v-fg-faint:       #444444
--v-success:        #0070f3    /* Vercel blue — used for success/ready */
--v-success-light:  #3291ff
--v-warning:        #f5a623
--v-error:          #ee0000
--v-error-light:    #ff4444
--v-info:           #0070f3
--v-font-sans:      "Inter", -apple-system, "Segoe UI", sans-serif
--v-font-mono:      "Geist Mono", "SF Mono", "Fira Code", monospace
--v-radius-sm:      6px
--v-radius-md:      8px
--v-radius-lg:      12px
```

# Instructions

1. **Page Navigation Bar** (top, `height: 64px`)
   - `background: --v-bg-000`, `border-bottom: 1px solid --v-border`
   - Left: triangle logo (Vercel) + breadcrumbs in `--v-font-sans`: "acme" → "next-dashboard" → "Deployments" → deployment ID (`--v-font-mono`, truncated hash), each separated by `/` in `--v-fg-faint`
   - Right: feedback button, notification bell, user avatar (`32px` circle)
   - Breadcrumb segments: `--v-fg-muted`, hover `--v-fg-default`, last segment `--v-fg-default` bold

2. **Deployment Header Section**
   - Container: `padding: 32px 0`, `border-bottom: 1px solid --v-border`
   - **Top row**: deployment URL as large link (`--v-font-mono`, `font-size: 20px`, `--v-fg-default`, hover underline) + external link icon
   - **Metadata grid** (2-column on desktop, stack on mobile, `margin-top: 16px`, `gap: 24px`):
     - **Status**: colored dot (`8px` circle) + label — states:
       - "Ready" → `--v-success` dot, `--v-success` text
       - "Building" → `--v-warning` dot, animated pulse (`scale 1→1.3`, `600ms`, infinite), `--v-warning` text
       - "Error" → `--v-error` dot, `--v-error` text
       - "Queued" → `--v-fg-muted` dot, `--v-fg-muted` text
       - "Cancelled" → `--v-fg-subtle` dot, strikethrough text
     - **Environment**: badge pill — Production (`--v-info` bg at `0.1` opacity, `--v-info` text), Preview (`--v-warning` bg `0.1`, `--v-warning` text), Development (`--v-bg-300` bg, `--v-fg-muted` text) — `border-radius: 20px`, `padding: 4px 12px`, `font-size: 12px`, `font-weight: 500`
     - **Branch**: git branch icon (SVG) + "main" in `--v-font-mono`, `--v-fg-muted`
     - **Commit**: shortened SHA (`--v-font-mono`, `--v-fg-muted`) + commit message truncated, linked
     - **Duration**: clock icon + "42s" in `--v-fg-muted`
     - **Timestamp**: "2m ago" with full datetime on hover tooltip (`--v-bg-300` background, `--v-font-mono`, `font-size: 12px`)
   - **Action buttons** (right-aligned on desktop): "Redeploy" (`--v-bg-200` bg, `--v-border` border, `--v-fg-default`), "..." more menu, "Visit" (primary, `--v-fg-default` bg, `--v-bg-000` text, `font-weight: 600`)

3. **Build Timeline**
   - Vertical timeline on the left with connected line (`2px solid --v-border`)
   - **Steps** (each a row, `padding: 16px 0`):
     - **Queued**: gray circle icon, "Queued" label, duration "1s", `--v-fg-subtle`
     - **Building**: animated spinner (CSS `@keyframes rotate`, `--v-success`) when active / checkmark when complete, "Building" label, duration "28s"
     - **Deploying**: same pattern, "Deploying (Production)", duration "8s"
     - **Assigning Domains**: same pattern, "Ready", duration "5s"
   - Completed steps: `--v-success` checkmark circle, `--v-fg-default` text
   - Active step: `--v-success` spinner, `--v-fg-default` text, bold label
   - Future steps: `--v-fg-faint` empty circle, `--v-fg-subtle` text
   - Line segment between steps: `--v-success` for completed portions, `--v-border` for remaining

4. **Build Logs Panel**
   - Container: `--v-bg-100` background, `border: 1px solid --v-border`, `border-radius: --v-radius-lg`
   - **Header bar**: "Build Logs" label + expand/collapse chevron + "Copy" button + search icon, `padding: 12px 16px`, `border-bottom: 1px solid --v-border`
   - **Log output**: `--v-font-mono`, `font-size: 13px`, `line-height: 1.6`, `padding: 16px`
   - **Line formatting**:
     - Timestamp prefix: `--v-fg-faint`, `font-size: 12px` (e.g., "12:34:56.789")
     - Info lines: `--v-fg-muted` (default)
     - Command lines (starting with `$` or `>`): `--v-fg-default`, `font-weight: 500`
     - Success lines (containing "done", "ready", "compiled"): `--v-success`
     - Warning lines (containing "warn"): `--v-warning`
     - Error lines (containing "error", "ERR!"): `--v-error`, `font-weight: 500`
   - **Auto-scroll**: log container scrolls to bottom on new entries, pauses auto-scroll if user scrolls up, shows "Scroll to bottom" button when paused (`position: sticky`, `bottom: 8px`, centered, pill shape)
   - `max-height: 400px`, `overflow-y: auto`, custom scrollbar (`4px`, `--v-bg-300` track, `--v-fg-faint` thumb)
   - Collapsed state: shows last 3 lines with fade gradient, click to expand

5. **Domain Cards Section**
   - Section header: "Domains" with count badge
   - **Card per domain** (`border: 1px solid --v-border`, `border-radius: --v-radius-md`, `padding: 16px`, `margin-bottom: 8px`):
     - Left: domain name in `--v-font-mono` (`--v-fg-default`, `font-size: 14px`) + redirect indicator if alias
     - Center: SSL status — green lock icon (`--v-success`) + "Valid" label, or warning icon + "Pending"
     - Right: "Visit →" link (`--v-info`, hover underline)
   - Show 2-3 domains: production URL, branch preview URL, and custom domain

6. **Source Section** (collapsible)
   - Git commit details: full SHA (copyable, `--v-font-mono`), author name + avatar, full commit message
   - Diff stats: "+142 / -38" in green/red, file count

# Interaction States
- **Hover on rows/cards**: `--v-bg-hover` background, `transition: background 150ms`
- **Button hover**: lighten background by one step, `translateY(-1px)` on primary CTA
- **Button active**: darken, `translateY(0)`
- **Focus**: `2px solid --v-success` outline, `2px offset`
- **Log line hover**: full-row `--v-bg-200` highlight, shows line number and copy icon
- **Expandable sections**: chevron rotates `180deg` on expand, `transition: transform 200ms`
- **Skeleton loading**: before data loads, show shimmer blocks matching layout (header, 4 timeline steps, log panel placeholder)

# Accessibility
- Deployment status: `role="status"`, `aria-live="polite"` for real-time updates
- Timeline: `role="list"` with `role="listitem"` for each step, `aria-current="step"` on active
- Build logs: `role="log"`, `aria-label="Build output"`, `aria-live="polite"` (announce new lines for screen readers)
- Status colors always paired with text label and icon (never color-only)
- All timestamps: `<time datetime="...">` with machine-readable value
- Keyboard: Tab through sections, Enter to expand/collapse, focus visible on all interactive elements
- `prefers-reduced-motion: reduce` — disable spinner rotation (show static icon), disable auto-scroll, remove hover translations

# Performance
- Zero external dependencies — single HTML file
- CSS-only spinner animation (no JS intervals)
- Log auto-scroll via `scrollTop` assignment in `requestAnimationFrame`
- `contain: paint layout` on log scroll container
- Monospace font: system stack (no font file downloads)
- Total file under 25KB

# Sample Data — MUST BE HARDCODED IN THE HTML
All data below must be rendered as visible DOM elements when the file is opened. Do NOT use empty containers, loading skeletons, or JS-only data population. Every timeline step, log line, domain card, and metadata field must exist as actual HTML content on page load.

**Navigation breadcrumbs:**
```
▲ acme / next-dashboard / Deployments / dpl_8xK2mPqR7nYs
```

**Deployment header:**
- URL: `https://next-dashboard-acme.vercel.app` (large, monospace, clickable)
- Status: green dot + "Ready" in `--v-success` color
- Environment: "Production" blue badge
- Branch: git icon + `main`
- Commit: `a3f8d21` (monospace) + "feat: add analytics dashboard with real-time charts"
- Duration: clock icon + "42s"
- Timestamp: "2 minutes ago"
- Buttons: "Redeploy", "⋯" more, "Visit" (primary)

**Deployment timeline** — render all 4 steps as visible items with connecting line:
```
✅  Queued            1s      Completed
✅  Building          28s     Completed
✅  Deploying         8s      Completed (Production)
✅  Assigning Domains 5s      Ready
```
All steps should show green checkmark circles, green connecting line, and duration. The "Ready" step should have a slightly emphasized style.

**Build logs** — render ALL of these as visible monospace lines in the terminal panel (expanded, not collapsed):
```
[12:34:01.123]  Cloning github.com/acme/next-dashboard (Branch: main, Commit: a3f8d21)
[12:34:01.456]  Cloning completed: 847ms
[12:34:02.001]  Running build in Washington, D.C., USA (East) – iad1
[12:34:02.100]  Detected Next.js version: 15.1.0
[12:34:02.200]  Detected package manager: pnpm@9.15.0
[12:34:02.300]  Running "pnpm install"
[12:34:05.100]  Packages: +342
[12:34:05.200]  Progress: resolved 342, reused 340, downloaded 2, added 342, done
[12:34:05.400]  Running "pnpm run build"
[12:34:05.500]  $ next build
[12:34:06.100]     ▲ Next.js 15.1.0
[12:34:06.200]     Creating an optimized production build...
[12:34:18.300]     ✓ Compiled successfully
[12:34:18.400]     Linting and checking validity of types...
[12:34:20.100]     Collecting page data...
[12:34:21.500]     Generating static pages (0/12)...
[12:34:22.800]     Generating static pages (6/12)...
[12:34:23.100]     Generating static pages (12/12)
[12:34:23.200]     Finalizing page optimization...
[12:34:23.300]
[12:34:23.400]  Route (app)                    Size    First Load JS
[12:34:23.401]  ┌ ○ /                          5.2 kB     89.3 kB
[12:34:23.402]  ├ ○ /about                     2.1 kB     86.2 kB
[12:34:23.403]  ├ ● /dashboard                 12.4 kB    96.5 kB
[12:34:23.404]  ├ ● /dashboard/analytics       8.7 kB     92.8 kB
[12:34:23.405]  ├ ○ /dashboard/settings        3.4 kB     87.5 kB
[12:34:23.406]  ├ λ /api/events                0 B        84.1 kB
[12:34:23.407]  ├ λ /api/users                 0 B        84.1 kB
[12:34:23.408]  └ ○ /login                     4.1 kB     88.2 kB
[12:34:23.500]  ○ (Static)    prerendered as static content
[12:34:23.501]  ● (SSG)       prerendered as static HTML (uses getStaticProps)
[12:34:23.502]  λ (Dynamic)   server-rendered on demand
[12:34:23.600]  Build completed in 18.1s
[12:34:24.000]  Deploying outputs...
[12:34:28.500]  Deployment completed
[12:34:29.100]  Assigning domains...
[12:34:30.200]  ✅ next-dashboard-acme.vercel.app
[12:34:30.300]  ✅ dashboard.acme.com
[12:34:30.400]  ✅ next-dashboard-git-main-acme.vercel.app
```
Timestamps in `--v-fg-faint`. Lines containing "✓ Compiled" and "✅" in `--v-success`. Route table lines in `--v-fg-muted`. The `$` command lines in `--v-fg-default` bold.

**Domain cards** — render all 3 as visible cards:
```
🔒 next-dashboard-acme.vercel.app          SSL Valid    Visit →
🔒 dashboard.acme.com                      SSL Valid    Visit →
🔒 next-dashboard-git-main-acme.vercel.app SSL Valid    Visit →
```
Each with green lock icon, domain in monospace, "Valid" SSL status, and "Visit →" link.

**Source section:**
- Commit: `a3f8d21e9b4c` (full-ish SHA, copyable)
- Author: "JD" avatar circle + "Jane Doe"
- Message: "feat: add analytics dashboard with real-time charts"
- Stats: `+142` (green) / `-38` (red), 8 files changed

# Output Format
- Single HTML file with embedded `<style>` and `<script>`
- **CRITICAL**: All sample data above must be rendered as hardcoded HTML elements visible on page load. The page must look fully populated when opened — completed timeline, full build log output, domain cards, all metadata. No empty states, no "loading" skeletons, no JS-dependent rendering.
- Realistic, self-contained — should look like an actual Vercel deployment page when opened in a browser
- Code organized in clearly commented sections: tokens, nav, header, timeline, logs, domains, source, interactions, data
