import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import Add from '@material-ui/icons/Add'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

import { addNewDeck } from './slice'
import factions from '../../constants/factions'

const StyledCard = styled(Card)`
  font-family: ${({ theme }) => theme.fonts.headers};

  & form {
    display: flex;
    flex-wrap: wrap;
  }
`

const StyledSubmitButton = styled(IconButton)`
  margin-left: auto !important;
  margin-top: ${({ theme }) => theme.spacing(2)} !important;
`

const AddDeckCard = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [faction, setFaction] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name || !faction) return

    dispatch(addNewDeck({ values: { name, faction } }))
    setName('')
    setFaction('')
  }

  return (
    <StyledCard>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            helperText="Please select a name for your deck"
            id="standard-basic"
            label="Name"
            onChange={({ target: { value } }) => setName(value)}
            required
            value={name}
          />
          <TextField
            helperText="Please select a faction for your deck"
            id="standard-select"
            label="Faction"
            onChange={({ target: { value } }) => setFaction(value)}
            required
            select
            value={faction}
          >
            {factions.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
          <StyledSubmitButton type="submit">
            <Add />
          </StyledSubmitButton>
        </form>
      </CardContent>
    </StyledCard>
  )
}

export default AddDeckCard
