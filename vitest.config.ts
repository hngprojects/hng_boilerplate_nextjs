import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import magicalSvg from 'vite-plugin-magical-svg'

export default defineConfig({
  plugins: [react(),
  magicalSvg({
    // By default, the output will be a dom element (the <svg> you can use inside the webpage).
    // You can also change the output to react (or any supported target) to get a component you can use.
    // target: 'preact',
    target: 'react',

    // By default, the svgs are optimized with svgo. You can disable this by setting this to false.
    svgo: false,

    // By default, width and height set on SVGs are not preserved.
    // Set to true to preserve `width` and `height` on the generated SVG.
    preserveWidthHeight: false,

    // *Experimental* - set the width and height on generated SVGs.
    // If used with `preserveWidthHeight`, will only apply to SVGs without a width/height.
    setWidthHeight: { width: '24', height: '24' },

    // *Experimental* - replace all instances of `fill="..."` and `stroke="..."`.
    // Set to `true` for 'currentColor`, or use a text value to set it to this value.
    // Disabled by default.
    setFillStrokeColor: true,

    // *Experimental* - if a SVG comes with `width` and `height` set but no `viewBox`,
    // assume the viewbox is `0 0 {width} {height}` and add it to the SVG.
    // Disabled by default.
    restoreMissingViewBox: true,
  })
  ],
 
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
  resolve: {
    alias: {
      "~": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
