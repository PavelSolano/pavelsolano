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
        bg: "#f8f8f6",
        card: "#ffffff",
        card2: "#f3f3f0",
        border: "#e8e8e4",
        border2: "#d8d8d4",
        teal: "#0ba89a",
        "teal-soft": "#14b8a6",
        ink: "#0d0d0d",
        ink2: "#2a2a2a",
        muted: "#8a8a88",
        muted2: "#b8b8b4",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
