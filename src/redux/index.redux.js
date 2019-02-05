import { combineReducers } from 'redux'

// Import Reducers
import { counter } from './counter.redux'
import { loggedIn, loginAttempt } from './login.redux'

// Combine Reducers
const allReducers = combineReducers({
  counter,
  loggedIn,
  loginAttempt
})

export { allReducers }
