/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a2b45",
          dark: "#0f1e35",
          light: "#213354",
        },
        teal: {
          DEFAULT: "#2b8a6e",
          light: "#3aab87",
          pale: "#e0f2ec",
          glow: "#5ecba5",
        },
        muted: "#5a6880",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(26, 43, 69, 0.08)",
        "card-hover": "0 12px 40px rgba(43, 138, 110, 0.15)",
        nav: "0 1px 0 rgba(255,255,255,0.08)",
        glow: "0 4px 20px rgba(43, 138, 110, 0.35)",
      },
      animation: {
        blink: "blink 2s infinite",
        "float-main": "float-main 6s ease-in-out infinite",
        "float-badge": "float-badge 5s ease-in-out infinite",
        "float-logo": "float-logo 4s ease-in-out infinite",
        "hero-in": "hero-in 0.9s ease-out both",
        "hero-float": "hero-float 6s ease-in-out 0.9s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "float-main": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-badge": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "float-logo": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-4px) scale(1.02)" },
        },
        "hero-in": {
          "0%": { opacity: "0", transform: "translateY(18px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "hero-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
