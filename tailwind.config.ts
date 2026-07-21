import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#e7ebf3",
        muted: "#94a3b8",
        surface: "#0b1120",
        surface2: "#111a2e",
        card: "#131d33",
        border: "#1f2c47",
        accent: "#5b8def",
        accent2: "#8b6cf1",
        accent3: "#35d0c8",
      },
      fontFamily: {
        sans: ["Inter Variable", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(91,141,239,0.25) 0%, rgba(139,108,241,0.12) 40%, rgba(11,17,32,0) 70%)",
        "accent-gradient": "linear-gradient(90deg, #5b8def 0%, #8b6cf1 50%, #35d0c8 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(91,141,239,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
