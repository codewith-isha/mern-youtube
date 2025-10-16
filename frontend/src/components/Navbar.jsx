import React from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchIcon from '@mui/icons-material/Search';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonIcon from '@mui/icons-material/Person';



const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navbar-left">
      <div className="navbarHamberger">
        <MenuIcon sx={{color:"white"}}/>
      </div>
      <div className='navbar_youtubeImg'>
        <YouTubeIcon sx={{fontSize:"34px"}} className='navbar_youtubeImage'/>
        <div className="navbar_utubeTitle">YouTube</div>
      </div>
    </div>

    <div className='navbar-middle'>
      <div className='navbar_searchBox'>
        <input type="text" placeholder='search' className='navbar_searchBoxInput' />
        <div className="navbar_searchIconBox">
          <SearchIcon sx={{fontSize:"28px"}}/>
        </div>

        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{color:"white"}}/>
        </div>
      </div>
    </div>

    <div className="navbar-right">
      <VideoCallIcon sx={{fontSize:'30px', cursor:"pointer" , color:"white"}}/>
       <NotificationsIcon sx={{fontSize:'30px', cursor:"pointer" , color:"white"}}/>
        <PersonIcon sx={{fontSize:'30px', cursor:"pointer" , color:"white"}}/>

    </div>




    </div>
  )
}

export default Navbar