import React from "react";
import Loader from "../images/Loader.gif";

const HomeLoading = () => {
  return (
    <div className="home-alert-wrapper">
      <img src={Loader} alt="HomeLoading" className="loader-home" />
    </div>
  );
};

export default HomeLoading;