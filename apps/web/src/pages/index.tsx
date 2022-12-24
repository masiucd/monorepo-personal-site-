import {useMediaQuery} from "lib"
import {ReactElement} from "react"

import Link from "~/components/common/link"
import Page from "~/components/common/page"
import Layout from "~/components/layout"

export default function HomePage() {
  const matches = useMediaQuery("(min-width: 768px)")
  return (
    <Page>
      <section className="bg-hero dark:bg-hero-dark bg-cover flex flex-col justify-center min-h-[25rem]">
        <h1 className="text-4xl pl-4 md:text-6xl md:p-0">
          HI I{" "}
          <span className="border-b-2 dark:border-blue-500 border-sky-500">
            am
          </span>{" "}
          {matches ? "Marcell Ciszek Druzynski" : "Marcell.C.D"}
        </h1>
        <aside className="grid grid-cols-5 pr-2 md:pr-0 mb-5">
          <p className="border-l-2 border-sky-500 dark:border-blue-500 pl-4 col-start-2 col-end-6 md:text-lg">
            Here where I share my thoughts about software development and topics
            like <span className="text-blue-500  dark:text-sky-200">React</span>
            ,{" "}
            <span className="text-blue-500 dark:text-sky-200">Javascript</span>,{" "}
            <span className="text-blue-500 dark:text-sky-200">Go</span> and
            other topics related to software development.
          </p>
        </aside>
        <ul className="flex gap-5 pl-4 md:pl-0">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </section>
    </Page>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout styles="flex">{page}</Layout>
}
