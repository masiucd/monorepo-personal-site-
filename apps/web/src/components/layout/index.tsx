import Footer from "./footer"
import Header from "./header"

type Props = {
  children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
