# Gamoventure Portfolio

The official Gamoventure portfolio, built with Next.js, React, TypeScript, and GSAP.

The site presents Gamoventure as an independent digital product and solutions studio. It includes dedicated pages for capabilities, selected work, the studio, contact, privacy, and terms, plus an honest in-progress Egg Express POS case study.

## Local development

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the public website origin before deployment so social-share metadata uses the correct absolute URL. See `.env.example`.

## Egg Express media

The website uses `public/videos/egg-express-pos-showcase.mp4`, an 18-second, 1080p/30fps product edit built from native 2560×1600 POS captures. Six short shots show the tablet, table selection, category filtering, and draft-order updates. A separate square `egg-express-pos-showcase-mobile.mp4` keeps the product and titles larger on phones. The original client promo remains at `public/videos/egg-express-pos-promo.mp4`.

The homepage and case study loop the showcase without native player controls and pause it off-screen or in a hidden tab. Playback starts muted under browser autoplay rules; a visitor interaction enables sound, and the sound toggle can mute it again. Reduced-motion users see a still poster. The case study leads with the film and retains full-size links to the high-resolution menu and table captures.

To render both edits and their posters, run `npm run build`, then `python scripts/render-pos-showcase.py` with Pillow, numpy, imageio-ffmpeg, fonttools, and brotli installed. The renderer reads Outfit from the Next.js font output and the lossless captures in `public/images/egg-express/showcase/`. It exports H.264/AAC with fast-start metadata and an original rhythmic score. Captures show unsent demonstration drafts; no orders were submitted.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```
