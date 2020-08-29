import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, checkLoginStatus, logout, selectAuth } from './slice'

const Header = () => {
  const auth = useSelector(selectAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkLoginStatus())
  }, [dispatch])

  return (
    <header>
      {auth.authenticated ? (
        <>
          <span>Hello, {auth.authData.nickname}!</span>
          <button onClick={() => dispatch(logout())}>Log Out</button>
        </>
      ) : (
        <>
          <span>Please, log in</span>
          <button onClick={() => dispatch(login())}>Log In</button>
        </>
      )}
    </header>
  )
}

export default Header
