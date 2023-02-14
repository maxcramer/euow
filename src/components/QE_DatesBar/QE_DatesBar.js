import React from "react";

import Logo from "../../media/logo.png";

// import logo from "../../media/Fth/logo.pgn";

import FthLogo from "../../media/Fth/FthLogo.png";
import LogoFi from "../../media/Fi/Logo/LogoFi.png";
import SorLogo from "../../media/Sor/Logo/SorLogo.png";
import "./QE_DatesBar.css";

const QE_DatesBar = () => {
  return (
    <div className="qe_bg">
      <div className="qe_title_container">
        <h3 className="qe_title">QUALIFYING</h3>
        <h3 className="qe_title under">EVENTS</h3>
      </div>
      <div className="qe_dates_container">
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
        <a href="/fi" className="qe_dates_item">
          <img
            className="qe_date_img fi_logo qe_date_img_bg_white"
            src={LogoFi}
            alt=""
          />
          <h4 className="qe_date_item_title">Float Italia</h4>
          <div className="qe_date_item_info">
            <p>Gattinara, Italy</p>
            <p className="qe_date_item_date">26/05/2023 - 28/05/2023</p>
            <a href="/fi" className="qe_date_item_link">
              Click here for more
            </a>
          </div>
        </a>
        <a href="/fi" className="qe_dates_item">
          <img
            className="qe_date_img sor_logo qe_date_img_bg_white"
            src={SorLogo}
            alt=""
          />
          <h4 className="qe_date_item_title">Suisse Onewheel Racing</h4>
          <div className="qe_date_item_info">
            <p>Switzerland</p>
            <p className="qe_date_item_date">TBD</p>
            <a href="/fi" className="qe_date_item_link">
              Click here for more
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default QE_DatesBar;
