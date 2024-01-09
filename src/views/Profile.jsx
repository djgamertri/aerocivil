import React from 'react'
import { useParams } from 'react-router'
import Modal from '../components/Modal/Modal'

function Profile () {
  const { id } = useParams()

  return (
    <Modal id={id} />
  )
}

export default Profile
