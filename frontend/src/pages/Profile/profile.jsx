import React from 'react'
import './profile.css';
import Sidenavbar from '../../components/Sidenavbar/Sidenavbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Profile = ({sideNavbar}) => {
  return (
    <div className='profile'>
       <Sidenavbar sideNavbar={sideNavbar}/>
       <div className="profile_page">

        <div className="profile_top_section">
          <div className="profile_top_section_profile">
            <img src="https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=ImgDetMain" alt="" className="profile_top_section_img" />
          </div>
          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">CodewithIsha</div>
            <div className="profile_top_section_info">
              @User1  .4 Videos
            </div>
            <div className="profile_top_section_info">
              About Section of Channel
            </div>
          </div>
        </div>

        <div className="profile_videos">
            <div className="profile_videos_title">
              Videos &nbsp; <ArrowRightIcon/>
            </div>
            <div className="profileVideos">
              {/* --------div for a video ----- */}
              <div className="profileVideo_block">
                <div className="profileVideo_block_thumbnail">
                  <img src="https://th.bing.com/th/id/OIP.hA04LwcrDABDbCzqGof8iQHaHa?rs=1&pid=ImgDetMain"  className="profileVideo_block_thumbnail_img" />
                </div>

              </div>
            </div>
        </div>
       </div>
      </div>
  )
}

export default Profile