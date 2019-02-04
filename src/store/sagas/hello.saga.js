// Import Packages
import { put, all, delay, takeLatest, takeEvery } from 'redux-saga/effects'

/**
 * 
 * Worker Sagas
 * ------------
 * (The functions we want to run when the watchers are triggered)
 * 
 */
function * hello_Worker (action) {
  console.log('Hello worker!', action)
  yield put({ type: 'HELLO_WORKER' })
}

function * decrementAsync_Worker (action) {
  console.log('Decrement after 1 second', action)
  yield delay(1500)
  yield put({ type: 'DECREMENT' })
}

function * incrementAsync_Worker (action) {
  console.log('Increment after 1 second', action)
  yield delay(1500)
  yield put({ type: 'INCREMENT' })
}

/**
 * 
 * Watcher Sagas
 * ------------
 * (The redux actions we want to watch for)
 * 
 */
function * hello_Watcher () {
  yield takeEvery('INCREMENT', hello_Worker)
  yield takeLatest('INCREMENT', decrementAsync_Worker) // Demo difference between takeEvery and takeLatest!
  // yield takeLatest('DECREMENT', incrementAsync_Worker)
}

// Export Saga
function * hello_Saga () {
  yield all([hello_Watcher()])
}

export { hello_Saga }
