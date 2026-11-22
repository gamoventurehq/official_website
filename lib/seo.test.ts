import assert from "node:assert/strict";
import test from "node:test";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  organization,
  pageMetadata,
  productionOrigin,
  resolveSiteOrigin,
  serializeJsonLd,
  serviceJsonLd,
  website,
} from "./seo";

test("site origins normalize hostnames and reject invalid configuration", () => {
  assert.equal(resolveSiteOrigin(), productionOrigin);
  assert.equal(resolveSiteOrigin(" www.gamoventure.in "), productionOrigin);
  assert.equal(resolveSiteOrigin(`${productionOrigin}/`), productionOrigin);
  assert.equal(resolveSiteOrigin("https://gamoventure.vercel.app"), productionOrigin);
  assert.equal(resolveSiteOrigin("http://gamoventure.in"), productionOrigin);
  for (const input of ["ftp://example.com", "https://user:pass@example.com", "https://example.com/path", "https://example.com?x=1"]) {
    assert.throws(() => resolveSiteOrigin(input));
  }
});

test("each page gets its own canonical and complete social preview", () => {
  const metadata = pageMetadata("/work/egg-express-pos", "Egg Express POS", "Restaurant operations", "/images/egg-express/pos-showcase-poster.jpg");
  const origin = resolveSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL);
  assert.equal(metadata.alternates?.canonical, `${origin}/work/egg-express-pos`);
  assert.equal(metadata.openGraph?.title, "Egg Express POS | Gamoventure");
  assert.ok(metadata.openGraph?.images);
  assert.equal(organization.sameAs[0], "https://www.linkedin.com/company/gamoventure");
  assert.equal(website.publisher["@id"], `${origin}/#organization`);
});

test("structured data helpers emit valid schema objects and escape angle brackets", () => {
  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Business Websites & Customer Portals" },
  ]);
  assert.equal(crumbs.itemListElement.length, 3);
  assert.ok("item" in crumbs.itemListElement[0]);
  assert.ok(!("item" in crumbs.itemListElement[2]));

  const svc = serviceJsonLd({
    slug: "business-websites",
    title: "Business Websites & Customer Portals",
    description: "Defined packages",
    offers: [{ name: "Business Website", priceInr: "10000", description: "Up to 5 pages" }],
  });
  assert.equal(svc.hasOfferCatalog?.itemListElement[0].priceCurrency, "INR");

  const faq = faqJsonLd([{ question: "How fast?", answer: "5 < 10 days" }]);
  assert.ok(!serializeJsonLd(faq).includes("<"));
});
