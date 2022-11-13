import {ReactElement} from "react"

import Layout from "~/components/layout"
import Page from "~/components/wrappers/page"

export default function BlogPage() {
  return <Page>BlogPage</Page>
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
