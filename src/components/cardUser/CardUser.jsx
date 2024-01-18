import React, { useEffect } from 'react'
import './CardUser.css'
import { Handle, Position } from 'reactflow'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function CardUser ({ data, id, selectOption }) {
  const navigate = useNavigate()

  const handleNameClick = () => {
    navigate(`/Profile/${id}`)
  }

  useEffect(() => {
    console.log('Select Option Card User: ', selectOption)
  }, [selectOption])

  return (
    <>
      <Handle type='target' position={Position.Top} />
      <motion.div
        className={`User ${data.typeUser === 'Planta' ? 'Planta' : 'Contratista'}`}
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
