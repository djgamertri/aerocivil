import React, { useState } from 'react'
import './Form.css'
import { Panel } from 'reactflow'
import { motion } from 'framer-motion'

function Form ({ handleCloseForm, editNodeInfo, handleNodeChange, handleSaveChanges }) {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
    console.log('selectOption:', event.target.value)
  }

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

          <label htmlFor='Options'>Tipo de Empleado:</label>
          <select name='userType' id='userType' value={selectedOption} onChange={handleSelectChange}>
            <option value='0'>Seleccione Una Opcion</option>
            <option value='1'>Planta </option>
            <option value='2'>Contratista</option>
            <option value='3'>Vacante</option>
          </select>

          <button className='Submit' onClick={handleSaveChanges}>Guardar Cambios</button>
        </div>
      </motion.div>
    </Panel>

  )
}

export default Form
