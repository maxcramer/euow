import React from "react";

import Owal from "../../media/Owal/OwalLogo.png";
import WowLogo from "../../media/Wow/Logo/WowLogo.png";

import "./OE_DatesBar.css";

const OE_DatesBar = () => {
  return (
    <div className="qe_bg">
      <h3 className="qe_title">OTHER</h3>
      <h3 className="qe_title under">EVENTS</h3>
      <div className="qe_dates_container">
        <a href="/oa" className="qe_dates_item">
          <img className="qe_date_img" src={Owal} alt="" />
          <h4 className="qe_date_item_title">Onewheel Algarve</h4>
          <div className="qe_date_item_info">
            <p>Algarve, Portugal</p>
            <p className="qe_date_item_date">TBD</p>
            <a href="/oa" className="qe_date_item_link">
              Click here for more
            </a>
          </div>
        </a>
        <a href="/wow" className="qe_dates_item">
          <img className="qe_date_img " src={WowLogo} alt="" />
          <h4 className="qe_date_item_title">WOW</h4>
          <div className="qe_date_item_info">
            <p>Wanyi Park, Viroinval, Belgium</p>
            <p className="qe_date_item_date">TBD</p>
            <a href="/wow" className="qe_date_item_link">
              Click here for more
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OE_DatesBar;
