import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import apolloClient from '../apollo/graphql-client'
import { ApolloProvider } from '@apollo/client'
import { store } from '../store'
import { DateBox, Header, Main, Navigation, NavAccordion, Theme } from '../components'
import { navPrimary } from '../configuration'
import Head from 'next/head'
import { NavType } from '../types'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header>
          <DateBox />
          <Theme ariaLabel={'controlled'} />
        </Header>
        <Navigation isNav={NavType.Primary} links={navPrimary} />
        <NavAccordion />

        <Main>
          <Component {...pageProps} />
        </Main>
      </ApolloProvider>
    </Provider>
  )
}
