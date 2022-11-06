import {tw} from "lib"

import {barlowCondensed400, openSans400} from "~/lib/fonts"
import navLinks from "~/static/nav_links.json"

import NavLink from "../nav_link"
import ThemeButtons from "./theme_buttons"

function Header() {
  return (
    <header className="flex justify-center items-center shadow mb-10">
      <div className="lg:max-w-[120ch] w-full flex items-center">
        <strong className="md:px-2">
          <NavLink
            styles={`text-3xl md:text-4xl ${barlowCondensed400.className}`}
            href="/"
          >
            M<span className="text-blue-500">ar</span>cell.
            <span className="text-blue-500">C</span>.D.com
          </NavLink>
        </strong>
        <nav className="border border-blue-500 min-h-[10rem] flex items-center justify-center ml-auto">
          <ul
            className={tw(
              "gap-5 md:px-5 px-2 hidden md:flex",
              openSans400.className
            )}
          >
            {navLinks.map(({name, href}) => (
              <li key={name} className="capitalize">
                <NavLink
                  styles="hover:text-blue-500 hover:scale-105 inline-block"
                  href={href}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeButtons
          theme={"dark"}
          // setTheme={(s: string) => {
          //   console.log("", s)
          // }}
        />
      </div>
    </header>
  )
}

export default Header
