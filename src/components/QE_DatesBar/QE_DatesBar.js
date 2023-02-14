import React from "react";

import Logo from "../../media/logo.png";

// import logo from "../../media/Fth/logo.pgn";

import FthLogo from "../../media/Fth/FthLogo.png";

import "./QE_DatesBar.css";

const QE_DatesBar = () => {
  return (
    <div>
      <div className="qe_dates_container">
        <h3 className="qe_title">QUALIFYING</h3>
        <h3 className="qe_title under">EVENTS</h3>
        <a href="/fth" className="qe_dates_item">
          <img className="qe_date_img" src={FthLogo} alt="" />
          <h4 className="qe_date_item_title">Float The Highlands</h4>
          <div className="qe_date_item_info">
            <p>Glencoe Mountain, Scotland, United Kingdom</p>
            <p className="qe_date_item_date">23/06/2023 - 26/06/2023</p>
            <a href="/fi" className="qe_date_item_link">
              Click here for more
            </a>
          </div>
        </a>
        <div className="qe_dates_item">
          <img className="qe_date_img" src={Logo} alt="" />
          <h4 className="qe_date_item_title">Title</h4>
          <h5 className="qe_date_item_date">01/03/2023</h5>
          <a href="/fi" className="qe_date_item_link">
            Click here for more
          </a>
        </div>
        <div className="qe_dates_item">
          <img className="qe_date_img" src={Logo} alt="" />
          <h4 className="qe_date_item_title">Title</h4>
          <h5 className="qe_date_item_date">01/03/2023</h5>
          <a href="/fi" className="qe_date_item_link">
            Click here for more
          </a>
        </div>
      </div>
    </div>
  );
};

export default QE_DatesBar;
