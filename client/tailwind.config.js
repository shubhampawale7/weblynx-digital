// client/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // --- A new, professional color palette ---
      colors: {
        "brand-dark": "#0D1B2A",
        "brand-dark-blue": "#1B263B",
        "brand-light-blue": "#415A77",
        "brand-gray": "#778DA9",
        "brand-bg": "#E0E1DD",
        "brand-accent": "#00F5D4",
        "brand-accent-hover": "#00DFC4",
      },
      // --- Professional and readable font pairings ---
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },

      // --- ADD THIS ---
      animation: {
        scroll: "scroll 60s linear infinite",
      },
      keyframes: {
        scroll: {
          to: { transform: "translateX(calc(-50% - 0.75rem))" },
        },
      },
      // --- END ADD ---
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
