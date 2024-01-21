import React, { useEffect, useState } from 'react'
import './Modal.css'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Modal = ({ id }) => {
  const [User, setUser] = useState([])

  useEffect(() => {
    fetch(`https://aerocivil.onrender.com/getNode/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUser(data)
      })
      .catch(error => {
        console.error('Error al buscar el nodo:', error)
      })
    if (!User) {
      return <div className='modal'><h2>Estas Intentando acceder a un perfil no creado</h2></div>
    }
  }, [])

  const { name, rol, img, Text } = User

  return (
    <div>
      <motion.div whileHover={{ translateX: -2 }} className='modal-link'>
        <Link to='/'>
          <FaArrowLeft />
        </Link>
      </motion.div>
      <div className='modal'>
        <motion.div className='User' initial={{ scale: 0, translateY: 500 }} animate={{ scale: 1, translateY: 50 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          <img src={img} alt='' />
          <div className='UserText'>
            <h1>{name}</h1>
            <p>{rol}</p>
          </div>
        </motion.div>
        <motion.div className='HistoryText' initial={{ scale: 0, translateY: 500 }} animate={{ scale: 1, translateY: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          {Text?.map((item, index) => (
            <motion.div
              key={index} initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h2>{item.title}</h2>
              <p>{item.data}</p>
              {index < Text.length - 1 && <hr />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Modal
