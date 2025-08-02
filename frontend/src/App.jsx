import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './pages/public/Home'
import Dashboard from './pages/private/Dashboard'
import Mentors from './pages/public/Mentors';
import Login from './pages/public/Login';
import Register from './pages/public/Register';
import ProtectedUserroutes from './protected/ProtectedUserroutes';



const App = () => {
  return (
<>

<Navbar/>

<Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/mentors" element={<Mentors />} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />
   <Route path="/dashboard" element={<ProtectedUserroutes children={<Dashboard />}/> } />
   
</Routes>

</>
  )
}

export default App