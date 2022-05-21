import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Login, User } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user/:id' element={<User />} />
    </Routes>
    </>
  )
}

export default App