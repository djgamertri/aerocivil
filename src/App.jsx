import React from 'react'
import { Route, Routes } from 'react-router'
import Profile from './views/Profile'
import Canva from './views/Canva'
import './App.css'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Canva />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
