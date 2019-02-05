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
import { root_Saga } from './store/sagas/index'

// Import Components
import ConnectedApp from './components/0-connected/app/App'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(root_Saga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
