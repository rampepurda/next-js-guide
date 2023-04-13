import '../styles/index.scss'

import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../store/store'
import { Header, Navigation } from "../core-components"
import React from "react"
import data from '../data-mock/data.json'

export default function MyApp({ Component, pageProps }: AppProps) {
  const links = data.Navigation

  return (
    <Provider store={store}>
      <Header />
      <Navigation isMain={true} links={links} />

      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}

