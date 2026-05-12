import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4EFE6",
        bone: "#FBF8F2",
        ink: "#1F1B14",
        "ink-2": "#43392E",
        mute: "#7A7468",
        hair: "#D8CFBE",
        "hair-soft": "#E5DDCC",
        terra: "#B14A2C",
        "terra-deep": "#8A341B",
        moss: "#3F5E48",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1240px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "progress-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(var(--progress))" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.2, 0.6, 0.2, 1) both",
        "progress-grow":
          "progress-grow 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) 0.15s both",
      },
    },
  },
  plugins: [],
};

export default config;
