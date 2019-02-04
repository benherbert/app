const initialState = false

const loggedIn = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      return true
    case 'LOGIN_FAILED':
      return false
    default:
      return state
  }
}

export { loggedIn }
