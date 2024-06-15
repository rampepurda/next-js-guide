import { FormPostBook } from '../../../../components'
import Head from 'next/head'
import { environment } from '../../../../configuration'
import { usePostBook } from '../../../../hooks'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type Book = {
  author: string
  title: string
  price: string
}

export default function ChTwentyOne() {
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
  const deleteBook = async (id: number, title: string, author: string) => {
    const res = await fetch(`${environment.fireBaseBookDelete}/${id}.json`, {
      method: 'DELETE',
    })
    try {
      if (res) {
        getBook().then(() => alert(`Deleted: ${author} | ${title}`))
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
    getBook().then((res) => res)
  }, [])

  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-21 | Form</title>
      </Head>

      <div>
        <h2>21. Form</h2>
        <ul className="hasTypeDisc hasVerticalPadding-3">
          <li>
            <h4>onSubmit</h4> is an event attribute, meaning whatever JS is in it will be called on
            the submit event
          </li>
          <li>
            <h4>action</h4> tells the browser where to send the contents of the form when it is
            submitted in either a GET or POST request (POST by default, unless specified otherwise
            by the method attribute), then reloads the page with the result of the request it sent.
          </li>
        </ul>
        <Link
          href="https://stackoverflow.com/questions/74931828/can-someone-explain-the-difference-between-onsubmit-and-action"
          target="_blank"
          rel="noreferrer"
        >
          Read more about submit vs action here
        </Link>
        <FormPostBook OnSubmit={handleSubmitObject} />
        <div>
          <h3>Books</h3>
          {books.length === 0 && <h4>List is empty</h4>}
          <section className="display flex isWrap">
            {books?.length === 0 && <h4>List is empty</h4>}
            {books?.map((book: Book, idx: number) => {
              return (
                <div className="box" key={idx} style={{ width: '30%', border: '1px solid gray' }}>
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
                      deleteBook(idx, book.author, book.title).then((response) => response)
                    }}
                  >
                    Delete
                  </button>
                </div>
              )
            })}
          </section>
        </div>
      </div>
    </>
  )
}
