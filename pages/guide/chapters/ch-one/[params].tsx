import { useRouter } from 'next/router'
import { Countries, InfoBox } from '../../../../components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useAppSelector } from '../../../../store'

const ChOneSlug: () => void = () => {
  const { ch1SlugNavigation } = useAppSelector((state) => state.Common)
  const { countries } = useAppSelector((state) => state.Countries)
  const path = usePathname()
  const router = useRouter()
  const { params = [] } = router.query
  //const pathName = Array.from(params)
  const linksArray = Array.from(ch1SlugNavigation)
  const navLink: string = 'Countries'
  const nameArray: string[] = ['Countries', 'leonor', 'darmojed']
  const activeLink: string = '/guide/chapters/ch-one'
  const mockData: string[] = ['Audi', 'BMW', 'Fiat', 'Hyundai', 'Kia']

  return (
    <>
      <Link href="/guide/chapters/ch-one">Go back</Link>
      <hr />

      {ch1SlugNavigation.filter((i) => `${activeLink}/${i}` === path) && (
        <Countries countries={countries.slice(1, 5)} />
      )}
      <hr />

      {params.length >= 1 && (
        <InfoBox className="isWarning">
          <h3>PathName is: {path}</h3>
        </InfoBox>
      )}
    </>
  )
}

export default ChOneSlug
