import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from './constants/theme'
import { checkLoginStatus, selectAuth } from './features/auth/slice'
import NavBar from './features/auth/NavBar'
import LinearLoader from './components/LinearLoader'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
  }

  * {
    box-sizing: border-box;
  }
`

const App = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(selectAuth)

  useEffect(() => {
    dispatch(checkLoginStatus())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {loading ? (
        <LinearLoader />
      ) : (
        <>
          <NavBar />
          <Container maxWidth="sm">
            <div>Hello!</div>
          </Container>
        </>
      )}
    </ThemeProvider>
  )
}

export default App
