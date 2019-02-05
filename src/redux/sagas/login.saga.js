// Import Packages
import request from 'superagent'
import { call, take, put, all, delay, takeLatest, takeEvery } from 'redux-saga/effects'

const api = 'http://google.com'

const email = 'foo@bar.com'
const password = 'top-secret-password'

const loginApiCall = () => {
  // The Promise
  const loginPromise = new Promise((resolve, reject) => {
    request
      .post(api)
      .set('Content-Type', 'application/json')
      .send({ email: 'email@email.com', password: 'Crunch1234' })
      .then(response => {
        const { body, header, status } = response
        console.log({ body })
        console.log({ headers })
        console.log({ status })
        resolve('resolved')
      })
      .catch(error => {
        const { message, response } = error
        console.log({ message })
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
  yield takeLatest('LOGIN_ATTEMPT', login_Worker)
}

// Export Saga
function * login_Saga () {
  yield all([login_Watcher()])
}

export { login_Saga }
