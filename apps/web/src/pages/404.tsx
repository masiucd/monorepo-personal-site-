import Link from "next/link"
import {ReactElement} from "react"

import Layout from "~/components/layout"
import Page from "~/components/wrappers/page"

export default function NotFoundPage() {
  return (
    <Page title="Not found page">
      <div className="p-5">
        <h1>Ooops something went wrong</h1>
        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </Page>
  )
}

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
