import React from "react";

import Fi5 from "../../media/Fi/Fi5.jpg";
import Fi4 from "../../media/Fi/Fi4.jpg";

import facebook from "../../components/media/facebook.png";
import instagram from "../../components/media/instagram.png";
import youtube from "../../components/media/youtube.png";

import "./Fi.css";

const Fi = () => {
  return (
    <div>
      <div className="info_container">
        <h2>Float Italia</h2>
        <h4>May 26th - 28th 2023</h4>
      </div>
      <div className="banner_container">
        <div className="img_cover">Testing</div>
        <img className="banner_img" src={Fi5} alt="Float Italia Group Shot" />
      </div>
      <div className="second_container">
        <img className="second_img" src={Fi4} alt="" />
        <div className="info">
          <h3 className="expect">What to expect?</h3>
          <p className="info_text">
            Gattinara 23 Wine & Trails will be the third edition of the
            gathering that started in 2021. Organized by the Float Italia crew,
            the next edition of the event will be hosting a race, a surprise
            trick contest and a lot of group rides in the middle of the
            Gattinara vineyards. Get ready to shred the Sentieri dei Gatti
            mountain bike trails going down the hills and to enjoy the really
            good Italian wine and food.
          </p>
          <p className="links">
            For more info & tickets{" "}
            <a href="https://www.floatitalia.com/" target="#blank">
              Click Here
            </a>
          </p>
          <div className="socials">
            <a className="filter_black" href="https://facebook.com">
              <img className="social_img" src={facebook} alt="" />
            </a>
            <a className="filter_black" href="https://instagram.com">
              <img className="social_img" src={instagram} alt="" />
            </a>
            <a className="filter_black" href="https://youtube.com">
              <img className="social_img" src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fi;
