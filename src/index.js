// Import Packages
import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'

// Import Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Import Store
import { allReducers } from './store/reducers/index'
import rootSaga from './store/sagas/index'

// Import Components
import ConnectedApp from './components/0-connected/App'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, applyMiddleware(sagaMiddleware, logger))

// TDOD: enable this --- it doesn't work yet!
// sagaMiddleware.run(rootSaga)

// Log the initial state
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
