import {ReactNode} from "react"
import {InterFont} from "~/lib/fonts"
interface Props {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <>
      <header className={InterFont.className}>
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
      <main className={`${InterFont.className} flex-1`}>{children}</main>
      <footer className={InterFont.className}>
        <strong>footer</strong>
      </footer>
    </>
  )
}
