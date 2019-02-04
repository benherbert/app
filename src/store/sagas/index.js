// Import Packages
import { takeLatest, takeEvery, all } from 'redux-saga/effects'

// Import Sagas
import { hello_Saga } from './hello.saga'
import { login_Saga } from './authorize.saga'

// All Sagas
function * root_Saga () {
  yield all([hello_Saga(), login_Saga()])
}

export { root_Saga }
