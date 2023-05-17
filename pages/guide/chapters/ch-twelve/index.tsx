/**
 * INSTALLATION APOLLO GRAPHQL - SERVER:
 * https://www.apollographql.com/tutorials/lift-off-part1/01-feature-overview-and-setup
 *  Git Copy:
 *  git clone https://github.com/apollographql/odyssey-lift-off-part1
 */

import React, {useEffect, useLayoutEffect} from "react"
import { NextPage } from "next"
import { Navigation, AlertBox, Countries } from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import { getCountries } from "../../../../slices"
import { Pages } from "../../../../configuration/common"

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
          <nav aria-label='read more'>
            <ul>
              <li>
                <a
                  href='https://www.apollographql.com/tutorials/lift-off-part1/03-schema-definition-language-sdl'
                  target='_blank'
                >
                  Apollo GraphQL tutorial
                </a>
              </li>
              <li>
                <a
                  href='https://www.apollographql.com/docs/react/data/queries/'
                  target='_blank'
                  style={{display: 'block'}}
                >
                  Apollo GraphQL queries
                </a>
              </li>
            </ul>
          </nav>
          <hr />

          <h3>12.1 Feature overview - Installation</h3>
          <ul className='hasTypeDisc'>
            <li>
              <h5>Apollo GraphQL</h5>
              yarn add graphql
            </li>
            <li>
              <h5>Apollo Client</h5>
              yarn add @apollo/client
            </li>
          </ul>
          <hr />

          <h3>12.2 Feature data requirements</h3>
          <ul className='hasTypeDisc'>
            <li>
              <h5>Apollo Client</h5>
              <code>const apolloClient = new ApolloClient(&#123;</code>
            </li>
            <li>
              <h5>queries</h5>
              <ul className='hasVerticalPadding-2'>
                <li>import &#123; gql &#125; from "@apollo/client"</li>
                <li>export const GET_COUNTRIES_QUERY = gql`</li>
                <li>&nbsp;query Countries &#123;</li>
                <li>&nbsp;&nbsp;countries &#123;</li>
                <li>&nbsp;&nbsp;&nbsp;code</li>
                <li>&nbsp;&nbsp;&nbsp;emoji</li>
                <li>&nbsp;&nbsp;&nbsp;name</li>
                <li>&#125;&#125;`</li>
              </ul>
            </li>
            <li>
              <h5>Services</h5>
              fetch data
            </li>
            <li>
              <h5>_app.tsx</h5>
              <ul>
                <li>import apolloClient from "../apollo/graphql-client"</li>
                <li>import &#123; ApolloProvider &#125; from "@apollo/client"</li>
                <li>&lt;ApolloProvider client=&#123;apolloClient&#125;&gt;...&lt;/&gt;</li>
              </ul>
            </li>
          </ul>
          <hr />

          <h3>12.3 Schema definition language (SDL)</h3>
          <p>A schema is like a contract between the server and the client. It defines what a GraphQL API can and can't do, and how clients can request or change data. It's an abstraction layer that provides flexibility to consumers while hiding backend implementation details.</p>
          <AlertBox className={'isInfo'}>
            <h5>Definition Schema Language(DSL)</h5>
            <hr />
            <ul className='hasVerticalPadding-2'>
              <li>type SpaceCat &#123;</li>
              <li>&nbsp;&nbsp;name: String! <span className='color-is-black'>// can`t be 'null' || type field</span></li>
              <li>&nbsp;&nbsp;age: Int <span className='color-is-black'>// type field</span></li>
              <li>&nbsp;&nbsp;missions: [Mission] <span className='color-is-black'>// type field</span></li>
              <li>&#125;</li>
            </ul>
            <hr />

            <h5>It`s a good practice to make documentation for each schema</h5>
          </AlertBox>

          <h3>12.4 Ready to Install GraphQL Server</h3>
          <ul className='hasTypeDisc'>
            <li>
              <h5>Clone Apollo GraphQL Server</h5>
              git clone https://github.com/apollographql/odyssey-lift-off-part1
            </li>
            <li>
              <h5>Install Apollo GraphQL Server</h5>
              <span>1. Apollo Server, 2. GraphQL-Tag, 3. GraphQL</span>
              <br />
              <h5>Go to: cd Server and Install</h5>
              yarn add @apollo/server graphql graphql-tag
            </li>
            <li>
              Server/src create File: schema.ts
              <br />
              <a
                href='https://www.apollographql.com/tutorials/lift-off-part1/04-building-our-schema'
                target='_blank'
                rel='author'
              >
                Building our schema
              </a>
            </li>
            <li>
              <h5>Go to: cd Client and run yarn install</h5>
              <br />
              Run local: yarn dev
            </li>
          </ul>
          <hr />

          <h3>{Pages.Guide.headline}</h3>
          <Countries countries={countriesGraphQL.slice(70,80)} />
        </div>
      </div>
    </>
  )
}

export default ChTwelve

