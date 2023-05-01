import { Photo } from "../../../components/Photo"
import { initPhotos } from "../../../types"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { Navigation } from "../../../components"
import { navigationProjectsLinks } from "../../../configuration/navigation"
import { environment } from "../../../configuration/environment"

interface initValues {
  photos: [initPhotos]
}

export const DynamicalRouting: NextPage<initValues> = ({ photos}) => {
  return (
    <>
      <Head>
        <title>Next JS | Projects | Dynamic router</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationProjectsLinks} />
        </div>
        <div className='col-9'>
          { !photos ? <h4>...loading, wait</h4> : ''}

          { photos?.map((photo, idx: number) => {
            return (
              <Photo {...photo} key={idx}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${environment.photosURL}?_limit=10`)
  const photos = await res.json()

  return {
    props: { photos }
  }
}

export default DynamicalRouting

