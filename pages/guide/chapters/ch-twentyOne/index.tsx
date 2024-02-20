import { NextPage } from 'next'
import { InfoBox, FormPostBook } from '../../../../components'
import Head from 'next/head'
import { environment } from '../../../../configuration'
import ImgSubmitHandle from './ch21-submit-structure.png'
import { usePostBook } from '../../../../hooks'
import ImgForm from './ch21-form.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Book = {
  author: string
  title: string
  price: string
}

const ChTwentyOne: NextPage = () => {
  const [books, setBooks] = useState<Book[]>([])
  const getBook = async () => {
    const res = await fetch(`${environment.fireBaseBookURL}`)
    try {
      if (res) {
        const data = await res.json()
        // Need to use 'for' iterables, cause data in Firebase are wrapped in one more object
        // Thats why is not possible to simply defined data as: setBooks(data)
        let getData: Book[] = []
        for (let i in data) {
          getData.push(data[i])
        }
        return setBooks(getData)
      }
    } catch (err) {
      return err
    }
  }
  const deleteBook = async (id: number) => {
    try {
      const res = await fetch(`${environment.fireBaseBookDelete}/${id}.json`, {
        method: 'DELETE',
      })
      if (res) {
        getBook().then(() => alert('Deleted'))
      }
    } catch (err) {
      return err
    }
  }
  const { handleSubmitObject } = usePostBook(
    `${environment.fireBaseBookURL}`,
    'Book you asking for was send to us',
    getBook
  )

  useEffect(() => {
    getBook()
    console.log(books.length)
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-21 | Form </title>
      </Head>

      <div>
        <h2>21. Form - what is new | knowledge refresher</h2>
        <ul className="hasTypeDisc hasVerticalPadding-3">
          <li>
            <strong>onsubmit</strong> is an event attribute, meaning whatever JS is in it will be
            called on the submit event
          </li>
          <li>
            <strong>action</strong> tells the browser where to send the contents of the form when it
            is submitted in either a GET or POST request (POST by default, unless specified
            otherwise by the method attribute), then reloads the page with the result of the request
            it sent.
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

        <div className="cols">
          <div className="col col-6">
            <FormPostBook OnSubmit={handleSubmitObject} />

            <InfoBox className={'isDanger'}>
              <h3>Remember:</h3>
              <ul className="hasTypeDisc" style={{ marginLeft: '1rem' }}>
                <li>
                  const formDataObject = <strong>Object</strong>.fromEntries(formData)
                </li>
                <li>
                  Form entry data <strong>name</strong> must be identical with data object names:
                  <br />
                  <code>
                    &lt;input name=&apos;<strong>address</strong>&apos; /&gt; || object: &#123;
                    <strong> address</strong>: &apos; &apos; &#125;
                  </code>
                </li>
              </ul>
            </InfoBox>

            <h3>Note:</h3>
            <h4>&apos;POST&apos; Book to Firebase and &apos;DELETE&apos;:</h4>
            <p>
              &apos;POST&apos; without problem but can not be DELETED cause got from Firebase
              nonsensical ID
            </p>
          </div>
          <div className="col col-6">
            <h3>Books</h3>
            {books.length === 0 && <h4>List is empty</h4>}
            <ul>
              {books.length > 0 &&
                books?.map((book: Book, idx: number) => {
                  return (
                    <li key={idx} style={{ marginBottom: '1rem', border: '1px solid gray' }}>
                      <label>Title:</label>
                      <h3>{book.title}</h3>
                      <label>Author:</label>
                      <h3>{book.author}</h3>
                      <label>Price:</label>
                      <h3>{book.price}</h3>
                      <button
                        className="btn btn-remove"
                        type="button"
                        onClick={(ev) => {
                          ev.preventDefault()
                          deleteBook(idx)
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
        <hr />

        <InfoBox className={'isWarning'}>
          <h4>Data are &apos;POST&apos; to: FIREBASE(books), see .ENV</h4>
        </InfoBox>

        <Image src={ImgSubmitHandle} alt="submit handle" aria-hidden={true} />
        <hr />
        <Image src={ImgForm} alt="form focus on name param" aria-hidden={true} />
      </div>
    </>
  )
}

export default ChTwentyOne
