import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = ({ sideNavbar }) => {
  const options = [
    "All",
    "Daily Soap",
    "History",
    "Cricket",
    "Live",
    "Sports",
    "Gaming",
    "Coke Studio Pakistan",
    "Democracy",
    "Bigg Boss",
    "Mixes",
    "Movies",
    "Songs",
    "Old is Gold",
    "90s Songs",
  ];
  return (
    <div className={sideNavbar ? "homePage" : "fullHomePage"}>
      <div className="homePage_options">
        {options.map((item, inx) => {
          return (
            <div className="homePage_option" key={inx}>
              {item}
            </div>
          );
        })}
      </div>

      <div
        className={sideNavbar ? "home_mainpage" : "home_mainPageWithoutLink"}
      >
        {/* 1 */}
        <Link to={'/watch/8908'} className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hTzD5dSo1W1VFR1VZv_2MbQADn7f_QSo9A&s"
              alt="dummy"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
                alt=""
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </Link>
        {/* 2 */}

        <Link to={'/watch/8908'} className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qpSCgHLLTmeV8O2B6menEZa-a2K5C161tA&s"
              alt="dummy"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
                alt=""
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </Link>
        {/* 3 */}
        <Link to={'watch/5678'} className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
              alt="dummy"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
                alt=""
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </Link>
        {/* 4 */}
        <Link to={'/watch/8908'} className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
              alt="dummy"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
                alt=""
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </Link>
        {/* 5 */}
        <Link to={'/watch/8908'} className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
              alt="dummy"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
                alt=""
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </Link>
        {/* 6 */}
        <Link to={'/watch/8908'} className="youtube_video">
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
              alt="dummy"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">28:05</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://i.ytimg.com/vi/FFZSgalRSQQ/maxresdefault.jpg"
                alt=""
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channelName">User1</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
