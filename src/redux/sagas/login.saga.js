// Import Packages
import { call, take, put, all, delay, takeLatest, takeEvery } from 'redux-saga/effects'

// Import Requests
import { loginRequest } from '../../requests/login.request'

/**
 *
 * Worker Sagas
 *
 */
function * login_Worker (user, password) {
  try {
    const token = yield call(loginRequest)

    if (token) {
      yield put({ type: 'LOGIN_SUCCEEDED', token })
      return token
    }

    throw 'Login Failed'
  } catch (error) {
    console.error(error)
    yield put({ type: 'LOGIN_FAILED', error })
  }
}

/**
 *
 * Watcher Sagas
 *
 */
function * login_Watcher () {
  yield takeLatest('LOGIN_ATTEMPT', login_Worker)
}

// Export Saga
function * login_Saga () {
  yield all([login_Watcher()])
}

export { login_Saga }
