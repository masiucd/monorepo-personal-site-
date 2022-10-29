import "../styles/global.css"

import Link from "next/link"
import React from "react"

import {barlow400} from "~/lib/fonts"

type Props = {
  children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
  return (
    <html lang="en" className={barlow400.className}>
      <body>
        <header>
          <nav className="border border-red-500">
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
