---
title: "Roadmap"
layout: custom-post
author:
  - Brittni Watkins
date: 2026-08-28
modified_date: 2026-08-31
toc: true
read_time: false
description: "Roadmap for the TypeScript Color Utilities (@blwatkins/color-utils) npm package."
---

## About this Roadmap

This roadmap is not a frozen contract.
It is a live reflection of my current goals for the project, and it is subject to change.

## v0.1.0

### v0.1.0-alpha.0

- Released on August 31, 2026.
- [v0.1.0-alpha.0 Documentation](./releases/v0.x/v0.1.x/v0.1.0-alpha.x/v0.1.0-alpha.0/doc/index.html)


- [x] Color string utility
  - [x] ColorStringUtility assert hex color methods

### v0.1.0-alpha.1

- Development started on August 31, 2026


- [ ] RGB
  - [ ] RGB interface
  - [ ] `RGBBuilder`
  - [ ] `RGBUtility`
- [ ] HSL
  - [ ] HSL interface
  - [ ] `HSLBuilder`
  - [ ] `HSLUtility`
- [ ] Color conversion utility
  - [ ] HSL to style conversion
  - [ ] RGB to style conversion
  - [ ] RGB to HSL conversion
  - [ ] HSL to RGB conversion

### v0.1.0-alpha.2

- [ ] Color Names utilities
  - [ ] Color names fetch via Fetch API and JSON file
  - [ ] Color names cache for user color name override and cached retrieval

### v0.1.0-alpha.3

- [ ] Color contrast utility (chroma.js and cococh)
- [ ] Color luminance utility (chroma.js)

### v0.1.0-alpha.4

- [ ] Palette color interface
- [ ] Palette interface
- [ ] BaseColor

### v0.1.0-alpha.5

- [ ] Generative color selectors
  - [ ] RGB
  - [ ] HSL
    - [ ] Multiple saturation and lightness variations
- [ ] HexColor selector
- [ ] Color selector selector

### v0.1.0-alpha.6

- [ ] Palette selector
- [ ] PaletteColor selector

### v0.1.0-alpha.7

- [ ] Base gradient / mapped gradient (chroma.js - `chroma.scale`)
- [ ] 2D / Anchor gradient (may be better suited to typescript-genart-utils)

## v0.2.0

- [ ] `ColorModeConverter` updates
  - [ ] Alpha channel updates
- [ ] chroma.js color mixing - mixing colors of a palette like paints to make new colors in a sketch
- [ ] Weighted Palette
- [ ] Weighted Palette selector
- [ ] Weighted PaletteColor selector
- [ ] Weighted HexColor selector
