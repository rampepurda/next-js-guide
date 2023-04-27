import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client"
import { environment  } from '../configuration/environment'

const apolloClient = new ApolloClient({
  uri: environment.clientURL,
  cache: new InMemoryCache(),
});

export default apolloClient