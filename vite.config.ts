import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  test: {
    projects: [
      {
        extends: "./vite.config.ts",
        test: {
          name: "client",
          browser: {
            provider: playwright(),
            instances: [
              {
                browser: "chromium",
                headless: true,
              },
            ],
            enabled: true,
          },
          include: ["src/**/*.svelte.{test,spec}.ts"],
          exclude: ["src/lib/server/**"],
        },
      },

      {
        extends: "./vite.config.ts",
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.{test,spec}.ts"],
          exclude: ["src/**/*.svelte.{test,spec}.ts"],
        },
      },
    ],
  },
});
