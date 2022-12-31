import {serialize} from "next-mdx-remote/serialize"
// import rehypeAutolinkHeadings from "rehype-autolink-headings"
// import rehypeCodeTitles from "rehype-code-titles"
// import rehypeSlug from "rehype-slug"
// import remarkGfm from "remark-gfm"
// import rehypeAutolinkHeadings from "rehype-autolink-headings"
// import rehypeCodeTitles from "rehype-code-titles"
import rehypeHighlight from "rehype-highlight"
// import rehypePrism from "rehype-prism-plus"

export const parseContentToMDX = async (content: string) => {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: false, // Fix Uncaught TypeError: _jsxDEV is not a function. Problem
      // remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeHighlight,
        // rehypeSlug,
        // rehypeCodeTitles,
        // rehypePrism,
        // [
        //   rehypeAutolinkHeadings,
        //   {
        //     properties: {
        //       className: ["anchor"],
        //     },
        //   },
        // ],
      ],
      format: "mdx",
    },
  })
  return {mdxSource}
}
