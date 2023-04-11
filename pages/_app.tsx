import '../styles/index.scss'

import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../store/store'
import { Layout, Header, Navigation } from "../core-components"
import React from "react"

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Header />

      <Navigation />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

