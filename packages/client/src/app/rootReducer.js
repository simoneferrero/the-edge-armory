import { combineReducers } from 'redux'

import authReducer from '../features/auth/slice'

export default combineReducers({
  auth: authReducer,
})
