import {tw} from "lib"

import socialData from "~/static_data/social.json"

type Props = {
  styles?: string
}

function SocialLinks({styles = ""}: Props) {
  return (
    <ul className={tw("flex gap-3", styles)}>
      {socialData.map(({href, name}) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-500 dark:hover:text-blue-500 capitalize text-zinc-700  dark:text-zinc-300"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
