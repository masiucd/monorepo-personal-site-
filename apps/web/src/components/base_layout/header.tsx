import {tw} from "lib"
import {Laptop, Moon, Sun} from "ui"

import {barlowCondensed400, openSans400} from "~/lib/fonts"
import navLinks from "~/static/nav_links.json"

import NavLink from "../nav_link"

function Header() {
  return (
    <header>
      {/* max-lg:bg-red-500 */}
      <div className="lg:max-w-[75%] flex items-center m-auto">
        <strong className="md:px-2">
          <NavLink
            styles={`text-3xl md:text-4xl ${barlowCondensed400.className}`}
            href="/"
          >
            M<span className="text-blue-500">ar</span>cell.
            <span className="text-blue-500">C</span>.D.com
          </NavLink>
        </strong>
        <nav className="border border-blue-500 min-h-[10rem] flex items-center ml-auto">
          <ul className={tw("flex gap-5 md:px-5 px-2", openSans400.className)}>
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
        <ul className="flex gap-5 md:px-5 px-2">
          <li>
            <button>
              <Moon />
            </button>
          </li>
          <li>
            <button>
              <Sun />
            </button>
          </li>
          <li>
            <button>
              <Laptop />
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
