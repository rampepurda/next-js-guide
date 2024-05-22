import imgNextConfig from '../public/dummy1.jpg'
import imgDummySlide from '../public/dummy2.jpg'
import { SlideShowImages } from '../types'
import { ROUTE } from '../configuration'

export const dataSlideshow: SlideShowImages[] = [
  { url: imgNextConfig, alt: 'one' },
  { url: imgDummySlide, alt: 'two' },
]
export const CarName = [
  {
    model: 'audi',
  },
  {
    model: 'toyota',
  },
  {
    model: 'bmw',
  },
  {
    model: 'ferrari',
  },
  {
    model: 'citroen',
  },
]
export const sidebar = [
  {
    tKey: '1. Routing',
    link: `${ROUTE.GUIDE_CHAPTERS}/ch-one`,
  },
  {
    tKey: '3. Environment',
    link: `${ROUTE.GUIDE_CHAPTERS}/ch-three`,
  },
  {
    tKey: '4. classNames Library',
    link: `${ROUTE.GUIDE_CHAPTERS}/ch-four`,
  },
]
