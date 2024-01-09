import React from 'react'
import './CardUser.css'
import { Handle, Position } from 'reactflow'
import { useNavigate } from 'react-router-dom'

function CardUser ({ data, id }) {
  const navigate = useNavigate()

  console.log(id)
  const handleNameClick = () => {
    navigate(`/Profile/${id}`)
  }

  return (
    <>
      <Handle type='target' position={Position.Top} />
      <div className='User'>
        <img src={data?.img} alt='' />
        <div className='UserText'>
          <h1 onClick={handleNameClick}>{data?.name}</h1>
          <p>{data?.rol}</p>
        </div>
      </div>
      <Handle type='source' position={Position.Bottom} />
    </>
  )
}

export default CardUser
