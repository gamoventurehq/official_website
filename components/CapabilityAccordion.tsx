"use client";

import { useState } from "react";
import { capabilities } from "./siteContent";

export function CapabilityAccordion() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <div className="capability-accordion reveal-block">
      {capabilities.map((capability, index) => {
        const isActive = activeCapability === index;
        return (
          <article className={`capability-panel ${isActive ? "is-active" : ""}`} key={capability.slug}>
            <button
              type="button"
              aria-expanded={isActive}
              onClick={() => setActiveCapability(index)}
              onMouseEnter={() => setActiveCapability(index)}
            >
              <span>{capability.title}</span>
              <span aria-hidden="true">{isActive ? "—" : "+"}</span>
            </button>
            <div className="capability-panel-content">
              <p>{capability.problem}</p>
              <ul>{capability.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
