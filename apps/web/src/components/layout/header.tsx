import {useMounted} from "hooks"
import Link from "next/link"
import {useTheme} from "next-themes"
import {Laptop, Moon, Sun} from "ui"

import List from "./list"
import Nav from "./nav"

function ThemeActions() {
  const {theme, setTheme} = useTheme()
  return (
    <List styles="ml-auto">
      <li>
        <button
          className={theme === "light" ? "opacity-100" : "opacity-25"}
          aria-label="Toggle Light Mode"
          type="button"
          onClick={() => {
            setTheme("light")
          }}
        >
          <Sun />
        </button>
      </li>
      <li>
        <button
          className={theme === "dark" ? "opacity-100" : "opacity-25"}
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => {
            setTheme("dark")
          }}
        >
          <Moon />
        </button>
      </li>
      <li>
        <button
          className={theme === "system" ? "opacity-100" : "opacity-25"}
          aria-label="Toggle System Mode"
          type="button"
          onClick={() => {
            setTheme("system")
          }}
        >
          <Laptop />
        </button>
      </li>
    </List>
  )
}

function Header() {
  const mounted = useMounted()
  return (
    <header className="min-h-[5rem]">
      <div className="fixed w-full p-0">
        <aside className="md:max-w-[120ch] mx-auto flex items-center">
          <Link href="/" className="flex pr-2">
            <strong>MCD</strong>
          </Link>
          <Nav />
          {mounted ? <ThemeActions /> : <div className="w-32 px-2" />}
        </aside>
      </div>
    </header>
  )
}

export default Header
