import '../styles/index.scss'

import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import apolloClient from "../apollo/graphql-client"
import { ApolloProvider } from "@apollo/client"
import { store } from '../store/store'
import { Header, Navigation, Switch } from "../components"
import { navigationLinks } from "../configuration/navigation"
import { useMemo, useState } from "react"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<boolean>(false)
  const isDark = useMemo((): string => {
    if(theme) {
      return 'isDark'
    } else {return ''}
  }, [theme])

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Header className={isDark}>
          <Switch
            OnChange={() => setTheme(!theme)}
            aria-label='controlled'
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

