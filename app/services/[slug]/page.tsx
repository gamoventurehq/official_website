import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SitePage } from "@/components/SitePage";
import { ContactCTA } from "@/components/ContactCTA";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

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
      <PageHero compact title={service.heading} copy={service.intro} />
      <div className="service-page-body">
        <article className="page-shell service-reading">
          <Link href="/capabilities">All capabilities</Link>
          {service.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.copy}</p></section>)}
          <p><Link href={service.evidence.href}>{service.evidence.label}</Link></p>
          <nav className="service-links" aria-label="Related services">
            {services.filter((item) => item.slug !== slug).map((item) => <Link key={item.slug} href={`/services/${item.slug}`}>{item.title}</Link>)}
          </nav>
        </article>
      </div>
      <ContactCTA title="Tell us what needs to work better." />
    </SitePage>
  );
}
