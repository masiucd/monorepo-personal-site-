import {ReactElement} from "react"

import Layout from "~/components/layout"
import NavLink from "~/components/nav_link"
import Page from "~/components/wrappers/page"

export default function NotFoundPage() {
  return (
    <Page title="Not found page">
      <div className="p-5">
        <h1>Ooops something went wrong</h1>
        <div className="flex gap-5">
          <NavLink href="/" styles="flex border-b">
            Home
          </NavLink>
          <NavLink href="/blog" styles="flex border-b">
            Blog
          </NavLink>
        </div>
      </div>
    </Page>
  )
}

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
