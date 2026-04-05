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
        background: "#FDFCF8",
        foreground: "#1A1A1A",
        primary: "#E03E3E",
        "primary-hover": "#C43535",
        secondary: "#1A1A1A",
        muted: "#6B6B6B",
        "muted-light": "#9B9B9B",
        border: "#E5E5E0",
        "card-bg": "#FFFFFF",
        cream: "#FDFCF8",
        "light-gray": "#F5F5F0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Clash Display", "Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};

export default config;
