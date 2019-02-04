// Import Packages
import request from 'superagent'
import { call, take, put, all, delay, takeLatest, takeEvery } from 'redux-saga/effects'

const api = 'https://local.crunch.co.uk:8086/platform-api/login/authorize'
// const api = 'https://accounts.crunch.co.uk/platform-api/login/authorize'
const email = 'foo@bar.com'
const password = 'top-secret-password'

const loginApiCall = () => {
  // The Promise
  const loginPromise = new Promise((resolve, reject) => {
    request
      .post(api)
      .type('application/json')
      .set('Content-Type', 'application/vnd.crunch.login+json; version=1.0')
      .set('X-Forwarded-Host', 'localhost')
      .set('X-Forwarded-For', '127.0.0.1')
      .send({ email: 'email@email.com' })
      .send({ password: 'Crunch1234' })
      .then(res => {
        console.log({ res })
        // res.body, res.headers, res.status
        resolve('resolved')
      })
      .catch(err => {
        console.log({ err })
        // err.message, err.response
      })

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
  return loginPromise.then(onResolved, onRejected)
}

/**
 *
 * Worker Sagas
 *
 */
function * login_Worker (user, password) {
  try {
    const token = yield call(loginApiCall)

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
