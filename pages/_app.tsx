import '../styles/index.scss'

import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../store/store'
import { Layout, Header, Navigation } from "../core-components"
import React from "react"
import data from '../data-mock/data.json'

export default function MyApp({ Component, pageProps }: AppProps) {
  const links = data.Navigation

  return (
    <Provider store={store}>
      <Header />

      <Navigation isMain={true} links={links} />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

