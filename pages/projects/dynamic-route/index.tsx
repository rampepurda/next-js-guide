import React from "react"
import { Photo } from "../../../components/Photo"
import { initPhotos } from "../../../types"
import { GetServerSideProps, NextPage } from "next"

interface initValues {
  photos: [initPhotos]
}

export const DynamicalRouting: NextPage<initValues> = ({ photos}) => {
  return (
    <div className='has-padding'>
      <h2>File Based</h2>
      { !photos ? <h4>...loading, wait</h4> : ''}

      { photos?.map((photo, idx: number) => {
        return (
          <Photo {...photo} key={idx}/>
        )
      })}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  const photos = await res.json()

  return {
    props: { photos }
  }
}

export default DynamicalRouting

