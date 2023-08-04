import { NextPage } from 'next'
import { Navigation, InfoBox, FormPostBook } from '../../../../components'
import Head from 'next/head'
import { environment, navigationGuideLinks } from '../../../../configuration'
import ImgSubmitHandle from './ch21-submit-structure.png'
import { usePostBook } from '../../../../hooks'
import ImgForm from './ch21-form.png'
import Image from 'next/image'

const ChTwentyOne: NextPage = () => {
  const { handleSubmit } = usePostBook(
    `${environment.fireBaseBookURL}`,
    'Book you asking for was send to us'
  )
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-21 | Form </title>
      </Head>

      <div className="cols">
        <div className="col-3 has-br">
          <Navigation links={navigationGuideLinks} />
        </div>

        <div className="col-9">
          <h2>21. Form - what is new | knowledge refresher</h2>
          <ul className="hasTypeDisc hasVerticalPadding-3">
            <li>
              <strong>onsubmit</strong> is an event attribute, meaning whatever JS is in it will be
              called on the submit event
            </li>
            <li>
              <strong>action</strong> tells the browser where to send the contents of the form when
              it is submitted in either a GET or POST request (POST by default, unless specified
              otherwise by the method attribute), then reloads the page with the result of the
              request it sent.
            </li>
            <li>
              <a
                href="https://stackoverflow.com/questions/74931828/can-someone-explain-the-difference-between-onsubmit-and-action"
                target="_blank"
                rel="noreferrer"
              >
                Read more about submit vs action here
              </a>
            </li>
          </ul>
          <hr />
          <FormPostBook OnSubmit={handleSubmit} />
          <hr />

          <InfoBox className={'isWarning'}>
            <h4>Data are &apos;POST&apos; to: FIREBASE(books), see .ENV</h4>
          </InfoBox>

          <Image src={ImgSubmitHandle} alt="submit handle" aria-hidden={true} />
          <hr />
          <Image src={ImgForm} alt="form focus on name param" aria-hidden={true} />
        </div>
      </div>
    </>
  )
}

export default ChTwentyOne
