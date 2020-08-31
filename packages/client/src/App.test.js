import React from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'
import { waitFor } from '@testing-library/react'

import { renderWithRedux } from './helpers/testRenderers'
import { token, userData } from './mocks/auth'

import App from './App'

jest.mock('@auth0/auth0-spa-js')

describe('Given <App />', () => {
  const render = (state) => {
    const component = renderWithRedux(<App />, state)
    const { queryByRole, queryByTestId } = component

    return {
      ...component,
      getDecks: () => queryByTestId('decks'),
      getHeader: () => queryByRole('header'),
      getProgressBar: () => queryByRole('progressbar'),
    }
  }

  it('renders correctly', async () => {
    createAuth0Client.mockResolvedValue(
      jest.fn(() => ({
        getTokenSilently: () => token,
        getUser: () => userData,
      })),
    )
    const { getDecks, getHeader, getProgressBar } = render()

    expect(getProgressBar()).toBeInTheDocument()
    expect(getDecks()).not.toBeInTheDocument()
    expect(getHeader()).not.toBeInTheDocument()

    await waitFor(() => {
      expect(getProgressBar()).not.toBeInTheDocument()
      expect(getDecks()).toBeInTheDocument()
      expect(getHeader()).toBeInTheDocument()
    })
  })
})
