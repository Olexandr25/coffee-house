import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

import './Button.css' // Create a separate CSS file for styling

const buttonClass = {
  default: 'rounded-button default',
  ghost: 'rounded-button ghost',
}

const Button = props => {
  const { children, withIcon = true, type = 'default' } = props

  return (
    <button className={buttonClass?.[type] ?? buttonClass.default}>
      {children}
      {withIcon ? <FaArrowRightLong className='arrow-icon'  /> : null}
    </button>
  )
}

export default Button
