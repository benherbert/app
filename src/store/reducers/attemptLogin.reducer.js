const initialState = 0

const attemptLogin = (state = initialState, action) => {
  switch (action.type) {
    case 'ATTEMPT_LOGIN':
      return state + 1
    default:
      return state
  }
}

export { attemptLogin }
