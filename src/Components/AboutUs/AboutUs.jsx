import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>
          
          </p>
          <p>
          At Luxury Rentals, we believe that every vacation should be a unique and memorable experience. That&apos;s why we handpick each property in our portfolio for its distinctive charm and character. From beachfront villas to mountain chalets, city apartments to country estates, we offer a wide range of luxury properties to suit every taste and preference.
          </p>
          <p>
          We are proud of the trust and loyalty we have earned from our clients over the years. Our commitment to excellence, our attention to detail, and our passion for delivering unforgettable experiences have made us a leader in the luxury rental industry.
          Join us at Luxury Rentals and discover a world of luxury, comfort, and unforgettable experiences. We look forward to welcoming you to our family of satisfied clients.

          </p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
