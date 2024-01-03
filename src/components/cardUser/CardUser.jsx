import React from 'react'
import './CardUser.css'
import { Handle, Position } from 'reactflow'

function CardUser ({ data }) {
  return (
    <>
      <Handle type='target' position={Position.Top} />
      <div className='User'>
        <img src={data?.img} alt='' />
        <div className='UserText'>
          <h1>{data?.name}</h1>
          <p>{data?.rol}</p>
        </div>
      </div>
      <Handle type='source' position={Position.Bottom} id='a' />
    </>
  )
}

export default CardUser
