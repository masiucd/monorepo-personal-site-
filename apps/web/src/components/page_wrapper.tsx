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
  return (
    <section className={tw(getClassName(fluid), styles)}>{children}</section>
  )
}

function getClassName(fluid: boolean) {
  let className = ""
  if (fluid) {
    className += "w-full "
  } else {
    className += "lg:max-w-[75%] m-auto "
  }
  className += "border border-pink-700 h-full "
  return className
}
