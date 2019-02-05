const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'
const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
const LOGIN_FAILED = 'LOGIN_FAILED'

const loginAttempt = {
  type: LOGIN_ATTEMPT
}

const loginSucceeded = {
  type: LOGIN_SUCCEEDED
}

const loginFailed = {
  type: LOGIN_FAILED
}

export { loginAttempt, loginSucceeded, loginFailed }
