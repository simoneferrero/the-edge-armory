import { all, call, put, takeLatest } from 'redux-saga/effects'
import createAuth0Client from '@auth0/auth0-spa-js'

import {
  checkLoginStatus,
  checkLoginStatusError,
  checkLoginStatusSuccess,
  login,
  logout,
} from './slice'

const initialiseAuth = async () => {
  const auth0 = await createAuth0Client({
    domain: process.env.REACT_APP_DOMAIN,
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URL,
  })

  return auth0
}

let auth

function* loginSaga() {
  try {
    if (!auth) {
      auth = yield call(initialiseAuth)
    }

    yield auth.loginWithRedirect()
  } catch (e) {
    console.log('login error:', e)
  }
}

function* loginWatcher() {
  yield takeLatest(login.type, loginSaga)
}

function* checkLoginStatusSaga() {
  try {
    if (!auth) {
      auth = yield call(initialiseAuth)
    }

    const token = yield auth.getTokenSilently()

    const user = yield auth.getUser()

    console.log(JSON.stringify(user, null, 2))
    yield put(
      checkLoginStatusSuccess({
        authData: {
          ...user,
          token,
        },
      }),
    )
  } catch {
    // TODO: redirect user to login page
    yield put(checkLoginStatusError())
  }
}

function* checkLoginStatusWatcher() {
  yield takeLatest(checkLoginStatus.type, checkLoginStatusSaga)
}

function* logoutSaga() {
  try {
    if (!auth) {
      auth = yield call(initialiseAuth)
    }

    auth.logout()
  } catch (e) {
    console.log('redirect error', e)
  }
}

function* logoutWatcher() {
  yield takeLatest(logout.type, logoutSaga)
}

export default function* rootSaga() {
  yield all([
    call(loginWatcher),
    call(checkLoginStatusWatcher),
    call(logoutWatcher),
  ])
}
