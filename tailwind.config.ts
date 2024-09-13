/* eslint-disable unicorn/prefer-module */
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        toastBg: "hsl(var(--toast-bg))",
        toastBorder: "hsl(var(--toast-border))",
        defaultBadgeBg: "hsl(var(--default-badge-bg))",
        primaryBadgeBg: "hsl(var(--primary-badge-bg))",
        successBadgeBg: "hsl(var(--success-badge-bg))",
        errorBadgeBg: "hsl(var(--red-badge-bg))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        default: {
          DEFAULT: "hsl(var(--default))",
          foreground: "hsl(var(--default-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          hover: "hsl(var(--destructive-hover))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        subtle: {
          DEFAULT: "hsl(var(--subtle))",
          hover: "hsl(var(--subtle-hover))",
          foreground: "hsl(var(--subtle-foreground))",
        },
        loading: {
          DEFAULT: "hsl(var(--loading))",
          hover: "hsl(var(--loading-hover))",
          foreground: "hsl(var(--loading-foreground))",
        },
        outline: {
          DEFAULT: "hsl(var(--outline))",
          hover: "hsl(var(--outline-hover))",
          foreground: "hsl(var(--outline-foreground))",
        },
        link: {
          DEFAULT: "hsl(var(--link))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          "50": "hsl(var(--error-50))",
          "700": "hsl(var(--error-700))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          "50": "hsl(var(--success-50))",
          "700": "hsl(var(--success-700))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          "50": "hsl(var(--warning-50))",
        },
        neutral: {
          dark: {
            1: "hsl(var(--neutralColor-dark-1))",
            2: "hsl(var(--neutralColor-dark-2))",
          },
        },
        stroke: {
          "colors-stroke": "hsl(var(--stroke-colors-stroke))",
        },
        breadcrumb: {
          page: "hsl(var(--breadcrumb-page))",
          foreground: "hsl(var(--breadcrumb-foreground))",
        },
        desaturatedBlue: "hsl(var(--desaturated-blue))",
        grey50: "hsl(var(--grey50))",
        blog: {
          relatedBg: "hsl(var(--blog-related-article-bg))",
          relatedHeading: "hsl(var(--blog-related-article-heading))",
          relatedTimeReadBg: "hsl(var(--blog-related-article-timeread-bg))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        spread: "0px 1px 18px 0px #0A39B01F",
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
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@mertasan/tailwindcss-variables"),
  ],
} satisfies Config;

export default config;
