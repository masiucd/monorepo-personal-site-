import {useMediaQuery} from "hooks"
import Link from "next/link"
import {Github, Highlighter, Instagram, Twitter} from "ui"

import navlinksData from "~/static/nav_links.json"
import socialMediaData from "~/static/social_media.json"

type Props = {
  children: React.ReactNode
}

function Header() {
  return (
    <header className="min-h-[10ch]">
      {/* TODO logo */}
      <div className="border border-red-300 md:max-w-[140ch] m-auto">
        <nav>
          <ul className="flex gap-3">
            {navlinksData.map(({name, href}) => (
              <li key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default function Layout({children}: Props) {
  const matches = useMediaQuery("(min-width: 620px)")
  return (
    <>
      <Header />
      {children}
      <footer className="min-h-[10ch]">
        <div className="md:max-w-[140ch] flex flex-col items-center m-auto h-full justify-center">
          <small>
            © Copyright{" "}
            <Highlighter>
              {matches ? "Marcell Ciszek Druzysnki" : "MCD"}
            </Highlighter>
            . All rights reserved. {new Date().getFullYear()}
          </small>
          <ul className="flex gap-5 items-center justify-center py-2">
            {socialMediaData.map(({name, href}) => (
              <li key={name}>
                <a href={href}>{renderIcon(name)}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  )
}

function renderIcon(name: string) {
  switch (name) {
    case "github":
      return <Github />
    case "twitter":
      return <Twitter />
    case "instagram":
      return <Instagram />
    default:
      throw new Error(`${name} is not a supported}`)
  }
}
