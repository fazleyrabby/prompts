# 📋 CLI Feature Backlog & Performance Roadmap

This document tracks planned architectural improvements for the `@fazleyrabbi/prompts` CLI as the library scales toward 100k+ prompts.

## 🚀 Performance (High Priority for 5,000+ Prompts)

- [ ] **Unified JSON Indexing**: Implement a pre-build step (`npm run cli:index`) that generates a single `cli/index.json` containing only titles and categories.
  - *Status*: Deffered (Current lazy-loading is sufficient for <1,000 prompts).
  - *Goal*: Sub-100ms startup times regardless of library size.
- [ ] **SQLite Full-Text Search**: If memory consumption exceeds 200MB, transition the in-memory `Fuse.js` search to a local `prompts.sqlite` database.
- [ ] **Parallel File Scanning**: Shift from `fs.readdirSync` to `fast-glob` for faster multi-directory prompt scanning.

## 🎨 UI/UX Refinement

- [ ] **Scroll Memory**: Remember the scroll position (`previewScrollOffset`) for each specific prompt when switching back and forth in the sidebar.
- [ ] **Visual Diff**: When editing variables, show a "Before/After" diff toggle in the preview panel.
- [ ] **Theming Support**: Add a `--theme` flag to switch between `btop-cyan`, `monokai`, and `catppuccin` color palettes.

## 🔧 Core Features

- [ ] **Direct Edit Mode**: Add a keyboard shortcut to open the active markdown file in the user's default `$EDITOR`.
- [ ] **Multi-Select Copy**: Allow selecting multiple prompts into a combined "Prompts Buffer" for batch copying.
- [ ] **Remote Sync**: Add a flag to pull/diff prompts from a remote GitHub repository or private team server.

---
*Created as part of the v2.0.0 Architecture Overhaul.*
