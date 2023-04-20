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
              <h5>Feature overview - Installation</h5>
              <ul className='hasTypeDisc'>
                <li>
                  <h5>Apollo GraphQL - server</h5>
                  git clone https://github.com/apollographql/odyssey-lift-off-part1
                </li>
                <li>
                  <h5>Apollo Client</h5>
                  yarn add @apollo/client
                </li>
              </ul>
            </li>
            <li>Feature data requirements</li>
            <li>
              Schema definition language (SDL)
              <h5>A schema is like a contract between the server and the client. It defines what a GraphQL API can and can't do, and how clients can request or change data. It's an abstraction layer that provides flexibility to consumers while hiding backend implementation details.</h5>
              <hr />
              <h5>Definition Language, or SDL.</h5>
              <AlertBox className={'info'}>
                type SpaceCat &#123;<br/>
                &nbsp;&nbsp;age: Int<br/>
                &nbsp;&nbsp;missions: [Mission]<br/>
                &#125;
              </AlertBox>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ChTwelve

