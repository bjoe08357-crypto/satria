import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1200px",
        },
      },
      colors: {
        surface: "#F6F7FB",
        surfaceAlt: "#FFFFFF",
        ink: "#1A1C22",
        subink: "#4B5563",
        primary: "#FFB200",
        accent: "#FF6A00",
        rose: "#FF3D6E",
      },
      backgroundImage: {
        "garuda-light": "linear-gradient(135deg,#FFE38A 0%,#FFB200 35%,#FF6A00 70%,#FF3D6E 100%)",
        "satria-mist": "radial-gradient(60% 40% at 20% 0%,rgba(255,178,0,.18),transparent 60%),radial-gradient(60% 40% at 80% 20%,rgba(255,61,110,.12),transparent 60%)",
      },
      borderRadius: {
        xl2: "14px",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(17,24,39,.06)",
        ring: "0 0 0 1px rgba(17,24,39,.06),0 8px 20px rgba(17,24,39,.08)",
        glow: "0 0 24px rgba(255,178,0,.25)",
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        grotesk: ['var(--font-grotesk)'],
      },
      maxWidth: {
        content: "72ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
