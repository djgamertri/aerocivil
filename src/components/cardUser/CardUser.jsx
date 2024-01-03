import React from 'react'
import './CardUser.css'
import { Handle, Position } from 'reactflow'

function CardUser ({ data }) {
  return (
    <>
      <Handle type='target' position={Position.Top} />
      <div className='User'>
        <img src={data?.img} alt='' />
        <div className='UserText'>
          <h1>{data?.name}</h1>
          <p>{data?.rol}</p>
        </div>
      </div>
      {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div style={{ width: 339, height: 161, left: 25, top: 63, position: 'absolute', background: 'white', borderRadius: 13, border: '1px black solid' }} />
        <div style={{ width: 388, left: 0, top: 142, position: 'absolute', textAlign: 'center', color: '#979797', fontSize: 15, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>SECRETARIA GENERAL</div>
        <img style={{ width: 100, height: 100, left: 144, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #9C9C9C 0%, #9C9C9C 100%)', borderRadius: 9999, border: '1px #FF8B8B solid' }} src='https://via.placeholder.com/100x100' />
        <div style={{ left: 77, top: 107, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>ESMERALDA MOLINA</div>
      </div> */}
      <Handle type='source' position={Position.Bottom} id='a' />
    </>
  )
}

export default CardUser
