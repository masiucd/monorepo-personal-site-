import {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"

export default function BlogPage() {
  return (
    <Page>
      <section className="bg-hero bg-cover flex flex-col justify-center h-72">
        <h1>Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          voluptate dolorem aspernatur. Ut adipisci sapiente cumque culpa, et at
          ea, quo quam ipsa tempora perferendis, expedita beatae mollitia enim
          provident.
        </p>
      </section>
    </Page>
  )
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout metaData={{title: "Articles"}} styles="flex">
      {page}
    </Layout>
  )
}
