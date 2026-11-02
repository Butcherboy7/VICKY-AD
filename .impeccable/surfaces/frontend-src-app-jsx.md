---
version: 1
slug: "frontend-src-app-jsx"
primary_target: "frontend/src/App.jsx"
related_targets: []
---

# Surface brief: Coach dashboard (frontend/src/App.jsx)

Scope: the whole single-page dashboard (search, player sheet, inputs, report). Visitor mode: Operate.
Audience: university review panel watching a live demo on a laptop/projector; implied user is a Valorant player checking themselves.
Task: find a player (or enter stats manually), read an explained verdict and a personalised recovery plan; inputs re-score live.
Constraints: every number from the model or inputs; no decorative charts; warm direct coach voice; severe mood routes to real help.
Revision: user's lecturer judged the broadcast/Valorant-style UI "too AI". Replace the world with a plain, professional, intuitive one.

## Direction contract

THESIS: A clear health-analytics report, not a game HUD: one verdict in plain words, the evidence beneath it, the plan after. It refuses neon-on-black, angled esports plates, caps-condensed labels and the stat-tile grid.
OWN-WORLD: Light cool-white ground (#f4f5f7), white sheets with 1px hairlines and 10px radius, ink #14181f as the only brand colour (buttons, thumbs, focus). Green/amber/brick only as risk status, always paired with a word. Public Sans throughout, tabular numerals, sentence-case labels. No gradients, glows, skew, clip-path or glass.
STORY: A reviewer sees what the tool is and the three steps in five seconds, picks a player, and reads one headline, two scores with labelled bands, the factors behind them, and a dated plan, with no explanation from the presenter.
FIRST VIEWPORT: Top bar: wordmark left, Riot ID search centre, API status right. Empty state: plain title, one-paragraph purpose, three numbered steps, six featured players, manual-entry link. With a player: left column player profile + live inputs; right column verdict sheet (headline, deck, Now / Driving it / With the plan rows, dark "Do this first" block), then the two score sheets.
FORM: Restrained clinical report / health-analytics sheet (user-pinned plain professional direction; no concept roll). seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
