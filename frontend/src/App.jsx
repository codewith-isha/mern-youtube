import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Video from './pages/video/video'
import {Route,Routes} from "react-router-dom"
import Profile from './pages/Profile/profile'

const App = () => {
  const [sideNavbar,setSideNavbar] = useState(true);

  const setSideNavbarFunction = (value) =>{
   setSideNavbar(value)
  }
  return (
    <div>
      <Navbar setSideNavbarFunction = {setSideNavbarFunction} sideNavbar={sideNavbar}/>
      <Routes>
        <Route path='/' element={ <Home sideNavbar={sideNavbar}/>}/>
        <Route path="/watch/:id" element={<Video/>}/>
        <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar}/>}/>
        
      </Routes>
     
    </div>
  )
}

export default App