import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Favapp = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Favhome />} />
   
   </Routes>
   </BrowserRouter>

  )
}

export default Favapp