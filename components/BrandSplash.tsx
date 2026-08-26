"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BRAND_SPLASH_REPLAY_EVENT } from "./brandSplashEvent";

export function BrandSplash() {
  const [visible, setVisible] = useState(true);
  const [runId, setRunId] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const ringsBloomRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const innerBloomRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const replay = () => {
      setVisible(true);
      setRunId((current) => current + 1);
    };

    window.addEventListener(BRAND_SPLASH_REPLAY_EVENT, replay);
    return () => window.removeEventListener(BRAND_SPLASH_REPLAY_EVENT, replay);
  }, []);

  useLayoutEffect(() => {
    if (!visible || !rootRef.current) return;

    const root = rootRef.current;
    const site = document.querySelector<HTMLElement>(".site-frame");
    const heroArt = document.querySelector<HTMLElement>(".hero-art");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let finished = false;

    document.body.classList.add("splash-active");
    site?.setAttribute("inert", "");
    site?.setAttribute("aria-hidden", "true");

    const finish = () => {
      if (finished) return;
      finished = true;
      document.body.classList.remove("splash-active");
      site?.removeAttribute("inert");
      site?.removeAttribute("aria-hidden");
      setVisible(false);
      window.dispatchEvent(new Event("gamoventure:splash-complete"));
    };

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ onComplete: finish });
      timelineRef.current = timeline;

      gsap.set(root, { autoAlpha: 1, pointerEvents: "auto" });
      gsap.set([topPanelRef.current, bottomPanelRef.current], { yPercent: 0 });
      gsap.set(plateRef.current, { autoAlpha: 0, scale: 0.72, rotate: -5 });
      gsap.set(ringsRef.current, { autoAlpha: 0, scale: 0.78, rotate: -8 });
      gsap.set(ringsBloomRef.current, { autoAlpha: 0, scale: 0.86 });
      gsap.set(innerRef.current, { autoAlpha: 0, scale: 0.72, rotate: 7 });
      gsap.set(innerBloomRef.current, { autoAlpha: 0, scale: 0.8 });
      gsap.set(pulseRef.current, { autoAlpha: 0, scale: 0.65 });
      gsap.set(wordmarkRef.current, { autoAlpha: 0, y: 34, letterSpacing: "0.28em" });
      gsap.set(marqueeRef.current, { autoAlpha: 0 });
      gsap.set(emblemRef.current, { x: 0, y: 0, scale: 1, transformOrigin: "center center" });

      if (prefersReducedMotion) {
        timeline
          .set([plateRef.current, ringsRef.current, innerRef.current, wordmarkRef.current], { autoAlpha: 1, scale: 1, y: 0 })
          .to(root, { autoAlpha: 0, duration: 0.35, delay: 0.45, ease: "power2.out" });
        return;
      }

      timeline
        .to(plateRef.current, { autoAlpha: 0.96, scale: 1, rotate: 0, duration: 0.72, ease: "expo.out" }, 0.12)
        .to(ringsRef.current, {
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
          duration: 1.05,
          ease: "expo.out",
          filter: "drop-shadow(0 0 14px rgba(255,150,102,.95)) drop-shadow(0 0 42px rgba(255,150,102,.72))",
        }, 0.72)
        .to(ringsBloomRef.current, { autoAlpha: 0.92, scale: 1.04, duration: 0.68, ease: "power2.out" }, 0.88)
        .to(pulseRef.current, { autoAlpha: 0.8, scale: 1.45, duration: 0.82, ease: "power2.out" }, 1.08)
        .to(pulseRef.current, { autoAlpha: 0, scale: 1.86, duration: 0.55, ease: "power2.in" }, 1.62)
        .to(innerRef.current, {
          autoAlpha: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: "expo.out",
          filter: "drop-shadow(0 0 12px rgba(255,150,102,1)) drop-shadow(0 0 36px rgba(255,150,102,.78))",
        }, 1.82)
        .to(innerBloomRef.current, { autoAlpha: 0.96, scale: 1.04, duration: 0.72, ease: "power2.out" }, 1.96)
        .to(emblemRef.current, { scale: 1.045, duration: 0.28, ease: "power2.out", yoyo: true, repeat: 1 }, 2.7)
        .to(wordmarkRef.current, {
          autoAlpha: 1,
          y: 0,
          letterSpacing: "0.08em",
          duration: 0.9,
          ease: "expo.out",
        }, 2.9)
        .to(marqueeRef.current, { autoAlpha: 0.16, duration: 0.55, ease: "power2.out" }, 3.25)
        .to(".splash-marquee-track", { xPercent: -12, duration: 1.5, ease: "none" }, 3.25)
        .to(wordmarkRef.current, { autoAlpha: 0, y: -22, duration: 0.42, ease: "power2.in" }, 4.12)
        .to(marqueeRef.current, { autoAlpha: 0, duration: 0.35, ease: "power2.in" }, 4.12)
        .set(heroArt, { autoAlpha: 0 }, 4.18)
        .to(emblemRef.current, {
          x: () => {
            if (!heroArt || !emblemRef.current) return 0;
            const source = emblemRef.current.getBoundingClientRect();
            const target = heroArt.getBoundingClientRect();
            return target.left + target.width / 2 - (source.left + source.width / 2);
          },
          y: () => {
            if (!heroArt || !emblemRef.current) return 0;
            const source = emblemRef.current.getBoundingClientRect();
            const target = heroArt.getBoundingClientRect();
            return target.top + target.height / 2 - (source.top + source.height / 2);
          },
          scale: () => {
            if (!heroArt || !emblemRef.current) return 0.82;
            return Math.min((heroArt.getBoundingClientRect().width / emblemRef.current.getBoundingClientRect().width) * 0.78, 1.08);
          },
          duration: 1.18,
          ease: "expo.inOut",
        }, 4.28)
        .to(topPanelRef.current, { yPercent: -101, duration: 1.08, ease: "expo.inOut" }, 4.38)
        .to(bottomPanelRef.current, { yPercent: 101, duration: 1.08, ease: "expo.inOut" }, 4.38)
        .to(heroArt, { autoAlpha: 1, duration: 0.62, ease: "power2.out" }, 4.9)
        .to(emblemRef.current, { autoAlpha: 0, duration: 0.46, ease: "power2.out" }, 5.02)
        .to(root, { autoAlpha: 0, pointerEvents: "none", duration: 0.3 }, 5.42);
    }, root);

    return () => {
      context.revert();
      timelineRef.current = null;
      document.body.classList.remove("splash-active");
      site?.removeAttribute("inert");
      site?.removeAttribute("aria-hidden");
    };
  }, [runId, visible]);

  if (!visible) return null;

  return (
    <div className="brand-splash" ref={rootRef} role="dialog" aria-modal="true" aria-label="Gamoventure introduction">
      <div className="splash-panel splash-panel-top" ref={topPanelRef} />
      <div className="splash-panel splash-panel-bottom" ref={bottomPanelRef} />

      <div className="splash-marquee" ref={marqueeRef} aria-hidden="true">
        <div className="splash-marquee-track">
          <span>Gamoventure</span><span>Gamoventure</span><span>Gamoventure</span><span>Gamoventure</span>
        </div>
      </div>

      <div className="splash-lockup">
        <div className="splash-emblem" ref={emblemRef} aria-label="Gamoventure emblem">
          <div className="splash-layer splash-plate" ref={plateRef}><Image src="/logos/generated/shield_clean.png" alt="" fill sizes="430px" priority /></div>
          <div className="splash-layer splash-rings-bloom" ref={ringsBloomRef}><Image src="/logos/generated/symbol_rings_bloom.png" alt="" fill sizes="430px" priority /></div>
          <div className="splash-layer splash-rings" ref={ringsRef}><Image src="/logos/generated/symbol_rings.png" alt="" fill sizes="430px" priority /></div>
          <div className="splash-layer splash-inner-bloom" ref={innerBloomRef}><Image src="/logos/generated/symbol_inner_bloom.png" alt="" fill sizes="430px" priority /></div>
          <div className="splash-layer splash-inner" ref={innerRef}><Image src="/logos/generated/symbol_inner.png" alt="" fill sizes="430px" priority /></div>
          <div className="splash-energy-pulse" ref={pulseRef} aria-hidden="true" />
        </div>
        <div className="splash-wordmark brand-wordmark" ref={wordmarkRef}>Gamoventure</div>
      </div>
    </div>
  );
}
