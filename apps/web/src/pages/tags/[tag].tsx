import {GetStaticPaths, GetStaticProps} from "next"
import {ParsedUrlQuery} from "querystring"
import React, {ReactElement} from "react"

import BlogItem from "~/components/blog/blog_item"
import Page from "~/components/common/page"
import Title from "~/components/common/title"
import Layout from "~/components/layout"
import {getAllPosts} from "~/lib/blog"
import {AllPostsSchema} from "~/lib/schemas"
import {AllPosts} from "~/lib/types"

interface Params extends ParsedUrlQuery {
  tag: string
}

type Props = {
  posts: AllPosts
  tag: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const tags = getAllPosts(["tags"])
  return {
    paths: tags
      .flatMap(({tags}) => [...new Set(tags)])
      .map((tag) => ({params: {tag}})),
    fallback: false,
  }
  // return {paths: posts.map(({slug}) => ({params: {slug}})), fallback: false}
}
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (!params) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    }
  }

  const posts = AllPostsSchema.parse(
    getAllPosts(["slug", "title", "updated", "time", "tags", "description"])
  ).filter(({tags}) => tags.includes(params.tag))

  return {
    props: {
      tag: params.tag,
      posts,
    },
  }
}

export default function TagItemPage({tag, posts}: Props) {
  return (
    <Page
      metaData={{
        title: `Tags | ${tag}`,
        description: "Tags for posts",
      }}
    >
      <Title>
        <h1>
          Posts with tag{" "}
          <span className="border-b-2 border-blue-500 text-slate-700 dark:text-slate-200 font-bold ">
            {tag}
          </span>
        </h1>
      </Title>
      <ul>
        {posts.map((post) => (
          <BlogItem key={post.slug} post={post} />
        ))}
      </ul>
    </Page>
  )
}

TagItemPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
