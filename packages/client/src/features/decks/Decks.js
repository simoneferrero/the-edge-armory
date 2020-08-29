import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllDecks } from './slice'

const Decks = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllDecks())
  }, [dispatch])

  return <div>Decks</div>
}

export default Decks
