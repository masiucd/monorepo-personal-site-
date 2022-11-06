import {tw} from "lib"
import {ReactNode} from "react"

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
  return <main className={tw(getClassName(fluid), styles)}>{children}</main>
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
