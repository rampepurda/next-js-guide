import { useRouter } from 'next/router'
import { InfoBox } from '../../../../components'

const ChOneSlug: () => void = () => {
  const router = useRouter()
  const { params = [] } = router.query
  const pathName = Array.from(params)
  const configuration = {
    pathName: 'Pathname is: guide/chapters/ch-one/test/sub',
  }

  return (
    <>
      {pathName.includes('sub') ? <h2>Welcome in Sub section</h2> : ''}
      {params.length === 1 && (
        <InfoBox className="isWarning">
          {configuration.pathName}/{params.length}
        </InfoBox>
      )}
    </>
  )
}

export default ChOneSlug
