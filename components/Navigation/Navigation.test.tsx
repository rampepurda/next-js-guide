import { render, screen, within } from '@testing-library/react'
import { Navigation } from './'
import { NavType } from '../../types'
import { sidebar } from '../../__mock__/dataMock'

describe('Navigation', () => {
  it('Sidebar Navigation is rendered', () => {
    render(<Navigation isNav={NavType.Sidebar} links={sidebar} />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByLabelText(/isLeft/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link').length).toBe(3)
  })
  it('Primary Navigation is rendered and includes back Link to Home', () => {
    render(<Navigation isNav={NavType.Sidebar} links={sidebar} />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByLabelText(/isLeft/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link').length).toBe(3)
  })
})
