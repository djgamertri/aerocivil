import React, { useCallback } from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import { FaUser, FaCirclePlus } from 'react-icons/fa6'
import { Panel } from 'reactflow'

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

  return (
    <Panel position='top-center'>
      <div className='nav'>
        <Button icon={<FaCirclePlus />} onClick={onAdd} />
        <Button icon={<FaCirclePlus />} />
        <Button icon={<FaUser />} />
      </div>
    </Panel>
  )
}

export default Navbar
