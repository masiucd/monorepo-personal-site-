import "~/styles/global.css"
import {ThemeProvider} from "next-themes"
import {ReactElement} from "react"
import type {AppProps} from "next/app"
import {NextPageWithLayout} from "~/lib/types"
import {InterFont} from "~/lib/fonts"

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <style jsx global>{`
        html {
          font-family: ${InterFont.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
