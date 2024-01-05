import React from 'react'
import './LogoutProfile.css'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutProfile = ({ icon, text }) => {
  const { logout } = useAuth0()
  return (
    <div className='Button' onClick={() => logout()}>
      {icon}
    </div>

  )
}

export default LogoutProfile
