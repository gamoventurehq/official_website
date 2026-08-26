"use client";

import { BRAND_SPLASH_REPLAY_EVENT } from "./brandSplashEvent";

export function SplashReplayButton() {
  return (
    <button
      className="hero-replay"
      type="button"
      onClick={() => window.dispatchEvent(new Event(BRAND_SPLASH_REPLAY_EVENT))}
      aria-label="Replay Gamoventure brand animation"
    >
      <span className="brand-wordmark">Gamoventure</span>
      <span>Replay identity</span>
    </button>
  );
}
