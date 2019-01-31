import { put, takeLatest, all } from 'redux-saga/effects';

// import { ACTION_HELLO_WORLD } from './actions'


function* helloSaga() {
  console.log('Hello Sagas!')
  yield put({ type: 'HELLO_WORLD_SAGA' })
}

function* actionWatcher() {
  yield takeLatest(ACTION_HELLO_WORLD, helloSaga)
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ])
}