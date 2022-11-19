import {tw} from "lib"
import {useTheme} from "next-themes"
import Link from "next/link"
import {ReactNode} from "react"

interface Props {
  children: ReactNode
  styles?: string
}

export default function Layout({children, styles = ""}: Props) {
  const {theme, setTheme} = useTheme()
  return (
    <>
      <header className="">
        <div className="max-w-[61.25rem] mx-auto flex justify-between py-5">
          <nav className="">
            <ul className="flex gap-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Picks</Link>
              </li>
            </ul>
          </nav>
          <div>
            <button
              type="button"
              aria-label="Toggle Theme Mode"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light")
              }}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>
      <main className={tw(`flex-1`, styles)}>{children}</main>
      <footer>
        <strong>footer</strong>
      </footer>
    </>
  )
}
