import {GetStaticProps} from "next"
import Link from "next/link"
import React, {ReactElement} from "react"
import {z} from "zod"

import Page from "~/components/common/page"
import Title from "~/components/common/title"
import Layout from "~/components/layout"
import {getAllPosts} from "~/lib/blog"

// const OnlyTagsSchema = z.object({tags: z.array(z.string())})
const OnlyTagsSchema = z.array(
  z.object({
    tags: z.array(z.string()),
  })
)

type Props = {
  tags: string[]
}

export default function TagsPage({tags}: Props) {
  return (
    <Page>
      <Title>
        <h1>Blog post tags</h1>
      </Title>
      <ul className="flex flex-col gap-5">
        {tags.map((tag) => (
          <li key={tag} className="capitalize">
            <Link className="block text-3xl" href={`/tags/${tag}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const tags = OnlyTagsSchema.parse(getAllPosts(["tags"]))
  return {
    props: {
      tags: tags.flatMap(({tags}) => [...new Set(tags)]),
    },
  }
}

TagsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout metaData={{title: "Tags"}}>{page}</Layout>
}
