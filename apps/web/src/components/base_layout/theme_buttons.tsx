"use client"

import {Laptop, Moon, Sun} from "ui"

function ThemeButtons() {
  // const theme = "dark"
  // const setTheme = (theme: string) => ""
  return (
    <div className="flex gap-2 ml-auto md:ml-0 ">
      <button
        type="button"
        role="button"
        // className={` ${theme !== "light" ? "opacity-30" : "opacity-100"}`}
        onClick={() => {
          // setTheme("light")
          document.documentElement.classList.remove("light")
          document.documentElement.classList.add("dark")
        }}
      >
        <Sun width={25} height={25} />
      </button>

      <button
        type="button"
        role="button"
        // className={` ${theme !== "dark" ? "opacity-30" : "opacity-100"}`}
        onClick={() => {
          // setTheme("dark")
          document.documentElement.classList.remove("dark")
          document.documentElement.classList.add("light")
        }}
      >
        <Moon width={25} height={25} />
      </button>
      <button
        type="button"
        role="button"
        // className={` ${theme !== "system" ? "opacity-30" : "opacity-100"}`}
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
