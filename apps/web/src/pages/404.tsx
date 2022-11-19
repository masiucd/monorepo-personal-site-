import Link from "next/link"
import React, {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"

export default function PageNotFound() {
  return (
    <Page>
      <section>
        <h1>Ooops something happened</h1>
        <p className="text-xl prose-stone mb-3">
          please had back from one of the links down below
        </p>
        <ul className="flex gap-5 ">
          <li>
            <Link
              className="hover:text-sky-500 dark:hover:text-sky-500"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-sky-500 dark:hover:text-sky-500"
              href="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </section>
    </Page>
  )
}

PageNotFound.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout styles="flex" metaData={{title: "Page Not Found"}}>
      {page}
    </Layout>
  )
}
