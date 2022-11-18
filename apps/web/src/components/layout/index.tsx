import {ReactNode} from "react"

type Props = {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <>
      <header>
        <h3>header</h3>
      </header>
      {children}
      <footer>
        <h4>footer</h4>
      </footer>
    </>
  )
}
