"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { EggProductVisual } from "@/components/EggProductVisual";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ContainerScrollShowcase() {
  const rootRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!rootRef.current || !titleRef.current || !frameRef.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set([titleRef.current, frameRef.current], { clearProps: "all" });
      return;
    }

    const media = gsap.matchMedia();

    media.add("(min-width: 901px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 82%",
          end: "bottom 18%",
          scrub: 1,
        },
      })
        .fromTo(titleRef.current, { y: 76, opacity: 0.45 }, { y: -24, opacity: 1, ease: "none" }, 0)
        .fromTo(
          frameRef.current,
          { y: 140, scale: 0.72, rotateX: 19, transformOrigin: "center top" },
          { y: 0, scale: 1, rotateX: 0, ease: "none" },
          0,
        );
    });

    media.add("(max-width: 900px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 90%",
          end: "bottom 34%",
          scrub: 0.8,
        },
      })
        .fromTo(titleRef.current, { y: 40, opacity: 0.5 }, { y: 0, opacity: 1, ease: "none" }, 0)
        .fromTo(
          frameRef.current,
          { y: 36, scale: 0.96, rotateX: 3, transformOrigin: "center top" },
          { y: 0, scale: 1, rotateX: 0, ease: "none" },
          0,
        );
    });

    return () => media.revert();
  }, { scope: rootRef });

  return (
    <section className="container-scroll-showcase" ref={rootRef}>
      <div className="container-scroll-sticky">
        <div className="page-shell container-scroll-stage">
          <div className="container-scroll-title" ref={titleRef}>
            <p className="eyebrow">The operating surface</p>
            <h2>From table selection to a KOT-ready order flow.</h2>
            <p>
              A focused interface brings service type, menu navigation, order composition,
              and outlet actions into one working environment.
            </p>
          </div>

          <div className="container-scroll-frame" ref={frameRef}>
            <div className="container-scroll-chrome">
              <div className="container-scroll-brand">
                <Image src="/images/egg-express/logo.webp" alt="" width={42} height={35} />
                <span>Egg Express POS</span>
              </div>
              <span>Order workspace · Development build</span>
              <div className="container-scroll-controls" aria-hidden="true"><i /><i /><i /></div>
            </div>
            <div className="container-scroll-screen">
              <EggProductVisual variant="full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
