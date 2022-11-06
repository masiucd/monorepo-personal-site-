import {tw} from "lib"

import {openSans400} from "~/lib/fonts"
import navLinks from "~/static/nav_links.json"

import NavLink from "../nav_link"

function Nav() {
  return (
    <nav className="hidden md:flex items-center justify-center mr-auto">
      <ul className={tw(`flex gap-5 md:px-5 px-2`, openSans400.className)}>
        {navLinks.map(({name, href}) => (
          <li key={name} className="capitalize ">
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
  )
}

export default Nav
