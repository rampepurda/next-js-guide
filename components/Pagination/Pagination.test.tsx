import { render, screen } from '@testing-library/react'
import { Pagination } from './'

const Expectation: string = 'Expect Links correct length'

describe('Pagination', () => {
  test(`${Expectation}`, () => {
    render(<Pagination currentPage={1} itemsTotal={20} postPerPage={10} paginate={() => {}} />)
    const btnElement = screen.getAllByRole('button')
    expect(btnElement.length).toBe(2)
  })
})
