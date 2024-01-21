import React from 'react'
import { Panel } from 'reactflow'
import './Colors.css'

function Colors () {
  return (
    <Panel position='top-left' className='PaletContainer'>
      <div className='Palet'>
        <div className='Color P' />
        <div className='textColor'>Planta</div>
      </div>
      <div className='Palet'>
        <div className='Color C' />
        <div className='textColor'>Contratista</div>
      </div>
      <div className='Palet'>
        <div className='Color V' />
        <div className='textColor'>Vacante</div>
      </div>
    </Panel>
  )
}

export default Colors
