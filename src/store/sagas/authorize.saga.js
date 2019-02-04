// Import Packages
import { call, take, put, all, delay, takeLatest, takeEvery } from 'redux-saga/effects'

const api = 'https://google.co.uk/'
const user = 'foo@bar.com'
const password = 'top-secret-password'

const apiCall = () => {

  // The Promise
  const myPromise = new Promise((resolve, reject) => {

    // Here you would make a call to an API

    if (1 === 2) {
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

function * login_Saga (user, password) {
  try {
    const token = yield call(apiCall, user, password)

    if (token) {
      yield put({ type: 'LOGIN_SUCCESS', token })
      return token
    }

    throw 'Login Failed'
  } catch (error) {
    console.error(error)
    yield put({ type: 'LOGIN_ERROR', error })
  }
}

export { login_Saga }
