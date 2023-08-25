import '../styles/index.scss'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import apolloClient from '../apollo/graphql-client'
import { ApolloProvider } from '@apollo/client'
import { store } from '../store/store'
import { DateBox, Header, Navigation, SwitchLanguage } from '../components'
import { navigationLinks } from '../configuration'
import { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import { useWindWidth } from '../hooks/useWindWidth'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<boolean>(false)
  const isDark = useMemo((): string => {
    if (mode) {
      return 'isDark'
    } else {
      return ''
    }
  }, [mode])
  const { windowSize, isMediumDevice, getWindWidth } = useWindWidth()
  const dataAccor = [
    {
      title: 'Select project',
    },
  ]

  useEffect(() => {
    getWindWidth()
  }, [])

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header className={isDark}>
          {windowSize >= isMediumDevice && <DateBox />}
          <SwitchLanguage
            OnChange={() => setMode(!mode)}
            ariaLabel={'controlled'}
            isModeDark={mode}
          />
        </Header>
        <Navigation isMain={true} links={navigationLinks} />

        <main className={isDark}>
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </Provider>
  )
}
