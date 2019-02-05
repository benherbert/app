// Import Packages
import { put, all, delay, takeLatest, takeEvery } from 'redux-saga/effects'

/**
 * 
 * Worker Sagas
 * ------------
 * (The functions we want to run when the watchers are triggered)
 * 
 */
function * counter_Worker (action) {
  console.log('Counter worker!', action)
  yield put({ type: 'COUNTER_WORKER' })
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
function * counter_Watcher () {
  yield takeEvery('INCREMENT', counter_Worker)
  yield takeLatest('INCREMENT', decrementAsync_Worker) // Demo difference between takeEvery and takeLatest!
  // yield takeLatest('DECREMENT', incrementAsync_Worker)
}

// Export Saga
function * counter_Saga () {
  yield all([counter_Watcher()])
}

export { counter_Saga }
