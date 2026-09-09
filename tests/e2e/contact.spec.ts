import { expect, test } from "@playwright/test";

test("contact choices update phone validation and allow clearing the budget", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/contact");
  const phone = page.locator("#phone");
  const method = page.getByLabel("Preferred contact method", { exact: true });
  await expect(phone).not.toHaveAttribute("required", "");
  for (const choice of ["WhatsApp", "Telephone"]) {
    await method.selectOption(choice);
    await expect(phone).toHaveAttribute("required", "");
    await expect.poll(() => phone.evaluate((element: HTMLInputElement) => element.checkValidity())).toBe(false);
  }
  await method.selectOption("Email");
  await expect(phone).not.toHaveAttribute("required", "");
  const budget = page.locator("#budget");
  await budget.selectOption("Prefer to discuss");
  await budget.selectOption("");
  await expect(budget).toHaveValue("");
});

test("non-JSON contact failure preserves fields and offers a recovery message", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.route("**/api/contact", (route) => route.fulfill({ status: 502, contentType: "text/html", body: "<h1>Bad gateway</h1>" }));
  await page.goto("/contact");
  await page.locator("#name").fill("Browser Test");
  await page.locator("#business").fill("Example Business");
  await page.locator("#email").fill("browser@example.com");
  await page.locator("#need").fill("We need an accessible website for our existing business.");
  await page.locator("#consent").check();
  await page.getByRole("button", { name: "Send inquiry" }).click();
  await expect(page.getByRole("status")).toContainText("could not confirm delivery");
  await expect(page.locator("#name")).toHaveValue("Browser Test");
  await expect(page.locator("#email")).toHaveValue("browser@example.com");
  await expect(page.locator("#need")).toHaveValue("We need an accessible website for our existing business.");
  await expect(page.locator("#consent")).toBeChecked();
  await expect(page.getByRole("button", { name: "Send inquiry" })).toBeEnabled();
});
