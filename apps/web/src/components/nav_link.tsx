import {tw} from "lib"
import Link from "next/link"
import {useRouter} from "next/router"

type Props = {
  href: string
  children: React.ReactNode
  styles?: string
}

export default function NavLink({href, children, styles = ""}: Props) {
  const {pathname} = useRouter()
  const isActive = href === pathname
  return (
    <Link
      className={tw(`${isActive ? "border-b-2 border-blue-500" : ""}`, styles)}
      href={href}
    >
      {children}
    </Link>
  )
}
