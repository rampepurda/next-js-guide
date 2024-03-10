import { findAllByRole, render, screen } from '@testing-library/react'
import { Photos } from './Photos'
import { environment, photosDummy } from '../../configuration'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('Try to get server data', () => {
  it('Photos length should be 2', async () => {
    render(
      <Provider store={store}>
        <Photos photos={photosDummy} />
      </Provider>
    )

    const btnElement = await screen.findAllByRole('button')
    expect(btnElement).toHaveLength(2)
  })
})
