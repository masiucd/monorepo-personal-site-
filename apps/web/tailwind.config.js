// /** @type {import('tailwindcss').Config} */
const config = require("tailwind-config/tailwind.config")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  ...config,
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-dark": "url('../public/images/blackgrit.png')",
        "hero-light": "url('../public/images/whitegrit.png')",
      },
    },
    fontFamily: {
      // display: ["Operator Mono", ...defaultTheme.fontFamily.mono],
      // mono: ["HCo Operator Mono", ...defaultTheme.fontFamily.mono],
      // display: ["Barlow Condensed", ...defaultTheme.fontFamily.mono],
      body: ["Open Sans", ...defaultTheme.fontFamily.serif],
    },
  },
  // },
  plugins: [require("@tailwindcss/typography")],
}
