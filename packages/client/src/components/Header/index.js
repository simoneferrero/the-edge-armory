import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AppBar from '@material-ui/core/AppBar'

import { fade } from '../../helpers/color'

const StyledHeader = styled(AppBar)`
  align-items: center;
  background-color: ${({ theme }) =>
    fade(theme.colors.primary, 0.1)} !important;
  flex-direction: row !important;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`

const Header = ({ children }) => {
  return (
    <StyledHeader role="header" position="sticky">
      {children}
    </StyledHeader>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
