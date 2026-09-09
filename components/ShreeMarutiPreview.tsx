import Image from "next/image";

export function ShreeMarutiPreview() {
  return (
    <figure className="website-preview" aria-label="Shree Maruti Transport Services website preview">
      <div className="website-preview-bar" aria-hidden="true"><span>Shree Maruti Transport Services</span><span>Website preview</span></div>
      <Image
        src="/images/shree-maruti/website-preview.png"
        alt="Shree Maruti website homepage showing its red and charcoal identity, tanker imagery, and the headline Moving Industry. Since 2001."
        width={1440}
        height={1000}
        sizes="(max-width: 900px) 92vw, 84vw"
      />
      <figcaption>Design preview · In development</figcaption>
    </figure>
  );
}
