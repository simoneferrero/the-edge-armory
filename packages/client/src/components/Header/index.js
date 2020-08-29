import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AppBar from '@material-ui/core/AppBar'

const StyledHeader = styled(AppBar)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary} !important;
  display: grid !important;
  grid-template-areas: '. controls';
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`

const Header = ({ children }) => {
  return <StyledHeader position="sticky">{children}</StyledHeader>
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
