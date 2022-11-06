"use client"
import {useMediaQuery} from "hooks"
import {tw} from "lib"
import {Menu} from "ui"

import {openSans400} from "~/lib/fonts"
import navLinks from "~/static/nav_links.json"

import NavLink from "../nav_link"

function renderNavItems(matches: boolean) {
  if (matches) {
    return navLinks.map(({name, href}) => (
      <li key={name} className="capitalize">
        <NavLink
          styles="hover:text-blue-500 hover:scale-105 inline-block"
          href={href}
        >
          {name}
        </NavLink>
      </li>
    ))
  }
  return (
    <li className="absolute top-1 right-2">
      <button>
        <Menu on={false} />
      </button>
    </li>
  )
}

export default function NavList() {
  const matches = useMediaQuery("(min-width: 620px)")
  return (
    <ul className={tw(`gap-5 md:px-5 px-2 flex `, openSans400.className)}>
      {renderNavItems(matches)}
    </ul>
  )
}
