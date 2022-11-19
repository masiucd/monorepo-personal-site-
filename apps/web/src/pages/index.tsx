import {ReactElement} from "react"
import Layout from "~/components/layout"
import Page from "~/components/common/page"

export default function HomePage() {
  return (
    <Page styles="border-2 border-red-500">
      <h1>Web</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate
        dolorem aspernatur. Ut adipisci sapiente cumque culpa, et at ea, quo
        quam ipsa tempora perferendis, expedita beatae mollitia enim provident.
      </p>
    </Page>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout styles="flex">{page}</Layout>
}
