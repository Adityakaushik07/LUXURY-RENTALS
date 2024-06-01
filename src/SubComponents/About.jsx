import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
            <h1>ABOUT US</h1>
            <p>
              Welcome to Luxury Rentals, your premier destination for luxury
              vacation rentals. Founded in 2010, we have been committed to
              providing our clients with an unparalleled luxury rental
              experience.
            </p>
            <p>
            Our team of dedicated professionals is passionate about travel and committed to ensuring that each of our clients enjoys a seamless and personalized rental experience. We offer a comprehensive range of services, including 24/7 customer support, concierge services, and bespoke travel planning, to ensure that every aspect of your stay is taken care of.
            </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
