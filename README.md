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

The promo video is stored at `public/videos/egg-express-pos-promo.mp4`. The homepage starts it muted when it enters view and pauses it when it leaves. Reduced-motion users start playback manually. The case study uses click-to-play video and links to the menu and table screenshots at full size.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```
