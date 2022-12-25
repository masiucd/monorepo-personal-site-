const config = require("tailwind-config/tailwind.config")
const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        // hero: "url('../public/images/header-background.svg')",
        // "hero-dark": "url('../public/images/header-background-dark.svg')",
        hero: "url('../../public/images/header-background.svg')",
        "hero-dark": "url('../../public/images/header-background-dark.svg')",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.serif],
        mono: ["IBM Plex Mono", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
