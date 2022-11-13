import {useMounted} from "hooks"
import {useTheme} from "next-themes"
import {Laptop, Moon, Sun} from "ui"

import List from "./list"
import Nav from "./nav"

function ThemeActions() {
  const {theme, setTheme} = useTheme()
  return (
    <List>
      <li>
        <button
          className={theme === "light" ? "opacity-100" : "opacity-25"}
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
    <header className="min-h-[10ch]">
      {/* TODO logo */}
      <div className="md:max-w-[140ch] m-auto flex items-center justify-between">
        <Nav />
        {mounted ? <ThemeActions /> : <div className="w-32 px-2" />}
      </div>
    </header>
  )
}

export default Header
