import '../styles/index.scss'

import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../store/store'
import { Header, Navigation, Switch } from "../components"
import { navigationLinks } from "../configuration/navigation"
import { useState } from "react"
import classNames from "classnames"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<boolean>(false)

  return (
    <Provider store={store}>
      <Header className={`${theme ? 'isDark' : null}`}>
        <Switch
          OnChange={(e) => setTheme(!theme)}
          aria-label='controlled'
        />
      </Header>
      <Navigation isMain={true} links={navigationLinks} />

      <main className={classNames([theme ? 'isDark' : null])}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}

