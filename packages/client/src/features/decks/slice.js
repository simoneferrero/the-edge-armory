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
    getAllDecksSuccess: (state) => {
      state.loading = false
    },
    getAllDecksError: (state, { payload }) => {
      state.loading = false
    },
  },
})

export const {
  getAllDecks,
  getAllDecksSuccess,
  getAllDecksError,
} = decksSlice.actions

export const selectDecks = (state) => state.decks
export const selectAllDecks = (state) =>
  state.decks.decksAllIds.map((id) => state.decks.decksById[id])

export default decksSlice.reducer
