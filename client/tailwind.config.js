// client/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-dark": "#0D1B2A",
        "brand-dark-blue": "#1B263B",
        "brand-light-blue": "#415A77",
        "brand-gray": "#778DA9",
        "brand-bg": "#E0E1DD",
        "brand-accent": "#00F5D4",
        "brand-accent-hover": "#00DFC4",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      animation: {
        scroll: "scroll 60s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-50% - 2rem))" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      typography: ({ theme }) => ({
        brand: {
          css: {
            "--tw-prose-body": theme("colors.brand-light-blue"),
            "--tw-prose-headings": theme("colors.brand-dark"),
            "--tw-prose-links": theme("colors.brand-accent"),
            "--tw-prose-bold": theme("colors.brand-dark"),
            "--tw-prose-bullets": theme("colors.brand-accent"),
            "--tw-prose-hr": theme("colors.brand-light-blue / 20%"),
            "--tw-prose-quotes": theme("colors.brand-dark"),
            "--tw-prose-quote-borders": theme("colors.brand-accent"),
            "--tw-prose-pre-code": theme("colors.brand-bg"),
            "--tw-prose-pre-bg": theme("colors.brand-dark-blue"),

            "--tw-prose-invert-body": theme("colors.brand-gray"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-links": theme("colors.brand-accent"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-bullets": theme("colors.brand-accent"),
            "--tw-prose-invert-hr": theme("colors.brand-light-blue / 20%"),
            "--tw-prose-invert-quotes": theme("colors.white"),
            "--tw-prose-invert-quote-borders": theme("colors.brand-accent"),
            "--tw-prose-invert-pre-code": theme("colors.brand-bg"),
            "--tw-prose-invert-pre-bg": theme("colors.brand-dark-blue"),

            "h1, h2, h3, h4, h5, h6": {
              fontFamily: theme("fontFamily.display"),
              color: "var(--tw-prose-headings)",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
