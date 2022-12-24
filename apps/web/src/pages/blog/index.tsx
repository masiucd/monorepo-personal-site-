import {GetStaticProps} from "next"
import Link from "next/link"
import {ReactElement} from "react"

import BlogItem from "~/components/blog/blog_item"
import Page from "~/components/common/page"
import Title from "~/components/common/title"
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

export default function BlogPage({posts}: Props) {
  return (
    <Page metaData={{title: "Blog posts"}}>
      <Title>
        <h1>Blog</h1>
        <p className="opacity-80">
          This is a collection of articles where I write about programming and
          software development. Articles about React, Javascript, Typescript and
          Go are close to my hart.
        </p>
        <Link
          href="/tags"
          className="dark:text-gray-300 text-gray-700 dark:hover:text-blue-500 hover:text-blue-500"
        >
          View posts by tag
        </Link>
      </Title>
      <ul className="flex flex-col gap-5">
        {posts.map((p) => (
          <BlogItem key={p.slug} post={p} />
        ))}
      </ul>
    </Page>
  )
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
