import { combineReducers } from 'redux'

// Import Reducers
import { counter } from './counter.reducer'
import { attemptLogin } from './attemptLogin.reducer'
import { loggedIn } from './loggedIn.reducer'

// Combine Reducers
const allReducers = combineReducers({
  counter,
  attemptLogin,
  loggedIn
})

export { allReducers }
