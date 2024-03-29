import {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"

export default function BitesPage() {
  return (
    <Page
      metaData={{
        title: "Bites",
        description: "Bites, commonly used tips and tricks regarding code",
      }}
    >
      <section>
        <h1>Bites</h1>
        <h3>Coming soon!</h3>
      </section>
    </Page>
  )
}

BitesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout styles="flex">{page}</Layout>
}
