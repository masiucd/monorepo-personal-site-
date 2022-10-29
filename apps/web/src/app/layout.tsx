import Link from "next/link"
import React from "react"
import {barlow400} from "~/lib/fonts"

import "../styles/global.css"
// import "tailwindcss/tailwind.css"

type Props = {
  children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
  return (
    <html lang="en" className={barlow400.className}>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
