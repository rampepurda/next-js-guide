import style from '../../chapters.module.scss'

import React, { useState } from "react"
import classNames from "classnames"
import { NextPage } from "next"
import { Navigation, AlertBox } from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration/navigation";
import Image from "next/image"
import imgSrc from '../../../../public/images/ch-five/email_validation.png'

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
            <li>Feature overview</li>
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

