import {tw} from "lib"

type Props = {
  children: React.ReactNode
  styles?: string
}
function List({children, styles = ""}: Props) {
  return <ul className={tw("flex gap-3 py-2 md:px-2", styles)}>{children}</ul>
}

export default List
