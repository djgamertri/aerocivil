import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/monikai.css'
import './Profile.css'

const Profile = ({ isOpen, closeModal }) => {
  const { user, isAuthenticated } = useAuth0()

  console.log('Se ha accedido al perfil')
  console.log('El estado de isOpen es:', isOpen)

  return (
    <div>
      {isOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            {isAuthenticated && (
              <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <JSONPretty data={user} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
