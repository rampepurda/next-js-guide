import classes from './SlideShow.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SlideShowImages } from '../../types'

interface Props {
  images: SlideShowImages[]
}

export const SlideShow = ({ images }: Props) => {
  const [currentImgIdx, setCurrentImgIdx] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIdx((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <figure>
      {images.map((img, idx: number) => {
        return (
          <Image
            className={idx === currentImgIdx ? classes.isActive : classes.isNotActive}
            src={img.url}
            alt={img.alt}
            key={idx}
            aria-hidden={true}
          />
        )
      })}
    </figure>
  )
}
