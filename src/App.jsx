import React, { lazy } from 'react'
import {} from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Home=lazy(()=>import("./pages/Home"))
const About=lazy(()=>import("./pages/About"))
const Login=lazy(()=>import("./pages/Login"))

const App = () => {
  return (  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
