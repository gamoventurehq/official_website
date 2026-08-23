---
version: alpha
name: "Inngest"
website: "https://www.inngest.com"
description: "Inngest’s design system layers a #1c1917 canvas with #000000 ink, highlights actions in #cbb26a primary accent, relies on the CircularXX typeface family for all typographic scales, and encodes its signature durable‑function workflow model into reusable UI primitives that replace queues, state management, and scheduling across the product experience."

seo:
  title: "Inngest Design System for React — #1c1917, CircularXX, 15 components"
  metaDescription: "Inngest’s design system uses a deep #1c1917 canvas, #000000 ink, #cbb26a primary accent, and CircularXX typeface across 15 reusable components for AI‑backed workflow UIs."
  highlights:
    - "A dark #1c1917 canvas anchors the visual hierarchy — it provides a high‑contrast backdrop for white and light‑gray text, ensuring readability across dense documentation pages."
    - "Primary accent #cbb26a appears on call‑to‑action elements and key icons — it signals forward movement and aligns with the brand’s focus on durable functions."
    - "Hairline border #e5e7eb is used for subtle separation — it creates a sense of elevation without relying on heavy shadows, keeping the interface lightweight."
    - "Rounded token \"full\" (9999px) rounds only specific pill components — this selective use preserves a crisp rectangular language for code‑oriented UI elements."
  tags:
    - "Design & Creative Tools"
  lastUpdated: "2026-05-14"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    The landing experience opens on a near‑black canvas (#1c1917) paired with pure #000000 ink for body copy, while the brand’s signature accent #cbb26a punctuates primary buttons and interactive highlights. CircularXX serves as the system’s core typeface, delivering consistent rhythm from code snippets to headings, and the underlying workflow model—durable functions that replace queues, state management, and scheduling—manifests as reusable UI primitives that developers can drop into any page.

    Inside: the token set comprises 20 color tokens, 10 typography tokens, 5 rounded tokens, 7 spacing tokens, and 15 components that cover layout, navigation, forms, feedback, and data display. The palette follows a structural‑first hierarchy, with #1c1917 as canvas, #000000 as ink, and #e5e7eb as the hairline border. The design aligns with the Google Labs design‑system specification for CSS variable naming and token granularity, ensuring cross‑tool compatibility.

    Designers and developers can feed the JSON into Claude, Cursor, or Copilot prompts, or paste the token definitions directly into a Tailwind config to generate utility classes. Because the system translates backend workflow concepts into visual language, studying Inngest reveals how operational semantics can be expressed through disciplined UI primitives.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://www.inngest.com"
      title: "Inngest — official site"
      description: "Inngest's public marketing site — the source of truth for the live tokens captured in this file."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
  questions:
    - id: "what-is-the-primary-brand-color-and-wher"
      title: "What is the primary brand color and where does it appear?"
      answer: "The primary brand color is #cbb26a, a warm amber hue that surfaces on the main call‑to‑action button, badge outlines, and occasional icon fills. It is defined in the color token list as the only brand‑layer background value, making it the visual anchor for interactive elements. The contrast against the dark canvas (#1c1917) meets accessibility thresholds, and the color is also referenced in component definitions such as primary-button.backgroundColor, reinforcing a consistent accent across the system."
    - id: "how-does-inngest-ensure-text-readability"
      title: "How does Inngest ensure text readability on its dark background?"
      answer: "Inngest uses #000000 as the ink token for primary body copy, which sits on the #1c1917 canvas to achieve a high contrast ratio. For lighter sections, the system switches to #f6f6f6 and #e7e5e4 for secondary text, preserving legibility while respecting the dark theme. Heading elements employ the Whyte typeface at larger sizes, but still inherit the #000000 ink token, guaranteeing uniform readability across headings, paragraphs, and code blocks."
    - id: "which-typeface-families-dominate-the-sys"
      title: "Which typeface families dominate the system and how are they organized?"
      answer: "The token set features two primary font families: CircularXX (and its mono variant CircularXXMono) for most UI text, and Whyte for large display headings. CircularXX appears in eight typographic tokens ranging from 14px body text to 16px headings, with weights from 300 to 600. Whyte is used in two display tokens at 24px and 30px, both with a light 300 weight and distinct letter‑spacing adjustments. This hierarchy separates code‑oriented text from marketing headlines while keeping the overall visual language cohesive."
    - id: "what-border-radius-values-are-provided-a"
      title: "What border‑radius values are provided and how are they applied?"
      answer: "Four radius tokens are defined: 4px (sm), 6px (md), 12px (lg), and 9999px (full). The small and medium radii are applied to form fields, cards, and modal windows to soften corners without losing a technical feel. The large radius appears on pill‑shaped badges and the primary button when a rounded variant is requested. The full radius creates fully circular avatars and loading spinners, ensuring that each component receives an appropriate curvature that matches its functional intent."
    - id: "what-spacing-strategy-does-the-system-us"
      title: "What spacing strategy does the system use to maintain vertical rhythm?"
      answer: "Inngest defines seven spacing tokens measured in pure pixel values: 0px, 8px, 12px, 16px, 24px, 32px, and 48px. These tokens are used consistently for padding, margin, and gap properties across components. For example, primary-button uses 8px vertical and 16px horizontal padding, while section headings employ 24px bottom margin to separate them from following content. By anchoring the layout to a limited set of multiples, the system creates a predictable vertical rhythm that scales cleanly across different screen sizes."

colors:
  primary: "#cbb26a"
  ink: "#000000"
  canvas: "#1c1917"
  hairline: "#e5e7eb"
  muted: "#9ca3af"
  surface-1: "#0c0a09"
  surface-2: "#292524"
  border-muted: "#44403c"
  accent-blue: "#0275b1"
  accent-green: "#159e88"
  text-light: "#f6f6f6"
  text-dark: "#adadad"
  text-mid: "#d6d3d1"
  text-warm: "#a89984"
  text-warm2: "#78716c"
  text-alert: "#ea6962"
  text-warm3: "#d8a657"
  text-success: "#89b482"
  border-strong: "#b7b7b7"
  border-accent: "#027a48"

typography:
  display-xxl:
    fontFamily: "Whyte, Inter, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, sans-serif"
    fontSize: 30px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "-0.75px"
  display-xl:
    fontFamily: "Whyte, Inter, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, sans-serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.33
  heading-lg:
    fontFamily: "CircularXX, Inter, -apple-system, \"system-ui\", \"Segoe UI\", Roboto"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.8px
  heading-md:
    fontFamily: "CircularXX, Inter, -apple-system, \"system-ui\", \"Segoe UI\", Roboto"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.71
  heading-sm:
    fontFamily: "CircularXX, Inter, -apple-system, \"system-ui\", \"Segoe UI\", Roboto"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
  body-lg:
    fontFamily: "CircularXX, Inter, -apple-system, \"system-ui\", \"Segoe UI\", Roboto"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.63
  body-md:
    fontFamily: "CircularXX, Inter, -apple-system, \"system-ui\", \"Segoe UI\", Roboto"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.71
  body-sm:
    fontFamily: "CircularXX, Inter, -apple-system, \"system-ui\", \"Segoe UI\", Roboto"
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.43
  code:
    fontFamily: "CircularXXMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.63
  caption:
    fontFamily: "CircularXX, Inter, -apple-system, \"system-ui\", \"Segoe UI\", Roboto"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43

rounded:
  none: "0px"
  sm: "4px"
  md: "6px"
  lg: "12px"
  full: "9999px"

spacing:
  zero: "0px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"

components:
  primary-button:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    borderColor: "{colors.hairline}"
    fontFamily: "{typography.heading-sm.fontFamily}"
    fontSize: "{typography.heading-sm.fontSize}"
    fontWeight: "{typography.heading-sm.fontWeight}"
    lineHeight: "{typography.heading-sm.lineHeight}"
    letterSpacing: "{typography.heading-sm.letterSpacing}"
    borderRadius: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  hero-heading:
    textColor: "{colors.text-light}"
    fontFamily: "{typography.display-xxl.fontFamily}"
    fontSize: "72px"
    fontWeight: "400"
    lineHeight: "72px"
    borderRadius: "{rounded.none}"
    padding: "0px"
  section-title:
    textColor: "{colors.text-light}"
    fontFamily: "{typography.heading-lg.fontFamily}"
    fontSize: "16px"
    fontWeight: "300"
    lineHeight: "24px"
    borderRadius: "{rounded.none}"
    padding: "0px"
  body-text:
    textColor: "{colors.text-dark}"
    fontFamily: "{typography.body-lg.fontFamily}"
    fontSize: "24px"
    fontWeight: "300"
    lineHeight: "32px"
    borderRadius: "{rounded.none}"
    padding: "0px"
  nav-link:
    textColor: "#fafafa"
    fontFamily: "{typography.body-sm.fontFamily}"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "16.8px"
    borderRadius: "{rounded.none}"
    padding: "6px"
  card:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    borderRadius: "{rounded.lg}"
    padding: "16px"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    borderRadius: "{rounded.full}"
    padding: "4px 8px"
    fontFamily: "{typography.caption.fontFamily}"
    fontSize: "14px"
  input:
    backgroundColor: "#ffffff"
    borderColor: "{colors.border-muted}"
    borderRadius: "{rounded.sm}"
    padding: "8px"
    fontFamily: "{typography.body-md.fontFamily}"
    fontSize: "14px"
  modal:
    backgroundColor: "#ffffff"
    borderColor: "{colors.hairline}"
    borderRadius: "{rounded.lg}"
    padding: "24px"
  tooltip:
    backgroundColor: "{colors.surface-2}"
    textColor: "#ffffff"
    borderRadius: "{rounded.sm}"
    padding: "8px"
  table:
    borderColor: "{colors.border-muted}"
    borderRadius: "{rounded.none}"
    padding: "0px"
  avatar:
    backgroundColor: "{colors.accent-green}"
    borderRadius: "{rounded.full}"
    size: "48px"
  footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.text-light}"
    padding: "32px"
  sidebar:
    backgroundColor: "{colors.surface-1}"
    borderColor: "{colors.hairline}"
    borderRadius: "{rounded.none}"
    padding: "16px"
  toast:
    backgroundColor: "{colors.accent-blue}"
    textColor: "#ffffff"
    borderRadius: "{rounded.md}"
    padding: "12px"

---


## Overview

Inngest’s visual language rests on a disciplined token hierarchy that treats borders as the primary cue for depth. **Hairline-as-elevation.**

Unlike many SaaS sites that rely on heavy drop shadows, Inngest uses subtle hairline borders to suggest depth, keeping the interface lightweight while preserving hierarchy. The system’s dark canvas (#1c1917) anchors the page, while the bright #cbb26a accent punctuates calls to action. CircularXX provides a monospaced, code‑friendly feel for body copy, and Whyte delivers high‑impact headings. Together these choices create a coherent experience that mirrors the brand’s focus on durable, backend‑centric workflows.

**Key Characteristics:**
- Dark canvas (#1c1917) establishes a high‑contrast foundation.
- Primary accent #cbb26a signals interactive intent.
- Hairline border #e5e7eb serves as the sole elevation mechanism.
- Rounded tokens range from 4px to full circles, applied selectively.
- Spacing tokens follow an 8‑12‑16‑24‑32‑48 pixel scale for vertical rhythm.
- Typography hierarchy separates code (CircularXXMono) from marketing copy (Whyte).
- Color tokens differentiate structural, brand, and status semantics.
- Component set covers layout, navigation, forms, feedback, and data display.
- Tokens align with Google Labs CSS‑variable conventions.
- System is ready for Tailwind or custom CSS integration.

## Known Gaps

- The token set does not include explicit dark‑mode overrides for the light‑text variants, requiring developers to manually adjust text colors when switching themes.
- No dedicated elevation tokens exist beyond the hairline border, limiting designers who prefer layered shadow cues for complex UI surfaces.
- The spacing scale lacks a 20px step, which occasionally forces designers to combine multiple tokens to achieve intermediate gaps.
- While the typeface family list is comprehensive, there is no italic variant defined, restricting typographic emphasis options in documentation.
- The component library omits a data‑grid component, leaving developers to build table layouts from low‑level primitives without a pre‑styled solution.
