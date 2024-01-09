import React, { useCallback, useState, useEffect } from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import { FaUser, FaCirclePlus } from 'react-icons/fa6'
import { Panel } from 'reactflow'
import Profile from '../Profile/Profile'

function Navbar ({ setNodes }) {
  const getNodeId = () => `ID_${+new Date()}`

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      type: 'User',
      data: { label: 'Added node' },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight
      }
    }
    setNodes((nds) => nds.concat(newNode))
  }, [setNodes])

  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    console.log('Nuevo estado de modal:', modalOpen)
  }, [modalOpen])

  const openModal = () => {
    console.log('----------Abriendo modal----------')
    setModalOpen(true)
  }

  const closeModal = () => {
    console.log('----------Cerrando modal----------')
    setModalOpen(false)
  }

  return (
    <Panel position='top-center'>
      <div className='nav'>
        <Button icon={<FaCirclePlus />} onClick={onAdd} />
        <Button icon={<FaCirclePlus />} />
        <Button icon={<FaUser />} onClick={openModal} />
        <Profile isOpen={modalOpen} closeModal={closeModal} />
      </div>
    </Panel>
  )
}

export default Navbar
