// Import Packages
import { takeLatest, takeEvery, all } from 'redux-saga/effects'

// Import Sagas
import { counter_Saga } from './counter.saga'
import { login_Saga } from './login.saga'

// All Sagas
function * root_Saga () {
  yield all([counter_Saga(), login_Saga()])
}

export { root_Saga }
