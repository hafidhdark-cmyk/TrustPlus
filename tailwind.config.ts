import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E1B5B",
          dark: "#14123E",
          deep: "#0F0D33",
          light: "#2A2775",
        },
        sky: {
          DEFAULT: "#3CA9E2",
          light: "#64BCF4",
          dark: "#268DC2",
        },
        red: {
          DEFAULT: "#C8262D",
          dark: "#A31B21",
        },
        ink: {
          DEFAULT: "#12142B",
          muted: "#4A5268",
          subtle: "#717B94",
        },
        brandBg: "#F5F7FB",
        paleBlue: "#E6F2FB",
        brandBorder: "#DDE3EE",
        waGreen: {
          DEFAULT: "#0F7B3F",
          hover: "#0B6332",
        },
      },
      fontFamily: {
        serif: ["'Lora'", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
