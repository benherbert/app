// Import Packages
import { put } from 'redux-saga/effects'

function * hello () {
  console.log('Hello Saga!')
  yield put({ type: 'HELLO' })
}

export { hello }
