import { render, screen } from '@testing-library/react'
import { Countries } from './Countries'
import { useAppSelector } from '../../store'

const Expectation: string = 'Get Countries'

describe('Try to get data-countries', () => {
  test(`${Expectation}`, async () => {
    const { countries } = useAppSelector((state) => state.Countries)
    render(<Countries countries={countries} />)
  })
})
