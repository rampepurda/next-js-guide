/**
 * INSTALLATION APOLLO GRAPHQL - SERVER:
 * https://www.apollographql.com/tutorials/lift-off-part1/01-feature-overview-and-setup
 *  Git Copy:
 *  git clone https://github.com/apollographql/odyssey-lift-off-part1
 */
import React, { useState } from "react"
import classNames from "classnames"
import { NextPage } from "next"
import { Navigation, AlertBox } from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration/navigation";

const ChTwelve: NextPage = () => {

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-twelve</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks}/>
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
                  <h5 style={{color: '#FFA500FF'}}>Apollo GraphQL - server</h5>
                  git clone https://github.com/apollographql/odyssey-lift-off-part1
                </li>
                <li>
                  <h5 style={{color: '#FFA500FF'}}>Apollo Client</h5>
                  yarn add @apollo/client
                </li>
              </ul>
            </li>
            <li>
              <h4>Feature data requirements</h4>
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
        </div>
      </div>
    </>
  )
}

export default ChTwelve

