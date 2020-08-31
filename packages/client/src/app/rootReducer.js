import { combineReducers } from 'redux'

import authReducer from '../features/auth/slice'
import decksReducer from '../features/decks/slice'

export default combineReducers({
  auth: authReducer,
  decks: decksReducer,
})
