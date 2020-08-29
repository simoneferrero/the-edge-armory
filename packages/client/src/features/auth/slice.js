import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: false,
    authData: {},
    loading: false,
  },
  reducers: {
    login: (state) => {
      state.loading = true
    },
    checkLoginStatus: (state) => {
      state.loading = true
    },
    checkLoginStatusSuccess: (state, { payload }) => {
      state.loading = false
      state.authenticated = true
      state.authData = payload.authData
    },
    checkLoginStatusError: (state, { payload }) => {
      state.loading = false
    },
    logout: (state) => {
      state.loading = true
    },
  },
})

export const {
  checkLoginStatus,
  checkLoginStatusError,
  checkLoginStatusSuccess,
  login,
  logout,
} = authSlice.actions

export const selectAuth = (state) => state.auth

export default authSlice.reducer
