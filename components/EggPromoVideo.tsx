"use client";

import { useEffect, useRef } from "react";

export function EggPromoVideo({ preview = false }: { preview?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!preview || !video) return;

    let started = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        video.pause();
        return;
      }
      if (started || reducedMotion.matches) return;
      started = true;
      // Native controls remain available when the browser blocks autoplay.
      void video.play().catch(() => {});
    }, { threshold: 0.3 });

    observer.observe(video);
    return () => observer.disconnect();
  }, [preview]);

  return (
    <figure className="egg-promo">
      <div className="egg-promo-heading">
        <span className="brand-wordmark">Gamoventure</span>
        <span>Egg Express POS · The film</span>
      </div>
    <video
      ref={videoRef}
      className="egg-promo-video"
      controls
      playsInline
      muted={preview}
      loop={preview}
      preload="none"
      poster="/images/egg-express/pos-menu.jpg"
      aria-label="Egg Express POS promotional video"
    >
      <source src="/videos/egg-express-pos-promo.mp4" type="video/mp4" />
      <a href="/videos/egg-express-pos-promo.mp4">Watch the Egg Express POS video</a>
    </video>
      <figcaption className="egg-promo-caption">
        <span>Built around the daily service.</span>
        <span>{preview ? "Sound available in player" : "Play with sound"}</span>
      </figcaption>
    </figure>
  );
}
