import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: "#075B40",
          forest: "#063D2D",
          light: "#0A7854",
          subtle: "#E8F5EF",
          red: "#E52432",
          yellow: "#F6B72C",
          charcoal: "#202521",
          offwhite: "#F7F8F4",
          surface: "#FAFAF7",
          border: "#E2E8E4",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
        card: "0 8px 30px rgba(6, 61, 45, 0.06)",
        hover: "0 14px 40px rgba(6, 61, 45, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
