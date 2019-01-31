// import { ACTION_COUNTER } from './actions'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const initialState = 0

const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default combineReducers({
  reducerCounter
})