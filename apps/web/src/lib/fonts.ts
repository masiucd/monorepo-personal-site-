import {Barlow, Barlow_Condensed} from "@next/font/google"
import type {FontModule} from "next/font"

const barlow400: FontModule = Barlow({
  weight: "400",
})
const barlowCondensed400: FontModule = Barlow_Condensed({weight: "400"})

export {barlow400, barlowCondensed400}
