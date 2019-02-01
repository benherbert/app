// Import Packages
import React from 'react'
import classNames from 'classnames'

// Import Actions
import { increment } from '../../store/actions/increment.action'

// Import Components
import { Button } from '../1-atoms/button/Button'

const Basic = (props) => {
  const { title, dispatch, showOurFunButton = false } = props

  const buttonAction = () => {
    return dispatch(increment)
  }

  const renderButton = () => <Button handleClick={buttonAction} className='theme--wolf'>I update the redux store / counter!</Button>

  return (
    <>
      <h2>{title}</h2>
      { showOurFunButton && renderButton() }
    </>
  )
}

export { Basic }
