import { ApolloClient, InMemoryCache } from '@apollo/client'
import { environment } from '../../configuration'

const apolloClient = new ApolloClient({
  uri: environment.countriesURL,
  cache: new InMemoryCache(),
})

export default apolloClient
