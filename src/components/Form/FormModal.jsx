import React, { useState, useEffect } from 'react'
import './Form.css'
import { Panel, ReactFlowProvider } from 'reactflow'
import { motion } from 'framer-motion'
import { userInfo } from '../../assets/data'

function FormModal ({ userId, handleModalClose }) {
  const [editNodeInfo, setEditNodeInfo] = useState({ data: '' })

  useEffect(() => {
    const userToEdit = userInfo.find((user) => user.id === userId)
    const historyText = userToEdit?.Text.map((item) => item.data).join('\n') || ''
    setEditNodeInfo({ data: historyText })
  }, [userId])

  const handleNodeChange = (event) => {
    setEditNodeInfo((prevInfo) => ({ ...prevInfo, [event.target.data]: event.target.value }))

    const updatedNodes = userInfo.map((n) =>
      n.id === editNodeInfo ? { ...n, data: { ...n.data, ...editNodeInfo, [event.target.data]: event.target.value } } : n
    )

    setEditNodeInfo(updatedNodes)
  }
  const handleSaveChanges = () => {
    const updatedNodes = userInfo.map((n) =>
      n.id === editNodeInfo ? { ...n, Text: [{ title: 'Historia Laboral', data: editNodeInfo.data }] } : n
    )

    setEditNodeInfo(updatedNodes)
    handleModalClose()
  }

  return (
    <ReactFlowProvider>
      <Panel position='top-left'>
        <motion.div className='node-editor' tabIndex={0} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          <div className='close-button' onClick={handleModalClose}>&times;</div>
          <div className='form-content'>
            <h1>Informacion De Modal</h1>

            <label htmlFor='data'>Historia Laboral:</label>
            <textarea type='text' id='data' name='data' value={editNodeInfo.data} onChange={handleNodeChange} />

            <button className='Submit' onClick={handleSaveChanges}>Guardar Cambios</button>
          </div>
        </motion.div>
      </Panel>
    </ReactFlowProvider>
  )
}

export default FormModal
