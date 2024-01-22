import React, { useState } from 'react'
import './Modal.css'
import { FaArrowLeft } from 'react-icons/fa'
import { HiPencilAlt } from 'react-icons/hi'
import { userInfo } from '../../assets/data'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FormModal from '../Form/FormModal'

const Modal = ({ id }) => {
  const user = userInfo.find((user) => user.id === id)

  if (!user) {
    return <div className='modal'><h2>Estas Intentando acceder a un perfil no creado</h2></div>
  }

  const { name, rol, img, Text } = user

  const [showForm, setShowForm] = useState(false)
  const [editingUserId, setEditingUserId] = useState(null)

  const handleEditClick = (event) => {
    event.stopPropagation()
    event.preventDefault()

    console.log('Se Esta Intentando Ingresando A La Funcion De Edicion')
    setShowForm(true)
    setEditingUserId(id)
    console.log('Id', id)
  }

  const handleModalClose = () => {
    setShowForm(false)
    setEditingUserId(null)
  }

  return (
    <div>
      <motion.div whileHover={{ translateX: -2 }} className='modal-link'>
        <Link to='/'>
          <FaArrowLeft />
          <HiPencilAlt onClick={handleEditClick} />
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
          {Text.map((item, index) => (
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
          {showForm && (
            <FormModal userId={editingUserId} handleModalClose={handleModalClose} />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Modal
