import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { Panel } from 'reactflow'
import './Profile.css'
import Button from '../Button/Button'
import { motion } from 'framer-motion'

function Profile ({ icon }) {
  const { user, logout } = useAuth0()

  const [logoutVisible, setLogoutVisible] = useState(false)

  const handleMouseEnter = () => {
    setLogoutVisible(true)
  }

  const handleMouseLeave = () => {
    setLogoutVisible(false)
  }

  console.log(logoutVisible)

  return (
    <Panel position='top-right'>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <div
          className='Profile'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={user.picture} alt={user.name} />
          <div className='ProfileText'>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
        <Button text='Cerrar Sesion' icon={<RiLogoutCircleRLine />} onClick={logout} />
      </motion.div>
    </Panel>
  )
}

export default Profile
