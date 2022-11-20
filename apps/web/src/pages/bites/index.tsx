import {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"

export default function BitesPage() {
  return (
    <Page>
      <section className="bg-hero bg-cover flex flex-col justify-center h-72">
        <h1>Bites</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          voluptate dolorem aspernatur. Ut adipisci sapiente cumque culpa, et at
          ea, quo quam ipsa tempora perferendis, expedita beatae mollitia enim
          provident
        </p>
      </section>
    </Page>
  )
}

BitesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      metaData={{
        title: "Bites",
        description: "Bites, commonly used tips and tricks regarding code",
      }}
      styles="flex"
    >
      {page}
    </Layout>
  )
}
