import { useRouter } from 'next/router'
import { Button } from '../../../../components'
import { usePathname, useSearchParams } from 'next/navigation'

const ChOneSlug: () => void = () => {
  const path = usePathname()
  const router = useRouter()
  const queries = useSearchParams()
  const { params = [] } = router.query
  const styleSheet: any = {
    cover: {
      padding: '1rem',
    },
    headline: {
      margin: '.2rem 0 1rem 0',
      color: '#e79706',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  }

  return (
    <div style={styleSheet.cover}>
      <label>Param is:</label>
      <h4 style={styleSheet.headline}>{params}</h4>
      <label>PathName is:</label>
      <h4 style={styleSheet.headline}>{path}</h4>
      {queries.get('chanel') === 'netflix' && (
        <>
          <label>If has search param queries:</label>
          <h4 style={styleSheet.headline}>Query name is: `${queries.get('chanel')}`</h4>
        </>
      )}
      <hr />

      <Button
        ClassName={'btn-primary'}
        rest={{ type: 'button' }}
        hasLink={true}
        url={'/guide/chapters/ch-one'}
        title={'Back'}
      />
    </div>
  )
}

export default ChOneSlug
