import {tw} from "lib"
import Link from "next/link"
import {Highlighter} from "ui"

import PageWrapper from "~/components/wrappers/page_wrapper"

function HomePage() {
  const matches = true
  return (
    <PageWrapper styles="items-center justify-center bg-hero-light">
      <aside>
        <h1 className="pb-5 bg-blue-300/50 shadow pl-1 text-4xl sm:text-5xl md:text-7xl">
          Hey I&#x27;m{" "}
          <Highlighter styles="after:h-2 md:after:h-4">
            {matches ? "Marcell Ciszek Druzynski" : "Marcell.C.D"}
          </Highlighter>
        </h1>
        <h2 className="bg-blue-300/50 pl-1 p-3 shadow leading-snug text-xl sm:text-3xl md:text-5xl ml-3 mr-2 ">
          Software <Highlighter>developer</Highlighter>, Endurance{" "}
          <Highlighter>freak</Highlighter> and a tech{" "}
          <Highlighter>nerd</Highlighter>.
        </h2>
        <div className="flex border-2 border-red-500 p-2 gap-5 ">
          <Link href="/about" className="text-lg">
            <CaptureText text="About" />
          </Link>
          <Link href="/blog" className="text-lg">
            <CaptureText text="Blog" />
          </Link>
        </div>
      </aside>
    </PageWrapper>
  )
}

export default HomePage

export const CaptureText = ({text, styles = ""}: any) => (
  <span
    className={tw(
      "h-8 rounded-md px-2 flex items-center before:content-[''] before:absolute before:pointer-events-none before:w-3 before:h-3 before:bg-blue-400 before:z-0 before:-translate-x-1 before:-translate-y-1 hover:before:w-[2rem]  hover:before:bg-blue-400/60 before:transition-all",
      styles
    )}
  >
    <span className="relative ">{text}</span>
  </span>
)
