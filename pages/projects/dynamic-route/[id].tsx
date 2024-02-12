import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { environment } from '../../../configuration'
import Image from 'next/image'
import Head from 'next/head'
import React from 'react'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${environment.photosURL}/${context.query.id}`)
  const photo = await res.json()
  return { props: { photo } }
}

export default function Page({ photo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Next JS | Guide | {photo.id}</title>
      </Head>

      <div>
        <h2>{photo.title}</h2>
        <Image src={`${photo.url}`} alt={`${photo.title}`} height={400} width={400} />
      </div>
    </>
  )
}
