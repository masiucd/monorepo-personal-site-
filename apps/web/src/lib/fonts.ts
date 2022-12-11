import {Barlow_Condensed, Inter} from "@next/font/google"

const InterFont = Inter({
  variable: "--font-inter",
})

const BarlowFont = Barlow_Condensed({
  variable: "--font-mono",
  weight: ["400", "500", "600", "700", "800"],
})

export {BarlowFont, InterFont}
