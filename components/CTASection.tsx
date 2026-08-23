"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, CopyIcon, CheckIcon } from "./icons";

export function CTASection() {
  const [copied, setCopied] = useState(false);
  const email = "gaurav@gamoventure.com";

  // World Clocks State for Global Client Base
  const [times, setTimes] = useState({
    ny: "11:30 AM",
    lon: "04:30 PM",
    dub: "08:30 PM",
    mum: "10:00 PM",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const getFormattedTime = (tz: string) => {
        return new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(now);
      };

      try {
        setTimes({
          ny: getFormattedTime("America/New_York"),
          lon: getFormattedTime("Europe/London"),
          dub: getFormattedTime("Asia/Dubai"),
          mum: getFormattedTime("Asia/Kolkata"),
        });
      } catch {
        // Fallback gracefully
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="vip-contact-section" id="contact">
      <div className="shell">
        <div className="vip-grid">
          <div>
            <div className="kicker-gold">
              <span aria-hidden="true" />
              Private Client Inquiries
            </div>
            <h2 className="section-h2-large">
              Initiate a confidential<br />
              <em>architectural consultation.</em>
            </h2>
            <p className="section-desc-lead" style={{ marginTop: "18px" }}>
              Whether you are an established hospitality group, a medical practice seeking patient growth,
              a CA firm modernizing client onboarding, or a premier creator, reach out directly to Gaurav.
            </p>
          </div>

          <div className="vip-action-box">
            <p style={{ margin: "0 0 20px", fontSize: "15px", color: "var(--text-light)" }}>
              Direct private advisory channel:
            </p>

            <a
              href={`mailto:${email}?subject=Private%20Client%20Inquiry%20%E2%80%94%20Gamoventure`}
              className="btn-gold"
              style={{ width: "100%", justifyContent: "space-between", padding: "14px 22px" }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px" }}>{email}</span>
              <ArrowUpRight />
            </a>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "14px" }}>
              <button
                type="button"
                onClick={handleCopy}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--accent-gold)",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 0",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
                <span>{copied ? "Copied to clipboard" : "Copy email address"}</span>
              </button>

              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-dim)" }}>
                Direct Founder Review
              </span>
            </div>

            {/* Practice Operating Hours Across Key Commercial Hubs */}
            <div className="timezone-radar">
              <div className="timezone-item">
                <span className="timezone-city">New York (EST)</span>
                <span className="timezone-time">{times.ny}</span>
              </div>
              <div className="timezone-item">
                <span className="timezone-city">London (GMT)</span>
                <span className="timezone-time">{times.lon}</span>
              </div>
              <div className="timezone-item">
                <span className="timezone-city">Dubai (GST)</span>
                <span className="timezone-time">{times.dub}</span>
              </div>
              <div className="timezone-item">
                <span className="timezone-city">Mumbai (IST)</span>
                <span className="timezone-time">{times.mum}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
