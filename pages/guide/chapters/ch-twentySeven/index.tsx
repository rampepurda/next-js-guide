import style from '../../../../components/Input/Input.module.scss'
import { NextPage } from 'next'
import { Navigation } from '../../../../components'
import { navigationGuideLinks } from '../../../../configuration'
import Head from 'next/head'

import Link from 'next/link'

const ChTwentySeven: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-26 | use client vs use server </title>
      </Head>

      <div className="cols">
        <div className="col-3">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className="col-9">
          <h2>27. &apos;use client&apos; vs &apos;use server&apos;</h2>
          <ul className="hasVerticalPadding-3">
            <li>
              <Link href="https://react-hook-form.com/docs/useform" target="_blank">
                useForm hook - read more
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=R_Pj593TH_Q" target="_blank">
                See Video Tutorial
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=R_Pj593TH_Q" target="_blank">
                See Video Tutorial - useForm hook in React
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  )
}

export default ChTwentySeven
