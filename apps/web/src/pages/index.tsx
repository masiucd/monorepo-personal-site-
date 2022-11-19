import {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"

export default function HomePage() {
  return (
    <Page>
      <section className="bg-hero bg-cover flex flex-col justify-center h-72">
        <h1>Home</h1>
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

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout styles="flex">{page}</Layout>
}
