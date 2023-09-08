import { GetServerSideProps } from 'next'
import { PhotoType } from '../../../types'
import { environment, navigationProjectsLinks } from '../../../configuration'
import Image from 'next/image'
import { Navigation } from '../../../components'
import Head from 'next/head'
import React from 'react'

/**
 * RECT NEXT Js - Client Side Rendering
 * https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering
 * @function getStaticProps - Only Run on Server Side - data are rendered during the build process, NEVER RUN ON CLIENT SIDE
 * @function getServerSideProps - Only Run on Client Side - data are rendered when Client ask for data (onCLick, ...)
 */

interface Props {
  photo: PhotoType
}

function ProjectFileBasedId({ photo }: Props) {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Photo detail</title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationProjectsLinks} />
        </div>

        <div className="col-9">
          <div style={{ padding: '1rem' }}>
            <h2>{photo.title}</h2>
            <Image src={`${photo.url}`} alt={`${photo.title}`} height={400} width={400} />
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${environment.photosURL}/${context.query.id}`)
  const photo = await res.json()

  return {
    props: {
      photo,
    },
  }
}

export default ProjectFileBasedId
