import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import Button from '../../components/Button'
import AvatarMenu from './AvatarMenu'

import { login, logout, selectAuth } from './slice'

const StyledControls = styled.div`
  grid-area: controls;
`

const Controls = () => {
  const {
    authenticated,
    authData: { nickname, picture },
  } = useSelector(selectAuth)
  const dispatch = useDispatch()

  return (
    <StyledControls>
      {authenticated ? (
        <AvatarMenu
          nickname={nickname}
          picture={picture}
          onLogoutClick={() => dispatch(logout())}
        />
      ) : (
        <Button onClick={() => dispatch(login())}>Log In</Button>
      )}
    </StyledControls>
  )
}

export default Controls
