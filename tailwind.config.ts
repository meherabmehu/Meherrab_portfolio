import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#e7ede7",
        muted: "#9aa79d",
        surface: "#0b0d0c",
        surface2: "#141916",
        card: "#171d19",
        border: "#29332d",
        accent: "#8fbf6d",
        accent2: "#a8d07f",
        accent3: "#d2a46e",
      },
      fontFamily: {
        sans: ["Inter Variable", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(143,191,109,0.16) 0%, rgba(76,111,73,0.08) 48%, rgba(11,13,12,0) 76%)",
        "accent-gradient": "linear-gradient(120deg, #628c4d 0%, #8fbf6d 100%)",
      },
      boxShadow: {
        glow: "0 14px 40px -20px rgba(143,191,109,0.42)",
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
