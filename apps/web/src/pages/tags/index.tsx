import {firstLetterUppercase} from "lib"
import {GetStaticProps} from "next"
import Link from "next/link"
import React, {ReactElement} from "react"

import Page from "~/components/common/page"
import Title from "~/components/common/title"
import Layout from "~/components/layout"
import {getAllPosts} from "~/lib/blog"
import {OnlyPostTagsSchema} from "~/lib/schemas"

interface Props {
  tags: string[]
}

export default function TagsPage({tags}: Props) {
  return (
    <Page
      metaData={{
        title: "Tags",
      }}
    >
      <Title>
        <h1>Blog post&apos;s tags</h1>
      </Title>
      <ul className="flex flex-wrap gap-5">
        {tags.map((tag) => (
          <li key={tag} className="capitalize w-fit">
            <Link href={`/tags/${tag}`}>
              {/* TODO icon */}
              <p className="dark:text-white text-slate-900">
                Posts with{" "}
                <strong className="border-b-2 border-blue-500 dark:text-slate-300 text-slate-700 font-mono">
                  {firstLetterUppercase(tag)}
                </strong>{" "}
                tag
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const postsWithOnlyTags = OnlyPostTagsSchema.parse(getAllPosts(["tags"]))
  return {
    props: {
      tags: [
        ...new Set(postsWithOnlyTags.flatMap((p) => p.tags.map((x) => x))),
      ],
    },
  }
}

TagsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
