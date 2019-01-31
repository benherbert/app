// Import Packages
import React from 'react'
import ReactDOM from 'react-dom'

// Import Redux
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Import Store
import allReducers from './store/reducers/index'
import rootSaga from './store/sagas'

// Import Components
import ConnectedApp from './components/app/App'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  allReducers
)

// sagaMiddleware.run(rootSaga)

// Log the initial state
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
