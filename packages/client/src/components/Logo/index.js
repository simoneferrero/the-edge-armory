import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const StyledLogo = styled.img`
  border: 0;
  max-height: 40px;
`

const Logo = ({ src }) => <StyledLogo alt="The Edge: Dawnfall logo" src={src} />

Logo.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Logo
