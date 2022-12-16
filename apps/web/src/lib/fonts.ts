import {IBM_Plex_Mono, Inter} from "@next/font/google"

const MainFont = Inter({
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

const SecondaryFont = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export {MainFont, SecondaryFont}
