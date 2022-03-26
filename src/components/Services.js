import React from "react";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <div className="services-page" id="services">
      <div className="heading m-auto">
        <h1>We Offer</h1>
        <span className="bg-dark"></span>
      </div>

      <div className="services-page-content">
        <Fade bottom>
          <div className="item">
            <div className="icon">
              <i className="fas fa-money-check-alt"></i>
            </div>
            <p className="text"> Remittance</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="item">
            <div className="icon">
              <i className="fas fa-wine-bottle"></i>
            </div>
            <p className="text"> Beer & Soda</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="item">
            <div className="icon">
              <i className="fas fa-archive"></i>
            </div>
            <p className="text"> ATM machine</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="item">
            <div className="icon">
              <i className="fas fa-smoking"></i>
            </div>
            <p className="text"> Cigrarette & Cigar</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="item">
            <div className="icon">
              <i className="fas fa-copy"></i>
            </div>
            <p className="text"> Newspaper & Photocopy</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="item">
            <div className="icon">
              <i className="fas fa-hamburger"></i>
            </div>
            <p className="text"> Hot and Cold Sandwiches</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="item item-last">
            <div className="icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <p className="text"> Latin, Asian & European Grocery</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Services;
