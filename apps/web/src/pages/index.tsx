import {useMediaQuery} from "lib"
import Link from "next/link"
import {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"

export default function HomePage() {
  const matches = useMediaQuery("(min-width: 768px)")
  return (
    <Page>
      <section className="bg-hero bg-cover flex flex-col justify-center min-h-[25rem]">
        <h1 className="text-4xl pl-4 md:text-6xl md:p-0">
          HI I{" "}
          <span className="border-b-2 dark:border-sky-400 border-sky-500">
            am
          </span>{" "}
          {matches ? "Marcell Ciszek Druzynski" : "Marcell.C.D"}
        </h1>
        <aside className="grid grid-cols-5 pr-2 md:pr-0 mb-5">
          <p className="border-l-2 border-sky-500 dark:border-sky-400 pl-4 col-start-2 col-end-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptate dolorem aspernatur. Ut adipisci sapiente cumque culpa, et
            at ea, quo quam ipsa tempora perferendis, expedita beatae mollitia
            enim provident.
          </p>
        </aside>
        <ul className="flex gap-5 pl-4 md:pl-0">
          <li>
            <Link
              className="relative inline-block after:content-[''] after:transition-all after:ease-in-out after:duration-200 after:w-3  hover:after:w-full after:h-1 after:bg-sky-500 after:dark:bg-sky-400 after:absolute after:bottom-1 after:-rotate-1 after:left-0"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="relative inline-block after:content-[''] after:transition-all after:ease-in-out after:duration-200 after:w-3  hover:after:w-full after:h-1 after:bg-sky-500 after:dark:bg-sky-400 after:absolute after:bottom-1 after:-rotate-1 after:left-0"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </section>
    </Page>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout styles="flex">{page}</Layout>
}
