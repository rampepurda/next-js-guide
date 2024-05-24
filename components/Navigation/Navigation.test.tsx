import { render, screen, within } from '@testing-library/react'
import { Navigation } from './'
import { NavType } from '../../types'
import { navigation } from '../../__mock__/dataMock'

describe('Navigation', () => {
  it('Sidebar Navigation is rendered', () => {
    render(<Navigation isNav={NavType.Sidebar} links={navigation.sidebar} />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByLabelText(/isLeft/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link').length).toBe(3)
    expect(screen.getByTestId('navigationType')).toHaveClass('navLeft')
    expect(screen.getByTestId('navigationType')).not.toHaveClass('Navigation_primary__sMDeq')
  })
})
