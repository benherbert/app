import expect from 'expect'

import { loginAttempted, loginSucceeded, loginFailed, loggedIn as reducerLoggedIn, loginAttempt as reducerLoginAttempt } from '../login.redux'

describe('loggedIn', () => {
  it('should return the initial state', () => {
    expect(reducerLoggedIn(undefined, {})).toEqual(false)
  })

  it('should handle LOGIN_SUCCEEDED and set loggedIn to true', () => {
    expect(reducerLoggedIn(false, loginSucceeded)).toEqual(true)
  })

  it('should handle LOGIN_FAILED and set loggedIn to false', () => {
    expect(reducerLoggedIn(false, loginFailed)).toEqual(false)
  })
})

describe('loginAttempt', () => {
  it('should return the initial state', () => {
    expect(reducerLoginAttempt(undefined, {})).toEqual(0)
  })

  it('should handle LOGIN_ATTEMPT and increment loginAttempts to 1', () => {
    expect(reducerLoginAttempt(0, loginAttempted)).toEqual(1)
  })
})
