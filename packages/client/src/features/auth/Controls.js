import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../components/Button'
import AvatarMenu from './AvatarMenu'

import { login, logout, selectAuth } from './slice'

const Controls = () => {
  const {
    authenticated,
    authData: { nickname, picture },
  } = useSelector(selectAuth)
  const dispatch = useDispatch()

  return (
    <div>
      {authenticated ? (
        <AvatarMenu
          nickname={nickname}
          picture={picture}
          onLogoutClick={() => dispatch(logout())}
        />
      ) : (
        <Button onClick={() => dispatch(login())}>Log In</Button>
      )}
    </div>
  )
}

export default Controls
