import { Button } from '../../../../components'
import { useParams, usePathname, useSearchParams } from 'next/navigation'

export default function ChOneSlug() {
  const path = usePathname()
  /*
    const router = useRouter()
    const { slug = [] } = router.query
   */
  const queries = useSearchParams()
  const params = useParams<{ slug: string }>()
  const styleSheet: any = {
    cover: {
      padding: '1rem 2rem',
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
      <h4 style={styleSheet.headline}>{params.slug}</h4>
      <label>PathName is:</label>
      <h4 style={styleSheet.headline}>{path}</h4>
      {queries.get('chanel') === 'netflix' && (
        <>
          <label>If has search param queries value - is:</label>
          <h4 style={styleSheet.headline}>{queries.get('chanel')}</h4>
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
