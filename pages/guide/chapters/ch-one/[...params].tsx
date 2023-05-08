import { useRouter } from "next/router"
import { useEffect } from "react"
import { AlertBox } from "../../../../components"

const ChOneSlug: () => void = () => {
  const router = useRouter()
  const { params = []} = router.query

  useEffect(() => {
  }, [params])

  return <div style={{marginTop: '-.5rem'}}>
    {params.length === 1 || params.length === 2 ? <AlertBox className={'isWarning'}>Pathname is: guide/chapters/ch-one/test/sub/`${params.length}`</AlertBox> : ''}
  </div>


}

export default ChOneSlug

