import { NextPage } from 'next'
import { InfoBox, Countries } from '../../../../components'
import Head from 'next/head'
import { Pages } from '../../../../configuration'
import { useAppSelector } from '../../../../redux/store'
import Image from 'next/image'
import imgApolloStructure from '../../../../public/images/ch-twelve/apollo_structure_optimize.png'
import imgResolvers from '../../../../public/images/ch-twelve/apollo_resolvers.png'

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

const ChTwelve: NextPage = () => {
  const { countries } = useAppSelector((state) => state.Countries)
  //const { data, error, loading } = useQuery(GET_COUNTRIES_QUERY)

  return (
    <>
      <Head>
        <title>Next JS | Guide | {Pages.guide.chTwelve.headline}</title>
      </Head>

      <div>
        <h2>{Pages.guide.chTwelve.headline}</h2>
        <ul className="hasVerticalPadding-2">
          <li>
            <a
              href="https://www.apollographql.com/tutorials/lift-off-part1/03-schema-definition-language-sdl"
              target="_blank"
              rel="noreferrer"
            >
              Apollo GraphQL tutorial
            </a>
          </li>
          <li>
            <a
              href="https://www.apollographql.com/docs/react/data/queries/"
              target="_blank"
              rel="noreferrer"
            >
              Apollo GraphQL queries
            </a>
          </li>
        </ul>
        <hr />
        <h2>Client side</h2>
        <h3>1. Installation</h3>
        <ul className="hasTypeDisc">
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
        <h3>2. Feature data requirements (CLIENT)</h3>
        <ul className="hasTypeDisc">
          <li>
            <h5>Apollo Client</h5>
            <code>const apolloClient = new ApolloClient(&#123; url &#125;)</code>
          </li>
          <li>
            <h5>queries, mutations</h5>
            <ul className="hasVerticalPadding-2">
              <li>import &#123; gql &#125; from &quot;@apollo/client&quot;</li>
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
            <h5>Fetch Apollo Client</h5>
          </li>
          <li>
            <h5>_app.tsx</h5>
            <ul>
              <li className="hasVerticalPadding-2">
                import apolloClient from &quot;../apollo/graphql-client&quot;
              </li>
              <li className="hasVerticalPadding-2">
                import &#123; ApolloProvider &#125; from &quot;@apollo/client&quot;
              </li>
              <li className="hasVerticalPadding-10">
                <h4>&lt;ApolloProvider client=&#123;apolloClient&#125;&gt; content &lt;/&gt;</h4>
              </li>
            </ul>
          </li>
        </ul>
        <hr />

        <h3>3. useQuery hook</h3>
        <code>import &#123; useQuery &#125; from &quot;@apollo/client&quot;</code>
        <ul className="hasVerticalPadding-3">
          <li>
            <code>const &#123; data, error, loading &#125; = useQuery(GET_QUERY)</code>
          </li>
          <li>
            <code>if(?data) &#123; loading &#125;)</code>
          </li>
          <li>
            <code>if(?data) &#123; error &#125;)</code>
          </li>
          <li>
            <code>&#123; data.map(() =&gt; &#123; &#125;)</code>
          </li>
        </ul>

        <hr />

        <h2>GraphQL Server Side</h2>
        <a href="https://www.apollographql.com/tutorials/" target="_blank" rel="noreferrer">
          Apollo GraphQL tutorials (Lift of II Resolvers)
        </a>
        <h3>1. Ready to Install GraphQL Server</h3>
        <ul className="hasTypeDisc">
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
              href="https://www.apollographql.com/tutorials/lift-off-part1/04-building-our-schema"
              target="_blank"
              rel="noreferrer"
            >
              Building our schema
            </a>
            <br />
            <a
              href="https://www.apollographql.com/docs/apollo-server/schema/schema"
              target="_blank"
              rel="noreferrer"
            >
              Schema how to setup, read here
            </a>
            <h4>Naming conventions</h4>
            Field names should use <strong>camelCase</strong> or <strong>PascalCase</strong>. Many
            GraphQL clients are written in JavaScript, Java, Kotlin, or Swift, all of which
            recommend camelCase for variable names.
          </li>
          <li>
            <h5>Mocking data on Server, need to install:</h5>
            To enable mocked data, we'll need to use two new packages: @graphql-tools/mock and
            @graphql-tools/schema.
            <h5>yarn add @graphql-tools/mock @graphql-tools/schema</h5>
            npm install @graphql-tools/mock @graphql-tools/schema
          </li>
          <li>
            <h5>Run GraphQL Server:</h5>
            <strong>cd server // yarn start</strong>
          </li>
        </ul>
        <hr />

        <h3>3. Schema definition language (SDL)</h3>
        <p>
          A schema is like a contract between the server and the client. It defines what a GraphQL
          API can and can not do, and how clients can request or change data. It`&#39;s an
          abstraction layer that provides flexibility to consumers while hiding backend
          implementation details.
        </p>
        <InfoBox className={'isInfo'}>
          <h5>Definition Schema Language(DSL)</h5>
          <hr />
          <ul className="hasVerticalPadding-2">
            <li>type SpaceCat &#123;</li>
            <li>
              &nbsp;&nbsp;name: String!{' '}
              <span className="color-is-black">|| can`t be &apos;null&apos; || type field</span>
            </li>
            <li>
              &nbsp;&nbsp;age: Int <span className="color-is-black">|| type field</span>
            </li>
            <li>
              &nbsp;&nbsp;missions: [Mission] <span className="color-is-black">|| type field</span>
            </li>
            <li>&#125;</li>
          </ul>
          <hr />
          <h5>It`s a good practice to make documentation for each schema</h5>
        </InfoBox>
        <Image src={imgApolloStructure} alt="ApolloStructure" />

        <hr />
        <h3>3. Resolvers</h3>
        <ul className="hasTypeDecimal">
          <li>
            <h4>Install:</h4>
            <h4>yarn add @apollo/datasource-rest</h4>
            <a
              href="https://www.apollographql.com/tutorials/lift-off-part2/04-implementing-our-restdatasource"
              target="_blank"
              rel="noreferrer"
            >
              Datasource tutorial here
            </a>
          </li>
          <li>
            <h4>
              Create new files in Server/src: <strong>datasource</strong>
            </h4>
            <h4>
              Create new files in Server/src/<strong>datasource/</strong>:{' '}
              <strong>track-api.js</strong>{' '}
            </h4>
          </li>
          <li>
            <h4>Create module - resolvers.js</h4>
            <a
              href="https://www.apollographql.com/tutorials/lift-off-part2/05-the-shape-of-a-resolver"
              target="_blank"
              rel="noreferrer"
            >
              Resolvers tutorial here
            </a>
          </li>
          <li>
            <h4>Change &apos;schema.js&apos; and &apos;index.js&apos; structure</h4>
          </li>
        </ul>
        <Image src={imgResolvers} alt="Resolvers parameters" />
        <hr />
        <h3>4. Mutation</h3>
        <InfoBox className={'isInfo'}>
          <h4>
            So far, our app has only used one type of GraphQL <strong>operation: queries</strong>.
            These are <strong>read-only operations</strong> to retrieve data. To modify data, we
            need to use another type of GraphQL <strong>operation: mutations</strong>, which are
            write operations.
          </h4>
          <br />
          <h4>
            Much like the Query type, the <strong>Mutation type</strong> serves as an entry point to
            our schema. It follows the same syntax as the schema definition language, or SDL, that
            we've been using so far.
          </h4>
        </InfoBox>
        <h3>3.1 Mutation - Schema syntax</h3>
        <p>
          We declare the Mutation type using the type keyword, then the name Mutation. Inside the
          curly braces, we have our entry points, the fields we'll be using to mutate our data.
        </p>
        <InfoBox className={'isWarning'}>
          <h4>
            type Mutation &#123; incrementTrackViews(id: ID!): IncrementTrackViewsResponse! &#125;
          </h4>
          <hr />
          <ul className="hasVerticalPadding-2">
            <li>type IncrementTrackViewsResponse &#123;</li>
            <li>&nbsp;code: Int!</li>
            <li>&nbsp;success: Boolean!</li>
            <li>&nbsp;message: String!</li>
            <li>&nbsp;track: Track</li>
            <li>&#125;</li>
          </ul>
        </InfoBox>
        <p>
          We recommend starting with a <strong>verb</strong> that describes the specific action of
          our update operation <strong>(such as add, delete, or create)</strong>, followed by
          whatever data the mutation acts on. Because mutations typically modify a specific object,
          they often require arguments. We can add arguments as needed, following the same SDL
          syntax. The return type of the mutation comes after the colon.
        </p>
        <h4>For more see Next JS Apollo GraphQL Project</h4>

        <h3>3.2 Mutation - `gql`</h3>
        <InfoBox className={'isInfo'}>
          <ul className="hasVerticalPadding-2">
            <li>
              export <strong>const GET_TRACK_NUM_VIEWS = gql`</strong>
            </li>
            <li>&nbsp;mutation GetTruckNumOfView($incrementTrackViewsId: ID!) &#123;</li>
            <li>&nbsp;&nbsp; code</li>
            <li>&nbsp;&nbsp; message</li>
            <li>&nbsp;&nbsp; success</li>
            <li>&nbsp;&nbsp; track &#123; ... &#125;</li>
            <li>&#125;</li>
          </ul>
        </InfoBox>
        <hr />
        <h3>3.2 Mutation - use</h3>
        <InfoBox className={'isInfo'}>
          <h4>import &#123; useMutation &#125; from &apos;@apollo/client&apos;;</h4>
          <hr />
          <ul className="hasVerticalPadding-2">
            <li>
              const [incrementTrackViews] = <strong>useMutation(GET_TRACK_NUM_VIEWS</strong>, &#123;
            </li>
            <li>&nbsp;variables: &#123; incrementTrackViewsId: id &#125;</li>
            <li>&#125;</li>
          </ul>
          <hr />
          <code>&nbsp;return ( onClick=&#123;(ev) =&gt; incrementTrackViews()&#125; )</code>
        </InfoBox>
        <h4>If you unlike useMutation see Next Apollo GraphQL Project/Client/src/services</h4>
        <hr />

        <h3>Example: List of Countries with Apollo GraphQL - ClientSideRendering</h3>
        <Countries countries={countries.slice(80, 90)} />
      </div>
    </>
  )
}

export default ChTwelve
