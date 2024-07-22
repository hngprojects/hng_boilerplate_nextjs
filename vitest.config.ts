import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(import.meta.dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    reporters: ["default", "html"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.react-email/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
    ],
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
