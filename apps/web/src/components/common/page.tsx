import {ReactNode} from "react"

interface Props {
  children: ReactNode
  fluid?: boolean
}

export default function Page({children, fluid = false}: Props) {
  return <div className="m-auto max-w-[90ch]">{children}</div>
}

function applyFluidStyles(fluid: boolean) {}
