import { expect, test } from "@playwright/test";

test("home content and skip link work without JavaScript", async ({ browser, baseURL, viewport }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL, viewport });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("main h1")).toBeVisible();
  await expect(page.locator(".brand-splash")).toHaveCount(0);
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
  await context.close();
});

test("introduction skips, restores access, runs once, and supports replay", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const dialog = page.getByRole("dialog", { name: "Gamoventure introduction" });
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Skip introduction" })).toBeFocused();
  await page.getByRole("button", { name: "Skip introduction" }).click();
  await expect(dialog).toHaveCount(0);
  await expect(page.locator(".site-frame")).not.toHaveAttribute("inert", "");
  await page.goto("/about");
  await page.goBack();
  await expect(page.locator("main h1")).toBeVisible();
  await expect(dialog).toHaveCount(0);
  const replay = page.getByRole("button", { name: "Replay Gamoventure brand animation" });
  await replay.click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(replay).toBeFocused();
});

test("video respects explicit sound and pause across scrolling", async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem("gamoventure:splash-seen", "true"));
  await page.goto("/");
  const video = page.locator(".egg-promo--cinema video");
  await video.scrollIntoViewIfNeeded();
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(false);
  await page.keyboard.press("Tab");
  await expect(video).toHaveJSProperty("muted", true);
  await page.getByRole("button", { name: "Enable sound", exact: true }).click();
  await expect(video).toHaveJSProperty("muted", false);
  await page.getByRole("button", { name: "Pause showcase" }).click();
  await expect(video).toHaveJSProperty("paused", true);
  await page.locator("footer").scrollIntoViewIfNeeded();
  await video.scrollIntoViewIfNeeded();
  await expect(video).toHaveJSProperty("paused", true);
  await page.getByRole("button", { name: "Play showcase" }).click();
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(false);
});

test("reduced motion leaves the introduction and marquee static but allows manual video", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".brand-splash")).toHaveCount(0);
  await expect(page.locator(".industry-marquee-track")).toHaveCSS("animation-name", "none");
  const video = page.locator(".egg-promo--cinema video");
  await video.scrollIntoViewIfNeeded();
  await expect(video).toHaveJSProperty("paused", true);
  await page.getByRole("button", { name: "Play showcase" }).click();
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.paused)).toBe(false);
});

test("marquee pause control exposes and changes its state", async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem("gamoventure:splash-seen", "true"));
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Pause scrolling" })).toHaveText("");
  await page.getByRole("button", { name: "Pause scrolling" }).click();
  await expect(page.getByRole("button", { name: "Resume scrolling" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".industry-marquee-track")).toHaveCSS("animation-play-state", "paused");
});
