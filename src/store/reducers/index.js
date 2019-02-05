import { combineReducers } from 'redux'

// Import Reducers
import { counter } from './counter.reducer'
import { loggedIn, loginAttempt } from './login.reducer'

// Combine Reducers
const allReducers = combineReducers({
  counter,
  loggedIn,
  loginAttempt
})

export { allReducers }
