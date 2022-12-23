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
    <Page>
      <Title>
        <h1>Blog</h1>
        <p className="opacity-80">
          This is a collection of articles where I write about programming and
          software development. Articles about React, Javascript, Typescript and
          Go are close to my hart.
        </p>
        <Link
          href="/tags"
          className="relative block after:content-[''] after:transition-all after:ease-in-out after:duration-200 after:w-3  hover:after:w-full after:h-1 after:bg-sky-500 after:dark:bg-sky-400 after:absolute after:bottom-0 after:-rotate-1 after:left-0 md:text-lg w-fit italic"
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
  return <Layout metaData={{title: "Articles"}}>{page}</Layout>
}
