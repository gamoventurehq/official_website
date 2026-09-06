"use client";

import { useEffect, useRef, useState } from "react";

export function EggPromoVideo({ preview = false }: { preview?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(preview);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mobile = window.matchMedia("(max-width: 620px)");
    const selectFilm = () => {
      const resume = !video.paused;
      const suffix = mobile.matches ? "-mobile" : "";
      video.poster = `/images/egg-express/pos-showcase-poster${suffix}.jpg`;
      video.src = `/videos/egg-express-pos-showcase${suffix}.mp4`;
      video.load();
      if (resume) void video.play().catch(() => {});
    };
    selectFilm();
    mobile.addEventListener("change", selectFilm);
    return () => mobile.removeEventListener("change", selectFilm);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!preview || !video) return;

    let inView = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const play = () => {
      if (!inView || document.hidden || reducedMotion.matches) return;
      void video.play().catch(() => {
        if (!inView || document.hidden || reducedMotion.matches) return;
        video.muted = true;
        setMuted(true);
        void video.play().catch(() => {});
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.3;
      if (!inView) {
        video.pause();
        return;
      }
      play();
    }, { threshold: 0.3 });

    let audioGestureHandled = false;
    const enableAudio = (event: Event) => {
      if (audioGestureHandled) return;
      audioGestureHandled = true;
      if (event.target instanceof Element && event.target.closest(".egg-promo-sound")) return;
      video.muted = false;
      setMuted(false);
      play();
    };
    const visibilityChanged = () => document.hidden ? video.pause() : play();
    const motionChanged = () => reducedMotion.matches ? video.pause() : play();

    observer.observe(video);
    window.addEventListener("pointerdown", enableAudio, { once: true });
    window.addEventListener("keydown", enableAudio, { once: true });
    document.addEventListener("visibilitychange", visibilityChanged);
    reducedMotion.addEventListener("change", motionChanged);
    return () => {
      observer.disconnect();
      window.removeEventListener("pointerdown", enableAudio);
      window.removeEventListener("keydown", enableAudio);
      document.removeEventListener("visibilitychange", visibilityChanged);
      reducedMotion.removeEventListener("change", motionChanged);
    };
  }, [preview]);

  return (
    <figure className={`egg-promo${preview ? " egg-promo--cinema" : ""}`}>
      <video
        ref={videoRef}
        className="egg-promo-video"
        controls={!preview}
        playsInline
        muted={muted}
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
        loop
        preload="none"
        poster="/images/egg-express/pos-showcase-poster.jpg"
        aria-label="Egg Express POS tablet showcase: table selection and menu workflows"
      >
        <source src="/videos/egg-express-pos-showcase.mp4" type="video/mp4" />
        <a href="/videos/egg-express-pos-showcase.mp4">Watch the Egg Express POS showcase</a>
      </video>
      <figcaption className="egg-promo-caption">
        <span>Inside Egg Express POS</span>
        {preview ? (
          <button
            type="button"
            className="egg-promo-sound"
            aria-label={muted ? "Enable sound" : "Disable sound"}
            title={muted ? "Enable sound" : "Disable sound"}
            onClick={() => {
              const video = videoRef.current;
              if (!video) return;
              const nextMuted = !video.muted;
              video.muted = nextMuted;
              setMuted(nextMuted);
            }}
          >
            <span>Sound</span>
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="m11 5-6 4H2v6h3l6 4V5Z" />
              {muted ? <path d="m17 9 5 6m0-6-5 6" /> : <><path d="M15 8a6 6 0 0 1 0 8" /><path d="M18 5a10 10 0 0 1 0 14" /></>}
            </svg>
          </button>
        ) : <span>Product showcase</span>}
      </figcaption>
    </figure>
  );
}
