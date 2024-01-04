import React from 'react'
import './Button.css'

function Button ({ icon, text }) {
  return (
    <div className='Button'>
      {icon}
      {text ? <div className='text'>{text}</div> : null}

    </div>
  )
}

export default Button
