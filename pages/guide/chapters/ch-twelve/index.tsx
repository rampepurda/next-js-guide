/**
 * INSTALLATION APOLLO GRAPHQL - SERVER:
 * https://www.apollographql.com/tutorials/lift-off-part1/01-feature-overview-and-setup
 *  Git Copy:
 *  git clone https://github.com/apollographql/odyssey-lift-off-part1
 */

import React, { useEffect } from "react"
import { NextPage } from "next"
import { Navigation, AlertBox, Countries } from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import { getCountries } from "../../../../slices"

const ChTwelve: NextPage = () => {
  const dispatch = useAppDispatch()
  const { countriesGraphQL } = useAppSelector(state => state.Countries)

  useEffect(() => {
    dispatch(getCountries())
  }, [countriesGraphQL])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-twelve</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className='col-9'>
          <h2>12. GraphQL</h2>
          <a
            href='https://www.apollographql.com/tutorials/lift-off-part1/03-schema-definition-language-sdl'
            target='_blank'
            >
            Read more
          </a>
          <hr />

          <ul className='hasTypeDecimal'>
            <li>
              <h4>Feature overview - Installation</h4>
              <ul className='hasTypeDisc'>
                <li>
                  <h5 style={{color: '#FFA500FF'}}>Apollo GraphQL</h5>
                  yarn add graphql
                </li>
                <li>
                  <h5 style={{color: '#FFA500FF'}}>Apollo Client</h5>
                  yarn add @apollo/client
                </li>
                <li>
                  <h5 style={{color: '#FFA500FF'}}>Create Apollo GraphQL Server</h5>
                  git clone https://github.com/apollographql/odyssey-lift-off-part1
                </li>

              </ul>
            </li>
            <li>
              <h4>Feature data requirements</h4>
              <ul className='hasTypeDisc'>
                <li>
                  <h5 style={{color: '#FFA500FF'}}>Apollo Client</h5>
                  <code>const apolloClient = new ApolloClient(&#123;</code>
                </li>
                <li>
                  <h5 style={{color: '#FFA500FF'}}>queries</h5>
                  <code>
                    import &#123; gql &#125; from "@apollo/client"<br/>
                    export const GET_COUNTRIES_QUERY = gql`<br/>
                    query Countries &#123;<br/>
                    &nbsp;countries &#123;<br/>
                    &nbsp;&nbsp;code<br/>
                    &nbsp;&nbsp;emoji<br/>
                    &nbsp;&nbsp;name<br/>
                    &#125;&#125;`
                  </code>
                </li>
                <li>
                  <h5 style={{color: '#FFA500FF'}}>Services</h5>
                  fetch data
                </li>
                <li>
                  <h5 style={{color: '#FFA500FF'}}>_app.tsx</h5>
                  <code>
                    import apolloClient from "../apollo/graphql-client"<br/>
                    import &#123; ApolloProvider &#125; from "@apollo/client"<br/>
                    &lt;ApolloProvider client=&#123;apolloClient&#125;&gt;...&lt;/&gt;
                  </code>
                </li>
              </ul>
            </li>
            <li>
              <h4>Schema definition language (SDL)</h4>
              <h5>A schema is like a contract between the server and the client. It defines what a GraphQL API can and can't do, and how clients can request or change data. It's an abstraction layer that provides flexibility to consumers while hiding backend implementation details.</h5>
              <hr />
              <h5>Definition Language, or SDL.</h5>
              <AlertBox className={'info'}>
                <ul>
                  <li>type SpaceCat &#123;</li>
                  <li>&nbsp;&nbsp;age: Int! // can`t be 'null'</li>
                  <li>&nbsp;&nbsp;missions: [Mission]</li>
                  <li>&#125;</li>
                </ul>
              </AlertBox>
            </li>
          </ul>

          <Countries countries={countriesGraphQL.slice(70,80)} />
        </div>
      </div>
    </>
  )
}

export default ChTwelve

