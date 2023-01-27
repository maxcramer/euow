import React from "react";

import facebook from "../media/facebook.png";
import instagram from "../media/instagram.png";
import youtube from "../media/youtube.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer ">
      <div className="container">
        <div className="row">
          {/* column 1 */}
          <div className="col">
            <h4>European Onewheel League</h4>
            <ul className="list-unstyled">
              <li>info@TBD.com</li>
              <li>Europe</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col">
            {/* <h4>Pages</h4>
            <ul className="list-unstyled">
              <li>Sponsors</li>
              <li>Other Items</li>
            </ul> */}
          </div>
          {/* column 3  */}
          <div className="col">
            {/* <h4>Other</h4>
            <ul className="list-unstyled">
              <li>Sponsors</li>
              <li>Other Items</li>
            </ul> */}
          </div>
        </div>
        <hr />
        <div className="row icons">
          <a
            href="https://www.instagram.com/floatthehighlands/"
            target="_blank"
          >
            <img className="icon" src={instagram} alt="instagram icon" />
          </a>
          <a href="https://www.facebook.com/floatthehighlands" target="_blank">
            <img className="icon" src={facebook} alt="facebook icon" />
          </a>
          <a
            href="https://youtube.com/channel/UCPI4M6oPKCszuSAFTz1Jp9Q"
            target="_blank"
          >
            <img
              className="icon"
              src={youtube}
              alt="youtube icon"
              target="_blank"
            />
          </a>
        </div>
        <div>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} European Onewheel League | All
            rights reserved |{" "}
            <a className="link_style" href="/rules&regs">
              Terms of service
            </a>{" "}
            |{" "}
            <a className="link_style" href="">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
