import React, { useCallback, useEffect } from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import { FaArrowRotateLeft, FaCirclePlus, FaFloppyDisk } from 'react-icons/fa6'
import { Panel, useReactFlow } from 'reactflow'
import { motion } from 'framer-motion'
import socket from '../../assets/socket'

function Navbar ({ setNodes, setEdges, rfInstance }) {
  const flowKey = 'Flow'
  const { setViewport } = useReactFlow()
  const getNodeId = () => `ID_${+new Date()}`

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      type: 'User',
      data: { name: 'Nombre completo', rol: 'Papel, función o posición que desempeña', img: 'https://placehold.co/100x100', typeUser: 'Planta' },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight
      }
    }
    setNodes((nds) => nds.concat(newNode))
  }, [setNodes])

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject()
      localStorage.setItem(flowKey, JSON.stringify(flow))
      socket.emit('save', flow)
    }
  }, [rfInstance])

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey))

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport
        setNodes(flow.nodes || [])
        setEdges(flow.edges || [])
        setViewport({ x, y, zoom })
      }
    }

    restoreFlow()
  }, [setNodes, setViewport])

  useEffect(() => {
    socket.on('SaveInterval', () => {
      console.log('paso')
      onSave()
    })
    return () => {
      socket.off('SaveInterval')
    }
  }, [onSave])

  return (
    <Panel position='top-center'>
      <motion.div className='nav' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <Button icon={<FaCirclePlus />} onClick={onAdd} title='Añadir un Nuevo Nodo' />
        <Button icon={<FaArrowRotateLeft />} onClick={onRestore} title='Restaurar Cambios' />
        <Button icon={<FaFloppyDisk />} onClick={onSave} title='Guardar Cambios' />
      </motion.div>
    </Panel>
  )
}

export default Navbar
