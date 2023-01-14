import {ReactNode} from "react"

import {cn} from "~/lib/utils"

import Footer from "./footer"
import Header from "./header"

interface Props {
  children: ReactNode
  styles?: string
}

export default function Layout({children, styles = ""}: Props) {
  return (
    <>
      <Header />
      <main className={cn(`flex-1`, styles)}>{children}</main>
      <Footer />
    </>
  )
}
