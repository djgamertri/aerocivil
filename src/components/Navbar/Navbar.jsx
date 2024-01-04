import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import { FaUser, FaCirclePlus } from 'react-icons/fa6'

import { Panel } from 'reactflow'

function Navbar () {
  return (
    <Panel position='top-center'>
      <div className='nav'>
        <Button icon={<FaCirclePlus />} />
        <Button icon={<FaCirclePlus />} />
        <Button icon={<FaUser />} />
      </div>
    </Panel>
  )
}

export default Navbar
