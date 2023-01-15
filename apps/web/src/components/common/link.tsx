import NextLink from "next/link"

import {cn} from "~/lib/utils"

interface Props {
  children: React.ReactNode
  href: string
  styles?: string
  reset?: boolean
}
export default function Link({
  children,
  href,
  styles = "",
  reset = false,
}: Props) {
  if (reset) {
    return (
      <NextLink className={styles} href={href}>
        {children}
      </NextLink>
    )
  }
  return (
    <NextLink
      className={cn(
        "relative block after:content-[''] after:transition-all after:ease-in-out after:duration-200 after:w-3  hover:after:w-full after:h-1 after:bg-blue-500 after:dark:bg-blue-500 after:absolute after:bottom-1 after:-rotate-1 after:left-0 md:text-lg",
        styles
      )}
      href={href}
    >
      {children}
    </NextLink>
  )
}
