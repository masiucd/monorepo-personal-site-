import {Highlighter} from "ui"

import PageWrapper from "~/components/page_wrapper"

const HomePage = () => {
  const matches = true
  return (
    <PageWrapper>
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
      </aside>
    </PageWrapper>
  )
}

export default HomePage
