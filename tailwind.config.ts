import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '24px',
        'xl': '30px',
      },
      colors: {
        primary: "#F97316",
        neutral_dark_1: "#0A0A0A",
        neutral_dark_2: "#525252",
        black_900: "#080808",
        black_300: "#626262",
        slate_900: "#0F172A",
      },
      borderRadius: {
        md: "12px",
        sm: "6px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    }
  },
  // eslint-disable-next-line unicorn/prefer-module
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
