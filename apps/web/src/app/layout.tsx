import "../styles/global.css"
import {barlowCondensed400} from "~/lib/fonts"
import Header from "~/components/base_layout/header"
import Footer from "~/components/base_layout/footer"

type Props = {
  children: React.ReactNode
}

const navListItems = [
  {name: "about", href: "/about"},
  {name: "blog", href: "/blog"},
]

function RootLayout({children}: Props) {
  return (
    <html lang="en" className={barlowCondensed400.className}>
      <head>
        <title>Marcell.cd.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="border border-green-500 h-[calc(100vh-20rem)] w-full flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
