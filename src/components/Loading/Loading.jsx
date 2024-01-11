import React from 'react'
import './Loading.css'
import { GridLoader } from 'react-spinners'

function Loading () {
  return (
    <div className='loading-container'>
      <GridLoader color='#36d7b7' />
    </div>
  )
}

export default Loading
