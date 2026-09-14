import assert from "node:assert/strict";
import test from "node:test";
import { services } from "./services";

test("only informational website work has approved fixed packages", () => {
  const priced = services.filter((service) => service.pricing);
  assert.deepEqual(priced.map((service) => service.slug), ["business-websites"]);
  const pricing = priced[0].pricing!;
  assert.deepEqual(pricing.packages.map(({ price }) => price), ["₹10,000", "₹25,000"]);
  for (const [index, limits] of [[5, 5, 3, 5], [8, 7, 5, 10]].entries()) {
    const features = pricing.packages[index].features;
    for (const expected of [
      `Up to ${limits[0]} separate pages`,
      `Up to ${limits[1]} agreed content sections per page`,
      `${limits[2]} revision rounds`,
      `${limits[3]} business days of production time`,
    ]) assert.ok(features.includes(expected));
  }
  assert.match(pricing.intro, /Portals, custom functionality and wider product work are quoted separately/);
  assert.equal(pricing.notes.length, 5);
  assert.equal(pricing.exclusions.length, 8);
});
