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

function Footer() {
  return (
    <footer className="grid mt-auto">
      <div className="lg:max-w-[120ch] flex flex-col items-center m-auto h-full justify-center">
        <small>
          © Copyright <Highlighter>Marcell Ciszek Druzysnki</Highlighter>. All
          rights reserved. {new Date().getFullYear()}
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

export default Footer
