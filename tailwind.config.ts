import type { Config } from "tailwindcss"

const config = {

  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xs: { max: "639px" },
      },
    },
    extend: {
      colors: {
        observatory: {
        '50': '#f0f8ff',
        '100': '#e0f0fe',
        '200': '#b9e2fe',
        '300': '#7bccfe',
        '400': '#35b2fb',
        '500': '#0b99ec',
        '600': '#0079ca',
        '700': '#0167af',
        '800': '#055187',
        '900': '#0b446f',
        '950': '#072b4a',
        "10": "#edf5fb",
    },    
        'orage-strange': {
          "50": "#fff8ec",
          "100": "#fff0d3",
          "200": "#ffdda6",
          "300": "#ffc46d",
          "400": "#ff9f33",
          "500": "#ff820b",
          "600": "#f66601",
          "700": "#cb4b03",
          "800": "#a13b0b",
          "900": "#81320d",
          "950": "#461704",
          "10": "#FFFAF1",
          // "50": "#F7F9F9",
          // "100": "#dce9e2",
          // "200": "#a4f6da",
          // "300": "#6aebc7",
          // "400": "#2fd8ae",
          // "500": "#0abf99",
          // "600": "#009b7d",
          // "700": "#00856f",
          // "800": "#036252",
          // "900": "#045045",
          // "950": "#012d28",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
          foreground: "hsl(var(--destructive-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config