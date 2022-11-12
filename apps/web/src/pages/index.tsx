import {ReactElement} from "react"

import Intro from "~/components/home/intro"
import Layout from "~/components/layout"
import Page from "~/components/wrappers/page"

export default function HomePage() {
  return (
    <Page>
      <Intro />
    </Page>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
