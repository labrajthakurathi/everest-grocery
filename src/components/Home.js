import React, { Fragment, useState } from "react";
import Landing from "./Landing";
import Services from "./Services";
import Gallery from "./Gallery";
import Review from "./Review";
import Contact from "./Contact";
import Location from "./Location";

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <Location />
    </Fragment>
  );
};

export default Home;
