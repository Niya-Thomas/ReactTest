import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Moviedetails from './Components/Moviedetails'

const App = () => {
  return (
   
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Moviehome />}> </Route>
     <Route path="/Movie/:id" element={<Moviedetails />}></Route>

     </Routes>
    </BrowserRouter>
  )
}

export default App