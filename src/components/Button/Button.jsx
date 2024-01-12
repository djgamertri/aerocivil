import React from 'react'
import './Button.css'

function Button ({ icon, text, onClick, title }) {
  return (
    <div className='Button' onClick={onClick} title={title}>
      {icon}
      {text ? <div className='text'>{text}</div> : null}
    </div>
  )
}

export default Button
