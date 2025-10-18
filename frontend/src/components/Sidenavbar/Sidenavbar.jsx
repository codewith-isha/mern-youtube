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
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';

const Sidenavbar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar?'home-sideNavbar':"homeSideNavbarHide"}>
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
          <SmartDisplayOutlinedIcon/>
           <div className="home_sideNavbarTopOptionTitle">Your videos</div>
        </div>


        <div className={`home_sideNavbarTopOption`}>
          <WatchLaterOutlinedIcon/>
           <div className="home_sideNavbarTopOptionTitle">Watch later</div>
        </div>


        <div className={`home_sideNavbarTopOption`}>
          <ThumbUpAltOutlinedIcon/>
           <div className="home_sideNavbarTopOptionTitle">Liked videos</div>
        </div>


        <div className={`home_sideNavbarTopOption`}>
          <ContentCutOutlinedIcon/>
           <div className="home_sideNavbarTopOptionTitle">Your clips</div>
        </div>
        {/* end  */}
      </div>
      {/* end  */}
      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitleHeader">
            Subscription
          </div>
        </div>
          
           <div className="home_sideNavbarTopOption">
            <img src="https://www.medianews4u.com/wp-content/uploads/2020/04/Aaj-Tak-2.jpg" className='home_sideNavbar_ImgLogo' />
          <div className="home_sideNavbarTopOptionTitleHeader">
           Aaj Tak
          </div>
        </div>

          <div className="home_sideNavbarTopOption">
            <img src="https://www.nicepng.com/png/detail/258-2588351_malayalam-news-paper-indian-news-channel-logo.png" className='home_sideNavbar_ImgLogo' />
          <div className="home_sideNavbarTopOptionTitleHeader">
           ZEE NEWS
          </div>
        </div>

          <div className="home_sideNavbarTopOption">
            <img src="https://i.pinimg.com/736x/8b/12/52/8b125232501ef2f169a7085149b14a3b.jpg" className='home_sideNavbar_ImgLogo' />
          <div className="home_sideNavbarTopOptionTitleHeader">
           NDTV India
          </div>
        </div>

         
      </div>
      {/* .. */}



    </div>
  )
}

export default Sidenavbar