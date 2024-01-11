import React from 'react'
import './Form.css'
import { Panel } from 'reactflow'
import { motion } from 'framer-motion'

function Form ({ handleCloseForm, editNodeInfo, handleNodeChange, handleNodeBlur, handleSaveChanges }) {
  return (
    <Panel position='top-left'>
      <motion.div className='node-editor' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <div className='close-button' onClick={handleCloseForm}>&times;</div>
        <div className='form-content'>
          <h1>Informacion del Nodo</h1>
          <label for='name'>Nombre:</label>
          <input type='text' id='name' name='name' value={editNodeInfo.name} onChange={handleNodeChange} onBlur={handleNodeBlur} />
          <label for='rol'>Rol:</label>
          <textarea type='text' id='rol' name='rol' value={editNodeInfo.rol} onChange={handleNodeChange} onBlur={handleNodeBlur} />
          <button className='Submit' onClick={handleSaveChanges}>Guardar Cambios</button>
        </div>
      </motion.div>
    </Panel>

  )
}

export default Form
