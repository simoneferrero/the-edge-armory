import { createSlice } from '@reduxjs/toolkit'

export const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    loading: true,
    decksById: {},
    decksAllIds: [],
  },
  reducers: {
    getAllDecks: (state) => {
      state.loading = true
    },
    getAllDecksSuccess: (state, { payload: { decks } }) => {
      state.loading = false
      state.decksById = decks.reduce(
        (allDecks, deck) => ({
          ...allDecks,
          [deck.id]: deck,
        }),
        {},
      )
      state.decksAllIds = decks.map(({ id }) => id)
    },
    getAllDecksError: (state) => {
      state.loading = false
    },
    addNewDeck: (state) => {
      state.loading = true
    },
    addNewDeckSuccess: (state, { payload: deck }) => {
      state.loading = false
      state.decksById[deck.id] = deck
      state.decksAllIds.push(deck.id)
    },
    addNewDeckError: (state, { payload }) => {
      state.loading = false
    },
  },
})

export const {
  addNewDeck,
  addNewDeckError,
  addNewDeckSuccess,
  getAllDecks,
  getAllDecksError,
  getAllDecksSuccess,
} = decksSlice.actions

export const selectDecks = (state) => state.decks
export const selectAllDecks = (state) =>
  state.decks.decksAllIds.map((id) => state.decks.decksById[id])

export default decksSlice.reducer
