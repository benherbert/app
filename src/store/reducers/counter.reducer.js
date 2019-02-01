const initialState = 0

const counter = (state = initialState, action) => {
  console.log({state})
  console.log({action})

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export { counter }
