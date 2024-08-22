/* eslint-disable unicorn/prefer-module */
/**
 *
 * THIS IS A TEST CONFIGUARATION FOR EMAIL-TEMPLETES
 * DURING DEVELOPMENT WE NOTICED THAT, THE EMAIL TEMPLATE COMPONENTS DOES NOT REFLECT THE TAILWIND VARIABLES BEEN PASSED INTO THE CLASSNAMES E.G
 *      =================================
 *      neutral: {
          dark: {
            1: "hsl(var(--neutralColor-dark-1))",
            2: "hsl(var(--neutralColor-dark-2))",
          },
        },
        =================================
        INSTEAD IT ACCEPTS:
        =================================
         neutral: {
          dark: {
            1: "hsl(0, 0%, 32%)",
            2: "hsl(0, 0%, 4%)",
          },
        },
        =================================

        HENCE THE CREATION OF THIS FILE HERE..IT DOES FEEL REDUNDANT, BUT TO ACCEPT A UNIFIRM DESIGN CONSISTENCY WITHT THE APP.
 */

import type { Config } from "tailwindcss";

export const emailTemplateConfig = {
  darkMode: ["class"],
  content: [],
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
        border: "hsl(214, 32%, 91%)",
        input: "hsl(214, 32%, 91%)",
        ring: "hsl(222.2, 84%, 4.9%)",
        toastBg: "hsl(128, 50%, 94%)",
        toastBorder: "hsl(126, 50%, 58%)",
        defaultBadgeBg: "hsla(222, 47%, 11%, 0.1)",
        primaryBadgeBg: "hsla(25, 95%, 53%, 0.1)",
        successBadgeBg: "hsla(102, 51%, 52%, 0.1)",
        errorBadgeBg: "hsla(0, 72%, 51%, 0.1)",
        background: "hsl(0, 0%, 98%)",
        foreground: "hsl(222.2, 84%, 4.9%)",
        default: {
          DEFAULT: "hsl(222, 47%, 11%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        primary: {
          DEFAULT: "hsl(25, 95%, 53%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(210, 40%, 96.1%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          hover: "hsl(0, 72%, 51%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        subtle: {
          DEFAULT: "hsl(210, 40%, 96%)",
          hover: "hsl(214, 32%, 91%)",
          foreground: "hsl(222, 47%, 11%)",
        },
        loading: {
          DEFAULT: "hsl(222, 47%, 11%)",
          hover: "hsl(215, 25%, 27%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        outline: {
          DEFAULT: "hsl(0, 0%, 100%)",
          hover: "hsl(210, 40%, 96%)",
          foreground: "hsl(222, 47%, 11%)",
        },
        link: "hsl(222, 47%, 11%)",
        muted: {
          DEFAULT: "hsl(210, 40%, 96.1%)",
          foreground: "hsl(215.4, 16.3%, 46.9%)",
        },
        accent: {
          DEFAULT: "hsl(210, 40%, 96.1%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222.2, 84%, 4.9%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222.2, 84%, 4.9%)",
        },
        error: {
          DEFAULT: "hsl(0, 72%, 51%)",
          "50": "hsl(0, 85%, 95%)",
          "700": "hsl(0, 90%, 34%)",
        },
        success: {
          DEFAULT: "hsl(102, 51%, 52%)",
          "50": "hsl(128, 50%, 94%)",
          "700": "hsl(126, 84%, 26%)",
        },
        warning: {
          DEFAULT: "hsl(45, 93%, 47%)",
          "50": "hsl(25, 100%, 98%)",
        },
        neutral: {
          dark: {
            1: "hsl(0, 0%, 32%)",
            2: "hsl(0, 0%, 4%)",
          },
        },
        stroke: {
          "colors-stroke": "hsl(213, 27%, 84%)",
        },
        breadcrumb: {
          page: "hsl(0, 0%, 42%)",
          foreground: "hsl(0, 0%, 13%)",
        },
        desaturatedBlue: "hsl(212.73, 26.83%, 83.92%)",
        grey50: "hsl(0, 0%, 85.1%)",
        blog: {
          relatedBg: "hsl(0, 0%, 98%)",
          relatedHeading: "hsl(0, 0%, 32%)",
          relatedTimeReadBg: "hsl(220, 14%, 96%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
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
