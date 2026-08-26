"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function PortfolioMotion() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.from(".hero-title, .page-hero-copy h1", { y: 70, opacity: 0, duration: 1.15, ease: "power4.out" });
      gsap.from(".hero-support, .page-hero-copy > p, .page-hero-aside", { y: 34, opacity: 0, duration: 0.9, delay: 0.18, stagger: 0.08, ease: "power3.out" });
      gsap.from(".hero-art", { scale: 0.82, opacity: 0, rotate: 4, duration: 1.35, delay: 0.1, ease: "expo.out" });

      gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((element) => {
        gsap.from(element, { y: 58, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
      });

      gsap.utils.toArray<HTMLElement>("[data-visual-frame]").forEach((frame) => {
        gsap.timeline({ scrollTrigger: { trigger: frame, start: "top 94%", end: "bottom 10%", scrub: 1 } })
          .fromTo(frame, { scale: 0.84, opacity: 0.3 }, { scale: 1, opacity: 1, ease: "none", duration: 0.58 })
          .to(frame, { scale: 0.97, opacity: 0.5, ease: "none", duration: 0.42 });
      });

      ScrollTrigger.matchMedia({
        "(min-width: 901px)": () => {
          gsap.utils.toArray<HTMLElement>(".pin-layout").forEach((layout) => {
            const copy = layout.querySelector<HTMLElement>(".pin-copy");
            const stack = layout.querySelector<HTMLElement>(".pin-stack");
            if (!copy || !stack) return;
            ScrollTrigger.create({ trigger: layout, start: "top 12%", endTrigger: stack, end: "bottom 72%", pin: copy, pinSpacing: false });
          });
        },
      });
    });

    return () => context.revert();
  });

  return null;
}
