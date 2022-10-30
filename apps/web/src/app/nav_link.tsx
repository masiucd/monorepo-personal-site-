"use client"
import {tw} from "lib"
import Link from "next/link"

type Props = {
  href: string
  children: React.ReactNode
  styles?: string
}

export default function NavLink({href, children, styles = ""}: Props) {
  return (
    <Link className={tw("", styles)} href={href}>
      {children}
    </Link>
  )
}
