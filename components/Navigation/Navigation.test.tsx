import { render, screen, within } from '@testing-library/react'
import { Navigation } from './'
import { navigationLinks as navigationLinksMockData } from '../../configuration/navigation'

// https://github.com/vercel/next.js/issues/7479
jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  }),
}))

describe('Navigation', () => {
  test('Renders navigation', () => {
    render(<Navigation isMain={true} links={navigationLinksMockData} />)

    const navigation = screen.getByRole('navigation')
    const links = screen.getAllByRole('link')
    expect(navigation).toBeInTheDocument()
    expect(links.length).toBe(4)
  })

})
