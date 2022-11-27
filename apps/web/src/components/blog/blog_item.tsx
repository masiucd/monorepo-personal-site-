import Link from "next/link"

import {parseDate} from "~/lib/date"
import {Post} from "~/lib/types"

type Props = {
  post: Post
}
function BlogItem({post}: Props) {
  const {slug, title, updated, description, tags} = post
  return (
    <li
      key={slug}
      className="mb-5 shadow py-1 px-2 rounded-sm dark:shadow-zinc-800"
    >
      <div className="flex justify-between pb-3 flex-col sm:flex-row">
        <p>
          <Link
            className="font-bold text-xl hover:scale-105 hover:shadow-sm block transition"
            href={`/blog/${slug}`}
          >
            {title}
          </Link>
        </p>
        <p>{parseDate(updated)}</p>
      </div>
      <div className="flex flex-col">
        <p className="opacity-80">{description}</p>
        <ul className="flex gap-5 justify-end">
          {tags.map((tag) => (
            <li key={tag} className="capitalize">
              <Link
                className="relative block after:content-[''] after:transition-all after:ease-in-out after:duration-200 after:w-3  hover:after:w-full after:h-1 after:bg-sky-500 after:dark:bg-sky-400 after:absolute after:bottom-1 after:-rotate-1 after:left-0 md:text-lg"
                href={`/tags/${tag}`}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default BlogItem
