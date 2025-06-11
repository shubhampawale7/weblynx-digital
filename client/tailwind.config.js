// client/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Adjusted for .js and .jsx files
  ],
  theme: {
    extend: {
      // Define custom colors, fonts, or other theme extensions here
      // For example, if you want a specific primary color:
      colors: {
        primary: "#1a73e8",
        darkBg: "#121212",
        lightBg: "#ffffff",
        darkText: "#e0e0e0",
        lightText: "#333333",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example with a modern font
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable class-based dark mode
};
