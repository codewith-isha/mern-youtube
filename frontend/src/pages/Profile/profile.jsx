import React from 'react'
import './profile.css'
import Sidenavbar from '../../components/Sidenavbar/Sidenavbar'

const Profile = ({sideNavbar}) => {
  return (
    <div className='profile'>
      <Sidenavbar sideNavbar={sideNavbar}/>
    </div>
  )
}

export default Profile