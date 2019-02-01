import React from 'react'
import classNames from 'classnames'

const Button = props => {
  const { ariaLabel, children, className, handleClick, isDisabled = false, type = 'button', qaId } = props
  const buttonClass = classNames(className, 'button')

  const renderButton = () => {
    const buttonAttributes = {
      type,
      className: buttonClass,
      'aria-label': ariaLabel,
      disabled: isDisabled,
      'data-qa': qaId,
      onClick: handleClick
    }

    return (
      <div className='wolf'>
        <button {...buttonAttributes}>{children}</button>
      </div>
    )
  }

  return renderButton()
}

export { Button }
