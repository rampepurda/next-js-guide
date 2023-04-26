import '../styles/index.scss'

import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import apolloClient from "../apollo/graphql-client"
import { ApolloProvider } from "@apollo/client"
import { store } from '../store/store'
import { Header, Navigation, Switch } from "../components"
import { navigationLinks } from "../configuration/navigation"
import { useState } from "react"
import classNames from "classnames"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<boolean>(false)

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Header className={`${theme ? 'isDark' : null}`}>
          <Switch
            OnChange={() => setTheme(!theme)}
            aria-label='controlled'
          />
        </Header>
        <Navigation isMain={true} links={navigationLinks} />

        <main className={classNames([theme ? 'isDark' : null])}>
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </Provider>
  )
}

