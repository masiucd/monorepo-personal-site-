// import "highlight.js/styles/atom-one-dark.css"
import "highlight.js/styles/github-dark.css"

import {ParsedUrlQuery} from "node:querystring"

import {GetStaticPaths, GetStaticProps} from "next"
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote"
import {ReactElement} from "react"

import PostHero from "~/components/blog_slug/post_hero"
import Page from "~/components/common/page"
import Layout from "~/components/layout"
import {getAllPosts, getPostBySlug} from "~/lib/blog"
import {parseContentToMDX} from "~/lib/mdx"
import {PostsBySlugSchema, PostSlugItemSchema} from "~/lib/schemas"
import {PostsType} from "~/lib/types"

interface Params extends ParsedUrlQuery {
  slug: string
}

type Props = {
  post: PostsType
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
}
export default function BlogSlugPage({post, source}: Props) {
  return (
    <>
      <Page
        fluid
        metaData={{
          title: `Blog | ${post.title}`,
          description: post.description,
        }}
      >
        <PostHero post={post} />
        <article
          id="blog_article"
          className="max-w-3xl m-auto p-3 dark:prose-invert prose prose-stone"
        >
          <MDXRemote {...source} components={{}} />
        </article>
      </Page>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = PostsBySlugSchema.parse(getAllPosts(["slug"]))
  return {paths: posts.map(({slug}) => ({params: {slug}})), fallback: false}
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

  const post = PostSlugItemSchema.parse(
    getPostBySlug(`${params.slug}.mdx`, [
      "title",
      "content",
      "updated",
      "date",
      "tags",
      "author",
      "description",
    ])
  )
  if (!post) {
    return {
      notFound: true,
    }
  }
  const {mdxSource} = await parseContentToMDX(post.content)
  return {
    props: {
      post,
      source: mdxSource,
    },
  }
}

BlogSlugPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
