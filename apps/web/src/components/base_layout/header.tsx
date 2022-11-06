import {barlowCondensed400} from "~/lib/fonts"

import NavLink from "../nav_link"
import Nav from "./nav"
import ThemeButtons from "./theme_buttons"

function Header() {
  return (
    <header className="grid shadow">
      <div className="lg:max-w-[120ch] w-full flex items-center m-auto relative">
        <strong className="md:px-2">
          <NavLink
            styles={`text-3xl md:text-4xl ${barlowCondensed400.className}`}
            href="/"
          >
            M<span className="text-blue-500">ar</span>cell.
            <span className="text-blue-500">C</span>.D.com
          </NavLink>
        </strong>
        <Nav />
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
