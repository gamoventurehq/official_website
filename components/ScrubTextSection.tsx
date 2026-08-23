"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function ScrubTextSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const words = textRef.current?.querySelectorAll(".scrub-word");
    if (!words || words.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 45%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const manifesto =
    "We believe exceptional businesses deserve more than generic templates. The most distinguished restaurants, clinics, and advisory firms establish market dominance by investing in uncompromising visual craft, frictionless customer booking, and enduring digital architecture.";

  return (
    <section className="scrub-manifesto-section" id="manifesto" ref={containerRef}>
      <div className="shell scrub-wrap-inner">
        <div className="kicker-gold" style={{ justifyContent: "center", marginBottom: "24px" }}>
          <span aria-hidden="true" />
          The Gamoventure Standard
          <span aria-hidden="true" />
        </div>

        <p className="manifesto-statement" ref={textRef}>
          {manifesto.split(" ").map((word, idx) => (
            <span className="scrub-word" key={`${word}-${idx}`}>
              {word}
            </span>
          ))}
        </p>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}>
          <Image
            src="/logos/symbol.png"
            alt="Gamoventure Emblem"
            width={40}
            height={40}
            style={{ borderRadius: "50%", background: "#1c1917", padding: "4px", border: "1px solid var(--border-gold)" }}
          />
          <div style={{ textAlign: "left" }}>
            <strong style={{ display: "block", fontSize: "14px", color: "var(--text-light)" }}>
              Gaurav · Founder & Principal Partner
            </strong>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)" }}>
              Gamoventure Private Client Studio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
