import fs from "node:fs"

import {GetStaticProps} from "next"
import path from "path"
import {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"

export const getStaticProps: GetStaticProps = () => {
  const absolutePath = process.cwd()
  const pathToPosts = path.join(absolutePath, "src", "blog_posts")
  const blogPosts = fs.readdirSync(pathToPosts, "utf8").map((post) => {
    const p = fs.readFileSync(path.join(pathToPosts, post), "utf8")
    console.log({p})
  })
  console.log({blogPosts})
  return {
    props: {
      data: "test",
    },
  }
}

type Props = {
  data: string
}

export default function BlogPage({data}: Props) {
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
