import {tw} from "lib"
import {GetStaticProps} from "next"
import {ReactElement, ReactNode} from "react"

import BlogItem from "~/components/blog/blog_item"
import Page from "~/components/common/page"
import Layout from "~/components/layout"
import {getAllPosts} from "~/lib/blog"
import {AllPostsSchema} from "~/lib/schemas"
import {AllPosts} from "~/lib/types"

export const getStaticProps: GetStaticProps = () => ({
  props: {
    posts: AllPostsSchema.parse(
      getAllPosts(["slug", "title", "updated", "time", "tags", "description"])
    ),
  },
})

type Props = {
  posts: AllPosts
}

type TitleProps = {
  title?: string | null
  children?: ReactNode | null
  styles?: string
}
function Title({title = null, children = null, styles = ""}: TitleProps) {
  if (title !== null) {
    return (
      <section className={tw("mb-5 py-10", styles)}>
        <h1>{title}</h1>
      </section>
    )
  } else if (children !== null) {
    return <section className={tw("mb-5 py-10", styles)}>{children}</section>
  }
  return null
}

export default function BlogPage({posts}: Props) {
  return (
    <Page>
      <Title>
        <h1>Blog</h1>
        <p className="opacity-80">
          This is a collection of articles where I write about programming and
          software development. Articles about React, Javascript, Typescript and
          Rust are close to my hart.
        </p>
      </Title>
      <ul>
        {posts.map((p) => (
          <BlogItem key={p.slug} post={p} />
        ))}
      </ul>
    </Page>
  )
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout metaData={{title: "Articles"}}>{page}</Layout>
}
