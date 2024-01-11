import React, { useCallback } from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import { FaCirclePlus } from 'react-icons/fa6'
import { Panel } from 'reactflow'
import { motion } from 'framer-motion'

function Navbar ({ setNodes }) {
  const getNodeId = () => `ID_${+new Date()}`

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      type: 'User',
      data: { name: 'Nombre completo', rol: 'Papel, función o posición que desempeña', img: 'https://placehold.co/100x100' },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight
      }
    }
    setNodes((nds) => nds.concat(newNode))
  }, [setNodes])

  return (
    <Panel position='top-center'>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <Button icon={<FaCirclePlus />} onClick={onAdd} />
      </motion.div>
    </Panel>
  )
}

export default Navbar
