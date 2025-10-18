import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'

const App = () => {
  const [sideNavbar,setSideNavbar] = useState(true);

  const setSideNavbarFunction = (value) =>{
   setSideNavbar(value)
  }
  return (
    <div>
      <Navbar setSideNavbarFunction = {setSideNavbarFunction} sideNavbar={sideNavbar}/>
      <Home sideNavbar={sideNavbar}/>
    </div>
  )
}

export default App