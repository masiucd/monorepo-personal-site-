// import {barlowCondensed400} from "~/lib/fonts"

// import NavLink from "../nav_link"
import {Menu} from "ui"

import Nav from "./nav"
import ThemeButtons from "./theme_buttons"

function Header() {
  return (
    <header className="grid py-2">
      <div className="lg:max-w-[120ch] w-full flex m-auto">
        {/*  */}
        {/* TODO Custom icon */}
        {/*  */}
        <button
          aria-label="Toggle menu"
          type="button"
          className="block md:hidden"
        >
          <Menu on />
        </button>
        <Nav />
        <ThemeButtons />
      </div>
    </header>
  )
}

export default Header
