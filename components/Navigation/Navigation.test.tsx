import { render, screen, within } from '@testing-library/react'
import { Navigation } from './'
import { NavType } from '../../types'
import { sidebar } from '../../__mock__/dataMock'

describe('Navigation', () => {
  it('Renders navigation', () => {
    render(<Navigation isNav={NavType.Sidebar} links={sidebar} />)

    const navigation = screen.getByRole('navigation')
    const ariaLabelNav = screen.getByLabelText(/isLeft/i)
    const links = within(navigation).getAllByRole('link')

    expect(navigation).toBeInTheDocument()
    expect(ariaLabelNav).toBeInTheDocument()
    expect(links.length).toBe(3)
  })
})
