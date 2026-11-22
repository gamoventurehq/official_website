import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ServicePricing } from "@/components/ServicePricing";
import { SitePage } from "@/components/SitePage";
import { pageMetadata, serviceJsonLd, siteLastUpdatedDisplay } from "@/lib/seo";
import { services } from "@/lib/services";

export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return pageMetadata(`/services/${slug}`, service.title, service.description);
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <SitePage>
      <JsonLd
        data={serviceJsonLd({
          slug: service.slug,
          title: service.title,
          description: service.description,
          offers: service.offers,
        })}
      />
      <PageHero
        compact
        eyebrow={service.title}
        title={service.heading}
        copy={service.intro}
        aside={<p>Last updated {siteLastUpdatedDisplay}</p>}
      />
      <div className="service-page-body">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Capabilities", path: "/capabilities" },
            { name: service.title },
          ]}
        />
        {service.pricing && <ServicePricing pricing={service.pricing} />}
        <article className="page-shell service-reading">
          {service.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
            </section>
          ))}
          <p><Link href={service.evidence.href}>{service.evidence.label}</Link></p>
          <FaqSection id={`${service.slug}-faq`} faqs={service.faqs} />
          <nav className="service-links" aria-label="Related services">
            <Link href="/capabilities">All capabilities & service scope</Link>
            {services.filter((item) => item.slug !== slug).map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`}>{item.title}</Link>
            ))}
          </nav>
        </article>
      </div>
      <ContactCTA title="Tell us what needs to work better." />
    </SitePage>
  );
}
