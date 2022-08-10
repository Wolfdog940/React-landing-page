import React from "react";

//include images into your bundle

import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Bottom from "./Bottom.jsx";

const Home = () => {
  return (
    <div className="">
      <div className="container-fluid m-0 sticky-top p-0 ">
        <Navbar />
      </div>
      <Header />
      <Body />

      <Bottom />
    </div>
  );
};

export default Home;
