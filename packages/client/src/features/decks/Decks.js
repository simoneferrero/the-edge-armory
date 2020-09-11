import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import AddDeckCard from './AddDeckCard'
import DeckCard from './DeckCard'
import { getAllDecks, selectAllDecks } from './slice'

const StyledDecksContainer = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing()};
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  padding: ${({ theme }) => theme.spacing()} 0;
`

const Decks = () => {
  const dispatch = useDispatch()
  const decks = useSelector(selectAllDecks)

  useEffect(() => {
    dispatch(getAllDecks())
  }, [dispatch])

  return (
    <StyledDecksContainer data-testid="decks">
      <AddDeckCard />
      {[...decks].reverse().map((deck) => (
        <DeckCard key={deck.id} {...deck} />
      ))}
    </StyledDecksContainer>
  )
}

export default Decks
