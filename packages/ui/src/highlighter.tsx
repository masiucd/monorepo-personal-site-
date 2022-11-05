"use client"
import {tw} from "lib"
import {ReactNode} from "react"

type Props = {
  children: ReactNode
  styles?: string
}
export function Highlighter({children, styles = ""}: Props) {
  return (
    <span
      className={tw(
        "inline-block capitalize relative after:content-[''] after:transition-all after:ease-in-out after:duration-200  after:w-full after:h-1 after:bg-blue-500 after:dark:bg-blue-300 after:absolute after:bottom-1 after:-rotate-1 after:left-0 after:-z-10",
        styles
      )}
    >
      {children}
    </span>
  )
}
