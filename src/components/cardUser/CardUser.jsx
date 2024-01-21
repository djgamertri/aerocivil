import React from 'react'
import './CardUser.css'
import { Handle, Position } from 'reactflow'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function CardUser ({ data, id }) {
  const navigate = useNavigate()

  const handleNameClick = () => {
    navigate(`/Profile/${id}`)
  }

  return (
    <>
      <Handle type='target' position={Position.Top} />
      <motion.div
        className={`User ${data.typeUser}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        title='Nodo Persona'
      >
        <img src={data?.img} alt='' />
        <div className='UserText'>
          <h1 onClick={handleNameClick}>{data?.name}</h1>
          <p>{data?.rol}</p>
        </div>
      </motion.div>
      <Handle type='source' position={Position.Bottom} />
    </>
  )
}

export default CardUser
