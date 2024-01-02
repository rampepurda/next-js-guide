import { useRouter } from 'next/router'
import { InfoBox } from '../../../../components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ChOneSlug: () => void = () => {
  const path = usePathname()
  const router = useRouter()
  const { params = [] } = router.query
  const pathName = Array.from(params)

  return (
    <>
      <Link href="/guide/chapters/ch-one">Go back</Link>
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
