import React from 'react'
import { Route, Routes } from 'react-router'
import Profile from './views/Profile'
import AuthCanva from './views/AuthCanva'
import './App.css'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<AuthCanva />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='*' element={<AuthCanva />} />
      </Routes>
    </>
  )
}

export default App
