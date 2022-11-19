import {tw} from "lib"
import {ReactNode} from "react"

interface Props {
  children: ReactNode
  styles?: string
}

export default function Layout({children, styles = ""}: Props) {
  return (
    <>
      <header>
        <strong>header</strong>
        <nav>
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Picks</li>
          </ul>
        </nav>
      </header>
      <main className={tw(`flex-1`, styles)}>{children}</main>
      <footer>
        <strong>footer</strong>
      </footer>
    </>
  )
}
