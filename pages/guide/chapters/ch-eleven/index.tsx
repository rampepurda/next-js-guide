import { NextPage } from "next"
import { Navigation, AlertBox } from "../../../../components"
import Head from "next/head"
import { navigationGuideLinks } from "../../../../configuration/navigation"
import Image from "next/image"
import imgRedirect from '../../../../public/images/ch-nine/redirects.png'

export const ChEleven: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-eleven</title>
      </Head>

      <div className='cols'>
        <div className='col-3 has-br'>
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className='col-9'>
          <h2>11. <code>&lt;</code>Image /<code>&gt;</code></h2>

          <Image
            src={imgRedirect}
            aria-hidden={true}
            alt='next js redirects'
          />
        </div>
      </div>
    </>
  )
}

export default ChEleven