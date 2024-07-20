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
        neutral_dark_1: "#0A0A0A",
        neutral_dark_2: "#525252",
        black_900: "#080808",
        black_300: "#626262",
        slate_900: "#0F172A",
        slate_100: "#F1F5F9",
        stroke_dashboard: "#CBD5E1",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        error: "hsl(var(--error))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
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
      },
      borderRadius: {
        lg: "12px",
        md: "6px",
        sm: "4px",
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
      boxShadow: {
        'custom-light': '0px 1px 18px 0px rgba(10, 57, 176, 0.12)',
      },
    }
  },
  // eslint-disable-next-line unicorn/prefer-module
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
