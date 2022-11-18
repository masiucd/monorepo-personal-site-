import {Button} from "ui"
import {ReactElement} from "react"
import Layout from "~/components/layout"
import NavLink from "~/components/nav_link"
import Page from "~/components/common/page"

export default function HomePage() {
  return (
    <Page>
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
  return <Layout>{page}</Layout>
}
