import assert from "node:assert/strict";
import test from "node:test";
import { pageMetadata, resolveSiteOrigin, productionOrigin, organization } from "./seo";

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
  assert.equal(metadata.alternates?.canonical, `${resolveSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL)}/work/egg-express-pos`);
  assert.equal(metadata.openGraph?.title, "Egg Express POS — Gamoventure");
  assert.ok(metadata.openGraph?.images);
  assert.equal(organization.sameAs[0], "https://www.linkedin.com/company/gamoventure");
});
