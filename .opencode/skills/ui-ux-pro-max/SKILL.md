---
name: ui-ux-pro-max
description: UI/UX design intelligence for web, mobile, and desktop. Use when designing, building, reviewing, or fixing interfaces, including pages, components, design systems, accessibility, interaction, responsive layout, typography, color, charts, and stack-specific UI implementation. Searchable local data: 79 searchable styles (50 active), 192 product palettes and reasoning profiles, 74 font pairings, 119 UX guidelines, 105 icons, 17 GSAP presets, 25 chart types, and 22 stacks.
---

# ui-ux-pro-max

UI/UX design intelligence installed locally for this project (vendored from
[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
v2.13.0, MIT). The bundled scripts require Python 3 (standard library only —
no third-party packages, no network access).

## How to query

Run searches from the project root. On Windows use `python` instead of `python3`.

```bash
# Full design system for a page/project
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "developer portfolio dark" --design-system -p "Shoumik Portfolio"

# One focused concern (smallest mode that matches the request)
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "dark teal accent" --domain color
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "reduced motion parallax" --domain ux
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack nextjs
```

Query contract: one dominant intent per query (2–5 terms + one constraint).
New page/system direction → `--design-system`. Component bug → one explicit
`--domain`. Implementation detail → `--stack`. Retry once with a narrower
rewrite when a result is empty or off-topic; if the retry fails, say so and
use clearly labeled general guidance. Never persist unverified output.

## Project design system (already applied to this portfolio)

- **Styles:** Dark Mode (OLED) + Glassmorphism accents. Deep background
  `#0a0a0b`, surface `#141416`, neon accent `#00d4aa`, iris `#8b7cf6`.
- **Motion:** framer-motion v13. Shared easing `[0.19, 1, 0.22, 1]` in
  `src/lib/motion.ts`. All motion honors `prefers-reduced-motion`.
- **Skiper-style components:** vendored in `src/components/skiper/`
  (`TextReveal`, `SpotlightCard`) — Tailwind + framer-motion, no extra deps.

## Pre-delivery checklist (from the skill)

- [ ] No emojis as icons (Lucide/SVG only)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
