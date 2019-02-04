// Import Packages
import { call, take, put, all, delay, takeLatest, takeEvery } from 'redux-saga/effects'

const api = 'https://google.co.uk/'
const user = 'foo@bar.com'
const password = 'top-secret-password'

const loginApiCall = () => {

  // The Promise
  const myPromise = new Promise((resolve, reject) => {

    // Here you would make a call to an API
    const response = false

    // But lets pretend it came back ok...
    if (response) {
      resolve('resolved')
    }
    reject('rejected')
  })

  // Promise Resolved
  const onResolved = resolvedValue => {
    console.log(resolvedValue)
    return 'fakeToken1992dssd8d9'
  }

  // Promise Rejected
  const onRejected = rejectedValue => {
    console.log(rejectedValue)
    return false
  }

  // Return Promise using .then()
  return myPromise.then(onResolved, onRejected)
}

/**
 * 
 * Worker Sagas
 * 
 */
function * login_Worker (user, password) {
  try {
    const token = yield call(loginApiCall, user, password)

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
  yield takeLatest('ATTEMPT_LOGIN', login_Worker)
}

// Export Saga
function * login_Saga () {
  yield all([login_Watcher()])
}

export { login_Saga }
