import Head from 'next/head'
import Link from 'next/link'
import { InfoBox } from '../../../components'

export default function ChClientVsServer() {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-26 | use client vs use server </title>
      </Head>

      <div>
        <h2>&apos;use client&apos; vs &apos;use server&apos;</h2>
        <ul className="hasVerticalPadding-3">
          <li>
            <Link
              href="https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns"
              target="_blank"
              rel="noreferrer"
            >
              see Comparison here
            </Link>
          </li>
        </ul>
        <hr />

        <div className="cols">
          <div className="col-6">
            <h3>&apos;use client&apos;</h3>
            <InfoBox className="isInfo">
              <p>Use only in case when is absolutely necessary!</p>
            </InfoBox>
            <ul className="hasTypeDisc">
              <li>useState, useEffect, usePathname()</li>
              <li>Interactivity (onClick...etc)</li>
              <li>&lt;Link&gt;</li>
              <li>
                <strong className="color-is-red">x</strong>
              </li>
              <li>
                <strong className="color-is-red">x</strong>
                <br />
                Error: async/await is not yet supported in Client Components, only Server
                Components. This error is often caused by accidentally adding `'use client'` to a
                module that was originally written for the server.
              </li>
            </ul>
          </div>
          <div className="col-6">
            <h3>&apos;use server&apos;</h3>
            <InfoBox className="isInfo">
              <p>Inside APP files are &apos;use server&apos; as default</p>
            </InfoBox>
            <ul className="hasTypeDisc">
              <li>
                <strong className="color-is-red">x</strong>
              </li>
              <li>
                <strong className="color-is-red">x</strong>
              </li>
              <li>&lt;Link&gt;</li>
              <li>metadata</li>
              <li>async/await</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
