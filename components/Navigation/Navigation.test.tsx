import { render, screen } from '@testing-library/react'
import { Navigation } from './'
import { NavType } from '../../types'
import { navigationProjectsLinks } from '../../configuration'

describe('Navigation', () => {
  it('Renders navigation', () => {
    render(<Navigation isNav={NavType.Sidebar} links={navigationProjectsLinks} />)

    const navigation = screen.getByRole('navigation')
    const links = screen.getAllByRole('link')
    expect(navigation).toBeInTheDocument()
    expect(links.length).toBe(3)
  })
})
