import {useMediaQuery} from "hooks"
import {Github, Highlighter, Instagram, Twitter} from "ui"

import socialMediaData from "~/static/social_media.json"

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

export default function Footer() {
  const matches = useMediaQuery("(min-width: 620px)")
  return (
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
  )
}
