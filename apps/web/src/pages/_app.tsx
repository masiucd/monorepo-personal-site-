import "~/styles/global.css"

import type {AppProps} from "next/app"
import {ThemeProvider} from "next-themes"
import {ReactElement} from "react"

import {MainFont} from "~/lib/fonts"
import {NextPageWithLayout} from "~/lib/types"

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <style jsx global>{`
        html {
          font-family: ${MainFont.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
