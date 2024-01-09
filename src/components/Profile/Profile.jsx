import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Profile.css'
import LogoutProfile from './LogoutProfile'
import { FaDoorOpen } from 'react-icons/fa6'

function Profile ({ icon }) {
  const { user, isAuthenticated } = useAuth0()
  const [logoutVisible, setLogoutVisible] = useState(false)

  const handleMouseEnter = () => {
    setLogoutVisible(true)
  }

  const handleMouseLeave = () => {
    setLogoutVisible(false)
  }

  return (
    <div
      className='profile'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isAuthenticated && (
        <div style={{ cursor: 'pointer' }}>
          <div className='Profile'>
            <img src={user.picture} alt={user.name} />
            <div className='ProfileText'>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      )}
      {logoutVisible && <LogoutProfile icon={<FaDoorOpen />} />}
    </div>
  )
}

export default Profile
