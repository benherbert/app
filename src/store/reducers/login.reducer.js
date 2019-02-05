const initialState_LoggedIn = false

const loggedIn = (state = initialState_LoggedIn, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      return true
    case 'LOGIN_FAILED':
      return false
    default:
      return state
  }
}

const initialState_LoginAttempt = 0

const loginAttempt = (state = initialState_LoginAttempt, action) => {
  switch (action.type) {
    case 'LOGIN_ATTEMPT':
      return state + 1
    default:
      return state
  }
}

export { loginAttempt, loggedIn }
