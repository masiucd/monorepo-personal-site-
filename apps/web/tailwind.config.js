const config = require("tailwind-config/tailwind.config")
const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  darkMode: "class",
  theme: {
    extend: {
      // backgroundImage: {
      //   "hero-dark": "url('../public/img/blackgrit.png')",
      //   "hero-light": "url('../public/img/whitegrit.png')",
      // },
      fontFamily: {
        // display: ["Operator Mono", ...defaultTheme.fontFamily.mono],
        // mono: ["HCo Operator Mono", ...defaultTheme.fontFamily.mono],
        // display: ["Barlow Condensed", ...defaultTheme.fontFamily.mono],
        // display: ["Inter", ...defaultTheme.fontFamily.serif],
        // body: ["Inter", ...defaultTheme.fontFamily.serif],
        sans: ["Inter", ...fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
