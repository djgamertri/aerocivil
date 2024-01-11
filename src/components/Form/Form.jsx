import React from 'react'
import './Form.css'
import { Panel } from 'reactflow'

function Form ({ handleCloseForm, editNodeInfo, handleNodeChange, handleNodeBlur, handleSaveChanges }) {
  return (
    <Panel position='top-left'>
      <div className='node-editor'>
        <div className='close-button' onClick={handleCloseForm}>&times;</div>
        <div className='form-content'>
          <h1>Informacion del Nodo</h1>
          <label for='name'>Nombre:</label>
          <input type='text' id='name' name='name' value={editNodeInfo.name} onChange={handleNodeChange} onBlur={handleNodeBlur} />
          <label for='rol'>Rol:</label>
          <textarea type='text' id='rol' name='rol' value={editNodeInfo.rol} onChange={handleNodeChange} onBlur={handleNodeBlur} />
          <button className='Submit' onClick={handleSaveChanges}>Guardar Cambios</button>
        </div>
      </div>
    </Panel>

  )
}

export default Form
