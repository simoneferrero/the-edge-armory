import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import styled from 'styled-components/macro'

import factions from '../../constants/factions'

const StyledCard = styled(Card)`
  font-family: ${({ theme }) => theme.fonts.headers};
`

const DeckCard = ({ faction, name }) => (
  <StyledCard>
    <CardContent>
      <h3>{name}</h3>
      <h5>{factions.find(({ value }) => value === faction).label}</h5>
    </CardContent>
  </StyledCard>
)

DeckCard.propTypes = {
  faction: PropTypes.oneOf(factions.map(({ value }) => value)),
  name: PropTypes.string.isRequired,
}

export default DeckCard
