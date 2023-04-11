import style from '../chapters.module.scss'

import React from "react"
import classNames from "classnames"

export const ChNine = ({ID}: {ID: number}) => {
  return (
    <div
      className={style.ChaptersModuleSheet}
      style={{display: ID === 9 ? 'block' : 'none'}}>
      <h2>9. Redirects</h2>
      <p>
        <a
          href='https://nextjs.org/docs/api-reference/next.config.js/redirects'
          target='_blank'
          aria-label='Read more about Next Redirect'
          rel='noreferrer'
        >
          Read more about Next Redirects
        </a>
      </p>

      <h4>
      Redirects allow you to redirect an incoming request path to a different destination path.
      <br/>
      To use Redirects you can use the redirects key in <span className='color-is-red'>next.config.js</span>
      </h4>

      <img src='./images/ch-nine/redirects.png' aria-hidden={true} alt='next js redirects'/>
      <p>
        <mark>redirects</mark> is an async function that expects an array to be returned holding objects with source, destination, and permanent properties:
        <br/>
        - <mark>source</mark> is the incoming request path pattern.
        <br/>
        - <mark>destination</mark> is the path you want to route to.
        <br/>
        - <mark>permanent</mark> <strong>true or false</strong>
        <br/>
        if <strong>true</strong> will use the <mark>308 status</mark> code which instructs clients/search engines to cache the redirect forever.
        <br/>
        if <strong>false</strong> will use the <mark>307 status</mark> code which is temporary and is not cached.
      </p>

      <a
        href='https://nextjs.org/docs/api-reference/next.config.js/redirects'
        target='_blank'
        aria-label='Read more about Next Redirect'
        rel='noreferrer'
      >
        Read more about Next Redirects
      </a>
    </div>
  )
}


