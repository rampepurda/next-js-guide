import { Photo } from "../../../components/Photo"
import { initPhotos } from "../../../types"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { Navigation, Pagination } from "../../../components"
import { navigationProjectsLinks } from "../../../configuration/navigation"
import { environment } from "../../../configuration/environment"
import { ChangeEvent, useEffect, useState } from "react"
import { ROUTE } from "../../../configuration/routes"

interface initValues {
  photos: [initPhotos]
}

export const DynamicalRouting: NextPage<initValues> = ({ photos}) => {
  const[itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [currentItem, setCurrentItem] =useState<number>(0)

 const HandlePage = (ev: ChangeEvent<HTMLInputElement>) => {
   ev.preventDefault()
   setItemsPerPage(Number(ev.target.value))
   setCurrentItem(itemsPerPage)
 }

  useEffect(() => {
    console.log(`itemsPerPage: ${itemsPerPage}, currentItem: ${currentItem}`)
  }, [itemsPerPage, currentItem])

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

          <div>
            <Pagination
              items={photos.length}
              itemsPerPage={10}
              //onPageChange={HandlePage}
            />
          </div>

          {photos.slice(currentItem, itemsPerPage).map((photo, idx: number) => {
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
  //const res = await fetch(`${environment.photosURL}?_limit=20`)
  const limitPerPage: number = 30
  const res = await fetch(`${environment.photosURL}?_limit=${limitPerPage}`)
  const photos = await res.json()

  return {
    props: { photos, limitPerPage }
  }
}

export default DynamicalRouting

