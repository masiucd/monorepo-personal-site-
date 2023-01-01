import {GetStaticProps} from "next"
import Link from "next/link"
import {Dispatch, ReactElement, SetStateAction, useState} from "react"

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

function getPostTags(posts: AllPosts) {
  return [...new Set(posts.flatMap((p) => p.tags.map((x) => x)))]
}

function TagsFilter({
  posts,
  tags,
  setTags,
}: {
  posts: AllPosts
  tags: string[]
  setTags: Dispatch<SetStateAction<string[]>>
}) {
  return (
    <div className="mb-10 border-2 border-blue-500 rounded-md p-2 bg-slate-100 dark:bg-slate-900 mx-2 md:mx-0">
      <h4 className="mb-2"> Filter posts by tags </h4>
      <ul className="flex gap-5 flex-wrap">
        {getPostTags(posts).map((tag) => (
          <li key={tag}>
            <button
              className={`${
                tags.includes(tag) ? "border-b-2 border-blue-500" : ""
              } capitalize`}
              onClick={() =>
                setTags(
                  tags.includes(tag)
                    ? tags.filter((t) => t !== tag)
                    : [...tags, tag]
                )
              }
            >
              {tag}
            </button>
          </li>
        ))}
        <button
          className={`${
            tags.length === 0 ? "border-b-2 border-blue-500" : ""
          } `}
          onClick={() => setTags([])}
        >
          All
        </button>
      </ul>
    </div>
  )
}

function renderBlogItems(tags: string[], posts: AllPosts) {
  if (tags.length > 0) {
    return posts
      .filter((p) => tags.every((t) => p.tags.includes(t)))
      .map((p) => <BlogItem key={p.slug} post={p} />)
  }
  return posts.map((p) => <BlogItem key={p.slug} post={p} />)
}

export default function BlogPage({posts}: Props) {
  const [tags, setTags] = useState<string[]>([])
  return (
    <Page metaData={{title: "Blog posts"}}>
      <Title styles="px-2">
        <h1>Blog</h1>
        <p className="opacity-80">
          This is a collection of articles where I write about programming and
          software development. Articles about React, Javascript, Typescript and
          Go are close to my hart.
        </p>
        <Link
          href="/tags"
          className="dark:text-gray-300 text-gray-700 dark:hover:text-blue-500 hover:text-blue-500 border-b-2 border-blue-500"
        >
          View posts by tag
        </Link>
      </Title>
      <TagsFilter posts={posts} tags={tags} setTags={setTags} />
      <ul className="flex flex-col gap-5">{renderBlogItems(tags, posts)}</ul>
    </Page>
  )
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
