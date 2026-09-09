import { expect, test } from "@playwright/test";

const paths = [
  "/", "/about", "/capabilities", "/work", "/work/egg-express-pos", "/contact", "/privacy", "/terms",
  "/services/business-websites", "/services/custom-business-software", "/services/product-development",
];

for (const path of ["/", "/work"]) {
  test(`${path} shows a local, non-clickable Shree Maruti preview`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    const preview = page.getByRole("figure", { name: "Shree Maruti Transport Services website preview" });
    await preview.scrollIntoViewIfNeeded();
    await expect(preview.locator("img")).toBeVisible();
    await expect.poll(() => preview.locator("img").evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
    await expect(preview.locator("a, iframe, button")).toHaveCount(0);
    await expect(preview).toContainText("In development");
    await expect(page.locator('a[href*="shree-maruti-transport-website.vercel.app"]')).toHaveCount(0);
  });
}

for (const path of paths) {
  test(`${path} has canonical/social metadata and fits the viewport`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toBeVisible();
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toBeTruthy();
    const url = new URL(canonical!);
    expect(url.pathname).toBe(path);
    expect(url.protocol).toBe("https:");
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", canonical!);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /\S+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", /\S+/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /^https:\/\//);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute("content", /^https:\/\//);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);
  });
}

test("robots and sitemap describe the public pages", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Sitemap:");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const body = await sitemap.text();
  const locations = [...body.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  for (const path of paths) expect(locations).toContain(path);
});

test("colored capability cards retain readable heading contrast on hover", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const cards = page.locator(".capability-card");
  expect(await cards.count()).toBeGreaterThan(0);
  for (const card of await cards.all()) {
    await card.hover();
    await expect.poll(() => card.evaluate((element) => {
      const heading = element.querySelector("h3") ?? element;
      const foreground = getComputedStyle(heading).color;
      const background = getComputedStyle(element).backgroundColor;
      const luminance = (color: string) => {
        const channels = color.match(/[\d.]+/g)!.slice(0, 3).map(Number).map((channel) => {
          const value = channel / 255;
          return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
        });
        return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
      };
      const light = luminance(foreground);
      const dark = luminance(background);
      return (Math.max(light, dark) + 0.05) / (Math.min(light, dark) + 0.05);
    })).toBeGreaterThanOrEqual(3);
  }
});
