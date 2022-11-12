import {useMounted} from "hooks"
import Link from "next/link"
import {useTheme} from "next-themes"
import {Laptop, Moon, Sun} from "ui"

import navlinksData from "~/static/nav_links.json"

type Props = {
  children: React.ReactNode
}

function List({children}: Props) {
  return <ul className="flex gap-3 py-2 md:px-2">{children}</ul>
}

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
        <nav>
          <List>
            {navlinksData.map(({name, href}) => (
              <li key={name} className="capitalize">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </List>
        </nav>
        {mounted ? <ThemeActions /> : <div className="w-32 px-2" />}
      </div>
    </header>
  )
}

export default Header
