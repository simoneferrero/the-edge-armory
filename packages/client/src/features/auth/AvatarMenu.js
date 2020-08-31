import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components/macro'

const StyledAvatarMenuWrapper = styled.div`
  > button {
    padding: 0;
  }
`

const AvatarMenu = ({ nickname, onLogoutClick, picture }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)

  return (
    <StyledAvatarMenuWrapper>
      <IconButton
        aria-label="user account"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={handleMenuOpen}
      >
        <Avatar alt={nickname} src={picture} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        onClose={handleMenuClose}
        open={!!anchorEl}
      >
        <MenuItem onClick={onLogoutClick}>Log out</MenuItem>
      </Menu>
    </StyledAvatarMenuWrapper>
  )
}

AvatarMenu.propTypes = {
  nickname: PropTypes.string.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired,
}

export default AvatarMenu
