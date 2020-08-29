import axios from 'axios'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { getAllDecks, getAllDecksSuccess, getAllDecksError } from './slice'
import { selectAuth } from '../auth/slice'

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST

function* decksSaga() {
  try {
    const {
      authData: { token },
    } = yield select(selectAuth)
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    const { data } = yield call(axios, `${SERVER_HOST}`, {
      method: 'GET',
      headers,
    })
    console.log(data)

    yield put(getAllDecksSuccess())
  } catch {
    yield put(getAllDecksError())
  }
}

function* decksWatcher() {
  yield takeLatest(getAllDecks.type, decksSaga)
}

export default function* rootSaga() {
  yield all([call(decksWatcher)])
}
