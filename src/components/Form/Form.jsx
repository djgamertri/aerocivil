import React from 'react'
import './Form.css'
import { Panel } from 'reactflow'
import { motion } from 'framer-motion'

function Form ({ handleCloseForm, editNodeInfo, handleNodeChange, handleSaveChanges, handleSelectChange, selectOption }) {
  return (
    <Panel position='top-left'>
      <motion.div className='node-editor' tabIndex={0} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <div className='close-button' onClick={handleCloseForm}>&times;</div>
        <div className='form-content'>
          <h1>Informacion del Nodo</h1>

          <label htmlFor='name'>Nombre:</label>
          <input type='text' id='name' name='name' value={editNodeInfo.name} onChange={handleNodeChange} />

          <label htmlFor='rol'>Rol:</label>
          <textarea type='text' id='rol' name='rol' value={editNodeInfo.rol} onChange={handleNodeChange} />

          <label htmlFor='img'>Imagen:</label>
          <textarea type='text' id='img' name='img' value={editNodeInfo.img} onChange={handleNodeChange} />

          <label htmlFor='typeUser'>Tipo de Empleado:</label>
          <select name='typeUser' id='typeUser' value={selectOption} onChange={handleSelectChange}>
            <option value='Planta'>Planta</option>
            <option value='Contratista'>Contratista</option>
            <option value='Vacante'>Vacante</option>
          </select>

          <button className='Submit' onClick={handleSaveChanges}>Guardar Cambios</button>
        </div>
      </motion.div>
    </Panel>

  )
}

export default Form
