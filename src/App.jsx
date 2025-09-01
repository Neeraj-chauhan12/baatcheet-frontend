import React, { lazy, Suspense } from 'react'
import {} from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import { LayoutLoader } from './components/layout/Loaders'
const Home=lazy(()=>import("./pages/Home"))
const Groups=lazy(()=>import("./pages/Groups"))
const Login=lazy(()=>import("./pages/Login"))
const Chat=lazy(()=>import("./pages/Chat"))
const NotFound=lazy(()=>import("./pages/NotFound"))
//const Loaders=lazy(()=>import("./components/layout/Loaders"))
 


const App = () => {

  const user=true;

  return (  
    <BrowserRouter>

    <Suspense fallback={<LayoutLoader />}>
    <Routes>

      <Route element={<ProtectRoute user={user}/>} > 
      <Route path='/' element={<Home /> } />
      <Route path='/chat/:id' element={<Chat />} />
      <Route path='/groups' element={<Groups />} />
      </Route>
      
     <Route path='/login' element={<ProtectRoute user={!user} redirect='/'><Login /> </ProtectRoute>} />
     <Route path='*' element={<NotFound />} />

    </Routes>

    </Suspense>
    </BrowserRouter>
  )
}

export default App
