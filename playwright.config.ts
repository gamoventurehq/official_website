import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  outputDir: "/tmp/gamoventure-e2e-results",
  reporter: "list",
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: "http://localhost:3012",
    browserName: "chromium",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1280, height: 800 } } },
    { name: "iphone", use: { viewport: { width: 375, height: 667 }, isMobile: true, hasTouch: true } },
  ],
  webServer: {
    command: "npm run start -- --port 3012",
    url: "http://localhost:3012",
    reuseExistingServer: false,
    timeout: 60000,
  },
});
