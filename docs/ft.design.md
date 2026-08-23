---
version: alpha
name: Financial Times
website: "https://www.ft.com"
description: >-
  A pink-salmon broadsheet that prints itself onto the browser — the Financial Times homepage runs on a "#fff1e5" canvas that mimics its 138-year-old newsprint stock, with Financier Display VF serif headlines, Metric 2 VF UI type, and FT Claret ("#990f3d") reserved for category kickers and the brand wordmark. The single accent is a deep teal ("#0d7680") that paints subscription pills and link underlines on the salmon ground; the chrome stays at "2–4px" radii on otherwise square corners, and the only filled CTA on the page is a "#262a33" near-black "Subscribe" pill — every other piece of color is a print-paper inheritance, not a SaaS borrowing.

seo:
  title: "Financial Times Design System for React — Salmon #fff1e5, Financier Display"
  metaDescription: "FT.com as a DESIGN.md file. Pink salmon canvas #fff1e5, FT Claret #990f3d, Financier Display VF serif, Metric 2 VF UI. Tokens for React + AI tools."
  highlights:
    - "Newsprint salmon canvas — #fff1e5 carries the page in 37 occurrences as the dominant background, mimicking the FT's 138-year-old pink paper stock that no other publisher inherits"
    - "FT Claret as kicker-only — #990f3d appears in 50 of 4,000+ color slots, scoped to section labels and the wordmark, never as a button fill or hero background"
    - "Serif display, sans UI — Financier Display VF runs 20–32px on h1 and section heads at weights 242/397/400 (variable axis), while Metric 2 VF carries every nav link, dek, byline, and button at 12–16px"
    - "Single teal accent — #0d7680 paints 282 link underlines and the Subscribe wordmark, the only chromatic move beyond the claret kicker and salmon ground"
    - "2–4px corner discipline — the Subscribe pill rounds at exactly 2px, story cards at 4px, where most consumer publishers default to 8–12px softness"
  tags:
    - "News & Publishing"
  lastUpdated: "2026-05-13"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    The Financial Times homepage prints itself onto the browser. The canvas is a pink-salmon (`#fff1e5`) that has carried the paper since 1893 — no other major publisher inherits a coloured paper stock — and it shows up as the dominant background in 37 of the page's structural color slots, paired with a near-black ink (`#33302e`) that softens the contrast to roughly that of newsprint rather than a pure white-on-black SaaS chrome. FT Claret (`#990f3d`) appears in 50 occurrences, all scoped to section kickers ("MARKETS REPORT", "TOP STORIES") and the wordmark — never as a button fill or hero wash. The only filled CTA on the page is a 28px-tall `#262a33` near-black "Subscribe" pill at a 2px radius, and the only other chromatic voltage is a teal (`#0d7680`) that paints 282 link underlines and the Subscribe link.

    This DESIGN.md packages the homepage into a structured spec under the Google Labs format. Inside: 19 color tokens organised around the salmon-ink-claret-teal axis, a 1893-inherited cream surface tint (`#f2dfce`) for promotional rails, a markets-up green (`#96cc28`) and markets-down red (`#cc0000`) reserved for ticker semantics, and a deep navy header surface (`#262a33`); 13 typography tokens spanning Financier Display VF 20–32px serif display, Metric 2 VF 12–16px sans-serif UI work across weights 400/600/700, and a 16px UPPERCASE 2px-tracked "SUBSCRIBED" badge; a 4-step radius scale (`2px`, `3px`, `4px`, `50%`) where the entire page reads as a print broadsheet because nothing rounds past 4px; an 8-step spacing scale clustered on 8/12/16/24px multiples; and 17 component specifications covering the salmon body, the dark navigation strip, the Subscribe pill, story cards with claret kickers, and the markets ticker row.

    Feed the file to Claude, Cursor, or GitHub Copilot and the agent reproduces the FT's broadsheet voice — salmon canvas, claret kicker, Financier Display serif headlines, Metric 2 VF UI workhorse, and the 2px-cornered Subscribe pill that refuses the rounded-button convention. Reference the tokens directly to paste hex values into Tailwind config, or use the spec as an audit checklist against any business-news surface that needs to feel like a paper edition rather than a 2010s blog template. Where most consumer publishers default to a white canvas and a 8–12px button radius, the FT holds onto the pink paper and the 2–4px corner — that newsprint inheritance is the design.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://www.ft.com"
      title: "Financial Times — official site"
      description: "The newspaper itself — read the homepage to see the salmon canvas and claret kicker in motion."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
  questions:
    - id: "primary-color"
      title: "What is the Financial Times' primary brand color?"
      answer: "FT Claret (#990f3d) is the signature accent, but it doesn't behave like a brand button color. It appears in 50 of 4,000+ color occurrences on the homepage, scoped to section kickers ('TOP STORIES', 'MARKETS REPORT'), the wordmark, and the rare emphasis tag — never as a button fill, card background, or hero wash. The true brand voltage is the page itself: the pink-salmon canvas #fff1e5 that the paper has used since 1893 carries 37 background occurrences and is the load-bearing brand decision. The Subscribe CTA fills with #262a33 near-black, not claret. Teal #0d7680 (282 occurrences) paints link underlines and the Subscribe wordmark — it is the workhorse chromatic accent, while claret is the editorial mark."
    - id: "typography"
      title: "What typography does the FT use, and what should I substitute?"
      answer: "Two families do the work. Financier Display VF (a custom variable-axis serif licensed for the FT, fallback serif/Times) handles all display and h1 work at 20–32px across the variable-weight axis (242 / 397 / 400 / 700) — section heads, hero declarations, and editorial pull-quotes. Metric 2 VF (a custom Klim grotesque variable cut, fallback sans-serif) carries every other piece of text on the page at 12–16px across weights 400/600/700 — nav links, story decks, table rows, byline metadata, the Subscribe button. If the FT cuts are unavailable, substitute Tiempos Headline or PT Serif for Financier Display and Inter or Söhne for Metric 2. The 32px h1 sits at lineHeight 32px (a 1:1 ratio) — keep the tight leading in any substitute."
    - id: "salmon-canvas"
      title: "Why is the canvas pink?"
      answer: "The salmon (#fff1e5) is a 1893 inheritance from the paper edition — the FT switched to a pinker paper stock that year to differentiate from rival broadsheets at the newsstand, and the colour has carried through every subsequent redesign. On screen, the salmon serves three purposes: it lowers the contrast ratio between ink and ground from pure black-on-white (21:1) to a softer 12:1 that mimics newsprint reading; it provides instant brand recognition without a logo wash; and it changes the meaning of every other colour in the system. Claret and teal both read warmer against salmon than they would against pure white. Replace the salmon with white and the page stops looking like the FT — it starts looking like every other business publisher in 2026."
    - id: "shape-language"
      title: "Why is the Subscribe pill cornered at 2px?"
      answer: "The Subscribe CTA is a 28px-tall #262a33 near-black rectangle at exactly 2px border-radius — barely a softening at all. The choice is deliberate broadsheet inheritance: print layouts use right-angled column rules and 90-degree caption boxes, and the 2px chamfer is the digital equivalent of a paper edge. Story cards round at 4px, image thumbnails round at 3px, and only avatar dots and the live indicator use 50% for circles. Where most consumer publishers default to 8–12px button radii (read: SaaS-flavour conversion CTAs), the FT refuses to soften past 2–4px. Round the Subscribe pill to 8px and the page stops looking like a newspaper."
    - id: "markets-colors"
      title: "Why does the FT have green and red colors if they're scoped so narrowly?"
      answer: "The markets palette is chromatic semantic, not chromatic decoration. Markets-up green (#96cc28) is bound to ticker percentage gains and the rare success-state badge; markets-down red (#cc0000) is bound to ticker percentage losses and form-validation error states — never used as a hero background, CTA fill, or generic 'danger' colour. Both colours appear in fewer than 5 of the page's 4,000 colour occurrences each, which is exactly how the FT wants it: green and red are reserved for numeric chrome in the markets ticker, freeing claret and teal to carry the rest of the page without competing for the eye. The pink-salmon ground intensifies both signal colours — green reads sharper on salmon than on white."
    - id: "use-in-project"
      title: "Can I use this DESIGN.md to build a financial-news React app?"
      answer: "Yes. Feed the file to Claude, Cursor, or any agent that reads structured design tokens and it reproduces the FT's voice — pink salmon canvas, near-black ink, Financier Display VF serif display, Metric 2 VF UI workhorse, claret kicker, teal link underline, and the 2px-cornered Subscribe pill. The 17 component entries cover the dark top nav strip, the Subscribe pill, story cards with claret kickers, hero panels with white-on-navy treatments, markets ticker rows, and the standard text input. Article-detail body typography, MyFT personalisation chrome, video player controls, and the FT Weekend supplement layout are out of scope — they live on different surfaces with their own type ladders."

colors:
  canvas: "#fff1e5"
  surface-cream: "#f2dfce"
  surface-peach: "#fcd0b1"
  surface-mid: "#ccc1b7"
  ink: "#33302e"
  ink-secondary: "#4d4845"
  ink-tertiary: "#66605c"
  ink-muted: "#a8aaad"
  ink-on-dark: "#ffffff"
  on-canvas-black: "#000000"
  surface-navy: "#262a33"
  surface-charcoal: "#51555c"
  claret: "#990f3d"
  teal: "#0d7680"
  teal-dark: "#0a5e66"
  markets-up: "#96cc28"
  markets-down: "#cc0000"
  pink-soft: "#ff767c"
  violet-promo: "#593380"

typography:
  display-xl:
    fontFamily: "FinancierDisplayWeb, financier display VF, Tiempos Headline, Georgia, serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: "1.0"
    letterSpacing: "0"
  display-lg:
    fontFamily: "financier display VF, FinancierDisplayWeb, Tiempos Headline, Georgia, serif"
    fontSize: 28px
    fontWeight: 397
    lineHeight: "1.14"
    letterSpacing: "0"
  display-md:
    fontFamily: "financier display VF, FinancierDisplayWeb, Tiempos Headline, Georgia, serif"
    fontSize: 24px
    fontWeight: 397
    lineHeight: "1.17"
    letterSpacing: "0"
  display-sm:
    fontFamily: "financier display VF, FinancierDisplayWeb, Tiempos Headline, Georgia, serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: "1.2"
    letterSpacing: "0"
  heading-md:
    fontFamily: "metric 2 VF, Söhne, Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: "1.5"
    letterSpacing: "0"
  heading-sm:
    fontFamily: "metric 2 VF, Söhne, Inter, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: "1.43"
    letterSpacing: "0"
  body-lg:
    fontFamily: "metric 2 VF, Söhne, Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "0"
  body-md:
    fontFamily: "metric 2 VF, Söhne, Inter, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: "1.43"
    letterSpacing: "0"
  body-sm:
    fontFamily: "metric 2 VF, Söhne, Inter, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: "1.33"
    letterSpacing: "0"
  kicker-uppercase:
    fontFamily: "metric 2 VF, Söhne, Inter, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: "1.67"
    letterSpacing: "0"
  badge-tracked:
    fontFamily: "metric 2 VF, Söhne, Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: "1.5"
    letterSpacing: "2px"
  button-md:
    fontFamily: "metric 2 VF, Söhne, Inter, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: "1.33"
    letterSpacing: "0"
  timestamp:
    fontFamily: "metric 2 VF, Söhne, Inter, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: "1.33"
    letterSpacing: "0"

rounded:
  none: "0px"
  xxs: "2px"
  xs: "3px"
  sm: "4px"
  full: "9999px"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "10px"
  md: "12px"
  base: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"

components:
  page-canvas:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "0px 16px"
  button-primary:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xxs}"
    padding: "0px 8px"
    height: 28px
    border: "0"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-on-dark}"
    rounded: "{rounded.xxs}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.xxs}"
    padding: "0px 8px"
    height: 28px
    border: "1px solid {colors.ink}"
  subscribe-link:
    backgroundColor: transparent
    textColor: "{colors.teal}"
    typography: "{typography.button-md}"
    padding: "0px"
  top-nav:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.body-md}"
    height: 40px
    padding: "8px 16px"
  top-nav-wordmark:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-sm}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.teal-dark}"
    typography: "{typography.kicker-uppercase}"
    padding: "8px 0px"
    height: 36px
  story-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.sm}"
    padding: "12px 16px 16px"
    border: "0"
  story-card-kicker:
    backgroundColor: transparent
    textColor: "{colors.claret}"
    typography: "{typography.kicker-uppercase}"
  story-card-headline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
  story-card-deck:
    backgroundColor: transparent
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-md}"
  hero-panel:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.sm}"
    padding: "16px"
  hero-panel-heading:
    backgroundColor: transparent
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.display-xl}"
  promo-rail-cream:
    backgroundColor: "{colors.surface-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.sm}"
    padding: "16px"
  promo-rail-peach:
    backgroundColor: "{colors.surface-peach}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.sm}"
    padding: "16px"
  markets-row-up:
    backgroundColor: transparent
    textColor: "{colors.markets-up}"
    typography: "{typography.body-md}"
  markets-row-down:
    backgroundColor: transparent
    textColor: "{colors.markets-down}"
    typography: "{typography.body-md}"
  section-label:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.badge-tracked}"
  text-input:
    backgroundColor: "{colors.ink-on-dark}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
    border: "1px solid {colors.ink-muted}"
  text-input-focus:
    backgroundColor: "{colors.ink-on-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    border: "1px solid {colors.ink}"
  timestamp:
    backgroundColor: transparent
    textColor: "{colors.ink-tertiary}"
    typography: "{typography.timestamp}"
  avatar-dot:
    backgroundColor: "{colors.surface-mid}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 32px
---

## Overview

The Financial Times homepage reads as a paper edition that learned to ship pixels. The canvas is the pink-salmon (`{colors.canvas}` — #fff1e5) that the FT switched its paper stock to in 1893; the ink is near-black (`{colors.ink}` — #33302e) at a touch under pure black to soften the contrast against salmon to a newsprint-reading 12:1; and the only filled CTA on the page is a 28px-tall navy (`{colors.surface-navy}` — #262a33) "Subscribe" pill at `{rounded.xxs}` 2px radius — the smallest meaningful corner softening, barely there. FT Claret (`{colors.claret}` — #990f3d) appears in 50 of the page's 4,000-plus color occurrences, scoped to section kickers ("TOP STORIES", "MARKETS REPORT") and the wordmark, never as a button fill or hero wash.

**Salmon-as-brand**: where every other publisher in 2026 starts from a white canvas and adds chromatic decoration, the FT inherits its colour from the paper edition and lets the ground itself carry brand recognition. #fff1e5 is a 1893 print-stock inheritance, and the page packs 37 background occurrences of it across hero panels, story cards, promo rails, and the body. The salmon also reframes every other colour in the system — claret reads warmer here than on white, teal reads cooler, and green-on-salmon in the markets ticker reads sharper than green-on-white would. Strip the canvas back to white and the page stops looking like the FT; it starts looking like Reuters or Bloomberg.

**Serif display, sans UI** is the typographic division. Financier Display VF (a custom variable-axis serif licensed for the FT, fallback Tiempos Headline / Georgia) handles all display tiers — h1 at 32px / weight 400, section heads at 24–28px across the variable-weight axis 397/400. Metric 2 VF (a custom Klim variable-axis grotesque, fallback Söhne / Inter) carries every other piece of type at 12–16px across weights 400/600/700. The Subscribe button uses 12px / 700 Metric 2; the markets ticker uses 14px / 400 Metric 2; the "SUBSCRIBED" tracked badge uses 16px / 700 Metric 2 with 2px letter-spacing. Headlines stay in serif, chrome stays in sans — a print typographer's discipline imported intact.

The shape language is **broadsheet-cornered**. The Subscribe pill rounds at 2px (`{rounded.xxs}`), story cards round at 4px (`{rounded.sm}`), inline thumbnails round at 3px (`{rounded.xs}`), and the only fully-rounded shape on the page is the 50% avatar dot. Where most consumer publishers default to 8–12px button radii (read: SaaS-flavour conversion CTAs), the FT refuses to soften past 4px. That is the load-bearing shape decision — round any of these tokens up to 8px and the page reads as a 2010s blog template rather than a paper edition.

**Key Characteristics:**
- Newsprint salmon canvas: `{colors.canvas}` (#fff1e5) carries the page in 37 background occurrences — a 1893 print-stock inheritance that no other major publisher owns.
- FT Claret as kicker-only: `{colors.claret}` (#990f3d) appears in 50 of 4,000-plus color slots, scoped to section labels and the wordmark, never as a CTA fill or hero wash.
- Serif display, sans UI: Financier Display VF 20–32px for h1 and section heads, Metric 2 VF 12–16px for every nav link, dek, byline, and button.
- Single teal accent: `{colors.teal}` (#0d7680) paints 282 link underlines and the Subscribe wordmark — the workhorse chromatic accent, while claret is the editorial mark.
- 2–4px corner discipline: the Subscribe pill rounds at `{rounded.xxs}` 2px, story cards at `{rounded.sm}` 4px, thumbnails at `{rounded.xs}` 3px. Nothing on the page rounds past 4px except the 50% avatar dot.
- Navy hero panels on salmon: `{colors.surface-navy}` (#262a33) panels with 32px Financier Display white headlines sit inside the salmon body, inverting the page locally rather than tinting it.
- Cream and peach promo rails: `{colors.surface-cream}` (#f2dfce) and `{colors.surface-peach}` (#fcd0b1) — two paler salmon variants — back subscription and editorial promo tiles, keeping the chromatic family intact.
- Variable-axis weight micro-tuning: Financier Display sits at fontWeight 397 for body display, 400 for h1, 242 for the lightest variant — sub-integer weights only a variable typeface can address.

## Colors

### Brand Accent
- **FT Claret** (`{colors.claret}` — #990f3d) — frequency 50. Used as text (25), bg (0), border (25). The editorial mark — scoped to section kickers ("TOP STORIES", "MARKETS REPORT"), the FT wordmark, and rare emphasis tags. Never paints a button or a background. The newspaper's 138-year-old signature accent.
- **FT Teal** (`{colors.teal}` — #0d7680) — frequency 564. Used as text (282), border (282). The workhorse chromatic accent — paints link underlines, the Subscribe wordmark, and inline anchor text. This is the colour the eye lands on when scanning the page, even though claret carries the brand weight.
- **Teal Dark** (`{colors.teal-dark}` — #0a5e66) — frequency 2. Used as text (1), border (1). The deeper teal variant for the nav-link active state and hover transitions.

### Surface & Canvas
- **Salmon Canvas** (`{colors.canvas}` — #fff1e5) — frequency 37. Used as bg (17), gradient (20). The 1893 print-stock inheritance and the dominant page background. Note the gradient count — the salmon appears in 20 subtle vertical gradients that ease the canvas into the white surface beneath images and modals.
- **Surface Cream** (`{colors.surface-cream}` — #f2dfce) — frequency 11. Used as bg (11). The paler salmon variant that backs editorial promo rails ("The Big Read", "Best Of"). Merged from three near-duplicate cream tints via OKLCH delta-E into a single perceptual token.
- **Surface Peach** (`{colors.surface-peach}` — #fcd0b1) — frequency 16. Used as bg (8), border (8). The strongest salmon variant — backs subscription promotional tiles and the rare attention-grabbing inline rail.
- **Surface Mid** (`{colors.surface-mid}` — #ccc1b7) — frequency 6. Used as border (6). The cool taupe used as the divider colour between salmon promo rails — a tone that reads neutral against every salmon variant.
- **Surface Navy** (`{colors.surface-navy}` — #262a33) — frequency 11. Used as text (1), bg (9), border (1). The hero-panel background and the Subscribe pill fill. Not pure black — a deep cool navy that reads as broadsheet masthead rather than terminal chrome.
- **Surface Charcoal** (`{colors.surface-charcoal}` — #51555c) — frequency 1. Used as border (1). A single rule line — kept for completeness rather than load-bearing use.

### Ink Ladder
- **Ink** (`{colors.ink}` — #33302e) — frequency 2195. Used as text (1124), border (1071). The page's highest-frequency colour. A warm near-black at 12:1 contrast against the salmon canvas, where pure black would sit at 17:1 and feel too sharp. Carries every headline, dek, body paragraph, and the structural border ruling.
- **Ink Secondary** (`{colors.ink-secondary}` — #4d4845) — frequency 8. Used as text (3), border (3), shadow (2). The deeper mid-grey for emphasis copy that still wants to sit slightly cooler than ink.
- **Ink Tertiary** (`{colors.ink-tertiary}` — #66605c) — frequency 44. Used as text (22), border (22). The byline, timestamp, and photo-credit colour. Warmer than a generic grey because it inherits the salmon-undertone palette.
- **Ink Muted** (`{colors.ink-muted}` — #a8aaad) — frequency 142. Used as text (71), border (71). The cool grey used for disabled-state copy, placeholder text, and the divider lines between salmon promo rails.
- **Ink on Dark** (`{colors.ink-on-dark}` — #ffffff) — frequency 252. Used as text (119), bg (18), border (115). Reserved for type sitting on the navy hero panel and the Subscribe pill. The FT does not use pure white as a canvas — only as ink on dark surfaces. The clustered token includes a faint warm-white that collapses perceptually into the same role.
- **On-Canvas Black** (`{colors.on-canvas-black}` — #000000) — frequency 336. Used as text (163), bg (15), border (158). The hard black used inside form inputs and modal chrome, where the salmon canvas does not show through. Distinct from `{colors.ink}` (#33302e) — black is for boxed surfaces, ink is for open canvas.

### Markets Semantics
- **Markets Up** (`{colors.markets-up}` — #96cc28) — frequency 4. Used as text (2), border (2). Bound to ticker percentage gains and the rare success badge. A lime green rather than a Bloomberg-style forest green — it has to read sharp against the warm salmon canvas, and forest green would dull.
- **Markets Down** (`{colors.markets-down}` — #cc0000) — frequency 20. Used as text (10), border (10). Bound to ticker percentage losses and form-validation error states. Never used as a hero background or generic "danger" colour.
- **Pink Soft** (`{colors.pink-soft}` — #ff767c) — frequency 8. Used as text (4), border (4). A coral that sits between salmon and markets-down — used for inline destructive-action emphasis and the rare attention chip.

### Promotional Tints
- **Violet Promo** (`{colors.violet-promo}` — #593380) — frequency 4. Used as bg (4). The single non-salmon promotional accent — backs the dark partner-content callout tiles. Appears only when a sponsored editorial rail needs to break the salmon family without inverting to navy.

### Gradient System
The FT uses **no decorative gradients**. The 20 gradient occurrences on `{colors.canvas}` are subtle salmon-to-white fades at the bottom edge of full-bleed image rails — chrome polish, not brand decoration. There are no mesh gradients, no chromatic washes, no glow effects. Colour is applied in flat printed blocks, the way a copy desk would lay it out. The discipline reads as the inverse of Stripe's mesh-gradient atmosphere — the FT trusts the salmon ground to carry colour, and refuses to dilute it.

## Typography

### Font Family
Two families do the work. **Financier Display VF** (a custom variable-axis serif licensed for the Financial Times, fallback Tiempos Headline / Georgia / serif) handles every display tier at 20–32px across the variable-weight axis — h1 at fontWeight 400, section heads at 397, and the lightest editorial variants at 242. The variable axis is exposed: the page exploits sub-integer weights (397, 242) only a variable typeface can address. **Metric 2 VF** (a custom Klim variable-axis grotesque, fallback Söhne / Inter / Helvetica) carries every other piece of type at 12–16px across weights 400/600/700 — nav links, story decks, table rows, byline metadata, buttons, the "SUBSCRIBED" tracked badge. The split is rigid: serif for editorial display, sans for UI chrome and information.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 32px | 400 | 1.0 | 0 | Financier Display h1 — hero declarations on navy panel |
| `{typography.display-lg}` | 28px | 397 | 1.14 | 0 | Financier Display section heads in editorial rails |
| `{typography.display-md}` | 24px | 397 | 1.17 | 0 | Financier Display story-card headlines |
| `{typography.display-sm}` | 20px | 400 | 1.2 | 0 | Financier Display inline pull-quotes and standfirst |
| `{typography.heading-md}` | 16px | 600 | 1.5 | 0 | Metric 2 section labels and dense list titles |
| `{typography.heading-sm}` | 14px | 600 | 1.43 | 0 | Metric 2 small-card headlines |
| `{typography.body-lg}` | 16px | 400 | 1.5 | 0 | Metric 2 workhorse body and standfirst copy |
| `{typography.body-md}` | 14px | 400 | 1.43 | 0 | Metric 2 byline, timestamp, table-cell text |
| `{typography.body-sm}` | 12px | 400 | 1.33 | 0 | Metric 2 captions and photo credits |
| `{typography.kicker-uppercase}` | 12px | 600 | 1.67 | 0 | Metric 2 UPPERCASE section kicker ("MARKETS REPORT") |
| `{typography.badge-tracked}` | 16px | 700 | 1.5 | 2px | Metric 2 "SUBSCRIBED" tracked badge — the only 2px tracking on the page |
| `{typography.button-md}` | 12px | 700 | 1.33 | 0 | Metric 2 Subscribe and CTA button text |
| `{typography.timestamp}` | 12px | 400 | 1.33 | 0 | Metric 2 article timestamps on `<time>` element |

### Principles
**Serif for editorial, sans for chrome.** The split is absolute. Financier Display VF carries every h1, section head, and editorial headline; Metric 2 VF carries every nav link, byline, button, and table cell. There is no overlap — a body paragraph never uses Financier, and a hero headline never uses Metric. The discipline imports a print typographer's two-typeface rulebook intact. **Variable-axis sub-integer weights** show up on the page: Financier sits at weight 397 for section heads and 242 for the lightest editorial pull-quote, weights that no static font carries. The choice signals editorial precision — the FT tunes its serif to the column rather than the system default. **2px letter-spacing is the only tracking move on the page**, scoped to the 16px UPPERCASE "SUBSCRIBED" badge. Everything else sits at zero tracking.

### Note on Font Substitutes
Financier Display VF and Metric 2 VF are licensed FT-only cuts. **Tiempos Headline** (Klim Type Foundry, also used by the New York Times and Medium) is the closest commercial substitute for Financier — it preserves the contrast modulation and serif terminals; **PT Serif** at weight 400 is the open-source substitute. For Metric 2, **Söhne** (Klim) preserves the variable-axis behaviour cleanly; **Inter** at weight 400/600/700 substitutes acceptably at 12–16px but loses the slight grotesque-letter aperture that gives Metric 2 its broadsheet warmth. For the 32px h1 at lineHeight 32px (a 1:1 ratio), keep the tight leading in any substitute — softening it to 1.2 turns the hero declaration into a magazine deck.

## Layout

### Spacing System
- **Base unit:** 4px with an 8/12/16/24px multiples ladder.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 10px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.2xl}` 32px.
- **Card internal padding:** 12–16px on story cards; navy hero panel 16px interior.
- **Inline spacing:** `12px` is the most-used spacing value on the page at 120 occurrences — it controls inter-card gaps, navigation link separation, and the gutter between Financier headline and Metric byline inside story cards.
- **Container side padding:** `0px 16px` appears 80 times — the standard inner-page horizontal padding.

### Grid & Container
- **Max content width:** approximately 1240px centered.
- **Column patterns:** a 12-column underlying grid (CSS variable `--o3-grid-columns: 12`) resolves into a 4-column upper feed (4 top stories above the fold), a 3-column hero band with a navy panel + image + sidebar, and a 4-column lower feed of smaller cards. Below that, a 2-column dense markets/Opinion rail.
- **Container padding:** 16px outer edges with 24px gutters between major sections.
- **Gutters:** 12–16px between cards in a row, 8px inside markets table rows.

### Whitespace Philosophy
The FT treats whitespace like a newspaper treats column gutters — calibrated separators, not dramatic resets. The salmon canvas itself is the negative space; pulling cards apart further would waste the colour that carries the brand. Cards sit edge-to-edge inside the column grid, separated by 12px gutters and the hairline ruling that the ink colour (`{colors.ink}` — #33302e) carries at 1071 border occurrences. Where Stripe and Apple use air as the dominant layout tool, the FT uses the salmon ground itself — the colour gives the page rhythm without requiring negative space.

### Border Radius Scale
- **`{rounded.none}` 0px:** image full-bleeds and the navy nav strip — pure rectangles.
- **`{rounded.xxs}` 2px:** the primary CTA Subscribe pill (16 occurrences — the structural workhorse alongside 4px).
- **`{rounded.xs}` 3px:** inline thumbnails and small avatar tiles (6 occurrences).
- **`{rounded.sm}` 4px:** story cards, hero panel, promo rails (16 occurrences — the most-used radius value, tied with 2px).
- **`{rounded.full}` 9999px:** avatar dots and the live indicator (5 occurrences using 50%).

The 2px and 4px radii are the structural defaults because the FT refuses to soften past 4px. Cards round at 4px, buttons round at 2px, indicators round fully at 50% — nothing in between. The 6–12px middle range that most consumer publishers default to is structurally absent.

## Elevation

The FT's depth philosophy is **hairline-and-canvas elevation**. The page sits on the salmon canvas; cards differentiate by 1px borders in `{colors.ink}` (1071 border occurrences) or by sitting on a paler salmon tint (`{colors.surface-cream}` / `{colors.surface-peach}`); the navy hero panel elevates by inversion rather than shadow. There are 2 shadow occurrences in the extracted data — both on the deep ink-secondary colour, used for a single rare nav-popover lift.

| Level | Treatment | Use |
|---|---|---|
| 0 | No border, no shadow | Default canvas text on `{colors.canvas}` salmon |
| 1 | Paler salmon background tint | Promo rails using `{colors.surface-cream}` or `{colors.surface-peach}` |
| 2 | 1px `{colors.ink}` ruled border | Story cards, table dividers, section separators |
| 3 | Inverted navy surface | The hero panel `{colors.surface-navy}` — elevation through contrast against salmon |
| 4 | Dark nav strip inversion | The top navigation bar in `{colors.surface-navy}` |
| 5 | Subtle drop shadow on popover | The 2-occurrence shadow on the nav-link dropdown — the only true elevation effect on the page |

When something needs to stand out, it doesn't get a shadow — it gets a tint shift inside the salmon family, a 1px ink border, or, for the strongest move, an inversion to navy. **No glows, no atmospheric blurs, no mesh gradients.** Hierarchy is carried by colour tint and inversion, not by depth.

## Components

### Buttons

**`button-primary`** — `{colors.surface-navy}` (#262a33) fill, white text, Metric 2 VF 12px / 700, `{rounded.xxs}` 2px radius, 0×8px padding, 28px height, no border. The Subscribe pill in the top-right corner of the nav. The 2px radius is the load-bearing shape decision — barely a softening at all, refusing the rounded-button convention every consumer publisher in 2026 follows. Hover state deepens the fill to `{colors.ink}` (#33302e).

**`button-secondary`** — Salmon canvas fill, near-black text, Metric 2 VF 12px / 700, `{rounded.xxs}` 2px radius, 28px height, 1px `{colors.ink}` border. Used for ghost actions inside editorial promo tiles. Hover swaps the fill to the surface-cream tint.

**`subscribe-link`** — Transparent fill, `{colors.teal}` (#0d7680) text, Metric 2 VF 12px / 700, no padding. The inline "Subscribe" anchor in dense list views — the teal colour is the only place the workhorse accent paints type at the CTA semantic.

### Navigation

**`top-nav`** — `{colors.surface-navy}` (#262a33) strip at 40px height with the wordmark left-aligned, primary nav links centered (Metric 2 VF 12px / 600 UPPERCASE in `{colors.teal-dark}`), and the Subscribe pill pinned right. 8×16px interior padding.

**`top-nav-wordmark`** — The FT wordmark sitting at 20px Financier Display white on the navy strip. Treated as a display-tier label rather than a hero element — the mark trusts the navy surface against the salmon canvas to carry its weight.

**`nav-link`** — Transparent fill, `{colors.teal-dark}` (#0a5e66) text on the navy nav, Metric 2 VF 12px / 600 UPPERCASE. 8×0px vertical padding, 36px height. Hover transitions to `{colors.teal}` (#0d7680).

### Cards & Containers

**`story-card`** — Salmon fill, no border by default, `{rounded.sm}` 4px radius, 12×16×16px interior padding. Headline in Financier Display 24px / 397, kicker in Metric 2 UPPERCASE 12px / 600 / claret. Hover: no lift, no scale — the headline colour transitions to `{colors.teal}` (#0d7680) over 150ms.

**`story-card-kicker`** — Metric 2 VF 12px / 600 UPPERCASE in `{colors.claret}` (#990f3d). Section labels like "MARKETS REPORT", "OPINION", "BIG READ". The only place claret paints type at the editorial level — sits 4px above the headline.

**`story-card-headline`** — `{typography.display-md}` 24px / 397 Financier Display in `{colors.ink}` on salmon. Maximum three lines before truncating with ellipsis. Variable-axis weight 397 is the FT's chosen mid-weight — neither 400 nor 600.

**`story-card-deck`** — `{typography.body-md}` 14px / 400 Metric 2 VF in `{colors.ink-secondary}`. The deck never sits in Financier — the serif stays editorial-only.

### Hero Treatments

**`hero-panel`** — `{colors.surface-navy}` (#262a33) fill, white text, `{typography.display-xl}` 32px / 400 Financier Display headline at lineHeight 32px (1:1 ratio), `{rounded.sm}` 4px radius, 16px interior padding. The "Impartial reporting, expert analysis, informed opinions" hero declaration. Sits as a single navy block inside the salmon canvas — local inversion rather than global theme.

**`hero-panel-heading`** — The h1 at 32px Financier Display weight 400 white-on-navy with tight 1:1 leading. The tight leading is critical — softening it to 1.2 turns the declaration into a magazine deck.

### Promotional Rails

**`promo-rail-cream`** — `{colors.surface-cream}` (#f2dfce) fill, near-black text, `{typography.body-lg}` 16px / 400 Metric 2, `{rounded.sm}` 4px radius, 16px padding. Backs the editorial promo tiles ("The Big Read", "Best Of FT Weekend") — the paler salmon variant keeps the chromatic family intact.

**`promo-rail-peach`** — `{colors.surface-peach}` (#fcd0b1) fill, near-black text, `{rounded.sm}` 4px radius. The strongest salmon variant — backs subscription promotional tiles where the rail needs more colour intensity than cream provides.

### Markets Chrome

**`markets-row-up`** — Up-tick rows in the markets ticker. Text in `{colors.markets-up}` (#96cc28), Metric 2 VF 14px / 400. A lime green chosen specifically to read sharp against warm salmon — Bloomberg-forest green would dull on this canvas.

**`markets-row-down`** — Down-tick rows. Text in `{colors.markets-down}` (#cc0000), Metric 2 VF 14px / 400. Bound to numeric percentage losses and form-validation errors — never used as a generic "danger" colour.

### Section Labels

**`section-label`** — Metric 2 VF 16px / 700 UPPERCASE with 2px letter-spacing in `{colors.ink}`. The "TOP STORIES", "OPINION", "MARKETS REPORT" rail labels. The only typography token on the page that uses positive letter-spacing — 2px tracking that separates UPPERCASE characters at the 16px size cleanly.

### Forms

**`text-input`** — White fill, near-black text, `{rounded.xs}` 3px radius, 8×12px padding, 1px `{colors.ink-muted}` (#a8aaad) border. Note the white fill — the FT does not use salmon as a form-input background. On focus, border transitions to `{colors.ink}` (#33302e) — never to a blue ring.

### Editorial Bits

**`timestamp`** — Metric 2 VF 12px / 400 in `{colors.ink-tertiary}` (#66605c). Article timestamps on `<time>` elements — never coloured, never bolded.

**`avatar-dot`** — `{colors.surface-mid}` (#ccc1b7) fill, `{rounded.full}` 50% radius, 32px height. The single fully-rounded shape on the page. Used for byline portraits and live-indicator dots.

## Do's and Don'ts

### Do
- **Hold the salmon canvas at `{colors.canvas}` (#fff1e5).** The colour is the brand — the page does not work without it. Promotional rails shift to `{colors.surface-cream}` or `{colors.surface-peach}` but never leave the salmon family.
- **Use FT Claret (`{colors.claret}` #990f3d) as a kicker-only accent.** It appears in 50 occurrences across the page, all as section labels or the wordmark — never as a CTA fill, hero wash, or hover state.
- **Round the Subscribe CTA at `{rounded.xxs}` 2px.** Barely a softening — the broadsheet refusal to look like a SaaS conversion button. The 4px story-card radius is the upper bound for any chrome on the page.
- **Use Financier Display VF for h1, h2, and editorial headlines only.** Sans-serif Metric 2 VF carries every other piece of text. Never let a serif sit on a button or a body paragraph.
- **Bind markets colours to numeric chrome.** `{colors.markets-up}` (#96cc28) lime green to ticker gains, `{colors.markets-down}` (#cc0000) hard red to ticker losses and form errors. Never use either as a hero background or generic toast colour.
- **Use the `{colors.teal}` (#0d7680) as the workhorse link colour.** It appears 282 times on the page as text and underline — the FT's chromatic accent, distinct from the editorial claret.

### Don't
- **Don't substitute white for `{colors.canvas}` (#fff1e5).** Replace the salmon with white and the page stops looking like the FT — it starts looking like Reuters or Bloomberg, and the carefully-tuned 12:1 contrast against `{colors.ink}` (#33302e) flips back to a harsh 17:1.
- **Don't paint FT Claret as a button fill or background wash.** The hex appears 50 times across the page, all as text. A claret-filled "Subscribe" button reads as a generic conversion CTA and breaks the editorial-kicker discipline that lets the colour carry brand meaning.
- **Don't round the Subscribe pill past `{rounded.xxs}` 2px.** The CTA is 28px tall at 2px radius for a reason — soften it to 8px and the page reads as a 2010s blog template rather than a paper edition. The 2px chamfer is the load-bearing shape decision.
- **Don't use Financier Display VF for body copy or buttons.** The serif is editorial-display-only — h1, h2, hero declarations, pull-quotes. A Financier 14px byline turns the page into a magazine spread and breaks the broadsheet sans-UI rule.
- **Don't use Metric 2 VF at weight 700 across body copy.** Weight 700 is reserved for the Subscribe button text and the 16px UPPERCASE "SUBSCRIBED" tracked badge. Body copy stays at 400; section labels stay at 600. Bolding into 700 elsewhere reads as marketing emphasis rather than information.
- **Don't substitute Inter for Financier Display at the h1 tier.** Inter is a grotesque — it has no serifs and no contrast modulation. The 32px Financier h1 carries the FT's editorial weight through serif terminals and stroke contrast that Inter cannot reproduce. Use Tiempos Headline or PT Serif instead.
- **Don't reach for drop shadows when separating cards.** The page uses 1071 instances of `{colors.ink}` 1px hairline borders and the salmon-canvas tint shift instead. A box-shadow on a story card reads as Material-flavoured UI and pulls the layout out of the broadsheet tradition.
- **Don't let `{colors.surface-peach}` (#fcd0b1) leak onto editorial body backgrounds.** The strongest salmon variant is scoped to subscription promotional tiles only — using it behind editorial copy unbalances the chromatic ladder cream → peach → canvas and makes the page feel like an ad surface.

## Known Gaps

- **Article-detail body typography:** the long-form reading view past the homepage uses a wider Financier Display body cut not captured here. The homepage covers roughly 80% of the surface area readers first encounter.
- **MyFT personalisation chrome:** the authenticated home rail with reordered topic preferences ships its own variant of the markets ticker and kicker treatment — not extractable from the public homepage.
- **Video and Live Markets chrome:** the FT ships custom video and live-broadcast players whose token vocabulary is not in scope for this spec.
- **FT Weekend supplement layout:** the magazine-style weekend issue uses a wider type ladder with Financier at 48–64px display sizes — not part of the homepage extraction.
- **Animation timing:** the FT's nav-popover lift, image-carousel transitions, and the live ticker scroll use proprietary timing curves that the extraction does not capture.
- **Dark mode for the body canvas:** the homepage is salmon-light-only apart from the navy nav and hero panel inversion. A full dark-canvas inversion exists for app-mode reading surfaces but is not part of this spec.
- **Full form validation error states:** the error border (`{colors.markets-down}` #cc0000) is documented, but helper-text styling, inline validation messaging, and the multi-step subscription form are not captured.
