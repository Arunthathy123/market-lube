import React from 'react'

function Button({type, className, text}) {
  return (
    <div>
      <button type={type} className={`${className} whitespace-nowrap`}>{text}</button>
    </div>
  )
}

export default Button
