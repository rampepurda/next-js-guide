import { Photo } from "../../../components/Photo"
import { initPhotos } from "../../../types"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { Navigation, Pagination } from "../../../components"
import { navigationProjectsLinks } from "../../../configuration/navigation"
import { environment } from "../../../configuration/environment"
import { useEffect } from "react"
import { usePaginate } from "../../../hooks"
import { ROUTE } from "../../../configuration/routes"

interface initValues {
  photos: [initPhotos]
}

export const DynamicalRouting: NextPage<initValues> = ({ photos}) => {
  const { currentPage = 1, handlePageChange } = usePaginate()
  const postPerPage: number = 50 // can be dynamical
  const itemsTotal: number = Number(photos.length)
  const currentPost = photos.slice(currentPage * postPerPage - postPerPage, currentPage * postPerPage)

  useEffect(() => {},[itemsTotal, postPerPage, photos, currentPost])

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

          {!photos ? <h4>...loading, wait</h4> : ''}

          <Pagination
            currentPage={currentPage}
            itemsTotal={itemsTotal}
            postPerPage={postPerPage}
            paginate={handlePageChange}
            router={ROUTE.PROJECT_DYN_ROUTE}
          />

          {currentPost.map((photo, idx: number) => {
            return (
              <Photo {...photo} key={idx} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${environment.photosURL}?_limit=200`)
  const photos = await res.json()

  return {
    props: {
      photos
    }
  }
}

export default DynamicalRouting

