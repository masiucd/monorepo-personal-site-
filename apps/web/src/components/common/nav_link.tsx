import Link from "next/link"
import {useRouter} from "next/router"
import {ReactNode} from "react"

type Props = {
  href: string
  children: ReactNode
}

function NavLink({href, children}: Props) {
  const {pathname} = useRouter()
  const active = href === pathname
  return (
    <Link className={active ? "border-b-2 border-sky-500 " : ""} href={href}>
      {children}
    </Link>
  )
}

export default NavLink
