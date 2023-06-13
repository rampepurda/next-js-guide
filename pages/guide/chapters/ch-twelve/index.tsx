/**
 * INSTALLATION APOLLO GRAPHQL - SERVER:
 * https://www.apollographql.com/tutorials/lift-off-part1/01-feature-overview-and-setup
 *  Git Copy:
 *  git clone https://github.com/apollographql/odyssey-lift-off-part1
 */
/** useQueries
 * @const {data} = useQueries(GET_QUERIES)
 * @requires <Countries countries={data.countries.slice(70,80)} />
 */

import React, {useEffect, useLayoutEffect} from "react"
import { NextPage } from "next"
import { Navigation, InfoBox, Countries } from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"
import { getCountries } from "../../../../slices"
import { Pages } from "../../../../configuration/pages"
import { useQuery } from "@apollo/client"
import { GET_COUNTRIES_QUERY } from "../../../../queries"
import imgApolloStructure from '../../../../public/images/ch-twelve/apollo_structure_optimize.png'
import Image from "next/image"

const ChTwelve: NextPage = () => {
  const dispatch = useAppDispatch()
  const { countriesGraphQL } = useAppSelector(state => state.Countries)
  const { data } = useQuery(GET_COUNTRIES_QUERY)

  useEffect(() => {
    dispatch(getCountries())
  }, [countriesGraphQL])

  return (
    <>
      <Head>
        <title>Next JS | Guide | {Pages.Guide.chTwelve.headline}</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className='col-9'>
          <h2>{Pages.Guide.chTwelve.headline}</h2>
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

          <h2>Client Side</h2>
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

          <h3>12.2 Feature data requirements (CLIENT)</h3>
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
                <li className='hasVerticalPadding-2'>import apolloClient from "../apollo/graphql-client"</li>
                <li className='hasVerticalPadding-2'>import &#123; ApolloProvider &#125; from "@apollo/client"</li>
                <li className='hasVerticalPadding-10'>&lt;ApolloProvider client=&#123;apolloClient&#125;&gt;...&lt;/&gt;</li>
              </ul>
            </li>
          </ul>
          <hr />

          <h3>12.3 Schema definition language (SDL)</h3>
          <p>A schema is like a contract between the server and the client. It defines what a GraphQL API can and can't do, and how clients can request or change data. It's an abstraction layer that provides flexibility to consumers while hiding backend implementation details.</p>
          <InfoBox className={'isInfo'}>
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
          </InfoBox>

          <h2>GraphQL Server Side</h2>
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
              <br />
              <a
                href='https://www.apollographql.com/docs/apollo-server/schema/schema'
                target='_blank'
                rel='author'
              >
                Schema how to setup, read here
              </a>
              <h4>Naming conventions</h4>
              Field names should use <strong>camelCase</strong> or <strong>PascalCase</strong>. Many GraphQL clients are written in JavaScript, Java, Kotlin, or Swift, all of which recommend camelCase for variable names.
            </li>
            <li>
              <h5>Mocking data on Server, need to install:</h5>
              To enable mocked data, we'll need to use two new packages: @graphql-tools/mock and @graphql-tools/schema.
              <h5>yarn add @graphql-tools/mock @graphql-tools/schema</h5>
              npm install @graphql-tools/mock @graphql-tools/schema
            </li>
            <li>
              <h5>Run GraphQL Server:</h5>
              <strong>cd server // yarn start</strong>
            </li>
          </ul>
          <Image
            src={imgApolloStructure}
            alt='ApolloStructure'
          />
          <hr />

          <h3>Example: List of Countries with Apollo GraphQL - ClientSideRendering</h3>
          <Countries countries={countriesGraphQL.slice(70,80)} />
        </div>
      </div>
    </>
  )
}

export default ChTwelve

