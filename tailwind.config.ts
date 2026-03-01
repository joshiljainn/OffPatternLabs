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
        background: "#FDFBF7",
        foreground: "#0B132B",
        accent: "#E07A5F",       // burnt orange
        "retro-cream": "#FDFBF7",
        "retro-navy": "#0B132B",
        "retro-orange": "#E07A5F",
        "retro-green": "#5E7B52",
        olive: "#5A6B4D",
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        display: ["Clash Display", "Space Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        retro: "8px 8px 0px #111",
        "retro-sm": "6px 6px 0px #111",
        "retro-xs": "4px 4px 0px #111",
        "retro-navy": "8px 8px 0px #0B132B",
        "retro-navy-sm": "6px 6px 0px #0B132B",
      },
      borderRadius: {
        retro: "16px",
        "retro-lg": "24px",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(-3deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
