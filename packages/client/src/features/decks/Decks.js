import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getAllDecks } from './slice'

const Decks = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllDecks())
  }, [dispatch])

  return <div data-testid="decks">Decks</div>
}

export default Decks
