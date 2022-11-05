import {Barlow_Condensed, Open_Sans} from "@next/font/google"
import type {FontModule} from "next/font"

const barlowCondensed400: FontModule = Barlow_Condensed({
  weight: "400",
  variable: "--barlow-condensed-400",
})
const openSans400: FontModule = Open_Sans({
  weight: "400",
  variable: "--open-sans-400",
})

export {barlowCondensed400, openSans400}
