// Import Packages
import React from 'react'
import classNames from 'classnames'

// Import Actions
import { increment, decrement } from '../../../redux/counter.redux'
import { loginAttempted } from '../../../redux/login.redux'

// Import Components
import { Button } from '../../1-atoms/button/Button'

const Basic = props => {
  const { title, dispatch, showOurFunButton = false, counter = 0 } = props

  const buttonActionIncrement = () => dispatch(increment)
  const buttonActionDecrement = () => dispatch(decrement)
  const buttonActionLogin = () => dispatch(loginAttempted)

  const renderButton = () =>
    <div>
      <Button handleClick={buttonActionIncrement} className='theme--coyote'>
        Increment
      </Button>
      <Button handleClick={buttonActionDecrement} className='theme--fox'>
        Decrement
      </Button>
      <div>The Counter is set to {counter}</div>
    </div>

  const renderLoginButton = () => <Button handleClick={buttonActionLogin} className='theme--wolf'>Login</Button>

  return (
    <>
      <h2>{title}</h2>
      {showOurFunButton && renderButton()}
      {renderLoginButton()}
    </>
  )
}

export { Basic }
