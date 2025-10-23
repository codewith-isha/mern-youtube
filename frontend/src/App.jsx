import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Video from './pages/video/video'
import {Route,Routes} from "react-router-dom"

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
        
      </Routes>
     
    </div>
  )
}

export default App