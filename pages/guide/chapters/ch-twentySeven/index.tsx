import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const ChTwentySeven: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-26 | use client vs use server </title>
      </Head>

      <div>
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
    </>
  )
}

export default ChTwentySeven
