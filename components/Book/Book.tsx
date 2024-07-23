import classes from './Book.module.scss'
import classNames from 'classnames'
import { BookT } from '../../types'
import { Button } from '../UI'
import { MouseEventHandler } from 'react'

type Props = {
  ClassName?: string
  book: BookT
  handleDelete?: MouseEventHandler<HTMLButtonElement>
}

export const Book = ({ ClassName, book, handleDelete }: Props) => {
  return (
    <div className={classNames(classes.box, ClassName)}>
      <label>Title:</label>
      <h3>{book.title}</h3>
      <label>Author:</label>
      <h3>{book.author}</h3>
      <label>Price:</label>
      <h3>{book.price} Kč</h3>
      <hr />
      <Button
        ClassName={'btn-remove'}
        title={'Delete'}
        rest={{ type: 'button' }}
        OnClick={handleDelete}
      />
    </div>
  )
}
