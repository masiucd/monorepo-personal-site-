import me from "~/config/me.json"

function Footer() {
  return (
    <footer>
      <div className="max-w-3xl mx-auto py-5 flex justify-between">
        <div>
          <small>
            Built by{" "}
            <a
              className="font-mono text-blue-500"
              target="_blank"
              href={me.twitterUrl}
              rel="noreferrer"
            >
              {me.twitterUserName}
            </a>
          </small>{" "}
          |{" "}
          <small>
            Hosted on{" "}
            <a
              href={me.vercel}
              target="_blank"
              className="font-mono text-blue-500"
              rel="noreferrer"
            >
              Vercel
            </a>
          </small>
        </div>
        <div>
          <small>
            Source code available on{" "}
            <a
              className="font-mono text-blue-500"
              href="https://github.com/masiucd/marcell.cd.com"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </small>
        </div>
      </div>
    </footer>
  )
}
export default Footer
