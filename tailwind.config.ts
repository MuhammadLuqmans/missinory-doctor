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
        "ink-2": "#3A3329",
        /** Long labels & captions — bumped contrast vs paper/bone for small caps & captions. */
        read: "#443C33",
        mute: "#5C554A",
        hair: "#D8CFBE",
        "hair-soft": "#E5DDCC",
        terra: "#B14A2C",
        "terra-deep": "#8A341B",
        moss: "#3F5E48",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        /** Reserved for `<code>` / data; UI labels use `sans` (Inter) */
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        container: "1240px",
        /** Comfortable measure for paragraphs (~68 characters). */
        measure: "42rem",
      },
      boxShadow: {
        /** Soft lift for photography & cards — reads like a printed plate. */
        story:
          "0 28px 56px -28px rgba(31, 27, 20, 0.14), 0 0 0 1px rgba(31, 27, 20, 0.05)",
        "story-sm":
          "0 16px 36px -20px rgba(31, 27, 20, 0.12), 0 0 0 1px rgba(31, 27, 20, 0.04)",
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
