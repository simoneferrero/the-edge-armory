import createSagaMiddleware from 'redux-saga'
import { all, call } from 'redux-saga/effects'

import authSaga from '../features/auth/sagas'

export const sagaMiddleware = createSagaMiddleware()

export default function* rootSaga() {
  yield all([call(authSaga)])
}
