import React from "react";

import About from "../../components/About/About.js";
import OE_DatesBar from "../../components/OE_DatesBar/OE_DatesBar.js";
import QE_DatesBar from "../../components/QE_DatesBar/QE_DatesBar.js";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="img_cover_home">
        <h1 className="home_dummy_text">VIDEO / IMAGE</h1>
      </div>
      <About />
      <QE_DatesBar />
      <OE_DatesBar />
    </div>
  );
};

export default Home;
