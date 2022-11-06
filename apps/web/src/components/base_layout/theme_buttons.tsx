"use client"

import {useEffect, useState} from "react"
import {Laptop, Moon, Sun} from "ui"

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((value: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const storedItem = localStorage.getItem(key)
      return storedItem ? JSON.parse(storedItem) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const handleStoredValue = (value: T | ((value: T) => T)): void => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  return [storedValue, handleStoredValue]
}

function ThemeButtons() {
  const [theme, setTheme] = useLocalStorage<string>("theme", "light")

  const handleTheme = (theme: string) => {
    const nextTheme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme)
  }

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <div className="flex gap-2 ml-auto ">
      <button
        type="button"
        role="button"
        // className={` ${theme !== "light" ? "opacity-30" : "opacity-100"}`}
        onClick={() => {
          // setTheme("light")

          handleTheme("dark")
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
          handleTheme("light")
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
