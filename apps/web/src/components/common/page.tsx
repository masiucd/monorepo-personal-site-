import {tw} from "lib"
import {ReactNode} from "react"
interface Props {
  children: ReactNode
  fluid?: boolean
  styles?: string
}

export default function Page({children, fluid = false, styles = ""}: Props) {
  return (
    <div className={tw("m-auto max-w-[61.25rem]", mergedStyles(fluid, styles))}>
      {children}
    </div>
  )
}

function mergedStyles(fluid: boolean, styles: string) {
  return tw(applyFluidStyles(fluid), styles)
}
function applyFluidStyles(fluid: boolean): string {
  if (fluid) {
    return " max-w-[100%] "
  }
  return ""
}
