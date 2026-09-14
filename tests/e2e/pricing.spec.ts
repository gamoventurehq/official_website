import { expect, test } from "@playwright/test";

test("website packages show approved scope and support keyboard contact navigation", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/services/business-websites");
  const section = page.getByRole("region", { name: "A clear scope before work begins." });
  const cards = section.locator("article");
  await expect(cards).toHaveCount(2);
  for (const [index, values] of [
    ["Business Website", "₹10,000", "5 separate pages", "5 agreed content sections", "3 revision rounds", "5 business days"],
    ["Tailored Business Website", "₹25,000", "8 separate pages", "7 agreed content sections", "5 revision rounds", "10 business days"],
  ].entries()) {
    for (const value of values) await expect(cards.nth(index)).toContainText(value);
  }
  await expect(section).toContainText("Portals, custom functionality and wider product work are quoted separately");
  await expect(section).toContainText("30-day post-launch defect-reporting window");
  await expect(section).toContainText("do not guarantee rankings, traffic, enquiries or sales");
  await expect(section).not.toContainText(/starting at|GST|Buy now|Choose plan/i);
  const headings = await section.locator("h2, h3").evaluateAll((items) => items.map((item) => item.tagName));
  expect(headings).toEqual(["H2", "H3", "H3", "H3", "H3"]);
  const bounds = await cards.evaluateAll((items) => items.map((item) => {
    const { x, y, width, height } = item.getBoundingClientRect();
    return { x, y, width, height };
  }));
  if (testInfo.project.name === "iphone") expect(bounds[1].y).toBeGreaterThanOrEqual(bounds[0].y + bounds[0].height);
  else expect(bounds[1].y).toBe(bounds[0].y);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
  await section.scrollIntoViewIfNeeded();
  await page.screenshot({ path: `/tmp/website-pricing-${testInfo.project.name}.png`, fullPage: true });
  const cta = page.getByRole("link", { name: "Discuss your website", exact: true });
  await page.getByRole("link", { name: "Skip to content" }).focus();
  for (let count = 0; count < 20; count++) {
    await page.keyboard.press("Tab");
    if (await cta.evaluate((element) => element === document.activeElement)) break;
  }
  await expect(cta).toBeFocused();
  expect(await cta.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe("none");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/contact$/);
});

test("other services do not display fixed packages", async ({ page }) => {
  for (const slug of ["custom-business-software", "product-development"]) {
    await page.goto(`/services/${slug}`);
    await expect(page.locator(".website-pricing")).toHaveCount(0);
  }
});
