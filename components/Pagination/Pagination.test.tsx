import { render, screen } from '@testing-library/react'
import { Pagination } from './'

describe('Pagination', () => {
  test('First and last page in Array have style border-radius', () => {
    render(<Pagination
      currentPage={1}
      itemsTotal={230}
      postPerPage={20}
      paginate={() => {}}
      router={'dynamic-route'}
    />)

    const links = screen.getAllByRole('link')
    const linksHasLeftRadius = screen.getAllByRole('link')

    expect(links.length).toBe(12)
    expect(linksHasLeftRadius[0]).toHaveClass("hasLeftRadius")
    expect(linksHasLeftRadius[11]).toHaveClass("hasRightRadius")
  })
})
