import React from 'react'
import './Home.css'
import Sidenavbar from '../../components/Sidenavbar/Sidenavbar'
import HomePage from '../../components/HomePage/HomePage'
const Home = () => {
  return (
    <div className='home'>
      <Sidenavbar/>
      <HomePage/>
    </div>
  )
}

export default Home