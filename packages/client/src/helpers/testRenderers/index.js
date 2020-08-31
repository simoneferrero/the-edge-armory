import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import getStore from '../../app/store'
import theme from '../../constants/theme'
import mockState from '../../mocks/mockState'

export const renderWithRedux = (Component, state) =>
  render(
    <Provider store={getStore(state ?? { ...mockState, ...state })}>
      {Component}
    </Provider>,
  )

export const fullRender = (Component, state) =>
  render(
    <Provider store={getStore(state)}>
      <ThemeProvider theme={theme}>{Component}</ThemeProvider>
    </Provider>,
  )
