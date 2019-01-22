import React from 'react'
import classNames from 'classnames'

function Button ({
  ariaLabel,
  children,
  className,
  handleClick,
  isDisabled = false,
  target,
  type = 'button',
  url,
  qaId
}: ButtonType) {
  const buttonClass = classNames(className, 'button')

  const renderButton = () => {
    const props = {
      type,
      className: buttonClass,
      'aria-label': ariaLabel,
      disabled: isDisabled,
      'data-qa': qaId
    }
    return (
      <div className='wolf'>
        Hello world: 
        <button {...props}>{ children }</button>
      </div>
    )
  }

  return renderButton()
}

export default Button
