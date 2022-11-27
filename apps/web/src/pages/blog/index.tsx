import dayjs from "dayjs"
import {GetStaticProps} from "next"
import Link from "next/link"
import {ReactElement} from "react"

import Page from "~/components/common/page"
import Layout from "~/components/layout"
import {getAllPosts} from "~/lib/blog"
import {AllPostsSchema} from "~/lib/schemas"
import {AllPosts} from "~/lib/types"

export const parseDate = (date: string, format = "MMMM D, YYYY") =>
  dayjs(date).format(format)

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

function Title() {
  return (
    <section className="mb-5 py-10">
      <h1>Blog</h1>
      <h2>Writing about programming and stuff</h2>
      <p>
        This is a collection of articles where I write about programming,
        software development. Articles about React, Javascript, Typescript and
        Rust are close to my hart.
      </p>
    </section>
  )
}

export default function BlogPage({posts}: Props) {
  return (
    <Page>
      <Title />
      <ul>
        {posts.map((p) => (
          <li key={p.slug} className="mb-5 shadow py-1 px-2 rounded-sm">
            <div className=" flex justify-between pb-3">
              <p>
                <Link
                  className="font-bold text-xl hover:scale-105 hover:shadow-sm block transition"
                  href={`/blog/${p.slug}`}
                >
                  {p.title}
                </Link>
              </p>
              <p>{parseDate(p.updated)}</p>
            </div>
            <div className="flex flex-col">
              <p className="opacity-80">{p.description}</p>
              <ul className="flex gap-5 justify-end">
                {p.tags.map((tag) => (
                  <li key={tag} className="capitalize">
                    <Link href={`/tags/${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Page>
  )
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout metaData={{title: "Articles"}}>{page}</Layout>
}
