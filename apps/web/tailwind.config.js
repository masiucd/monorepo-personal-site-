// /** @type {import('tailwindcss').Config} */
const config = require("tailwind-config/tailwind.config")
// const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  ...config,
  darkMode: "class",
  // theme: {
  //   extend: {},
  // backgroundImage: {
  //   "hero-1": "url('../public/img/blackgrit.png')",
  //   "hero-2": "url('../public/img/whitegrit.png')",
  //   header: "url('../public/header-background.svg')",
  // },
  // fontFamily: {
  //   // display: ["Operator Mono", ...defaultTheme.fontFamily.mono],
  //   // mono: ["HCo Operator Mono", ...defaultTheme.fontFamily.mono],
  //   display: ["Barlow Condensed", ...defaultTheme.fontFamily.mono],
  //   body: ["Barlow", ...defaultTheme.fontFamily.serif],
  // },
  // },
  plugins: [require("@tailwindcss/typography")],
}
