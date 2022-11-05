"use client"

import {tw} from "lib"
import Link from "next/link"
import {useSelectedLayoutSegment} from "next/navigation"

type Props = {
  href: string
  children: React.ReactNode
  styles?: string
}

export default function NavLink({href, children, styles = ""}: Props) {
  const segment = useSelectedLayoutSegment()
  const isActive = href === `/${segment}`
  return (
    <Link
      className={tw(`${isActive ? "border-b-2 border-blue-500" : ""}`, styles)}
      href={href}
    >
      {children}
    </Link>
  )
}
