import { initPhotos } from "../../../types"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { Navigation, Pagination, Photos } from "../../../components"
import { navigationProjectsLinks } from "../../../configuration"
import { environment } from "../../../configuration"
import { useEffect } from "react"
import { usePaginate } from "../../../hooks"
import { paginateCurrentPost } from "../../../utils"

interface initValues {
  photos: [initPhotos]
}

export const DynamicalRouting: NextPage<initValues> = ({ photos}) => {
  const { currentPage = 1, handlePageChange } = usePaginate('dynamic-route')
  const postPerPage: number = 50 // can be dynamical
  const itemsTotal: number = Number(photos.length)
  const currentPost = paginateCurrentPost(currentPage, photos, postPerPage)

  useEffect(() => {},[postPerPage, photos, currentPost])

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
          />
          <Photos photos={currentPost} />
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

