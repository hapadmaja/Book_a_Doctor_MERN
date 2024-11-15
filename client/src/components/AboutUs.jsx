import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
             We prioritize your comfort and well-being. Our friendly staff
             and state-of-the-art facilities ensure a positive healthcare experience.
             Experience exceptional healthcare tailored to your needs.
             This portal range of medical services,backed by years of
             experience and advanced expertise.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
