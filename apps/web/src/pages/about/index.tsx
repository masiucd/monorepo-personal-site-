import {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"

export default function AboutPage() {
  return (
    <Page>
      <section>
        <h1>About</h1>
        <h3>Coming soon!</h3>
      </section>
    </Page>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout metaData={{title: "About Marcell Ciszek Druzynski"}} styles="flex">
      {page}
    </Layout>
  )
}
