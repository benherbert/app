import { combineReducers } from 'redux'

// Import Reducers
import { counter } from './counter.reducer'

// Combine Reducers
const allReducers = combineReducers({
  counter
})

export { allReducers }
