import { render, screen } from '@testing-library/react'
import { Pagination } from './'

const Expectation: string = 'First and last page in Array have style border-radiusLeft/Right. Expect Links.length'

describe('Pagination', () => {
  test(`${Expectation}`, () => {
    render(<Pagination
      currentPage={1}
      itemsTotal={230}
      postPerPage={20}
      paginate={() => {}}
    />)

    const links = screen.getAllByRole('button')

    expect(links.length).toBe(12)
    expect(links[0]).toHaveClass("hasRadiusLeft")
    expect(links[11]).toHaveClass("hasRadiusRight")
  })
})
