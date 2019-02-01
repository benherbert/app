// Import Packages
import { takeLatest, all } from 'redux-saga/effects'

// Import Sagas
import { hello } from './hello.saga'

function * actionWatcher () {
  yield takeLatest('HELLO', hello)
}

function * rootSaga () {
  yield all([actionWatcher()])
}

export { rootSaga }
