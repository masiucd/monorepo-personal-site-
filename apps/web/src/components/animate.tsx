import {AnimatePresence} from "framer-motion"
import {ReactNode} from "react"

type AnimateProps = {
  on: boolean
  children: ReactNode
  options?: Record<string, string>
}
function Animate({on, children, options}: AnimateProps) {
  return (
    <AnimatePresence initial={false} {...options}>
      {on && children}
    </AnimatePresence>
  )
}

export default Animate
