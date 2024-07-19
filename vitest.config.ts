import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    reporters: ["default", "html"],
    coverage: {
      enabled: true,
      exclude: ["node_modules/", "src/test/", "src/main.tsx"],
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      provider: "istanbul",
      reporter: ["text", "json-summary", "json", "html"],
      reportOnFailure: true,
    },
  },
});
