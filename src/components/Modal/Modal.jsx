import React from 'react'
import './Modal.css'
import { userInfo } from '../../assets/data'

const Modal = ({ id }) => {
  const user = userInfo.find((user) => user.id === id)

  if (!user) {
    return <div className='modal'><h2>Estas Intentando acceder a un perfil no creado</h2></div>
  }

  const { name, rol, img, Text } = user

  return (
    <div className='modal'>
      <div className='User'>
        <img
          src={img}
          alt=''
        />
        <div className='UserText'>
          <h1>{name}</h1>
          <p>{rol}</p>
        </div>
      </div>
      <div className='HistoryText'>
        {Text.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.data}</p>
            {index < Text.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modal
