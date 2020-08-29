import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import rootSaga, { sagaMiddleware } from './rootSaga'
import rootReducer from './rootReducer'

const getStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, thunk],
  })

  sagaMiddleware && sagaMiddleware.run(rootSaga)

  return store
}

export default getStore
