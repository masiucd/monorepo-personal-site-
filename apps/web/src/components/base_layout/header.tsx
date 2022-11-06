import {Menu} from "ui"

import Nav from "./nav"
import ThemeButtons from "./theme_buttons"

function Header() {
  return (
    <header className="grid min-h-[4rem] max-h-[5rem]">
      <div className="lg:max-w-[120ch] w-full flex m-auto px-6 md:px-2">
        {/*  */}
        {/* TODO Custom icon */}
        {/*  */}
        <button
          aria-label="Toggle menu"
          type="button"
          className="block md:hidden"
        >
          <Menu on={false} />
        </button>
        <Nav />
        <ThemeButtons />
      </div>
    </header>
  )
}

export default Header
