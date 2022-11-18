import {Button} from "ui"
import {ReactElement} from "react"
import Layout from "~/components/layout"

export default function HomePage() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
