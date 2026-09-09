# Gamoventure Portfolio

The official Gamoventure portfolio, built with Next.js, React, TypeScript, and GSAP.

The site presents Gamoventure as an independent digital product and solutions studio. It includes service pages, capabilities, client work, the studio, contact, privacy, and terms. Egg Express POS has an in-progress case study; Shree Maruti Transport Services has an in-development work entry, published with permission.

## Local development

```bash
npm install
npm run dev
```

The production origin is `https://www.gamoventure.in` (the bare domain currently redirects there). Set `NEXT_PUBLIC_SITE_URL` to that value in Vercel for Production. See `.env.example`.

## Search and sharing

Every public page has its own canonical URL, description, and Open Graph/Twitter preview. `/sitemap.xml` lists all 11 public routes; `/robots.txt` permits public pages and excludes the API. The organization data links to the official LinkedIn company page without claiming a legal registration, address, or review rating. Vercel Preview builds emit `noindex, nofollow` and disallow crawling; preview protection should remain enabled in Vercel.

After deployment:

1. Set `NEXT_PUBLIC_SITE_URL=https://www.gamoventure.in` in Production and redeploy. A hostname without a scheme is normalized, and the known bare/old Vercel domains resolve to the current production origin. Paths, credentials, and query strings are rejected.
2. Keep permanent redirects from the bare domain and old Vercel domain to the corresponding `www.gamoventure.in` path. Do not redirect every old path to the homepage.
3. Verify the domain property in Google Search Console privately, then submit `https://www.gamoventure.in/sitemap.xml`. Verification tokens and account access are not stored here.
4. Inspect the homepage, service pages, and Egg Express URL in Search Console. Review chosen canonicals, indexing, queries, and field Core Web Vitals after data becomes available. Rankings and field performance cannot be established by local tests.

Service copy describes the supported scope, not guaranteed search results. Keep client status current and add measured outcomes only after verification. There is no visitor analytics integration or advertising tracking; the privacy notice reflects this.

## Contact form delivery

Public enquiries go to `hello@gamoventure.in`. The form posts to `/api/contact`; the server sends plain-text mail through Hostinger SMTP over TLS (port 465). The authenticated mailbox is the sender, and the visitor is Reply-To. There are no automated visitor acknowledgements or database writes.

Before enabling delivery in Vercel Production:

1. Add `SMTP_USER` with the real Hostinger mailbox login (for this setup, `gaurav@gamoventure.in`, not an alias).
2. Add `SMTP_PASSWORD` privately using the mailbox password. Never commit it or prefix it with `NEXT_PUBLIC_`.
3. Configure a Vercel Firewall rate-limit rule for POST `/api/contact`, for example five requests per source IP per ten minutes. The application has a bounded, short-lived per-instance throttle and a honeypot, but these do not replace distributed edge protection. Do not enable delivery without edge protection or an equivalent shared limiter.
4. Set `CONTACT_FORM_ENABLED=true` and redeploy. Leave it false and omit credentials in Preview deployments.
5. Submit a real test enquiry and verify receipt at `hello@`, then reply to confirm Reply-To works. SMTP acceptance is not proof of inbox delivery.

When disabled or unconfigured, the form returns a clear unavailable message with a direct email alternative. Delivery/network errors preserve the user's entries and never show false success. No credentials or inquiry bodies are logged by the handler. The hero emblem has no opaque panel or grid; its replay control remains available.

## Egg Express media

The Shree Maruti entry uses a non-clickable local homepage snapshot captured from its approved Vercel preview on 10 September 2026. It appears on Home and Work, labelled as in development; the portfolio does not embed or link to the temporary deployment. Refresh `public/images/shree-maruti/website-preview.png` when the approved design changes.

The website uses `public/videos/egg-express-pos-showcase.mp4`, an 18-second, 1080p/30fps product edit built from native 2560×1600 POS captures. Six short shots show the tablet, table selection, category filtering, and draft-order updates. A separate square `egg-express-pos-showcase-mobile.mp4` keeps the product and titles larger on phones. The original client promo remains at `public/videos/egg-express-pos-promo.mp4`.

The homepage and case study loop the showcase with compact Play/Pause and Sound controls, and pause it off-screen or in a hidden tab. Sound is enabled only through its button. An explicit pause persists when scrolling away and back. Reduced-motion users see a still poster and can choose Play. The case study leads with the film and retains full-size links to the high-resolution menu and table captures.

The brand introduction enhances an already-accessible homepage. It plays automatically once per browser-tab session, supports Skip and Escape, restores keyboard focus, and has an independent timeout. Replay identity remains available. Reduced-motion preferences and unavailable session storage skip the automatic intro. The industry marquee also has a pause control and becomes a static, wrapped list under reduced motion.

To render both edits and their posters, run `npm run build`, then `python scripts/render-pos-showcase.py` with Pillow, numpy, imageio-ffmpeg, fonttools, and brotli installed. The renderer reads Outfit from the Next.js font output and the lossless captures in `public/images/egg-express/showcase/`. It exports H.264/AAC with fast-start metadata and an original rhythmic score. Captures show unsent demonstration drafts; no orders were submitted.

## Validation

```bash
npm test
npm run typecheck
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

Unit tests use Node's test runner through `tsx`, with SMTP mocked: no test emails are sent. They cover input validation, consent, header injection, payload limits, throttling, configuration, fixed recipients, safe errors, SEO metadata, and the intro session policy. SMTP failures log only a generated request ID and a fixed error category, never the provider message or inquiry contents.

The browser suite starts the production build on dedicated port 3012 and covers desktop (1280×800) and phone (375×667) Chromium viewports. It checks the 11 page routes, metadata, sitemap, overflow, hover contrast, keyboard/intro behavior, media controls, and mocked form failures. Browser output goes to `/tmp/gamoventure-e2e-results`. This is viewport coverage, not a claim of testing physical iPhone hardware or Safari.

Next.js and its lint configuration are updated together. Run `npm audit` after dependency updates; the lockfile records the tested versions. No unused font is preloaded, and the retired accordion component has been removed.
