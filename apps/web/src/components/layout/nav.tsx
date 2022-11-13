import {useToggle} from "hooks"
import {Menu as MenuIcon} from "ui"

import navlinksData from "~/static/nav_links.json"

import Animate from "../animate"
import NavLink from "../nav_link"
import List from "./list"
import Menu from "./menu"

export default function Nav() {
  const [on, {toggle}] = useToggle()

  return (
    <nav>
      <List styles="hidden sm:flex">
        {navlinksData.map(({name, href}) => (
          <li key={name} className="capitalize">
            <NavLink href={href}>{name}</NavLink>
          </li>
        ))}
      </List>
      <button
        type="button"
        className="block ml-2 sm:hidden z-50 relative"
        aria-label="Toggle Menu"
        onClick={toggle}
      >
        <MenuIcon
          on={on}
          pathStyle={on ? "stroke-blue-400" : "stroke-current"}
        />
      </button>
      <Animate on={on}>
        <Menu />
      </Animate>
    </nav>
  )
}
