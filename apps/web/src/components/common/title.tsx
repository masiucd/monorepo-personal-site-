import {tw} from "lib"
import {ReactNode} from "react"

type Props = {
  title?: string | null
  children?: ReactNode | null
  styles?: string
}
function Title({title = null, children = null, styles = ""}: Props) {
  if (title !== null) {
    return (
      <section className={tw("mb-5 py-10", styles)}>
        <h1>{title}</h1>
      </section>
    )
  } else if (children !== null) {
    return <section className={tw("mb-5 py-10", styles)}>{children}</section>
  }
  return null
}

export default Title
