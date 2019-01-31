import React from 'react'
import classNames from 'classnames'

function Button ({ ariaLabel, children, className, handleClick, isDisabled = false, type = 'button', qaId }) {
  const buttonClass = classNames(className, 'button')

  const renderButton = () => {
    const props = {
      type,
      className: buttonClass,
      'aria-label': ariaLabel,
      disabled: isDisabled,
      'data-qa': qaId,
      onClick: handleClick
    }

    return (
      <div className='wolf'>
        <button {...props}>{children}</button>
      </div>
    )
  }

  return renderButton()
}

export { Button }
