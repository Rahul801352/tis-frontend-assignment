import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tis: {
          crimson: {
            DEFAULT: "#b90124",
            50: "#fdf2f4",
            100: "#fbe6e9",
            200: "#f7d0d6",
            300: "#f0aab6",
            400: "#e6768a",
            500: "#d94260",
            600: "#b90124",
            700: "#96001d",
            800: "#7c031b",
            900: "#69071b",
            950: "#3c000c",
          },
          teal: {
            DEFAULT: "#60bab1",
            50: "#f1f9f8",
            100: "#dcf0ee",
            200: "#bee2e4",
            300: "#90ccd0",
            400: "#60bab1",
            500: "#449e96",
            600: "#357e79",
            700: "#2d6662",
            800: "#275250",
            900: "#244543",
          },
          gold: {
            DEFAULT: "#c09d59",
            50: "#fbf8f0",
            100: "#f6eedb",
            200: "#ecdab5",
            300: "#e0c087",
            400: "#d4a75b",
            500: "#c09d59",
            600: "#a97834",
            700: "#86582a",
            800: "#6f4627",
            900: "#5c3a24",
          },
          dark: {
            bg: "#0b0f17",
            surface: "#111827",
            card: "#161f30",
            border: "#1f2d45",
            muted: "#94a3b8",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 5s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        }
      },
    },
  },
  plugins: [],
};

export default config;
