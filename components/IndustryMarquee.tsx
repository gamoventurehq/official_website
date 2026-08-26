import { industries } from "./siteContent";

export function IndustryMarquee() {
  const repeatedIndustries = [...industries, ...industries];

  return (
    <div className="industry-marquee" aria-label="Industries we can work with">
      <div className="industry-marquee-track">
        {repeatedIndustries.map((industry, index) => (
          <span key={`${industry}-${index}`}>{industry}<i aria-hidden="true" /></span>
        ))}
      </div>
    </div>
  );
}
