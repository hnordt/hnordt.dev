import { defineConfig } from "@playwright/test";

export default defineConfig({
  testMatch: "**/*.e2e.ts",
  webServer: {
    command: "npm run build && npm run preview",
    port: 4173,
  },
});
