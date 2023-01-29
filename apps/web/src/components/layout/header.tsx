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
      <div className=" mx-auto flex justify-between py-3 fixed top-0 z-50 w-full transition-all bg-slate-50 dark:bg-black">
        <div className="max-w-4xl mx-auto flex justify-between w-full  dark:bg-black bg-slate-50 shadow-sm pb-2">
          {/* <nav className="fixed border border-red-500 top-0 left-1/2 transform translate-x-2/4 z-50 flex justify-around w-full"> */}
          <nav>
            {matches ? (
              <ul className="flex gap-5 h-full items-center">
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
          <div className="border-2 border-slate-900 rounded-full flex items-center justify-center w-10 h-10 bg-zinc-900 dark:bg-zinc-50 shadow-sm mr-2 md:mr-0 z-20">
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
