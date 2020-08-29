import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components/macro'

import { darken, lighten } from '../../helpers/color'

const resetStyles = css`
  background: none;
  border: none;
  font: inherit;
  outline: inherit;
`
const buttonStyles = css`
  ${({ theme }) => `
    background-color: ${darken(theme.colors.primary, 0.4)};
    border-radius: ${theme.radius()};
    color: ${theme.colors.text.light};
    cursor: pointer;
    font-family: ${theme.fonts.headers};
    font-weight: 700;
    padding: ${theme.spacing()} ${theme.spacing(2)};
    text-transform: uppercase;

    &:hover {
      background-color: ${darken(theme.colors.primary, 0.8)};
    }

    &:disabled {
      background-color: ${lighten(theme.colors.primary, 0.5)};
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`
const StyledButton = styled.button`
  ${resetStyles}
  ${buttonStyles}
`

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
