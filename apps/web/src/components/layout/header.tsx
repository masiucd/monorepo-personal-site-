import {useMediaQuery, useMounted} from "lib"
import {useTheme} from "next-themes"
import {Moon, Sun} from "ui"

import NavLink from "~/components/common/nav_link"
import navLinks from "~/config/nav_links.json"

import MobileMenu from "./mobile_menu"

export default function Header() {
  const {theme, setTheme} = useTheme()
  const mounted = useMounted()
  const matches = useMediaQuery("(min-width: 768px)")

  return (
    <header className="relative pb-12">
      <div className="fixed top-0 z-50 mx-auto flex w-full justify-between bg-transparent py-3 backdrop-blur-sm transition-all ">
        <div className="mx-auto flex w-full max-w-4xl justify-between p-2 backdrop-blur-sm ">
          <nav>
            {matches ? (
              <ul className="flex h-full items-center gap-5">
                {navLinks.map(({name, path}) => (
                  <li key={name}>
                    <NavLink href={path}>{name}</NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <MobileMenu />
            )}
          </nav>
          <div className="z-20 mr-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-zinc-900 shadow-sm dark:bg-zinc-50 md:mr-0">
            {mounted && (
              <button
                type="button"
                aria-label="Toggle Theme Mode"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light")
                }}
              >
                {mounted && theme === "dark" ? <Sun /> : <Moon />}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
