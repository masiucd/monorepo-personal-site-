import Link from "next/link"
import {useRouter} from "next/router"
import {ReactNode} from "react"

interface Props {
  href: string
  children: ReactNode
  className?: string
}

function NavLink({href, children, className}: Props) {
  const {pathname} = useRouter()
  const active = href === pathname

  return (
    <Link
      className={`${activeStyles(
        active
      )} capitalize ${className} hover:text-blue-500 dark:hover:text-blue-500`}
      href={href}
    >
      {children}
    </Link>
  )
}
function activeStyles(active: boolean): string {
  return active ? "border-b-2 border-blue-500 " : ""
}
export default NavLink
