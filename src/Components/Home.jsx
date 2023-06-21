import React from "react";
import Bg from "./Bg";
import Info from "./Info";
import Visitables from "./Visitables";
import Map from "./Map";

const Home = () => {
  return (
    <div className="home">
      <Bg />
      <Info />
      <Visitables />
      <Map />
    </div>
  );
};

export default Home;
