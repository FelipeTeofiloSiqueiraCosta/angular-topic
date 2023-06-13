/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      "background-light": "#F8F8F8",
      "background-dark": "#0E172A",
      "title-light": "#000",
      "title-dark": "#6466F1",

      "text-light": "#000",
      "text-dark": "#E5E7EB",
      "orange-300": "rgb(253 186 116)",
      "fuchsia-400": "rgb(232 121 249)",
      "blue-300": "rgb(96 165 250)",
    },
    fontFamily: {
      sans: ["Bubbler One", "Roboto", "Arial", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
};
