import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './pages/public/Home'
import Dashboard from './pages/private/Dashboard'
import About from './pages/public/About';
import Mycourses from './pages/private/Mycourses';
import Mentors from './pages/public/Mentors';
import Login from './pages/public/Login';
import Register from './pages/public/Register';



const App = () => {
  return (
<>

<Navbar/>

<Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/mentors" element={<Mentors />} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />

</Routes>


<Routes>
   <Route path="/dashboard" element={ <Dashboard />} />
   <Route path="/mycourses" element={<Mycourses />} />
</Routes>

</>
  )
}

export default App