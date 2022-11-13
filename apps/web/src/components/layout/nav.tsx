import navlinksData from "~/static/nav_links.json"

import NavLink from "../nav_link"
import List from "./list"

export default function Nav() {
  return (
    <nav>
      <List>
        {navlinksData.map(({name, href}) => (
          <li key={name} className="capitalize">
            <NavLink href={href}>{name}</NavLink>
          </li>
        ))}
      </List>
    </nav>
  )
}
