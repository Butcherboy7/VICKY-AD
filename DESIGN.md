---
name: Adaptive Gamer Coach
description: A plain, professional health-analytics report on one player's tilt risk and gaming habits, explained factor by factor.
colors:
  ground: "#f4f5f7"
  sheet: "#ffffff"
  sheet-2: "#f6f7f9"
  line: "#e1e4e8"
  ink: "#14181f"
  ink-2: "#444c57"
  ink-3: "#66707c"
  ok: "#1a7348"
  watch: "#8f5a00"
  risk: "#b3261e"
typography:
  family: "'Public Sans Variable', 'Segoe UI', system-ui, sans-serif"
  headline: { fontSize: "clamp(26px, 2.8vw, 34px)", fontWeight: 700, letterSpacing: "-0.025em" }
  score: { fontSize: "54px", fontWeight: 700 }
  body: { fontSize: "15px", fontWeight: 400, lineHeight: 1.55 }
  label: { fontSize: "13px", fontWeight: 600 }
rounded:
  sheet: "10px"
  control: "6px"
---

# Design System: Adaptive Gamer Coach

## Overview
A clear report, not a game HUD. Light cool-white ground, white sheets with 1px hairlines, ink as the only brand colour. Green, amber and brick appear only as risk status and are always paired with a word (Low / Medium / High, Healthy / Watch / Off track). Built for a projector: strong contrast, 15px body text, tabular numerals.

## Rules
- One typeface (Public Sans), sentence-case labels, no tracking tricks, no all-caps.
- Ink (#14181f) carries primary actions, slider thumbs, focus rings and the "Do this first" block.
- Sheets are flat: 1px border, 10px radius. Only the search dropdown has a shadow.
- No gradients (except the functional slider fill), glows, skew, clip-path, glass or intro animation. Motion is one short fade when a report loads, plus bars growing once.
- Every number comes from the model or the inputs; no decorative charts.

## Layout
Top bar (wordmark, Riot ID search, API status). Empty state: title, purpose, three numbered steps, example players. With a player: sticky left column (profile + live inputs), right column verdict, two score sheets, factor board, plan, after-plan comparison, warning signs and help, model card.
