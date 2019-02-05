/**
 * ACTIONS
 */
const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'
const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
const LOGIN_FAILED = 'LOGIN_FAILED'

const loginAttempted = {
  type: LOGIN_ATTEMPT
}

const loginSucceeded = {
  type: LOGIN_SUCCEEDED
}

const loginFailed = {
  type: LOGIN_FAILED
}

/**
 * REDUCERS
 */
const loggedIn = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return true
    case LOGIN_FAILED:
      return false
    default:
      return state
  }
}

const loginAttempt = (state = 0, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return state + 1
    default:
      return state
  }
}

/**
 * EXPORTS
 */

export { loginAttempt, loggedIn, loginAttempted, loginSucceeded, loginFailed }
