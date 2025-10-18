import React from 'react'
import './SideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';


const Sidenavbar = () => {
  return (
    <div className='home-sideNavbar'>
      {/* top  */}
      <div className="home_sideNavbarTop">
        <div className={`home_sideNavbarTopOption`}>
          <HomeIcon/>
          <div className="home_sideNavbarTopOptionTitle">
            Home
          </div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <VideocamIcon/>
          <div className="home_sideNavbarTopOptionTitle">
            Shorts
          </div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <SubscriptionsIcon/>
          <div className="home_sideNavbarTopOptionTitle">
            Subscription
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="home_sideNavbarMiddle">

         <div className={`home_sideNavbarTopOption`}>
          <div className="home_sideNavbarTopOptionTitle">You</div>
          <ChevronRightIcon/>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <RecentActorsIcon/>
           <div className="home_sideNavbarTopOptionTitle">Your Channel</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <HistoryIcon/>
           <div className="home_sideNavbarTopOptionTitle">History</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <PlaylistAddIcon/>
           <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>


        <div className={`home_sideNavbarTopOption`}>
          <PlaylistAddIcon/>
           <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>


        <div className={`home_sideNavbarTopOption`}>
          <PlaylistAddIcon/>
           <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>


        <div className={`home_sideNavbarTopOption`}>
          <PlaylistAddIcon/>
           <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>


        <div className={`home_sideNavbarTopOption`}>
          <PlaylistAddIcon/>
           <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>
        






        {/* end  */}
      </div>
      {/* end  */}



    </div>
  )
}

export default Sidenavbar