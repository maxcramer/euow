import React from "react";

import QE_DatesBar from "../../components/QE_DatesBar/QE_DatesBar.js";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="img_cover_home">
        <h1 className="home_dummy_text">VIDEO / IMAGE</h1>
      </div>
      <QE_DatesBar />
    </div>
  );
};

export default Home;
