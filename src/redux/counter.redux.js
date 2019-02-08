const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const increment = {
  type: INCREMENT
}

const decrement = {
  type: DECREMENT
}

const initialState = 0

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export { counter, increment, decrement }
