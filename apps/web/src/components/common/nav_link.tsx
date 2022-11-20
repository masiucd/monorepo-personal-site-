import {tw} from "lib"
import Link from "next/link"
import {useRouter} from "next/router"
import {ReactNode} from "react"

type Props = {
  href: string
  children: ReactNode
  className?: string
}

function NavLink({href, children, className = ""}: Props) {
  const {pathname} = useRouter()
  const active = href === pathname
  return (
    <Link
      className={tw(`${active ? "border-b-2 border-sky-500 " : ""}`, className)}
      href={href}
    >
      {children}
    </Link>
  )
}

export default NavLink
