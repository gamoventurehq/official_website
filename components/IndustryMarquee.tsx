"use client";

import { useState } from "react";
import { industries } from "./siteContent";

type Industry = (typeof industries)[number];

function IndustrySymbol({ industry }: { industry: Industry }) {
  const commonProps = {
    className: "industry-marquee-symbol",
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (industry) {
    case "Food, Hospitality & Retail":
      return (
        <svg {...commonProps}>
          <path d="M7 22h18M9 19a7 7 0 0 1 14 0M16 9v3M13 22h6" />
        </svg>
      );
    case "Professional & Local Services":
      return (
        <svg {...commonProps}>
          <path d="M7 11h18v13H7zM12 11V8h8v3M7 16c5 3 13 3 18 0M15 16h2" />
        </svg>
      );
    case "Healthcare & Business Operations":
      return (
        <svg {...commonProps}>
          <circle cx="16" cy="16" r="11" />
          <path d="M6 17h5l2-5 4 10 3-6h6" />
        </svg>
      );
    case "Logistics, Agencies & Growing Enterprises":
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="23" r="2" />
          <circle cx="24" cy="9" r="2" />
          <path d="M10 23c8 0 4-14 12-14M18 6h6v6" />
        </svg>
      );
  }
}

export function IndustryMarquee() {
  const [paused, setPaused] = useState(false);
  const repeatedIndustries = [...industries, ...industries];

  return (
    <div className="industry-marquee" role="region" aria-label="Industries we can work with">
      <button className="industry-marquee-toggle" type="button" aria-label={paused ? "Resume scrolling" : "Pause scrolling"} title={paused ? "Resume scrolling" : "Pause scrolling"} aria-pressed={paused} onClick={() => setPaused(!paused)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {paused ? <path d="m8 5 11 7-11 7V5Z" /> : <><path d="M8 5v14" /><path d="M16 5v14" /></>}
        </svg>
      </button>
      <div className="industry-marquee-window"><div className="industry-marquee-track" style={{ animationPlayState: paused ? "paused" : "running" }}>
        {repeatedIndustries.map((industry, index) => (
          <span
            className="industry-marquee-item"
            key={`${industry}-${index}`}
            aria-hidden={index >= industries.length ? true : undefined}
          >
            <IndustrySymbol industry={industry} />
            <strong>{industry}</strong>
            <i className="industry-marquee-separator" aria-hidden="true" />
          </span>
        ))}
      </div></div>
    </div>
  );
}
