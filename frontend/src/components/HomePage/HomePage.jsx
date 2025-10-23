import React from "react";
import "./HomePage.css";

const HomePage = ({sideNavbar}) => {
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
    "90s Songs"
  ];
  return (
    <div className={sideNavbar?"homePage":"fullHomePage"}>
      <div className="homePage_options">
        {options.map((item, inx) => {
          return <div className="homePage_option" key={inx}>
            {item}
          </div>;
        })}
      </div>


      <div className="home_mainpage">
        <div className="youtube_video">
          
        </div>
      </div>

    </div>
  );
};

export default HomePage;
