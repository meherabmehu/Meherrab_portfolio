import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d2922",
        muted: "#627067",
        surface: "#f5f6f2",
        surface2: "#ecefe8",
        card: "#ffffff",
        border: "#dce2da",
        accent: "#52765b",
        accent2: "#78947a",
        accent3: "#3b6045",
      },
      fontFamily: {
        sans: ["Inter Variable", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 54% at 50% 0%, rgba(120,148,122,0.16) 0%, rgba(207,218,202,0.18) 42%, rgba(245,246,242,0) 76%)",
        "accent-gradient": "linear-gradient(120deg, #3b6045 0%, #66866a 100%)",
      },
      boxShadow: {
        glow: "0 14px 40px -24px rgba(59,96,69,0.42)",
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
