import React from "react";

import Owal from "../../media/Owal/OwalLogo.png";
import WowLogo from "../../media/Wow/Logo/WowLogo.png";

import "./OE_DatesBar.css";

const OE_DatesBar = () => {
  return (
    <div className="oe_bg">
      <div className="oe_title_container">
        <h3 className="oe_title">OTHER</h3>
        <h3 className="oe_title under">EVENTS</h3>
      </div>

      <div className="oe_dates_container">
        <a href="/oa" className="oe_dates_item">
          <img className="oe_date_img" src={Owal} alt="" />
          <h4 className="oe_date_item_title">Onewheel Algarve</h4>
          <div className="oe_date_item_info">
            <p>Algarve, Portugal</p>
            <p className="oe_date_item_date">TBD</p>
            <a href="/oa" className="oe_date_item_link">
              Click here for more
            </a>
          </div>
        </a>
        <a href="/wow" className="oe_dates_item">
          <img className="oe_date_img " src={WowLogo} alt="" />
          <h4 className="oe_date_item_title">WOW</h4>
          <div className="oe_date_item_info">
            <p>Wanyi Park, Viroinval, Belgium</p>
            <p className="oe_date_item_date">TBD</p>
            <a href="/wow" className="oe_date_item_link">
              Click here for more
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OE_DatesBar;
