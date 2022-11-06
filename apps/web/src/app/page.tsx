import Link from "next/link"
import {CaptureText, Highlighter} from "ui"

import Main from "~/components/wrappers/main"

function HomePage() {
  const matches = true
  return (
    <Main styles="items-center justify-center ">
      <div className="bg-hero-dark dark:bg-hero-light md:pr-8 bg-cover sm:max-w-[100%] lg:max-w-[62.5rem] ">
        <h1 className="pb-5 bg-blue-300/50 shadow pl-1 text-4xl sm:text-4xl md:text-7xl">
          Hey I&#x27;m{" "}
          <Highlighter styles="after:h-2 md:after:h-4">
            {matches ? "Marcell Ciszek Druzynski" : "Marcell.C.D"}
          </Highlighter>
        </h1>
        <h2 className="bg-blue-300/50 pl-1 p-3 shadow leading-snug text-xl sm:text-2xl md:text-5xl ml-3 mr-2 ">
          Software <Highlighter>developer</Highlighter>, Endurance{" "}
          <Highlighter>freak</Highlighter> and a tech{" "}
          <Highlighter>nerd</Highlighter>.
        </h2>
        <div className="flex p-2 gap-5 ">
          <Link href="/about" className="text-lg md:text-2xl">
            <CaptureText text="About" />
          </Link>
          <Link href="/blog" className="text-lg md:text-2xl">
            <CaptureText text="Blog" />
          </Link>
        </div>
      </div>
    </Main>
  )
}

export default HomePage
