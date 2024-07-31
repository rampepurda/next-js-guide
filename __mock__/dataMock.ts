import imgNextConfig from '../public/dummy1.jpg'
import imgDummySlide from '../public/dummy2.jpg'
import { SlideShowImages } from '../types'
import { ROUTE } from '../configuration'

export const dataSlideshow: SlideShowImages[] = [
  { url: imgNextConfig, alt: 'one' },
  { url: imgDummySlide, alt: 'two' },
]
export const apiData = {
  user: {
    name: 'Michal Tomek',
    address: 'Na Micance',
    email: 'tomki@gmail.com',
  },
  users: [
    {
      name: 'Michal Tomek',
      address: 'Na Micance',
      email: 'tomki@gmail.com',
    },
  ],
}

export const CarName = [
  {
    id: 1,
    model: 'audi',
  },
  {
    id: 2,
    model: 'toyota',
  },
  {
    id: 3,
    model: 'bmw',
  },
  {
    id: 4,
    model: 'ferrari',
  },
  {
    id: 5,
    model: 'citroen',
  },
]
export const navigation = {
  primary: [
    {
      tKey: '1. Routing',
      link: '/home/dummy',
    },
    {
      tKey: '3. Environment',
      link: '/test/dummy',
    },
  ],
  sidebar: [
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
  ],
}
