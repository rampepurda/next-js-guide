import { environment } from '../../configuration'
import { useEffect, useState } from 'react'

type Book = {
  author: string
  title: string
  price: string
}

export function BooksPage() {
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

  useEffect(() => {
    getBook().then()
  }, [])

  return (
    <>
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
    </>
  )
}
