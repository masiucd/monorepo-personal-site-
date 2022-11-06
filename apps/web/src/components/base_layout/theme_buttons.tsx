"use client"

import {Laptop, Moon, Sun} from "ui"

type Props = {
  // setTheme: (theme: string) => void
  theme: string | undefined
}
function ThemeButtons({theme}: Props) {
  return (
    <div className="flex ">
      <button
        type="button"
        role="button"
        className={`px-1 ${theme !== "light" ? "opacity-30" : "opacity-100"}`}
        onClick={() => {
          // setTheme("light")
        }}
      >
        <Sun width={25} height={25} />
      </button>

      <button
        type="button"
        role="button"
        className={`px-1 ${theme !== "dark" ? "opacity-30" : "opacity-100"}`}
        onClick={() => {
          // setTheme("dark")
        }}
      >
        <Moon width={25} height={25} />
      </button>
      <button
        type="button"
        role="button"
        className={`px-1 ${theme !== "system" ? "opacity-30" : "opacity-100"}`}
        onClick={() => {
          // setTheme("system")
        }}
      >
        <Laptop width={25} height={25} />
      </button>
    </div>
  )
}

export default ThemeButtons
