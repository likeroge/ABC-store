const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "481px",
      // => @media (min-width: 768px) { ... }

      lg: "769px",
      // => @media (min-width: 1024px) { ... }

      xl: "1025px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1201px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
