import {parseDate} from "~/lib/date"
import {Post} from "~/lib/types"

import Link from "../common/link"

type Props = {
  post: Post
}

function BlogItem({post}: Props) {
  const {slug, title, updated, description, tags} = post
  return (
    <li key={slug} className="shadow py-1 px-2 rounded-sm dark:shadow-gray-800">
      <div className="flex justify-between pb-3 flex-col sm:flex-row">
        <strong>
          <Link
            reset
            href={`/blog/${slug}`}
            styles="md:text-3xl text-xl dark:hover:text-blue-500 hover:text-blue-500 scale-100 hover:scale-105 transition-all duration-200 ease-in-out block"
          >
            {title}
          </Link>
        </strong>
        <p>{parseDate(updated)}</p>
      </div>
      <div className="flex flex-col">
        <p className="opacity-80">{description}</p>
        <ul className="flex gap-5 justify-end">
          {tags.map((tag) => (
            <li key={tag} className="capitalize">
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default BlogItem
