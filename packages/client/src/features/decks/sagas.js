import axios from 'axios'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import {
  addNewDeck,
  addNewDeckError,
  addNewDeckSuccess,
  getAllDecks,
  getAllDecksSuccess,
  getAllDecksError,
} from './slice'
import { selectAuth } from '../auth/slice'

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST

function* getAllDecksSaga() {
  try {
    const {
      authData: { token },
    } = yield select(selectAuth)
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    const { data } = yield call(axios, `${SERVER_HOST}decks`, {
      method: 'GET',
      headers,
    })

    yield put(getAllDecksSuccess({ decks: data }))
  } catch {
    yield put(getAllDecksError())
  }
}

function* getAllDecksWatcher() {
  yield takeLatest(getAllDecks.type, getAllDecksSaga)
}

function* addNewDeckSaga({ payload: { values } }) {
  try {
    const {
      authData: { token },
    } = yield select(selectAuth)
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    const { data } = yield call(axios, `${SERVER_HOST}decks`, {
      method: 'POST',
      headers,
      data: values,
    })

    yield put(addNewDeckSuccess(data))
  } catch {
    yield put(addNewDeckError())
  }
}

function* addNewDeckWatcher() {
  yield takeLatest(addNewDeck.type, addNewDeckSaga)
}

export default function* rootSaga() {
  yield all([call(getAllDecksWatcher), call(addNewDeckWatcher)])
}
