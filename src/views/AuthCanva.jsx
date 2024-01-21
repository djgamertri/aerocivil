import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Canva from './Canva'
import CanvaUser from './CanvaUser'

function AuthCanva () {
  const { isAuthenticated } = useAuth0()

  return (
    isAuthenticated ? <Canva /> : <CanvaUser />
  )
}

export default AuthCanva
