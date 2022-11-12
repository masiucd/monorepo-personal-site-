import {tw} from "lib"
import {ReactNode} from "react"

import Footer from "../base_layout/footer"
import Header from "../base_layout/header"

type Props = {
  children: ReactNode
  styles?: string
  fluid?: boolean
}
export default function PageWrapper({
  children,
  styles = "",
  fluid = false,
}: Props) {
  return (
    <>
      <Header />
      <main className={tw(getClassName(fluid), styles)}>{children}</main>
      <Footer />
    </>
  )
}

function getClassName(fluid: boolean) {
  let className =
    " p-1 m-auto min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center  "
  if (fluid) {
    className += "w-full "
  } else {
    className += "lg:max-w-[120ch] "
  }
  return className
}
