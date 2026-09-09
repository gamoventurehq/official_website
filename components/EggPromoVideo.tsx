"use client";

import { useEffect, useRef, useState } from "react";

export function EggPromoVideo({ preview = false }: { preview?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);
  const playbackIntent = useRef<"auto" | "play" | "pause">("auto");
  const syncPlaybackRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mobile = window.matchMedia("(max-width: 620px)");
    const selectFilm = () => {
      const suffix = mobile.matches ? "-mobile" : "";
      video.poster = `/images/egg-express/pos-showcase-poster${suffix}.jpg`;
      video.src = `/videos/egg-express-pos-showcase${suffix}.mp4`;
      video.load();
      syncPlaybackRef.current?.();
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
      if (!inView || document.hidden || playbackIntent.current === "pause" ||
        (reducedMotion.matches && playbackIntent.current !== "play")) {
        video.pause();
        return;
      }
      void video.play().then(() => {
        if (!inView || document.hidden || playbackIntent.current === "pause") video.pause();
        setPlaybackError(false);
      }).catch(() => {
        if (playbackIntent.current === "play" && inView && !document.hidden) setPlaybackError(true);
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

    const visibilityChanged = () => document.hidden ? video.pause() : play();
    const motionChanged = () => {
      if (reducedMotion.matches && playbackIntent.current === "play") playbackIntent.current = "auto";
      play();
    };

    syncPlaybackRef.current = play;
    observer.observe(video);
    document.addEventListener("visibilitychange", visibilityChanged);
    reducedMotion.addEventListener("change", motionChanged);
    return () => {
      observer.disconnect();
      syncPlaybackRef.current = null;
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
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
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
          <div className="egg-promo-controls">
            <button
              type="button"
              className="egg-promo-playback"
              aria-label={playing ? "Pause showcase" : "Play showcase"}
              onClick={() => {
                playbackIntent.current = playing ? "pause" : "play";
                syncPlaybackRef.current?.();
              }}
            >
              {playing ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              className="egg-promo-sound"
              aria-label={muted ? "Enable sound" : "Disable sound"}
              title={muted ? "Enable sound" : "Disable sound"}
              aria-pressed={!muted}
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
          </div>
        ) : <span>Product showcase</span>}
      </figcaption>
      {playbackError && <p role="status">The showcase could not play. Select Play to try again.</p>}
    </figure>
  );
}
