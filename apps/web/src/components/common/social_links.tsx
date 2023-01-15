import {cn} from "~/lib/utils"
import socialData from "~/static_data/social.json"

interface Props {
  styles?: string
}

function SocialLinks({styles = ""}: Props) {
  return (
    <ul className={cn("flex gap-3", styles)}>
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
