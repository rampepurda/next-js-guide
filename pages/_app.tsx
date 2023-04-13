import '../styles/index.scss'

import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../store/store'
import { Header, Navigation } from "../components"
import React from "react"
import { navigationLinks } from "../configuration/navigation"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Navigation isMain={true} links={navigationLinks} />

      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}

