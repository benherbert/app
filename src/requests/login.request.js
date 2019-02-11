import request from 'superagent'

/**
 * Constants
 */
const api = ''
/**
 * Superagent Post
 */
const superagentPost = (resolve, reject) => {
  request
    .post(api)
    .set('Content-Type', '')
    .send({ firstName: '' })
    .send({ lastName: '' })
    .send({ email: '' })
    .send({ password: '' })
    .then(response => {
      const { body, header, status } = response
      resolve('the-token-or-something')
    })
    .catch(error => {
      const { message, response } = error
    })
  reject('rejected')
}

const loginRequest = () => {
  /**
   * Promise
   */
  const loginPromise = new Promise((resolve, reject) => {
    superagentPost(resolve, reject)
  })

  // Promise Resolved
  const onResolved = resolvedValue => {
    console.log(resolvedValue)
    return resolvedValue
  }

  // Promise Rejected
  const onRejected = rejectedValue => {
    console.log(rejectedValue)
    return false
  }

  // Promise Returned
  return loginPromise.then(onResolved, onRejected)
}

export { loginRequest }
