import {useMediaQuery} from "lib"
import socialData from "~/static_data/social.json"

function Footer() {
  const matches = useMediaQuery("(min-width: 768px)")
  return (
    <footer>
      <div className="max-w-3xl mx-auto py-5 grid justify-center">
        <small className="pb-2">
          © Copyright{" "}
          <span className="text-sky-500">
            {" "}
            {matches ? "Marcell Ciszek Druzysnki" : "Marcell.CD"}
          </span>
          . All rights reserved. {new Date().getFullYear()}
        </small>
        <ul className="flex gap-3 justify-center">
          {socialData.map(({href, name}) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-500 dark:hover:text-sky-500 capitalize text-zinc-700  dark:text-zinc-300"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
export default Footer
