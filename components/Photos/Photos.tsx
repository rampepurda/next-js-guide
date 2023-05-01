import React from 'react'
import { Photo } from '../Photo'
import { initPhotos } from "../../types"

type Props = initPhotos[]

export const Photos = ({photos}: {photos: Props}) => {
  return (
    <div>
      {
        photos.map((photo,idx) => (
          <Photo {...photo} key={idx} />
        ))
      }
    </div>
  )
}
