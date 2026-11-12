import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#ffffff",
        muted: "#ffffffb8",
        surface: "#00040f",
        surface2: "#111a2e",
        card: "#0a1020",
        border: "#ffffff1f",
        accent: "#5ce1e6",
        accent2: "#9dedf0",
        accent3: "#33bbcf",
      },
      fontFamily: {
        sans: ["Inter Variable", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 54% at 50% 0%, rgba(92,225,230,0.15) 0%, rgba(33,77,118,0.12) 42%, rgba(0,4,15,0) 76%)",
        "accent-gradient": "linear-gradient(120deg, #33bbcf 0%, #5ce1e6 100%)",
      },
      boxShadow: {
        glow: "0 14px 48px -22px rgba(92,225,230,0.48)",
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
