import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#072E28',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#A0E870',
  				foreground: '#072E28'
  			},
  			background: '#F0F0F0',
  			cards: '#FFFFFF',
  			body: '#666666',
  			header: '#2B2B2B',
  			
  			// Standard fallbacks to ensure existing components don't break
  			foreground: '#666666',
  			card: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#2B2B2B'
  			},
  			popover: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#2B2B2B'
  			},
  			muted: {
  				DEFAULT: '#E5E5E5',
  				foreground: '#666666'
  			},
  			accent: {
  				DEFAULT: '#A0E870',
  				foreground: '#072E28'
  			},
  			destructive: {
  				DEFAULT: '#EF4444',
  				foreground: '#FFFFFF'
  			},
  			border: '#D4D4D4',
  			input: '#D4D4D4',
  			ring: '#072E28'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
