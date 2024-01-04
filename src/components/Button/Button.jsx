import React from 'react'
import './Button.css'

function Button ({ icon, text, onClick }) {
  return (
    <div className='Button' onClick={onClick}>
      {icon}
      {text ? <div className='text'>{text}</div> : null}
    </div>
  )
}

export default Button
