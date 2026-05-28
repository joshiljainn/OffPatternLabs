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
        background: "#09090b",
        foreground: "#fafafa",
        primary: "#22c55e",
        "primary-hover": "#16a34a",
        secondary: "#18181b",
        muted: "#a1a1aa",
        "muted-light": "#71717a",
        border: "#27272a",
        "card-bg": "#09090b",
        cream: "#09090b",
        "light-gray": "#18181b",
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
