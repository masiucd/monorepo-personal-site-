/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content

    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
